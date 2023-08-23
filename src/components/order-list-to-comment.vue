<template>
  
</template>

<script>
import axios from 'axios';
export default{
  data(){
    return{
      comments:[],
      userId:1,
      addComment,
    }
  },
  mounted(){
    this.getComments()
  },
  methods:{
    // 获取商品评论
    async getComments(){
      const url='http://localhost:30000/goods/getGoodsCommentInfo'
      const data={id:this.userId}
      try{
        const response=await axios.post(url,data)
        this.comments=response.data.content
        console.log(this.comments);
      }catch(err){
        console.error(err);
      }
    },
    // 新增商品评论

  }
}
</script>
