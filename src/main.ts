import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './resources/router'

const app = createApp(App).use(router)

app.mount('#app')
