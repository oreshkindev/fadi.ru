<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import ButtonContext from '@/components/ui/ButtonContext.vue'
</script>

<template>
    <section>
        <h3>Отзывы</h3>
        <article>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaLorem ipsum dolor sit amet</h5>

            <!-- не забываем сжать изображения перед подключением https://avif.io -->
            <!-- смотрим как https://avif.io/blog/tutorials/html/ -->
            <!-- здесь сжимаем все остальное кроме .avif https://squoosh.app/ -->
            <picture>
                <source srcset="@/assets/images/Ellipse24.avif" type="image/avif" />
                <source srcset="@/assets/images/Ellipse24.webp" type="image/webp" />
                <img src="@/assets/images/Ellipse24.jpg" decoding="async" alt="Ольга Наташкина" loading="lazy" />
            </picture>
            <p>
                <span>Ольга Наташкина</span>
                Начинающая швея
            </p>
        </article>

        <ButtonContext icon="icon-arrow-top-right" text="Оставить отзыв" />
    </section>
</template>

<style scoped lang="scss">
section {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 0 var(--scheme-gap);

    h3 {
        border-bottom: 1px solid var(--scheme-v3);
        grid-column: 1 / 6;
    }

    article {
        display: flex;
        flex-wrap: wrap;
        border-right: 1px solid var(--scheme-v3);
        gap: var(--scheme-gap);
        padding-right: var(--scheme-gap);
        place-items: center;

        h5 {
            font-size: min(4vw, 42px);
            margin: var(--scheme-gap) 0 0;
        }

        picture {
            img {
                border-radius: 100%;
                max-width: 200px;
                width: 100%;
            }
        }

        p {
            span {
                display: block;
            }
        }
    }

    button {
        background-color: var(--scheme-v2);
        color: var(--scheme-v4);
        margin: var(--scheme-gap) auto auto 0;
    }

    // базовый breakpoint 1152px
    @media all and (max-width: 72em) {
        gap: 0;

        article {
            border: none;
            border-bottom: 1px solid var(--scheme-v3);
            padding: 0 0 var(--scheme-gap);
        }

        button {
            grid-column: 1 / 3;
            margin: var(--scheme-gap) auto;
        }
    }
}
</style>
