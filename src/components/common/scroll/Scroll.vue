<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="content"><slot></slot></div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "scroll",
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:Boolean,
        default:false
      }
    },
    data(){
      return{
        srcoll:null
      }
    },
    mounted(){
      this.scroll = new BScroll(this.$refs.wrapper,{
        click:true,
        pullUpLoad: this.pullUpLoad,
        probeType:this.probeType
      });
      this.scroll.on('scroll',(position)=>{
        // console.log(position.y);
        this.$emit('scroll',position)
      });
      this.scroll.on('pullingUp',()=>{
        this.$emit('pullingUp')
      })
    },
    methods:{
      scrollTo(x,y,time=300){
        this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x,y,time)
      },
      finishPullUp(){
        this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp()
      },
      refresh(){
        this.scroll && this.scroll.refresh && this.scroll.refresh();
        console.log('--');
      }

    }
  }
</script>

<style scoped>

</style>