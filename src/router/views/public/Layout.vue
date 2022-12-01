<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { computed, ref } from 'vue'

export default {
    setup() {
        const store = useStore()

        const router = useRouter()

        const person = computed(() => store.getters['auth/data'])

        const cart = computed(() => store.getters['cart/data'])

        const isVisible = ref(false)

        return { isVisible, person, cart, router }
    },
}
</script>

<template>
    <header>
        <nav :class="{ visible: isVisible }">
            <router-link to="/" custom v-slot="{ navigate }">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 186 58"
                    width="100"
                    height="31"
                    v-on:click="navigate"
                    v-on:keypress.enter="navigate"
                    role="link"
                >
                    <path
                        d="M0 23.867v23.867h9.476l.028-10.875.027-10.875 9.556-.027 9.556-.027.648-.948c.357-.522.649-.974.649-1.005 0-.03-4.592-.068-10.204-.083L9.53 23.867V2.064l16.451-.027 16.45-.027V0H0v23.867ZM63.531 1.618A7412.436 7412.436 0 0 1 53.434 15.77c-1.395 1.95-2.856 3.998-3.248 4.551-.393.553-2.142 3.006-3.888 5.45L33.205 44.109c-1.38 1.935-2.511 3.544-2.511 3.576 0 .03.568.043 1.262.027l1.262-.03 1.103-1.535c.607-.844 4.102-5.726 7.768-10.849l6.665-9.313h19.903l.028 10.875.027 10.875H79.05V0H68.712l-.027 11.933-.028 11.934-9.18.027c-5.05.015-9.182.004-9.182-.023s3.804-5.39 8.454-11.916C63.4 5.427 67.203.067 67.203.043c0-.024-.57-.042-1.265-.04l-1.266.004-1.14 1.61Zm23.166 22.249v23.867h13.381c11.346 0 13.603-.026 14.835-.164 7.159-.802 13.141-3.416 17.404-7.606 4.352-4.276 6.505-9.655 6.505-16.249 0-5.163-1.48-9.784-4.362-13.612-.775-1.03-2.677-2.962-3.769-3.828C126.284 2.78 120.396.631 113.794.11 112.939.042 107.46 0 99.551 0H86.697v23.867Zm59.018 0v23.867h10.447V0h-10.447v23.867ZM110.983 2.26c3.833.614 6.844 1.81 9.472 3.764 4.456 3.313 7.22 8.59 7.816 14.921.171 1.812.081 5.992-.161 7.525-.759 4.804-2.501 8.56-5.299 11.43-2.971 3.047-6.444 4.755-11.334 5.577-.858.144-2.161.18-7.683.216l-6.65.043V1.99l6.38.049c5.21.04 6.579.08 7.459.222Zm49.056 38.965c0 .058 3.741 6.778 8.886 15.961.222.397.441.683.487.635.045-.047.493-.825.994-1.727l4.48-8.06c1.962-3.53 3.597-6.495 3.634-6.588.054-.14-.018-.17-.408-.17h-.473l-2.994 5.292c-1.646 2.91-3.03 5.313-3.075 5.34-.044.028-1.425-2.377-3.069-5.344l-2.988-5.393h-2.737c-1.505 0-2.737.024-2.737.054Zm21.539 8.413V58h3.77V41.277h-3.77v8.362Zm-35.863.688v1.323h10.447v-2.646h-10.447v1.323Z"
                    />
                </svg>
            </router-link>

            <i class="icon-menu" v-on:click="isVisible = !isVisible"></i>

            <router-link to="/tailoring">Швейный цех</router-link>

            <router-link to="/patterns">Выкройки</router-link>

            <router-link to="/workshops">Мастер-классы</router-link>

            <router-link to="/faq">Частые вопросы</router-link>

            <router-link :to="person.length != 0 ? `/logout` : `/signin`">{{ person.length != 0 ? `Выйти` : `Войти` }}</router-link>

            <router-link v-if="person.length != 0" :to="person.role != 'DefaultUser' ? `/secure/users` : `/user/history`" custom v-slot="{ navigate }">
                <picture v-if="person.role != 'DefaultUser'" v-on:click="navigate" v-on:keypress.enter="navigate" role="link">
                    <source srcset="@/assets/images/Rectangle452.webp" type="image/webp" />
                    <img src="@/assets/images/Rectangle452.jpg" decoding="async" alt="" />
                </picture>

                <i v-else class="icon-user" v-on:click="navigate" v-on:keypress.enter="navigate" role="link"></i>
            </router-link>

            <template v-if="cart.length">
                <router-link to="/cart">Корзина</router-link>

                <i class="icon-cart" @click="router.push('/cart')">
                    <span>{{ cart.length }}</span>
                </i>
            </template>
        </nav>
    </header>

    <main>
        <router-view />
    </main>
