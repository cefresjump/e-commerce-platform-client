
<template>
  <div>
    <!-- 订单列表 -->
    <el-table  :data="orderData" style="width: 100%" height="250">
      <el-table-column prop="createDate" label="订单创建时间" width="250" />
      <el-table-column prop="merchantName" label="商户名称" width="200" />
      <el-table-column prop="goodsFigure" label="商品图片" width="200" />
      <el-table-column prop="goodsName" label="商品名" width="200" />
      <el-table-column prop="shippingAddress" label="收货地址" width="300" />
      <el-table-column prop="price" label="价格" width="200" />
      <el-table-column prop="buyCount" label="购买数量" width="150" />
      <el-table-column prop="stage" label="订单状态"  />
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import orderApi from '../../lib/orderApi'

const item = {
  createDate: '2070-2-31',
  merchantName: '奸商',
  goodsFigure: 'null',
  goodsName: '答辩',
  shippingAddress:'北京市清城区',
  price:'1',
  buyCount:'1',
  stage:'1'
}
// 初始化
const orderData = ref(Array.from({ length: 20 }).fill(item))


</script>

<style scoped></style>
