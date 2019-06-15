// 球杆

var Sprite = require('../runtime/sprite');
var Painter = require('../runtime/painter');
var mainBall = require('../player/mainball');
var Timer = require('../runtime/timer');
var global = require('../global');

var barPainter = new Painter('./assets/img/bar.png');
// 旋转角度
barPainter.rot = Math.PI;
// 主球与球杆间的距离
barPainter.offset = 20;
barPainter.paint = function (sprite, context) {
  if (barPainter.image.complete) {
    context.save();
    context.strokeStyle = "#000";
    context.translate(mainBall.x + mainBall.entity.radius, mainBall.y + mainBall.entity.radius);
    context.rotate(barPainter.rot);
    // 绘制球杆
    context.drawImage(this.image, barPainter.offset, sprite.y, sprite.w, sprite.h);
    // 绘制指针线
    context.beginPath();
    context.moveTo(-20, 0);
    context.lineTo(-420, 0);
    context.closePath();
    context.stroke();
    context.restore();
  }
}

var bar = new Sprite('bar', barPainter);

/* 
*  cast: 蓄力状态
*  hide: 隐藏
*  strength: 力度，随蓄力时间增加
*  maxStrength: 最大力度
*  timer: 定时器，用于设置增加力度的时间间隔
*/

bar.setSite(0, 0, 300, 8);
bar.cast = false;
bar.hide = false;
bar.strength = 0;
bar.maxStrength = 20;
bar.timer = new Timer();

bar.behaviors.push(
  {
    name: 'hide',
    execute: function (self) {
      for (var i = 0; i < global.ballList.length; i++) {
        var ball = global.ballList[i];
        // 场上有球在滚动，则不显示球杆并不执行后续动作
        if (ball.isMoving) {
          self.visible = false;
          return 'interrupt';
        }
      }
      // 主球入洞，也不显示球杆并不执行后续动作
      if (global.ballList.indexOf(mainBall) === -1) {
        self.visible = false;
        return 'interrupt';
      }
      self.visible = true;
    }
  },
  {
    name: 'addStrength',
    execute: function (self) {
      if (self.cast) {
        if (! self.timer.isRunning()) {
          self.timer.reset();
          self.timer.start();
        } else if (self.timer.getElapsedTime() > 60) {
          self.addStrength();
          self.timer.reset();
          self.timer.start();
        }
      }
    }
  }
)

// 增加击球力度
bar.addStrength = function () {
  if (bar.strength < bar.maxStrength) {
    bar.strength += 1;
    // 增加球杆离主球的距离
    bar.painter.offset += 2;
  }
}

// 重置击球力度和球杆与主球的相对距离
bar.resetStrength = function () {
  bar.strength = 0;
  bar.painter.offset = 10;
  setTimeout(function () {
    bar.painter.offset = 20;
    bar.hide = true;
  }, 100);
}

module.exports = bar;
