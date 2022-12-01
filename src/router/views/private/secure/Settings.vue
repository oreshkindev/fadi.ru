<script>
import { useStore } from 'vuex'
import { ref } from 'vue'

export default {
    setup() {
        // Определяем наше хранилище
        const store = useStore()

        const editable = ref(false)

        const form = ref({
            email: 'konstant@mail.ru',
            phone: '+79026682862',
        })

        return { form, editable }
    },
}
</script>

<template>
    <nav>
        <router-link to="/secure/settings">Общие</router-link>
    </nav>

    <h1>Настройки</h1>

    <section>
        <div>
            <picture>
                <img src="@/assets/images/Rectangle452.jpg" alt="" />
            </picture>

            <ul>
                <li>Электронная почта <i class="icon-pen" v-on:click="editable = !editable"></i></li>

                <input v-model="form.email" type="text" :disabled="!editable" />
            </ul>

            <ul>
                <li>Номер телефона <i class="icon-pen" v-on:click="editable = !editable"></i></li>
                <input v-model="form.phone" type="text" :disabled="!editable" />
            </ul>
        </div>

        <button v-if="editable">Изменить</button>
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
        display: grid;
        grid-template-columns: 150px repeat(2, 1fr);
        border: 1px solid #ccc;
        padding: var(--scheme-gap);
        border-radius: 10px;
        gap: var(--scheme-gap);

        picture {
            border-radius: 150px;
            height: 150px;
            width: 150px;
            overflow: hidden;
        }

        ul {
            display: inherit;
            place-content: center;

            li {
                padding: 10px 20px;
            }

            i {
                cursor: pointer;
                font-size: 20px;
                line-height: 1.3;
                margin: 0px 0 0px 20px;
                vertical-align: text-bottom;

                &:hover {
                    color: var(--scheme-v3);
                }
            }

            input {
                &:disabled {
                    border-color: transparent;
                }
            }
        }
    }

    button {
        margin: var(--scheme-gap) 0;
    }
}

// базовый breakpoint 1152px
@media all and (max-width: 56em) {
    section {
        div {
            grid-template-columns: 1fr;
            margin: 0 0 var(--scheme-gap);
            place-items: center;
        }
    }
}
</style>
