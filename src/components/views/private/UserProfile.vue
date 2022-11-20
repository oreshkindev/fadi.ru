<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { defineAsyncComponent } from 'vue'

const Table = defineAsyncComponent(() => import('@/components/Table.vue'))
</script>

<template>
    <section>
        <nav>
            <ul>
                <li class="active">
                    <router-link to="/user">Моя история покупок</router-link>
                </li>
                <li>
                    <router-link to="/user/issues">Обращения</router-link>
                </li>
            </ul>
        </nav>

        <form action="">
            <input type="text" placeholder="Поиск покупки" />
        </form>
    </section>

    <Table />
</template>

<style lang="scss" scoped>
section {
    padding: var(--scheme-gap);
    width: 100%;
}

nav {
    background-color: var(--scheme-v6);
    border-radius: 20px;
    padding: var(--scheme-gap) var(--scheme-gap) 0;

    ul {
        display: flex;
        gap: var(--scheme-gap);

        li {
            padding: 0 0 40px;
            &.active {
                border-bottom: 2px solid var(--scheme-v2);
                color: var(--scheme-v2);
            }
        }
    }
}

form {
    margin: 60px 0;

    input {
        background-color: #fafafa;
        border: 1px solid var(--scheme-v3);
        border-radius: 50px;
        padding: 0 40px;
    }
}
</style>
