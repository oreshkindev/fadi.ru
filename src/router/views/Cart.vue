<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Breadcrumbs from '@/components/ui/Breadcrumbs.vue'
import CardItem from '@/components/CardItem.vue'
import Checkout from '@/components/Checkout.vue'
</script>

<template>
    <section>
        <Breadcrumbs />

        <h1>Корзина</h1>

        <CardItem text="Выкройка балаклава" :price="150" :size="46" height="170-176" />
        <CardItem text="Выкройка балаклава" :price="150" :size="46" height="170-176" />
        <CardItem text="Выкройка балаклава" :price="150" :size="46" height="170-176" />

        <Checkout />
    </section>
</template>

<style lang="scss" scoped>
section {
    display: grid;
    gap: var(--scheme-gap);
    grid-template-columns: 1fr auto;

    ul {
        grid-column: 2 / 3;
        grid-row: 3 / 4;
    }

    h1 {
        grid-column: 1 / 3;
        text-transform: uppercase;
    }

    article {
        grid-column: 1 / 2;
    }

    p {
        grid-column: 1 / 3;
    }

    section {
        grid-column: 1 / 3;
    }

    @media all and (max-width: 60em) {
        h1 {
            font-size: var(--scheme-m);
            margin: 0;
        }

        article,
        ul {
            grid-column: 1 / 3;
        }
    }
}
</style>
