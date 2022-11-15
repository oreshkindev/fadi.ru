<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import Name from './components/Name.vue'
import { ref } from 'vue'

const visible = ref(false)
</script>

<template>
    <section>
        <nav>
            <ul>
                <li>
                    <router-link to="/admin">Общая информация</router-link>
                </li>
                <li class="active">
                    <router-link to="/admin/history">История</router-link>
                </li>
                <li>
                    <router-link to="/admin/issues">Обращения</router-link>
                </li>
            </ul>
        </nav>

        <form action="">
            <input type="text" placeholder="Поиск пользователя" />
        </form>
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Имя</th>
                    <th>Дата последний покупки</th>
                    <th>Код покупки</th>
                    <th>Цена</th>
                    <th>Подробно</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <img src="@/assets/images/Rectangle90.jpg" alt="" />
                    </td>
                    <td>
                        Константин Констанинопольский
                        <span>konstant@mail.ru</span>
                    </td>
                    <td>21 марта. 2022 года</td>
                    <td>231-345</td>
                    <td>450 р</td>
                    <td>
                        <i :class="[visible ? 'visible' : '', 'icon-chevron']" @click="visible = !visible"></i>
                    </td>
                </tr>
                <tr v-show="visible">
                    <td></td>
                    <td>Выкройка штаны костюм балаклава</td>
                    <td>21 марта. 2022 года</td>
                    <td>231-345</td>
                    <td>150 р</td>
                    <td></td>
                </tr>
                <tr v-show="visible">
                    <td></td>
                    <td>Выкройка штаны костюм балаклава</td>
                    <td>21 марта. 2022 года</td>
                    <td>231-345</td>
                    <td>150 р</td>
                    <td></td>
                </tr>
                <tr v-show="visible">
                    <td></td>
                    <td>Выкройка штаны костюм балаклава</td>
                    <td>21 марта. 2022 года</td>
                    <td>231-345</td>
                    <td>150 р</td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <img src="@/assets/images/Rectangle90.jpg" alt="" />
                    </td>
                    <td>Иван Ковтунов <span>konstant@mail.ru</span></td>
                    <td>21 марта. 2022 года</td>
                    <td>231-345</td>
                    <td></td>
                    <td>
                        <i class="icon-chevron"></i>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src="@/assets/images/Rectangle90.jpg" alt="" />
                    </td>
                    <td>
                        Анастасия Венецкая
                        <span>konstant@mail.ru</span>
                    </td>
                    <td>21 марта. 2022 года</td>
                    <td>231-345</td>
                    <td></td>
                    <td>
                        <i class="icon-chevron"></i>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<style lang="scss" scoped>
nav {
    background-color: #fafafa;
    border-radius: 20px;
    padding: var(--scheme-gap) var(--scheme-gap) 0;

    ul {
        display: flex;
        gap: var(--scheme-gap);

        li {
            padding: 0 0 40px;
            &.active {
                border-bottom: 2px solid var(--scheme-v2);
                color: var(--scheme-v2);
            }
        }
    }
}

form {
    margin: 60px 0;

    input {
        background-color: #fafafa;
        border: 1px solid var(--scheme-v3);
        border-radius: 50px;
        padding: 0 40px;
    }
}

table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;

    thead {
        tr {
            th {
                font: inherit;
                opacity: 0.6;
                padding: 20px;
                text-align: left;
            }
        }
    }
    tbody {
        tr {
            border-bottom: 1px solid var(--scheme-v3);

            &:nth-child(-n + 1) {
                background-color: #fafafa;
            }

            &:last-child {
                border: none;
            }

            td {
                padding: 20px;

                span {
                    display: block;
                    opacity: 0.6;
                }

                img {
                    border-radius: 100%;
                    height: 100px;
                    width: 100px;
                }

                i {
                    border-radius: 100%;
                    border: 1px solid var(--scheme-v1);
                    padding: 4px;
                    transform: rotate(90deg);

                    &.visible {
                        transform: rotate(270deg);
                    }
                }
            }
        }
    }
}
</style>
