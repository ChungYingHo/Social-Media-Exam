<script setup>
import { ref } from 'vue'
import { NSpace, NInput } from 'naive-ui'

const value = ref(null)

defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div>
    <p>登入 Alphitter</p>

    <n-space vertical>
      <p>帳號:</p>
      <n-input
        v-model:value='value'
        placeholder='請輸入帳號'
        type='text'
      />

      <p>密碼:</p>
      <n-input
        v-model:value='value'
        placeholder='請輸入密碼'
        type='text'
      />
    </n-space>
  </div>
</template>

<style scoped>

</style>
