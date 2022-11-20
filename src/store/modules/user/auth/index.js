import axios from '@/common/axios'
import storage from '@/common/storage'
import router from '@/router'

// определяем состояние
const state = () => ({
    error: [],
    data: [],
    auth_token: storage.get('fadi.auth_token') || null,
})

// определяем геттеры
const getters = {
    error: (state) => state.error,
    data: (state) => state.data,
    auth_token: (state) => state.auth_token,
}

// определяем методы
const actions = {
    async login({ commit }, data) {
        try {
            const response = await axios.post('/auth/token/login/', data)
            commit('set', response.data)
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
    async logout({ commit }) {
        try {
            await axios.post('/auth/token/logout/')
            commit('remove')
        } catch (error) {
            if (error.response) {
                // вернулась ошибка (5xx, 4xx)
                console.log(error.response.data)
            }
        }
    },
}

// определяем мутации
const mutations = {
    error: (state, error) => {
        state.error = error
    },
    set: (state, data) => {
        state.data = data
        // помещаем токен в стейт
        state.auth_token = data.auth_token
        // пишем токен в хранилище
        storage.set('fadi.auth_token', data.auth_token)
        // перенаправляем на главную
        router.push('/')
    },
    remove: (state) => {
        storage.remove('fadi.auth_token')
        // меняем состояние
        state.auth_token = null
        // перенаправляем на авторизацию
        router.push('/')
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
