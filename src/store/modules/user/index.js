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
    async create({ commit }, data) {
        await axios
            .post('/user/', data)
            .then((response) => {
                commit('set', response.data)
            })
            .catch((error) => {
                if (error.response) {
                    // вернулась ошибка (5xx, 4xx)
                    commit('error', error.response.data)

                    // прячем ошибку через 5 секунд
                    setTimeout(() => {
                        commit('error', [])
                    }, 5000)
                }
            })
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
