;
(function () {

  var Swiper = function (ele, autoSwitchTime, auto) {
        // 外层容器
    var swiperWrapper = $(".swiper-wrapper", ele),
        
        // img包裹容器
        imgWrapper = $(".img-wrapper", ele)
                        .data("left", 0),
        // 所有的img元素
        imgList = imgWrapper.children(),

        // 轮播图个数
        len = imgList.length,

        // 自动播放事件句柄
        _autoPlayHandler = null,
        // 轮播下方的提示条
        indicator = $(".indicator", ele).data("index", 0)
        ;

    for (var index = 0; index < len; index ++) {
      if (index !== 0) {
        indicator.parent()
                  .append(
                    indicator.clone()
                    .data("index", index)
                  );
      }
    }
      
    indicator = indicator.parent().children();
    
    // 移除初始图片
    ele.children().first().remove();

    // 处理滑块的显示/隐藏
    ele.hover(
      function () {
        $(".swiper-control").css("z-index", 1);
        if (_autoPlayHandler) {
          clearInterval(_autoPlayHandler);
        }
      }, 
      function () {
        $(".swiper-control").css("z-index", -1);
        _autoPlayHandler = autoPlay();
      }
    )

    // 左右控制块添加点击事件
    $('.left-control', ele).on('click',
      function () {
        swiperChange(true);
      }
    ).siblings('.right-control')
      .on('click', 
        function () {
          swiperChange(false);
        }
      )

    _autoPlayHandler = autoPlay();

    // 自动轮播
    function autoPlay () {
      if (auto) {
        return setInterval(swiperChange, autoSwitchTime, true);
      }
    }

    // 图片切换
    function swiperChange (rtl) {
      // 表示左移的单位数
      var left = imgWrapper.data("left") - (rtl ? 1 : -1);

      if (left < 1 - len) {
        left = 0;
      } else if (left > 0) {
        left = 1 - len;
      }

      indicator.eq(-left)
                .css("background", "#fff")
                .siblings()
                .css("background", "#ccc");
      imgWrapper.stop().animate({"left": percentage(left)}, 500, "swing");
      imgWrapper.data("left", left);
    }

    function percentage (n) {
      return (n * 100).toString() + '%';
    }
  }

  $.fn.extend ({
    createSwiper: function (autoSwitchTime, auto) {
      Swiper(this, autoSwitchTime, auto);
      return this;
    }
  })
  
})()
