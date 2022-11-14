<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Merchants from '@/components/Merchants.vue'
import Badge from '@/components/Badge.vue'
</script>

<template>
    <section>
        <div class="container">
            <article>
                <ul>
                    Напишите нам
                    <li>
                        <a href="mailto:fadi0606@mail.ru">fadi0606@mail.ru</a>
                    </li>
                </ul>

                <ul>
                    Позвоните нам
                    <li>
                        <a href="tel:+79041230403">8 (904) 123 04 03</a>
                    </li>
                </ul>

                <h5>Давайте знакомиться</h5>
                <p>
                    Делюсь с вами своим швейным опытом и исполняю ваши швейные желания. По образованию я экономист, но это не помешало мне освоить новую профессию. В семье шили
                    мама и бабушка, и теперь это пришло ко мне. Я не претендую на звание эксперта. Шью как вижу сама, постоянно ищу способы сделать работу проще и быстрее. И очень
                    хочу делиться своим опытом с теми, кому это интересно. Если вам нравятся мои мастер-классы — добро пожаловать в мою команду!
                </p>

                <ul>
                    <li>ИП Барсукова Виктория Федоровна</li>
                    <li>Г.Волгоград, ул. Глазкова 23 а , офис 7</li>
                </ul>

                <span>Платежная система</span>

                <Merchants />

                <ul>
                    <li>
                        <span>ИНН - 342604175473</span>
                    </li>
                    <li>
                        <span> БИК - 041806647 </span>
                    </li>
                </ul>

                <p>
                    <i class="icon-arrow-top-right"></i>
                    <a href="/">Дизайн разработан студией COMPAS PRO</a>
                </p>
            </article>
        </div>

        <img src="https://dummyimage.com/1920x2080/" alt="" />

        <Badge />
    </section>
</template>

<style lang="scss" scoped>
section {
    padding: 0;
    position: relative;
    max-width: 100%;

    .container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin: auto;
        max-width: var(--scheme-max-width);

        article {
            padding: var(--scheme-gap);

            h5 {
                text-transform: uppercase;
                margin: 0 0 20px;
            }

            p {
                &:last-child {
                    margin: auto 0 0;
                    opacity: 0.4;

                    i {
                        margin: 0 20px 0 0;
                    }

                    a {
                        font-size: var(--scheme-s);
                    }
                }
            }

            ul {
                margin: 0 0 var(--scheme-gap);
                text-transform: uppercase;

                li {
                    margin: 20px 0;
                    text-transform: none;

                    a {
                        font-size: 36px;
                    }
                }

                &:nth-child(5) {
                    margin: var(--scheme-gap) 0;
                }
            }

            span {
                opacity: 0.4;
            }
        }
    }

    img {
        bottom: 0;
        height: 100%;
        object-fit: cover;
        position: absolute;
        right: 0;
        top: 0;
        width: 45%;
    }

    @media all and (max-width: 60em) {
        display: grid;
        .container {
            grid-template-columns: 1fr;
            order: 1;
        }

        img {
            position: relative;
            width: 100%;
        }

        figure {
            margin: -50px 0 0 0;
            left: 50%;
            position: relative;
        }
    }

    @media all and (max-width: 48em) {
        .container {
            article {
                p {
                    &:last-child {
                        text-align: center;
                    }
                }
                ul {
                    justify-content: center;

                    li {
                        a {
                            font-size: 32px;
                        }
                    }
                }
            }
        }
    }
}
</style>
