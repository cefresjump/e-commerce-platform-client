<template>
  <div>
    <h2>用户信息</h2>
    <hr>
    <el-form :model="userInfoData" label-width="120px">
      <div class="figure-message">
        <el-form-item  label="用户头像"></el-form-item>
        <div style="height: 40px"></div>
        <el-upload
          class="avatar-uploader"
          name="figure"
          action="http://localhost:30000/upload"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
        >
          <img v-if="userInfoData.figure" :src="userInfoData.figure" class="figure" />
          <el-icon v-else>
            <Plus />
          </el-icon>
        </el-upload>
      </div>
      <el-form-item  label="用户id:">{{ userInfoData.id}}</el-form-item>
      <el-form-item  label="账号创建时间:">{{ formatDate(userInfoData.createDate) }}</el-form-item>
      <el-form-item  label="用户名:">{{ userInfoData.name}}</el-form-item>
      <el-form-item  label="邮箱:">
        <el-input v-model="userInfoData.email"></el-input>
      </el-form-item>
      <el-form-item  label="地址:">
        <el-input v-model="userInfoData.address"></el-input>
      </el-form-item>
      <el-form-item  label="自我简介:">
        <el-input v-model="userInfoData.bio"></el-input>
      </el-form-item>
      <ElButton type="primary" plain @click="handleEdit">提交修改</ElButton>
    </el-form>
  </div>
</template>

<script setup>
import { formatDate } from '../../utils/dateUtils.ts'
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import userApi from '../../lib/userApi';
import { userAuthStore } from '../../store/userAccount.ts'
import { ElText, ElInput, ElButton, ElMessage } from 'element-plus'



const router = useRouter()

// 检测是否登陆，未登陆则跳转到登陆界面
onMounted(async() => {
  if (!userAuthStore().isLoggedIn) {
    router.replace('/account/userLogin')
  }else{
    await getUserInfo()
  }
})


// 创建用户信息数组
let userInfoData=ref({})
const imageName = ref('')

// 获取用户数据
async function getUserInfo() {
  const response=await userApi.getInfo(userAuthStore().userName)
  if(response){
    userInfoData.value=response
    console.log(userInfoData.value);
  }
  
}

const handleAvatarSuccess = (response) => {
  if (response.isOk) {
    userInfoData.figure = response.content.path
    imageName.value = response.content.name
  }
}

const handleEdit = async () => {
  const data = {
    id: userInfoData.value.id,
    email: userInfoData.value.email,
    address:userInfoData.value.address,
    bio: userInfoData.value.bio,
    figure: imageName.value
  }
  const result = await userApi.updateInfo(data.id, data.email,data.bio,data.address,  data.figure)
  if (result) {
    ElMessage({
      message: '修改信息成功',
      type: 'success'
    })
    await getUserInfo()
  } else
    ElMessage({
      message: '修改信息失败!',
      type: 'error'
    })
}
</script>

<style scoped>
.el-text {
  font-size: 18px;
  align-self: self-start;
}

.el-input {
  width: 400px;
}

.profile {
  display: flex;
  flex-direction: column;
  padding: 30px 50px 0 30px;
}

.divider {
  margin: 10px 0 10px 0;
  border-top: solid 1px;
  border-color: rgba(100, 100, 100, 0.4);
}

.message {
  display: flex;
  flex-direction: row;
}

.text-message {
  width: 500px;
}

.figure-message {
  display: flex;
  flex-direction: column;
}

.avatar-uploader {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.figure {
  max-width: 120px;
}

.message-box {
  display: flex;
  text-align: left;
  flex-direction: column;
  padding: 5px 0 20px 0;
}

.descriptText {
  padding: 2px 0 0 0;
  font-size: 10px;
  color: rgba(100, 100, 100, 0.4);
}</style>
