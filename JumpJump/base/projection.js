// 投影类

module.exports = class Projection {
  constructor (min, max) {
    this.min = this.max
  }

  // 检测重叠
  overlaps (projection){
    if (this.max > projection.min && projection.max > this.min) {
      return Math.min(Math.abs(this.max - projection.min), Math.abs(this.min - projection.max))
    } else {
      return 0
    }
  }
}
