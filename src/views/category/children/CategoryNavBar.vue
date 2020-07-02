<template>
  <nav-bar class="nav_bar">
    <template v-slot:center>
      <p>商品分类</p>
    </template>
  </nav-bar>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "CategoryNavBar",
    components:{
      NavBar
    }
  }
</script>

<style lang="scss" scoped>
  .nav_bar{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 9;
    background-color: #ff8198;
    color: white;
    font-weight: 500;
    font-size: 18px;
  }
</style>
