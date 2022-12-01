<script>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
    props: {
        title: {
            type: String,
            default: 'Без заголовка',
        },
        button: {
            type: String,
            default: 'Без заголовка',
        },
        path: {
            type: String,
            default: '/',
        },
    },
    setup(props) {
        const store = useStore()

        const router = useRouter()

        const products = computed(() => store.getters['products/data'])

        const countAmount = () => products.value.filter((i) => i.product.price == 0).length

        const pushTo = () => {
            router.push(props.path)
        }

        return {
            pushTo,
            countAmount,
            products,
        }
    },
}
</script>

<template>
    <section>
        <h2>{{ title }}</h2>

        <article>
            <p>
                <span>{{ countAmount() }} +</span>
                Бесплатных выкройки
            </p>

            <p>
                <span>{{ products.length }}</span>
                Услуги для выкройки
            </p>

            <button v-on:click="pushTo">{{ button }}</button>
        </article>
    </section>
</template>

<style lang="scss" scoped>
section {
    margin: var(--scheme-offset) auto;
    max-width: var(--scheme-width);
    padding: var(--scheme-gap);

    h2 {
        margin: auto;
        max-width: var(--scheme-width);
        padding: 0 0 20px;
        width: 100%;
    }

    article {
        display: grid;
        grid-template-columns: 1fr 1fr auto;

        p {
            margin: auto;
            text-align: center;
            padding: var(--scheme-gap) 0;
            width: 100%;
            border: 1px solid var(--scheme-v6);
            position: relative;

            &::after {
                content: '\e00d';
                font-family: 'fadi';
                padding: 20px;
                position: absolute;
                right: 0;
                top: 0;
            }

            &:hover {
                background-color: var(--scheme-v5);
            }

            &:first-child {
                border-right: none;
            }

            span {
                display: block;
                font-size: var(--scheme-font-32);
            }
        }

        button {
            margin: 40px auto auto 40px;

            &::after {
                content: '\e00d';
                font-family: 'fadi';
                margin-left: 20px;
            }
        }
    }
}

// базовый breakpoint 1152px
@media all and (max-width: 72em) {
    section {
        article {
            grid-template-columns: repeat(2, 1fr);

            button {
                margin-left: 0;
            }
        }
    }
}

// последний breakpoint для Samsung S10 360x760px
@media all and (max-width: 42em) {
    section {
        article {
            grid-template-columns: 1fr;

            p {
                &:first-child {
                    border-right: 1px solid var(--scheme-v6);
                    border-bottom: none;
                }
            }
        }
    }
}
</style>
