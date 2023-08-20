<template>
  <div >
    <el-container>
      <el-aside width="151px"><userCenter></userCenter></el-aside>
      <el-container>
        <el-main>
          <!-- <orderList></orderList> -->
          <!-- <comments></comments> -->
          <confirm></confirm>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import userCenter from './components/user-center.vue';
import orderList from './components/order-list.vue';
import comments from './components/order-list-to-comment.vue';
import confirm from './components/order-to-confirm.vue';

export default {
  name: 'App',
  components: {
    userCenter,orderList,comments,confirm
  }
}
</script>

<style lang="less">
 .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
</style>
