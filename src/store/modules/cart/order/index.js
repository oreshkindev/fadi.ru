import axios from '@/common/axios'
import storage from '@/common/storage'

// определяем состояние
const state = () => ({
    data: [],
})

// определяем геттеры
const getters = {
    get: (state) => state.data,
}

// определяем методы
const actions = {
    async get({ commit, dispatch }) {
        try {
            const response = await axios.get('/order/')
            commit('set', response.data)
        } catch (error) {
            if (error.response) {
                // вернулась ошибка (5xx, 4xx)
                commit('error', error.response.data)

                // прячем ошибку через 5 секунд
                setTimeout(() => {
                    commit('error', [])
                }, 5000)
            }
        }
    },
    async post({ commit }, data) {
        console.log(data)
        try {
            await axios.post('/order/', data)
            
            commit('cart/clear', [], { root: true })

            storage.remove('fadi.cart')
        } catch (error) {}
    },
}

// определяем мутации
const mutations = {
    set: (state, data) => {
        state.data = data
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
