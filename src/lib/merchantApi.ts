import { commonResponse, getterResponse } from '../interface/responseType.ts'
import { merchantApi } from './axiosApi.ts'

export const login = async (
  name: string,
  password: string
): Promise<
  | {
      id: number
    }
  | undefined
> => {
  const body = { name, password }
  try {
    const response = (await merchantApi.login(body)).data as getterResponse
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
  const body = { name, password, email }
  try {
    const response = (await merchantApi.register(body)).data as commonResponse
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
  const body = { name, oldPassword, newPassword }
  try {
    const response = (await merchantApi.updatePassword(body)).data as commonResponse
    return response.isOk
  } catch (err) {
    return false
  }
}

export const updateFigure = async (id: string | Blob, figure: string | Blob): Promise<boolean> => {
  const body = { id, figure }
  try {
    const response = (await merchantApi.updateFigure(body)).data as commonResponse
    return response.isOk
  } catch (err) {
    return false
  }
}

export const getInfo = async (
  name: string
): Promise<
  | {
      id: number
      name: string
      email: string
      address: string
      bio: string
      createDate: Date
      figure: string
    }
  | undefined
> => {
  const body = { name }
  try {
    const response = (await merchantApi.getInfo(body)).data as getterResponse
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

export const updateInfo = async (id: number, email: string, bio: string): Promise<boolean> => {
  const body = { id, email, bio }
  try {
    const response = (await merchantApi.updateInfo(body)).data as commonResponse
    return response.isOk
  } catch (err) {
    return false
  }
}

export const getSellerGoodsList = async (
  id: number
): Promise<
  | {
      goodsId: number
      merchantId: number
      name: string
      type: string
      price: number
      description: string
      figure: string
      createDate: Date
    }[]
  | undefined
> => {
  const body = { id }
  try {
    const response = (await merchantApi.getSellerGoodsList(body)).data as getterResponse
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
  getSellerGoodsList
}
