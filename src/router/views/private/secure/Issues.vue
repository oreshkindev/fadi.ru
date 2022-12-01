<script>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import Search from '@/components/form/Search.vue'
import { prettyDate } from '@/common/helper/processStrings'

export default {
    components: { Search },
    setup() {
        const store = useStore()

        const route = useRoute()

        const support = computed(() => store.getters['support/data'])

        const date = (created_at) => prettyDate(created_at)

        store.dispatch('support/getTicket')

        return { route, support, date }
    },
}
</script>

<template>
    <h1>Обращения</h1>

    <section>
        <ul>
            <li>Имя</li>
            <li>Обращение</li>
            <li>ID Обращения</li>
            <li>Подробно</li>
        </ul>

        <ul v-for="ticket in support" :key="ticket.id">
            <li>
                Аноним
                <span>{{ ticket.email }}</span>
            </li>
            <li>{{ ticket.text }}</li>
            <li>{{ date(ticket.created_at) }}</li>
            <li>
                <i class="icon-dots"></i>
            </li>
        </ul>
    </section>
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
        border-bottom: 1px solid var(--scheme-v6);
        display: grid;
        gap: var(--scheme-gap);
        grid-template-columns: minmax(260px, 1fr) minmax(132px, 1fr) minmax(142px, 1fr) 185px;
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
}
</style>
