<script>
import { useStore } from 'vuex'
import { ref, computed } from 'vue'
import Bcrumb from '@/components/Bcrumb.vue'
import CartItem from '@/components/cart/Item.vue'
import CartCheckout from '@/components/cart/Checkout.vue'

export default {
    components: { Bcrumb, CartItem, CartCheckout },
    setup() {
        const store = useStore()

        const cart = computed(() => store.getters['cart/data'])

        return { cart }
    },
}
</script>

<template>
    <Bcrumb :array="['home']" />

    <h1>Корзина</h1>

    <section>
        <div>
            <article v-if="!cart.length">
                <p>Пока нет товаров</p>
            </article>
            <CartItem v-else v-for="item in cart" :key="item.id" :obj="item" />
        </div>

        <aside v-show="cart.length">
            <CartCheckout :array="cart" />
        </aside>
    </section>
</template>

<style lang="scss" scoped>
h1 {
    margin: auto auto var(--scheme-offset);
    max-width: var(--scheme-width);
    padding: 0 var(--scheme-gap);
}

section {
    display: grid;
    grid-auto-columns: 1fr auto;
    margin: auto;
    max-width: var(--scheme-width);
    padding: var(--scheme-gap);
    place-items: start;

    div {
        width: 100%;
        box-sizing: border-box;
        display: inherit;
        gap: 20px;
        padding: 0 var(--scheme-gap) 0 0;
    }

    aside {
        border: 1px solid var(--scheme-v6);
        box-sizing: border-box;
        display: inherit;
        grid-column: 2 / 3;
        padding: var(--scheme-gap);
    }
}

// базовый breakpoint 1152px
@media all and (max-width: 72em) {
    section {
        gap: var(--scheme-gap);
        grid-auto-columns: 1fr;

        div {
            padding: 0;

            article {
                grid-column: 1 / 3;
                padding: 0;
            }
        }

        aside {
            grid-column: unset;
            order: -1;
        }
    }
}

// базовый breakpoint 1152px
@media all and (max-width: 42em) {
    section {
        aside {
            grid-column: unset;
            width: 100%;
        }
    }
}
</style>
