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
  <div>
    <PostInput />
    <PostCard
      v-for='post in posts'
      :key='post.id'
      :post='post'
    />
  </div>
</template>

<style scoped>

div{
  flex: 1;
}

</style>
