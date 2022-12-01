<script>
import { useRoute } from 'vue-router'

export default {
    props: {
        array: {
            type: Array,
            default: () => [],
        },
        name: {
            type: String,
            default: '',
        },
    },
    setup(props) {
        // получаем доступ к параметрам роутера
        const route = useRoute()
        // возвращаем meta данные
        const history = (item) => route.matched[0].children.find(({ name }) => name === item)

        return { history, route }
    },
}
</script>

<template>
    <nav>
        <router-link v-for="i in array" :to="{ name: history(i)?.name ?? 'category' }">
            {{ history(i)?.meta?.bcrumb.name ?? i }}
        </router-link>

        <span>
            {{ name || route.meta?.bcrumb?.name }}
        </span>
    </nav>
</template>

<style lang="scss" scoped>
nav {
    font-size: 20px;
    margin: 200px auto var(--scheme-gap);
    max-width: var(--scheme-width);
    padding: 0 var(--scheme-gap);
    text-transform: uppercase;

    a {
        display: inline-block;
        margin: 0 20px 0 0;

        &:first-child {
            margin: 0 var(--scheme-gap) 0 0;

            &::before {
                content: '\e007';
                font-family: fadi;
                margin: 0 20px 0 0;
            }

            &::after {
                content: none;
            }
        }

        &::after {
            content: '/';

            margin: 0 0 0 20px;
        }

        &:last-child {
            &::after {
                content: none;
            }
        }
    }

    span {
        color: var(--scheme-v6);
        cursor: default;
    }
}
</style>
