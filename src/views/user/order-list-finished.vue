<template>
  <div>
    <el-table  style="width: 100%" height="250">
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
</script>

<style >
</style>