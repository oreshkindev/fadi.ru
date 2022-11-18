import axios from '@/common/axios'

// определяем состояние
const state = () => ({
    error: [],
    data: [],
})

// определяем геттеры
const getters = {
    data: (state) => state.data,
    error: (state) => state.error,
}

// определяем методы
const actions = {
    async get({ commit }) {
        try {
            const response = await axios.get('/es-product/')
            commit('set', response.data.results)
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
    async getOne({ commit }, data) {
        try {
            const response = await axios.get(`/products/${data}/`)
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
}

// определяем мутации
const mutations = {
    set: (state, data) => {
        state.data = data
    },
    error: (state, error) => {
        state.error = error
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
