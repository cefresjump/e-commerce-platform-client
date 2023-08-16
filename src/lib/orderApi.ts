import { commonResponse, getterResponse } from '../interface/responseType.ts'
import { orderApi } from './axiosApi.ts'

enum orderStatus {
  'WAITING_GOODS',
  'NEED_CONFIRM',
  'TO_COMMENT',
  'FINISHED'
}

export const addInfo = async (msg: {
  userId: number
  merchantId: number
  goodsId: number
  buyCount: number
}): Promise<boolean> => {
  try {
    const response = (await orderApi.addInfo(msg)).data as commonResponse
    return response.isOk
  } catch (err) {
    console.log(err)
    return false
  }
}

//id指的是userId
export const getBuyerList = async (msg: { id: number }): Promise<Object | undefined> => {
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
    console.log(err)
    return undefined
  }
}

//id指的是merchantId
export const getSellerList = async (msg: { id: number }): Promise<Object | undefined> => {
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
    console.log(err)
    return undefined
  }
}

export const updateStage = async (msg: { id: number; stage: orderStatus }): Promise<boolean> => {
  try {
    const response = (await orderApi.updateStage(msg)).data as commonResponse
    return response.isOk
  } catch (err) {
    console.log(err)
    return false
  }
}

export default {
  addInfo,
  getBuyerList,
  getSellerList,
  updateStage
}
