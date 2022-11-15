<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import NamedButton from '@/components/ui/NamedButton.vue'
</script>

<template>
    <section>
        <h3>Отзывы</h3>
        <article>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaLorem ipsum dolor sit amet</p>

            <figure>
                <img src="@/assets/images/Ellipse24.jpg" alt="Ольга Наташкина" loading="lazy" />
                <figcaption>
                    <span> ОЛЬГА НАТАШКИНА </span>
                    Очень хорошие выкройкиpor incididuntpor incididunt
                </figcaption>
            </figure>
        </article>
        <hr />
        <NamedButton icon="icon-arrow-top-right" text="Оставить отзыв" />
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

    figure {
        align-items: center;
        display: grid;
        gap: var(--scheme-gap);
        grid-template-columns: auto 1fr;
        margin: var(--scheme-gap) 0 0;
        max-width: 520px;

        img {
            border-radius: 100%;
            max-width: 200px;
            width: 100%;
        }

        figcaption {
            span {
                display: block;
            }
        }
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

            figure {
                img {
                    max-width: 150px;
                    width: 100%;
                }
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

    @media all and (max-width: 46em) {
        article {
            figure {
                text-align: center;
                img {
                    grid-column: 1 / 3;
                    margin: auto;
                }
            }
        }
    }
}
</style>
