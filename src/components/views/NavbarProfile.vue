<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setupimport { useStore } from 'vuex'
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const logout = () => {
    store.commit('auth/remove')
}
</script>

<template>
    <nav>
        <img src="@/assets/images/fadi-VI-logo.svg" alt="Fadi — онлайн-магазин готовых выкроек." />

        <ul>
            <li>
                <i class="icon-dots"></i>
            </li>

            <li>
                <router-link to="/user">Информация</router-link>
            </li>

            <li>
                <router-link to="/user/settings">Настройки</router-link>
            </li>

            <li @click="logout">Выход</li>

            <li>
                <img src="@/assets/images/Rectangle452.jpg" alt="" />
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
nav {
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    gap: var(--scheme-gap);
    place-items: center;

    ul {
        display: flex;
        gap: inherit;
        place-items: inherit;
        width: 100%;

        li {
            display: inherit;

            a {
                border-bottom: 2px solid transparent;
                line-height: 1.2;
                white-space: nowrap;

                &.router-link-exact-active,
                &:hover {
                    border-bottom: 2px solid var(--scheme-v2);
                }
            }

            img {
                border-radius: 100%;
                width: 43px;
                height: 43px;
            }

            i {
                color: var(--scheme-v1);
                font-size: 22px;
            }

            &:nth-child(4) {
                margin: 0 0 0 auto;
            }
        }
    }

    @media all and (max-width: 74em) {
    }
}
</style>
