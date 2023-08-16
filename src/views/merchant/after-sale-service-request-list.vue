<template>
  <el-container class="layout-orders" style="height: 500px"><el-header >
        <div class="ordersHead" style="font-size: 30px; font-family: 微软雅黑; text-align: center;">
          
           
          <span ><el-icon><Headset /></el-icon>售后订单处理</span>
        </div>
      </el-header>
    <el-container>
      

      <el-main>
        <el-table :data="filterTableData" style="width: 100%">
 
    <el-table-column label="订单ID" prop="orderId" />

 
    <el-table-column label="用户ID" prop="userId" />
    <el-table-column label="商品ID" prop="merchantId" >
    </el-table-column>

    <el-table-column label="订单状态" prop="orderStatus" /> 

   
    <el-table-column align="left" fixed="right">
      <template #header>
        
       <el-input v-model="search" size="small"  placeholder="输入要搜索的售后id" />
      </template>

      <template #default="scope">

        <el-button size="small"  @click="handle(scope.$index, scope.row)"
          >处理</el-button
        >

      </template>

    </el-table-column>
  </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { computed,ref } from 'vue'
import {
  ElMain,
  ElContainer,
  ElHeader,
  ElIcon,
  ElTable,
 ElTableColumn,
 ElButton,
 ElInput,

  
} from 'element-plus'
const search = ref('')


// import { goodsInfo } from '../../interface/goodsInfo.ts';

       
// 搜索订单
const filterTableData = computed(() =>
  tableData.filter(
    (orderInfo)=>
      !search.value ||orderInfo.good.name.match(search.value.toLowerCase())
      // goodsInfo.type.toLowerCase().match(search.value.toLowerCase())
      
  )
)
const handle = (index, row) => {
  console.log(index, row)
}



//初始数据
var tableData = [
  { 
    orderId: 1,
  userId: 2,
  merchantId: 3,
  good:{name: 'null',
    id: 1,
    type: "null",
  price: 211,
  description: "XX",
  figure: "图片url"
  }, 
  orderStage:"FINISHED"
  },
]

</script>

<style scoped>
.layout-goods .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.layout-goods .el-menu {
  border-right: none;
}
.layout-goods .el-main {
  padding: 0;
}
</style>