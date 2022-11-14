import Home from './Home.vue'
import Workshop from './Workshop.vue'
import Patterns from './Patterns.vue'
import MasterClasses from './MasterClasses.vue'
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
    },
    {
        path: '/workshop',
        component: Workshop,
    },
    {
        path: '/patterns',
        component: Patterns,
    },
    {
        path: '/master-classes',
        component: MasterClasses,
    },
    {
        path: '/cart',
        name: 'cart',
        // lazy-loaded
        component: Cart,
    },
    {
        path: '/signin',
        component: Signin,
    },
    {
        path: '/signup',
        component: Signup,
    },
    {
        path: '/patterns/:category/:id',
        component: PatternsView,
    },
    {
        path: '/admin',
        name: 'admin',
        // only authenticated users can create posts
        meta: { requireAuth: true },
        // lazy-loaded
        component: AdminProfile,
    },
    {
        path: '/admin/history',
        name: 'admin-history',
        // only authenticated users can create posts
        meta: { requireAuth: true },
        // lazy-loaded
        component: AdminHistory,
    },
    {
        path: '/admin/issues',
        name: 'admin-issues',
        // only authenticated users can create posts
        meta: { requireAuth: true },
        // lazy-loaded
        component: AdminIssues,
    },
    //   {
    //     path: "/mod",
    //     name: "moderator",
    //     // lazy-loaded
    //     component: BoardModerator,
    //   },
    {
        path: '/user',
        name: 'user',
        // only authenticated users can create posts
        meta: { requireAuth: true },
        // lazy-loaded
        component: UserProfile,
    },
    {
        path: '/user/settings',
        name: 'user-settings',
        // only authenticated users can create posts
        meta: { requireAuth: true },
        // lazy-loaded
        component: UserSettings,
    },
    {
        path: '/user/issues',
        name: 'user-issues',
        // only authenticated users can create posts
        meta: { requireAuth: true },
        // lazy-loaded
        component: UserIssues,
    },
    { path: '/:catchAll(.*)', component: NotFound },
]

export default routes
