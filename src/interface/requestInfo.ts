import { orderInfo } from './orderInfo'

export interface requetInfo {
  requestId: number
  order: orderInfo
  requestType: requestType
  stage: requestStage
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
