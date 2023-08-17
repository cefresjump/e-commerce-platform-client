import { commonResponse, getterResponse } from '../interface/responseType.ts'
import { requestApi } from './axiosApi.ts'

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

export const addAfterSale = async (orderId: number, type: requestType): Promise<boolean> => {
  const msg = { orderId, type }
  try {
    const response = (await requestApi.addAfterSale(msg)).data as commonResponse
    return response.isOk
  } catch (err) {
    return false
  }
}

//id指的是用户id
export const getSellerAfterSaleRequest = async (id: number): Promise<Object | undefined> => {
  const msg = { id }
  try {
    const response = (await requestApi.getSellerAfterSaleRequest(msg)).data as getterResponse
    if (response.isOk) {
      return response.content as {
        userId: number
        userName: string
        goodsName: string
        orderPrice: number
        requestType: requestType
        requestStage: requestStage
      }[]
    } else return undefined
  } catch (err) {
    return undefined
  }
}

//id指的是商家id
export const getBuyerAfterSaleRequest = async (id: number): Promise<Object | undefined> => {
  const msg = { id }
  try {
    const response = (await requestApi.getBuyerAfterSaleRequest(msg)).data as getterResponse
    if (response.isOk) {
      return response.content as {
        userId: number
        userName: string
        goodsName: string
        orderPrice: number
        requestType: requestType
        requestStage: requestStage
      }[]
    } else return undefined
  } catch (err) {
    return undefined
  }
}

export const updateAfterSaleRequest = async (id: number, stage: requestStage): Promise<boolean> => {
  const msg = { id, stage }
  try {
    const response = (await requestApi.updateAfterSaleRequest(msg)).data as commonResponse
    return response.isOk
  } catch (err) {
    return false
  }
}

export default {
  addAfterSale,
  getSellerAfterSaleRequest,
  getBuyerAfterSaleRequest,
  updateAfterSaleRequest
}
