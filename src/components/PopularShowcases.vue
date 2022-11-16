<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue'
import ProductItem from '@/components/ProductItem.vue'

const visible = ref(false)
</script>

<template>
    <section>
        <ul :class="{ visible: visible }">
            <li :class="{ visible: visible }" @click="visible = !visible">Все</li>
            <li class="active">Бесплатные</li>
            <li>Женщинам</li>
            <li>Мужчинам</li>
            <li>Детям</li>
        </ul>

        <div class="showcases">
            <ProductItem image="https://dummyimage.com/431x552/" text="Как сшить балаклаву из флиса" download="/" />
            <ProductItem image="https://dummyimage.com/431x552/" text="Как сшить балаклаву из флиса" download="/" />
            <ProductItem image="https://dummyimage.com/431x552/" text="Как сшить балаклаву из флиса" download="/" />

            <!--  -->

            <ProductItem image="https://dummyimage.com/431x552/" text="Как сшить балаклаву из флиса" download="/" />
            <ProductItem image="https://dummyimage.com/431x552/" text="Как сшить балаклаву из флиса" download="/" />
            <ProductItem image="https://dummyimage.com/431x552/" text="Как сшить балаклаву из флиса" download="/" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    border-top: 1px solid var(--scheme-v3);
    display: grid;
    gap: var(--scheme-gap);
    grid-template-columns: auto 1fr;
    padding: 0;
    width: 100%;

    ul {
        border-right: 1px solid var(--scheme-v3);
        padding: var(--scheme-gap) var(--scheme-gap) 0 0;

        li {
            cursor: default;

            padding: 8px 60px 8px 40px;

            &.active {
                background-color: var(--scheme-v2);
                border-radius: 25px;
                color: var(--scheme-v4);
            }
        }
    }
    .showcases {
        display: inherit;
        gap: var(--scheme-gap);
        grid-template-columns: 1fr 1fr;
        padding: var(--scheme-gap) 0 0;

        article {
            max-width: 100%;
        }
    }

    @media all and (max-width: 60em) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media all and (max-width: 48em) {
        grid-template-columns: 1fr;

        ul {
            border: none;
            padding: var(--scheme-gap) 0;
            height: 80px;
            overflow: hidden;

            li {
                border-bottom: 1px solid var(--scheme-v3);

                &:first-child {
                    border: none;
                    position: relative;

                    &::after {
                        content: '\e008';

                        font-family: 'fadi';
                        font-size: 24px;
                        position: absolute;
                        right: 0;
                        top: 2px;
                        transform: rotate(270deg);
                    }
                }

                &.active {
                    background-color: transparent;
                    border-radius: 0;
                    color: var(--scheme-v2);
                }
            }

            &.visible {
                height: auto;

                li {
                    &:first-child {
                        &::after {
                            color: var(--scheme-v2);
                            transform: rotate(90deg);
                        }
                    }
                }
            }
        }
    }
}
</style>
