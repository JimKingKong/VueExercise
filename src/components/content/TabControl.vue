<template>
  <div class="tab-control">
    <div  v-for="(item,index) in titile"  class="tab-control-item"  @click="tabChange(index)">
      <span :class="{active:currentIndex===index}">
        {{item}}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    data(){
      return{
        titile:['流行','新款','精选'],
        currentIndex:0
      }
    },
    methods:{
      tabChange(index){
        this.currentIndex = index;
        this.$emit('tabClick',index)
      }
    },


  }
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    font-size: 13px;
    justify-content: space-around;
    margin-top: 10px;
  }
  .tab-control-item{
    flex: 1;
    padding-bottom: 10px ;
  }
  .tab-control-item span{
    padding: 10px;
  }
  .active{
    color: var(--color-tint);
    border-bottom: 1px solid var(--color-tint);
  }
</style>