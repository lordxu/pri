// 基本形状类
var Vector = require("./vector.js");
var Projection = require('./projection.js');

module.exports = class Shape {
  constructor () {
    this.x = undefined
    this.y = undefined
    this.strokeStyle = "rgba(255, 253, 208, 0.9)"
    this.fillStyle = "rgba(147, 197, 114, 0.8)"
  }
  
  // 与其他形状碰撞
  collideWith (shape) {
    let axes = this.getAxes().concat(shape.getAxes())
    return !this.separateOnAxes(axes, shape)
  }

  // 分离轴判定碰撞
  // *********参考**********
  separateOnAxes (axes, shape) {
    let minimumOverlap = 10000
    let overlap = undefined
    let axisWithSmallsetOverlap = undefined

    for (let i=0; i < axes.length; i++) {
      axis = axes[i]
      projection1 = shape.project(axis)
      projection2 = this.project(axis)
      overlap = projection1.overlaps(projection2)

      // 在任意分离轴上无重叠，overlaps()返回0，无碰撞发生
      if(overlap === 0){
        return {
          axis: undefined,
          overlap: 0
        }
      } else {
          if (overlap < minimumOverlap) {
              minimumOverlap = overlap
              axisWithSmallsetOverlap = axis
          }
      }
    }

    // 返回最小分离轴和重叠量
    return {
      axis: axisWithSmallsetOverlap,
      overlap: minimumOverlap
    }
  }

  // 在轴上的投影
  project (axis) {
    throw 'project(axis) is not implemented'
  }

  // 获取轴
  getAxes () {
    throw 'getAxes() is not implemented'
  }

  // 移动
  move (dx, dy) {
    throw 'move(dx, dy) is not implemented'
  }

  // 创建形状路径
  createPath (cxt) {
    throw 'createPath(ctx) is not implemented'
  }

  fill (cxt) {
    cxt.save()
    cxt.fillStyle = this.fillStyle
    this.createPath(cxt)
    cxt.fill()
    cxt.restore()
  }

  stroke (cxt) {
    cxt.save()
    cxt.strokeStyle = this.strokeStyle
    this.createPath(cxt)
    cxt.stroke()
    cxt.restore()
  }

  // 判定点是否在路径中
  isPointInPath (cxt, x, y) {
    this.createPath(cxt)
    return cxt.isPointInPath(x, y)
  }
}
