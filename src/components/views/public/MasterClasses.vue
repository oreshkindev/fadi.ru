<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import ButtonContext from '@/components/ui/ButtonContext.vue'
</script>

<template>
    <section>
        <h3>Мастер классы</h3>
        <article>
            <picture>
                <!-- <source srcset="@/assets/images/nobody-cloth.webp" type="image/webp" /> -->
                <img src="@/assets/images/nobody-cloth.avif" decoding="async" alt="Мастер классы" loading="lazy" />
            </picture>
            <p>
                На мастер-классах в режиме онлайн обучаю, как строить выкройки и создавать по ним одежду. Жду всех, кто хочет воплощать свои идеи в жизнь под чутким руководством
                опытного наставника
            </p>
        </article>

        <ButtonContext icon="icon-arrow-top-right" text="Мастер-классы" />
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
        padding: 20px 0;
    }

    article {
        border-right: 1px solid var(--scheme-v3);
        padding-right: var(--scheme-gap);
    }

    img {
        padding: var(--scheme-gap) 0 0;
        width: 100%;
    }

    p {
        font-size: min(4vw, 42px);
        grid-row: 3 / 3;
        margin: var(--scheme-gap) 0 0;
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
            border-bottom: 1px solid var(--scheme-v3);
            border-right: none;
            grid-column: 1 / 3;
            padding: 0 0 var(--scheme-gap);
        }

        button {
            grid-column: 1 / 3;
            margin: var(--scheme-gap) auto;
        }
    }
}
</style>
