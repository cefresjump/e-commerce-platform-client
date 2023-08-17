import { commonResponse, getterResponse } from '../interface/responseType.ts'
import { goodsApi } from './axiosApi.ts'

export const getInfo = async (id: number): Promise<Object | undefined> => {
  const msg = { id }
  try {
    const response = (await goodsApi.getInfo(msg)).data as getterResponse
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
  price: number,
  description: string
): Promise<boolean> => {
  const msg = { id, name, type, price, description }
  try {
    const response = (await goodsApi.updateInfo(msg)).data as commonResponse
    return response.isOk
  } catch (err) {
    return false
  }
}

export const updateFigure = async (id: string | Blob, figure: string | Blob): Promise<boolean> => {
  const msg = { id, figure }
  try {
    const response = (await goodsApi.updateFigure(msg)).data as commonResponse
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
  description: string | Blob,
  figure: string | Blob
): Promise<boolean> => {
  const msg = { merchantId, name, type, price, description, figure }
  try {
    const response = (await goodsApi.addInfo(msg)).data as commonResponse
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
  const msg = { orderId, content, score }
  try {
    const response = (await goodsApi.addComment(msg)).data as commonResponse
    return response.isOk
  } catch (err) {
    return false
  }
}

export const getComments = async (id: number): Promise<Object | undefined> => {
  const msg = { id }
  try {
    const response = (await goodsApi.getComments(msg)).data as getterResponse
    if (response.isOk) {
      return response.content as {
        userName: string
        userFigure: string
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
