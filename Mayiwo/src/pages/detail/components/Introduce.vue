<template>
  <div>
    <div class="introduce">
      <div class="introduce-date">
        <div class="row1">
          <div class="cell1">18</div>
          <div class="cell2">2018OCT</div>
        </div>
        <div class="row2">蜂首纪念</div>
      </div>
    </div>
    <div class="introduce-image">
        <span class="iconfont icon-star">&#xe645;</span>
        <span class="iconfont icon-share">&#xe60d;</span> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailIntroduce'
}
</script>

<style scoped lang="scss">
  @import '~style/_public.scss';
  .introduce {
    height: 9.7rem;
    padding: 2rem;
    .introduce-date {
      width: 17rem;
      margin: auto;
      color: $font-drak-green;
      border-collapse: collapse;
    }
    .row1 {
      display: table;
      .cell1, .cell2 {
        display: table-cell;
        width: 50%;
        height: 5rem;
        padding-left: .5rem;
        border-left: .4rem solid;
        border-right: .4rem solid;
        vertical-align: middle;
      }
      .cell1 {
        font-size: 6rem;
        font-weight: 600;
        line-height: 5rem;
      }
      .cell2 {
        padding-left: .5rem;
        font-size: 2.5rem;
        letter-spacing: .3rem;
        word-break: break-all;
      }
    }
    .row2 {
      margin-top: 1rem;
      text-align: center;
      font-size: 3.8rem;
      font-weight: 600;
    }
  }
  .introduce-image {
    position: relative;
    height: 22.5rem;
    background: url(https://b1-q.mafengwo.net/s12/M00/78/40/wKgED1vG1_GAKWwHAAPGb-qItYQ04.jpeg?imageMogr2%2Fthumbnail%2F%21450x270r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21450x270%2Fquality%2F90) no-repeat;
    background-size: cover;
    .iconfont {
      position: absolute;
      font-weight: 500;
      color: #fff;
    }
    .icon-star {
      top: 1.35rem;
      right: 8rem;
      font-size: 2.8rem;
      &:before {
        content: ""!important;
        display: inline-block;
        width: 0;
        height: 0;
      }
    }
    .icon-share {
      top: 2rem;
      right: 4rem;
      font-size: 1.9rem;
    }
  }
</style>
