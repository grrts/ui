import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/internal/preview/views/HomeView.vue'
import routes from '@/internal/preview/routes.ts'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        ...routes,
    ],
})

export default router
