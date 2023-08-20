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
  const body = { userId, merchantId, goodsId, buyCount }
  try {
    const response = (await orderApi.addInfo(body)).data as commonResponse
    return response.isOk
  } catch (err) {
    return false
  }
}

//id指的是userId
export const getBuyerList = async (
  id: number
): Promise<
  | {
      id: number
      merchantName: string
      goodsName: string
      goodsFigure: string
      shippingAddress: string
      address: string
      expressNumber: number
      price: number
      buyCount: number
      stage: orderStatus
      createDate: Date
    }[]
  | undefined
> => {
  const body = { id }
  try {
    const response = (await orderApi.getBuyerList(body)).data as getterResponse
    if (response.isOk) {
      return response.content as {
        id: number
        merchantName: string
        goodsName: string
        goodsFigure: string
        shippingAddress: string
        address: string
        expressNumber: number
        price: number
        buyCount: number
        stage: orderStatus
        createDate: Date
      }[]
    } else return undefined
  } catch (err) {
    return undefined
  }
}

//id指的是merchantId
export const getSellerList = async (
  id: number
): Promise<
  | {
      id: number
      merchantName: string
      goodsName: string
      goodsFigure: string
      shippingAddress: string
      address: string
      expressNumber: number
      price: number
      buyCount: number
      stage: orderStatus
      createDate: Date
    }[]
  | undefined
> => {
  const body = { id }
  try {
    const response = (await orderApi.getSellerList(body)).data as getterResponse
    if (response.isOk) {
      return response.content as {
        id: number
        merchantName: string
        goodsName: string
        goodsFigure: string
        shippingAddress: string
        address: string
        expressNumber: number
        price: number
        buyCount: number
        stage: orderStatus
        createDate: Date
      }[]
    } else return undefined
  } catch (err) {
    return undefined
  }
}

export const sendGoods = async (id: number, expressNumber: Number): Promise<boolean> => {
  const body = { id, expressNumber }
  try {
    const response = (await orderApi.sendGoods(body)).data as commonResponse
    return response.isOk
  } catch (err) {
    return false
  }
}

export const confirmGoods = async (id: number): Promise<boolean> => {
  const body = { id }
  try {
    const response = (await orderApi.confirmGoods(body)).data as commonResponse
    return response.isOk
  } catch (err) {
    return false
  }
}

export default {
  addInfo,
  getBuyerList,
  getSellerList,
  sendGoods,
  confirmGoods
}
