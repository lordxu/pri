// 提示框

var Sprite = require('../runtime/sprite');
var Painter = require('../runtime/painter');
var Timer = require('../runtime/timer');

var boardPainter = new Painter('./assets/img/hardboard.png');

boardPainter.paint = function (sprite, context) {
  if (boardPainter.image.complete) {
    context.drawImage(this.image, sprite.x, sprite.y, sprite.w, sprite.h);
  }
}

var board = new Sprite('board', boardPainter);

board.setSite(-300, 150, 300, 150);

board.behaviors.push(
  {
    name: 'fly-in',
    execute: function (self) {
      if (self.x < 250) {
        self.x += 20;
      }
      return 'interrupt';
    }
  },
  {
    name: 'fly-out',
    execute: function (self) {
      if (self.x < 800) {
        self.x += 20;
      }
    }
  }
)

module.exports = board;
