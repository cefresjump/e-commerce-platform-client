import axios from 'axios'

const baseUrl = 'http://localhost:30000'

const api = axios.create({
  baseURL: baseUrl
})

export const userApi = {
  login: (data: any) => api.post('/user/login', data),
  register: (data: any) => api.post('/user/register', data),
  updatePassword: (data: any) => api.post('/user/updatePassword', data),
  getInfo: (data: any) => api.post('/user/getInfo', data),
  updateInfo: (data: any) => api.post('/user/updateInfo', data),
  getGoodsList: () => api.post('/user/getGoodsList')
}

export const merchantApi = {
  login: (data: any) => api.post('/merchant/login', data),
  register: (data: any) => api.post('/merchant/register', data),
  updatePassword: (data: any) => api.post('/merchant/updatePassword', data),
  getInfo: (data: any) => api.post('/merchant/getInfo', data),
  updateInfo: (data: any) => api.post('/merchant/updateInfo', data),
  getSellerGoodsList: (data: any) => api.post('/goods/getSellerGoodsList', data)
}

export const goodsApi = {
  getInfo: (data: any) => api.post('/goods/getInfo', data),
  updateInfo: (data: any) => api.post('/goods/updateInfo', data),
  addInfo: (data: any) => api.post('/goods/addInfo', data),
  addComment: (data: any) => api.post('/goods/addComment', data),
  getComments: (data: any) => api.post('/goods/getComments', data)
}

export const orderApi = {
  addInfo: (data: any) => api.post('/order/addInfo', data),
  getBuyerList: (data: any) => api.post('/order/getBuyerList', data),
  getSellerList: (data: any) => api.post('/order/getSellerList', data),
  confirmGoods: (data: any) => api.post('/order/confirmGoods', data),
  sendGoods: (data: any) => api.post('/order/sendGoods', data)
}

export const requestApi = {
  addAfterSale: (data: any) => api.post('/request/addAfterSale', data),
  getSellerAfterSaleRequest: (data: any) => api.post('/request/getSellerAfterSaleRequest', data),
  getBuyerAfterSaleRequest: (data: any) => api.post('/request/getBuyerAfterSaleRequest', data),
  updateAfterSaleRequest: (data: any) => api.post('/request/updateAfterSaleRequest', data)
}

export default api
