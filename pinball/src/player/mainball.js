// 主球

var Painter = require('../runtime/painter');
var Ball = require('./ball');
var sounds = require('../ele/music');

var mainBallPainter = new Painter('./assets/img/ball_main.png');

var mainBall = new Ball('mainBall', mainBallPainter, 150, 150, 10);

// 将主球置于初始位置(球桌中线上的开始点)
mainBall.reset = function () {
  this.entity.x = 200;
  this.entity.y = 221;
  this.x = 200 - this.entity.radius;
  this.y = 221 - this.entity.radius;
  this.setVelocity(0, 0);
}

mainBall.reset(); 

// 通过击杆力度和角度设置初速度
mainBall.strike = function (strength, rot) {
  var v = strength;
  var vx = -v * Math.cos(rot);
  var vy = -v * Math.sin(rot);
  this.setVelocity(vx, vy);
  sounds.playStrike();
}

module.exports = mainBall;
