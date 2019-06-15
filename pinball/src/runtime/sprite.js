// 基础精灵类

module.exports = class Sprite {
  constructor (name, painter, behaviors) {
    if(name !== undefined){
      this.name = name;
    }
    if(painter !== undefined){
      this.painter = painter;
    }
    this.setSite(0, 0, 32, 32)
    this.vx = 0;
    this.vy = 0;
    this.visible = true;
    this.moving = false;
    // 每一帧需要更新的行为组
    this.behaviors = behaviors || [];
    this.entity = undefined;

    return this;
  }

  // 设置位置
  setSite (x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  // 设置速度
  setVelocity(x, y, ratio) {
    if (! ratio) {
      this.vx = x;
      this.vy = y;
      if (this.entity) {
        this.entity.vx = x;
        this.entity.vy = y;
      }
    } else {
      this.vx *= x;
      this.vy *= y;
      if (this.entity) {
        this.entity.vx *= x;
        this.entity.vy *= y;
      }
    }
  }

  // 绘制
  paint (context) {
    if(this.painter && this.visible){
        this.painter.paint(this, context)
    }
  }

  // behaviour对象需要暴露execute方法
  update () {
    for(var i=0; i<this.behaviors.length; i++){
      var behavior = this.behaviors[i];
      // 单个过程的idle属性为true, 则跳过它
      if (behavior.idle !== true) {
        var result = behavior.execute(this);
      }
      // 若某个过程返回'interrupt', 放弃执行后续过程
      if (result === 'interrupt') {
        break;
      } 
    }
  }
}
