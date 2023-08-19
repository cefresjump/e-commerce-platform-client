<template>
  <el-container class="layout-container-demo" style="height: 500px">
    <!-- header容器 -->
    <el-header style="
        text-align: right;
        font-size: 30px;
        font-family: '微软雅黑', Courier, monospace;
        text-align: center;
      ">
      <div class="toolbar">
        <el-icon style="margin-right: 8px; margin-top: 1px">
          <shop />
        </el-icon>
        <span>商户中心</span>
      </div>
    </el-header>
    <el-container>
      <!-- 侧边容器 -->
      <el-aside width="200px">
        <el-scrollbar>
          <el-menu default-active="/merchant/info" router class="el-menu-vertical-demo">
            <el-menu-item index="/merchant/info">
              <template #title>
                <span><el-icon>
                    <User />
                  </el-icon>商户信息</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/merchant/goods">
              <template #title>
                <span><el-icon>
                    <Goods />
                  </el-icon>商品管理</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/merchant/order">
              <el-icon>
                <DocumentCopy />
              </el-icon>
              <span>订单管理</span>
            </el-menu-item>
            <el-menu-item index="/merchant/service">
              <el-icon>
                <Headset />
              </el-icon>
              <span>售后处理</span>
            </el-menu-item>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <!-- main容器 -->
      <el-main class="elMain">
        <router-view> </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import {
  ElMain,
  ElMenu,
  ElMenuItem,
  ElContainer,
  ElScrollbar,
  ElAside,
  ElHeader,
  ElIcon
} from 'element-plus'
</script>

<style scoped>
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}

.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  border-right-style: solid;
  border-right-width: 1px;
  border-right-color: rgb(10, 112, 195);
}

.layout-container-demo .el-menu {
  border-right: none;
}

.layout-container-demo .el-main {
  padding: 0;
}

.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>
