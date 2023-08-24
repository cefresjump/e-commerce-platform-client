<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import merchantApi from '../../lib/merchantApi'

const router = useRouter()

const registerForm = ref({
  name: '',
  password: '',
  email: ''
})

const submitMessage = ref('')

const registerFormRules = {
  name: [
    { required: true, message: '请输入用户名', trigger: 'change' },
    { min: 0, max: 20, message: '用户名长度不符合要求', trigger: 'change' }
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'change' },
    { min: 8, max: 20, message: '请输入6-20位密码', trigger: 'change' }
  ],
  email: [
    { required: true, message: '邮箱不能为空', trigger: 'change' },
    { pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$', message: '邮箱格式不正确' }
  ]
}

//信息提交,需要写相关
async function submitForm() {
  const accountMsg = registerForm.value
  if (!(accountMsg.name.length <= 20)) {
    submitMessage.value = '请正确输入用户名'
    setTimeout(() => (submitMessage.value = ''), 1500)
  } else if (!(accountMsg.password.length >= 6 && accountMsg.password.length <= 20)) {
    submitMessage.value = '请正确输入密码'
    setTimeout(() => (submitMessage.value = ''), 1500)
  } else if (!accountMsg.email.match('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')) {
    submitMessage.value = '请正确输入邮箱'
    setTimeout(() => (submitMessage.value = ''), 1500)
  } else {
    const result = await merchantApi.register(
      accountMsg.name,
      accountMsg.password,
      accountMsg.email
    )
    if (result) {
      submitMessage.value = '注册成功，正在跳转。。。'
      setTimeout(() => router.push('/account/merchantLogin'), 1500)
    } else {
      submitMessage.value = '已经存在相同用户'
      setTimeout(() => (submitMessage.value = ''), 1500)
    }
  }
}

const jumpUserLogin = () => {
  router.push('/account/merchantLogin')
}

const jumpUserReg = () => {
  router.push('/account/userRegister')
}
</script>

<template>
  <div class="container">
    <div class="header">
      <div style="flex-grow: 0.1"></div>
      <img src="../../assets/icon/icon1.png" style="max-width: 60px; max-height: 60px" />
      <div>企业注册</div>
      <div style="flex-grow: 0.7"></div>
      <div style="font-size: 18px; color: rgb(166, 153, 153)">已有账号？</div>
      <div
        @click="jumpUserLogin"
        style="
          font-size: 18px;
          color: rgb(238, 34, 34);
          text-decoration: underline;
          cursor: pointer;
        "
      >
        请登录
      </div>
    </div>
    <div class="content">
      <el-form
        :model="registerForm"
        status-icon
        ref="registerFormRef"
        :rules="registerFormRules"
        label-width="100px"
        class="register-form"
      >
        <!--用户名-->
        <el-form-item label="用户名" prop="name">
          <el-input
            v-model.number="registerForm.name"
            placeholder="用户名,长度最多二十位"
          ></el-input>
        </el-form-item>
        <!--邮箱-->
        <el-form-item label="邮箱" prop="email">
          <el-input v-model.number="registerForm.email" placeholder="邮箱地址"></el-input>
        </el-form-item>
        <!--密码-->
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="registerForm.password"
            placeholder="密码,长度为八位到二十位"
          ></el-input>
        </el-form-item>
        <el-form-item label-position="right">
          <el-button type="primary" @click="submitForm">提交</el-button>
        </el-form-item>
        <el-form-item class="submit-message" label-position="right">
          {{ submitMessage }}
        </el-form-item>
      </el-form>
      <div class="toMerchantReg">
        <div @click="jumpUserReg">前往用户注册</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.header {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  font-size: 23px;
  color: rgb(51, 51, 51);
  font-weight: 400;
  text-align: center;
  line-height: 100px;
  box-shadow: 0px 1px 7px rgba(30, 30, 30, 0.2);
}

.content {
  padding: 100px 0 0 0;
}

.register-form {
  width: 550px;
  background-color: rgba(250, 250, 250);
  padding: 40px;
  border: solid 1px;
  border-radius: 2px;
  border-color: rgba(100, 100, 100, 0.2);
}

.submit-message {
  color: rgb(230, 62, 49);
}

.toMerchantReg {
  padding: 20px;
  font-size: 16px;
  color: rgb(51, 51, 51);
  text-decoration: underline;
  cursor: pointer;
}
</style>
