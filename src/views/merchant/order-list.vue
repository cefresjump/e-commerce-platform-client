<template>
  <div class="layout-order">
    <div class="layout-order-list">
      <!-- 商品订单信息 -->
      <el-table :data="orderTableData" style="width: 100%" height="250">
        <!-- 表中数据 -->
        <el-table-column label="创建日期" prop="createDate" width="170">
          <template #default="scope">
            {{ formatDate(scope.row.createDate) }}
          </template>
        </el-table-column>
        <el-table-column prop="goodsName" label="商品名称" width="200" />
        <el-table-column prop="shippingAddress" label="发货地点" />
        <el-table-column prop="address" label="收货地址" />
        <el-table-column prop="buyCount" label="数量" width="70" />
        <el-table-column prop="expressNumber" label="快递号" width="200" />
        <el-table-column prop="stage" label="订单状态">
          <template #default="scope">
            {{ orderStageToString(scope.row.stage) }}
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ElTable, ElTableColumn } from 'element-plus'
import { ref, onMounted } from 'vue'
import orderApi from '../../lib/orderApi'
import { merchantAuthStore } from '../../store/merchantAccount'
import { formatDate } from '../../utils/dateUtils.ts'
import { orderStageToString } from '../../utils/toString.ts'

// 初始化
const orderTableData = ref()

onMounted(async () => {
  const result = await orderApi.getSellerList(merchantAuthStore().merchantId)
  if (result) {
    orderTableData.value = result
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
