//将Date对象转换为需要的字符串格式
export const formatDate = (dateTime: string | number | Date) => {
  const date = new Date(dateTime)
  const year = date.getFullYear()
  const month = date.getMonth() + 1 // 注意月份从0开始计数
  const day = date.getDate()
  const hours = date.getHours()
  const minutes = date.getMinutes()

  return `${year}年${month}月${day}日 ${hours}:${minutes}`
}
