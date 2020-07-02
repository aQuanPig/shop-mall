<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="isActive">
      <slot name="item-active-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    computed:{
      isActive(){
        // return this.$route.path === this.path?true:false
        return this.$route.path.indexOf(this.path) !== -1 ? true : false
      },
      activeStyle(){
        return this.isActive?{color:this.activeColor}:{}
      }
    } ,
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'#ff5a86'
      }
    },
    methods:{
      itemClick(){
        this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
  }
  .tab-bar-item img{
    width: 25px;
    height: 25px;
    vertical-align: middle;
    margin-bottom: 3px;
  }
</style>
