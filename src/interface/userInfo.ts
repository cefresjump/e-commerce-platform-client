//用户的个人信息
export interface userInfo {
  name: string
  id?: number
  email?: string
  uesrBio?: string
  regTime?: Date
  UserFigure?: string
}

export interface accountMsg {
  name: string
  password: string
}

//一般用于创建新用户信息时使用
export interface userTable {
  account: accountMsg
  info: userInfo
}
