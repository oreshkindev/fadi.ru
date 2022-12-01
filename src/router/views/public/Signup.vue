<script>
import { useStore } from 'vuex'
import { ref } from 'vue'
//
import Checkbox from '@/components/form/Checkbox.vue'
import Bcrumb from '@/components/Bcrumb.vue'

export default {
    components: { Checkbox, Bcrumb },

    setup() {
        const store = useStore()

        const errors = ref([])
        const checkbox = ref(false)
        const succesed = ref(false)

        // uknowme@outlook.com
        // 8oA9M*0SVuE0
        const signupUserForm = ref({
            email: 'uknowme@outlook.com',
            password: '8oA9M*0SVuE0',
        })
        const passwordRetry = ref('8oA9M*0SVuE0')

        const prepareForm = () => {
            if (signupUserForm.value.password != passwordRetry.value) {
                errors.value.push('Пароли не совпадают')
            }
            if (signupUserForm.value.password.length < 8) {
                errors.value.push('Пароль слишком короткий. Придумайте по надежнее')
            }
            if (checkbox.value == false) {
                errors.value.push('Регистрация невозможна без согласия с условиямми')
            }
            setTimeout(() => {
                errors.value = []
            }, 6000)
            if (!errors.length) {
                store.dispatch('user/createUser', signupUserForm.value)

                succesed.value = true
            }
        }

        return { signupUserForm, errors, checkbox, passwordRetry, prepareForm, succesed }
    },
}
</script>

<template>
    <Bcrumb :array="['home', 'signin']" />

    <h1>Регистрация</h1>

    <section>
        <article>
            <template v-if="succesed">
                <p>
                    На адрес <b>{{ signupUserForm.email }}</b> была отправлена инструкция с активацией личного кабинета.
                </p>
            </template>
            <template v-else>
                <p v-show="errors[0]">{{ errors[0] }}</p>

                <form v-on:submit.prevent="prepareForm">
                    <label> Ваша почта </label>
                    <input v-model="signupUserForm.email" type="text" />

                    <label> Придумайте пароль </label>
                    <input v-model="signupUserForm.password" type="password" />

                    <template v-if="!!signupUserForm.password.length">
                        <label> Повторите пароль </label>
                        <input v-model="passwordRetry" type="password" />
                    </template>

                    <Checkbox v-on:checked="checkbox = !checkbox" />

                    <button type="submit" :disabled="errors[0]">Подтвердить</button>
                </form>
            </template>
        </article>
    </section>
</template>

<style lang="scss" scoped>
h1 {
    margin: auto;
    max-width: var(--scheme-width);
    padding: 0 var(--scheme-gap);
    text-align: center;
}

section {
    display: grid;
    margin: auto;
    max-width: var(--scheme-width);
    padding: var(--scheme-gap);

    article {
        display: inherit;
        place-items: center;

        p {
            max-width: 400px;
        }
    }
}

form {
    input {
        margin: 10px 0 20px;
    }
}
</style>
