<script setup>
import { ElText, ElInput, ElButton, ElMessage } from 'element-plus'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { formatDate } from '../../utils/dateUtils.ts'
import merchantApi from '../../lib/merchantApi.ts'
import { merchantAuthStore } from '../../store/merchantAccount.ts'
import { convertPathToName } from '../../utils/path.ts'

const router = useRouter()

onMounted(() => {
  if (!merchantAuthStore().isLoggedIn) {
    router.replace('/account/merchantLogin')
  }
})

const merchantInfo = ref({})

const imageName = ref('')

const getInfoData = async () => {
  const result = await merchantApi.getInfo(merchantAuthStore().merchantName)
  if (result) {
    merchantInfo.value = result
    imageName.value = convertPathToName(merchantInfo.value.figure)
  }
}

const handleAvatarSuccess = (response) => {
  if (response.isOk) {
    merchantInfo.value.figure = response.content.path
    imageName.value = response.content.name
  }
}

const handleEdit = async () => {
  const data = {
    id: merchantInfo.value.id,
    email: merchantInfo.value.email,
    bio: merchantInfo.value.bio,
    figure: imageName.value
  }
  const result = await merchantApi.updateInfo(data.id, data.email, data.bio, data.figure)
  if (result) {
    ElMessage({
      message: '修改信息成功',
      type: 'success'
    })
    await getInfoData()
  } else
    ElMessage({
      message: '修改信息失败!',
      type: 'error'
    })
}

//页面被挂载时（也可以说切换到这个页面上时）执行的方法
onMounted(async () => {
  await getInfoData()
})
</script>

<template>
  <div class="profile">
    <ElText style="font-size: 25px">个人信息</ElText>
    <div class="divider"></div>
    <div class="message">
      <div class="text-message">
        <div>
          <ElText size="small" type="info">
            你的用户id:{{ merchantInfo.id }}，创建于{{ formatDate(merchantInfo.createDate) }}
          </ElText>
        </div>
        <div class="message-box">
          <ElText>用户名</ElText>
          <ElInput disabled v-model="merchantInfo.name"></ElInput>
          <ElText class="descriptText">你的名字将展示在平台上</ElText>
        </div>
        <div class="message-box">
          <ElText>邮箱</ElText>
          <ElInput v-model="merchantInfo.email"></ElInput>
        </div>
        <div class="message-box">
          <ElText>个人介绍</ElText>
          <ElInput v-model="merchantInfo.bio" type="textarea"></ElInput>
        </div>
        <ElButton type="primary" plain @click="handleEdit">提交修改</ElButton>
      </div>
      <div style="flex-grow: 0.2"></div>
      <div class="figure-message">
        <ElText size="small">用户头像</ElText>
        <div style="height: 40px"></div>
        <el-upload
          class="avatar-uploader"
          name="figure"
          action="http://localhost:30000/upload"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
        >
          <img v-if="merchantInfo.figure" :src="merchantInfo.figure" class="figure" />
          <el-icon v-else>
            <Plus />
          </el-icon>
        </el-upload>
      </div>
    </div>
  </div>
</template>

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
}
</style>
