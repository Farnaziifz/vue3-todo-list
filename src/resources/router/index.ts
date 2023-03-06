import { createRouter } from 'vue-router'
import config from './router.config'

const token = window.localStorage.getItem('token')
const router = createRouter(config)

router.beforeEach((to, from, next) => {
  //   if (to.name !== 'login' && to.name !== 'register' && token)
  //     next({ name: 'Main' })
  //   else next()
  if (token) {
    if (to.name === 'login' || to.name === 'register')
      next({ name: 'todo-list' })
    next()
  } else {
    if (to.name !== 'login' && to.name !== 'register') next({ name: 'login' })
    next()
  }
})
export default router
