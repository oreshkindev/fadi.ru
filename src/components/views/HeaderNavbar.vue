<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { useStore } from 'vuex'
import { ref, computed } from 'vue'

const store = useStore()

// получаем массив с товаром
const guest = computed(() => store.getters['auth/auth_token'])

// получаем массив с товаром
const order = computed(() => store.getters['cart/data'])

const show = ref(false)

// выходим
const logout = () => {
    store.dispatch('auth/logout')
}
</script>

<template>
    <nav :class="{ show: show }">
        <router-link to="/" custom v-slot="{ navigate }">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186 58" width="100" height="31" @click="navigate" @keypress.enter="navigate" role="link">
                <path
                    d="M0 23.867v23.867h9.476l.028-10.875.027-10.875 9.556-.027 9.556-.027.648-.948c.357-.522.649-.974.649-1.005 0-.03-4.592-.068-10.204-.083L9.53 23.867V2.064l16.451-.027 16.45-.027V0H0v23.867ZM63.531 1.618A7412.436 7412.436 0 0 1 53.434 15.77c-1.395 1.95-2.856 3.998-3.248 4.551-.393.553-2.142 3.006-3.888 5.45L33.205 44.109c-1.38 1.935-2.511 3.544-2.511 3.576 0 .03.568.043 1.262.027l1.262-.03 1.103-1.535c.607-.844 4.102-5.726 7.768-10.849l6.665-9.313h19.903l.028 10.875.027 10.875H79.05V0H68.712l-.027 11.933-.028 11.934-9.18.027c-5.05.015-9.182.004-9.182-.023s3.804-5.39 8.454-11.916C63.4 5.427 67.203.067 67.203.043c0-.024-.57-.042-1.265-.04l-1.266.004-1.14 1.61Zm23.166 22.249v23.867h13.381c11.346 0 13.603-.026 14.835-.164 7.159-.802 13.141-3.416 17.404-7.606 4.352-4.276 6.505-9.655 6.505-16.249 0-5.163-1.48-9.784-4.362-13.612-.775-1.03-2.677-2.962-3.769-3.828C126.284 2.78 120.396.631 113.794.11 112.939.042 107.46 0 99.551 0H86.697v23.867Zm59.018 0v23.867h10.447V0h-10.447v23.867ZM110.983 2.26c3.833.614 6.844 1.81 9.472 3.764 4.456 3.313 7.22 8.59 7.816 14.921.171 1.812.081 5.992-.161 7.525-.759 4.804-2.501 8.56-5.299 11.43-2.971 3.047-6.444 4.755-11.334 5.577-.858.144-2.161.18-7.683.216l-6.65.043V1.99l6.38.049c5.21.04 6.579.08 7.459.222Zm49.056 38.965c0 .058 3.741 6.778 8.886 15.961.222.397.441.683.487.635.045-.047.493-.825.994-1.727l4.48-8.06c1.962-3.53 3.597-6.495 3.634-6.588.054-.14-.018-.17-.408-.17h-.473l-2.994 5.292c-1.646 2.91-3.03 5.313-3.075 5.34-.044.028-1.425-2.377-3.069-5.344l-2.988-5.393h-2.737c-1.505 0-2.737.024-2.737.054Zm21.539 8.413V58h3.77V41.277h-3.77v8.362Zm-35.863.688v1.323h10.447v-2.646h-10.447v1.323Z"
                />
            </svg>
        </router-link>

        <button class="icon-menu" @click="show = !show"></button>

        <router-link to="/tailoring">Швейный цех</router-link>

        <router-link to="/patterns">Выкройки</router-link>

        <router-link to="/workshops">Мастер-классы</router-link>

        <router-link to="/faq">Частые вопросы</router-link>

        <template v-if="!guest">
            <router-link to="/signin">Войти</router-link>

            <router-link to="/signin" custom v-slot="{ navigate }">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57 60" width="50" height="50" @click="navigate" @keypress.enter="navigate" role="link">
                    <defs>
                        <clipPath id="a">
                            <path fill="none" d="M57 28.5C57 44.24 44.24 57 28.5 57S0 44.24 0 28.5 12.76 0 28.5 0 57 12.76 57 28.5Z" />
                        </clipPath>
                    </defs>
                    <path fill="var(--scheme-v2)" d="M57 28.5C57 44.24 44.24 57 28.5 57S0 44.24 0 28.5 12.76 0 28.5 0 57 12.76 57 28.5Z" />
                    <g clip-path="url(#a)">
                        <path
                            fill="var(--scheme-v4)"
                            d="M37.1 22.46c0 4.72-3.83 8.54-8.54 8.54s-8.54-3.83-8.54-8.54 3.83-8.54 8.54-8.54 8.54 3.83 8.54 8.54Zm11.84 30.15c0 11.26-9.13 20.38-20.38 20.38S8.18 63.86 8.18 52.61c0-1.29.12-2.55.35-3.78 1.77-9.45 10.07-16.61 20.03-16.61s18.2 7.1 20.02 16.51c.24 1.26.37 2.55.37 3.88Z"
                        />
                    </g>
                </svg>
            </router-link>
        </template>

        <template v-else>
            <router-link to="/signup" @click.native="logout">Выйти</router-link>

            <router-link to="/user" custom v-slot="{ navigate }">
                <picture @click="navigate" @keypress.enter="navigate" role="link">
                    <img src="@/assets/images/Rectangle452.avif" decoding="async" alt="Аватар" loading="lazy" />
                </picture>
            </router-link>
        </template>

        <template v-if="order.length != 0">
            <router-link to="/cart">Корзина</router-link>

            <router-link to="/cart" custom v-slot="{ navigate }">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57 60" width="50" height="50" @click="navigate" @keypress.enter="navigate" role="link">
                    <defs>
                        <clipPath id="a">
                            <path fill="none" d="M57 28.5C57 44.24 44.24 57 28.5 57S0 44.24 0 28.5 12.76 0 28.5 0 57 12.76 57 28.5Z" />
                        </clipPath>
                    </defs>
                    <path fill="var(--scheme-v2)" d="M57 28.5C57 44.24 44.24 57 28.5 57S0 44.24 0 28.5 12.76 0 28.5 0 57 12.76 57 28.5Z" />
                    <g clip-path="url(#a)">
                        <path
                            fill="var(--scheme-v4)"
                            d="M22.77 19.88c.15.09.28.21.39.35.11.14.18.3.22.47.04.17.05.35.03.52-.03.17-.09.34-.18.49l-6.84 11.4h24.82l-6.85-11.4a1.35 1.35 0 0 1-.15-1.02c.09-.35.31-.64.61-.83.31-.18.67-.24 1.02-.15s.64.31.83.61l7.67 12.78h4.61c.36 0 .7.14.95.39s.39.59.39.95v2.69c0 .36-.14.7-.39.95s-.59.39-.95.39H8.64c-.36 0-.7-.14-.95-.39s-.39-.59-.39-.95v-2.69c0-.36.14-.7.39-.95s.59-.39.95-.39h4.61l7.67-12.78c.09-.15.21-.28.35-.39.14-.11.3-.18.47-.22.17-.04.35-.05.52-.03s.34.09.49.18Zm-8.84 38.58-4.1-17.27h37.93l-4.1 17.27c-.11.44-.36.83-.71 1.11-.36.28-.79.43-1.25.43H15.89c-.45 0-.89-.15-1.25-.43s-.61-.67-.71-1.11Z"
                        />
                    </g>
                </svg>
            </router-link>
        </template>
    </nav>
