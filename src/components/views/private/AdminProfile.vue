<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import Name from './components/Name.vue'
</script>

<template>
    <section>
        <nav>
            <ul>
                <li class="active">
                    <router-link to="/admin">Общая информация</router-link>
                </li>
                <li>
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
                    <th>Номер телефона</th>
                    <th>ID</th>
                    <th>Последнее изменения</th>
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
                    <td>+ 7 902 332 55 33</td>
                    <td>231233-231456-34</td>
                    <td>
                        <i class="icon-dots"></i>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src="@/assets/images/Rectangle90.jpg" alt="" />
                    </td>
                    <td>Иван Ковтунов <span>konstant@mail.ru</span></td>
                    <td>+ 7 902 332 55 33</td>
                    <td>231233-231456-34</td>
                    <td>
                        <i class="icon-dots"></i>
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
                    <td>+ 7 902 332 55 33</td>
                    <td>231233-231456-34</td>
                    <td>
                        <i class="icon-dots"></i>
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
                    transform: rotate(90deg);
                }
            }
        }
    }
}
</style>
