/* 
*  提示状态
*  handler: 点击事件flag 1 -- 点击事件发生
*  stageFlag: 1 -- 过关，进行下一关； 2 -- 主球入洞，重复这一关
*  mainBall: 主球，由play状态传递过来
*  textFlag: 提示信息的index值
*/

var board = require('../ele/board');
var global = require('../global');
var createGameBall = require('../player/gameball');
var handler = undefined;
var stageFlag = undefined;
var mainBall = undefined;
var textFlag = 1;

var backData = undefined;
var notice = {
  name: 'state-notice',
  active: false,
  noteString: [],
  init,
  enter,
  leave,
  update,
  render,
}

// 状态初始化
function init () {
  notice.noteString = [
    'Stage 1',
    'Stage 2',
    'Stage 3',
    'Nice!',
    'Trap!',
  ];
}

// 状态进入状态栈调用
function enter (window, canvas, ctx, flag, ball) {
  stageFlag = flag;
  mainBall = ball;
  handler = undefined;
  // 先冻结状态切换函数
  global.freeze(changeState);
  // 重置点击事件
  global.restore(handleMouseUp);
  // 重置提示框飞入的动作
  board.behaviors[0].idle = false;

  if (stageFlag === 2) {
    textFlag = 4;
  } else if (stageFlag === 1) {
    textFlag = global.stageIndex;
  }
  // 初始化提示框位置
  board.x = -300;
  setTimeout(
    function () {
      // 点击事件只能触发一次
      canvas.addEventListener('mouseup', handleMouseUp, false);
    }, 500
  )
}

// 状态离开状态栈调用
function leave (window, canvas, ctx) {
  global.preState = notice.name;
  canvas.removeEventListener('mouseup', handleMouseUp);
}

// 状态更新
function update () {
  backData = undefined;

  board.update();

  if (handler) {
    handler = undefined;
    setTimeout(function () {
      // 等到消息提示框完全飞出页面再恢复changeState
      global.restore(changeState);
    }, 500);
  }

  // 如果changeState被冻结，返回undefined，否则冻结changeState
  backData = global.once(changeState).call(null);
  if (backData !== undefined) {
    global.freeze(changeState);
  }
  return backData;
}

// 状态切换函数
function changeState () {
  if (global.stageIndex > global.stageLength) {
    // 通关，回到开始页面
    return ['switch', 'start'];
  } else {
    return ['pop', null];
  }
}

// 状态渲染
function render (window, canvas, ctx) {
  board.paint(ctx);
  renderText(ctx);
}

function renderText (ctx) {
  ctx.save();
  ctx.textAlign = 'center';
  ctx.font = '36px Lucida Sans Unicode, Lucida Grande, sans-serif';
  ctx.fillText(notice.noteString[textFlag], board.x + board.w / 2, board.y + board.h / 2, board.w);
  ctx.restore();
}

function handleMouseUp (e) {
  handler = 1;
  if (global.isActive(handleMouseUp)) {
    // 过关，继续关卡
    if (stageFlag === 1) {
      global.stageIndex += 1;
      if (global.stageIndex <= global.stageLength) {
        // 新的关卡，重置主球位置
        if (mainBall) {
          global.ballList.length = 0;
          mainBall.reset();
          global.ballList.push(mainBall);
        }
        createGameBall();
      }
    } else if (stageFlag === 2) {
      if (mainBall) {
        mainBall.reset();
        global.ballList.length = 0;
        global.ballList.push(mainBall);
        createGameBall();
      }
    }
    // 冻结消息提示框的飞入动作，使其显示飞出动作
    board.behaviors[0].idle = true;
    // 点击事件只被触发一次
    global.freeze(handleMouseUp);
  }
}

module.exports = notice;
