<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import PatternItem from '@/components/PatternItem.vue'
//
import { useStore } from 'vuex'
import { onMounted, defineAsyncComponent, computed } from 'vue'

const PatternItemsSkeleton = defineAsyncComponent(() => import('../components/views/PatternItemsSkeleton.vue'))

const props = defineProps({
    // заголовок
    text: {
        type: String,
    },
    // заголовок
    category: {
        type: Number,
    },
})

// Определяем наше хранилище
const store = useStore()

// выводим ошибку
// const error = computed(() => store.getters['products/error'])

// TODO:
// загрузить фотки на сервер
const images = ['Rectangle452', 'Rectangle121', 'Rectangle451', 'Rectangle453', 'Rectangle90', 'Rectangle89']

// получаем массив с товаром
const products = computed(() => store.getters['products/data'])
const category = computed(() => store.getters['category/id'])

// отправляем форму
const get = () => {
    store.dispatch('products/getByCategory', category.value)
}

onMounted(() => {
    get()
})
</script>

<template>
    <section>
        <h4 v-if="text" v-text="text"></h4>

        <PatternItemsSkeleton v-if="!products[0]"></PatternItemsSkeleton>
        <!-- выводим категорию или полный список -->
        <PatternItem v-else v-for="item in products" :key="item.id" :images="images[5]" :name="item.name" />
    </section>
</template>

<style lang="scss" scoped>
section {
    display: grid;
    gap: var(--scheme-gap);
    grid-template-columns: repeat(3, 1fr);
    padding: 0 var(--scheme-gap);
    width: 100%;

    h4 {
        grid-column: 1 / 4;
    }

    // базовый breakpoint 1152px
    @media all and (max-width: 72em) {
        grid-template-columns: repeat(2, 1fr);

        h4 {
            grid-column: 1 / 3;
        }
    }

    // последний breakpoint для Samsung S10 360x760px
    @media all and (max-width: 42em) {
        grid-template-columns: 1fr;

        h4 {
            grid-column: 1 / 2;
        }
    }
}
</style>
