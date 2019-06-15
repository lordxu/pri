// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 状态管理
import store from './store'
// 公用函数
import usual from './usual'
// 样式重置
import 'style/reset.css'
// 1px边框
import 'style/border.css'
// 图标字体
import 'style/iconfont.css'
// 消除300ms延迟
import FastClick from 'fastclick'
// 轮播图组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// 导入axios
import axios from 'axios'
// 滑动组件
import BScroll from 'better-scroll'

Vue.prototype.axios = axios
Vue.prototype.BScroll = BScroll
Vue.prototype.usual = usual

Vue.config.productionTip = false
FastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
// 根据窗口自动改变字体大小
usual.resetFontSize();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
