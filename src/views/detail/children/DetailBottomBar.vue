<template>
  <van-goods-action>
    <van-goods-action-icon icon="chat-o" text="客服" dot color="#07c160"/>
    <van-goods-action-icon icon="cart-o" text="购物车"  :badge="length"/>
    <van-goods-action-icon icon="shop-o" text="店铺"  />
    <van-goods-action-button type="warning" text="加入购物车" color="#EB989E" @click="addCart"/>
    <van-goods-action-button type="danger" text="立即购买" color="#ff5777"/>
  </van-goods-action>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: "DetailBottomBar",
    methods:{
      addCart(){
        this.$emit('addCart')
      }
    },
    computed:{
      ...mapGetters(['getCartLength'])
    },
    data(){
      return {
        length:this.$store.getters.getCartLength
      }
    },
    watch:{
      getCartLength(value){
        this.length = value
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
