<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { useStore } from 'vuex'
import { defineAsyncComponent, onMounted, computed } from 'vue'

const store = useStore()

const Table = defineAsyncComponent(() => import('@/components/Table.vue'))

// получаем массив с товаром
const orders = computed(() => store.getters['order/get'])

// отправляем форму
const get = () => {
    store.dispatch('order/get')
}

onMounted(() => {
    get()
})
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

    <Table :array="orders" />
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
            padding: 0 0 var(--scheme-gap);
            &.active {
                border-bottom: 2px solid var(--scheme-v2);
                color: var(--scheme-v2);
            }
        }
    }
}

form {
    margin: var(--scheme-gap) 0;

    input {
        background-color: var(--scheme-v6);
        border: 1px solid var(--scheme-v3);
        border-radius: 50px;
        padding: 0 var(--scheme-gap);
    }
}
</style>
