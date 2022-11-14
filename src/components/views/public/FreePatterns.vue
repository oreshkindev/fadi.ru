<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import NamedButton from '@/components/ui/NamedButton.vue'
</script>

<template>
    <section>
        <h3>Бесплатные выкройки</h3>
        <article>
            <i class="icon-arrow-top-right"></i>
            <h4>120+</h4>
            <p>Бесплатных выкройки</p>
        </article>

        <hr />

        <article>
            <i class="icon-arrow-top-right"></i>
            <h4>3</h4>
            <p>Услуги для выкройки</p>
        </article>

        <hr />

        <NamedButton icon="icon-arrow-top-right" text="Посмотреть каталог" />
    </section>
</template>

<style scoped lang="scss">
section {
    display: grid;
    grid-template-columns: 1fr auto 1fr auto 1fr;

    hr {
        border: none;
        border-right: 1px solid var(--scheme-v3);
    }

    article {
        display: inherit;
        place-items: center;
        padding: 40px;
        position: relative;
        border-bottom: 1px solid var(--scheme-v3);

        &:hover {
            background-color: antiquewhite;
            cursor: pointer;
        }
    }

    i {
        position: absolute;
        right: 0;
        padding: 20px;
        top: 0;
    }

    h3 {
        border-bottom: 1px solid var(--scheme-v3);
        grid-column: 1 / 6;
        padding: 20px 0;
    }

    button {
        background-color: var(--scheme-v2);
        color: var(--scheme-v4);
        margin: var(--scheme-gap) auto auto var(--scheme-gap);
    }

    @media all and (max-width: 60em) {
        grid-template-columns: 1fr;

        article {
            grid-column: 1 / 6;
        }
        hr {
            display: none;
        }

        button {
            margin: var(--scheme-gap) auto;
        }
    }
}
</style>
