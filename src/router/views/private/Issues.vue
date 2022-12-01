<script>
import { useStore } from 'vuex'
import { ref, computed } from 'vue'
//
import { prettyDate } from '@/common/helper/processStrings'

export default {
    setup() {
        const store = useStore()

        const person = computed(() => store.getters['auth/data'])
        const support = computed(() => store.getters['support/data'])

        const issues = [, 'Вопрос менеджеру', 'Вопрос по моим заказам', 'Иное']

        const supportForm = ref({
            email: person.value.email,
            text: '',
            type_ticket: 1,
            user: person.value.id,
        })

        const date = (created_at) => prettyDate(created_at)

        const prepareForm = () => {
            store.dispatch('support/createTicket', supportForm.value).then((supportForm.value.text = ''))
        }

        store.dispatch('support/getTicket')

        return { prepareForm, supportForm, issues, support, date }
    },
}
</script>

<template>
    <h1>Обращения</h1>

    <section>
        <h4>Форма обращения</h4>
        <h4>Мои обращения</h4>
        <aside>
            <p>Выберете причину обращения и опишите проблему которая возникла с заказом</p>

            <form @submit.prevent="prepareForm">
                <label>Причина обращения</label>

                <ul>
                    <li
                        v-for="(issue, index) in issues"
                        :key="index"
                        :class="{ active: index == supportForm.type_ticket }"
                        @click="supportForm.type_ticket = index"
                    >
                        {{ issue }}
                    </li>
                </ul>

                <label
                    >Опишите проблему <span :class="{ error: supportForm.text.length > 120 }">{{ supportForm.text.length }} / 120</span></label
                >
                <textarea v-model="supportForm.text" rows="6" placeholder="Не более 120 символов.."></textarea>

                <button type="submit" :disabled="supportForm.text.length > 120">Отправить</button>
            </form>
        </aside>

        <div>
            <ul>
                <li>Причина</li>
                <li>Дата обращения</li>
                <li>Ответ</li>
            </ul>
            <ul v-for="item in support" :key="item.id">
                <li>{{ issues[item.type_ticket] }}</li>
                <li>{{ date(item.created_at) }}</li>
                <li>Выслан на почту</li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss" scoped>
h1 {
    margin: auto auto var(--scheme-gap);
    max-width: var(--scheme-width);
    padding: 0 var(--scheme-gap);
}

section {
    display: grid;
    gap: var(--scheme-gap);
    grid-template-columns: minmax(400px, auto) 1fr;
    margin: auto;
    max-width: var(--scheme-width);
    padding: var(--scheme-gap);

    aside {
        form {
            display: grid;

            input {
                border: 1px solid var(--scheme-v6);
                max-width: 100%;
            }

            label {
                display: flex;
                span {
                    margin: 0 0 0 auto;
                }
            }

            ul {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                place-content: baseline;

                li {
                    background-color: var(--scheme-v5);
                    border-radius: 50px;
                    cursor: pointer;
                    padding: 10px 20px;
                    width: fit-content;

                    &:first-child {
                        display: none;
                    }

                    &.active {
                        background-color: var(--scheme-v6);
                    }
                }
            }

            textarea {
                border: 1px solid var(--scheme-v6);
                border-radius: 10px;
                font-family: inherit;
                outline: none;
                padding: 20px;
            }

            button {
                margin-right: auto;
                margin-top: var(--scheme-gap);
            }
        }
    }

    .error {
        color: red;
    }

    div {
        border: 1px solid #ccc;
        border-radius: 10px;
        display: grid;
        gap: 10px;
        padding: var(--scheme-gap);
        place-content: baseline;

        ul {
            border: 1px solid var(--scheme-v6);
            border-radius: 10px;
            display: inherit;
            gap: var(--scheme-gap);
            grid-template-columns: minmax(200px, 1fr) minmax(140px, 1fr) minmax(200px, 1fr);
            margin: 0;
            overflow: auto;
            padding: 15px 20px;
            width: 100%;

            &:first-child {
                border: none;
                padding: 0 20px;
            }
        }
    }
}

// базовый breakpoint 1152px
@media all and (max-width: 72em) {
    section {
        grid-template-columns: 1fr;

        h4 {
            &:first-child {
                order: 1;
            }
        }

        aside {
            order: 2;
        }

        div {
            border: none;
            margin: 0 0 var(--scheme-gap);
            padding: 0;
        }
    }
}
</style>
