import axios from '@/common/axios'
// import concate from '@/common/helper/concate'

const state = () => ({
    data: [],
})

const getters = {
    data: (state) => state.data,
}

const actions = {
    async createOrder({ commit }, data) {
        try {
            await axios.post('/order/', data)
            /* 
    response.data
    {
        "id": 1,
        "user": 8,
        "product_size": ["337"],
        "status": "Ожидает оплаты",
        "total_price": 150.0,
        "created": "2022-11-29T05:57:13.753287+03:00"
    }
 */
            commit('cart/clearCart', [], { root: true })

            sessionStorage.removeItem('fadi.cart')
        } catch (error) {}
    },

    async getOrders({ commit }) {
        /*         
        Проблема с заказами
        При отправке 1 заказа прилетает response.data
        Если товаров было несколько в 1 заказе, то
        Прилетает response.data.results
        Если заказов было несколько, то
        Прилетает только первый заказа
        Если его удалить на сервере, то
        Прилетает этот же первый заказ, но
        Пустой
 */

        try {
            const response = await axios.get('/order/')

            // commit('setOrders', response.data ?? concate(response.data.results))
            commit('setOrders', response.data)
        } catch (error) {}
    },
}

const mutations = {
    setOrders: (state, data) => {
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
