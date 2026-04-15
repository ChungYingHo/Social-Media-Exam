<script setup>
import LoginForm from '@/components/LoginForm.vue'
import { NFlex, NButton, NSpace } from 'naive-ui'

const name = '前台'

</script>

<template>
  <div class='allLogin'>
    <div class='loginCard'>
      <n-flex
        :size='12'
        vertical
      >
        <LoginForm
          msg='登入頁面'
          :title='name'
        />

        <div class='button'>
          <n-space>
            <n-button
              class='newUserLogin'
              text
              text-color='#0080FF'
            >
              註冊
            </n-button>
            <p>・</p>
            <n-button
              class='adminLogin'
              text
              text-color='#0080FF'
            >
              後台登入
            </n-button>
          </n-space>
        </div>
      </n-flex>
    </div>
  </div>
</template>

<style scoped>

.allLogin{
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

.loginCard{
  width: 360px;
}

.button{
  display: flex;
  justify-content: center;
}

</style>
