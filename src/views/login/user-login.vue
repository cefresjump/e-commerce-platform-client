<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import userApi from '../../lib/userApi'
import { userAuthStore } from '../../store/userAccount'

const router = useRouter()
const loginForm = ref({ name: '', password: '' })
const submitMessage = ref('')

const login = async () => {
  const accountMsg = loginForm.value
  if (accountMsg.name === '' && accountMsg.password === '') {
    submitMessage.value = '请输入信息'
    setTimeout(() => (submitMessage.value = ''), 1000)
  } else {
    const result = await userApi.login(accountMsg.name, accountMsg.password)
    if (result) {
      userAuthStore().setUser(result.id, accountMsg.name)
      submitMessage.value = '登录成功，正在跳转。。。'
      setTimeout(() => router.push('/'), 1000)
    } else {
      submitMessage.value = '登录失败'
      setTimeout(() => (submitMessage.value = ''), 1000)
    }
  }
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
      <div>简购坊</div>
      <div style="flex-grow: 0.7"></div>
    </div>
    <div class="content">
      <img src="../../assets/img/user-login.webp" style="max-height: 500px" />
      <el-form :model="loginForm" status-icon ref="loginFormRef" class="login-form">
        <div style="padding: 0 0 20px 0; font-size: 25px">登录</div>
        <!--账号-->
        <el-form-item label="账号" prop="name">
          <el-input
            label="用户名"
            :rows="8"
            v-model="loginForm.name"
            placeholder="请输入账号"
          ></el-input>
        </el-form-item>
        <!--密码-->
        <el-form-item label="密码" prop="password">
          <el-input size="medium" placeholder="请输入密码" v-model="loginForm.password"></el-input>
        </el-form-item>
        <div class="login-button" @click="login">登录</div>
        <div class="login-message">{{ submitMessage }}</div>
        <div class="jump-register" @click="jumpUserReg">立即注册</div>
      </el-form>
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
  font-size: 25px;
  color: rgb(51, 51, 51);
  font-weight: 300;
  text-align: center;
  line-height: 100px;
  box-shadow: 0px 1px 7px rgba(30, 30, 30, 0.2);
}

.content {
  margin: 20px 0 0 0;
  padding: 0px 0 0 0;
  height: 500px;
  width: 1000px;
  display: flex;
  flex-direction: row;
}

/* 登录表单样式 */
.login-form {
  width: 350px;
  height: 400px;
  padding: 100px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 2px;
  box-shadow: 0px 1px 7px rgba(30, 30, 30, 0.2);
}

.login-button {
  padding: 10px;
  font-size: 22px;
  text-align: center;
  width: 250px;
  color: rgb(255, 255, 255);
  background-color: rgb(188, 1, 32);
  cursor: pointer;
}

.login-message {
  padding: 10px;
  width: 250px;
  height: 100px;
  color: red;
  text-align: left;
}

.jump-register {
  width: 250px;
  height: 100px;
  text-align: right;
  cursor: pointer;
}

.jump-register:hover {
  text-decoration: underline;
}
</style>
