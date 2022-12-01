import axios from '@/common/axios'
import concate from '@/common/helper/concate'

const state = () => ({
    data: JSON.parse(sessionStorage.getItem('fadi.products')) ?? [],
})

const getters = {
    data: (state) => state.data,
    category: (state) => (args) =>
        state.data.filter((i) => i.product.sub_category[0][args.k] == args.v || i.product.sub_category.some((c) => c.category[args.k] == args.v)),
    // subcategory: (state) => (args) => state.data.filter((i) => i.product.sub_category.some((c) => c[args.k] == args.v)),
    product: (state) => (args) => state.data.filter((i) => i.product[args.k] == args.v),
}

const actions = {
    async get({ commit }) {
        try {
            const response = await axios.get('/es-product/')

            commit('set', concate(response.data.results))
        } catch (error) {}
    },
    async create({ commit, dispatch }, data) {
        try {
            const response = await axios.post('/products/', data)

            dispatch('get')
        } catch (error) {}
    },
}

const mutations = {
    set: (state, data) => {
        state.data = data

        sessionStorage.setItem('fadi.products', JSON.stringify(data))
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
