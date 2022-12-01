import store from '@/store'

const routes = [
    {
        path: '/',
        component: () => import('./public/Layout.vue'),
        children: [
            {
                path: '',
                name: 'home',
                component: () => import('./public/Home.vue'),
                meta: {
                    bcrumb: { name: 'Назад' },
                },
            },
            {
                path: 'tailoring',
                name: 'tailoring',
                component: () => import('./public/Tailoring.vue'),
                meta: {
                    bcrumb: { name: 'Швейный цех' },
                },
            },
            {
                path: 'patterns/',
                name: 'patterns',
                component: () => import('./public/Patterns.vue'),
                meta: {
                    bcrumb: { name: 'Выкройки' },
                },
            },
            {
                path: 'patterns/:category/',
                name: 'category',
                component: () => import('./public/sections/patterns/Category.vue'),
                children: [
                    {
                        path: ':product',
                        name: 'product',
                        component: () => import('./public/sections/patterns/View.vue'),
                    },
                ],
            },
            {
                path: 'workshops',
                name: 'workshops',
                component: () => import('./public/Workshops.vue'),
                meta: {
                    bcrumb: { name: 'Мастер-классы' },
                },
            },
            {
                path: 'faq',
                name: 'faq',
                component: () => import('./public/Faq.vue'),
                meta: {
                    bcrumb: { name: 'Частые вопросы' },
                },
            },
            {
                path: 'cart',
                name: 'cart',
                component: () => import('./public/Cart.vue'),
                meta: {
                    bcrumb: { name: 'Корзина' },
                },
            },
            {
                path: 'signin',
                name: 'signin',
                component: () => import('./public/Signin.vue'),
                meta: {
                    bcrumb: { name: 'Войти' },
                },
            },
            {
                path: 'signup',
                name: 'signup',
                component: () => import('./public/Signup.vue'),
                meta: {
                    bcrumb: { name: 'Регистрация' },
                },
            },
            {
                path: '/logout',
                name: 'logout',
                component: {
                    beforeRouteEnter(to, from, next) {
                        store.dispatch('auth/logoutUser')
                        next('/')
                    },
                },
            },
            { path: ':catchAll(.*)', component: () => import('./404.vue') },
        ],
    },
    {
        path: '/user',
        component: () => import('./private/Layout.vue'),
        meta: {
            protected: true,
        },
        children: [
            {
                path: 'history',
                name: 'history',
                component: () => import('./private/History.vue'),
                children: [
                    {
                        path: 'issues',
                        component: () => import('./private/Issues.vue'),
                    },
                ],
            },
            {
                path: 'settings',
                name: 'settings',
                component: () => import('./private/Settings.vue'),
            },
        ],
    },
    {
        path: '/secure',
        component: () => import('./private/secure/Layout.vue'),
        meta: {
            secure: true,
        },
        children: [
            {
                path: 'users',
                name: 'users',
                component: () => import('./private/secure/Database.vue'),
                children: [
                    {
                        path: 'history',
                        component: () => import('./private/secure/History.vue'),
                    },
                    {
                        path: 'issues',
                        component: () => import('./private/secure/Issues.vue'),
                    },
                ],
            },
            {
                path: 'settings',
                component: () => import('./private/secure/Settings.vue'),
            },
            {
                path: 'redactor',
                name: 'redactor',
                component: () => import('./private/secure/Redactor.vue'),
                meta: {
                    bcrumb: { name: 'Редактор' },
                },
                children: [
                    {
                        path: 'patterns',
                        component: () => import('./private/secure/Patterns.vue'),
                    },
                    {
                        path: 'category',
                        component: () => import('./private/secure/Category.vue'),
                    },
                    {
                        path: ':category/:product',
                        name: 'product/edit',
                        component: () => import('./private/secure/View.vue'),
                    },
                ],
            },
        ],
    },
]

export default routes
