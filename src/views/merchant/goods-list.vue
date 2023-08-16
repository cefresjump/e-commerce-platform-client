<template>
  <el-container class="layout-goods" style="height: 500px"><el-header >
        <div class="goodsHead" style="font-size: 30px; font-family: 微软雅黑; text-align: center;">
          
           
          <span ><el-icon><message/></el-icon>商品信息</span>
        </div>
      </el-header>
    <el-container>
      

      <el-main>
        <el-table :data="filterTableData" style="width: 100%">
 
    <el-table-column label="商品id" prop="id" />
    <el-table-column label="创建日期" prop="createDate" />

    <el-table-column label="商品图片" prop="figure" >
      <template #default="scope1">
        <div style="display: flex; align-items: center" >
           <el-image 
           style="width: 100px; height: 100px;"
           :src="url"
            fit="fill" 
           :lazy="true"
           :zoom-rate="1.3"
           :preview-src-list="srcList"
          
           
           >
          </el-image>
        </div>
    </template>
</el-table-column>

    <el-table-column label="商品名称" prop="name" />
    <el-table-column label="商品价格" prop="price" />
    <el-table-column label="商品详情" prop="description" /> 
   
    <el-table-column align="left" fixed="right">
      <template #header>
        
       <el-input v-model="search" size="small"  placeholder="输入待搜索商品名" />
      </template>

      <template #default="scope">

        <el-button size="small"  @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button
        >

        <!-- 删除编写 -->
        <el-button
         
          size="small"
          type="danger"
         
          @click="handleDelete(scope.$index)"
          >删除</el-button>
      </template>

    </el-table-column>
  </el-table>
  <!-- 添加商品 -->
  <el-button class="addItem" 
  style="width: 100%" 
  @click="onAddItem"
    >添加商品</el-button
  >
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
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
 ElImage
  
} from 'element-plus'
const search = ref('')

import { goodsInfo } from '../../interface/goods.ts';
// 默认图片预载
const url =
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
// 如果可以,可以选择查看不同图片
  const srcList = [
'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
  'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
  'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
  'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
  'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
]
 

       
// 搜索商品
const filterTableData = computed(() =>
  tableData.filter(
    (goodsInfo) =>
      !search.value ||goodsInfo.name.toLowerCase().match(search.value.toLowerCase())
      // goodsInfo.type.toLowerCase().match(search.value.toLowerCase())
      
  )
)
const handleEdit = (index: number, row: goodsInfo) => {
  console.log(index, row)
}

const handleDelete = (index: number) => {
  //删除数据  filterTableData.value.splice(index,1)

}

//初始数据
var tableData: goodsInfo[] = [
  { 
    name: 'Tom',
    id: 1,
    type: "null",
  price: 999,
  description: "难吃",
  figure: "图片url",
  createDate:new Date()
  }, { 
    name: 'Tom',
    id: 1,
    type: "null",
  price: 999,
  description: "难吃",
  figure: "图片url",
  createDate:new Date()
  },
  { 
    name: 'Tom',
    id: 1,
    type: "null",
  price: 999,
  description: "难吃",
  figure: "图片url",
  createDate:new Date()
  },
]

const onAddItem = () => {
//  filterTableData.value.push({ 
//     name: 'Tom',
//     id: 1,
//     type: "null",
//   price: 999,
//   description: "难吃",
//   figure: "图片url"
//   })添加数据

}
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