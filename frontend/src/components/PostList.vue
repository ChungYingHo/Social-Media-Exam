<script setup>
import PostCard from '@/components/PostCard.vue'
import PostInput from '@/components/PostInput.vue'

defineProps({
  posts: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div class='postPages'>
    <PostInput />
    <PostCard
      v-for='post in posts'
      :key='post.id'
      :post='post'
    />
  </div>
</template>

<style scoped>

.postPages{
  width: 58%;
  overflow-y: auto;
  border-left: 1px solid #eeeeee;
  border-right: 1px solid #eeeeee;
}

</style>
