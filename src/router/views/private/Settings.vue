<script>
import { useStore } from 'vuex'
import { ref, computed } from 'vue'

export default {
    setup() {
        const store = useStore()

        const user = computed(() => store.getters['auth/private'])

        const editable = ref(false)

        store.dispatch('auth/authUserData')

        return { editable, user }
    },
}
</script>

<template>
    <nav>
        <router-link to="/user/settings">Общие</router-link>
    </nav>

    <h1>Настройки</h1>

    <section>
        <div>
            <!-- <i class="icon-pen" :class="{ active: editable }" @click="editable = !editable"></i> -->
            <picture>
                <img src="@/assets/images/Rectangle452.jpg" alt="" />
            </picture>

            <ul>
                <li>
                    <span :contenteditable="editable">{{ user.first_name || 'Аноним' }}</span>
                    <span :contenteditable="editable">{{ user.last_name || 'Аноним' }}</span>
                </li>

                <li>{{ user.email }}</li>

                <li :contenteditable="editable">{{ user.phone_number }}</li>
            </ul>
        </div>
    </section>
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

    div {
        border: 1px solid var(--scheme-v6);
        border-radius: 10px;
        display: grid;
        padding: var(--scheme-gap);
        place-items: center;
        position: relative;
        text-align: center;

        picture {
            border-radius: 150px;
            height: 150px;
            width: 150px;
            overflow: hidden;
        }

        i {
            cursor: pointer;
            font-size: 20px;
            line-height: 1.3;
            margin: 0px 0 0px 20px;
            vertical-align: text-bottom;
            position: absolute;
            right: 20px;
            top: 20px;

            &.active {
                color: var(--scheme-v3);
            }

            &:hover {
                color: var(--scheme-v3);
            }
        }

        ul {
            li {
                border: 1px dashed transparent;
                padding: 10px 20px;

                span {
                    border: 1px dashed transparent;
                    font-size: var(--scheme-font-22);
                    padding: 3px;

                    &:first-child {
                        border-right: none;
                    }
                    &:last-child {
                        border-left: none;
                    }
                }

                &:nth-child(2) {
                    color: var(--scheme-v6);
                    padding: 0 20px 20px;
                }
            }
        }

        [contenteditable='true'] {
            border-color: var(--scheme-v1);
        }
    }
}
</style>
