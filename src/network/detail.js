import {request} from "./request";
export function getDetailData(iid) {
  return request({
    url:'/detail',
    params: {iid}
  })
}
export function getRecommentdData() {
   return request({
     url:'/recommend'
   })
}
// 获取基础信息
export class GetDeatilBaseData{
  constructor(itemInfo,columns,shopInfo){
    this.title = itemInfo.title
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discountDesc = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.columns = columns
    this.services = shopInfo.services
    this.desc = itemInfo.desc
    this.lowNowPrice = itemInfo.lowNowPrice
  }
}
//获取店铺信息
export class GetDetailShopInfo {
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.cSells = shopInfo.cSells
    this.cGoods = shopInfo.cGoods
    this.score = shopInfo.score
  }
}
//获取尺码信息
export class GetItemParams {
  constructor(itemParams) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = itemParams.info.images ? itemParams.info.images[0] : "";
    this.info = itemParams.info.set
    this.rule = itemParams.rule.tables
  }
}
