import axios from '@/common/axios'

const state = () => ({
    data: JSON.parse(sessionStorage.getItem('fadi.cart')) ?? [],
})

const getters = {
    data: (state) => state.data,
    product: (state) => (args) => state.data.filter((i) => i.product[args.k] == args.v),
}

const actions = {}

const mutations = {
    pushToCart: (state, data) => {
        // достаем корзину
        const cart = JSON.parse(sessionStorage.getItem('fadi.cart'))
        if (!cart) {
            // изменяем состояние
            state.data = [data]
            // если ее нет, то помещаем в хранилище массив
            sessionStorage.setItem('fadi.cart', JSON.stringify([data]))
        } else {
            // если она есть, проверяем значения в массиве на совпадение
            if (!cart.find((i) => i.product.id == data.product.id)) {
                // подготавливаем
                cart.push(data)
                // обновляем состояние
                state.data = cart
                // пишем
                sessionStorage.setItem('fadi.cart', JSON.stringify(cart))
            }
        }
    },
    removeFromCart: (state, data) => {
        // достаем корзину
        const cart = JSON.parse(sessionStorage.getItem('fadi.cart'))

        if (cart.find((i) => i.product.id == data)) {
            const o = cart.filter((v) => v.product.id != data)
            // обновляем состояние
            state.data = o
            // пишем
            sessionStorage.setItem('fadi.cart', JSON.stringify(o))

            return o
        }
    },
    clearCart: (state, data) => {
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
