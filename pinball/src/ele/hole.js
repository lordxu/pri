// 球洞

var Sprite = require('../runtime/sprite');
var Painter = require('../runtime/painter');
var Circle = require('../runtime/circle');
var sounds = require('../ele/music');
var global = require('../global');

var holePainter = new Painter('./assets/img/hole.png');
var holes = [];

var holePos = [
  {
    "left": 10,
    "top": 20
  },
  {
    "left": 370,
    "top": 20
  },
  {
    "left": 730,
    "top": 20
  },
  {
    "left": 10,
    "top": 362
  },
  {
    "left": 370,
    "top": 362
  },
  {
    "left": 730,
    "top": 362
  }
]

holePos.forEach(function (value, index) {
  var hole = new Sprite('hole', holePainter);
  var radius = 30;
  hole.setSite(value.left, value.top, 2 * radius, 2 * radius);
  hole.entity = new Circle(value.left + radius, value.top + radius, radius);
  hole.entity.express = hole;
  // 检测是否进球
  hole.behaviors.push({
    name: 'contain',
    execute: function (self) {
      for (var i = global.ballList.length - 1; i >= 0; i--){
        var ball = global.ballList[i];
        var deltaX = self.entity.x - ball.entity.x;
        var deltaY = self.entity.y - ball.entity.y;
        var dis = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        if (dis < (self.entity.radius - .6 * ball.entity.radius)) {
          global.ballList.splice(i, 1);
          sounds.playGoal();
        };
      }
    }
  })
  holes.push(hole);
})

module.exports = holes;
