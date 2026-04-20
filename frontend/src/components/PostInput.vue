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
      <n-modal v-model:show='showModel'>
        <div class='PostAMessage'>
          <div class='PostInput'>
            <div class='avatar' />
            <input
              v-model='content'
              class='post'
            >
          </div>
          <div class='PostBtn'>
            <n-button
              color='#ff6600'
              round
              strong
              text-color='#ffffff'
            >
              推文
            </n-button>
            <div class='cross' />
          </div>
        </div>
      </n-modal>
    </div>
  </div>
</template>

<style scoped>
.postInput {
  border-bottom: 10px solid #E6ECF0;
  padding: 16px;
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 8PX;
  margin-bottom: 20px;
}

.title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
  padding-left: 16px;
  padding-bottom: 16px;
  border-bottom: 4px solid #E6ECF0;
}

.input {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 16px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #cccccc;
  flex-shrink: 0;
}

.inputWord {
  flex: 1;
  border: none;
  outline: none;
  font-size: 15px;
  color: #333;
}

.button {
  display: flex;
  justify-content: flex-end;
  margin: 0;
  padding-right: 20px;
}

.PostAMessage {
  background: #ffffff;
  border-radius: 8px;
  padding: 24px;
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.post {
  flex: 1;
  border: none;
  outline: none;
  font-size: 15px;
  min-height: 80px;
}

.PostBtn {
  display: flex;
  justify-content: flex-end;
}

</style>
