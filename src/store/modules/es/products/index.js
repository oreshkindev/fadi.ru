import axios from '@/common/axios'
import concate from '@/common/helper/concate'

// определяем состояние
const state = () => ({
    error: [],
    data: [],
    category: [],
})

// определяем геттеры
const getters = {
    data: (state) => state.data,
    category: (state) => state.category,
    error: (state) => state.error,
}

// определяем методы
const actions = {
    async get({ commit }) {
        try {
            const response = await axios.get('/es-product/')

            commit('set', concate(response.data.results))
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
    async getBy({ commit }, data) {
        try {
            const response = await axios.get(`/es-product/`, { params: data })

            if (data.category ?? data.price) {
                commit('category', concate(response.data.results))
                return
            }
            commit('set', concate(response.data.results))
        } catch (error) {}
    },
}

// определяем мутации
const mutations = {
    set: (state, data) => {
        state.data = data
    },
    category: (state, data) => {
        state.category = data
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
