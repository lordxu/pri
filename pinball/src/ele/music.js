// 集中管理所有音效

class Music {
  constructor () {
    this.bgmCollide = new Audio();
    this.bgmCollide.src = './assets/sound/collide.wav';

    this.bgmGoal = new Audio();
    this.bgmGoal.src = './assets/sound/goal.wav';

    this.bgmStrike = new Audio();
    this.bgmStrike.src = './assets/sound/strike.wav';
  }

  playCollide () {
    this.bgmCollide.currentTime = 0;
    this.bgmCollide.play();
  }

  playGoal () {
    this.bgmGoal.currentTime = 0;
    this.bgmGoal.play();
  }

  playStrike () {
    this.bgmStrike.currentTime = 0;
    this.bgmStrike.play();
  }
}

module.exports = new Music();
