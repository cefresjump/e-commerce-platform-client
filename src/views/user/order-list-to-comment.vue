<template>
  <div>
    <el-table :data="tableData" style="width: 100%" height="700">
      <el-table-column prop="createDate" label="订单创建时间" width="250" />
      <el-table-column prop="merchantName" label="商户名称" width="200" />
      <el-table-column prop="goodsFigure" label="商品图片" width="200" >
        <template #default="scope">
        <img
          :src="scope.row.goodsFigure"
          alt="商品图片"
          style="max-width: 100px; max-height: 100px"
        />
      </template>
      </el-table-column>
      <el-table-column prop="goodsName" label="商品名" width="200" />
      <el-table-column prop="shippingAddress" label="收货地址" width="300" />
      <el-table-column prop="price" label="价格" width="200" />
      <el-table-column prop="buyCount" label="购买数量" width="150" />
      <el-table-column prop="stage" label="订单状态"  >
        <template #default="scope">
          {{ stageMap.show[scope.row.stage]}}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button text size="small" @click="open(scope.row)">添加评论</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { ref,onMounted,computed} from 'vue'
import orderApi from '../../lib/orderApi'
import { userAuthStore } from '../../store/userAccount.ts'
import { ElMessage, ElMessageBox } from 'element-plus'
import goodsApi from '../../lib/goodsApi';


const stageMap={show:{'WAITING_GOODS':"待送达",'NEED_CONFIRM':"待确认",'TO_COMMENT':"待评论",'FINISHED':"已完成"}}
// 添加评论
async function open(row) {
  const response=await ElMessageBox.prompt('请输入评论', 'Tip', {
    confirmButtonText: '提交',
    cancelButtonText: '取消',
  })
    .then(({ value }) => {
      ElMessage({
        type: 'success',
        message: `Your comment is:${value}`,
      })

    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Input canceled',
      })
    })
}

//表格数据
const tableData = ref([{}])
//页面被挂载时（也可以说切换到这个页面上时）执行的方法
onMounted(async () => {
  const result = await orderApi.getBuyerList(userAuthStore().userId)
  if (result) tableData.value = result
  console.log(result)
})
</script>

<style scoped></style>
