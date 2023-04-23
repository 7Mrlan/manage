import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/announce',
    name: 'AnnounceMessage',
    component: () => import('@/views/announceMessage/index.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
