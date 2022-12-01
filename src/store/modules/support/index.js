import axios from '@/common/axios'

const state = () => ({
    data: [],
})

const getters = {
    data: (state) => state.data.flat().reverse(),
}

const actions = {
    async createTicket({ commit }, data) {
        try {
            const response = await axios.post('/support-ticket/', data)
            console.log(response.data)
            commit('setTicket', response.data)
        } catch (error) {}
    },
    async getTicket({ commit }) {
        try {
            const response = await axios.get('/support-ticket/')

            commit('setTicket', response.data)
        } catch (error) {}
    },
}

// определяем мутации
const mutations = {
    setTicket: (state, data) => {
        state.data.push(data)
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
