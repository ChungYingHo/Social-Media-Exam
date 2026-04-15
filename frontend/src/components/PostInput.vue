<script setup>
import { ref } from 'vue'
import { NButton } from 'naive-ui'

const content = ref('')
</script>

<template>
  <div class='postInput'>
    <p class='title'>
      首頁
    </p>

    <div class='inputArea'>
      <div class='avatar' />
      <input
        v-model='content'
        class='input'
        placeholder='有什麼最新鮮事？'
      >
    </div>

    <div class='btnArea'>
      <n-button
        color='#ff6600'
        round
        strong
        text-color='#ffffff'
      >
        推文
      </n-button>
    </div>
  </div>
</template>

<style scoped>
.postInput {
  border-bottom: 1px solid #eeeeee;
  padding: 16px;
}

.title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
}

.inputArea {
  display: flex;
  align-items: center;
  gap: 10px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #cccccc;
  flex-shrink: 0;
}

.input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 15px;
  color: #333;
}

.btnArea {
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
}
</style>
