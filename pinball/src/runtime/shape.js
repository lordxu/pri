// 基本形状类

module.exports = class Shape {
  constructor () {
    this.x = undefined
    this.y = undefined
    this.vx = 0
    this.vy = 0
    this.strokeStyle = "rgba(255, 253, 208, 0.9)"
    this.fillStyle = "rgba(147, 197, 114, 0.8)"
    // 与形状绑定的精灵对象(精灵用于显示，形状用来做碰撞实体)
    this.express = undefined
  }
  
  // 与其他形状碰撞
  // collideWith (shape) { }

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
