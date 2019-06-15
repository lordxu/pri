// 三个关卡

var gameBall1 = [
    {
      x: 350,
      y: 350,
      color: 'black',
      radius: 10
    }
  ];

var gameBall2 = [
    {
      x: 225,
      y: 198,
      color: 'black',
      radius: 10
    },
    {
      x: 390,
      y: 320,
      color: 'blue',
      radius: 10
    },
  ];

var gameBall3 = (function () {
  var gameBall = []

  var targetPos = [];
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j <= i; j++) {
      targetPos.push({
        x: 550 + 25 * i,
        y: 221 - 12.5 * i + 25 * j
      })
    }
  }

  targetPos.forEach(function (pos) {
    gameBall.push({
      x: pos.x,
      y: pos.y,
      color: 'red',
      radius: 10
    })
  })

  return gameBall;
})()


module.exports = {
  stage1: {
    gameBall: gameBall1
  },
  stage2: {
    gameBall: gameBall2
  },
  stage3: {
    gameBall: gameBall3
  }
}