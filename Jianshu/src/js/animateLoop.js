;
(function () {

  $.fn.extend({
    animateLoop: function (stateone, statetwo, duration, swing, callback) {
      var that = this;
      this.animate(statetwo, duration, swing, function () {
        if (typeof callback === 'function') {
          callback();
        }
        that.animateLoop(statetwo, stateone, duration, swing, callback);
      })
      return this;
    }
  })

})()