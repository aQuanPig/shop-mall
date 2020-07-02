<template>
  <div class="shop_info">
    <div class="shop_name">
      <img :src="shopInfo.shopLogo" alt="">
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="shop_content">
      <div class="shop_sg">
        <div>
          <p>{{shopInfo.cSells | getMillion}}</p>
          <span>总销量</span>
        </div>
        <div class="cGoods">
          <p>{{shopInfo.cGoods}}</p>
          <span>全部宝贝</span>
        </div>
      </div>
      <div class="score">
        <table>
          <tr v-for="item in shopInfo.score" class="score_item">
            <td>{{item.name}}</td>
            <td :style="{color:item.isBetter ? 'red' : 'green'}">{{item.score}}</td>
            <td :style="{background:item.isBetter ? '#f13e3a' : '#5ea732'}" class="isBetter">{{item.isBetter ? '高' : '低'}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="inShop">
      <span>进店逛逛</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props:{
      shopInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    filters:{
      getMillion(num){
        return  (num / 10000).toFixed(1) + '万'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .shop_info{
    border-top: 5px solid #f2f5f8;
    border-bottom: 5px solid #f2f5f8;
    padding: 20px 10px;
    .shop_name{
      display: flex;
      align-items: center;
      img {
        width: 45px;
        height: 45px;
        border: 1px solid rgba(0,0,0,.1);
        border-radius: 50%;
      }
      span {
        font-size: 17px;
        padding-left: 5px;
        color: #666;
      }
    }
    .shop_content{
      display: flex;
      padding: 20px;
      align-items: center;
      .shop_sg{
        display: flex;
        color:#333;
        text-align: center;
        p {
          font-size: 20px;
        }
        span {
          font-size: 12px;
        }
        .cGoods{
          margin:0 26px;
          padding-right: 30px;
          border-right: 1px solid rgba(0,0,0,.1);
        }
      }
      .score{
        font-size: 14px;
        color: #333;
       .score_item{
         td {
           padding: 3px 3px;
         }
         .isBetter{
           color: white;
         }
       }
      }
    }
    .inShop{
      text-align: center;
      span{
        padding: 10px 50px;
        background-color: #f2f5f8;
        border-radius: 10px;
        font-size: 14px;
        color: #333;
      }
    }
  }
</style>

