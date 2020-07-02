<template>
  <div class="category">
    <!--导航-->
    <category-nav-bar/>
    <!--侧边栏-->
    <category-slide :category-name="categoryName" @slideItemClick="slideItemClick" />
    <scroll class="scroll_height" ref="scroll">
      <!--主体部分-->
      <category-content :sub-category="subCategory[currentIndex]" ref="content" @imgLoad="imgLoad"/>
      <!--导航-->
      <tab-control :titles="titles" @itemClick="itemClick"/>
      <!--商品展示列表-->
      <goods-list :goods="categoryDetailList"/>
    </scroll>
  </div>
</template>

<script>
  import CategoryNavBar from "./children/CategoryNavBar";
  import CategorySlide from "./children/CategorySlide";
  import CategoryContent from "./children/CategoryContent";
  import {getCategory,getSubcategory,getCategoryDetail} from 'network/category'
  import {imgMixin} from 'common/mixin'
  import Scroll from "components/common/scroll/Scroll";
  import TabControl from "components/content/tabcontrol/TabControl";
  import GoodsList from "components/content/goods/GoodsList";
  export default {
    name: "Category" ,
    components:{
      CategoryNavBar,
      CategorySlide,
      CategoryContent,
      Scroll,
      TabControl,
      GoodsList
    },
    mixins:[imgMixin],
    data(){
      return {
        categoryName:[],
        subCategory:[],
        currentIndex:0,
        titles:['流行','新款','精选'],
        categoryDetailList: [],
        currentY:0
      }
    },
    created() {
      this.getCategoryAllData()
    },
    methods:{
      //获取分类全部数据
      getCategoryAllData(){
        //获取分类左侧数据
        getCategory().then(res=>{
          this.categoryName = res.data.category.list
          console.log(this.categoryName)
            //初始化左侧第一行显示的右边数据
            // console.log(this.$refs.content)
          this.getSubcategory(this.categoryName[this.currentIndex].maitKey,this.currentIndex)
          //初始化左侧第一行详情数据
          this.getCategoryDetail(this.categoryName[this.currentIndex].miniWallkey,'pop')
        })

      },
      //发送网络请求获取左侧数据
      slideItemClick({maitKey,index}){
        this.currentIndex = index
        this.getSubcategory(maitKey,this.currentIndex)
        this.getCategoryDetail(this.categoryName[this.currentIndex].miniWallkey,'pop')
      },
      //发送网络请求获取右侧数据
      getSubcategory(maitKey,index){
        getSubcategory(maitKey).then(res=>{
          // console.log(this.$refs.content)
          this.subCategory[index] = res.data.list
          // 获取完数据让组件强制刷新了
          this.$forceUpdate();
        })
      },
      //发送网络请求获取详情数据
      getCategoryDetail(miniWallkey,type){
        getCategoryDetail(miniWallkey,type).then(res=>{
          this.categoryDetailList = res
        })
      },
      //刷新scroll
      imgLoad(){
        this.$refs.scroll.refresh()
      },
      //导航点击
      itemClick(index){
        const titles = ['pop','new','sell']
        this.getCategoryDetail(this.categoryName[this.currentIndex].miniWallkey,titles[index])
      }
    },
    deactivated() {
      this.currentY = this.$refs.scroll.getPositionY()
      this.$bus.$off('imgLoad',this.imgListener)
    },
    activated() {
      this.$refs.scroll.scrollTo(0,this.currentY,50)
      this.$refs.scroll.refresh()
    }

  }
</script>

<style lang="scss" scoped>
  .category{
    position: relative;
    height: 100vh;
    .scroll_height{
      position: absolute;
      top: 44px;
      left: 100px;
      right: 0;
      bottom: 49px;
      overflow: hidden;
    }
  }
</style>
