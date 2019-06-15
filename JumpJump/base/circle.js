// 圆类，继承自shape
var Vector = require("./vector.js");
var Projection = require("./projection.js");
var Shape = require("./shape.js");
var enhance = require("./enhance.js");

module.exports = class Circle extends Shape {
  constructor (x, y, radius) {
    super()
    this.x = x
    this.y = y
    this.radius = radius
  }

  addPoint (x, y) {
    this.points.push({x: x, y: y});
  }

  // 碰撞检测，检测与圆形和多边形碰撞
  collideWith (shape) {
    if(shape.radius !== undefined){
        return enhance.circleCollidesWithCircle(this, shape)
    }else{
        return enhance.polygonCollidesWithCircle(shape, this)
    }
  }

  // 圆形没有分离轴
  getAxes () {}

  // 在对应轴上的投影
  project (axis) {
    let scalars = []
    let point = new Vector(this.x, this.y)
    let dotProduct = point.dotProduct(axis)

    scalars.push(dotProduct)
    scalars.push(dotProduct + this.radius)
    scalars.push(dotProduct - this.radius)
    return new Projection(Math.min.apply(Math, scalars), Math.max.apply(Math, scalars))
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
}
