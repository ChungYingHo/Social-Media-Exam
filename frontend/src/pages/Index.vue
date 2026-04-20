<script setup>
import { ref, onMounted  } from 'vue'
import axios from 'axios'
import PostList from '@/components/PostList.vue'
import leftSideBar from '@/components/LeftSidebar.vue'
import rightSidebar from '@/components/RightSidebar.vue'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mywicm9sZSI6InVzZXIiLCJpYXQiOjE3NzY2ODIwOTQsImV4cCI6MTc3NzI4Njg5NH0.Am1NoKEpv09J4m6CqQKyzCH9BAfXY2ZQZSNjO0O6WOo'

const posts = ref([])

async function postsApi() {
  try{

    const dataApi = await axios.get('/api/tweets', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    posts.value = dataApi.data.map((post) => ({
      id: post.id,
      name: post.user.name,
      account: '@' + post.user.account,
      content: post.description,
      likes: post.likesCount,
      comments: post.repliesCount,
      time: post.createdAt
    }))
  }catch(error){
    console.error(error)
  }
}

onMounted(() => {
  postsApi()
})

const GetRightSideBarApiData = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mywicm9sZSI6InVzZXIiLCJpYXQiOjE3NzY2ODc0MzAsImV4cCI6MTc3NzI5MjIzMH0.eQppmsQMfhJgiVDnhWJC5mTmqchsRzapFCaXFNz3kkY'

const recommendList = ref([])

async function RightSideBarAuthApi() {
  try {

    const RightSideBarApiResponse = await axios.get('/api/users/top',{
      headers: {
        Authorization: `Bearer ${ GetRightSideBarApiData }`
      }
    })

    recommendList.value = RightSideBarApiResponse.data.map((responses) => ({
      id: responses.id,
      name: responses.name,
      account: '@' + responses.account,
      avatar: responses.avatar,
      introduction: responses.introduction,
      followersCount: responses.followersCount,
      isFollowed: responses.isFollowed
    }))

  }catch(error){
    console.error(error)
  }
}

onMounted(() => {
  RightSideBarAuthApi()
})

</script>

<template>
  <div class='indexPages'>
    <leftSideBar />
    <PostList :posts='posts' />
    <rightSidebar :recommend-list='recommendList' />
  </div>
</template>

<style scoped>

.indexPages {
  display: flex;
  width: 1100px;
  margin: 0 auto;
  min-height: 100vh;
  justify-content: space-between;
}

</style>
