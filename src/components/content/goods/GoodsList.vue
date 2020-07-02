<template>
  <div class="good_list" v-if="goods">
    <div v-for="item in goods" class="good_item" @click="itemClick(item)">
      <img v-lazy=" item.img || item.image || item.show.img" alt="" class="item_img" @load="imgLoad">
      <p class="nowrap item_title">{{item.title}}</p>
      <div class="item_info">
        <span class="item_info_price">￥{{item.price}}</span>
        <img src="~assets/img/common/collect.svg" alt="" class="item_col">
        <span>{{item.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsList",
    props:{
      goods:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods:{
      imgLoad(){
        this.$bus.$emit('imgLoad')
      },
      itemClick(item){
        console.log(item)
        this.$router.push(`/detail/${item.iid}`)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .good_list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 5px;
    .good_item{
      width: 47%;
      margin: 2px;
      .item_title{
        font-size: 15px;
        padding: 4px 0;
      }
      .item_img {
        width: 100%;
        height: 275px;
        border-radius: 6px;

      }
      .item_info{
        display: flex;
        align-items: center;
        justify-content: center;
        .item_info_price{
          color: #ff5777;
          font-size: 14px;
          padding-right: 5px;
        }
        img {
          width: 14px;
          height: 14px;
          margin: 0 5px;
        }
      }
    }
  }
</style>
