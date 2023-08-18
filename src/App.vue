<script lang="ts" setup>
import cefresMenu from './components/cefres-menu.vue';
import cefresMenuItem from './components/cefres-menu-item.vue';
import { userAuthStore } from './store/userAccount';

const handleExitAccount = ()=>{

}

</script>

<template>
  <template v-if="$route.path.startsWith('/account') || $route.path.startsWith('/merchant')">
    <RouterView></RouterView>
  </template>
  <template v-else>
    <div class="topNav">
      <cefresMenu default-active="/" class="topMenu" mode="horizontal" :ellipsis="false">
        <div style="flex-grow: 0.2;"></div>
        <cefresMenuItem index="/">首页</cefresMenuItem>
        <div style="flex-grow:1"></div>
        <div style="display: flex;" v-if="userAuthStore().isLoggedIn">
          <div style="padding: 0 10px 0 0;">你好，用户{{ }}</div>
          <div class="exitButton" @click="handleExitAccount">登出</div>
          <cefresMenuItem index="/user/info">用户中心</cefresMenuItem>
          <cefresMenuItem index="/user/order">我的订单</cefresMenuItem>
          <cefresMenuItem index="/user/service">售后管理</cefresMenuItem>
        </div>
        <div style="display: flex;" v-else>
          <cefresMenuItem index="/account/userLogin">你好，请登录</cefresMenuItem>
          <div style="color:rgb(51,51,51)">或者</div>
          <cefresMenuItem index="/account/userRegister">注册</cefresMenuItem>
        </div>
        <cefresMenuItem index="/account/merchantLogin">商家登录</cefresMenuItem>
        <div style="flex-grow: 0.2;"></div>
      </cefresMenu>
    </div>
    <div class="mainContent">
      <RouterView></RouterView>
    </div>
  </template>
</template>

<style scoped>
.topMenu {
  margin: auto;
  min-height: 30px;
  line-height: 30px;
  background-color: rgb(227, 228, 229);
  font-size: 13px;
}

.exitButton {
  user-select: none;
  cursor: pointer;
}

.exitButton:hover {
  color: rgb(80, 80, 80);
}
</style>
