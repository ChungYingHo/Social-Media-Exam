<script setup>
import LoginForm from '@/components/LoginForm.vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import logo from '@/assets/icon.png'

const name = '後台登入'
const router = useRouter()

async function adminLogin(account, password) {
  try{
    const { data } = await axios.post('/api/admin/signin', {
      account,
      password
    })
    localStorage.setItem('adminToken', data.token)
    localStorage.setItem('adminUser', JSON.stringify(data.user))
    router.push('/admin/posts')
  }catch(error){
    console.error(error)
  }
}

</script>

<template>
  <div class='allPages'>
    <div class='loginCard'>
      <img
        class='logo'
        :src='logo'
      >
      <LoginForm
        msg='登入頁面'
        :on-login='adminLogin'
        :title='name'
      />
    </div>
  </div>
</template>

<style scoped>
.allPages {
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
</style>
