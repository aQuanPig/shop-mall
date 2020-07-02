<template>
  <nav-bar class="navbar">
    <template v-slot:center>
      <p>购物街</p>
    </template>
  </nav-bar>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "HomeNavBar",
    components:{
      NavBar
    }
  }
</script>

<style lang="scss" scoped>
  .navbar {
    position: relative;
    background-color: #ff8198;
    color: white;
    font-weight: 500;
    font-size: 18px;
    height: 49px;
  }
</style>
