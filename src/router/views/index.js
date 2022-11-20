import Home from './Home.vue'
import Tailoring from './Tailoring.vue'
import Patterns from './Patterns.vue'
import Workshops from './Workshops.vue'
import PatternsView from './PatternsView.vue'
import Signin from './Signin.vue'
import Signup from './Signup.vue'
import NotFound from './404.vue'

// lazy-loaded
const Cart = () => import('./Cart.vue')
const AdminProfile = () => import('@/components/views/private/AdminProfile.vue')
const AdminHistory = () => import('@/components/views/private/AdminHistory.vue')
const AdminIssues = () => import('@/components/views/private/AdminIssues.vue')
// const BoardModerator = () => import("./components/BoardModerator.vue")
const UserProfile = () => import('@/components/views/private/UserProfile.vue')
const UserSettings = () => import('@/components/views/private/UserSettings.vue')
const UserIssues = () => import('@/components/views/private/UserIssues.vue')

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            breadcrumbs: { name: 'Назад' },
        },
    },
    {
        path: '/tailoring',
        name: 'tailoring',
        component: Tailoring,
        meta: {
            breadcrumbs: { name: 'Швейный цех' },
        },
    },
    {
        path: '/patterns',
        name: 'patterns',
        component: Patterns,
        meta: {
            breadcrumbs: { name: 'Выкройки' },
        },
    },
    {
        path: '/patterns/:category/:name',
        component: PatternsView,
    },
    {
        path: '/workshops',
        name: 'workshops',
        component: Workshops,
        meta: {
            breadcrumbs: { name: 'Мастер-классы' },
        },
    },
    {
        path: '/cart',
        name: 'cart',
        // lazy-loaded
        component: Cart,
        meta: {
            breadcrumbs: { name: 'Корзина' },
        },
    },
    {
        path: '/signin',
        name: 'signin',
        component: Signin,
        meta: {
            breadcrumbs: { name: 'Войти' },
        },
    },
    {
        path: '/signup',
        name: 'signup',
        component: Signup,
        meta: {
            breadcrumbs: { name: 'Регистрация' },
        },
    },
    {
        path: '/admin',
        name: 'admin',
        // только для авторизованных пользователей
        meta: {
            breadcrumbs: { name: 'Персональный кабинет' },
            requireAuth: true,
        },
        // lazy-loaded
        component: AdminProfile,
    },
    {
        path: '/admin/history',
        name: 'admin-history',
        // только для авторизованных пользователей
        meta: {
            breadcrumbs: { name: 'История' },
            requireAuth: true,
        },
        // lazy-loaded
        component: AdminHistory,
    },
    {
        path: '/admin/issues',
        name: 'admin-issues',
        // только для авторизованных пользователей
        meta: {
            breadcrumbs: { name: 'Обращения' },
            requireAuth: true,
        },
        // lazy-loaded
        component: AdminIssues,
    },
    {
        path: '/user',
        name: 'user',
        // только для авторизованных пользователей
        meta: {
            breadcrumbs: { name: 'Персональный кабинет' },
            requireAuth: true,
        },
        // lazy-loaded
        component: UserProfile,
    },
    {
        path: '/user/settings',
        name: 'user-settings',
        // только для авторизованных пользователей
        meta: {
            breadcrumbs: { name: 'Настройки' },
            requireAuth: true,
        },
        // lazy-loaded
        component: UserSettings,
    },
    {
        path: '/user/issues',
        name: 'user-issues',
        // только для авторизованных пользователей
        meta: { breadcrumbs: { name: 'Обращения' }, requireAuth: true },
        // lazy-loaded
        component: UserIssues,
    },
    { path: '/:catchAll(.*)', component: NotFound },
]

export default routes
