<script>
import { useRouter } from 'vue-router'

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
        desc: {
            type: String,
            default:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nobis id voluptates necessitatibus fugiat, veritatis illum, qui libero recusandae ipsam omnis quae doloribus porro odit distinctio sed rem? Voluptas, voluptate?',
        },
        picture: {
            type: String,
            default: 'blank2400',
        },
        path: {
            type: String,
            default: '/',
        },
        wide: {
            type: Boolean,
            default: false,
        },
    },
    setup(props) {
        // определяем роутер
        const router = useRouter()

        const pushTo = () => {
            router.push(props.path)
        }

        return {
            pushTo,
        }
    },
}
</script>

<template>
    <section :class="{ wide: !wide }">
        <h2>{{ title }}</h2>

        <article>
            <picture :class="{ defer: picture == 'blank2400' }">
                <source :srcset="`src/assets/images/${picture}.webp`" type="image/webp" />
                <img :src="`src/assets/images/${picture}.jpg`" decoding="async" :alt="desc" />
            </picture>

            <button v-on:click="pushTo">{{ button }}</button>

            <p>
                {{ desc }}
            </p>
        </article>
    </section>
</template>

<style lang="scss" scoped>
section {
    margin: var(--scheme-offset) auto;
    padding: var(--scheme-gap);

    h2 {
        border-bottom: 1px solid var(--scheme-v6);
        margin: auto;
        max-width: var(--scheme-width);
        padding: 0 0 20px;
        width: 100%;
    }

    article {
        display: grid;
        gap: 40px;
        grid-template-rows: 100px 1fr;
        grid-template-columns: repeat(2, 1fr);

        picture {
            border-right: 1px solid var(--scheme-v6);
            grid-row: 1 / 3;
            overflow: hidden;
            padding: 40px 40px 0 0;

            &.defer {
                position: relative;
            }
        }

        button {
            margin: 40px auto 0 0;

            &::after {
                content: '\e00d';
                font-family: 'fadi';
                margin-left: 20px;
            }
        }

        p {
            max-width: 480px;
        }
    }

    &.wide {
        max-width: var(--scheme-width);

        article {
            grid-template-columns: 1fr 400px;
            grid-template-rows: 1fr auto;
            gap: 0 40px;

            picture {
                grid-row: 1 / 2;
            }

            button {
                margin-bottom: auto;
            }

            p {
                border-right: 1px solid var(--scheme-v6);
                font-size: var(--scheme-font-22);
                margin: 0;
                max-width: unset;
                padding: var(--scheme-gap) var(--scheme-gap) 0 0;
            }
        }
    }
}

// базовый breakpoint 1152px
@media all and (max-width: 72em) {
    section {
        article {
            grid-template-columns: 1fr;

            button {
                margin: 0 auto 0 0;
            }
        }

        &.wide {
            article {
                gap: 40px;
                grid-template-columns: 1fr;

                p {
                    border: none;
                    padding: 0;
                }
            }
        }
    }
}

// последний breakpoint для Samsung S10 360x760px
@media all and (max-width: 42em) {
    section {
        article {
            picture {
                border: none;
                padding-right: 0;
            }
        }
    }
}
</style>
