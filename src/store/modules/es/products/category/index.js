import axios from '@/common/axios'

// определяем состояние
const state = () => ({
    data: [],
})

// определяем геттеры
const getters = {
    get: (state) => state.data,
}

// определяем методы
const actions = {
    async get({ commit }) {
        try {
            const response = await axios.get('/es-category/')

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
