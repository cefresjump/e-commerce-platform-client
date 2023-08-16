import { commonResponse, getterResponse } from '../interface/responseType.ts'
import { goodsApi } from './axiosApi.ts'

export const getInfo = async (msg: { id: number }): Promise<Object | undefined> => {
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
    console.log(err)
    return undefined
  }
}

export const updateInfo = async (msg: {
  id: number
  name: string
  type: string
  price: number
  description: string
}): Promise<boolean> => {
  try {
    const response = (await goodsApi.updateInfo(msg)).data as commonResponse
    return response.isOk
  } catch (err) {
    console.log(err)
    return false
  }
}

export const updateFigure = async (msg: {
  id: string | Blob
  figure: string | Blob
}): Promise<boolean> => {
  try {
    const response = (await goodsApi.updateFigure(msg)).data as commonResponse
    return response.isOk
  } catch (err) {
    console.log(err)
    return false
  }
}

export const addInfo = async (msg: {
  merchantId: string | Blob
  name: string | Blob
  type: string | Blob
  price: string | Blob
  description: string | Blob
  figure: string | Blob
}): Promise<boolean> => {
  try {
    const response = (await goodsApi.addInfo(msg)).data as commonResponse
    return response.isOk
  } catch (err) {
    console.log(err)
    return false
  }
}

export const addComment = async (msg: {
  orderId: number
  content: string
  score: number
}): Promise<boolean> => {
  try {
    const response = (await goodsApi.addComment(msg)).data as commonResponse
    return response.isOk
  } catch (err) {
    console.log(err)
    return false
  }
}

export const getComments = async (msg: { id: number }): Promise<Object | undefined> => {
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
    console.log(err)
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
