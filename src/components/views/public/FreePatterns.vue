<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import ButtonContext from '@/components/ui/ButtonContext.vue'
</script>

<template>
    <section>
        <h3>Бесплатные выкройки</h3>
        <router-link to="/patterns" custom v-slot="{ navigate }">
            <article @click="navigate" @keypress.enter="navigate" role="link">
                <i class="icon-arrow-top-right"></i>
                <h4>120+</h4>
                Бесплатных выкройки
            </article>
        </router-link>

        <router-link to="/patterns" custom v-slot="{ navigate }">
            <article @click="navigate" @keypress.enter="navigate" role="link">
                <i class="icon-arrow-top-right"></i>
                <h4>3</h4>
                Услуги для выкройки
            </article>
        </router-link>

        <ButtonContext icon="icon-arrow-top-right" text="Посмотреть каталог" />
    </section>
</template>

<style scoped lang="scss">
section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    article {
        border: 1px solid var(--scheme-v3);
        border-top: none;
        display: inherit;
        padding: 40px;
        place-items: center;
        position: relative;

        &:nth-child(3) {
            border-left: none;
        }

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

    // базовый breakpoint 1152px
    @media all and (max-width: 72em) {
        grid-template-columns: 1fr 1fr;

        article {
            border-left: none;

            &:nth-child(3) {
                border-right: none;
            }
        }
        hr {
            display: none;
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
            border-right: none;
            grid-column: 1 / 2;
        }
    }
}
</style>
