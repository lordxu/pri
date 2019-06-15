<template>
  <div>
    <detail-header></detail-header>
    <detail-introduce></detail-introduce>
    <detail-article></detail-article>
    <detail-rank></detail-rank>
    <detail-visit-route></detail-visit-route>
    <detail-answer></detail-answer>
  </div>
</template>

<script>
import DetailHeader from './components/Header'
import DetailIntroduce from './components/Introduce'
import DetailArticle from './components/Article'
import DetailRank from './components/Rank'
import DetailVisitRoute from './components/VisitRoute'
import DetailAnswer from './components/Answer'

export default {
  name: 'Detail',
  components: {
    DetailHeader,
    DetailIntroduce,
    DetailArticle,
    DetailRank,
    DetailVisitRoute,
    DetailAnswer
  }
}
</script>

<style sroped lang="scss">
  @import '~style/_public.scss';
</style>
