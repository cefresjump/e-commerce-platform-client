
<template>
  <div>
    <!-- 订单列表 -->
    <el-table  :data="orderData" style="width: 100%" height="700">
      <el-table-column prop="createDate" label="订单创建时间" width="250" >
        <template #default="scope">
          {{ formatDate(scope.row.createDate) }}
        </template>
      </el-table-column>
      <el-table-column prop="merchantName" label="商户名称" width="200" />
      <el-table-column prop="goodsFigure" label="商品图片" width="200" >
        <template #default="scope">
        <img
          :src="scope.row.goodsFigure"
          alt="商品图片"
          style="max-width: 100px; max-height: 100px"
        />
      </template>
      </el-table-column>
      <el-table-column prop="goodsName" label="商品名" width="150" />
      <el-table-column prop="price" label="价格" width="100" />
      <el-table-column prop="buyCount" label="购买数量" width="100" />
      <el-table-column prop="stage" label="订单状态"  >
        <template #default="scope">
          {{ stageMap.show[scope.row.stage]}}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
// import { ref } from 'vue'
// import orderApi from '../../lib/orderApi'

// const item = {
//   createDate: '2070-2-31',
//   merchantName: '奸商',
//   goodsFigure: 'null',
//   goodsName: '答辩',
//   shippingAddress:'北京市清城区',
//   price:'1',
//   buyCount:'1',
//   stage:'1'
// }
// // 初始化
// const orderData = ref(Array.from({ length: 20 }).fill(item))
import { ref,onMounted,computed} from 'vue'
import orderApi from '../../lib/orderApi.ts'
import { userAuthStore } from '../../store/userAccount.ts'
import { formatDate } from '../../utils/dateUtils.ts'

const stageMap={show:{'WAITING_GOODS':"待送达",'NEED_CONFIRM':"待确认",'TO_COMMENT':"待评论",'FINISHED':"已完成"}}

const searchText = ref('')

//表格数据
let orderData = ref([{}])



// 从后端加载数据
const load=async () => {
  const result = await orderApi.getBuyerList(userAuthStore().userId)
  if (result) {
    orderData.value = result
  }
  console.log(orderData.value+"load")
}

//页面被挂载时（也可以说切换到这个页面上时）执行的方法
onMounted(load)


</script>

<style scoped></style>
