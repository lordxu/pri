$(document).ready(function () {
  // 加入.more对应的图标(右箭头)
  $('.more').append($('<i class="iconfont icon-youjiantou">&#xe644;</i>'));

  // 加入article部分对应的图标
  $('.content-wrapper .record .comment')
    .prepend($('<i class="iconfont icon-duihuakuang1">&#xe61e;</i>'))
    .siblings('.love')
    .prepend($('<i class="iconfont icon-icon4">&#xe61a;</i>'))
    .siblings('.money')
    .prepend($('<i class="iconfont icon-qianbi1">&#xe69e;</i>'));

  // 创建轮播图
  $(".swiper").createSwiper(5000, true);

  // 下载二维码的显示/隐藏
  $(".download .detail").hover(function () {
    $(".download .qr-detail").toggle();
  }, function () {
    $(".download .qr-detail").toggle();
  })

  // article下方横条动画
  $("section.article-summary:last .content-wrapper")
    .children()
    .first()
    .width('50%')
    .next()
    .children().first()
    .animateLoop({'width': '30%'}, {'width': '100%'}, 500, 'swing')
    .next()
    .animateLoop({'width': '100%'}, {'width': '30%'}, 500, 'swing')
    .parent()
    .next()
    .children()
    .css({'display': 'inline-block',
          'width': '60px'
        })
    .addClass('disguised')

  // < 768px 显示/隐藏搜索框
  $(".search-cascade").on("click", function () {
    $('.search-detail-wrapper').toggle();
  })

  // > 768px 隐藏搜索框
  window.onresize = function () {
    if (window.innerWidth > 768) {
      $('.search-detail-wrapper').css('display', 'none');
    }
  }

  // 引入新的img标签
  // 解决IE8,backgound-size不兼容
  var appVersion = getBrowserVersion();
  if (appVersion.length === 2 && appVersion[1] === "8.0") {
    var backgroundEle = $('.symbol .symbol-container')
                          .children()
                          .css("padding-left", 0);
    for (var i = 0; i < backgroundEle.length; i ++) {
      var tmpele = backgroundEle.eq(i);
      var backgroundUrl = tmpele.css("background-image").match(/src\/.+[jpg|png]/);
      tmpele.css("background", "none")
            .prepend($("<img src='" + backgroundUrl[0] + "'>")
                      .height('32px')
                      .css({"float": "left", "margin-right": "8px"})
                    );
    }
  }

  function getBrowserVersion () {
    var appInfo = navigator.appVersion;
    if (/MSIE/.test(appInfo)) {
      return appInfo.match(/MSIE ([0-9.]+)/);
    } else {
      return appInfo.match(/^[0-9.]+/);
    }
  }
})

