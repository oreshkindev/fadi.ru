<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import NamedButton from '@/components/ui/NamedButton.vue'
import ProductCard from '@/components/ProductCard.vue'
</script>

<template>
    <section>
        <h3>Женские выкройки</h3>
        <ProductCard image="Rectangle89" :sizes="[38, 40, 42, 44]" />
        <hr />
        <ProductCard image="Rectangle89" :sizes="[38, 40, 42, 44]" />
        <hr />
        <NamedButton icon="icon-arrow-top-right" text="Посмотреть каталог" />
    </section>
</template>

<style scoped lang="scss">
section {
    display: grid;
    grid-template-columns: 1fr auto 1fr auto 1fr;
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

    :deep(article) {
        picture {
            img {
                padding: var(--scheme-gap) 0 0;
            }
        }
        a {
            margin: var(--scheme-gap) 0 20px;
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
        grid-template-columns: 1fr auto 1fr;

        article {
            max-width: 100%;
        }

        hr {
            margin: 0 var(--scheme-gap) 0 0;
            padding: 0 0 0 var(--scheme-gap);

            &:nth-child(5) {
                display: none;
            }
        }

        button {
            grid-column: 1 / 3;
            margin: var(--scheme-gap) auto;
        }
    }

    // последний breakpoint для Samsung S10 360x760px
    @media all and (max-width: 42em) {
        grid-template-columns: 1fr;

        hr {
            border-bottom: 1px solid var(--scheme-v3);
            grid-column: 1 / 3;
            margin: 0;
        }

        article {
            grid-column: 1 / 3;
        }

        :deep(article) {
            picture {
                img {
                    padding: 0;
                }
            }
            a {
                margin: 20px 0;
            }
        }
    }
}
</style>
