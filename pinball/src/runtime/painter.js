// 图片绘制器

module.exports = class ImagePainter {
  constructor (imageUrl) {
    this.image = new Image();
    this.image.src = imageUrl;
  }

  paint (sprite, context) {
    if (this.image.complete) {
      context.drawImage(this.image, sprite.x, sprite.y, sprite.w, sprite.h);
    }
  }
}

// 帧动画绘制器
class SpriteSheetPainter {
  constructor (imageUrl, cells) {
    this.cells = cells || [];
    this.cellIndex = 0;
    this.image = new Image();
    this.image.src = imageUrl;
  }

  advance () {
    if(this.cellIndex === this.cells.length - 1){
      this.cellIndex = 0;
    }else{
      this.cellIndex ++;
    }
  }

  paint (sprite, context) {
    if (this.image.complete) {
      var cell = this.cells[this.cellIndex];
      context.drawImage(this.image, cell.x, cell.y, cell.w, cell.h, sprite.left, sprite.top, sprite.width, sprite.height);
    }
  }
}

