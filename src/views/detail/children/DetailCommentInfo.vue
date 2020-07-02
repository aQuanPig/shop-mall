<template>
  <div class="comment" v-if="rate">
    <div class="comment_title">
      <p>用户评价</p>
      <div class="more">
        <a href="#">更多</a>
        <img src="~assets/img/common/back.svg" alt="">
      </div>
    </div>
    <div class="comment_content">
      <div v-if="rate.user" class="user">
        <img :src="rate.user.avatar" alt="">
        <p>{{rate.user.uname}}</p>
      </div>
      <p class="content">{{rate.content}}</p>
      <div class="time">
        <span>{{rate.created | formatDate}}</span>
        <span class="style">{{rate.style}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'
  export default {
    name: "DetailCommentInfo" ,
    props:{
      rate:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    filters:{
      formatDate(value){
        return moment(value*1000).format('YYYY-MM-DD')
      }
    }
  }
</script>

<style lang="scss" scoped>
 .comment{
   border-top: 5px solid #f2f5f8;
   border-bottom: 5px solid #f2f5f8;
   padding: 15px;
   .comment_title{
     display: flex;
     align-items: center;
     justify-content: space-between;
     color: #666;
     padding-bottom: 15px;
     border-bottom: .026667rem solid rgba(0,0,0,.1);
     p {
       font-size: 16px;
     }
     .more{
       display: flex;
       align-items: center;
       font-size: 14px;
       img {
         width: 15px;
         height: 15px;
       }
     }
   }
   .comment_content{
     padding-top: 10px;
     .user{
       display: flex;
       align-items: center;
       color: #333333;
       img {
         width: 50px;
         height: 50px;
         border-radius: 50%;
         margin-right: 10px;
       }
     }
     .content{
       font-size: 14px;
       color: #777;
       padding-top: 10px;
     }
     .time{
       padding-top: 10px;
       color: #999;
       font-size: 12px;
       .style {
         padding: 0 5px;
       }
     }
   }
 }
</style>
