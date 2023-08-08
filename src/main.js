import { createApp } from 'vue'
import App from './App.vue'
import { createRouter } from 'vue-router'
import { createWebHistory } from 'vue-router'
import routes from './config/routes'
import 'element-plus/dist/index.css'

const app = createApp(App)

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

app.use(router)

app.mount('#app')
