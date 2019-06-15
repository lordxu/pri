// 桌球类,继承自Sprite类

var Sprite = require('../runtime/sprite');
var Circle = require('../runtime/circle');
var global = require('../global');
var sounds = require('../ele/music');

module.exports = class Ball extends Sprite {
  constructor (name, painter, ballCenterX, ballCenterY, ballRaidus) {
    super(name, painter);

    this.setSite(ballCenterX - ballRaidus, ballCenterY - ballRaidus, ballRaidus * 2, ballRaidus * 2);

    this.entity = new Circle(ballCenterX, ballCenterY, ballRaidus);
    this.entity.express = this;
    
    // 球对象的过程组
    this.setVal();
    this.setMotion();
    this.testMoving();

    this.collideRroup = [];
    // 最后将构造的桌球对象加入桌球数组
    global.ballList.push(this);
  }

  // 减慢物体运动速度
  setVal () {
    this.fraction = .99;

    this.behaviors.push({
      name: 'fraction',
      execute: function(self) {
        var fraction = self.fraction;
        if (Math.pow(self.vx, 2) + Math.pow(self.vy, 2) < 2) {
          fraction = .98;
        }
        if (Math.abs(self.vx) < .1 && Math.abs(self.vy) < .1) {
          self.setVelocity(0, 0);
        }
        self.setVelocity(fraction, fraction, true);
      }
    })
  }

  // 直线运动和碰撞过程
  setMotion () {
    this.behaviors.push(
      {
        name: 'motion-and-collision',
        execute: function (self) {
          // ** 可设粒度的碰撞检测，存在问题 **
          var slice = 1;
          for (var i = 0; i < slice; i++) {
            // 移动球
            self.x += self.vx / slice;
            self.y += self.vy / slice;
            self.entity.x += self.entity.vx / slice;
            self.entity.y += self.entity.vy / slice;
            // 检测与每个球的碰撞
            global.ballList.forEach(function (ball) {
              if (ball.name !== self.name) {
                var dis = magnitude(self.entity.x - ball.entity.x, self.entity.y - ball.entity.y);
                // 球心距小于半径之和，发生碰撞
                if (dis < self.entity.radius + ball.entity.radius) {
                  sounds.playCollide();
                  // 先将两球分离
                  resetPos(self.entity, ball.entity, slice);
                  // 改变两球的速度
                  ballCollide(self.entity, ball.entity);
                }
              }
            })
          }
        }
      }
    )
  }

  // 检测静止/运动的过程
  testMoving () {
    this.behaviors.push(
      {
        name: 'test-is-moving',
        execute: function (self) {
          if (self.vx === 0 && self.vy === 0) {
            self.isMoving = false;
          } else {
            self.isMoving = true;
          }
        }
      }
    )
  }
}

// 两球碰撞，改变速度
function ballCollide (ballA, ballB) {
  var vA = magnitude(ballA.vx, ballA.vy);
  var angleA = getAngle(0, 0, ballA.vx, ballA.vy);
  var vB = magnitude(ballB.vx, ballB.vy);
  var angleB = getAngle(0, 0, ballB.vx, ballB.vy);

  // 计算B球相对A球的角度
  var angleAtoB = getAngle(ballA.x, ballA.y, ballB.x, ballB.y);

  // 如果A球或B球是静止的，设定其初始速度方向为A-B球心连线方向
  if (angleA === 'none') {
    angleA = angleAtoB;
  } else if (angleB === 'none') {
    angleB = angleAtoB;
  }

  // 计算两球速度在以A-B球心连线方向为x轴的直角坐标系(ABO坐标系)中的分量
  var angleRelA = angleA - angleAtoB;
  var angleRelB = angleB - angleAtoB;
  var vxRelA = vA * Math.cos(angleRelA);
  var vyRelA = vA * Math.sin(angleRelA);
  var vxRelB = vB * Math.cos(angleRelB);
  var vyRelB = vB * Math.sin(angleRelB);

  // 交换两球在ABO坐标系中x方向的速度分量，y方向速度分量不变
  [vxRelA, vxRelB] = [vxRelB, vxRelA];

  angleRelA = getAngle(0, 0, vxRelA, vyRelA);
  angleRelB = getAngle(0, 0, vxRelB, vyRelB);

  // 合成正坐标系中的速度
  angleA = angleRelA + angleAtoB;
  angleB = angleRelB + angleAtoB;
  vA = magnitude(vxRelA, vyRelA);
  vB = magnitude(vxRelB, vyRelB);

  ballA.express.setVelocity(vA * Math.cos(angleA), vA * Math.sin(angleA));
  ballB.express.setVelocity(vB * Math.cos(angleB), vB * Math.sin(angleB));
}

// 将两球分离
function resetPos (ballA, ballB, slice) {
  var curDis = magnitude(ballB.x - ballA.x, ballB.y - ballA.y);
  var idealDis = ballA.radius + ballB.radius;
  if (curDis >= idealDis) {
    return false;
  }

  // 计算前一位置
  var prevPosAX = ballA.x - ballA.vx / slice;
  var prevPosAY = ballA.y - ballA.vy / slice;
  var prevPosBX = ballB.x - ballB.vx / slice;
  var prevPosBY = ballB.y - ballB.vy / slice;
  var prevDis = magnitude(prevPosBX - prevPosAX, prevPosBY - prevPosAY);

  // 要移动的比率
  var ratio = (prevDis - idealDis - .1) / (prevDis - curDis);

  // 将两球的位置更改为刚好要发生碰撞时的位置
  ballA.setPosition(prevPosAX + ratio * ballA.vx / slice, prevPosAY + ratio * ballA.vy);
  ballB.setPosition(prevPosBX + ratio * ballB.vx / slice, prevPosBY + ratio * ballB.vy);
}

function magnitude (x, y) {
  return Math.sqrt(x * x + y * y);
}

// 获取(x2, y2)相对(x1, y1)的角度
function getAngle (x1, y1, x2, y2) {
  var deltaX = x2 - x1;
  var deltaY = y2 - y1;
  if (deltaY === 0) {
    if (deltaX > 0) {
      return 0;
    } else if (deltaX < 0) {
      return Math.PI;
    } else {
      return 'none';
    }
  }
  return Math.acos(deltaX / magnitude(deltaX, deltaY)) * deltaY / Math.abs(deltaY);
}
