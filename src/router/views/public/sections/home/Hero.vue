<script>
export default {
    setup() {
        return {}
    },
}
</script>

<template>
    <section>
        <span>Выкройки</span>
        <span>для <br />любой </span>

        <h1>
            Fadi — онлайн-магазин готовых выкроек. Здесь вы найдёте образцы современной и удобной одежды для всей семьи. Всё уже готово. Нужно всего лишь взять
            и использовать
        </h1>

        <button>Мы в Telegram</button>
        <span>одежды</span>
    </section>
</template>

<style lang="scss" scoped>
section {
    display: grid;
    margin: var(--scheme-offset) auto;
    max-width: var(--scheme-width);
    padding: var(--scheme-gap);
    place-items: center;

    h1 {
        font-size: var(--scheme-font-16);
        font-weight: 400;
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
        background-color: var(--scheme-v4);
        border: none;
        color: var(--scheme-v2);
        grid-column: 1 / 4;
        padding-right: 60px;

        &::after {
            content: '\e001';
            font-family: 'fadi';
            font-size: var(--scheme-font-22);
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translate(-50%, -50%);
            transition: all 1s ease-in-out;
        }

        &:hover {
            &::after {
                color: var(--scheme-v6);
                transform: translate(400%, -300%);
                opacity: 0;
            }
        }
    }

    // базовый breakpoint 1152px
    @media all and (max-width: 72em) {
        // place-items: baseline;

        h1 {
            grid-column: 1 / 8;
            order: 1;
            padding: 0;
        }

        span {
            font: 700 clamp(48px, 10vw, 117px) / 1.1 var(--scheme-font);

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
