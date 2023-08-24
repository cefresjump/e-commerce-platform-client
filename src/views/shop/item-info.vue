<script setup>
import { ElBreadcrumb, ElBreadcrumbItem, ElInput, ElMessage } from 'element-plus';
import commentInfo from '../../components/comment-info.vue'
import { ArrowRight } from '@element-plus/icons-vue'
import goodsInfoPage from '../../components/small-goods-info.vue'
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { userAuthStore } from '../../store/userAccount';
import userApi from '../../lib/userApi';
import goodsApi from '../../lib/goodsApi';
import orderApi from '../../lib/orderApi';
import { goodsTypeToString } from '../../utils/toString.ts'


const route = useRoute();
const router = useRouter();

const goodsInfo = ref({});
const commentList = ref([{}]);
const goodsList = ref([{}]);
const recommandList = computed(() => {
  return goodsList.value.slice(0, 5);
})

const searchText = ref('');

const buyCount = ref(1);
const address = ref('');


const buyGoods = async () => {
  const result = await orderApi.addInfo(userAuthStore().userId, goodsInfo.value.merchantId, goodsInfo.value.goodsId, address.value, buyCount.value);
  if (result) {
    ElMessage({
      message: '购买成功',
      type: 'success'
    })
  } else {
    ElMessage({
      message: '购买失败',
      type: 'error'
    })
  }
}

const updatePage = async () => {
  if (!userAuthStore().isLoggedIn) router.push('/account/userLogin');
  const id = route.params.id;
  const result1 = await goodsApi.getInfo(id);
  const result2 = await goodsApi.getComments(id);
  const result3 = await userApi.getInfo(userAuthStore().userName)
  const result4 = await userApi.getGoodsList();
  if (result1) goodsInfo.value = result1;
  if (result2) commentList.value = result2;
  if (result3) address.value = result3.address;
  if (result4) goodsList.value = result4;
}

watch(() => route.params.id, updatePage)

onMounted(updatePage)

</script>

<template>
  <div>
    <div class="search-area">
      <div class="small-flex-grow"></div>
      <img class="top-icon" src="../../assets/icon/icon1.png">
      <div class="top-text">简购坊</div>
      <div class="small-flex-grow"></div>
      <input v-model="searchText" class="search-input" />
      <div class="search-button">搜索</div>
    </div>
    <el-breadcrumb class="bread-crumb" :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
      <el-breadcrumb-item>{{ goodsTypeToString(goodsInfo.type) }}</el-breadcrumb-item>
      <el-breadcrumb-item>{{ goodsInfo.name }}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="item-page">
      <div class="item-info">
        <div class="item-figure-area">
          <img class="item-figure" :src="goodsInfo.figure">
        </div>
        <div class="item-data">
          <div class="goods-name">{{ goodsInfo.name }}</div>
          <div class="goods-price">价格：¥{{ goodsInfo.price }}</div>
          <div class="goods-description">介绍：{{ goodsInfo.description }}</div>
          <div class="goods-shipping-address">发货地址：{{ goodsInfo.shippingAddress }}</div>
          <div class="goods-address">
            <div>配送至：</div>
            <el-input v-model="address" class="goods-address-data"></el-input>
          </div>
          <div class="goods-buy-area">
            <el-input-number v-model="buyCount" :min="1" :max="10" controls-position="right" />
            <div @click="buyGoods" class="buy-goods">购买</div>
          </div>
        </div>
      </div>
      <div class="seller-recommand">
        <div class="recommand-text">店长推荐</div>
      </div>
      <div class="goods-list">
        <goodsInfoPage v-for="goods in recommandList" :goods="goods"></goodsInfoPage>
      </div>
      <div class="comment-area">
        评论区：
        <commentInfo v-for="commentData in commentList" :comment="commentData"></commentInfo>
      </div>
    </div>
  </div>
</template>

<style scoped>
.small-flex-grow {
  flex-grow: 0.2;
}

.search-area {
  height: 120px;
  width: 100%;
  padding: 10px 0 10px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.top-icon {
  max-width: 100px;
}

.top-text {
  font-size: 25px;
  color: rgb(51, 51, 51);
  font-weight: 300;
}

.search-input {
  border: solid 2px rgb(226, 35, 26);
  font-size: 20px;
  height: 35px;
  width: 400px;
}

.search-button {
  height: 41px;
  line-height: 39px;
  width: 70px;
  text-align: center;
  color: aliceblue;
  background-color: rgb(226, 35, 26);
  cursor: pointer;
}

.bread-crumb {
  height: 40px;
  padding-left: 200px;
  display: flex;
  align-self: center;
  background-color: rgb(230, 230, 230);
  border: solid 1px rgb(170, 170, 170)
}

.item-page {
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
}

.item-info {
  width: 1000px;
  padding: 50px 0 0 0;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;
}

.item-figure-area {
  max-width: 400px;
  max-height: 500px;
}

.item-figure {
  max-width: 400px;
  max-height: 500px;
}

.item-data {
  width: 800px;
  height: 500px;
  padding: 10px 0 0 20px;
}

.goods-name {
  color: rgb(102, 102, 102);
  font-size: large;
  font-weight: 700;
}

.goods-price {
  margin-top: 20px;
  color: rgb(226, 35, 26);
  font-size: 25px;
  font-weight: 600;
  letter-spacing: 2px;
}

.goods-description {
  margin-top: 20px;
}

.goods-shipping-address {
  margin-top: 20px;
  padding: 10px 0 10px 5px;
  color: rgb(102, 102, 102);
  background-color: rgb(230, 230, 230);
}

.goods-address {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
}

.goods-address-data {
  width: 400px;
}

.goods-buy-area {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
}

.buy-goods {
  width: 150px;
  height: 40px;
  text-align: center;
  color: rgb(255, 255, 255);
  font-size: 21px;
  font-weight: 700;
  line-height: 40px;
  margin-left: 20px;
  background-color: rgb(222, 47, 50);
  cursor: pointer;
}

.seller-recommand {
  width: 80%;
  height: 50px;
  background-color: rgb(247, 247, 247);
  border-bottom: solid 1px rgb(228, 57, 60);
}

.recommand-text {
  width: 150px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: rgb(228, 57, 60);
  color: rgb(255, 255, 255);
  font-size: 20px;
}

.goods-list {
  width: 700px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
}

.comment-area {
  width: 700px;
}
</style>
