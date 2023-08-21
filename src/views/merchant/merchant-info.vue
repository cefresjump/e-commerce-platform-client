<script lang="ts" setup>
import { Ref, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import merchantApi from '../../lib/merchantApi.ts'
import { merchantAuthStore } from '../../store/merchantAccount.ts'

const router = useRouter()

onMounted(() => {
  if (!merchantAuthStore().isLoggedIn) {
    router.replace('/account/merchantLogin')
  }
})

const merchantInfo: Ref<Object> = ref({})

//页面被挂载时（也可以说切换到这个页面上时）执行的方法
onMounted(async () => {
  const result = await merchantApi.getInfo(merchantAuthStore().merchantName)
  if (result) merchantInfo.value = result
})
</script>

<template>
  <div>{{ merchantInfo }}</div>
</template>

<style scoped></style>
