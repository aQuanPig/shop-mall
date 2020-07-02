<template>
  <div class="dressInfo" v-if="detailInfo">
    <div class="desc">
      <div class="desc_before"></div>
      {{detailInfo.desc}}
      <div class="desc_after"></div>
    </div>
    <div v-for="item in detailInfo.detailImage">
      <p>{{item.key}}</p>
      <div v-for="item1 in item.list" class="desc_img" >
        <img :src="item1" alt="" @load="imgLoad">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetaiDressInfo",
    props:{
      detailInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data() {
      return {
        imgNum:0
      }
    },
    methods:{
      imgLoad(){
        const end =  this.detailInfo.detailImage[0].list.length
        if(++this.imgNum === end){
          this.$emit('imgLoad')
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .dressInfo{
    padding: 10px;
    .desc{
      color: #666666;
      font-size: 14px;
      position: relative;
      .desc_before{
        width: 90px;
        height: 1px;
        position: relative;
        background-color: #666666;
        margin-bottom:15px;
        margin-top: 10px;
        &::before{
          content: '';
          display: inline-block;
          position: absolute;
          bottom: 0;
          width: 5px;
          height: 5px;
          background-color: black;
        }
      }
      .desc_after{
        position: relative;
        left: 75%;
        width: 90px;
        height: 1px;
        background-color: #666666;
        margin-bottom:15px;
        margin-top: 10px;
        &::after{
          content: '';
          display: inline-block;
          position: absolute;
          bottom: 0;
          right: 0;
          width: 5px;
          height: 5px;
          background-color: black;
        }
      }

    }
    .desc_img{
      padding-top: 10px;
      img {
        width: 100%;
      }
    }
  }
</style>
