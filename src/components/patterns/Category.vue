<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

import Item from '@/components/patterns/Item.vue'
import Temp from '@/components/patterns/Temp.vue'

export default {
    components: { Item, Temp },
    props: {
        category: {
            type: String,
        },
        searchQuery: {
            type: String,
            default: '',
        },
        redactor: {
            type: Boolean,
        },
    },
    setup(props) {
        // Определяем наше хранилище
        const store = useStore()

        // получаем массив с товаром
        const def = computed(() => store.getters['products/category']({ k: 'slug', v: props.category }))
        const products = computed(() => store.getters['products/data'])

        const searchedProducts = computed(() => {
            return products.value.filter((product) => {
                return product.product.name.toLowerCase().indexOf(props.searchQuery.toLowerCase()) != -1
            })
        })

        return { products, searchedProducts, def }
    },
}
</script>

<template>
    <!-- <pre>{{ def }}</pre> -->
    <template v-if="!products.length">
        <Temp />
        <Temp />
        <Temp />
    </template>

    <Item
        v-else
        v-for="item in category == 'all' ? products : searchedProducts.length > 1 ? def : searchedProducts"
        :data="item"
        :category="category == 'all' ? item.product.sub_category[0].slug : category"
        :redactor="redactor"
    />
</template>

<style lang="scss" scoped>
article {
    border-bottom: 1px solid var(--scheme-v6);
    border-right: 1px solid var(--scheme-v6);
    padding: 40px;

    &:nth-child(3) {
        border-right: 1px solid var(--scheme-v6);
        padding: 40px;
    }

    @media all and (max-width: 42em) {
        border-right: none !important;

        &:last-child {
            border: none;
        }
    }
}
</style>
