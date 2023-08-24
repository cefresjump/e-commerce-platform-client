<script setup>
const prop = defineProps({
  comment: {
    type: Object,
    required: false
  }
});
</script>

<template>
  <div class="comment-info">
    <div class="user-message">
      <img :src="prop.comment.userFigure" class="user-figure">
      <div class="user-name">{{ prop.comment.userName }}</div>
    </div>
    <div class="comment-score">评分{{ prop.comment.score }}</div>
    <div class="comment-content">{{ prop.comment.content }}</div>
  </div>
</template>

<style scoped>
.comment-info {
  width: 1000px;
  height: 100px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: start; 
  align-items: start;
  background-color: rgb(247,247,247);
  border:solid 1px rgb(230,230,230);
}

.user-message {
  display: flex;
  flex-direction: row;
}

.user-figure {
  max-width: 30px;
  max-height: 30px;
}

.user-name {
  padding-left: 20px;
  font-size: 18px;
}

.comment-score {
  margin-top: 10px;
}

.comment-content {
  margin-top: 10px;
}
</style>
