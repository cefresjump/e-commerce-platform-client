<template>
  <div>
    <div class="orderList">
      <div class="order" v-for="(good, index) in orderList" :key="index">
        <el-table :data="orderList" height="250" border style="width: 100%">
          <el-table-column prop="date" label="创建日期" width="180"> {{  }}</el-table-column>
          <el-table-column prop="name" label="商品名" width="180"> {{ good.goodsName }}</el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// import getUserId from '../store/userAccount.ts';
export default {
  data() {
    return {
      orderList: [],
      confirm: 'TO_COMMENT',
      orderId: 1,
      // userId需后续更改
      userId: 1
    }
  },
  watched() {},
  mounted() {
    this.confirmOrder()
    this.init()
  },
  methods: {
    // 更新订单状态，已确定，转为待评论
    async confirmOrder() {
      const url = 'http://localhost:30000/order/updateStage'
      const data = { id: this.orderId, stage: this.confirm }
      try {
        const response = await axios.post(url, data)
        this.orderStatus = response.data
        this.init()
        console.log(this.orderStatus)
      } catch (err) {
        console.error(err)
      }
    },
    // 刷新数据，重新获取买家订单列表
    async init() {
      const url = 'http://localhost:30000/order/getBuyerList'
      const data = { id: this.userId }
      try {
        const response = await axios.post(url, data)
        this.orderList = response.data.content
        console.log(this.orderList)
      } catch (err) {}
    }
  }
}
</script>
