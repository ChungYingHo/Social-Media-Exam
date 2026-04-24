<script setup>
import { useRouter } from 'vue-router'
import { ChatbubbleOutline, HeartOutline } from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'

const props = defineProps({
  post: {
    type: Object,
    required: true,
  }
})

const router = useRouter()
const emit = defineEmits(['openReply'])

function goToTweet() {
  router.push(`/tweet/${props.post.id}`)
}

function openReply() {
  emit('openReply', props.post)
}

</script>

<template>
  <div class='postCards'>
    <div class='userHeader'>
      <div class='avatar' />
      <div class='user'>
        <span>{{ post.name }}</span>
        <span>{{ post.account }}</span>
        <span>{{ post.time }}</span>
      </div>
    </div>

    <div
      class='post'
      @click='goToTweet'
    >
      <p>{{ post.content }}</p>
    </div>

    <div class='postActions'>
      <span @click='openReply'>
        <n-icon><ChatbubbleOutline /></n-icon>
        {{ post.comments }}</span>
      <span>
        <n-icon><HeartOutline /></n-icon>
        {{ post.likes }}</span>
    </div>
  </div>
</template>

<style scoped>
.postCards {
  border-bottom: 1px solid #eeeeee
}

.userHeader {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
  margin-left: 16px;
  margin-top: 8px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #cccccc;
  flex-shrink: 0;
}

.user {
  display: flex;
  gap: 6px;
  align-items: center;
  font-size: 13px;
  color: #888888;
}

.post {
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 1.5;
  padding-left: 50px;
}

.postActions {
  display: flex;
  gap: 16px;
  font-size: 13px;
  color: #888888;
  padding-left: 50px;
  padding-bottom: 12px;
}

</style>

