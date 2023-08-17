<script setup>
import userApi from '../../lib/userApi'

const handleClick = async () => {
  const result = await userApi.login('user1', '12356');
  const info = await userApi.getInfo("user1");
  console.log(result)
  console.log(info);
}
</script>

<template>
  <div>
    <button @click="handleClick">点击测试</button>
  </div>
</template>

<style scoped></style>
