import axios from '@/common/axios'

const state = () => ({
    data: [],
    users: [],
})

const getters = {
    data: (state) => state.data,
    getUsers: (state) => state.users,
}

const actions = {
    async createUser({ commit }, data) {
        try {
            const response = await axios.post('/user/', data)

            commit('setUser', response.data)
        } catch (error) {}
    },

    /* 
    crm
*/
    async secureGetUsers({ commit }) {
        try {
            const response = await axios.get('/user/')

            commit('setUsers', response.data.results)
        } catch (error) {}
    },
}

const mutations = {
    setUser: (state, data) => {
        state.data = data
    },

    /* 
    crm
*/
    setUsers: (state, data) => {
        state.users = data
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
