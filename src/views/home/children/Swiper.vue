<template>
  <div class="swiper-list" v-if="banners">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#ff5777" >
      <van-swipe-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imgLoad">
        </a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
  export default {
    name: "MySwiper",
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
       isLoad:false
      }
    },
    methods:{
      imgLoad(){
        if(!this.isLoad){
          this.$emit('imgLoadOver')
          this.isLoad = true
        }

      }
    }
  }
</script>

<style lang="scss" scoped>

 .swiper-list {
   .van-swipe{
     .van-swipe-item{
       img {
         width: 100%;
       }
     }
   }
   /deep/ .van-swipe__indicator {
     width: 10px;
     height: 10px;
     opacity: 0.8;
     border-radius: 100%;
     background-color: white;
   }
 }
</style>
