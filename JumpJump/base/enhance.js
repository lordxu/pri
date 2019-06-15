// 额外的函数
var Vector = require("./vector.js");

module.exports = {
  // 碰撞检测
  polygonCollidesWithCircle (polygon, circle) {
    let min = 10000
    let  v1 = undefined
    let  v2 = undefined
    let axes = polygon.getAxes()
    let closestPoint = getPolygonPointClosestToCircle(polygon, circle)
        
    v1 = new Vector(circle.x, circle.y)
    v2 = new Vector(closestPoint.x, closestPoint.y)

    axes.push(v1.subtract(v2).normalize())
    return polygon.separateOnAxes(axes, circle)
  },

  getPolygonPointClosestToCircle (polygon, circle) {
    let min = 10000
    let length = 0
    let testPoint = undefined
    let closestPoint = undefined
    for(let i=0; i < polygon.points.length; i++){
        testPoint = polygon.points[i]
        length = Math.sqrt(Math.pow(testPoint.x - circle.x, 2) + Math.pow(testPoint.y - circle.y, 2))
        if(length < min){
            min = length
            closestPoint = testPoint
        }
    }
    return closestPoint
  },

  polygonCollidesWithPolygon (p1, p2) {
    let mtv1 = p1.separateOnAxes(p1.getAxes(), p2)
    let mtv2 = p2.separateOnAxes(p2.getAxes(), p1)

    return mtv1.overlap < mtv2.overlap ? mtv1 : mtv2
  },

  circleCollidesWithCircle (c1, c2) {
    let distance = Math.sqrt(Math.pow(c1.x - c2.x, 2) + Math.pow(c1.y - c2.y, 2))
    let overlap = Math.abs(c1.radius + c2.radius) - distance
    const noLap = {
      axis: undefined,
      overlap: 0
    }
    const lap = {
      axis: undefined,
      overlap
    }
    return overlap < 0 ? noLap : lap
  },
}