</template>

<style lang="scss" scoped>
i {
    &.icon-user,
    &.icon-cart {
        animation: zoom-in-zoom-out 1s;
        background-color: var(--scheme-v3);
        border: 2px solid transparent;
        border-radius: 50%;
        cursor: pointer;
        height: 50px;
        overflow: hidden;
        position: relative;
        width: 50px;

        &::before {
            color: var(--scheme-v2);
            font-size: 35px;
            left: 50%;
            position: absolute;
            top: 50%;
            transform: translate(-50%, -30%);
        }
        span {
            background: var(--scheme-v1);
            border-radius: 50px;
            color: var(--scheme-v2);
            font-family: var(--scheme-font);
            font-size: var(--scheme-font-16);
            left: 50%;
            line-height: 1.5;
            height: 25px;
            position: absolute;
            text-align: center;
            top: 44%;
            transform: translate(-50%, -50%);
            width: 25px;
        }
    }
    &.icon-menu {
        display: none;
    }
}

header {
    background-color: var(--scheme-v2);
    box-shadow: 0 0 2px 2px rgba(164, 164, 164, 0.2);
    position: sticky;
    top: 0;
    z-index: 999;
}

nav {
    display: flex;
    gap: var(--scheme-gap);
    margin: auto;
    max-width: var(--scheme-width);
    min-height: 54px;
    padding: 10px var(--scheme-gap);
    place-items: center;

    svg {
        margin: 0 auto 0 0;

        &:hover {
            cursor: pointer;
        }
    }

    a {
        border-bottom: 2px solid transparent;
        cursor: pointer;
        white-space: nowrap;

        &.router-link-active,
        &.router-link-exact-active,
        &:hover {
            border-color: var(--scheme-v3);
        }
    }

    picture {
        animation: zoom-in-zoom-out 1s;
        border: 2px solid transparent;
        border-radius: 50%;
        cursor: pointer;
        height: 50px;
        overflow: hidden;
        position: relative;
        vertical-align: middle;
        width: 50px;

        img {
            width: 100%;
        }

        &:hover {
            border: 2px solid var(--scheme-v3);
        }
    }
}

@keyframes zoom-in-zoom-out {
    0% {
        height: 0;
        width: 0;
    }
    50% {
        height: 50px;
        width: 50px;
    }
    100% {
        height: 50px;
        width: 50px;
    }
}

// базовый breakpoint 1152px
@media all and (max-width: 72em) {
    nav {
        display: grid;

        &.visible {
            padding-bottom: var(--scheme-gap);

            a,
            picture {
                display: block;
            }
        }

        a,
        picture {
            display: none;
            grid-column: 1 / 3;
        }

        svg {
            grid-column: 1 / 2;
        }

        i {
            &.icon-user,
            &.icon-cart {
                display: none;
            }
            &.icon-menu {
                color: var(--scheme-v3);
                cursor: pointer;
                display: block;
                font-size: 44px;
                grid-column: 2 / 3;
                margin: 0 0 0 auto;
                padding: 5px;
            }
        }
    }
}
</style>
