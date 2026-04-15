<script setup>
import { ref } from 'vue'
import { NSpace, NInput, NButton } from 'naive-ui'

const account = ref('')
const userName = ref('')
const userEmail = ref('')
const password = ref('')
const passwordConfirm = ref('')

</script>

<template>
  <div class='loginPages'>
    <p class='title'>
      建立你的帳號
    </p>

    <n-space vertical>
      <div class='inputAccount'>
        <label class='inputLabel'>帳號:</label>
        <n-input
          v-model:value='account'
          borderless
          class='account'
          placeholder='請輸入帳號'
          type='text'
        />
      </div>

      <div class='inputUserName'>
        <label class='inputLabel'>名稱:</label>
        <n-input
          v-model:value='userEmail'
          borderless
          class='email'
          placeholder='請輸入使用者名稱'
          type='text'
        />
      </div>
      
      <div class='inputEmail'>
        <label class='inputLabel'>Email:</label>
        <n-input
          v-model:value='userName'
          borderless
          class='userName'
          placeholder='請輸入Email'
          type='text'
        />
      </div>
      
      <div class='inputPassword'>
        <label class='inputLabel'>密碼:</label>
        <n-input
          v-model:value='password'
          borderless
          class='password'
          placeholder='請輸入密碼'
          type='password'
        />
      </div>
      
      <div class='inputPasswordConfirm'>
        <label class='inputLabel'>密碼確認:</label>
        <n-input
          v-model:value='passwordConfirm'
          borderless
          class='passwordConfirm'
          placeholder='請再次輸入密碼'
          type='password'
        />
      </div>

      <n-button
        color='#ff6600'
        round
        strong
        text-color='#ffffff'
      >
        註冊
      </n-button>
      <n-button
        text
        text-color='#0080FF'
      >
        取消
      </n-button>
    </n-space>
  </div>
</template>

