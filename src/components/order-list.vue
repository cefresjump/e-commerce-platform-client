<template>
  <div class="page-wapper">
    <div class="goods-list content">
      <div class="goods" v-for="(good,index) in goods" :key="index">
        <div>
          {{ good.goodsName }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default{
  data(){
    return {
      goods:[],
      userID:1
    }
  },
  mounted(){
    this.getBuyerList()
  },
  methods:{
    init(){

    },
     // 获取买家商品列表
    async getBuyerList(){
     const url="http://localhost:30000/order/getBuyerList"
     const data={id:this.userID}
     try{
       const response=await axios.post(url,data)
       this.goods=response.data.content
       console.log(this.goods[0].goodsName)
     }catch(err){
       console.error(err);
     }
    }
  
  }
}
</script>


<style>
*{
  padding: 0;
  margin: 0;
}

</style>