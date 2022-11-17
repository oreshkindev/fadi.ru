import { createWebHistory, createRouter } from 'vue-router'
import routes from './views'

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        window.scrollTo(0, 0)
    },
})

router.beforeEach((to, from, next) => {
    const isGuest = localStorage.getItem('fadi.auth_token')

    // перенаправляем на авторизацию если еще гость
    if (to.meta.requireAuth && !isGuest) {
        next('/login')
    } else {
        next()
    }
})

export default router
