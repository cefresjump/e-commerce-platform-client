<script setup>
import { computed, ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {
  ElButton,
  ElInput,
  ElSelect,
  ElOption,
  ElUpload,
  ElForm,
  ElFormItem,
  ElMessage
} from 'element-plus'
import goodsApi from '../../lib/goodsApi';
import { convertPathToName } from '../../utils/path.ts'

const route = useRoute();
const router = useRouter();

const goodsData = ref({})

const figureName = computed(() => convertPathToName(goodsData.value.figure))

const typeOptions = [
  {
    value: 'clothes',
    label: '服装'
  },
  {
    value: 'electronics',
    label: '电子产品'
  },
  {
    value: 'furniture',
    label: '家具'
  },
  {
    value: 'toy',
    label: '玩具'
  },
  {
    value: 'sport',
    label: '运动'
  },
  {
    value: 'tool',
    label: '工具'
  }
]

//商品图片上传规格校验
const handleAvatarSuccess = (response) => {
  if (response.isOk) {
    goodsData.value.figure = response.content.name
  }
}

//信息提交,需要写相关
const submitForm = async () => {
  const data = {
    id: goodsData.value.goodsId,
    name: goodsData.value.name,
    type: goodsData.value.type,
    price: goodsData.value.price,
    shippingAddress: goodsData.value.shippingAddress,
    description: goodsData.value.description,
    figure: figureName.value
  }
  const result = await goodsApi.updateInfo(data.id, data.name, data.type, data.shippingAddress, data.price, data.description, data.figure);
  if (result) {
    ElMessage({
      message: '更新商品信息成功',
      type: 'success'
    })
    goBack()
  } else {
    ElMessage({
      message: '更新商品信息失败!',
      type: 'error'
    })
  }
}

//返回上一个页面
//没有写路由测试过
const goBack = () => {
  router.back(1);
}

onMounted(async () => {
  const result = await goodsApi.getInfo(route.params.id);
  if (result) {
    goodsData.value = result;
  }
})
</script>

<template>
  <div class="container">
    <div class="header">
      <el-button @click="goBack" class="back-button">返回</el-button>
      <a style="padding-left: 20px;">货物信息编辑</a>
    </div>
    <el-form label-width="80px" :model="goodsData" class="goods-form">
      <el-form-item label="商品名称" prop="name">
        <el-input v-model="goodsData.name" placeholder="商品名称"></el-input>
      </el-form-item>
      <el-form-item label="商品描述" prop="description">
        <el-input :rows="10" v-model="goodsData.description" placeholder="让消费者更了解你的商品"></el-input>
      </el-form-item>
      <el-form-item label="商品价格" prop="price">
        <el-input v-model="goodsData.price" style="width: 100px" placeholder="定价"></el-input>
      </el-form-item>
      <el-form-item label="商品类型" prop="type">
        <el-select v-model="goodsData.type" placeholder="选择">
          <el-option v-for="item in typeOptions" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
      <el-form-item label="货源地" prop="shippingAddress">
        <el-input v-model="goodsData.shippingAddress" style="width: 600px" placeholder="地址"></el-input>
      </el-form-item>
      <el-form-item label="商品图片" prop="goodsData.figure">
        <el-upload class="avatar-uploader" name="figure" action="http://localhost:30000/upload" :show-file-list="false"
          :on-success="handleAvatarSuccess">
          <img v-if="goodsData.figure" :src="goodsData.figure" class="figure" />
          <el-icon v-else class="avatar-uploader-icon">
            <Plus />
          </el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="submitForm">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
/*背景样式*/
.container {
  padding: 10px 0 0 40px;
  width: 70%;
  background-color: #fff;
}

/*标题样式*/
.header {
  display: flex;
  flex-direction: column;
  font-size: 30px;
  font-weight: bold;
  text-align: start;
  line-height: 100px;
}

.back-button {
  max-width: 50px;
}

/*表单内部样式*/
.avatar-uploader {
  display: flex;
  justify-content: center;
  width: 200px;
  height: 200px;
  cursor: pointer;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
}

.figure {
  max-width: 200px;
}
</style>

<style>
.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 200px;
  height: 200px;
  text-align: center;
}
</style>