<template>
  <div class="itemParams" v-if="itemParams">
    <div>
      <p>参数信息</p>
      <table class="table_rule" v-for="item in itemParams.rule">
        <tr v-for="item1 in item" class="rule">
          <td v-for="item2 in item1">{{item2}}</td>
        </tr>
      </table>
      <table style="width: 100%;">
        <tr v-for="item in itemParams.info" class="ruleinfo">
          <td class="ruleinfo_key">{{item.key}}</td>
          <td class="ruleinfo_value">{{item.value}}</td>
        </tr>
      </table>
      <img :src="itemParams.image" alt="" style="width: 100%">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailItemParams",
    props:{
      itemParams:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .itemParams{
    padding: 10px;
    width: 100%;
    .table_rule{
      width: 100%;
      .rule{
        display: flex;
        width: 100%;
        /*flex-wrap: wrap;*/
        font-size: 14px;
        text-align: left;
        border-bottom: 1px solid hsla(0,0%,39.2%,.1);
        td{
          padding: 10px 0;
          width: 25%;
        }
      }
    }
    .ruleinfo{
      display: flex;
      width: 100%;
      text-align: left;
      .ruleinfo_key{
        width: 95px;
      }
      td{
        padding: 10px 0;
        font-size: 14px;
        border-bottom: 1px solid hsla(0,0%,39.2%,.1);
      }
      .ruleinfo_value{
        flex: 1;
        color: #eb4868;
      }
    }
  }

</style>
