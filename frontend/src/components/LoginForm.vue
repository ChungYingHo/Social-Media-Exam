<script setup>
import { ref } from 'vue'
import { NInput, NButton } from 'naive-ui'

const account = ref('')
const password = ref('')

defineProps({
  msg: { type: String, required: true },
  title: { type: String, required: true },
  onLogin: { type: Function, default: () => {} }
})
</script>

<template>
  <div class='loginPages'>
    <p class='title'>
      {{ title }}
    </p>

    <div class='inputGroup'>
      <label class='accountSecret'>帳號</label>
      <n-input
        v-model:value='account'
        class='customInput'
        placeholder='請輸入帳號'
        type='text'
      />
    </div>

    <div class='inputGroup'>
      <label class='accountSecret'>密碼</label>
      <n-input
        v-model:value='password'
        class='customInput'
        placeholder='請輸入密碼'
        type='password'
      />
    </div>

    <n-button
      color='#ff6600'
      round
      strong
      style='width: 100%;'
      text-color='#ffffff'
      @click='onLogin(account, password)'
    >
      登入
    </n-button>
  </div>
</template>

<style scoped>
.loginPages {
  width: 360px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.title {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 8px;
}

.inputGroup {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.accountSecret {
  font-size: 13px;
  color: #888888;
}

.customInput {
  width: 100%;
}
</style>
