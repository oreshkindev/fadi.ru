<script>
import { useStore } from 'vuex'
import { onMounted, defineAsyncComponent, ref } from 'vue'

export default {
    setup() {
        // определяем наше хранилище
        const store = useStore()

        const payment = defineAsyncComponent(() => import('@/components/Payment.vue'))

        const defer = ref(false)

        onMounted(() => {
            store.dispatch('category/get')

            setTimeout(() => {
                defer.value = true
            }, 1000)
        })
        return { defer, payment }
    },
}
</script>
<template>
    <router-view />

    <footer v-show="defer">
        <article>
            <p>Напишите нам</p>
            <p>
                <a href="mailto:fadi0606@mail.ru?subject=Привет, Fadi. У меня вопрос:">Fadi0606@mail.ru</a>
            </p>

            <p>Позвоните нам</p>
            <p>
                <a href="tel:+79041230403">8 (904) 123 04 03</a>
            </p>

            <h4>Давайте знакомиться</h4>
            <p>
                Делюсь с вами своим швейным опытом и исполняю ваши швейные желания. По образованию я экономист, но это не помешало мне освоить новую профессию.
                В семье шили мама и бабушка, и теперь это пришло ко мне. Я не претендую на звание эксперта. Шью как вижу сама, постоянно ищу способы сделать
                работу проще и быстрее. И очень хочу делиться своим опытом с теми, кому это интересно. Если вам нравятся мои мастер-классы — добро пожаловать в
                мою команду!
            </p>
            <br />
            <p>ИП Барсукова Виктория Федоровна</p>
            <p>
                <a href="https://yandex.ru/maps/-/CCUfyKwlGC" target="_blank">г.Волгоград, ул.Глазкова 23А, офис 7</a>
            </p>

            <br />
            <p>Платежная система</p>

            <component :is="payment" />

            <p>ИНН - 342604175473</p>
            <p>БИК - 041806647</p>

            <br />
            <p>
                <i class="icon-arrow-top-right"></i>
                Дизайн разработан студией
                <a href="https://yourcompas.ru" target="_blank">COMPASS PRO</a>
            </p>
        </article>

        <aside>
            <picture>
                <source srcset="@/assets/images/Rectangle118.webp" type="image/webp" />
                <img src="@/assets/images/Rectangle118.jpg" decoding="async" alt="Давайте знакомиться" loading="lazy" />
            </picture>
        </aside>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 131 131" width="160">
            <path fill="var(--scheme-v2)" d="M131 65.5c0 36.18-29.32 65.5-65.5 65.5S0 101.68 0 65.5 29.33 0 65.5 0 131 29.33 131 65.5Z" />
            <path
                fill="var(--scheme-v1)"
                fill-rule="evenodd"
                d="M65.5 121c30.65 0 55.5-24.85 55.5-55.5S96.15 10 65.5 10 10 34.85 10 65.5 34.85 121 65.5 121Zm0 2c31.76 0 57.5-25.74 57.5-57.5S97.26 8 65.5 8 8 33.74 8 65.5 33.74 123 65.5 123Z"
            />
            <path
                fill-rule="evenodd"
                d="M33.11 64.05v9.05h3.68v-4.12l.02-4.12h3.71l3.71-.02.25-.36c.14-.2.25-.37.25-.38s-1.78-.03-3.96-.03h-3.96v-8.28h6.39l6.39-.02v-.76H33.11v9.05Zm24.68-8.44c-.48.66-2.36 3.23-3.92 5.37-.54.74-1.11 1.52-1.26 1.73-.15.21-.83 1.14-1.51 2.07-2.89 3.95-4.17 5.7-5.09 6.96-.54.73-.98 1.34-.98 1.36s.22.02.49.01h.49l.43-.59c.24-.32 1.59-2.17 3.02-4.11l2.59-3.53h7.73V69l.02 4.12h4.02V55.01H59.8v4.53l-.02 4.53h-3.57c-1.96.02-3.57.01-3.57 0s1.48-2.04 3.28-4.52c1.81-2.48 3.28-4.51 3.28-4.52s-.22-.02-.49-.02h-.49l-.44.61Zm9 8.44v9.05h5.2c4.41 0 5.28 0 5.76-.06 2.78-.3 5.1-1.3 6.76-2.89 1.69-1.62 2.53-3.66 2.53-6.16 0-1.96-.58-3.71-1.69-5.16-.3-.39-1.04-1.12-1.46-1.45-1.71-1.33-4-2.14-6.56-2.34-.33-.03-2.46-.04-5.53-.04h-4.99v9.05Zm22.93 0v9.05h4.06V54.99h-4.06v9.05Zm-13.49-8.2c1.49.23 2.66.69 3.68 1.43 1.73 1.26 2.8 3.26 3.04 5.66.07.69.03 2.27-.06 2.85-.29 1.82-.97 3.25-2.06 4.34-1.15 1.16-2.5 1.8-4.4 2.12-.33.05-.84.07-2.98.08l-2.58.02V55.76l2.48.02c2.02.02 2.56.03 2.9.08Zm19.06 14.78s1.45 2.57 3.45 6.05c.09.15.17.26.19.24.02-.02.19-.31.39-.66.19-.34.98-1.72 1.74-3.06s1.4-2.46 1.41-2.5c.02-.05 0-.06-.16-.06h-.18l-1.16 2.01c-.64 1.1-1.18 2.02-1.19 2.03-.02.01-.55-.9-1.19-2.03l-1.16-2.05h-1.06c-.58 0-1.06 0-1.06.02Zm8.37 3.19v3.17h1.46v-6.34h-1.46v3.17Zm-13.93.26v.5h4.06v-1h-4.06v.5Z"
            />
        </svg>
    </footer>
