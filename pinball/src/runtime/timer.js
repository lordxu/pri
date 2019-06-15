// 计时器类

module.exports = class Timer {
  constructor () {
    this.reset();
  }

  // 启动
  start () {
    this.startTime = +new Date();
    this.running = true;
    this.elapsed = 0;
  }

  // 停止
  stop () {
    this.running = false;
    this.elapsed = +new Date() - this.startTime;
  }

  // 判断是否运行
  isRunning () {
    return this.running;
  }

  // 获取时间
  getElapsedTime () {
    if (this.running) {
      return +new Date() - this.startTime;
    } else {
      return this.elapsed;
    }
  }

  // 重置
  reset () {
    this.startTime = 0;
    this.running = false;
    this.elapsed = 0;
  }
}
