var Circle = require("./circle.js");
var Polygon = require("./polygon.js");

var circle1 = new Circle(200, 100, 30);

var rect1 = new Polygon([ 
                          {x: 80, y: 120},
                          {x: 120, y: 130},
                          {x: 110, y: 80},
                        ]);

var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    width = canvas.width,
    height = canvas.height;

circle1.fill(ctx);
rect1.fill(ctx);

(function animate () {
  clearCanvas();
  circle1.move(.5, 0);
  circle1.fill(ctx);
  window.requestAnimationFrame(animate);
})()

function clearCanvas () {
  ctx.save();
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, width, height);
  ctx.restore();
}

angular = require('angular');
_ = require('lodash');