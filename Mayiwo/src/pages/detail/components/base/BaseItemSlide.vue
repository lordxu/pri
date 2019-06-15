<template>
  <div class="item-slide">
    <div class="item-class">{{ className }}</div>
    <div class="item-container" :ref="itemRef">
      <ul class="item-wrapper">
        <li class="item" v-for="item in items" :key="item.id">
          <img :src="item.imgUrl" alt="" class="item-image">
          <div class="item-name">{{ item.name }}</div>
          <div class="item-remark">{{ item.remark }} 蜂评</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseItemSlide',
  props: {
    itemdata: Object
  },
  data () {
    return {
      itemRef: ''
    }
  },
  computed: {
    className () {
      return this.itemdata['className'];
    },
    items () {
      return this.itemdata['data'];
    }
  },
  beforeMount () {
    this.$store.commit('increment')
    this.itemRef = 'slide-item-' + this.$store.state.slideItemIndex
  },
  mounted () {
    this.scroll = new this.BScroll(this.$refs[this.itemRef], {
      scrollX: true,
      eventPassthrough: 'vertical'
    })
  }
}
</script>

<style scoped lang="scss">
  @import '~style/_public.scss';
  .item-slide {
    min-height: 20rem;
    border-bottom: 1px solid $line-gray;
    .item-class {
      padding: 1.5rem 1.5rem 1rem;
      margin: 0 1rem;
      font-weight: 300;
      font-size: 1.6rem;
    }
    .item-container {
      overflow: hidden;
      .item-wrapper {
        overflow: hidden;
        width: 57rem;
        padding: 0 1.3rem;
        font-weight: 300;
        color: $font-drak-gray;
        line-height: normal;
        .item {
          float: left;
          width: 10.1rem;
          padding-left: 1.3rem;
          .item-image {
            width: 100%;
            height: 7.1rem;
          }
          .item-name {
            display: -webkit-box;
            overflow: hidden;
            padding-top: 1rem;
            font-size: 1.5rem;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
          .item-remark {
            font-size: 1.2rem;
          }
        }
      }
    } 
  }
</style>

