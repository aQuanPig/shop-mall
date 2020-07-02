<template>
  <nav-bar class="nav">
    <template v-slot:right>
      <div @click="$router.go(-1)"><img src="~assets/img/common/back.svg" alt="" class="nav_img"></div>
    </template>
    <template v-slot:center>
      <div class="nav_title">
        <div v-for="(item,index) in titles" :key="item" class="nav_title_item" @click="itemClick(index)" :class="{active:currentIndex === index}">
          {{item}}
        </div>
      </div>
    </template>
  </nav-bar>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "DetailNavBar",
    components:{
      NavBar
    },
    data(){
      return {
        currentIndex:0
      }
    },
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods:{
      itemClick(index) {
        this.currentIndex = index
        this.$emit('itemClick',index)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .nav{
    position: fixed;
    right: 0;
    top: 0;
    left: 0;
    z-index: 9;
    background-color: #fff;
    font-size: 18px;
    .nav_img{
      margin-top: 10px;
    }
    .nav_title{
      display: flex;
      justify-content: space-around;
      font-size: 14px;
      .nav_title_item{
        &.active{
          color: #ff5777;
        }
      }
    }
  }
</style>
