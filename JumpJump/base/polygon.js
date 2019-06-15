// 多边形类，继承自shape
var Vector = require("./vector.js");
var Projection = require("./projection.js");
var Shape = require("./shape.js");
var enhance = require("./enhance.js");

module.exports = class Polygon extends Shape {
  constructor (points=[]) {
    super()
    this.points = points;
  }

  addPoint (x, y) {
    this.points.push({x: x, y: y});
  }

  // 碰撞检测，检测与圆形和多边形碰撞
  collideWith (shape) {
    if(shape.radius !== undefined){
        return enhance.polygonCollidesWithCircle(this, shape);
    }else{
        return enhance.polygonCollidesWithPolygon(this, shape);
    }
  }

  // 获得与各边垂直的单位向量组
  getAxes () {
    let v1 = new Vector()
    let v2 = new Vector()
    let axes = []

    for(let i=0; i < this.points.length - 1; i++){
        v1.x = this.points[i].x
        v1.y = this.points[i].y

        v2.x = this.points[i+1].x
        v2.y = this.points[i+1].y

        axes.push(v1.subtract(v2).normal())
    }
    v1.x = this.points[i].x
    v1.y = this.points[i].y

    v2.x = this.points[0].x
    v2.y = this.points[0].y
    axes.push(v1.subtract(v2).normal())

    return axes
  }

  // 在对应轴上的投影
  project (axis) {
    let scalars = []
    let v = new Vector()

    this.points.forEach(function(point){
        v.x = point.x
        v.y = point.y
        scalars.push(v.dotProduct(axis))
    })

    return new Projection(Math.min.apply(Math, scalars), Math.max.apply(Math, scalars))
  }

  // 图形路径
  createPath (cxt) {
    if (this.points.length === 0) {
        return 
    }
    cxt.beginPath()
    cxt.moveTo(this.points[0].x, this.points[0].y)
    for (let i=0; i < this.points.length; i++) {
        cxt.lineTo(this.points[i].x, this.points[i].y)
    }
    cxt.closePath();
  }

  // 移动
  move (dx, dy) {
    for(let i=0, point; i < this.points.length; i++){
        point = this.points[i]
        point.x += dx
        point.y += dy
    }
  }
}

