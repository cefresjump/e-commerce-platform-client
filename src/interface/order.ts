//使用接口获得的订单信息，用于展示
export interface orderInfo {
  merchantName: string
  goodsName: string
  goodsFigure: string
  orderPrice: number
  orderBuyCount: number
  orderStage: orderStatus
}

//订单数据
export interface orderData {
  userId: number
  merchantId: number
  goodsId: number
  buyCount: number
  price: number
}

enum orderStatus {
  'WAITING_GOODS',
  'NEED_CONFIRM',
  'TO_COMMENT',
  'FINISHED'
}
