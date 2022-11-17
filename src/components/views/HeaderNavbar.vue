<script setup>
import { ref } from 'vue'
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import BadgeButton from '@/components/ui/BadgeButton.vue'

// если корзина пуста, нет смысла ее показывать
const isEmpty = true

const visible = ref(false)
</script>

<template>
    <nav>
        <router-link to="/" custom v-slot="{ navigate }">
            <img src="@/assets/images/fadi-VI-logo.svg" @click="navigate" @keypress.enter="navigate" alt="Fadi — онлайн-магазин готовых выкроек." />
        </router-link>

        <ul :class="{ visible: visible }">
            <li>
                <router-link to="/workshop">Швейный цех</router-link>
            </li>

            <li>
                <router-link to="/patterns">Выкройки</router-link>
            </li>

            <li>
                <router-link to="/master-classes">Мастер-классы</router-link>
            </li>

            <li>
                <a href="/">Частые вопросы</a>
            </li>

            <li>
                <router-link to="/login" class="prepared">Войти</router-link>

                <BadgeButton class="icon-user" size="22px" />
            </li>

            <li v-if="!isEmpty">
                <a class="prepared" href="/">Корзина</a>

                <BadgeButton class="icon-basket" size="22px" />
            </li>
        </ul>

        <button class="icon-menu" @click="visible = !visible"></button>
    </nav>
</template>

<style lang="scss" scoped>
nav {
    // убираем последний gap в навигации
    --items: v-bind(isEmpty ? 5: 6);

    display: grid;
    grid-template-columns: repeat(2, auto);
    justify-content: space-between;
    gap: var(--scheme-gap);
    place-items: center;

    img {
        cursor: pointer;
    }

    ul {
        display: inherit;
        gap: inherit;
        grid-template-columns: repeat(var(--items), auto);
        place-items: inherit;

        li {
            display: inherit;
            gap: 20px;
            grid-template-columns: repeat(2, auto);
            place-items: inherit;

            a {
                border-bottom: 2px solid transparent;
                white-space: nowrap;

                &.router-link-exact-active,
                &:hover {
                    border-color: var(--scheme-v2);
                }

                &.prepared {
                    color: var(--scheme-v2);
                }
            }

            i {
                color: var(--scheme-v4);
            }
        }
        &.visible {
            display: inherit;
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
            background: var(--scheme-v6);
            display: none;
            grid-column: 1 / 3;
            grid-template-columns: 1fr;
            order: 1;
            padding: 20px 0;
            width: 100%;
        }

        button {
            display: block;
        }
    }
}
</style>
