import { goodsInfo } from './goodsInfo'

export interface orderInfo {
  orderId: number
  userId: number
  merchantId: number
  good: goodsInfo
  orderStage: orderStatus
}

enum orderStatus {
  'WAITING_GOODS',
  'NEED_CONFIRM',
  'TO_COMMENT',
  'FINISHED'
}
