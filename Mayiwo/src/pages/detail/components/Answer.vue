<template>
  <div class="answer">
    <div class="gap"></div>

    <div class="content">
      <div class="header">相关问答</div>

      <ul class="tab-wrapper">
        <div class="tab-item wrapper-title">{{ tabData.title }}</div>
        <li class="tab-item" v-for="item in tabData.itemData" :key="item.id">
          <span>{{ item.name }}</span>
          <span class="describe">{{ item.describe }}</span>
        </li>
      </ul>

      <div class="answer-item" v-for="item in answerData" :key="item.id">
        <base-answer-item
          :title="item.title"
          :content="item.content"
          :imgUrl="item.imgUrl"
          :info="item.info"
          :author="item.author"
        ></base-answer-item>
      </div>
    </div>
  </div>
</template>

<script>
import BaseAnswerItem from './base/BaseAnswerItem'
export default {
  name: 'DetailAnswer',
  components: {
    BaseAnswerItem
  },
  data () {
    return {
      tabData: {
        title: '全部',
        itemData: [
          {
            id: '0001',
            name: '交通攻略',
            describe: '519'
          },
          {
            id: '0002',
            name: '住哪儿好',
            describe: '509'
          },
          {
            id: '0003',
            name: '行程玩法',
            describe: '小众玩法'
          },
          {
            id: '0004',
            name: '吃什么',
            describe: '32'
          },
          {
            id: '0005',
            name: '签证',
            describe: '324'
          },
          {
            id: '0006',
            name: '电话卡',
            describe: '128'
          },
          {
            id: '0007',
            name: '旅行花费',
            describe: '19'
          },
          {
            id: '0008',
            name: '贝加尔湖',
            describe: '攻略'
          }
        ]
      },
      answerData: [
        {
          id: 'answer-001',
          title: '想元旦去海参崴，天气大概多少度？可以开飞机吗？',
          content: '在海参崴一个小岛上，谷歌地图搜Lighthouse能找到。机场下飞机后做107路公交或者小火车，到海参崴老火车站下车。能看看西伯利亚铁路终点9288的碑。107出去机场马路对面就有公交站。小火车进站口在机场大厅右手边（面向exit大门）会有标示。',
          imgUrl: 'https://b3-q.mafengwo.net/s12/M00/AD/FF/wKgED1vLk2aAQVRsAAMQQQO_Fzc78.jpeg?imageMogr2%2Fthumbnail%2F%21300x200r%2Fgravity%2FCenter%2Fcrop%2F%21300x200%2Fquality%2F90',
          info: {
            visitor: 33360,
            answer: 2,
            support: 6
          },
          author: {
            avatar: 'https://n1-q.mafengwo.net/s10/M00/0E/9E/wKgBZ1uDDVWAfIYDAAVa2u7dHPM19.jpeg?imageMogr2%2Fthumbnail%2F%2190x90r%2Fgravity%2FCenter%2Fcrop%2F%2190x90%2Fquality%2F90',
            name: '一生所爱'
          }
        },
        {
          id: 'answer-002',
          title: '在国外使用哪个导航软件',
          content: '<b>首先谢邀！</b> <b>到国外的话使用导航最好分两种情况：</b> <b>一、在线导航软件</b> 1、Goolge maps 2、Sygic国外地图 3、Tomtom 4、NaviGon <b>二、离线导航软件（支持离线GPS定位）</b> 1、Maps with me 2、City Maps2 Go 3、Offline Maps 4、2GIS（奥维离线地图）',
          imgUrl: 'https://b3-q.mafengwo.net/s10/M00/60/61/wKgBZ1irNHOATUhaAAbcxAl5EEQ10.jpeg?imageMogr2%2Fthumbnail%2F%21300x200r%2Fgravity%2FCenter%2Fcrop%2F%21300x200%2Fquality%2F90',
          info: {
            visitor: 363125,
            answer: 7,
            support: 5
          },
          author: {
            avatar: 'https://b1-q.mafengwo.net/s8/M00/1A/58/wKgBpVX1adKAYewxAAeHyTcZNmM00.jpeg?imageMogr2%2Fthumbnail%2F%2190x90r%2Fgravity%2FCenter%2Fcrop%2F%2190x90%2Fquality%2F90',
            name: 'Parkney'
          }
        },
        {
          id: 'answer-003',
          title: '《七月与安生》场景里那个灯塔的取景地在海参崴的哪里？怎么去？',
          content: '在海参崴一个小岛上，谷歌地图搜Lighthouse能找到。机场下飞机后做107路公交或者小火车，到海参崴老火车站下车。能看看西伯利亚铁路终点9288的碑。107出去机场马路对面就有公交站。小火车进站口在机场大厅右手边（面向exit大门）会有标示。',
          imgUrl: 'https://b2-q.mafengwo.net/s8/M00/65/58/wKgBpVX1o2aARSkAAAPkI-Ni7Bk81.jpeg?imageMogr2%2Fthumbnail%2F%21300x200r%2Fgravity%2FCenter%2Fcrop%2F%21300x200%2Fquality%2F90',
          info: {
            visitor: 65535,
            answer: 9,
            support: 3
          },
          author: {
            avatar: 'https://n1-q.mafengwo.net/s9/M00/07/F5/wKgBs1hJRimAdPeiAAvZzqkUptc95.jpeg?imageMogr2%2Fthumbnail%2F%2190x90r%2Fgravity%2FCenter%2Fcrop%2F%2190x90%2Fquality%2F90',
            name: 'Job'
          }
        }
      ]
    }
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
    padding: 1.2rem 1.8rem;
    .header {
      margin: 0 1.2rem;
      padding-left: .9rem;
      border-left: .4rem solid $font-button-orange;
      font-weight: 700;
      font-size: 1.6rem;
      line-height: 1.7rem;
      &:after {
        content: '大家都在看';
        font-weight: 400;
        font-size: 1.4rem;
        margin-left: .5rem;
      }
    }
    .tab-wrapper {
      overflow: hidden;
      padding-top: 1.8rem;
      .tab-item {
        float: left;
        margin: 0 1.1rem .5rem 0;
        padding: 0 .8rem;
        border-radius: .5rem;
        font-weight: 300;
        font-size: 1.4rem;
        line-height: 3.6rem;
        background: rgb(239, 239, 239);
        .describe {
          color: red;
        }
      }
    }
  }
</style>
