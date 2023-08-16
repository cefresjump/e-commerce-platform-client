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
  updateFigure: (data: { id: string | Blob; figure: string | Blob }) => {
    const formData = new FormData()
    formData.append('id', data.id)
    formData.append('figure', data.figure)
    return api.post('/user/updateFigure', formData)
  },
  getGoodsList: () => api.post('/user/getGoodsList')
}

export const merchantApi = {
  login: (data: any) => api.post('/merchant/login', data),
  register: (data: any) => api.post('/merchant/register', data),
  updatePassword: (data: any) => api.post('/merchant/updatePassword', data),
  getInfo: (data: any) => api.post('/merchant/getInfo', data),
  updateInfo: (data: any) => api.post('/merchant/updateInfo', data),
  updateFigure: (data: { id: string | Blob; figure: string | Blob }) => {
    const formData = new FormData()
    formData.append('id', data.id)
    formData.append('figure', data.figure)
    return api.post('/merchant/updateFigure', formData)
  },
  getSellerGoodsList: (data: any) => api.post('/goods/getSellerGoodsList', data)
}

export const goodsApi = {
  getInfo: (data: any) => api.post('/goods/getInfo', data),
  updateInfo: (data: any) => api.post('/goods/updateInfo', data),
  updateFigure: (data: { id: string | Blob; figure: string | Blob }) => {
    const formData = new FormData()
    formData.append('id', data.id)
    formData.append('figure', data.figure)
    return api.post('/goods/updateFigure', formData)
  },
  addInfo: (data: {
    merchantId: string | Blob
    name: string | Blob
    type: string | Blob
    price: string | Blob
    description: string | Blob
    figure: string | Blob
  }) => {
    const formData = new FormData()
    formData.append('merchantId', data.merchantId)
    formData.append('name', data.name)
    formData.append('type', data.type)
    formData.append('price', data.price)
    formData.append('description', data.description)
    formData.append('figure', data.figure)
    return api.post('/goods/addInfo', formData)
  },
  addComment: (data: any) => api.post('/goods/addComment', data),
  getComments: (data: any) => api.post('/goods/getGoodsCommentInfo', data)
}

export const orderApi = {
  addInfo: (data: any) => api.post('/order/addInfo', data),
  getBuyerList: (data: any) => api.post('/order/getBuyerList', data),
  getSellerList: (data: any) => api.post('/order/getSellerList', data),
  updateStage: (data: any) => api.post('/order/updateStage', data)
}

export const requestApi = {
  addAfterSale: (data: any) => api.post('/request/addAfterSale', data),
  getSellerAfterSaleRequest: (data: any) => api.post('/request/getSellerAfterSaleRequest', data),
  getBuyerAfterSaleRequest: (data: any) => api.post('/request/getBuyerAfterSaleRequest', data),
  updateAfterSaleRequest: (data: any) => api.post('/request/updateAfterSaleRequest', data)
}

export default api
