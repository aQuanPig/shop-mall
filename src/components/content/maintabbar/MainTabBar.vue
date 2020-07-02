<template>
    <tab-bar class="tab_bar">
      <tab-bar-item path="/home" active-color="#ff5a86">
        <template v-slot:item-active-icon>
          <img src="~assets/img/tabbar/home_active.svg" alt="">
        </template>
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/home.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/category" active-color="#ff5a86">
        <template v-slot:item-active-icon>
          <img src="~assets/img/tabbar/category_active.svg" alt="">
        </template>
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/category.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/cart" active-color="#ff5a86">
        <template v-slot:item-active-icon>
          <img src="~assets/img/tabbar/shopcart_active.svg" alt="">
        </template>
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/shopcart.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <template v-slot:item-active-icon active-color="#ff5a86">
          <img src="~assets/img/tabbar/profile_active.svg" alt="">
        </template>
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/profile.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
  import TabBarItem from "../../common/tabbar/TabBarItem";
  import TabBar from "../../common/tabbar/TabBar";
  export default {
    name: "MainTabBar",
    components:{
      TabBarItem,
      TabBar
    }
  }
</script>

<style lang="scss" scoped>
  .tab-bar{
    background-color: #f6f6f6;
  }
</style>
