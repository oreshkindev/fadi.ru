<script>
import { onMounted, ref } from 'vue'

export default {
    setup() {
        const pushTo = () => {
            window.location = 'mailto:fadi0606@mail.ru?subject=Привет, Fadi. Хочу оставить отзыв:'
        }

        const reviews = [
            {
                image: 'Ellipse24',
                name: 'Ольга Матвиенко',
                job: 'Начинающая швея',
                desc: 'Огромное спасибо за выкройку. Очень порадовало нашла именно ту что мне нужна. По ней сшила платье и блузку. Ткань очень понравилась. И цвет и качество.',
            },
            {
                image: 'blank2400',
                name: 'Наталья Иванченко',
                job: 'Студент',
                desc: 'Платье шила из тонкого хлопка, но оно стало очень тяжелым. В нем не комфортно. Нужно было шить из более легкого материала. Но это уже мои проблемы. Я только учусь шить. ',
            },
            {
                image: 'blank2400',
                name: 'Татьяна Нестерова',
                job: 'Домохозяка',
                desc: 'Подарили мне швейную машинку новую. Шитьем занимаюсь с техникума. Здорово что есть такие сайты с готовыми выкройками. Купила - сижу шью. Всем хорошего дня.',
            },
        ]
        // создаем реактивный экземпляр массива
        const swiper = ref(reviews)

        const next = (index) => {
            if (index != 0) {
                swiper.value = swiper.value.concat(swiper.value.shift())
            }
        }

        onMounted(() => {
            setInterval(() => {
                swiper.value.forEach((item, index) => setTimeout(() => next(index)))
            }, 10000)
        })
        return { pushTo, swiper }
    },
}
</script>

<template>
    <section>
        <h2>Отзывы</h2>

        <article v-for="item in swiper">
            <span>
                {{ item.desc }}
            </span>

            <picture>
                <source :srcset="`src/assets/images/${item.image}.webp`" type="image/webp" />
                <img :src="`src/assets/images/${item.image}.jpg`" decoding="async" :alt="item.name" loading="lazy" />
            </picture>

            <p>
                <span>{{ item.name }}</span>
                {{ item.job }}
            </p>
        </article>
        <button v-on:click="pushTo">Оставить отзыв</button>
    </section>
</template>

<style scoped lang="scss">
section {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 0 var(--scheme-gap);
    padding: var(--scheme-gap);
    max-width: var(--scheme-width);
    margin: auto;

    h2 {
        border-bottom: 1px solid var(--scheme-v6);
        grid-column: 1 / 6;
        margin: 0;
        padding: 0 0 20px;
    }

    article {
        display: none;
        flex-wrap: wrap;
        border-right: 1px solid var(--scheme-v6);
        gap: var(--scheme-gap);
        padding-right: var(--scheme-gap);
        place-items: center;

        &:nth-child(2) {
            display: flex;
        }

        span {
            font-size: var(--scheme-font-32);
            padding: var(--scheme-gap) 0;
        }

        picture {
            img {
                border-radius: 100%;
                height: 150px;
                object-fit: cover;
                width: 150px;
            }
        }

        p {
            span {
                display: block;
                padding: 0;
            }
        }
    }

    button {
        background-color: var(--scheme-v3);
        color: var(--scheme-v2);
        margin: var(--scheme-gap) auto auto 0;
    }

    // базовый breakpoint 1152px
    @media all and (max-width: 72em) {
        gap: 0;

        article {
            border: none;
            padding: 0 0 var(--scheme-gap);

            picture {
                img {
                    max-width: 150px;
                }
            }
        }

        button {
            grid-column: 1 / 3;
        }
    }
}
</style>
