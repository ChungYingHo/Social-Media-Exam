<script setup>
import LoginForm from '@/components/LoginForm.vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const name = '後台'
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
    <LoginForm
      :on-login='adminLogin'
      :title='name'
    />
  </div>
</template>

<style scoped>

.allPages{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding-bottom: 250px;
}

</style>
