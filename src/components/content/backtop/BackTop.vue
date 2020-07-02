<template>
  <div class="backTop">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "BackTop"
  }
</script>

<style lang="scss" scoped>
 .backTop{
   position: absolute;
   right: 14px;
   bottom: 60px;
   z-index: 9;
   img {
     width: 50px;
     height: 50px;
   }
 }
</style>
