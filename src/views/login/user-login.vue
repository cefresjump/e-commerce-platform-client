<script setup>
import { ref } from 'vue';

const loginForm = ref({ username: '', password: '' });
const loginFormRules = {
  username: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    { min: 3, max: 12, message: "请输入合法用户名", trigger: "blur" }
  ],
  password: [
    { required: true, message: "密码不能为空", trigger: "blur" },
    { min: 6, max: 12, message: "请输入6-12位密码", trigger: "blur" }
  ]
}

function login() {
  //登录预验证
  this.$refs.loginFormRef.validate(async (valid) => {
    if (!valid)
      return;
    //发起登录请求(需要)
    const { data: res } = await this.$http.post("login", this.loginForm);
    if (res.meta.status !== 200)
      return console.log("登录失败");
    console.log("登录成功");
  });
}

function register() {

}
</script>

<template>
  <div class="container">
    <div class="login-container">
      <div class="header">登录账号</div>
      <el-form :model="loginForm" status-icon :rules="loginFormRules" ref="loginFormRef" label-width="100px"
        class="login-form">
        <!--账号-->
        <el-form-item label="账号" prop="username">
          <el-input label="用户名" :rows="8" v-model="loginForm.username" placeholder="请输入账号"></el-input>
        </el-form-item>
        <!--密码-->
        <el-form-item label="密码" prop="password">
          <el-input size="medium" placeholder="请输入密码" v-model="loginForm.password" show-password></el-input>
        </el-form-item> 
        <!--登录注册按钮-->
        <el-form-item>
          <el-button type="primary" size="medium" @click="login">登录</el-button>
          <el-button type="info" @click="register">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped>
html,
body {
  height: 100%;
  width: 100%;
}

.container {
  background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0px auto;
}

.login-container {
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  margin: 0px auto;
}

/* 标题样式 */
.header {
  font-size: 38px;
  font-weight: bold;
  text-align: center;
  line-height: 100px;
}

/* 登录表单样式 */
.login-form {
  width: 550px;
  height: 200px;
  margin: 0px auto;
  background-color: rgba(157, 208, 221, 0.7);
  padding: 40px;
  border-radius: 30px;
}
</style>
