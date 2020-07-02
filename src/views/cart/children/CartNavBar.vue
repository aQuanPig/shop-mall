<template>
  <nav-bar class="nav-bar">
    <template v-slot:center>
      <p>购物车({{$store.getters.getCartLength}})</p>
    </template>
  </nav-bar>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "CartNavBar",
    components:{
      NavBar
    }
  }
</script>

<style lang="scss" scoped>
 .nav-bar{
   position: fixed;
   top: 0;
   right: 0;
   left: 0;
   background-color: #ff8198;
   color: #ffffff;
   font-weight: 500;
   font-size: 18px;
   z-index: 9;
 }
</style>
