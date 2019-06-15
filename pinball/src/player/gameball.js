// 返回构造其他球的函数

var Painter = require('../runtime/painter');
var Ball = require('./ball');
var stage = require('./stage');
var global = require('../global');

var painters = {
  'black': new Painter('./assets/img/ball_black.png'),
  'blue': new Painter('./assets/img/ball_blue.png'),
  'red': new Painter('./assets/img/ball_red.png'),
}

module.exports = function () {
  var stg = stage['stage' + global.stageIndex];
  stg.gameBall.forEach(function (ball, index) {
    new Ball('gameBall' + index, painters[ball.color], ball.x, ball.y, ball.radius);
  })
}
