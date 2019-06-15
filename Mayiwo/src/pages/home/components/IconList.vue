<template>
  <div class="icon-list">
    <ul class="icon-wrapper">
      <li class="icon-item" v-for="item in iconList" :key="item.id">
        <div class="icon-image-wrapper">
          <i class="icon-item-image" :style="setIconBackground(item.id)"></i>
        </div>
        <span class="icon-item-name">{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeIconList',
  props: {
    iconlist: Array
  },
  computed: {
    iconList () {
      return this.iconlist
    }
  },
  data () {
    return {
      iconImgsUrl: 'url(https://css.mafengwo.net/mobile/images/indexv4/i_nav3.png)',
    }
  },
  methods: {
    setIconBackground (id) {
      id = parseInt(id) - 1
      var offsetX = -4.6 * (id % 4) + 0.1 + 'rem'
      var offsetY = -4.6 * parseInt(id / 4) + 'rem'
      return {
        'background-image': this.iconImgsUrl,
        'background-size': `18.4rem 9.2rem`,
        'background-position': `${offsetX} ${offsetY}`
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .icon-list {
    height: 0;
    padding: 0 .75rem 50%;
    margin: .7rem 0 3rem;
    .icon-wrapper {
      width: 100%;
      .icon-item {
        float: left;
        width: 25%;
        height: 0;
        padding-bottom: 25%;
        text-align: center;
        .icon-image-wrapper {
          padding: 2rem 0 1rem;
          .icon-item-image {
            display: block;
            width: 4.6rem;
            height: 0;
            margin: auto;
            padding-bottom: 4.6rem;
            // background: lightgray;
          }
        }
        .icon-item-name {
          font-size: 1.6rem;
        }
      }
    }
  }
</style>
