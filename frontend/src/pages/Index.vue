<script setup>
import PostList from '@/components/PostList.vue'
import leftSideBar from '@/components/LeftSidebar.vue'
import SidebarRight from '@/components/SidebarRight.vue'

</script>

<template>
  <div class='indexPages'>
    <leftSideBar />
    <PostList />
    <SidebarRight />
  </div>
</template>

<style scoped>

.indexPages {
  display: flex;
  height: 100vh;
  width: 100%;
}

</style>
