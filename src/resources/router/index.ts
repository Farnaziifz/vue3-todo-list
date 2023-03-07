import { createRouter } from 'vue-router'
import config from './router.config'

const token = window.localStorage.getItem('token')
const router = createRouter(config)

export default router
