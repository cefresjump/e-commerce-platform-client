<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const prop = defineProps({
    goods: {
        type: Object,
        required: false
    }
});

const handleView = () => {
    router.push({  name: 'item', params: { id: prop.goods.id } })
}

</script>

<template>
    <div v-if="prop.goods" @click="handleView" class="goods-info">
        <img class="goods-figure" :src="prop.goods.figure" />
        <div class="goods-name">{{ prop.goods.name }}</div>
        <div class="goods-price">¥{{ prop.goods.price }}</div>
    </div>
</template>

<style scoped>
.goods-info {
    width: 220px;
    height: 300px;
    margin: 10px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: rgb(255, 255, 255);
}

.goods-figure {
    max-width: 150px;
    max-height: 150px;
    padding: 0 0 10px;
}

.goods-name {
    width: 200px;
    height: 52px;
    line-height: 22px;
    text-overflow: ellipsis;
}

.goods-price {
    width: 200px;
    height: 20px;
    color: rgb(225, 37, 27);
    font-size: 18px;
}
</style>