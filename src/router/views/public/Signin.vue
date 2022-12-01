<script>
import { useStore } from 'vuex'
import { ref } from 'vue'
//
import Bcrumb from '@/components/Bcrumb.vue'

export default {
    components: { Bcrumb },

    setup() {
        const store = useStore()

        const errors = ref([])

        // uknowme@outlook.com
        // 8oA9M*0SVuE0
        const signinUserForm = ref({
            username: 'uknowme@outlook.com',
            password: '8oA9M*0SVuE0',
        })

        const prepareForm = () => {
            if (signinUserForm.value.password.length < 8) {
                errors.value.push('Пароль слишком короткий. Вы что-то упустили')
            }
            setTimeout(() => {
                errors.value = []
            }, 6000)
            store.dispatch('auth/authUser', signinUserForm.value)
        }

        return { signinUserForm, errors, prepareForm }
    },
}
</script>

<template>
    <Bcrumb :array="['home', 'signup']" />

    <h1>Войти в ЛК</h1>

    <section>
        <article>
            <p v-show="errors[0]">{{ errors[0] }}</p>

            <form v-on:submit.prevent="prepareForm">
                <label> Ваша почта </label>
                <input v-model="signinUserForm.username" type="text" />

                <label> Ваш пароль </label>
                <input v-model="signinUserForm.password" type="password" />

                <button type="submit" :disabled="errors[0]">Подтвердить</button>
            </form>
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
