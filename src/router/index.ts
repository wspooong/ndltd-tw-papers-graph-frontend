import { createRouter, createWebHistory, RouterOptions, Router, RouteRecordRaw } from 'vue-router'


const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/layouts/HomeLayout.vue'),
    },
    {
        path: '/graph/:uid',
        component: () => import('@/layouts/GraphLayout.vue'),
    },
    {
        path: '/search',
        name: 'search',
        component: () => import('@/layouts/SearchLayout.vue'),
    },
    {
        path: '/:catchAll(.*)*',
        redirect: '/',
    },
    {
        path: '/404',
        name: '404',
        component: () => import('@/layouts/ErrorLayout.vue'),
    }
    
]

const options: RouterOptions = {
    history: createWebHistory(),
    routes,
}

const router: Router = createRouter(options)

export default router