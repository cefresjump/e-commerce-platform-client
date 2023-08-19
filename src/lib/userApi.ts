import { commonResponse, getterResponse } from '../interface/responseType.ts'
import { userApi } from './axiosApi.ts'

export const login = async (name: string, password: string): Promise<Object | undefined> => {
  const body = { name, password }
  try {
    const response = (await userApi.login(body)).data as getterResponse
    if (response.isOk)
      return response.content as {
        id: number
      }
    return undefined
  } catch (err) {
    return undefined
  }
}

export const register = async (name: string, password: string, email: string): Promise<boolean> => {
  const body = {
    name,
    password,
    email
  }
  try {
    const response = (await userApi.register(body)).data as commonResponse
    return response.isOk
  } catch (err) {
    return false
  }
}

export const updatePassword = async (
  id: number,
  oldPassword: string,
  newPassword: string
): Promise<boolean> => {
  const body = {
    name,
    oldPassword,
    newPassword
  }
  try {
    const response = (await userApi.updatePassword(body)).data as commonResponse
    return response.isOk
  } catch (err) {
    return false
  }
}

export const getInfo = async (name: string): Promise<Object | undefined> => {
  const body = { name }
  try {
    const response = (await userApi.getInfo(body)).data as getterResponse
    if (response.isOk) {
      return response.content as {
        id: number
        name: string
        email: string
        address: string
        bio: string
        createDate: Date
        figure: string
      }
    } else return undefined
  } catch (err) {
    return undefined
  }
}

export const updateInfo = async (id: number, email: string, bio: string, address: string): Promise<boolean> => {
  const body = { id, email, bio, address }
  try {
    const response = (await userApi.updateInfo(body)).data as commonResponse
    return response.isOk
  } catch (err) {
    return false
  }
}

export const updateFigure = async (id: string | Blob, figure: string | Blob): Promise<boolean> => {
  const body = { id, figure }
  try {
    const response = (await userApi.updateFigure(body)).data as commonResponse
    return response.isOk
  } catch (err) {
    return false
  }
}

export const getGoodsList = async (): Promise<Object | undefined> => {
  try {
    const response = (await userApi.getGoodsList()).data as getterResponse
    if (response.isOk) {
      return response.content as {
        goodsId: number
        merchantId: number
        name: string
        type: string
        shippingAddress: string
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

export default {
  login,
  register,
  updatePassword,
  getInfo,
  updateInfo,
  updateFigure,
  getGoodsList
}
