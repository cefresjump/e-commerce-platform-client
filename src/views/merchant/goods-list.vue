<template>
  <el-container class="layout-goods" style="height: 500px"><el-header>
      <div class="goodsHead" style="font-size: 30px; font-family: 微软雅黑; text-align: center">
        <span><el-icon>
            <message />
          </el-icon>商品信息</span>
      </div>
    </el-header>
    <el-container>
      <el-main>
        <el-table :data="filterTableData" style="width: 100%">
          <el-table-column label="商品号" prop="goodsId" width="80" />
          <el-table-column label="创建日期" prop="createDate" width="200"/>
          <el-table-column label="商品图片" prop="figure">
            <template #default="scope">
              <img :src="scope.row.figure" alt="商品图片" style="max-width: 100px; max-height: 100px;" />
            </template>
          </el-table-column>
          <el-table-column label="商品名称" prop="name" width="200" />
          <el-table-column label="商品价格" prop="price" width="120" />
          <el-table-column label="操作" align="left" fixed="right">
            <template #header>
              <el-input v-model="searchText" size="small" placeholder="输入待搜索商品名" />
            </template>
            <template #default="scope">
              <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 添加商品 -->
        <el-button class="addItem" style="width: 100%" @click="onAddItem">添加商品</el-button>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
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
const searchText = ref('')
import merchantApi from '../../lib/merchantApi.ts';
import { merchantAuthStore } from '../../store/merchantAccount.ts';

// 搜索商品
const filterTableData = computed(() =>
  tableData.value.filter(
    (goodsInfo) => !searchText.value || goodsInfo.name.toLowerCase().match(searchText.value.toLowerCase())
    // goodsInfo.type.toLowerCase().match(search.value.toLowerCase())
  )
)
const handleEdit = (index, row) => {
  console.log(index, row)
}

//表格数据
const tableData = ref([{}]);

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

//页面被挂载时（也可以说切换到这个页面上时）执行的方法
onMounted(async () => {
  const result = await merchantApi.getSellerGoodsList(merchantAuthStore().merchantId);
  if (result) tableData.value = result;
})
</script>

<style scoped>
.layout-goods .el-header {
  position: relative;
  color: var(--el-text-color-primary);
}

.layout-goods .el-menu {
  border-right: none;
}

.layout-goods .el-main {
  padding: 0;
}
</style>
