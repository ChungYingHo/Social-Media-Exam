<script setup>
import LoginForm from '@/components/LoginForm.vue'
import { NButton, NSpace } from 'naive-ui'
import axios from 'axios'
import { useRouter } from 'vue-router'
import logo from '@/assets/icon.png'

const name = '登入Alphitter'
const router = useRouter()

async function userLogin(account, password) {
  try {
    const { data } = await axios.post('/api/users/signin', {
      account,
      password
    })
    localStorage.setItem('token', data.token)
    localStorage.setItem('user', JSON.stringify(data.user))
    router.push('/')
  } catch(error) {
    console.error(error)
  }
}
</script>

<template>
  <div class='allLogin'>
    <div class='loginCard'>
      <img
        class='logo'
        :src='logo'
      >
      <LoginForm
        msg='登入頁面'
        :on-login='userLogin'
        :title='name'
      />
      <div class='button'>
        <n-space>
          <n-button
            text
            text-color='#0080FF'
            @click='router.push("/regist")'
          >
            註冊
          </n-button>
          <p>・</p>
          <n-button
            text
            text-color='#0080FF'
            @click='router.push("/admin-login")'
          >
            後台登入
          </n-button>
        </n-space>
      </div>
    </div>
  </div>
</template>

<style scoped>
.allLogin {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffffff;
}

.loginCard {
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.logo {
  width: 50px;
  height: 50px;
}

.button {
  display: flex;
  justify-content: center;
}
</style>
