<template>
  <div id="home">
    <nav-bar class="navbar">
      <div class="navbar-title" slot="center">购物街</div>
    </nav-bar>
    <scroll
            class="scroll-wrapper"
            ref="scroll"
            :probe-type="3"
            :pull-up-load="true"
            @scroll="contentScroll"
            @pullingUp="pullingUp">

      <home-swiper :banners="banners"/>
      <main-recommend :recommends="recommends"/>
      <FeatureView class="feature-view"/>
      <TabControl @tabClick="tabClick"/>
      <goods-list :goods="goods[currentTab].list"/>

    </scroll>
    <back-top class="back-top" @click.native="backtop" v-show="isShow"/>

  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from './childComps/HomeSwiper'
  import MainRecommend from 'components/content/MainRecommend'
  import FeatureView from './childComps/HomeFeatureView'
  import TabControl from 'components/content/TabControl'
  import GoodsList from 'components/content/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/BackTop'

  import {getMultiData, getHomeGoodsData} from 'network/home'

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      MainRecommend,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    data() {
      return {
        banners: null,
        recommends: null,
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentTab: 'pop',
        isShow: false
      }
    },
    created() {
      this.getMultiData();
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    mounted() {
      const debFresh = this.debounce(this.$refs.scroll.refresh,300);
      this.$bus.$on('imageLoaded', () => {
        debFresh()
        // this.$refs.scroll.refresh();
      })
    },
    methods: {
      /**
       * 网络请求相关
       */
      getMultiData() {
        getMultiData().then((res) => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoodsData(type, page).then((res) => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
          this.$refs.scroll && this.$refs.scroll.finishPullUp()
        });
      },
      /**
       * 业务处理相关
       */
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentTab = 'pop';
            break;
          case 1:
            this.currentTab = 'new';
            break;
          case 2:
            this.currentTab = 'sell';
            break

        }
      },
      backtop() {
        this.$refs.scroll.scrollTo(0, 0, 500)
      },
      contentScroll(position) {
        this.isShow = -position.y > 1000
      },
      pullingUp() {
        this.getHomeGoods(this.currentTab);
      },
      /**
       * 防抖,节流
       */
      debounce(func,delay){
        let timer = null;
        return function (...args) {
          if (timer) clearTimeout(timer);
          timer = setTimeout(()=>{
            func.apply(this,args)
          },delay)
        }
      }
    }

  }
</script>

<style scoped>
  #home {
    height: 100vh;

  }

  .navbar {
    background-color: var(--color-tint);
    z-index: 9;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
  }

  .navbar-title {
    color: #fff;
  }

  .scroll-wrapper {
    height: calc(100% - 93px);
    margin-top: 44px;
  }

</style>