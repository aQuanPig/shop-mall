<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name:'TabBar'
}
</script>

<style>
  .tab-bar{
    display: flex;
    text-align: center;
    position: fixed;
    bottom: 0px;
    right: 0;
    left: 0;
    padding-top: 5px;
    box-shadow: 0px -1px 1px rgba(100,100,100,0.2);
    /*background-color: rgba(100,100,100,0.1);*/
    z-index: 9;
    background-color: #fff;
    height: 49px;
  }
</style>
