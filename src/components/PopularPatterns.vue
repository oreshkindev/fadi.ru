<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import PatternItem from '@/components/PatternItem.vue'
//
import { computed, ref } from 'vue'

const props = defineProps({
    // схема
    array: {
        type: Array,
        default: () => [],
    },
    // заголовок
    text: {
        type: String,
    },
    // категория
    category: {
        type: Number,
    },
    // поисковой запрос
    query: {
        type: String,
    },
})

// выводим списки товаров по категории
const patterns = computed(() => {
    return props.array.filter(({ text, category }) =>
        [text, category].some((i) =>
            i
                .toString()
                .toLowerCase()
                .includes(props.query || props.category)
        )
    )
})
</script>

<template>
    <section>
        <h4 v-if="text" v-text="text"></h4>

        <!-- выводим категорию или полный список -->
        <PatternItem v-for="item in patterns.length == 0 ? props.array : patterns" :key="item.id" :image="item.image" :text="item.text" :doc="item.doc" />
    </section>
</template>

<style lang="scss" scoped>
section {
    display: grid;
    gap: var(--scheme-gap);
    grid-template-columns: repeat(3, 1fr);

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
