<template>
  <div class="visit-route">
    <div class="gap"></div>
    <div class="content">
      <div class="header">玩法路线</div>
      <div class="item-container">
        <ul class="item-wrapper" ref="visit-route">
          <li
            class="item"
            v-for="(item, index) in routeData"
            :key="item.id"
          >
            <div class="item-title">{{ item.title }}</div>
            <div class="item-info">
              <span class="percent">{{ item.percent }}%</span>
              <span class="describe">的蜂蜂会选择这条线路</span>
            </div>
            <div class="item-img" :style="getBackgroundStyle(index)"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailVisitRoute',
  data () {
    return {
      routeData: [
        {
          id: '0001',
          title: '5日经典玩法',
          percent: 51,
          imgUrl: 'https://n1-q.mafengwo.net/s10/M00/45/33/wKgBZ1mniyyAJKJRAAAym3RSoFw96.jpeg?imageMogr2%2Fthumbnail%2F%21400x300r%2Fgravity%2FCenter%2Fcrop%2F%21400x300%2Fquality%2F100'
        },
        {
          id: '0002',
          title: '1日打卡路线',
          percent: 29,
          imgUrl: 'https://p1-q.mafengwo.net/s10/M00/45/4D/wKgBZ1mniz2AJq8EAAAk5L2LKBM81.jpeg?imageMogr2%2Fthumbnail%2F%21400x300r%2Fgravity%2FCenter%2Fcrop%2F%21400x300%2Fquality%2F100'
        },
        {
          id: '0003',
          title: '7日完整路线',
          percent: 39,
          imgUrl: 'https://p1-q.mafengwo.net/s10/M00/45/5F/wKgBZ1mni1CAfcheAAAvziXsHME23.jpeg?imageMogr2%2Fthumbnail%2F%21400x300r%2Fgravity%2FCenter%2Fcrop%2F%21400x300%2Fquality%2F100'
        }
      ]
    }
  },
  methods: {
    getBackgroundStyle (index) {
      return {
        background: 'url(' + this.routeData[index].imgUrl + ')'
      }
    }
  },
  mounted () {
    // 更改滑动容器宽度
    let itemWrapper = this.$refs['visit-route']
    let itemWidth = this.usual.getIntrinsicSize(itemWrapper.childNodes[0]).width
    itemWrapper.style.width = itemWidth * this.routeData.length * 1.1 + 'px'
    // 生成可滑动区域
    this.scroll = new this.BScroll(itemWrapper.parentNode, {
      scrollX: true,
      eventPassthrough: 'vertical'
    })
  }
}
</script>

<style scoped lang="scss">
  @import '~style/_public.scss';
  .gap {
    height: 1.5rem;
    background: $bg-light-gray;
  }
  .content {
    padding: 1.2rem 0 0 1.2rem;
    .header {
      margin: 0 1.2rem;
      padding-left: .9rem;
      border-left: .4rem solid $font-button-orange;
      font-weight: 700;
      font-size: 1.6rem;
      line-height: 1.7rem;
    }
    .item-container {
      overflow: hidden;
    }
    .item-wrapper {
      display: flex;
      // width: see 'mounted';
      justify-content: space-between;
      line-height: normal;
      .item {
        width: 21rem;
        min-height: 25rem;
        margin-top: 1.8rem;
        .item-title {
          font-weight: 700;
          font-size: 1.7rem;
        }
        .item-info {
          overflow: hidden;
          margin-bottom: 1rem;
          font-weight: 300;
          font-size: 1.3rem;
          .percent {
            float: left;
            padding: .4rem;
            margin-right: .2rem;
            border-radius: .4rem;
            font-weight: 700;
            background: $bg-yellow;
          }
          .describe {
            line-height: 1.6;
          }
        }
        .item-img {
          position: relative;
          width: 21rem;
          height: 14rem;
          background-repeat: no-repeat;
          background-size: cover;
          &:after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            background: inherit;
            filter: blur(1px);
          }
        }
      }
    }
  }
  
</style>
