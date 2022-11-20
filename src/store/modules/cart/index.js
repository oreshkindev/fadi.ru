import axios from '@/common/axios'
import storage from '@/common/storage'
import store from '@/store'

// определяем состояние
const state = () => ({
    data: storage.get('fadi.cart') || [],
})

// определяем геттеры
const getters = {
    data: (state) => state.data,
}

// определяем методы
const actions = {}

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
