<script setup>
import { NButton } from 'naive-ui'
import { HomeOutline, LogOutOutline, PersonOutline, SettingsOutline } from '@vicons/ionicons5'

</script>

<template>
  <div class='sidebarPages'>
    <div class='photo' />

    <div class='menu'>
      <div class='menu-item'>
        <n-icon><HomeOutline /></n-icon>
        <p>首頁</p>
      </div>
      <div class='menu-item'>
        <n-icon><PersonOutline /></n-icon>
        <p>個人資料</p>
      </div>
      <div class='menu-item'>
        <n-icon><SettingsOutline /></n-icon>
        <p>設定</p>
      </div>
    </div>

    <n-button
      class='pushBtn'
      color='#ff6600'
      round
      strong
      text-color='#ffffff'
    >
      推文
    </n-button>

    <div class='loginOut'>
      <n-icon><LogOutOutline /></n-icon>
      <p>登出</p>
    </div>
  </div>
</template>

<style scoped>
.sidebarPages {
  width: 20%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-right: 1px solid #eeeeee;
}

.photo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ff6600;
  margin-bottom: 24px;
}

.menu {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 16px;
}

.pushBtn {
  margin-top: 24px;
  width: 100%;
}

.loginOut {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  margin-top: auto;
}

</style>
