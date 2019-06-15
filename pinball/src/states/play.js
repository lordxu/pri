/* 
*  游戏状态
*  
*/

var table = require('../ele/table');
var holes = require('../ele/hole');
var bar = require('../ele/bar');
var mainBall = require('../player/mainball');
var createGameBall = require('../player/gameball');
var global = require('../global');

var backData = undefined;
var play = {
  name: 'state-play',
  // init,
  enter,
  leave,
  resume,
  update,
  render,
};

// 状态初始化
function init () {
  global.stageIndex = 1;
  mainBall.reset();
  createGameBall();
}

// 状态进入状态栈调用
function enter (window, canvas, ctx) {
  if (global.preState === 'state-start') {
    init();
  }
  canvas.addEventListener('mousemove', handleMouseMove, false);
  canvas.addEventListener('mousedown', handleMouseDown, false);
  canvas.addEventListener('mouseup', handleMouseUp, false);
}

// 状态离开状态栈调用
function leave (window, canvas, ctx) {
  global.preState = play.name;
  canvas.removeEventListener('mousemove', handleMouseMove);
  canvas.removeEventListener('mousedown', handleMouseDown);
  canvas.removeEventListener('mouseup', handleMouseUp);
}

// 状态恢复
function resume (pre, window, canvas, ctx) {
  global.restore(changeState);
  enter(window, canvas, ctx);
}

// 状态更新
function update () {
  backData = undefined;

  // 更新桌球位置
  global.ballList.forEach(function (ball) {
    ball.update();
    table.entity.collideWithCircle(ball.entity);
  })
  // 进洞检测
  holes.forEach(function (value) {
    value.update();
  })
  // 更新球杆
  bar.update();

  backData = global.once(changeState).call(null);
  if (backData !== undefined) {
    global.freeze(changeState);
  }
  return backData;
}

// 状态切换函数
function changeState () {
  if (global.ballList.indexOf(mainBall) === -1) {
    // 主球入袋
    return ['push', 'notice', 2, mainBall];
  } else if (global.ballList.length <= 1) {
    // 场上只剩主球，过关
    return ['push', 'notice', 1, mainBall];
  }
}

// 状态渲染
function render (window, canvas, ctx) {
  const width = canvas.width;
  const height = canvas.height;
  ctx.clearRect(0, 0, width, height);
  renderElement([table, holes, global.ballList, bar], ctx);
}

function renderElement (ele, ctx) {
  if (ele instanceof Array) {
    ele.forEach(function (value) {
      renderElement(value, ctx);
    })
  } else if (ele.visible) {
    ele.paint(ctx);
    // 碰撞实体
    if (ele.entity && ele.fraction) {
      ele.entity.createPath(ctx);
      ele.entity.stroke(ctx);
    }
  }
}

function handleMouseMove (e) {
  var x = e.offsetX;
  var y = e.offsetY;
  var mainBallEntityX = mainBall.entity.x;
  var mainBallEntityY = mainBall.entity.y;
  // 改变球杆角度
  var rot = Math.asin((y - mainBallEntityY) / Math.sqrt(Math.pow((x - mainBallEntityX), 2) + Math.pow(y - mainBallEntityY, 2))) + Math.PI;
  rot = (x > mainBallEntityX) ? rot : Math.PI - rot;
  bar.painter.rot = rot;
}

function handleMouseDown (e) {
  var x = e.offsetX;
  var y = e.offsetY;
  bar.cast = true;
}

function handleMouseUp (e) {
  if (bar.strength > 3) {
    mainBall.strike(bar.strength, bar.painter.rot);
  }
  bar.cast = false;
  bar.resetStrength();
}

module.exports = play;
