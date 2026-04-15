import { createRouter, createWebHistory } from 'vue-router'
import Regist from '@/components/Regist.vue'
import Index from '@/pages/Index.vue'
import Login from '@/pages/Login.vue'
import AdminLogin from '@/pages/AdminLogin.vue'

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
