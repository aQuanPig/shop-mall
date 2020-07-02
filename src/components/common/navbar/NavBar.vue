<template>
  <div class="navBar">
    <div class="right">
      <slot name="right"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="left">
      <slot name="left"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style lang="scss" scoped>
  .navBar{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    /*position: fixed;*/
    /*width: 100%;*/
    /*top: 0px;*/
    /*z-index: 9;*/
    background-color: #fff;
    .right {
      width: 60px;
    }
    .center{
      flex: 1;
    }
    .left{
      width: 60px;
    }
  }
</style>
