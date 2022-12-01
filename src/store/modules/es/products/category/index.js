import axios from '@/common/axios'

const state = () => ({
    data: JSON.parse(sessionStorage.getItem('fadi.category')) ?? [],
})

const getters = {
    data: (state) => state.data,
    get: (state) => (args) => state.data.filter((i) => i[args.k] == args.v),
}

const actions = {
    async get({ commit, dispatch }) {
        try {
            const response = await axios.get('/es-category/')

            dispatch('products/get', [], { root: true })
            commit(
                'set',
                response.data.results.reduce((acc, item) => {
                    acc.push((({ products, ...o }) => o)(item))
                    return acc
                }, [])
            )
        } catch (error) {}
    },
    async create({ commit, dispatch }, data) {
        try {
            const response = await axios.post('/category/', data)

            dispatch('get')
        } catch (error) {}
    },
}

const mutations = {
    set: (state, data) => {
        state.data = data

        sessionStorage.setItem('fadi.category', JSON.stringify(data))
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
