//用户的个人信息
export interface userInfo {
  id: number
  name: string
  email: string
  uesrBio: string
  regTime: Date
  figure: string
}

//登录信息
export interface accountMsg {
  name: string
  password: string
}
