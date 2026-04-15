<script setup>

defineProps({
  post: {
    type: Object,
    required: true,
  }
})

</script>

<template>
  <div class='userHeader'>
    <div class='avatar' />
    <div class='user'>
      <span>{{ post.name }}</span>
      <span>{{ post.account }}</span>
      <span>{{ post.time }}</span>
    </div>
  </div>

  <div class='post'>
    <p>{{ post.content }}</p>
  </div>

  <div class='postActions'>
    <span>{{ post.likes }}</span>
    <span>{{ post.comments }}</span>
  </div>
</template>

<style scoped>
.userHeader {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #cccccc;
  flex-shrink: 0;
}

.user {
  display: flex;
  gap: 6px;
  align-items: center;
  font-size: 13px;
  color: #888888;
}

.post {
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 1.5;
  padding-left: 50px;
}

.postActions {
  display: flex;
  gap: 16px;
  font-size: 13px;
  color: #888888;
  padding-left: 50px;
  padding-bottom: 12px;
  border-bottom: 1px solid #eeeeee;
}
</style>

