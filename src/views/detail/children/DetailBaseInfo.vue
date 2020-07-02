<template>
  <div class="baseInfo">
    <div class="title">{{baseData.title}}</div>
    <div>
      <span class="price">{{baseData.price}}</span>
      <span class="oldPrice">{{baseData.oldPrice}}</span>
      <span :style="{background:baseData.discountBgColor}" class="discountDesc">{{baseData.discountDesc}}</span>
    </div>
    <div class="columns">
      <div v-for="item in baseData.columns">
        {{item}}
      </div>
    </div>
    <div class="services" v-if="baseData.services">
      <div v-for="index in baseData.services.length - 1">
        <img :src="baseData.services[index - 1].icon" alt="">
        <span> {{baseData.services[index - 1].name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props:{
      baseData:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .baseInfo{
    padding: 10px;
    .title{
      /*font-weight: 700;*/
      font-size: 16px;
      color: #222;
      margin-bottom: 5px;
    }
    .price{
      color: #eb4868;
      font-size: 24px;
      padding-right: 5px;
    }
    .oldPrice{
      text-decoration: line-through;
      color: #999;
      font-size: 14px;
    }
    .discountDesc{
      position: relative;
      bottom: 5px;
      border-radius: 10px;
      font-size: 12px;
      color: #ffffff;
      padding: 4px 6px;
      margin-left: 5px;
      margin-bottom: 100px;
    }
    .columns{
      display: flex;
      padding-top: 15px;
      padding-bottom: 5px;
      border-bottom: 1px solid #f2f5f8;
      color: #999;
      font-size: 14px;
      justify-content: space-between;
    }
    .services{
      display: flex;
      align-items: center;
      justify-content: space-between;
      line-height: 50px;
      img {
        width: 12px;
        height: 12px;
      }
      span {
        color: #333;
        font-size: 14px;
      }
    }
  }
</style>
