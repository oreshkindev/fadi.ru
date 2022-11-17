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
const actions = {}

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
