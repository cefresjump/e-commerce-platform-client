<script setup>
import { computed, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ElTable, ElTableColumn, ElButton, ElInput } from 'element-plus'
import merchantApi from '../../lib/merchantApi.ts'
import { merchantAuthStore } from '../../store/merchantAccount.ts'
import { formatDate } from '../../utils/dateUtils.ts'

const router = useRouter()

const tableData = ref([{}])
const searchText = ref('')
const filterTableData = computed(() =>
  tableData.value.filter(
    (goodsInfo) =>
      !searchText.value || goodsInfo.name.toLowerCase().match(searchText.value.toLowerCase())
  )
)

const handleEdit = (index) => {
  router.push(`/merchant/editGoods/${filterTableData.value.at(index).id}`);
}

const onAddItem = () => {
  router.push('/merchant/newGoods')
}

//页面被挂载时（也可以说切换到这个页面上时）执行的方法
onMounted(async () => {
  const result = await merchantApi.getSellerGoodsList(merchantAuthStore().merchantId)
  if (result) tableData.value = result
})
</script>

<template>
  <div class="common-view">
    <el-button class="addItem" style="width: 100%" @click="onAddItem">添加商品</el-button>
    <el-input v-model="searchText" size="small" placeholder="输入待搜索商品名" />
    <el-table :data="filterTableData" style="width: 100%">
      <el-table-column label="商品号" prop="id" width="80" />
      <el-table-column label="创建日期" prop="createDate" width="200">
        <template #default="scope">
          {{ formatDate(scope.row.createDate) }}
        </template>
      </el-table-column>
      <el-table-column label="商品图片" prop="figure">
        <template #default="scope">
          <img :src="scope.row.figure" alt="商品图片" style="max-width: 100px; max-height: 100px" />
        </template>
      </el-table-column>
      <el-table-column label="商品名称" prop="name" width="200" />
      <el-table-column label="商品类型" prop="type" width="200" />
      <el-table-column label="商品价格" prop="price" width="120" />
      <el-table-column label="操作" align="left" fixed="right">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped>
.common-view {
  padding: 50px 10px 0 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.addItem {
  margin: 0 20px 10px 0;
  max-width: 100px;
  align-self: self-end;
}
</style>
