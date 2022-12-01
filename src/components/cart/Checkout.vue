<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
    props: {
        array: {
            type: Array,
            default: () => [],
        },
    },
    setup(props) {
        const store = useStore()

        const person = computed(() => store.getters['auth/data'])

        const countAmount = () =>
            props.array.reduce((acc, curr) => {
                return acc + curr.product.price
            }, 0)

        const createOrder = () => {
            const product_size = props.array.reduce((acc, item) => {
                let key = acc.find((i) => i.sku_product)
                if (key != null) {
                    key.sku_product.push(item.sku_product)
                } else {
                    acc.push(item.sku_product)
                }
                return acc
            }, [])
            store.dispatch('order/createOrder', {
                user: person.value.id,
                product_size,
            })
        }
        return { countAmount, createOrder, person }
    },
}
</script>

<template>
    <ul>
        <li>Итого</li>
        <li>{{ countAmount() }} р</li>
        <li>Товары, {{ array.length }}шт</li>
        <li>{{ countAmount() }} р</li>
        <li>Скидка 0%</li>
        <li>0 р</li>
        <li>Оплата</li>
        <li>Картой</li>
    </ul>

    <button :disabled="!person.id" @click="createOrder">Оплатить заказ</button>
</template>

<style lang="scss" scoped>
ul {
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr auto;
    min-width: 300px;

    li {
        &:first-child,
        &:nth-child(2) {
            font-size: var(--scheme-font-22);
        }
        &:last-child {
            color: var(--scheme-v3);
        }
    }
}

button {
    margin: var(--scheme-gap) auto 0;
}

// базовый breakpoint 1152px
@media all and (max-width: 42em) {
    ul {
        max-width: unset;
    }
}
</style>
