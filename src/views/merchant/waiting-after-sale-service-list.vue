<script setup>
import { ElTable, ElTableColumn, ElMessage } from 'element-plus'
import { ref, onMounted, computed } from 'vue'
import requestApi from '../../lib/requestApi'
import { merchantAuthStore } from '../../store/merchantAccount'
import { formatDate } from '../../utils/dateUtils.ts'
import { requestTypeToString } from '../../utils/toString.ts'

// 初始化
const requestTableData = ref([{}])

const filterTableData = computed(() => {
  return requestTableData.value.filter((e) => {
    return e.stage === 'WAITING_HANDLE'
  })
})

const getData = async () => {
  const result = await requestApi.getSellerAfterSaleRequest(merchantAuthStore().merchantId)
  if (result) {
    requestTableData.value = result
  }
}

const acceptRequest = async (index) => {
  const result = await requestApi.updateAfterSaleRequest(filterTableData.value.at(index).id, 'ACCEPTED');
  if (result) {
    ElMessage({
      message: '处理成功',
      type: 'success'
    })
    getData();
  } else {
    ElMessage({
      message: '处理失败',
      type: 'error'
    })
  }
}

const rejectRequest = async (index) => {
  const result = await requestApi.updateAfterSaleRequest(filterTableData.value.at(index).id, 'REJECTED');
  if (result) {
    ElMessage({
      message: '处理成功',
      type: 'success'
    })
    getData();
  } else {
    ElMessage({
      message: '处理失败',
      type: 'error'
    })
  }
}

onMounted(async () => await getData())
</script>

<template>
  <div class="layout-order">
    <div class="layout-order-list">
      <el-table :data="filterTableData" style="width: 100%" height="250">
        <el-table-column prop="createDate" label="请求日期" width="170">
          <template #default="scope">
            {{ formatDate(scope.row.createDate) }}
          </template>
        </el-table-column>
        <el-table-column prop="orderDate" label="订单日期" width="170">
          <template #default="scope">
            {{ formatDate(scope.row.orderDate) }}
          </template>
        </el-table-column>
        <el-table-column prop="userName" label="用户名称" width="200" />
        <el-table-column prop="goodsName" label="商品名称" width="200" />
        <el-table-column prop="orderPrice" label="价格" width="70" />
        <el-table-column prop="type" label="请求类型" width="100">
          <template #default="scope">
            {{ requestTypeToString(scope.row.type) }}
          </template>
        </el-table-column>
        <el-table-column label="操作" fixed="right">
          <template #default="scope">
            <el-button size="small" @click="acceptRequest(scope.$index)">接受</el-button>
            <el-button size="small" @click="rejectRequest(scope.$index)">拒绝</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<style scoped>
.layout-order-list {
  padding: 50px 10px 0 20px;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
