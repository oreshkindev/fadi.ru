import axios from '@/common/axios'

const state = () => ({
    data: [],
    name: '',
})

const getters = {
    data: (state) => state.data,
    name: (state) => state.name,
}

const actions = {
    async get({ commit }) {
        try {
            const response = await axios.get('/category/')

            commit('set', response.data)
        } catch (error) {}
    },
}

const mutations = {
    set: (state, data) => {
        state.data = data
    },
    push: (state, name) => {
        state.name = name
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
