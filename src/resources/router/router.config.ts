import { createWebHistory, RouterOptions } from 'vue-router'
import Main from '../../presentation/pages/Main.vue'
import { authRouterConfig } from './authRoute'
const config: RouterOptions = {
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      redirect: '/login',
      children: [authRouterConfig],
    },
  ],
  history: createWebHistory(import.meta.env.BASE_URL),
}

export default config
