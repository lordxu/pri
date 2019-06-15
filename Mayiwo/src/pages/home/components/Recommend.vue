<template>
  <div class="recommend">
    <div class="title-bar">
      <i class="iconfont">·&#xe658;</i>
      <span>
        推荐攻略
      </span>
      <i class="iconfont">&#xe65a;·</i>
    </div>

    <div class="recommend-article" v-for="item in recommendData" :key="item.id">
      <router-link to="/detail">
        <div class="recommend-title">
          <i v-if="item.head" class="index-first">蜂首</i>
          <span>{{ item.title }}</span>
        </div>
      </router-link>
      <div class="recommend-detail">
        <img class="introduce-image" :src="item.detailImgUrl">
        <div class="recommend-content">
          <div class="summary">
            {{ item.content }}
          </div>
          <div class="info">
            <span class="browsing-time">{{ item.browsingTime }}浏览</span>
            <span class="other">
              <span v-if="item.author">
                <span>{{ item.author }}</span>
                <img class="avatar" :src="item.avatarUrl">
              </span>
              <span v-else class="type" :style="{color: item.color}">
                {{ item.typeName }}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommenddata: Array
  },
  computed: {
    recommendData () {
      return this.recommenddata
    }
  }
}
</script>

<style scoped lang="scss">
  @import '~style/_public.scss';
  .title-bar {
    width: 100%;
    line-height: 3.44rem;
    font-size: 1.5rem;
    text-align: center;
    background: $bg-light-gray;
    color: $font-content-gray;
    .iconfont {
      margin: 1rem;
      font-size: 1rem;
      vertical-align: middle;
    }
  }
  .recommend-title {
    padding: 1.12rem 5.63rem 0 1.5rem;
    font-size: 1.9rem;
    .index-first {
      width: 4rem;
      position: absolute;
      right: 0;
      border-radius: .2rem;
      line-height: 2.1rem;
      font-size: 1.3rem;
      text-align: center;
      background: $font-button-orange;
      color: #eee;
    }
  }
  .recommend-detail {
    padding: .9rem 1.5rem 1.5rem;
    .introduce-image {
      width: 13rem;
      height: 9rem;
      float: left;
    }
    .recommend-content {
      overflow: hidden;
      margin-left: 14.6rem;
      .summary {
        min-height: 5.3rem;
        margin-bottom: 1rem;
        padding-top: .53rem;
        // 多行文本省略号
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        font-size: 1.4rem;
        line-height: 1.82rem;
        color: $font-content-gray;
      }
      .info {
        width: 20rem;
        line-height: 2rem;
        // background: lightblue;
        font-size: 1.2rem;
        color: $font-content-gray;
        .other {
          float: right;
          .avatar {
            width: 2rem;
            height: 2rem;
            margin: 0 .5rem;
            border-radius: 1rem;
          }
          .type {
            display: inline-block;
            margin-right: .2rem;
            padding: 0 .7rem;
            border-radius: .3rem;
            border: 1px solid;
            line-height: 1.6;
          }
        }
      }
    }
  }
</style>
