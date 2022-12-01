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
    const person = JSON.parse(sessionStorage.getItem('fadi.pub_data')) ?? false

    if (to.meta.secure && person.role != 'Admin' && person.role != 'Manager') {
        next('/')
    } else {
        if (to.meta.protected & !person) {
            next('/signin')
            return
        }
        next()
    }
})

export default router
