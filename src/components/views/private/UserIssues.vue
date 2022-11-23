<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Checkbox from '@/components/ui/Checkbox.vue'
// components/forms
import FormGroup from '@/components/forms/FormGroup.vue'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { prettyDate } from '@/common/helper/processStrings'

const id = computed(() => store.getters['auth/id'])

const issues = computed(() => store.getters['support/data'])
// Определяем наше хранилище
const store = useStore()
let form = ref({
    email: '',
    text: '',
})

const checked = ref(false)
store.dispatch('support/get')
const send = () => {
    store.dispatch('auth/me').then(store.dispatch('support/create', { ...form.value, formtype_ticket: '1', user: id.value }))
}
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

            <Form-group :data="form" button="Отправить заявку" :checkbox="checked" @prepared="send">
                <slot>
                    <input v-model="form.email" type="text" placeholder="Укажите причину обращения" required />
                    <textarea v-model="form.text" id="" cols="30" rows="10"></textarea>

                    <Checkbox text="Я согласен с политикой конфиденциальности и даю согласие на обработку моих персональных данных" @checked="checked = !checked" />
                </slot>
            </Form-group>
        </div>

        <aside>
            <h5>Мои обращения</h5>

            <div>
                <ul>
                    <li>Дата обращения</li>
                    <li>Причина</li>
                </ul>

                <ul v-for="item in issues">
                    <li>{{ prettyDate(item.created_at) }}</li>
                    <li>{{ item.text }}</li>
                </ul>
            </div>
        </aside>
    </section>
</template>

<style lang="scss" scoped>
section {
    display: grid;
    gap: 40px;
    grid-template-columns: auto 1fr;
    padding: var(--scheme-gap);
    width: 100%;
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
    font-size: 24px;
    margin: 0 0 40px;
}

form {
    display: grid;

    input {
        grid-column: 1 / 3;
    }

    textarea {
        border: 1px solid var(--scheme-v2);
        border-radius: 10px;

        font: inherit;

        grid-column: 1 / 3;
        outline: none;
        padding: 20px 40px;
    }

    fieldset {
        grid-column: 1 / 3;
        margin: 0;
        max-width: 600px;
    }
}

aside {
    div {
        border: 1px solid var(--scheme-v3);
        border-radius: 25px;
        padding: 20px var(--scheme-gap) var(--scheme-gap);

        ul {
            border: 1px solid var(--scheme-v3);
            border-radius: 10px;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            margin: 20px 0 0;
            padding: 10px 20px;

            &:first-child {
                border: none;
            }
        }
    }
}
</style>
