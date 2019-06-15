<template>
  <div class="header">
    <router-link to="/">
      <div class="header-left"></div>
    </router-link>
    
    <div class="header-input">
      <router-link to="/search">
        <div class="input-wrapper">
          <input class="input-area" type="text" placeholder="搜索目的地/攻略/游记">
          <a class="iconfont search-icon">&#xe60c;</a>
        </div>
      </router-link>
    </div>

    <div class="header-right">
      <span class="login-button">登录</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style scoped lang="scss">
  @import '~style/_public.scss';
  .header {
    width: 100%;
    padding-top: 1.5rem;
    padding-bottom: 1rem;
    font-size: 1.2rem;
    display: flex;
    .header-left {
      width: 8.1rem;
      height: 2.5rem;
      margin: 0 2rem 0 1rem;
      background: url(https://css.mafengwo.net/mobile/images/header/logo2.png) no-repeat center;
      background-size: contain;
    }
    .header-input {
      flex: 1;
      margin-left: -1rem;
      white-space: nowrap;
      .input-wrapper {
        margin-right: 2rem;
      }
      .input-area {
        width: 100%;
        height: 2.5rem;
        padding: 0 1rem;
        background: $bg-light-gray;
        border-radius: 1.25rem;
      }
      .search-icon {
        @include set-icon-font(-3rem, 1.5rem, false);
      }
    }
    .header-right {
      width: 4rem;
      line-height: 2.5rem;
      text-align: center;
      .login-button {
        color: $font-button-orange;
        font-size: 1.4rem;
      }
    }
  }
</style>
