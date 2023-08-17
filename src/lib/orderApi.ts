import { commonResponse, getterResponse } from '../interface/responseType.ts'
import { orderApi } from './axiosApi.ts'

enum orderStatus {
  'WAITING_GOODS',
  'NEED_CONFIRM',
  'TO_COMMENT',
  'FINISHED'
}

export const addInfo = async (
  userId: number,
  merchantId: number,
  goodsId: number,
  buyCount: number
): Promise<boolean> => {
  const msg = { userId, merchantId, goodsId, buyCount }
  try {
    const response = (await orderApi.addInfo(msg)).data as commonResponse
    return response.isOk
  } catch (err) {
    return false
  }
}

//id指的是userId
export const getBuyerList = async (id: number): Promise<Object | undefined> => {
  const msg = { id }
  try {
    const response = (await orderApi.getBuyerList(msg)).data as getterResponse
    if (response.isOk) {
      return response.content as {
        merchantName: string
        goodsName: string
        goodsFigure: string
        orderPrice: number
        orderBuyCount: number
        orderStage: orderStatus
      }[]
    } else return undefined
  } catch (err) {
    return undefined
  }
}

//id指的是merchantId
export const getSellerList = async (id: number): Promise<Object | undefined> => {
  const msg = { id }
  try {
    const response = (await orderApi.getSellerList(msg)).data as getterResponse
    if (response.isOk) {
      return response.content as {
        merchantName: string
        goodsName: string
        goodsFigure: string
        orderPrice: number
        orderBuyCount: number
        orderStage: orderStatus
      }[]
    } else return undefined
  } catch (err) {
    return undefined
  }
}

export const updateStage = async (id: number, stage: orderStatus): Promise<boolean> => {
  const msg = { id, stage }
  try {
    const response = (await orderApi.updateStage(msg)).data as commonResponse
    return response.isOk
  } catch (err) {
    return false
  }
}

export default {
  addInfo,
  getBuyerList,
  getSellerList,
  updateStage
}
