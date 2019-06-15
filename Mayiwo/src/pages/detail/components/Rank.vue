<template>
  <div class="rank">
    <div class="header">中国玩乐排行</div>
    <base-item-slide
      :itemdata="sceneryData"
    ></base-item-slide>
    <base-item-slide
      :itemdata="delicacyData"
    ></base-item-slide>
  </div>
</template>

<script>
import BaseItemSlide from './base/BaseItemSlide'
export default {
  name: 'DetailRank',
  components: {
    BaseItemSlide
  },
  data () {
    return {
      sceneryData: {
        className: '热门景点',
        data: [
          {
            imgUrl: 'https://b2-q.mafengwo.net/s11/M00/29/87/wKgBEFtetlGAZQEPABW9s6DLrUs93.jpeg?imageMogr2%2Fthumbnail%2F%21200x140r%2Fgravity%2FCenter%2Fcrop%2F%21200x140%2Fquality%2F100',
            name: '桂林千古情景区',
            remark: 1086
          },
          {
            imgUrl: 'https://b3-q.mafengwo.net/s9/M00/2F/9E/wKgBs1cWRpCACWlSAAdObOdTPvo56.jpeg?imageMogr2%2Fthumbnail%2F%21200x140r%2Fgravity%2FCenter%2Fcrop%2F%21200x140%2Fquality%2F100',
            name: '故宫',
            remark: 12184
          },
          {
            imgUrl: 'https://n4-q.mafengwo.net/s8/M00/E1/A4/wKgBpVUjXyCAKaW9AA4hMmldTew50.jpeg?imageMogr2%2Fthumbnail%2F%21200x140r%2Fgravity%2FCenter%2Fcrop%2F%21200x140%2Fquality%2F100',
            name: '秦始皇兵马俑博物馆',
            remark: 9470
          },
          {
            imgUrl: 'https://b3-q.mafengwo.net/s8/M00/6B/C9/wKgBpVW04GWASRcLAAwS_ra-T5U03.jpeg?imageMogr2%2Fthumbnail%2F%21200x140r%2Fgravity%2FCenter%2Fcrop%2F%21200x140%2Fquality%2F100',
            name: '鼓浪屿',
            remark: 12293
          },
          {
            imgUrl: 'https://p2-q.mafengwo.net/s5/M00/A6/DC/wKgB3FF2eN-ABcy7ABChbKHc9gk06.jpeg?imageMogr2%2Fthumbnail%2F%21200x140r%2Fgravity%2FCenter%2Fcrop%2F%21200x140%2Fquality%2F100',
            name: '泸沽湖',
            remark: 5881
          }
        ]
      },
      delicacyData: {
        className: '美食排行',
        data: [
          {
            imgUrl: 'https://b1-q.mafengwo.net/s6/M00/FB/B0/wKgB4lItYuCALF2FAAs9xguDWBw52.jpeg?imageMogr2%2Fthumbnail%2F%21200x140r%2Fgravity%2FCenter%2Fcrop%2F%21200x140%2Fquality%2F100',
            name: '花姐家川味海鲜加工店(第一市场总店)',
            remark: 14158
          },
          {
            imgUrl: 'https://b4-q.mafengwo.net/s11/M00/43/55/wKgBEFpEldqAZhtHAAEUrl3E8aM29.jpeg?imageMogr2%2Fthumbnail%2F%21200x140r%2Fgravity%2FCenter%2Fcrop%2F%21200x140%2Fquality%2F100',
            name: '四川小胡子海鲜加工店(第一市场旗舰店)',
            remark: 14169
          },
          {
            imgUrl: 'https://n4-q.mafengwo.net/s10/M00/D8/8B/wKgBZ1lIl4OAdfB0AAHCPMPKets51.jpeg?imageMogr2%2Fthumbnail%2F%21200x140r%2Fgravity%2FCenter%2Fcrop%2F%21200x140%2Fquality%2F100',
            name: '林姐香味海鲜(第一市场总店)',
            remark: 9470
          },
          {
            imgUrl: 'https://b2-q.mafengwo.net/s11/M00/3C/FA/wKgBEFt1iBWAFQMCAAFpr_zqkH080.jpeg?imageMogr2%2Fthumbnail%2F%21200x140r%2Fgravity%2FCenter%2Fcrop%2F%21200x140%2Fquality%2F100',
            name: '梅姐川味海鲜加工店(新民街店)',
            remark: 13513
          },
          {
            imgUrl: 'https://p4-q.mafengwo.net/s11/M00/50/37/wKgBEFpNzciAOCK6AADEWdeREnQ29.jpeg?imageMogr2%2Fthumbnail%2F%21200x140r%2Fgravity%2FCenter%2Fcrop%2F%21200x140%2Fquality%2F100',
            name: '嗲嗲的椰子鸡（明珠广场店）',
            remark: 1751
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import '~style/_public.scss';
  .rank {
    padding-bottom: 1rem;
    .header {
      margin: 0 1.2rem;
      padding-left: .9rem;
      border-left: .4rem solid $font-button-orange;
      font-weight: 700;
      font-size: 1.6rem;
      line-height: 1.7rem; 
    }
  }
</style>

