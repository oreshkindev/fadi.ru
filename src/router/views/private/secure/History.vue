<script>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'
//
import Search from '@/components/form/Search.vue'
import { prettyDate } from '@/common/helper/processStrings'

export default {
    components: { Search },
    setup() {
        const store = useStore()

        const route = useRoute()

        const date = (created) => prettyDate(created)

        const active = ref()

        const orders = computed(() => store.getters['order/data'])
        const users = computed(() => store.getters['user/getUsers'])

        const countAmount = (arr) =>
            arr.reduce((acc, curr) => {
                return acc + curr.total_price
            }, 0)

        store.dispatch('order/getOrders')

        return { route, orders, users, countAmount, date, active }
    },
}
</script>

<template>
    <h1>История покупок</h1>

    <!-- <pre>{{ orders }}</pre> -->
    <section>
        <ul>
            <li>Имя</li>
            <li>Дата покупки</li>
            <li>Код покупки</li>
            <li>Сумма</li>
            <li>Подробно</li>
        </ul>

        <div v-for="u in users" :key="u.id" @click="active = u.id" :class="{ active: active == u.id }">
            <ul v-if="orders.some((o) => o.user == u.id)">
                <li>{{ u.email }}</li>
                <li>--</li>
                <li>--</li>
                <li>{{ countAmount(orders.filter((o) => o.user == u.id)) }} р</li>
                <li><i class="icon-chevron"></i></li>
            </ul>

            <div v-for="order in orders.filter((o) => o.user == u.id)" :key="order.id" v-show="active == u.id">
                <ol v-for="item in order.info_order" :key="item.id">
                    <li>{{ item.name }}</li>
                    <li>{{ date(order.created) }}</li>
                    <li>{{ item.sku }}</li>
                    <li>{{ item.price }} р</li>
                    <li>{{ order.status }}</li>
                </ol>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
h1 {
    margin: auto auto var(--scheme-gap);
    max-width: var(--scheme-width);
    padding: 0 var(--scheme-gap);
}

section {
    margin: auto;
    max-width: var(--scheme-width);
    padding: var(--scheme-gap);

    div {
        margin: 10px 0 0;

        &.active {
            ul {
                background-color: var(--scheme-v5);
            }
        }
    }
    ul,
    ol {
        border-bottom: 1px solid var(--scheme-v6);
        display: grid;
        gap: var(--scheme-gap);
        grid-template-columns: minmax(320px, 1fr) minmax(162px, 1fr) minmax(100px, 1fr) minmax(120px, 1fr) 130px;
        margin: 0;
        overflow: auto;
        padding: 20px 0;
        width: 100%;
        list-style: none;

        &:first-child {
            border: none;
            cursor: pointer;
        }

        &:hover {
            background-color: var(--scheme-v5);
        }

        li {
            &:first-child {
                padding: 0 20px;
            }
            &:last-child {
                text-align: center;
            }

            span {
                color: var(--scheme-v6);
                display: block;
            }

            i {
                cursor: pointer;
                transform: rotate(90deg);

                &:hover {
                    color: var(--scheme-v3);
                }
            }
        }
    }

    ol {
        border: none;
    }
}
</style>
