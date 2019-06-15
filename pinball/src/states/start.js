/* 
*  开始界面
*  handler: 点击事件flag 1 -- 点击事件发生
*  timeI: 时间系数
*/

var global = require('../global');

var handler = undefined;
var timeI = 1;
var cover_img = new Image();

var start = {
  name: 'state-start',
  init,
  enter,
  leave,
  update,
  render,
}

// 状态初始化
function init () {
  cover_img.src = "./assets/img/cover.png";
}

// 状态进入状态栈调用
function enter (window, canvas, ctx) {
  handler = undefined;
  canvas.addEventListener('mouseup', handleMouseUp, false);
}

// 状态离开状态栈调用
function leave (window, canvas, ctx) {
  global.stageIndex = 1;
  global.preState = start.name;
  canvas.removeEventListener('mouseup', handleMouseUp);
}

// 状态更新
function update () {
  if (handler === 1) {
    if (global.preState === undefined) {
      // 初次开始游戏，切换到游戏状态
      return ['switch', 'play'];
    } else {
      // 重新开始游戏，游戏状态已存在，直接将本状态出栈
      return ['pop', null];
    }
  }
  timeI += 0.03;
}

// 状态渲染
function render (window, canvas, ctx) {
  if (cover_img.complete) {
    ctx.drawImage(cover_img, 0, 0, canvas.width, canvas.height);
  }
  renderText(ctx);
}

// 绘制提示文字
function renderText (ctx) {
  ctx.save();
  ctx.font = "30px Comic Sans MS, cursive, sans-serif";
  var opacity = Math.abs(Math.sin(timeI));
  ctx.fillStyle = 'rgba(0, 0, 0, ' + opacity + ')';
  ctx.fillText("Press Start", 470, 300);
  ctx.restore();
}

function handleMouseUp (e) {
  handler = 1;
}

module.exports = start;
