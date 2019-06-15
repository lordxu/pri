<template>
  <div class="details">
    <div class="app-info">
      <img src="https://n4-q.mafengwo.net/s10/M00/2A/88/wKgBZ1noacWAXpsRAAAUSFUYyHw816.png" alt="" class="logo">
      <div class="app-detail">
        <div class="app-name">马蜂窝旅游</div>
        <div class="app-rank">(65812)</div>
      </div>
    </div>

    <p class="page-info">90%用户在用，体验更好，离线省流量</p>

    <div class="user">
      <img src="https://p2-q.mafengwo.net/s1/M00/10/92/wKgBm02WjWuQHJ-qAAAn1XnqSoo16.jpeg?imageMogr2%2Fthumbnail%2F%2146x46r%2Fgravity%2FCenter%2Fcrop%2F%2146x46%2Fquality%2F90" alt="" class="user-avatar">
      <img src="https://b1-q.mafengwo.net/s9/M00/7F/D4/wKgBs1dEGeyAN9z7ABI96iOOhjY84.jpeg?imageMogr2%2Fthumbnail%2F%2146x46r%2Fgravity%2FCenter%2Fcrop%2F%2146x46%2Fquality%2F90" alt="" class="user-avatar">
      <img src="https://n3-q.mafengwo.net/s10/M00/A2/39/wKgBZ1nAwx-ACRROAAJ2xcdiIKk68.jpeg?imageMogr2%2Fthumbnail%2F%2146x46r%2Fgravity%2FCenter%2Fcrop%2F%2146x46%2Fquality%2F90" alt="" class="user-avatar">
      <img src="https://n1-q.mafengwo.net/s4/M00/FE/AE/wKgBwU_IfrGN3WhJAAAZGVVvPAM23.jpeg?imageMogr2%2Fthumbnail%2F%2146x46r%2Fgravity%2FCenter%2Fcrop%2F%2146x46%2Fquality%2F90" alt="" class="user-avatar">
      <img src="https://n2-q.mafengwo.net/s10/M00/57/0F/wKgBZ1nuo0aAJDg8AACepq75XZM53.jpeg?imageMogr2%2Fthumbnail%2F%2146x46r%2Fgravity%2FCenter%2Fcrop%2F%2146x46%2Fquality%2F90" alt="" class="user-avatar">
      1亿用户信赖
    </div>

    <div class="app-link">
      打开马蜂窝体验
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchAppInfo'
}
</script>

<style scoped lang="scss">
  @import '~style/_public.scss';
  .details {
    margin-top: 2rem;
    text-align: center;
    .app-info {
      display: inline-block;
      .logo {
        width: 4.1rem;
        margin-right: 1rem;
        float: left;
      }
      .app-detail {
        float: left;
        .app-name {
          line-height: 2.5rem;
          font-size: 1.6rem;
          text-align: center;
        }
        .app-rank {
          font-size: 1.2rem;
          color: $font-content-gray;
          padding-left: 5rem;
          background: url(https://n4-q.mafengwo.net/s10/M00/2D/39/wKgBZ1nwUKCAR3d0AAAVs0YQPIg164.png);
          background-size: 5rem 1.2rem;
          background-repeat: no-repeat;
        }
      }
    }
    .page-info {
      font-size: 1.6rem;
      padding-top: 1rem;
    }
    .user {
      padding: 1rem;
      font-size: 1.2rem;
      color: $font-content-gray;
      .user-avatar {
        width: 2.3rem;
        padding: .2rem;
        margin-left: -1rem;
        border-radius: 1.35rem;
        border: 1px solid $font-content-gray;
        background: #fff;
      }
    }
    .app-link {
      width: 18rem;
      margin: auto;
      border-radius: 1.9rem;
      line-height: 3.8rem;
      font-size: 1.6rem;
      background: $bg-yellow;
    }
  }
</style>
