<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

// Определяем наше хранилище
const store = useStore()

const index = ref(3)

// отправляем запрос на получение категорий
const get = store.dispatch('category/get')

// получаем массив с категориями
const category = computed(() => store.getters['category/data'])

const push = (name) => {
    if (name == 'Бесплатные выкройки') {
        store.dispatch('products/getBy', { price: '0.0' })
        return
    }
    store.dispatch('products/getBy', { category: name })
}
</script>

<template>
    <ul>
        <li v-for="(item, i) in category" :key="i" :class="{ active: index == i }" @click="push(item.name), (index = i)">{{ item.name }}</li>
    </ul>
</template>

<style lang="scss" scoped>
ul {
    li {
        border-radius: 25px;

        cursor: pointer;

        padding: 6px 20px;
        margin: 0 0 10px;

        &.active {
            background-color: var(--scheme-v2);
        }
    }
}

// базовый breakpoint 1152px
@media all and (max-width: 72em) {
}
</style>
