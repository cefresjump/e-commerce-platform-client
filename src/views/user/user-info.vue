<script lang="ts" setup>

import { useRouter } from 'vue-router'
import { Ref, onMounted, ref } from 'vue'

import { merchantAuthStore } from '../../store/merchantAccount.ts'


const router = useRouter()

// 检测是否登陆，未登陆则跳转到登陆界面
onMounted(() => {
  if (!merchantAuthStore().isLoggedIn) {
    router.replace('/account/merchantLogin')
  }
})

const merchantInfo: Ref<Object> = ref({})
</script>

<template>
  <div></div>
</template>

<style scoped></style>
