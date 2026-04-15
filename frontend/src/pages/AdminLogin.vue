<script setup>
import LoginForm from '@/components/LoginForm.vue'

const name = '後台'

</script>

<template>
  <div class='allPages'>
    <LoginForm
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
