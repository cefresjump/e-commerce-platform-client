<template>
  <div class="layout-order">
    <div class="layout-order-list">
      <!-- 商品订单信息 -->
      <el-table :data="requestTableData" style="width: 100%" height="250">
        <!-- 表中数据 -->
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
        <el-table-column prop="stage" label="阶段" fixed="right">
          <template #default="scope">
            {{ requestStageToString(scope.row.stage) }}
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script setup>
import { ElTable, ElTableColumn } from 'element-plus'
import { ref, onMounted, computed } from 'vue'
import requestApi from '../../lib/requestApi'
import { merchantAuthStore } from '../../store/merchantAccount'
import { formatDate } from '../../utils/dateUtils.ts'
import { requestTypeToString, requestStageToString } from '../../utils/toString.ts'

// 初始化
const requestTableData = ref([{}])

onMounted(async () => {
  const result = await requestApi.getSellerAfterSaleRequest(merchantAuthStore().merchantId)
  if (result) {
    requestTableData.value = result
  }
})
</script>

<style scoped>
.layout-order-list {
  padding: 50px 10px 0 20px;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
