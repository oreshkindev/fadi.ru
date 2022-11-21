<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { useStore } from 'vuex'
import { onMounted, ref, computed } from 'vue'

// Определяем наше хранилище
const store = useStore()

let index = ref(0)

// получаем массив с категориями
const category = computed(() => store.getters['category/data'])

const push = (id) => {
    store.commit('category/push', id)
}

// отправляем запрос на получение категорий
const get = () => {
    store.dispatch('category/get')
}

const handleNavigate = (categoryId, currentIndex) => {
    index.value = currentIndex;
    push(categoryId);
};

onMounted(() => {
    get()
})
</script>

<template>
    <ul>
        <li v-for="(item, i) in category" :key="i" :class="{ active: index == i }" @click="handleNavigate(item.id, i)">{{ item.name }}</li>
        <li>Бесплатные выкройки</li>
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
