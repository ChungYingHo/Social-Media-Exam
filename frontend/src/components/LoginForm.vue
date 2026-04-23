<script setup>
import { ref } from 'vue'
import { NSpace, NInput, NButton } from 'naive-ui'

const account = ref('')
const password = ref('')

defineProps({
  msg: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  onLogin: {
    type: Function,
    default: () => {}
  }
})
</script>

<template>
  <div class='loginPages'>
    <p class='title'>
      登入 {{ title }}
    </p>

    <n-space vertical>
      <div class='inputAccount'>
        <label class='inputLabel'>帳號:</label>
        <n-input
          v-model:value='account'
          borderless
          class='customInput'
          placeholder='請輸入帳號'
          type='text'
        />
      </div>

      <div class='inputPassword'>
        <label class='inputLabel'>密碼:</label>
        <n-input
          v-model:value='password'
          borderless
          class='customInput'
          placeholder='請輸入密碼'
          type='password'
        />
      </div>

      <n-button
        color='#ff6600'
        round
        strong
        style='width: 300px;'
        text-color='#ffffff'
        @click='onLogin(account, password)'
      >
        登入
      </n-button>
    </n-space>
  </div>
</template>

<style scoped>

.loginPages {
  width: 300px;
}

.customInput {
  width: 100%;
}

</style>
