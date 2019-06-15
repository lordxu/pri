// 圆类，继承自shape

var Vector = require("./vector.js");
var Shape = require("./shape.js");

module.exports = class Circle extends Shape {
  constructor (x, y, radius) {
    super()
    this.x = x
    this.y = y
    this.radius = radius
  }

  // 图形路径
  createPath (cxt) {
    cxt.beginPath()
    cxt.arc(this.x, this.y, this.radius, 0, Math.PI*2, false)
    cxt.closePath()
  }

  // 移动
  move (dx, dy) {
    this.x += dx
    this.y += dy
  }

  // 设置位置
  setPosition (x, y) {
    this.x = x;
    this.y = y;
    if (this.express) {
      this.express.x = x - this.radius;
      this.express.y = y - this.radius;
    }
  }
}