</template>

<style lang="scss" scoped>
nav {
    display: flex;
    gap: var(--scheme-gap);
    padding: var(--scheme-gap);
    place-items: center;

    svg {
        &:first-child {
            cursor: pointer;
            margin: 0 auto 0 0;
        }
    }

    a {
        border-bottom: 2px solid transparent;
        cursor: pointer;
        white-space: nowrap;

        &.router-link-exact-active,
        &:hover {
            border-color: var(--scheme-v2);
        }
    }

    picture {
        position: relative;

        img {
            border-radius: 50%;
            cursor: pointer;
            height: 50px;
            vertical-align: middle;
            width: 50px;

            &:hover {
                opacity: 0.6;
            }
        }
    }

    button {
        &.icon-menu {
            color: var(--scheme-v2);
            display: none;
            font-size: var(--scheme-m);
            margin: 0 0 0 auto;
        }
    }

    // базовый breakpoint 1152px
    @media all and (max-width: 72em) {
        display: grid;

        a,
        picture {
            display: none;
            grid-column: 1 / 3;
        }

        svg {
            grid-column: 1 / 2;

            &:nth-child(8),
            &:last-child {
                display: none;
                grid-column: 1 / 3;
            }
        }

        button {
            &.icon-menu {
                display: inherit;
                grid-column: 2 / 3;
            }
        }

        &.show {
            background-color: var(--scheme-v6);
            a,
            picture {
                display: inherit;
            }

            button {
                &.icon-basket {
                    display: inherit;
                }
            }
        }
    }
}
</style>
