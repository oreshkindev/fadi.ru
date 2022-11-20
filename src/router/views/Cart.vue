<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// components/ui
import Breadcrumbs from '@/components/ui/Breadcrumbs.vue'
import CartItem from '@/components/CartItem.vue'
import Checkout from '@/components/Checkout.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

// Определяем наше хранилище
const store = useStore()

// получаем массив с товаром
const cart = computed(() => store.getters['cart/data'])
</script>

<template>
    <Breadcrumbs :array="['home']" />

    <h1>Корзина</h1>

    <section>
        <div>
            <template v-if="!cart.length">
                <p>В корзине нет товаров</p>
            </template>

            <template v-else>
                <CartItem v-for="item in cart" :data="item" />
            </template>
        </div>

        <aside>
            <Checkout v-if="!!cart.length" :array="cart" />
        </aside>
    </section>
</template>

<style lang="scss" scoped>
nav,
h1 {
    max-width: var(--scheme-max-width);
    padding: 0 var(--scheme-gap);
    width: 100%;
}

section {
    display: grid;
    // gap: var(--scheme-gap);
    width: 100%;

    div {
        grid-column: 1 / 2;
        padding: 0 var(--scheme-gap);
    }

    aside {
        grid-column: 2 / 3;
        padding: 0 var(--scheme-gap);
    }
}

// базовый breakpoint 1152px
@media all and (max-width: 72em) {
    section {
        div {
            grid-column: 1 / 3;
        }

        aside {
            grid-column: 1 / 3;
        }
    }
}
</style>
