import axios from '@/common/axios'
import router from '@/router'

const state = () => ({
    data: JSON.parse(sessionStorage.getItem('fadi.pub_data')) || [],
    private: {},
})

const getters = {
    data: (state) => state.data,
    private: (state) => state.private,
}

const actions = {
    async authUser({ dispatch }, data) {
        try {
            const response = await axios.post('/auth/token/login/', data)

            dispatch('authUserMe', response.data.auth_token)
        } catch (error) {}
    },
    async authUserMe({ commit }, data) {
        try {
            const response = await axios.get('/auth/users/me/', {
                headers: {
                    Authorization: 'Token ' + data,
                },
            })
            const { id, email, role } = response.data

            commit('setUser', { id, email, role, token: data })
        } catch (error) {}
    },
    async authUserData({ commit }) {
        try {
            const response = await axios.get('/auth/users/me/')

            commit('setUserData', response.data)
        } catch (error) {}
    },
    async logoutUser({ commit }) {
        try {
            await axios.post('/auth/token/logout/')

            commit('removeUser')
        } catch (error) {}
    },
}

const mutations = {
    setUser: (state, data) => {
        state.data = data

        sessionStorage.setItem('fadi.pub_data', JSON.stringify(data))

        router.push('/')
    },
    setUserData: (state, data) => {
        state.private = data
    },
    removeUser: (state) => {
        state.data = []
        sessionStorage.removeItem('fadi.pub_data')
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
