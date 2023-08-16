import { commonResponse, getterResponse } from '../interface/responseType.ts'
import { merchantApi } from './axiosApi.ts'

export const login = async (msg: { name: string; password: string }): Promise<boolean> => {
  try {
    const response = (await merchantApi.login(msg)).data as commonResponse
    return response.isOk
  } catch (err) {
    console.log(err)
    return false
  }
}

export const register = async (msg: {
  name: string
  password: string
  email: string
}): Promise<boolean> => {
  try {
    const response = (await merchantApi.register(msg)).data as commonResponse
    return response.isOk
  } catch (err) {
    console.log(err)
    return false
  }
}

export const updatePassword = async (msg: {
  name: string
  oldPassword: string
  newPassword: string
}): Promise<boolean> => {
  try {
    const response = (await merchantApi.updatePassword(msg)).data as commonResponse
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
    const response = (await merchantApi.updateFigure(msg)).data as commonResponse
    return response.isOk
  } catch (err) {
    console.log(err)
    return false
  }
}

export const getInfo = async (msg: { name: string }): Promise<Object | undefined> => {
  try {
    const response = (await merchantApi.getInfo(msg)).data as getterResponse
    if (response.isOk) {
      return response.content as {
        id: number
        name: string
        email: string
        bio: string
        regTime: Date
        figure: string
      }
    } else return undefined
  } catch (err) {
    console.log(err)
    return undefined
  }
}

export const updateInfo = async (msg: {
  id: number
  email: string
  bio: string
}): Promise<boolean> => {
  try {
    const response = (await merchantApi.updateInfo(msg)).data as commonResponse
    return response.isOk
  } catch (err) {
    console.log(err)
    return false
  }
}

export const getSellerGoodsList = async (msg: { id: number }): Promise<Object | undefined> => {
  try {
    const response = (await merchantApi.getSellerGoodsList(msg)).data as getterResponse
    if (response.isOk) {
      return response.content as {
        goodsId: number
        merchantId: number
        name: string
        type: string
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

export default {
  login,
  register,
  updatePassword,
  getInfo,
  updateInfo,
  updateFigure,
  getSellerGoodsList
}
