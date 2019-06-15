<template>
  <div class="advertise">
    <img :src="imgUrl" alt="" class="advertise-img">
    <div class="info">点击查看大图   {{ love }}  <span class="iconfont">&#xe62a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseImgDisplay',
  props: {
    imgUrl: String,
    love: Number
  }
}
</script>

<style scoped lang="scss">
  @import '~style/_public.scss';
  .advertise {
    .advertise-img {
      width: 100%;
    }
    .info {
      margin: 1rem 1rem 0;
      text-align: right;
      white-space: pre;
      font-size: 1.2rem;
      line-height: 1.6rem;
      .iconfont {
        vertical-align: -.1rem;
      }
    }
  }
</style>

