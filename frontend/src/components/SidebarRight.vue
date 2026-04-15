<script setup>
import { ref } from 'vue'
import { NButton } from 'naive-ui'

const recommendList = ref([])
</script>

<template>
  <div class='sidebarRight'>
    <p class='title'>
      推薦跟隨
    </p>

    <div
      v-for='user in recommendList'
      :key='user.id'
      class='user-row'
    >
      <div class='avatar' />
      <div class='user-info'>
        <p class='name'>
          {{ user.name }}
        </p>
        <p class='account'>
          {{ user.account }}
        </p>
      </div>
      <n-button
        :color="user.isFollowing ? '#ff6600' : '#ffffff'"
        round
        size='small'
        strong
        :text-color="user.isFollowing ? '#ffffff' : '#ff6600'"
        @click='toggleFollow(user)'
      >
        {{ user.isFollowing ? '正在跟隨' : '跟隨' }}
      </n-button>
    </div>
  </div>
</template>

<style scoped>
.sidebarRight {
  width: 25%;
  padding: 16px;
  border-left: 1px solid #eeeeee;
}

.title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
}

.user-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #cccccc;
  flex-shrink: 0;
}

.user-info {
  flex: 1;
}

.name {
  font-size: 14px;
  font-weight: bold;
}

.account {
  font-size: 12px;
  color: #888888;
}
</style>

