<script setup>
import { userApi } from '../lib/axiosApi.ts';
const handleClick = async () => {
    try {
        const response = await userApi.login({ name: 'user1', password: '12346' });
        if (response.data.isOk) {
            console.log('User logged in successfully');
        } else {
            console.log('Login failed');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

</script>

<template>
    <div>
        <button @click="handleClick">
            点击测试
        </button>
    </div>
</template>

<style scoped></style>
