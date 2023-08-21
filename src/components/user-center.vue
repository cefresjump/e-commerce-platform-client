<template>
  <div>

      <el-menu class="menu" >
        <el-menu-item index="1" class="item">用户中心</el-menu-item>
        <el-menu-item index="2" class="item">订单列表</el-menu-item>
        <el-menu-item index="3" class="item">待发货</el-menu-item>
        <el-menu-item index="4" class="item">等待确认</el-menu-item>
        <el-menu-item index="5" class="item">待评论</el-menu-item>
      </el-menu>

  </div>
</template>

<script>
export default{
  
}
</script>

<style lang="less" scoped>
*{
  padding: 0;
  margin: 0;
}
.item{
  height: 180px;
  font-size: 30px;
  text-align: center;
  line-height: 500%;
  border-top: 2px solid gray;
  border-bottom: 1px solid gray;
}

.menu{
  background-color: #acfae5;
  height: 900px;
  width: 150px;
}
</style>