<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import NamedButton from '@/components/ui/NamedButton.vue'
import { ref } from 'vue'

const visible = ref(false)
</script>

<template>
    <section>
        <nav>
            <ul>
                <li class="active">Общие</li>
            </ul>
        </nav>

        <form action="" v-show="visible" @submit.prevent="visible = !visible">
            <input type="text" placeholder="Старый пароль" />
            <input type="text" placeholder="Новый пароль" />
            <input type="text" placeholder="Повторите пароль" />

            <NamedButton text="Изменить пароль" />
        </form>

        <table>
            <tbody>
                <tr>
                    <td>Пароль</td>
                    <td>обневлен 3 месяца назад</td>
                    <td @click="visible = !visible">
                        <span>Изменить</span>
                    </td>
                </tr>
                <tr>
                    <td>Электронная почта</td>
                    <td>konstant@mail.ru</td>
                    <td>Изменить</td>
                </tr>
                <tr>
                    <td>Номер телефона</td>
                    <td>902 ** ** 23</td>
                    <td>Изменить</td>
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
    display: grid;
    gap: 20px;
    margin: 100px auto;
    max-width: 400px;

    a {
        color: var(--scheme-v5);
        justify-self: flex-start;
    }

    input {
        border: 1px solid var(--scheme-v3);
        border-radius: 50px;
        padding: 4px 40px;
        text-align: center;
    }

    button {
        background-color: var(--scheme-v2);
        color: var(--scheme-v4);
        margin: 40px auto;
        padding: 4px 40px;
    }
}

table {
    border-collapse: collapse;
    border-spacing: 0;
    margin: 100px 0;
    width: 100%;

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
                    cursor: pointer;
                }
            }
        }
    }
}
</style>
