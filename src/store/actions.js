export default {
  addCart({state,commit},payload){
    const old_payload = state.cartList.find(item =>{
      return item.iid === payload.iid
    })
    if (old_payload){
      commit('incrementCount',old_payload)

    }else {
      commit('pushCart',payload)
    }
  }
}
