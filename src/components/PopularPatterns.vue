<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import ProductCard from '@/components/ProductCard.vue'
</script>

<template>
    <section>
        <h4>Популярные выкройки</h4>

        <ProductCard image="https://dummyimage.com/431x552/" text="Как сшить балаклаву из флиса" download="/" />
        <ProductCard image="https://dummyimage.com/431x552/" text="Как сшить балаклаву из флиса" download="/" />
        <ProductCard image="https://dummyimage.com/431x552/" text="Как сшить балаклаву из флиса" download="/" />

        <!--  -->

        <ProductCard image="https://dummyimage.com/431x552/" text="Как сшить балаклаву из флиса" download="/" />
        <ProductCard image="https://dummyimage.com/431x552/" text="Как сшить балаклаву из флиса" download="/" />
        <ProductCard image="https://dummyimage.com/431x552/" text="Как сшить балаклаву из флиса" download="/" />
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

    @media all and (max-width: 60em) {
        grid-template-columns: repeat(2, 1fr);

        h4 {
            grid-column: 1 / 3;
        }
    }

    @media all and (max-width: 48em) {
        grid-template-columns: 1fr;

        h4 {
            grid-column: 1 / 2;
        }

        article {
            max-width: 100%;
        }
    }
}
</style>
