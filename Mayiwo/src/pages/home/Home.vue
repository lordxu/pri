<template>
  <div>
    <home-header></home-header>
    <home-swiper :swipersrc="swiperSrcList"></home-swiper>
    <home-icon-list :iconlist="iconListData"></home-icon-list>
    <home-recommend :recommenddata="recommendDada"></home-recommend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIconList from './components/IconList'
import HomeRecommend from './components/Recommend'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIconList,
    HomeRecommend
  },
  data () {
    return {
      swiperSrcList: [],
      recommendDada: [],
      iconListData: []
    }
  },
  methods: {
    getInfo () {
      this.axios.get('/api/index.json')
           .then(this.getInfoSucc)
    },
    getInfoSucc (res) {
      res = res.data
      if (res.ret) {
        const data = res.data
        this.swiperSrcList = data.swiperSrcList
        this.recommendDada = data.recommendDada
        this.iconListData = data.iconListData
      }
    }
  },
  mounted () {
    this.getInfo()
  }
}
</script>

<style scoped lang="scss">

</style>
