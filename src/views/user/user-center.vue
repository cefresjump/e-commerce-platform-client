<script setup>
import orderList from './order-list.vue';

// app.component('orderList',orderList)
</script>

<template>
  <div>
    <el-container>
      <el-header>用户中心</el-header>
      <el-container>
        <el-aside width="200px">
          <!-- 菜单 -->
          <el-menu default-active="/user/order" class="el-menu-vertical-demo" router>
            <el-menu-item index="/user/order">
              <!-- <el-icon><icon-menu /></el-icon> -->
              <span>订单列表</span>
            </el-menu-item>
            <el-menu-item index="/user/orderWaitGoods" >
              <!-- <el-icon><document /></el-icon> -->
              <span>待发货</span>
            </el-menu-item>
            <el-menu-item index="/user/orderNeedConfirm">
              <!-- <el-icon><setting /></el-icon> -->
              <span>等待确认</span>
            </el-menu-item>
            <el-menu-item index="/user/orderToComment">
              <!-- <el-icon><icon-menu /></el-icon> -->
              <span>待评论</span>
            </el-menu-item>
            <el-menu-item index="/user/orderFinished">
              <!-- <el-icon><icon-menu /></el-icon> -->
              <span>已完成</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main >
          <!-- main部分 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.el-menu-item{
  height: 100px;
  width: 200px;
  line-height: 300%;
}

</style>
