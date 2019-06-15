// 基础向量类

module.exports = class Vector {
  constructor (x, y) {
    this.x = x
    this.y = y
  }

  // 模
  getMagnitude () {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
  }

  // 向量和
  add (vector) {
    return new Vector(this.x + vector.x, this.y + vector.y)
  }

  // 向量差
  subtract (vector) {
    return new Vector(this.x - vector.x, this.y - vector.y)
  }

  // 点积（数量积）
  dotProduct (vector) {
    return this.x * vector.x + this.y * vector.y
  }

  // 取垂直
  perpendicular () {
    return new Vector(this.y, -this.x)
  }

  // 标准化
  normalize () {
    let v = new Vector(0, 0)
    let m = this.getMagnitude()
    if(m !== 0){
      v.x = this.x / m
      v.y = this.y / m
    }
    return v
  }

  // 正交化
  normal () {
    return this.perpendicular().normalize()
  }
}
