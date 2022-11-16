<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// ui
import ButtonContext from '@/components/ui/ButtonContext.vue'
</script>

<template>
    <section>
        <span>Выкройки</span>
        <span>для <br />любой </span>

        <h1>Fadi — онлайн-магазин готовых выкроек. Здесь вы найдёте образцы современной и удобной одежды для всей семьи. Всё уже готово. Нужно всего лишь взять и использовать</h1>

        <ButtonContext icon="icon-telegram" text="Мы в Telegram" />
        <span>одежды</span>
    </section>
</template>

<style scoped lang="scss">
section {
    display: grid;
    place-items: center;

    h1 {
        font: 400 var(--scheme-s) / 1.2 var(--scheme-font);

        grid-column: 5 / 8;
        margin: 0 auto 0 0;
        max-width: 482px;
        padding: 0 0 0 20px;
        text-transform: none;
    }

    span {
        font: 700 117px / 1 var(--scheme-font);

        text-transform: uppercase;

        &:first-child {
            grid-column: 3 / 8;
            margin: 0 0 0 100px;
        }

        &:nth-child(2) {
            grid-column: 1 / 5;
            margin: 0 0 0 auto;
            white-space: nowrap;
        }

        &:last-child {
            grid-column: 5 / 8;
            margin: 0 auto 0 -165px;
        }

        br {
            display: none;
        }
    }

    button {
        background-color: var(--scheme-v5);
        color: var(--scheme-v4);
        grid-column: 1 / 4;
        margin: 0 auto 0 0;

        &::before {
            content: '';
            border: 2px solid var(--scheme-v1);
            border-radius: 50px;
            width: 100%;
            position: absolute;
            height: 100%;
            top: -6px;
            left: -6px;
            padding: 4px;
        }
    }

    // базовый breakpoint 1152px
    @media all and (max-width: 72em) {
        place-items: baseline;

        h1 {
            grid-column: 1 / 8;
            order: 1;
            padding: 0;
        }

        span {
            font: 700 min(117px, 12vw) / 1.1 var(--scheme-font);

            grid-column: 1 / 8 !important;
            margin: 0 !important;

            br {
                display: block;
            }
        }

        h1 {
            margin: 40px 0;
        }

        button {
            grid-column: 1 / 8;
            order: 1;
        }
    }
}
</style>
