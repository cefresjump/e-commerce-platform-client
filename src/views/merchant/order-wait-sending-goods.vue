
<script setup>
import { ElTable, ElTableColumn, ElMessage, ElMessageBox } from 'element-plus'
import { ref, onMounted, computed } from 'vue'
import orderApi from '../../lib/orderApi'
import { merchantAuthStore } from '../../store/merchantAccount'
import { formatDate } from '../../utils/dateUtils.ts'

// 初始化
const orderTableData = ref([{}])

const filterTableData = computed(() => {
  return orderTableData.value.filter((e) => {
    return e.stage === 'WAITING_GOODS'
  })
})

const getData = async () => {
  const result = await orderApi.getSellerList(merchantAuthStore().merchantId)
  if (result) {
    orderTableData.value = result
  }
}

const sendGoodsMessage = (index) => {
  ElMessageBox.prompt('请输入快递号', '货物发货', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    inputErrorMessage: '输入快递号：',
  })
    .then(({ value }) => {
      sendGoods(filterTableData.value.at(index).id, value);
    })
    .catch(() => {
    })
}

const sendGoods = async (id, expressNumber) => {
  const result = await orderApi.sendGoods(id, expressNumber);
  if (result) {
    ElMessage({
      message: '发货成功',
      type: 'success'
    })
    await getData();
  } else {
    ElMessage({
      message: '发货失败',
      type: 'error'
    })
  }
}



onMounted(async () => await getData())
</script>

<template>
  <div class="layout-order">
    <div class="layout-order-list">
      <!-- 商品订单信息 -->
      <el-table :data="filterTableData" style="width: 100%" height="250">
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
        <el-table-column label="操作" fixed="right">
          <template #default="scope">
            <el-button size="small" @click="sendGoodsMessage(scope.$index)">发货</el-button>
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
