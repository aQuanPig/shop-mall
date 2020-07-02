<template>
  <div class="home">
    <!--导航栏-->
    <home-nav-bar/>
    <tab-control :titles="titles" @itemClick="itemClick" :class="{tab_control:isShopTabControl}" ref="tabControl" v-show="isShopTabControl" />
    <scroll class="scroll" :isPullUpLoad="true" ref="scroll"
       @onPullingUp="loadMore" :whatProbeType="2" @showBackTop="showBackTop"  @scrollPositon="scrollPositon"
    >
      <template v-slot:default>
        <!--轮播图-->
        <swiper :banners="banners" @imgLoadOver="imgLoadOver"/>
        <!--推荐信息-->
        <recommend-view :recommends="recommends"/>
        <!--特性-->
        <feture-view/>
        <!--导航控制-->
        <tab-control :titles="titles" @itemClick="itemClick" ref="tabControl1"/>
        <!--商品列表-->
        <goods-list :goods="goods[currentTitles].list"/>
      </template>
    </scroll>
    <!--返回顶部按钮-->
    <back-top @click.native="scrollTop" v-show="isShopBackTop"/>
  </div>
</template>

<script>
  //导入公共组件
  import TabControl from "components/content/tabcontrol/TabControl";
  import GoodsList from "components/content/goods/GoodsList";
  import Scroll from "components/common/scroll/Scroll";
  //导入子组件
  import Swiper from "./children/Swiper";
  import RecommendView from "./children/RecommendView";
  import HomeNavBar from "./children/HomeNavBar";
  import FetureView from "./children/FetureView";

  //导入函数
  import {getHomeMutilData,getHomeGoodsData} from "network/home";
  import {debounce} from "common/utils";
  import {imgMixin,backTopMixin} from 'common/mixin'
  export default {
    name: "Home",
    components:{
      RecommendView,
      HomeNavBar,
      Swiper,
      FetureView,
      TabControl,
      GoodsList,
      Scroll,
    },
    data(){
      return {
        banners:[],
        recommends:[],
        titles:['流行','新款','精选'],
        goods:{
          pop:{page:0,list:[]},
          new:{page:0,list:[]},
          sell:{page:0,list:[]},
        },
        currentTitles:'pop',
        isShopTabControl:false,
        tabOffsetTop:0,
        currentY:0 ,
        isLoading:true
      }
    },
    mixins:[imgMixin,backTopMixin],
    created() {
      this.getHomeMutil()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    mounted() {
      const refresh = debounce(this.$refs.scroll.refresh,100)
      debounce(this.$bus.$on('imgLoad', () => {
        refresh()
      }))
    },
    methods:{
      getHomeMutil(){
        return getHomeMutilData().then(res=>{
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoods(type){
        let page = this.goods[type].page + 1
        return getHomeGoodsData(type,page).then(res=>{
          let data = res.data.list
          this.goods[type].list.push(...data)
          this.goods[type].page += 1
          //完成上拉加载更多
          this.$refs.scroll && this.$refs.scroll.finishLoad()
        })
      },
      itemClick(index){
        switch (index) {
          case 0:
            this.currentTitles = 'pop'
            break;
          case 1:
            this.currentTitles = 'new'
            break;
          case 2:
            this.currentTitles = 'sell'
            break;
        }
        this.$refs.tabControl.currentIndex = index
        this.$refs.tabControl1.currentIndex = index
      },

      scrollTop(){
        this.$refs.scroll.scrollTo(0,0,500)
      },
      loadMore(){
        this.getHomeGoods(this.currentTitles)
      },
      scrollPositon(position){
        this.isShopTabControl = position.y < (-this.tabOffsetTop) ? true  : false
      },
      imgLoadOver(){
        this.tabOffsetTop = this.$refs.tabControl1.$el.offsetTop
      },
    },
    activated() {
      this.$refs.scroll.scrollTo(0,this.currentY,50)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      this.currentY = this.$refs.scroll.getPositionY()
      this.$bus.$off('imgLoad',this.imgListener)
    }
  }
</script>

<style lang="scss" scoped>
  .home {
    position: relative;
    height: 100vh;
  }
  .scroll{
    overflow: hidden;
    position: absolute;
    top: 48px;
    right: 0;
    left: 0;
    bottom: 54px;
  }
  .tab_control{
    position: relative;
    z-index: 9;
    top: -1px;
  }
</style>
