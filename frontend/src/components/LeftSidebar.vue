<script setup>
import { NButton } from 'naive-ui'
import { HomeOutline, LogOutOutline, PersonOutline, SettingsOutline } from '@vicons/ionicons5'
import { useRouter } from 'vue-router'

const router = useRouter()

function logout(){
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  router.push('/login')
}

</script>

<template>
  <div class='sidebarPages'>
    <div class='photo' />

    <div class='menu'>
      <div class='menu-item'>
        <n-button
          class='PagesBtn'
          quaternary
          text-color='#171725'
        >
          <RouterLink to='/'>
            <n-icon class='wordIcon'>
              <HomeOutline />
            </n-icon>
            首頁
          </RouterLink>
        </n-button>
      </div>
      <div class='menu-item'>
        <n-button
          class='PagesBtn'
          quaternary
          text-color='#171725'
        >
          <RouterLink to='/UserPages'>
            <n-icon class='wordIcon'>
              <PersonOutline />
            </n-icon>
            個人資料
          </RouterLink>
        </n-button>
      </div>
      <div class='menu-item'>
        <n-button
          class='PagesBtn'
          quaternary
          text-color='#171725'
        >
          <n-icon class='wordIcon'>
            <SettingsOutline />
          </n-icon>
          設定
        </n-button>
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

    <div
      class='loginOut'
      @click='logout'
    >
      <n-icon><LogOutOutline /></n-icon>
      <p>登出</p>
    </div>
  </div>
</template>

<style scoped>
.sidebarPages {
  width: 16%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.photo {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: #ff6600;
  margin-bottom: 10px;
  margin-left: 6px;
  margin-top: 10px;
}

.menu {
  display: flex;
  flex-direction: column;
  gap: 8px;
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

.PagesBtn a{
  color: inherit;
  text-decoration: none;
}

:deep(a.router-link-active) {
  color: #ff6600;
}

.wordIcon {
  padding-right: 20px;
}

</style>
