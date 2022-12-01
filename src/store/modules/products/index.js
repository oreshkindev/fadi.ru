import axios from '@/common/axios'

// определяем состояние
const state = () => ({
    data: [],
})

// определяем геттеры
const getters = {
    data: (state) => state.data,
}

// определяем методы
const actions = {
    async get({ commit }) {
        try {
            const response = await axios.get('/products/')

            commit('set', response.data)
        } catch (error) {}
    },
    async getOne({ commit }, data) {
        try {
            const response = await axios.get(`/products/${data}/`)

            commit('set', response.data)
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
