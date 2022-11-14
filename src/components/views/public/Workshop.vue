<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import NamedButton from '@/components/ui/NamedButton.vue'
</script>

<template>
    <section>
        <div class="container">
            <h3>Цех</h3>
        </div>

        <article>
            <img src="https://dummyimage.com/16:9x1080/" alt="" />
            <NamedButton icon="icon-arrow-top-right" text="Работа цеха" />
            <p>
                Умеренноый объём, прямой силуэт, длина — до линии бёдер. Плечо спущено на 7 см от естественной точки плеча. Перед и спинка с рельефами, образующими V-образную
                линию.
            </p>
        </article>
    </section>
</template>

<style scoped lang="scss">
.container {
    margin: auto;
    max-width: var(--scheme-max-width);
    padding: 0 var(--scheme-gap);
}

section {
    max-width: 100%;
    padding: 0;

    h3 {
        border-bottom: 1px solid var(--scheme-v3);
        margin: auto;
        padding: 20px 0;
        max-width: var(--scheme-max-width);
    }

    article {
        display: grid;
        gap: 40px;
        grid-template-columns: 1fr 1fr;
        padding: 0 var(--scheme-gap) 0 0;

        img {
            grid-row: 1 / 4;
            border-right: 1px solid var(--scheme-v3);
            padding: 40px 40px 0 0;
            width: 100%;
        }

        button {
            background-color: var(--scheme-v2);
            color: var(--scheme-v4);
            margin: 40px auto 0 0;
        }

        p {
            max-width: 420px;
        }
    }

    @media all and (max-width: 60em) {
        article {
            padding: var(--scheme-gap);

            img {
                border: none;
                grid-column: 1 / 3;
                padding: 0;
            }

            p,
            button {
                margin: auto;
            }

            // если захотим поменять позицию
            // button {
            //     order: 1;
            // }
        }
    }

    @media all and (max-width: 46em) {
        article {
            button,
            p {
                grid-column: 1 / 3;
            }
        }
    }
}
</style>
