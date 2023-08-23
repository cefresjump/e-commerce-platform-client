<script setup>
const returnFormRef = {
  reType: '',
  rePrice: '',
  reReason: ''
}
function submitForm(returnFormRef) {
  this.$refs[returnFormRef].validate((valid) => {
    if (valid) {
      alert('提交成功!')
    } else {
      console.log('提交失败!!')
      return false
    }
  })
}
//返回上一个页面
//没有写路由测试过
function goBack() {
  if (window.history.length <= 1) {
    this.$router.push({ path: '/' })
    return false
  } else {
    this.$router.go(-1)
  }
}
</script>

<template>
  <div class="container">
    <div class="form_container">
      <div class="header">订单详情</div>
      <!--订单信息展示区域-->
      <div></div>
      <div class="header">售后申请服务</div>
      <!--售后服务申请表单-->
      <div>
        <el-form ref="returnFormRef" :model="returnFormRef" label-width="auto" class="returnForm">
          <el-form-item label="退款类型">
            <el-radio-group v-model="returnFormRef.reType">
              <el-radio label="RETURNS_N_REFUND">退款不退货</el-radio>
              <el-radio label="REFUND">退货退款</el-radio>
              <el-radio label="EXCHANGE_GOODS">更换商品</el-radio>
              <el-radio label="REPAIR">维修</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="退款原因" prop="reReason">
            <el-input
              :rows="10"
              v-model="returnFormRef.reReason"
              placeholder="请详细描述退款原因"
            ></el-input>
          </el-form-item>
          <!--按键-->
          <el-form-item>
            <el-button type="primary" @click="submitForm('returnFormRef')">确认</el-button>
            <el-button @click="goBack()"> 取消 </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style scoped>
/*全局样式*/
html,
body {
  width: 100%;
  height: 100%;
}
/*背景样式*/
.container {
  background-image: linear-gradient(to right, #b5e7f9, #88b0f4);
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0px auto;
}
/*表单底部样式*/
.form_container {
  height: 100%;
  width: 80%;
  background-color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
/*标题样式*/
.header {
  font-size: 38px;
  font-weight: bold;
  text-align: center;
  line-height: 50px;
}
/*售后表单样式*/
.returnForm {
  padding: 50px;
}
</style>
