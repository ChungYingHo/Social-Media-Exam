import { createRouter, createWebHistory } from 'vue-router'
import Regist from '@/components/Regist.vue'
import Index from '@/pages/Index.vue'
import Login from '@/pages/Login.vue'
import AdminLogin from '@/pages/AdminLogin.vue'
import UserPages from '@/pages/UserPages.vue'
import AdminPost from '@/pages/AdminPost.vue'
import AdminUser from '@/pages/AdminUser.vue'
import TweetPages from '@/pages/TweetPages.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    
    {
      path: '/login',
      name: 'login',
      component: Login,
    },

    {
      path: '/admin-login',
      name: 'admin-login',
      component: AdminLogin,
    },

    {
      path: '/admin/posts',
      name: 'AdminPost',
      component: AdminPost,
    },

    {
      path: '/tweet/:id',
      name: 'TweetPages',
      component: TweetPages,
    },

    { path: '/admin/users',
      name: 'AdminUser',
      component: AdminUser
    },

    {
      path: '/UserPages',
      name: 'userPages',
      component: UserPages,
    },

    {
      path: '/regist',
      name: 'Regist',
      component: Regist,
    },

    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('@/views/DemoView.vue'),
    },
  ],
})

export default router
