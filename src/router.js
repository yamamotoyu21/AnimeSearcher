import { createRouter , createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld'
import Home from './components/Home'
import Detail from './components/Detail'


const routes = [
    {
        path: '/',
        name: 'home',
        components: HelloWorld
    },
    {
        path: '/Detail',
        name: 'detail',
        components: Detail
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router