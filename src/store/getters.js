export default {
  getCartLength(state){
    return state.cartList.length
  },
  getCartCountPrice(state){
    return state.cartList.filter(item=>{
      return item.isCheck === true
    }).reduce((preValue,nowValue)=>{
      return preValue + nowValue.price * nowValue.count
    },0)
  }
}
