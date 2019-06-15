<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of srcList" :key="item.id">
        <img class="swiper-image" :src="item.src" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  // 组件名称不能重名
  name: 'HomeSwiper',
  props: {
    swipersrc: Array
  },
  computed: {
    srcList () {
      return this.swipersrc
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import '~style/_public.scss';
  // 样式穿透
  .wrapper /deep/ .swiper-pagination-bullet-active {
    background: $font-button-orange !important;
  }
  .wrapper /deep/ .swiper-pagination-bullet {
    width: 3.3rem;
    height: .5rem;
    margin: 0;
    border-radius: .2rem;
  }
  .wrapper {
    width: 100%;
    height: 0;
    padding-bottom: 56.3%;
    background: $bg-pre-load;
    .swiper-image {
      width: 100%;
    }
    
  }
</style>
