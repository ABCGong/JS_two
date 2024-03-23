import { createRouter,createWebHistory,createWebHashHistory } from 'vue-router'
import hello from '../components/maintool/hello.vue';
import login from '../components/login/login.vue';
import tool from '../components/maintool/tool.vue';
const routes = [
    {
        path: '/',
        component:hello
    },
    {
        path: '/login',
        component:login
    },
    {
        path: '/tool',
        component:tool
    },

]

const router = createRouter({
    // history: createWebHistory(),
    history:createWebHashHistory(),
    routes,
})

export default router;

