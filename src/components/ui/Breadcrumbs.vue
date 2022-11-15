<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
const props = defineProps(['crumbs'])
</script>

<template>
    <nav>
        <ul>
            <li>
                <i class="icon-chevron"></i>
                <router-link to="/">Назад</router-link>
            </li>
        </ul>

        <ul v-if="crumbs">
            <li v-for="item in crumbs" :key="item">
                <router-link :to="item == 'Регистрация' ? '/signup' : '/'">{{ item }}</router-link>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
nav {
    display: flex;
    gap: 14px;

    ul {
        li {
            white-space: nowrap;
            i {
                font-size: 24px;
                transform: rotate(180deg);
                vertical-align: sub;
            }

            a {
                border-bottom: 2px solid transparent;
                display: inline-block;

                font: 400 18px / 1.2 var(--scheme-font);

                margin: 0 10px 0;
                text-transform: uppercase;

                &:hover {
                    border-bottom: 2px solid var(--scheme-v1);
                }
            }
        }

        &:nth-child(2) {
            display: flex;
            flex-wrap: wrap;

            li {
                &::after {
                    content: '/';
                }

                &:last-child {
                    color: var(--scheme-v2);

                    &::after {
                        content: '';
                    }
                }
            }
        }
    }

    @media all and (max-width: 48em) {
        flex-wrap: wrap;
    }
}
</style>
