export const orderStageToString = (stage: string): string => {
  if (stage === 'WAITING_GOODS') {
    return '待发货'
  } else if (stage === 'NEED_CONFIRM') {
    return '待确认'
  } else if (stage === 'TO_COMMENT') {
    return '待评价'
  } else if (stage === 'FINISHED') {
    return '已完成'
  } else return '未知'
}

export const requestTypeToString = (stage: string): string => {
  if (stage === 'RETURNS_N_REFUND') {
    return '退款退货'
  } else if (stage === 'REFUND') {
    return '仅退款'
  } else if (stage === 'EXCHANGE_GOODS') {
    return '换货'
  } else if (stage == 'REPAIR') {
    return '修理'
  } else return '未知'
}

export const requestStageToString = (stage: string): string => {
  if (stage === 'WAITING_HANDLE') {
    return '待处理'
  } else if (stage === 'REJECTED') {
    return '已拒绝'
  } else if (stage === 'ACCEPTED') {
    return '已接受'
  } else return '未知'
}

export const goodsTypeToString = (type: string): string => {
  if(type==='clothes'){
    return '服装'
  } else if(type==='electronics'){
    return '电子产品'
  } else if(type==='furniture'){
    return '家具'
  } else if(type==='toy'){
    return '玩具'
  } else if(type==='sport'){
    return '运动'
  } else if(type==='tool'){
    return '工具'
  } return '未知'
}