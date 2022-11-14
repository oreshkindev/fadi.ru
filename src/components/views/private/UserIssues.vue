<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import NamedButton from '@/components/ui/NamedButton.vue'
</script>

<template>
    <section>
        <nav>
            <ul>
                <li>
                    <router-link to="/user">Моя история покупок</router-link>
                </li>
                <li class="active">
                    <router-link to="/user/issues">Обращения</router-link>
                </li>
            </ul>
        </nav>

        <div>
            <h5>Форма обращения</h5>

            <p>Задайте вопрос который вас интерисует</p>

            <form action="" @submit.prevent>
                <input type="text" placeholder="Опишите проблему" />
                <input type="text" placeholder="С чем она связанна" />
                <input type="text" placeholder="Укажите ваш номер" />

                <NamedButton text="Отправить" />
            </form>
        </div>

        <div>
            <h5>Мои обращения</h5>
            <table>
                <thead>
                    <tr>
                        <th>Статус</th>
                        <th>Дата обращения</th>
                        <th>Причина</th>
                        <th>Ответ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Идет проверка</td>
                        <td>09.11.2022</td>
                        <td>Покупка товара</td>
                        <td>Отправлен</td>
                    </tr>
                    <tr>
                        <td>Идет проверка</td>
                        <td>09.11.2022</td>
                        <td>Покупка товара</td>
                        <td>Отправлен</td>
                    </tr>
                    <tr>
                        <td>Идет проверка</td>
                        <td>09.11.2022</td>
                        <td>Покупка товара</td>
                        <td>Отправлен</td>
                    </tr>
                    <tr>
                        <td>Идет проверка</td>
                        <td>09.11.2022</td>
                        <td>Покупка товара</td>
                        <td>Отправлен</td>
                    </tr>
                    <tr>
                        <td>Идет проверка</td>
                        <td>09.11.2022</td>
                        <td>Покупка товара</td>
                        <td>Отправлен</td>
                    </tr>
                    <tr>
                        <td>Идет проверка</td>
                        <td>09.11.2022</td>
                        <td>Покупка товара</td>
                        <td>Отправлен</td>
                    </tr>
                    <tr>
                        <td>Идет проверка</td>
                        <td>09.11.2022</td>
                        <td>Покупка товара</td>
                        <td>Отправлен</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    display: grid;
    gap: 40px;

    nav {
        grid-column: 1 / 3;
        margin: 0 0 100px;
    }
}

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

h5 {
    margin: 0 0 40px;
}

form {
    display: grid;
    gap: 20px;
    margin: 20px 0 0;

    a {
        color: var(--scheme-v5);
        justify-self: flex-start;
    }

    input {
        border: 1px solid var(--scheme-v3);
        border-radius: 50px;
        padding: 4px 40px;
    }

    button {
        background-color: var(--scheme-v2);
        color: var(--scheme-v4);
        margin: 40px auto 40px 0;
        padding: 4px 40px;
    }
}

table {
    border: 1px solid var(--scheme-v3);
    border-radius: 25px;
    border-spacing: 0;
    width: 100%;
    padding: 20px;

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

            td {
                padding: 20px;
            }
        }
    }
}
</style>
