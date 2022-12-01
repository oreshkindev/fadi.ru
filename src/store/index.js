import { createStore, createLogger } from 'vuex'
import auth from './modules/user/auth'
import user from './modules/user'
import products from './modules/es/products'
import category from './modules/es/products/category'
import sizes from './modules/products/sizes'
import cart from './modules/cart'
import order from './modules/cart/order'
import support from './modules/support'

const debug = import.meta.env.MODE !== 'production'

const Store = createStore({
    modules: {
        auth,
        user,
        products,
        category,
        sizes,
        cart,
        order,
        support,
    },
    strict: debug,
    plugins: debug ? [createLogger()] : [],
})

export default Store
