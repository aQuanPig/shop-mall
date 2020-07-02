<template>
  <div class="tab_control">
    <div v-for="(item,index) in titles" class="tab_control_item"
         :class="{active:currentIndex === index}"
         @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        currentIndex:0
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex = index
        this.$emit('itemClick',index)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tab_control{
    display: flex;
    justify-content: space-around;
    line-height: 44px;
    height: 44px;
    text-align: center;
    font-size: 16px;
    background-color: #fff;
    .tab_control_item{
      padding: 1px;
      span {
        padding: 5px;
      }
      &.active{
        span {
          color: #ff5777;
          border-bottom: 3px solid #ff5777;
        }
      }
    }
  }
</style>
