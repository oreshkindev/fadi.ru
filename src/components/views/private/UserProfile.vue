<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import Name from '@/components/Name.vue'
</script>

<template>
    <section>
        <nav>
            <ul>
                <li class="active">
                    <router-link to="/user">Моя история покупок</router-link>
                </li>
                <li>
                    <router-link to="/user/issues">Обращения</router-link>
                </li>
            </ul>
        </nav>

        <form action="">
            <input type="text" placeholder="Поиск покупки" />
        </form>
        <table>
            <thead>
                <tr>
                    <th>Фото</th>
                    <th>Название</th>
                    <th>Дата покупки</th>
                    <th>Цена</th>
                    <th>Скачать</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <img src="https://dummyimage.com/431x552/" alt="" />
                    </td>
                    <td>Свитер, выкройка Fadi №1</td>
                    <td>11.11.2022</td>
                    <td>150р</td>
                    <td>
                        <i class="icon-chevron"></i>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src="https://dummyimage.com/431x552/" alt="" />
                    </td>
                    <td>Свитер, выкройка Fadi №1</td>
                    <td>11.11.2022</td>
                    <td>150р</td>
                    <td>
                        <i class="icon-chevron"></i>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src="https://dummyimage.com/431x552/" alt="" />
                    </td>
                    <td>Свитер, выкройка Fadi №1</td>
                    <td>11.11.2022</td>
                    <td>150р</td>
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

                img {
                    max-width: 100px;
                }

                i {
                    border-right: 1px solid var(--scheme-v1);
                    transform: rotate(90deg);
                }
            }
        }
    }
}
</style>
