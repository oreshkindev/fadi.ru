import axios from '@/common/axios'
import storage from '@/common/storage'

// определяем состояние
const state = () => ({
    id: [],
    data: storage.get('fadi.cart') || [],
})

// определяем геттеры
const getters = {
    id: (state) => state.id,
    data: (state) => state.data,
}

// определяем методы
const actions = {
    async get({ commit }) {
        try {
            const response = await axios.get('/cart/')
            commit('id', response.data)
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
    set: (state, data) => {
        // пишем
        storage.put(data)
        // если нет => пушим
        if (!state.data.includes(data)) {
            state.data.push(data)
        }
    },
    id: (state, data) => {
        state.id = data
    },
    clear: (state, data) => {
        state.data = data
    },
    unset: (state, data) => {
        state.data = storage.update(data)
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
