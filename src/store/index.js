import { createStore, createLogger } from 'vuex'
import auth from './modules/user/auth'
import user from './modules/user'
import products from './modules/products'

const debug = import.meta.env.MODE !== 'production'

const Store = createStore({
    modules: {
        auth,
        user,
        products,
    },
    strict: debug,
    plugins: debug ? [createLogger()] : [],
})

export default Store
