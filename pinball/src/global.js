/* 
*  管理各部件公用的数据和方法
*  ballList: 保存所有的桌球对象
*  stageIndex: 当前关卡数
*  stageLength: 总关卡数
*  preState: 当前游戏状态之前的一个活动状态
*  once & freeze & restore: 作用于函数，目的是限制其执行次数
*/

module.exports = {
  ballList: [],
  stageIndex: 0,
  stageLength: 3,
  preState: undefined,
  once: function (func) {
    if (func._once === undefined || func._once === 0) {
      return func;
    } else {
      return function () {};
    }
  },
  freeze: function (func) {
    func._once = 1;
  },
  restore: function (func) {
    if (func._once === 1) {
      func._once = 0;
    }
  },
  isActive: function (func) {
    return !func._once;
  }
};

