import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './resources/router'
import store from './resources/store'

const app = createApp(App).use(router).use(store)

app.mount('#app')
