// 多边形类，继承自shape

var Vector = require("./vector.js");
var Shape = require("./shape.js");

module.exports = class Rectangle extends Shape {
  constructor (x, y, w, h) {
    super()
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  // 碰撞检测，检测与圆形的碰撞
  collideWithCircle (circle) {
    if (circle.x + circle.radius > this.x + this.w || circle.x - circle.radius < this.x) {
      circle.x -= circle.vx;
      circle.vx = -circle.vx;
      // 更新精灵对象
      if (circle.express !== undefined) {
        circle.express.x = circle.x - circle.radius;
        circle.express.vx = circle.vx;
      }
    } else if (circle.y + circle.radius > this.y + this.h || circle.y - circle.radius < this.y) {
      circle.y -= circle.vy;
      circle.vy = -circle.vy;
      // 更新精灵对象
      if (circle.express !== undefined) {
        circle.express.y = circle.y - circle.radius;
        circle.express.vy = circle.vy;
      }
    }
  }
  
  // 图形路径
  createPath (cxt) {
    cxt.beginPath();
    cxt.rect(this.x, this.y, this.w, this.h);
    cxt.closePath();
  }

  // 移动
  move (dx, dy) {
    this.x += dx;
    this.y += dy;
  }
}

