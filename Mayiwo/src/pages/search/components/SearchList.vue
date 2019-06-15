<template>
  <div>
    <div class="search-wrapper">
      <div class="input-wrapper">
        <i class="iconfont search-icon">&#xe60c;</i>
        <input
          v-model="keyword" 
          type="text" 
          class="search-input" 
          placeholder="搜索目的地/攻略/游记/问答"
          @focus="$emit('input-focus')"
          @blur="keyword === '' && $emit('input-blur')"
        >
      </div>

      <router-link to="/">
        <div class="cancel">取消</div>
      </router-link>
    </div>

    <div class="search-content" v-show="keyword">
      <ul ref="scrollWrapper">
        <li
          v-for="item in resultList"
          :key="item.id"
          class="search-item"
        >{{ item.name }}</li>
        <li 
          class="search-item"
          v-show="listIsEmpty"
        >未查询到结果</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchList',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      resultList: [],
      timer: null
    }
  },
  computed: {
    listIsEmpty () {
      return this.resultList.length == 0
    }
  },
  watch: {
    keyword () {
      if (!this.keyword) {
        this.resultList = []
        return
      }
      if (this.timer === null) {
        // 设置节流
        this.timer = setTimeout(() => {
          const result = []
          for (let i in this.cities) {
            this.cities[i].forEach((value) => {
              if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                result.push(value)
              }
            })
          }
          this.resultList = result
          this.timer = null
        }, 100)
      }
    }
  },
  mounted () {
    // 使用better-scroll
    this.scroll = new this.BScroll(this.$refs.scrollWrapper)
  }
}
</script>

<style scoped lang="scss">
  @import '~style/_public.scss';
  .search-wrapper {
    margin: 1rem;
    height: 3rem;
    font-size: 1.4rem;
    .input-wrapper {
      float: left;
      width: 100%;
      height: 100%;
      padding-right: 3.5rem;
      box-sizing: border-box;
      line-height: 3rem;
      color: $bg-pre-load;
      .search-icon {
        position: absolute;
        vertical-align: middle;
        margin-left: 1rem;
      }
      .search-input {
        width: 100%;
        height: 100%;
        padding-left: 3rem;
        box-sizing: border-box;
        border-radius: .5rem;
        background: $bg-light-gray;
      }
    }
    .cancel {
      float: left;
      width: 3rem;
      line-height: 3rem;
      margin-left: -3rem;
      color: $font-button-orange;
    }
  }

  .search-content {
    width: 100%;
    position: absolute;
    font-size: 1.5rem;
    .search-item {
      padding: 1.2rem 2.5rem 1.0rem .9rem;
      border-bottom: 1px solid $bg-light-gray;
      line-height: 2.8rem;
      background: #fff;
      &:before {
        content: '';
        display: inline-block;
        width: 2.2rem;
        height: 2.2rem;
        margin-right: .5rem;
        vertical-align: .7ex;
        position: relative;
        top: 1.1rem;
        background-image: url(https://css.mafengwo.net/mobile/images/sug_i.png);
        background-size: 2.2rem 11rem;
      }
    }
  }
</style>
