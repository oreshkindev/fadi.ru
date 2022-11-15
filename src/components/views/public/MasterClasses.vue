<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import NamedButton from '@/components/ui/NamedButton.vue'
</script>

<template>
    <section>
        <h3>Мастер классы</h3>
        <article>
            <!-- не забываем сжать изображения перед подключением https://avif.io -->
            <!-- смотрим как https://avif.io/blog/tutorials/html/ -->
            <!-- здесь сжимаем все остальное кроме .avif https://squoosh.app/ -->
            <picture>
                <source srcset="@/assets/images/nobody-cloth.avif" type="image/avif" />
                <source srcset="@/assets/images/nobody-cloth.webp" type="image/webp" />
                <img src="@/assets/images/nobody-cloth.jpg" decoding="async" alt="Мастер классы" loading="lazy" />
            </picture>
            <p>
                На мастер-классах в режиме онлайн обучаю, как строить выкройки и создавать по ним одежду. Жду всех, кто хочет воплощать свои идеи в жизнь под чутким руководством
                опытного наставника
            </p>
        </article>
        <hr />
        <NamedButton icon="icon-arrow-top-right" text="Смотреть мастерклассы" />
    </section>
</template>

<style scoped lang="scss">
section {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 0 40px;

    hr {
        border: none;
        border-right: 1px solid var(--scheme-v3);
    }

    h3 {
        border-bottom: 1px solid var(--scheme-v3);
        grid-column: 1 / 6;
        padding: 20px 0;
    }

    img {
        padding: var(--scheme-gap) 0 0;
        width: 100%;
    }

    p {
        font-size: 42px;
        grid-row: 3 / 3;
        margin: var(--scheme-gap) 0 0;
    }

    button {
        background-color: var(--scheme-v2);
        color: var(--scheme-v4);
        margin: var(--scheme-gap) auto auto 0;
    }

    @media all and (max-width: 60em) {
        gap: 0;

        article {
            grid-column: 1 / 3;

            p {
                font-size: var(--scheme-s);
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
}
</style>
