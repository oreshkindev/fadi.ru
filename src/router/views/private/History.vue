<script>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'
//
import Search from '@/components/form/Search.vue'
import { prettyDate } from '@/common/helper/processStrings'

export default {
    components: { Search },
    setup() {
        const store = useStore()

        const route = useRoute()

        const destPath = import.meta.env.VITE_API

        const query = ref('')

        const date = (created) => prettyDate(created)

        const orders = computed(() => store.getters['order/data'])

        const searchedOrders = computed(() => {
            return orders.value.filter((order) => {
                return order.info_order.some((o) => {
                    return o.name.toLowerCase().indexOf(query.value.toLowerCase()) != -1
                })
            })
        })

        store.dispatch('order/getOrders')
        return { route, orders, date, query, searchedOrders, destPath }
    },
}
</script>

<template>
    <nav>
        <router-link to="/user/history">Моя история покупок</router-link>
        <router-link to="/user/history/issues">Обращения</router-link>
    </nav>

    <router-view />

    <template v-if="route.name == 'history'">
        <h1>Профиль</h1>

        <Search title="Найти товар.." @search="query = $event" />

        <section>
            <ul>
                <li>Фото</li>
                <li>Название</li>
                <li>Дата покупки</li>
                <li>Цена</li>
                <li>Статус</li>
                <li>Скачать</li>
            </ul>

            <div v-for="order in searchedOrders" :key="order.id">
                <ul v-for="item in order.info_order" :key="item.sku">
                    <li>
                        <img src="@/assets/images/Rectangle452.webp" type="image/webp" decoding="async" alt="" />
                    </li>
                    <li>{{ item.name }}</li>
                    <li>{{ date(order.created) }}</li>
                    <li>{{ item.price }} р</li>
                    <li>{{ order.status }}</li>
                    <li>
                        <a v-if="item.pdf" :href="destPath + `/` + item.pdf" download>
                            <i class="icon-download-solid"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    </template>
</template>

<style lang="scss" scoped>
nav {
    border-radius: 20px;
    box-sizing: border-box;
    background-color: var(--scheme-v5);
    display: flex;
    gap: var(--scheme-gap);
    margin: var(--scheme-gap) auto var(--scheme-offset);
    max-width: var(--scheme-width);
    padding: var(--scheme-gap);

    a {
        border-bottom: 2px solid transparent;
        cursor: pointer;
        white-space: nowrap;

        &.router-link-exact-active,
        &:hover {
            border-color: var(--scheme-v3);
        }
    }
}

h1 {
    margin: auto auto var(--scheme-gap);
    max-width: var(--scheme-width);
    padding: 0 var(--scheme-gap);
}

section {
    margin: auto;
    max-width: var(--scheme-width);
    padding: var(--scheme-gap);

    ul {
        align-items: center;
        border-bottom: 1px solid var(--scheme-v6);
        display: grid;
        gap: var(--scheme-gap);
        grid-template-columns: 105px 1fr minmax(110px, 1fr) 100px 1fr 60px;
        margin: 0;
        overflow: auto;
        padding: 20px;
        width: 100%;

        &:first-child {
            border: none;
        }

        &:hover {
            background-color: var(--scheme-v5);
        }

        li {
            &:last-child {
                text-align: center;
            }

            img {
                display: block;
                width: 100%;
            }

            i {
                cursor: pointer;

                &:hover {
                    color: var(--scheme-v3);
                }
            }
        }
    }
}
</style>
