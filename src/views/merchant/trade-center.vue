<template>
  <el-container class="layout-container-demo" style="height: 500px">
    <el-header
      style="
        text-align: right;
        font-size: 30px;
        font-family: '微软雅黑', Courier, monospace;
        text-align: center;
      "
    >
      <div class="toolbar">
        <el-icon style="margin-right: 8px; margin-top: 1px">
          <shop />
        </el-icon>
        <span>商户中心</span>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-scrollbar>
          <el-row class="tac">
            <el-col :span="12">
              <h5 class="mb-2" style="font-size: larger">
                <el-icon>
                  <Avatar /> </el-icon
                >你的信息
              </h5>
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
              >
                <el-menu-item index="/1">
                  <template #title>
                    <span
                      ><el-icon>
                        <Goods /> </el-icon
                      >商品管理</span
                    >
                  </template>
                </el-menu-item>
                <el-menu-item index="2">
                  <el-icon>
                    <DocumentCopy />
                  </el-icon>
                  <span>订单管理</span>
                </el-menu-item>
                <el-menu-item index="3">
                  <el-icon>
                    <Headset />
                  </el-icon>
                  <span>售后处理</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <el-icon>
                    <el-icon>
                      <Postcard />
                    </el-icon>
                  </el-icon>
                  <span>商家信息</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-scrollbar>
      </el-aside>

      <el-main> </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import {
  ElMain,
  ElRow,
  ElCol,
  ElMenu,
  ElMenuItem,
  ElContainer,
  ElScrollbar,
  ElAside,
  ElHeader,
  ElIcon
} from 'element-plus'

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
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
