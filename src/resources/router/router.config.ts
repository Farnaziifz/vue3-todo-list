import { createWebHistory, RouterOptions } from 'vue-router'
import { authRouter } from './authRoute'
import { todoRouter } from './todoRouter'
const Main = () => import('../../presentation/pages/Main.vue')

const config: RouterOptions = {
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      redirect: '/login',
      children: [authRouter, todoRouter],
    },
  ],
  history: createWebHistory(import.meta.env.BASE_URL),
}

export default config
