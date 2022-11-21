import axios from '@/common/axios'
import concate from '@/common/helper/concate'

// определяем состояние
const state = () => ({
    error: [],
    data: [],
    item: [],
})

// определяем геттеры
const getters = {
    data: (state) => state.data,
    item: (state) => state.item,
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
            const response = await axios.get(`/es-product/?sku_product__in=${data.toString().replace(/[,]/g, '__')}`)
            // commit('set', response.data.results)
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
    async getByCategory({ commit }, data) {
        try {
            
            const response = await axios.get(`/es-product/?category=${data}`)
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
            const response = await axios.get(`/es-product/?name=${data}`)

            commit('setOne', concate(response.data.results)[0])
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
    setOne: (state, data) => {
        state.item = data
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
