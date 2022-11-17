import { createStore, createLogger } from 'vuex'
import auth from './modules/user/auth'
import user from './modules/user'

const debug = import.meta.env.MODE !== 'production'

const Store = createStore({
    modules: {
        auth,
        user,
    },
    strict: debug,
    plugins: debug ? [createLogger()] : [],
})

export default Store
