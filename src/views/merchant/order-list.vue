<template>
  <div class="layout-order">
    <el-container class="layout-order-list">
      <el-space :size="20" spacer=" "></el-space>
      <el-header>
        <el-menu class="el-menu-demo" mode="horizontal">
          <el-menu-item index="1"
            ><el-icon><Box /></el-icon>待发货</el-menu-item
          >

          <el-menu-item index="2"
            ><el-icon><Van /></el-icon>配送中</el-menu-item
          >

          <el-menu-item index="3"
            ><el-icon><OfficeBuilding /></el-icon>已送达</el-menu-item
          >
        </el-menu>
      </el-header>
      <el-container>
        <el-main>
          <!-- 商品订单信息 -->
          <el-table :data="order_tableData" style="width: 100%" height="250">
            <!-- 表中数据 -->
            <el-table-column prop="date" label="Date" width="200" />
            <el-table-column prop="name" label="Name" width="200" />
            <el-table-column prop="address" label="Address" />
            <!-- 商品状态(-1未送,0在送,1已到) -->
            <el-table-column prop="flag" label="flag" />
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
let whileListedModules = ['vue', 'element-ui']
import { ref } from 'vue'
import {
  ElMain,
  ElRow,
  ElCol,
  ElMenu,
  ElMenuItem,
  ElContainer,
  ElHeader,
  ElIcon,
  ElTable,
  ElTableColumn
} from 'element-plus'
// 默认数据
const item = {
  date: 'xxxx--xx-xx',
  name: 'null',
  address: 'null',
  flag: '0'
}
// 初始化
const order_tableData = ref(Array.from({ length: 20 }).fill(item))

// 样式
</script>

<style scoped>
.layout-order-list .el-main {
  padding: 0;
}
.layout-order-list .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>
