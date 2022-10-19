import { createApp } from 'vue'
import App from './App.vue'
import {createWebHashHistory, createRouter} from 'vue-router'
import  HelloWorld from '../src/components/HelloWorld'
import  MiComponente from '../src/components/MiComponente'

const routes = [
    {
        path: '/', component: HelloWorld
    },
    {
        path: '/detalle', component: MiComponente
    }
]
//crear objetatos de rutas de vue routes
const router = createRouter(
    {
        history: createWebHashHistory(),
        routes
    }
)
//createApp(App).mount('#app').use(router)
const app = createApp(App)
app.use(router)
.mount('#app')
