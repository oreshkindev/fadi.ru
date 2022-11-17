<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setupimport
import Image from '@/components/image.vue'
import { useStore } from 'vuex'
import { ref } from 'vue'

const store = useStore()

const visible = ref(false)

// выходим
const logout = () => {
    store.dispatch('auth/logout')
}
</script>

<template>
    <nav>
        <router-link to="/" custom v-slot="{ navigate }">
            <img src="@/assets/images/fadi-VI-logo.svg" @click="navigate" @keypress.enter="navigate" alt="Fadi — онлайн-магазин готовых выкроек." />
        </router-link>

        <ul :class="{ visible: visible }">
            <li>
                <i class="icon-dots"></i>
            </li>

            <li>
                <router-link to="/user">Информация</router-link>
            </li>

            <li>
                <router-link to="/user/settings">Настройки</router-link>
            </li>

            <li>
                <a @click="logout">Выход</a>
            </li>
        </ul>

        <!-- подключаем аватарку -->
        <Image text="Rectangle452" />

        <button class="icon-menu" @click="visible = !visible"></button>
    </nav>
</template>

<style lang="scss" scoped>
nav {
    display: grid;
    gap: var(--scheme-gap);
    grid-template-columns: 100px 1fr auto;
    padding: 20px 0;
    place-items: center;

    img {
        cursor: pointer;
    }

    ul {
        display: flex;
        gap: var(--scheme-gap);
        width: 100%;

        li {
            a {
                border-bottom: 2px solid transparent;
                cursor: pointer;

                &.router-link-exact-active,
                &:hover {
                    border-color: var(--scheme-v2);
                }
            }

            &:last-child {
                margin: 0 0 0 auto;
            }
        }
    }

    picture {
        :deep(img) {
            border-radius: 100px;
            height: 55px;
            vertical-align: middle;
            width: 55px;
        }
    }

    button {
        color: var(--scheme-v2);
        display: none;
        font-size: 42px;
    }

    // базовый breakpoint 1152px
    @media all and (max-width: 72em) {
        ul {
            li {
                &:nth-child(2),
                &:nth-child(3) {
                    display: none;
                }
            }
        }
    }
}
</style>
