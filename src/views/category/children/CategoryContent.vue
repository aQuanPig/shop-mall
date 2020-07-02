<template>
  <div class="content" v-if="subCategory">
    <div v-for="(item,index) in subCategory" class="content_item" :key="index" >
      <img :src="item.image" alt="" @load="imgLoad(index)">
      <p>{{item.title}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CategoryContent",
    props:{
      subCategory:{
        type:Array,
        default(){
          return []
        }
      },
      currentIndex:0
    },
    data(){
      return {
       newSubCategory:[],
      }
    },
    methods:{
      imgLoad(index){
        const length = this.subCategory.length
        // const count = 1
        // if(count === length){
        //   console.log('oooo')
        // }
        if(index === length-1){
          this.$emit('imgLoad')
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
 .content {
   flex-wrap: wrap;
   display: flex;
   .content_item{
     width: 25%;
     margin: 10px;
     text-align: center;
     img {
       width: 100%;
     }
     p {
       margin-top: 5px;
       font-size: 14px;
     }
   }
 }
</style>
