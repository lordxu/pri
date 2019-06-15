<template>
  <div class="detail-header">
    <div class="header-logo"></div>
    <div class="header-anchor">
      <router-link to="/">
        <div class="to-home">
          官网首页
        </div>
      </router-link>
      <router-link to="/search">
        <div class="to-search">
          <i class="iconfont search-icon">&#xe60c;</i>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader'
}
</script>

<style sroped lang="scss">
  @import '~style/_public.scss';
  .detail-header {
    width: 100%;
    height: 5rem;
    border-bottom: 1px solid $bg-light-gray;
    line-height: 5rem;
    font-size: 1.5rem;
    color: $font-button-orange;
    overflow: hidden;
    .header-logo {
      float: left;
      width: 13.2rem;
      height: 100%;
      padding: 1rem 1.5rem;
      box-sizing: border-box;
      background-image: url(https://css.mafengwo.net/mobile/images/header/logo2.png);
      background-origin: content-box;
      background-clip: content-box;
      background-position: left 0 bottom 0;
      background-size: contain;
      background-repeat: no-repeat;
    }
    .header-anchor {
      float: right;
      height: 100%;
      text-align: center;
      .to-home {
        display: inline-block;
        width: 9.3rem;
      }
      .to-search {
        display: inline-block;
        width: 5rem;
      }
    }
  }
</style>