</template>

<style lang="scss">
/*!
 *  Roboto font.
 */

@font-face {
    font-family: 'Roboto';
    src: url('@/assets/fonts/roboto/Roboto-Regular.woff2?#iefix') format('woff2'), url('@/assets/fonts/roboto/Roboto-Regular.woff') format('woff'),
        url('@/assets/fonts/roboto/Roboto-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: auto;
    unicode-range: U+000-5FF;
}

@font-face {
    font-family: 'Roboto';
    src: url('@/assets/fonts/roboto/Roboto-Bold.woff2?#iefix') format('woff2'), url('@/assets/fonts/roboto/Roboto-Bold.woff') format('woff'),
        url('@/assets/fonts/roboto/Roboto-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: auto;
    unicode-range: U+000-5FF;
}

/*!
 *  fadi icon font. Generated by Iconly: https://iconly.io/
 */
@font-face {
    font-display: auto;
    font-family: 'fadi';
    font-style: normal;
    font-weight: 400;
    src: url('@/assets/fonts/icons/ui/iconly.eot?1669828414609');
    src: url('@/assets/fonts/icons/ui/iconly.eot?#iefix') format('embedded-opentype'), url('@/assets/fonts/icons/ui/iconly.woff2?1669828414609') format('woff2'),
        url('@/assets/fonts/icons/ui/iconly.woff?1669828414609') format('woff'), url('@/assets/fonts/icons/ui/iconly.ttf?1669828414609') format('truetype'),
        url('@/assets/fonts/icons/ui/iconly.svg?1669828414609#fadi') format('svg');
}

:root {
    --scheme-v1: #151515;
    --scheme-v2: #ffffff;
    --scheme-v3: #d69828;
    --scheme-v4: #29aaeb;
    --scheme-v5: #fafafa;
    --scheme-v6: #cccccc;

    // project font-family
    --scheme-font: 'Roboto', 'Helvetica', Arial, sans-serif;
    --scheme-font-92: clamp(52px, 4vw, 92px);
    --scheme-font-62: clamp(52px, 4vw, 62px);
    --scheme-font-52: clamp(42px, 4vw, 52px);
    --scheme-font-42: clamp(32px, 4vw, 42px);
    --scheme-font-32: clamp(22px, 4vw, 32px);
    --scheme-font-22: clamp(16px, 4vw, 22px);
    --scheme-font-16: clamp(12px, 4vw, 16px);

    // project default template width
    --scheme-width: 1480px; // desktop

    // project default template height
    --scheme-height: 568px; // 5 SE

    // project default template gap
    --scheme-gap: 40px;

    // project ex. header & footer height
    --scheme-offset: 100px;

    font-synthesis: none;
    text-rendering: optimizeLegibility;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
}

// базовый breakpoint 1152px
@media all and (max-width: 72em) {
    :root {
        // project default template gap
        --scheme-gap: clamp(20px, 6vw, 40px);

        // project ex. header & footer height
        --scheme-offset: clamp(40px, 6vw, 80px);
    }
}

h1 {
    font: 700 var(--scheme-font-92) / 1.42 var(--scheme-font);

    text-transform: uppercase;
}

h2 {
    font: 400 var(--scheme-font-52) / 1.42 var(--scheme-font);
}

h3 {
    font: 400 var(--scheme-font-42) / 1.42 var(--scheme-font);
}

h4 {
    font: 400 var(--scheme-font-32) / 1.42 var(--scheme-font);
    margin: 0;
}

a {
    color: inherit;
    text-decoration: none;
}

b {
    font-weight: 700;
}

ul {
    box-sizing: border-box;
    padding: 0;

    li {
        list-style: none;
    }
}

[contenteditable] {
    outline: none;
}

picture {
    img {
        display: block;
        width: 100%;
    }
}

label {
    display: block;
    margin: 20px 0 10px;
}

input {
    border: 1px solid var(--scheme-v3);
    border-radius: 10px;
    box-sizing: border-box;
    font: inherit;
    max-width: 400px;
    padding: 14px 20px;
    outline: none;
    width: 100%;
}

button {
    background-color: var(--scheme-v3);
    border: none;
    border-radius: 50px;
    color: var(--scheme-v2);
    cursor: pointer;
    font: 400 var(--scheme-font-16) / 1.64 var(--scheme-font);
    padding: 14px 40px;
    position: relative;
    text-transform: uppercase;
    white-space: nowrap;

    &:not([disabled]):hover {
        background-color: var(--scheme-v5);
        color: var(--scheme-v3);
    }

    &:disabled {
        background-color: var(--scheme-v6);
        color: var(--scheme-v2);
        cursor: default;
    }
}

body {
    font: 400 var(--scheme-font-16) / 1.64 var(--scheme-font);

    margin: auto;
    // ограничимся в 4K
    max-width: 2560px;
}

/*!
 *  fadi icon font. Generated by Iconly: https://iconly.io/
 */

[class='icon'],
[class^='icon-'],
[class*=' icon-'] {
    display: inline-block;
    font-family: 'fadi' !important;
    font-weight: 400;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    line-height: 1;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
}

.icon-user:before {
    content: '\e000';
}

.icon-telegram:before {
    content: '\e001';
}

.icon-cart:before {
    content: '\e002';
}

.icon-search:before {
    content: '\e003';
}

.icon-dots:before {
    content: '\e004';
}

.icon-paperclip:before {
    content: '\e005';
}

.icon-menu:before {
    content: '\e006';
}

.icon-chevron:before {
    content: '\e007';
}

.icon-delete:before {
    content: '\e008';
}

.icon-format-list-bulleted-2:before {
    content: '\e00b';
}

.icon-chat:before {
    content: '\e00c';
}

.icon-arrow-top-right:before {
    content: '\e00d';
}

.icon-format-list-numbered-2:before {
    content: '\e00e';
}

.icon-download-solid:before {
    content: '\e00f';
}

.icon-plus:before {
    content: '\e010';
}

.icon-add-a-photo:before {
    content: '\e012';
}

.icon-pen:before {
    content: '\e014';
}

footer {
    background-color: var(--scheme-v5);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: var(--scheme-offset) 0 0;
    position: relative;

    article {
        margin: auto 0 auto auto;
        max-width: calc(var(--scheme-width) / 2 - var(--scheme-offset));
        padding: 0 var(--scheme-offset) 0 var(--scheme-gap);

        i {
            transform: rotate(-45deg);
        }

        h4 {
            margin: var(--scheme-gap) 0;
        }

        a {
            font-size: var(--scheme-font-32);

            &[target='_blank'] {
                font-size: var(--scheme-font-16);

                &:hover {
                    border-bottom: 2px solid var(--scheme-v3);
                }
            }
        }

        p {
            &:last-child {
                margin: var(--scheme-gap) 0 0;
            }
        }
    }

    aside {
        background-color: #d2d6cd;
        picture {
            img {
                display: block;
                height: 100%;
                object-fit: cover;
                width: 100%;
            }
        }
    }

    svg {
        &:last-child {
            left: 50%;
            position: absolute;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }
}

.defer {
    &::after {
        animation: shimmer 2s infinite;
        background: linear-gradient(90deg, #0000 33%, rgba(255, 255, 255, 0.3) 50%, #0000 66%) transparent;
        bottom: 0;
        content: '';
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(-200%);
    }
}

@keyframes shimmer {
    100% {
        transform: translateX(100%);
    }
}

// базовый breakpoint 1152px
@media all and (max-width: 72em) {
    footer {
        grid-template-columns: 1fr;

        article {
            padding: var(--scheme-gap);
            margin: 0;
        }

        aside {
            picture {
                display: none;
            }
        }

        svg {
            &:last-child {
                display: none;
            }
        }
    }
}
</style>
