
<template>
  <div>
    <el-table :data="tableData" style="width: 100%" height="250">
      <el-table-column prop="createDate" label="订单创建时间" width="250" />
      <el-table-column prop="merchantName" label="商户名称" width="200" />
      <el-table-column prop="goodsFigure" label="商品图片" width="200" />
      <el-table-column prop="goodsName" label="商品名" width="200" />
      <el-table-column prop="shippingAddress" label="收货地址" width="300" />
      <el-table-column prop="price" label="价格" width="200" />
      <el-table-column prop="buyCount" label="购买数量" width="150" />
      <el-table-column prop="stage" label="订单状态"  />
      <el-table-column label="操作" >
        <template #header>
          <el-input v-model="searchText" size="small" placeholder="输入待搜索商品名" />
        </template>
        <template #default="scope">
          <el-button size="small" @click="handle(scope.$index, scope.row)">确认收货</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { ref,onMounted,computed} from 'vue'
import orderApi from '../../lib/orderApi.ts'
import { userAuthStore } from '../../store/userAccount.ts'

const searchText = ref('')

//表格数据
const tableData = ref([{}])

// 筛选后的数据
const filterTableData = computed(() =>
  tableData.value.filter(
    (stage) =>
      stage=="NEED_CONFIRM"
  )
)

//页面被挂载时（也可以说切换到这个页面上时）执行的方法
onMounted(async () => {
  const result = await orderApi.getBuyerList(userAuthStore().userId)
  if (result) tableData.value = result
  console.log(result)
})

const confirmGoods=async ()=>{
  const result=await orderApi.confirmGoods(id)
  if (result) tableData.value = result
}
</script>

<style scoped></style>
