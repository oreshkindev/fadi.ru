<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import Item from '@/components/patterns/Item.vue'
import Temp from '@/components/patterns/Temp.vue'

export default {
    components: { Item, Temp },
    props: {
        title: {
            type: String,
            default: 'Без заголовка',
        },
        button: {
            type: String,
            default: 'Без заголовка',
        },
        count: {
            type: Number,
            default: 1,
        },
    },
    setup(props) {
        const store = useStore()

        const router = useRouter()

        const products = computed(() => store.getters['products/category']({ k: 'name', v: props.title }))

        const category = computed(() => store.getters['category/get']({ k: 'name', v: props.title })[0])

        const pushTo = () => {
            router.push(`patterns/${category.value.slug}/`)
        }
        return {
            products,
            category,
            pushTo,
        }
    },
}
</script>

<template>
    <section>
        <h2>{{ title }} выкройки</h2>

        <template v-if="!products.length">
            <Temp />

            <button class="defer">Загрузка</button>
        </template>

        <template v-else>
            <Item v-for="item in products.slice(0, count)" :data="item" :category="category.slug" />

            <button v-on:click="pushTo">{{ button }}</button>
        </template>
    </section>
</template>

<style lang="scss" scoped>
section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0 var(--scheme-gap);
    padding: var(--scheme-gap);
    max-width: var(--scheme-width);
    margin: auto;

    h2 {
        border-bottom: 1px solid var(--scheme-v6);
        grid-column: 1 / 4;
        margin: 0;
        padding: 0 0 20px;
    }

    article {
        border-right: 1px solid var(--scheme-v6);
        padding: var(--scheme-gap) var(--scheme-gap) 0 0;
    }

    button {
        background-color: var(--scheme-v3);
        color: var(--scheme-v2);
        margin: var(--scheme-gap) auto auto 0;

        &.defer {
            background-color: var(--scheme-v6);
            color: var(--scheme-v6);
            cursor: default;
            overflow: hidden;
        }

        &::after {
            content: '\e00d';
            font-family: 'fadi';
            margin: 0 0 0 20px;
        }
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
            border-bottom: 1px solid var(--scheme-v6);
            border-right: none;
            grid-column: 1 / 2;
            padding: var(--scheme-gap) 0 !important;
        }
    }
}
</style>
