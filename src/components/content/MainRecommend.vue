<template>
  <div>
    <recommend>
      <recommend-item v-for="item in recommends">
        <a :href="item.link">
          <img class="recommend-pic" :src="item.image" alt="">
          <div class="recomend-title">{{item.title}}</div>
        </a>
      </recommend-item>
    </recommend>
  </div>
</template>

<script>
  import Recommend from 'components/common/recommend/Recommend'
  import RecommendItem from 'components/common/recommend/RecommendItem'
  export default {
    name: "MainRecommend",
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      Recommend,
      RecommendItem
    }
  }
</script>

<style scoped>
  .recommend-pic{
    width: 70px;
  }
  .recomend-title{
    font-size: 11px;
    margin-top: 5px;
  }
</style>