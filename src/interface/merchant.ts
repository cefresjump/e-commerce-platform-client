//商家的信息
export interface merchantInfo {
  id: number
  name: string
  email:string
  bio: string
  regTime: Date
  figure: string
}

//登录信息
export interface accountMsg {
  name: string
  password: string
}

