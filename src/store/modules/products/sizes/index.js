import axios from '@/common/axios'

const state = () => ({
    data: [],
})

const getters = {
    data: (state) => state.data,
}

const actions = {
    async get({ commit }) {
        try {
            const response = await axios.get('/sizes/')

            commit('set', response.data)
        } catch (error) {}
    },
}

const mutations = {
    set: (state, data) => {
        state.data = data
        // при переходе на главную получим товары и запишем их в хранилище
        // sessionStorage.setItem('products', JSON.stringify(data))
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
