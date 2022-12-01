<script>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'
//
import Search from '@/components/form/Search.vue'

export default {
    components: { Search },
    setup() {
        const store = useStore()

        const route = useRoute()

        const query = ref('')

        const users = computed(() => store.getters['user/getUsers'])

        const searchedUsers = computed(() => {
            return users.value.filter((user) => {
                return user.email.toLowerCase().indexOf(query.value.toLowerCase()) != -1 || user.id.toString().indexOf(query.value) != -1
            })
        })
        store.dispatch('user/secureGetUsers')

        return { route, users, query, searchedUsers }
    },
}
</script>

<template>
    <nav>
        <router-link to="/secure/users">Общая информация</router-link>
        <router-link to="/secure/users/history">История</router-link>
        <router-link to="/secure/users/issues">Обращения</router-link>
    </nav>

    <router-view />

    <template v-if="route.name == 'users'">
        <h1>Пользователи</h1>

        <Search title="Найти пользователя.." @search="query = $event" />

        <section>
            <ul>
                <li>Имя</li>
                <li>Номер телефона</li>
                <li>ID</li>
                <li>Последнее изменения</li>
            </ul>

            <ul v-for="item in searchedUsers" :key="item.id">
                <li>
                    {{ !item.first_name.length ? `Аноним` : item.first_name }} {{ item.last_name }}
                    <span> {{ item.email }}</span>
                </li>
                <li>{{ item.phone_number }}</li>
                <li>{{ item.id }}</li>
                <li>
                    <i class="icon-dots"></i>
                </li>
            </ul>
        </section>
    </template>
</template>

<style lang="scss" scoped>
nav {
    border-radius: 20px;
    box-sizing: border-box;
    background-color: var(--scheme-v5);
    display: flex;
    gap: var(--scheme-gap);
    margin: var(--scheme-gap) auto var(--scheme-offset);
    max-width: var(--scheme-width);
    padding: var(--scheme-gap);

    a {
        border-bottom: 2px solid transparent;
        cursor: pointer;
        white-space: nowrap;

        &.router-link-exact-active,
        &:hover {
            border-color: var(--scheme-v3);
        }
    }
}

h1 {
    margin: auto auto var(--scheme-gap);
    max-width: var(--scheme-width);
    padding: 0 var(--scheme-gap);
}

section {
    margin: auto;
    max-width: var(--scheme-width);
    padding: var(--scheme-gap);

    ul {
        border-bottom: 1px solid var(--scheme-v6);
        display: grid;
        gap: var(--scheme-gap);
        grid-template-columns: minmax(260px, 1fr) minmax(132px, 1fr) minmax(142px, 1fr) 185px;
        margin: 0;
        overflow: auto;
        padding: 20px;
        width: 100%;

        &:first-child {
            border: none;
        }

        &:hover {
            background-color: var(--scheme-v5);
        }

        li {
            &:last-child {
                text-align: center;
            }

            span {
                color: var(--scheme-v6);
                display: block;
            }

            i {
                cursor: pointer;
                transform: rotate(90deg);

                &:hover {
                    color: var(--scheme-v3);
                }
            }
        }
    }
}
</style>
