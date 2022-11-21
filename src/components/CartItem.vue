<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Image from '@/components/ui/Image.vue'
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { useStore } from 'vuex'

const store = useStore()

const props = defineProps({
    // объект товара
    data: {
        type: Object,
        default: () => {},
    },
})

const unset = (item) => {
    store.commit('cart/unset', item)
}
</script>

<template>
    <article>
        <Image text="Rectangle452" />

        <h4>
            {{ data.product.name || 'Без заголовока' }}

            <span>{{ data.product.price || 0 }}р</span>
        </h4>

        <p>Размер {{ data.size }}</p>

        <i class="icon-plus" @click="unset(data.product.id)"></i>
    </article>
</template>

<style scoped lang="scss">
article {
    border-top: 1px solid var(--scheme-v3);
    display: grid;
    grid-template-columns: 172px;
    grid-template-rows: 60px;
    padding: var(--scheme-gap) 0;
    gap: 0 var(--scheme-gap);
    position: relative;

    i {
        bottom: 47px;
        color: var(--scheme-v3);
        cursor: pointer;
        font-size: 28px;
        position: absolute;
        right: 0;
        transform: rotate(45deg);

        &:hover {
            color: var(--scheme-v2);
        }
    }

    picture {
        grid-row: 1 / 3;
        width: 100%;
        max-width: 172px;
    }

    h4 {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;

        span {
            margin: 0 0 0 auto;
        }
    }

    h4,
    span {
        font-size: clamp(24px, 4vw, 32px);
    }

    p {
        grid-column: 2 / 3;
        color: var(--scheme-v2);
    }

    // базовый breakpoint 1152px
    @media all and (max-width: 72em) {
        grid-template-columns: 128px;
    }

    // последний breakpoint для Samsung S10 360x760px
    @media all and (max-width: 42em) {
        grid-template-columns: 142px;
        grid-template-rows: 1fr;

        h4 {
            span {
                flex: 100%;
            }
        }
        picture {
            width: 142px;
        }
    }
}
</style>
