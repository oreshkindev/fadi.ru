<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { useRouter } from 'vue-router'

// получаем доступ к параметрам роутера
const router = useRouter()

// получаем name из роутера
const props = defineProps({
    array: {
        type: Array,
        default: () => [],
    },
})

// возвращаем meta данные
const name = (item) => router.options.routes.find(({ name }) => name === item)
</script>

<template>
    <nav>
        <router-link v-for="item in array" :to="{ name: name(item)?.name }">{{ name(item)?.meta.breadcrumbs.name }}</router-link>
    </nav>
</template>

<style lang="scss" scoped>
nav {
    margin: 100px auto 0;
    a {
        border-bottom: 2px solid transparent;
        font-size: clamp(16px, 4vw, 20px);
        margin: 0 25px 0 0;
        text-transform: uppercase;

        &:first-child {
            &::before {
                display: inline-block;
                font: 400 clamp(16px, 4vw, 22px) / 1.2 fadi;
                content: '\e007';

                margin: 0 10px 2px 0;
                vertical-align: middle;
            }

            &::after {
                content: none;
            }
        }

        &::after {
            content: '/';

            margin: 0 10px;
            position: absolute;
        }

        &:last-child {
            &::after {
                content: none;
            }
        }

        &.router-link-exact-active {
            border-bottom: 2px solid var(--scheme-v2);
        }
    }
}
</style>
