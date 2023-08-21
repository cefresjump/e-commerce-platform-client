import { commonResponse, getterResponse } from '../interface/responseType.ts'
import { goodsApi } from './axiosApi.ts'

export const getInfo = async (
  id: number
): Promise<
  | {
      goodsId: string
      merchantId: string
      name: string
      type: number
      price: number
      description: string
      figure: string
      createDate: Date
    }[]
  | undefined
> => {
  const body = { id }
  try {
    const response = (await goodsApi.getInfo(body)).data as getterResponse
    if (response.isOk) {
      return response.content as {
        goodsId: string
        merchantId: string
        name: string
        type: number
        price: number
        description: string
        figure: string
        createDate: Date
      }[]
    } else return undefined
  } catch (err) {
    return undefined
  }
}

export const updateInfo = async (
  id: number,
  name: string,
  type: string,
  shippingAddress: string,
  price: number,
  description: string
): Promise<boolean> => {
  const body = { id, name, type, shippingAddress, price, description }
  try {
    const response = (await goodsApi.updateInfo(body)).data as commonResponse
    return response.isOk
  } catch (err) {
    return false
  }
}

export const updateFigure = async (id: string | Blob, figure: string | Blob): Promise<boolean> => {
  const body = { id, figure }
  try {
    const response = (await goodsApi.updateFigure(body)).data as commonResponse
    return response.isOk
  } catch (err) {
    return false
  }
}

export const addInfo = async (
  merchantId: string | Blob,
  name: string | Blob,
  type: string | Blob,
  price: string | Blob,
  shippingAddress: string | Blob,
  description: string | Blob,
  figure: string | Blob
): Promise<boolean> => {
  const body = { merchantId, name, type, price, shippingAddress, description, figure }
  try {
    const response = (await goodsApi.addInfo(body)).data as commonResponse
    return response.isOk
  } catch (err) {
    return false
  }
}

export const addComment = async (
  orderId: number,
  content: string,
  score: number
): Promise<boolean> => {
  const body = { orderId, content, score }
  try {
    const response = (await goodsApi.addComment(body)).data as commonResponse
    return response.isOk
  } catch (err) {
    return false
  }
}

export const getComments = async (
  id: number
): Promise<
  | {
      id: number
      userName: string
      userFigure: string
      orderDate: Date
      createDate: Date
      content: string
      score: number
    }[]
  | undefined
> => {
  const body = { id }
  try {
    const response = (await goodsApi.getComments(body)).data as getterResponse
    if (response.isOk) {
      return response.content as {
        id: number
        userName: string
        userFigure: string
        orderDate: Date
        createDate: Date
        content: string
        score: number
      }[]
    } else return undefined
  } catch (err) {
    return undefined
  }
}

export default {
  getInfo,
  updateInfo,
  updateFigure,
  addInfo,
  addComment,
  getComments
}
