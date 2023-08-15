//使用接口获得的请求信息，用于展示
export interface requetInfo {
  userId: number
  userName: string
  goodsName: string
  orderPrice: number
  type: requestType
  stage: requestStage
}

//新建新请求的数据
export interface requestData {
  orderId: number
  type: requestType
}

enum requestType {
  'RETURNS_N_REFUND',
  'REFUND',
  'EXCHANGE_GOODS',
  'REPAIR'
}

enum requestStage {
  'WAITING_HANDLE',
  'REJECTED',
  'ACCEPTED'
}
