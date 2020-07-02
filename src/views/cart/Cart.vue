<template>
  <div class="cart">
    <!--导航-->
    <cart-nav-bar/>

    <!--内容-->
    <cart-list/>
  </div>
</template>

<script>
  import CartNavBar from "./children/CartNavBar";
  import CartList from "./children/CartList";
  import Scroll from "components/common/scroll/Scroll";
  export default {
    name: "Cart",
    components:{
      CartNavBar,
      CartList,
      Scroll
    }
  }
</script>

<style lang="scss" scoped>
  .cart{
    position: relative;
    height: 100vh;

  }
</style>
