import { createWebHistory, RouterOptions } from 'vue-router'
import { loginRouter, registerRouter } from './authRoute'

const Main = () => import('../../presentation/pages/Main.vue')

const config: RouterOptions = {
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      redirect: '/login',
      children: [loginRouter, registerRouter],
    },
  ],
  history: createWebHistory(import.meta.env.BASE_URL),
}

export default config
