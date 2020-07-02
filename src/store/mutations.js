import { Toast } from "vant";
export default {
  pushCart(state,payload){
    payload.count = 1
    payload.isCheck = true
    let new_payload = JSON.parse(JSON.stringify(payload))
    Toast({
      type: "success",
      message: `添加商品成功`,
      // 弹框的时候禁止点击
      forbidClick: true,
      duration: 1500
    });
    state.cartList.push(new_payload)
  },
  incrementCount(state,payload){
    payload.count += 1
    Toast({
      type: "success",
      message: `当前商品数量为${payload.count}`,
      // 弹框的时候禁止点击
      forbidClick: true,
      duration: 1500
    });
  },
  isCheckTrue(state){
    for(let i of state.cartList){
      i.isCheck = true
    }
  },
  isCheckFalse(state){
    for(let i of state.cartList){
      i.isCheck = !i.isCheck
    }
  },

}
