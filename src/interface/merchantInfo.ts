//商家的信息
export interface merchantInfo {
  name: string
  id?: number
  merchantBio?: string
  regTime?: Date
  merchantFigure?: string
}

export interface accountMsg {
  name: string
  password: string
}

//一般用于创建新用户信息时使用
export interface merchantTable {
  account: accountMsg
  info: merchantInfo
}
