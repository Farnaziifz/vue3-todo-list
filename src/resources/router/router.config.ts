import { createWebHistory, RouterOptions } from 'vue-router'
import Main from '../../presentation/pages/Main.vue'

const config: RouterOptions = {
  routes: [{ path: '/', name: 'Main', component: Main }],
  history: createWebHistory(import.meta.env.BASE_URL),
}

export default config
