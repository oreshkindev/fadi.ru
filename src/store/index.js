import { createStore, createLogger } from 'vuex'
import auth from './modules/user/auth'
import user from './modules/user'
import products from './modules/es/products'
import category from './modules/products/category'
import cart from './modules/cart'
import order from './modules/cart/order'
import support from './modules/support'

// admin

import admin from "./modules/user/admin";

const debug = import.meta.env.MODE !== 'production'

const Store = createStore({
    modules: {
        auth,
        user,
        products,
        category,
        cart,
        order,

        // admin
        admin,
        support,
    },
    strict: debug,
    plugins: debug ? [createLogger()] : [],
})

export default Store
