<script setup>
import { ElCarousel, ElCarouselItem, ElImage } from 'element-plus';
import goodsInfo from '../../components/small-goods-info.vue'
import { onMounted, ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { userAuthStore } from '../../store/userAccount.ts';
import userApi from '../../lib/userApi';
import tailMessage from '../../assets/text/tailMessage.ts'

const router = useRouter();

const loopImageList = ['/img/loop-image(1).webp', '/img/loop-image(2).webp', '/img/loop-image(3).webp']
const userInfo = ref({});

const goodsList = ref([{}]);

const recommandList = computed(() => {
  return goodsList.value.slice(0, 5);
})

const electronicsList = computed(() => {
  return goodsList.value.filter((e) => e.type === 'electronics').slice(0, 5);
})

const clothesList = computed(() => {
  return goodsList.value.filter((e) => e.type === 'clothes').slice(0, 5);
})

const furnitureList = computed(() => {
  return goodsList.value.filter((e) => e.type === 'furniture').slice(0, 5);
})

const toyList = computed(() => {
  return goodsList.value.filter((e) => e.type === 'toy').slice(0, 5);
})

const sportList = computed(() => {
  return goodsList.value.filter((e) => e.type === 'sport').slice(0, 5);
})

const toolList = computed(() => {
  return goodsList.value.filter((e) => e.type === 'tool').slice(0, 5);
})

const searchText = ref('');

const jumpRegister = () => {
  router.push('/account/userRegister');
}

const jumpLogin = () => {
  router.push('/account/userLogin');
}

onMounted(async () => {
  if (userAuthStore().isLoggedIn) {
    const result1 = await userApi.getInfo(userAuthStore().userName);
    const result2 = await userApi.getGoodsList();
    if (result1) userInfo.value = result1;
    if (result2) goodsList.value = result2;
  }
})
</script>

<template>
  <div class="search-area">
    <div class="small-flex-grow"></div>
    <img class="top-icon" src="../../assets/icon/icon1.png">
    <div class="top-text">简购坊</div>
    <div class="small-flex-grow"></div>
    <input v-model="searchText" class="search-input" />
    <div class="search-button">搜索</div>
  </div>
  <div class="content-area">
    <div class="index-area">
      <div class="index-list">
        <div class="index-item">电脑/办公</div>
        <div class="index-item">男装/女装/童装/内衣装</div>
        <div class="index-item">家用电器</div>
        <div class="index-item">母婴/玩具乐器</div>
        <div class="index-item">男鞋/运动/户外</div>
        <div class="index-item">安装/维修/清洗/二手</div>
      </div>
      <div class="loop-image-list">
        <el-carousel indicator-position="outside">
          <el-carousel-item v-for="image in loopImageList" :key="image">
            <img class="loop-image" :src="image">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div v-if="userAuthStore().isLoggedIn" class="user-info">
        <el-image class="user-figure" :src="userInfo.figure"></el-image>
        <div>欢迎！用户{{ userInfo.name }}</div>
      </div>
      <div v-else class="user-info">
        <el-image class="user-figure" src="/img/user.webp"></el-image>
        <div>欢迎来逛简购坊!</div>
        <div class="user-login-tip">
          <div @click="jumpRegister" class="jump-account-text">注册</div>
          <div @click="jumpLogin" class="jump-account-text">登录</div>
        </div>
      </div>
    </div>
    <div class="recommand-area">
      <div class="big-text">为您推荐</div>
      <div class="divider"></div>
      <div class="goods-list">
        <goodsInfo v-for="goods in recommandList" :goods="goods"></goodsInfo>
      </div>
      <div class="big-text">电脑/办公</div>
      <div class="divider"></div>
      <div class="goods-list">
        <goodsInfo v-for="goods in electronicsList" :goods="goods"></goodsInfo>
      </div>
      <div class="big-text">男装/女装/童装/内衣</div>
      <div class="divider"></div>
      <div class="goods-list">
        <goodsInfo v-for="goods in clothesList" :goods="goods"></goodsInfo>
      </div>
      <div class="big-text">家用电器</div>
      <div class="divider"></div>
      <div class="goods-list">
        <goodsInfo v-for="goods in furnitureList" :goods="goods"></goodsInfo>
      </div>
      <div class="big-text">母婴/玩具乐器</div>
      <div class="divider"></div>
      <div class="goods-list">
        <goodsInfo v-for="goods in toyList" :goods="goods"></goodsInfo>
      </div>
      <div class="big-text">男鞋/运动/户外</div>
      <div class="divider"></div>
      <div class="goods-list">
        <goodsInfo v-for="goods in sportList" :goods="goods"></goodsInfo>
      </div>
      <div class="big-text">安装/维修/清洗/二手</div>
      <div class="divider"></div>
      <div class="goods-list">
        <goodsInfo v-for="goods in toolList" :goods="goods"></goodsInfo>
      </div>
    </div>
  </div>
  <div class="tail-area">
    <div class="divider" style="width: 100%;"></div>
    <div class="tail-content">
      <div class="tail-tip">
        <div class="tip-top">购物指南</div>
        <div class="tip-item" v-for="msg in tailMessage.buyTip">{{ msg }}</div>
      </div>
      <div class="tail-tip">
        <div class="tip-top">配送方式</div>
        <div class="tip-item" v-for="msg in tailMessage.expressMethod">{{ msg }}</div>
      </div>
      <div class="tail-tip">
        <div class="tip-top">支付方式</div>
        <div class="tip-item" v-for="msg in tailMessage.payMethod">{{ msg }}</div>
      </div>
      <div class="tail-tip">
        <div class="tip-top">售后服务</div>
        <div class="tip-item" v-for="msg in tailMessage.afterSale">{{ msg }}</div>
      </div>
      <div class="tail-tip">
        <div class="tip-top">特色服务</div>
        <div class="tip-item" v-for="msg in tailMessage.otherService">{{ msg }}</div>
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

.content-area {
  width: 100%;
  min-height: 100%;
  background-color: rgb(244, 244, 244);
  border-top: solid 1px rgb(186, 186, 186);
}

.index-area {
  height: 400px;
  width: 100%;
  padding-bottom: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.index-list {
  height: 360px;
  width: 200px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
}

.index-item {
  padding: 0 0 0 10px;
  width: 190px;
  height: 60px;
  line-height: 60px;
  text-align: left;
  border-top: solid 1px rgb(200, 200, 200);
  border-left: solid 4px rgb(226, 35, 26);
}

.loop-image-list {
  width: 450px;
  height: 360px;
  margin-right: 20px;
}

.loop-image {
  max-width: 450px;
}

.user-info {
  width: 220px;
  height: 335px;
  padding: 15px 0 0 0;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
}

.user-figure {
  max-width: 75px;
  padding: 0 0 10px 0;
  border-radius: 50%;
}

.user-login-tip {
  display: flex;
  flex-direction: row;
}

.jump-account-text {
  padding-right: 5px;
  color: rgb(226, 35, 26);
  cursor: pointer;
}

.recommand-area {
  min-height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
}

.big-text {
  font-size: 30px;
  font-weight: 700;
  color: rgb(51, 51, 51);
  ;
}

.divider {
  height: 1px;
  width: 80%;
  margin: 20px 0 20px 0;
  border-top: solid 1px;
  border-color: rgba(48, 54, 67, 0.3);
}

.goods-list {
  width: 1000px;
  padding: 10px 20px 30px 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
}

.tail-area {
  min-height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color: rgb(244, 244, 244);
}

.tail-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.tail-tip {
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.tip-top {
  font-size: 15px;
  font-weight: 700;
  color: rgb(102, 102, 102);
}

.tip-item {
  padding: 5px 0 0 0;
  font-size: 13px;
  color: rgb(102, 102, 125);
}
</style>
