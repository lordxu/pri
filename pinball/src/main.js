// 游戏入口文件

// 引入状态管理器和各个状态
var gameState = require('./runtime/gameState');
var states = {
  'play': require('./states/play'),
  'notice': require('./states/notice'),
  'start': require('./states/start'),
}

window.onload = init;

function init () {
  var canvas = document.getElementById('main-canvas');
  var ctx = canvas.getContext('2d');
  var NOOP = function () {};

  // 开始状态加入状态栈
  gameState.push(states['start'], window, canvas, ctx);

  window.requestAnimationFrame(animate);

  function animate () {
    // 获取状态栈，分别对状态进行更新和渲染
    var stack = gameState.getStack();
    stack.forEach(function(state) {
      var c = (state.update || NOOP)();
      // 根据update返回值判断是否切换状态
      changeState.apply(null, c);
      (state.render || NOOP)(window, canvas, ctx);
    })
    window.requestAnimationFrame(animate);
  }

  function changeState (method, id, ...arg) {
    var method = gameState[method];
    if (typeof method === 'function') {
      method(states[id], window, canvas, ctx, ...arg);
    }
  }
}

