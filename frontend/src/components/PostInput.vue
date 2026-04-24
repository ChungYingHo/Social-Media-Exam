<script setup>
import { computed, ref } from 'vue'
import { NButton } from 'naive-ui'
import axios from 'axios'

const content = ref('')
const showModel = ref(false)
const submitted = ref(false)

const emit = defineEmits(['postSuccess'])

const props = defineProps({
  userPostsToken: {
    type: String,
    default: ''
  }
})

async function userPost() {
  submitted.value = true
  if(wordEmpty.value || wordOverLimit.value) return
  try{
    await axios.post('/api/tweets',
      { description: content.value },
      {
        headers: {
          Authorization: `Bearer ${props.userPostsToken}`
        }
      }
    )
    emit('postSuccess')
    content.value = ''
    showModel.value = false
    submitted.value = false
  }catch(error){
    console.error(error)
  }
}

const wordCount = computed(() => content.value.length)
const wordOverLimit = computed(() => wordCount.value > 140)
const wordEmpty = computed(() => content.value.trim() === '')

</script>

<template>
  <div class='posts'>
    <p class='title'>
      首頁
    </p>

    <div class='input'>
      <div class='avatar' />
      <input
        v-model='content'
        class='inputWord'
        placeholder='有什麼新鮮事？'
      >
    </div>

    <div class='button'>
      <n-button
        color='#ff6600'
        round
        strong
        text-color='#ffffff'
        @click='showModel = true'
      >
        推文
      </n-button>
      <n-modal v-model:show='showModel'>
        <div class='PostAMessage'>
          <div class='PostHeader'>
            <span @click='showModel = false'>✕</span>
          </div>
          <hr class='divider'>
          <div class='PostInput'>
            <div class='avatar' />
            <textarea
              v-model='content'
              class='post'
              placeholder='有什麼新鮮事？'
            />
          </div>
          <div class='PostBtn'>
            <span
              v-if='submitted && wordOverLimit'
              class='errorMsg'
            >字數不可超過 140 字</span>
            <span
              v-else-if='submitted && wordEmpty'
              class='errorMsg'
            >內容不可空白</span>
            <n-button
              color='#ff6600'
              round
              strong
              text-color='#ffffff'
              @click='userPost'
            >
              推文
            </n-button>
          </div>
        </div>
      </n-modal>
    </div>
  </div>
</template>

<style scoped>
.posts {
  border-bottom: 10px solid #E6ECF0;
  padding: 16px;
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 8PX;
  margin-bottom: 20px;
}

.title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
  padding-left: 16px;
  padding-bottom: 16px;
  border-bottom: 4px solid #E6ECF0;
}

.input {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 16px;
}

.inputWord {
  flex: 1;
  border: none;
  outline: none;
  font-size: 15px;
  color: #333;
}

.button {
  display: flex;
  justify-content: flex-end;
  margin: 0;
  padding-right: 20px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #cccccc;
  flex-shrink: 0;
}

.PostAMessage {
  background: #ffffff;
  border-radius: 8px;
  padding: 12px;
  width: 634px;
  display: flex;
  flex-direction: column;
}

.PostHeader {
  display: flex;
  justify-content: flex-start;
  padding-left: 18px;
}

.PostHeader {
  font-size: 20px;
  color: #ff6600;
  cursor: pointer;
}

.divider {
  border: none;
  border-top: 1px solid #eeeeee;
}

.post {
  flex: 1;
  border: none;
  outline: none;
  font-size: 15px;
  min-height: 80px;
}

.PostBtn {
  padding: 16px;
  padding-bottom: 16px;
  display: flex;
  justify-content: flex-end;
}

.PostInput{
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 20px;
}

.errorMsg {
  font-size: 13px;
  color: #ff6600;
  align-self: center;
  margin-right: 12px;
}

</style>
