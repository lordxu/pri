<template>
  <div class="item-container">
    <div class="item-title">{{ title }}</div>
    <div class="item-content">
      <div class="item-row">
        <div class="content" v-html="content"></div>
        <div class="image-wrapper">
          <img :src="imgUrl" alt="" class="image">
        </div>
      </div>
      <div class="item-row">
        <div class="info">
          {{ info.visitor }} 浏览 · {{ info.answer }} 回答 · {{ info.support }} 顶
        </div>
        <div class="author">
          <img :src="author.avatar" alt="" class="avatar">
          <span class="name">{{ author.name }}</span>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseAnswerItem',
  props: {
    title: String,
    content: String,
    imgUrl: String,
    info: Object,
    author: Object
  }
}
</script>

<style scoped lang="scss">
  @import '~style/_public.scss';
  .item-container {
    height: 20rem;
    padding: 1.5rem 0;
    border-bottom: 1px solid $line-gray;
    .item-title {
      padding-top: .5rem;
      font-weight: 700;
      font-size: 1.6rem;
    }
    .item-content {
      display: table;
      width: 100%;
      margin-top: 1.25rem;
      font-weight: 300;
      div {
        display: table-cell;
        vertical-align: top;
      }
      .item-row {
        display: table-row;
        .content {
          display: -webkit-box;
          overflow: hidden;
          padding-right: .8rem;
          font-size: 1.25rem;
          line-height: 2.4rem;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 4;
        }
        .image {
          width: 15.8rem;
          height: 9.8rem;
        }
        .info {
          padding-top: 1.25rem;
          font-size: 1.2rem;
          line-height: 3.5rem;
        }
        .author {
          padding-top: 1.25rem;
          text-align: right;
          .avatar {
            width: 2.2rem;
            height: 2.2rem;
            border-radius: 1.1rem;
          }
          .name {
            font-size: 1.4rem;
            line-height: 3.5rem;
            vertical-align: middle;
          }
        }
      }
    }
  }
</style>
