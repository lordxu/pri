/*
* 游戏状态管理器
* 参考了hump的gamestate.lua文件(https://github.com/vrld/hump)
*
*/

function NOOP () {}

// 状态栈
var stack = [];

var stack_init = {
  leave: NOOP
}

stack.push(stack_init);

var gameState = {};

// 状态切换
gameState.switch = function (to, ...arg) {
  return changeState(0, to, ...arg);
}

// 新状态入栈
gameState.push = function (to, ...arg) {
  return changeState(1, to, ...arg);
}

// 活动状态出栈
gameState.pop = function (noop, ...arg) {
  if (stack.length < 2) {
    throw "Error in gameState: not enough states."
  }
  var pre = stack.pop();
  ;(pre.leave || NOOP)(...arg);
  var to = stack[stack.length - 1];
  return (to.resume || NOOP)(pre, ...arg);
}

function changeState (offset, to, ...arg) {
  var pre = stack[stack.length - 1];
  // 任何状态的init方法只被执行一次
  ;(to.init || NOOP)(to);
  to.init = undefined;
  
  ;(pre.leave || NOOP)(...arg);
  if (offset === 0) {
    stack[stack.length - 1] = to;
  } else if (offset === 1) {
    stack.push(to);
  }
  
  return (to.enter || NOOP)(...arg)
}

// 获取状态栈的浅拷贝副本
gameState.getStack = function () {
  return stack.slice();
}

module.exports = gameState;
