import { commonResponse, getterResponse } from '../interface/responseType.ts'
import { userApi } from './axiosApi.ts'

export const login = async (name: string, password: string): Promise<boolean> => {
  try {
    const msg = {
      name,
      password
    }
    const response = (await userApi.login(msg)).data as commonResponse
    return response.isOk
  } catch (err) {
    return false
  }
}

export const register = async (name: string, password: string, email: string): Promise<boolean> => {
  const msg = {
    name,
    password,
    email
  }
  try {
    const response = (await userApi.register(msg)).data as commonResponse
    return response.isOk
  } catch (err) {
    return false
  }
}

export const updatePassword = async (
  name: string,
  oldPassword: string,
  newPassword: string
): Promise<boolean> => {
  const msg = {
    name,
    oldPassword,
    newPassword
  }
  try {
    const response = (await userApi.updatePassword(msg)).data as commonResponse
    return response.isOk
  } catch (err) {
    return false
  }
}

export const getInfo = async (name: string): Promise<Object | undefined> => {
  const msg = { name }
  try {
    const response = (await userApi.getInfo(msg)).data as getterResponse
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
    return undefined
  }
}

export const updateInfo = async (id: number, email: string, bio: string): Promise<boolean> => {
  const msg = { id, email, bio }
  try {
    const response = (await userApi.updateInfo(msg)).data as commonResponse
    return response.isOk
  } catch (err) {
    return false
  }
}

export const updateFigure = async (id: string | Blob, figure: string | Blob): Promise<boolean> => {
  const msg = { id, figure }
  try {
    const response = (await userApi.updateFigure(msg)).data as commonResponse
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
