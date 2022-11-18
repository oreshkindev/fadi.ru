<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// ui
import ButtonContext from '@/components/ui/ButtonContext.vue'
//
import ProductItem from '@/components/ProductItem.vue'

import { useStore } from 'vuex'
import { onMounted, computed } from 'vue'
// Определяем наше хранилище
const store = useStore()

// выводим ошибку
// const error = computed(() => store.getters['products/error'])

// TODO:
// загрузить фотки на сервер
const images = ['Rectangle89', 'Rectangle121', 'Rectangle451', 'Rectangle453', 'Rectangle90', 'Rectangle89']

// получаем массив с товаром
const products = computed(() => store.getters['products/data'])

// отправляем форму
const get = () => {
    store.dispatch('products/get')
}

onMounted(() => {
    get()
})
</script>

<template>
    <section>
        <h3>Женские выкройки</h3>

        <ProductItem v-for="item in products.slice(0, 2)" :id="item.id" :images="images[0]" :name="item.name" :category="item.category[0]" :sizes="item.sizes" />

        <ButtonContext icon="icon-arrow-top-right" text="Посмотреть каталог" />
    </section>
</template>

<style scoped lang="scss">
section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0 var(--scheme-gap);

    h3 {
        border-bottom: 1px solid var(--scheme-v3);
        grid-column: 1 / 4;
    }

    article {
        border-right: 1px solid var(--scheme-v3);
        padding: var(--scheme-gap) var(--scheme-gap) 0 0;
    }

    button {
        background-color: var(--scheme-v2);
        color: var(--scheme-v4);
        margin: var(--scheme-gap) auto auto 0;
    }

    // базовый breakpoint 1152px
    @media all and (max-width: 72em) {
        gap: 0;
        grid-template-columns: 1fr 1fr;

        article {
            &:nth-child(3) {
                border-right: none;
                padding: var(--scheme-gap) 0 0 var(--scheme-gap);
            }
        }

        button {
            grid-column: 1 / 3;
            margin: var(--scheme-gap) auto;
        }
    }

    // последний breakpoint для Samsung S10 360x760px
    @media all and (max-width: 42em) {
        grid-template-columns: 1fr;

        article {
            border-bottom: 1px solid var(--scheme-v3);
            border-right: none;
            grid-column: 1 / 2;
            padding: var(--scheme-gap) 0 !important;
        }
    }
}
</style>
