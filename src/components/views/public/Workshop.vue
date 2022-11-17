<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import ButtonContext from '@/components/ui/ButtonContext.vue'
</script>

<template>
    <section>
        <div class="container">
            <h3>Цех</h3>
        </div>

        <article>
            <picture>
                <!-- <source srcset="@/assets/images/sewing-machines-h.webp" type="image/webp" /> -->
                <img src="@/assets/images/sewing-machines-h.avif" decoding="async" alt="Цех" loading="lazy" />
            </picture>

            <ButtonContext icon="icon-arrow-top-right" text="Работа цеха" />
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
    }

    article {
        display: grid;
        gap: var(--scheme-gap);
        grid-template-columns: 1fr 1fr;

        picture {
            grid-row: 1 / 4;
            border-right: 1px solid var(--scheme-v3);
            padding: 40px 40px 0 0;
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

    // базовый breakpoint 1152px
    @media all and (max-width: 72em) {
        article {
            padding: var(--scheme-gap);

            picture {
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

    // последний breakpoint для Samsung S10 360x760px
    @media all and (max-width: 42em) {
        article {
            button,
            p {
                grid-column: 1 / 3;
            }
        }
    }
}
</style>
