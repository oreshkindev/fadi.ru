<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// components/ui
import Breadcrumbs from '@/components/ui/Breadcrumbs.vue'
import Checkbox from '@/components/ui/Checkbox.vue'
// components/forms
import FormGroup from '@/components/forms/FormGroup.vue'
//
import { useStore } from 'vuex'
import { ref, computed } from 'vue'

// Определяем наше хранилище
const store = useStore()

// Подготавливаем форму
const form = ref({
    email: '',
    password: '',
    confirm: '',
})

const checked = ref(false)

// выводим ошибку
const error = computed(() => store.getters['user/error'])

const succesed = computed(() => store.getters['user/data'])

// проверяем пояля и отправляем форму
const send = () => {
    if (form.value.confirm === form.value.password) {
        store.dispatch('user/create', form.value)
        return
    }
}
</script>

<template>
    <Breadcrumbs :array="['home', 'signin', 'signup']" />

    <h1>Регистрация личного кабинета</h1>
    <section>
        <p v-if="error?.email">{{ error.email }}</p>

        <Form-group :data="form" button="Продолжить" :checkbox="checked" @prepared="send" v-if="succesed.length == 0">
            <slot>
                <input v-model="form.email" type="text" placeholder="Ваш email" required :class="{ error: error?.email }" />
                <input v-model="form.password" type="password" placeholder="Пароль" required />
                <input v-model="form.confirm" type="password" placeholder="Повторите пароль" required :class="{ error: form.confirm !== form.password }" />

                <Checkbox text="Я согласен с политикой конфиденциальности и даю согласие на обработку моих персональных данных" @checked="checked = !checked" />
            </slot>
        </Form-group>

        <article v-else>
            <h5>Проверьте вашу почту</h5>
            <p>{{ succesed.email }}</p>
            <p>На ваш адрес эл.почты отправлено письмо с ссылкой активации вашего аккаунта.</p>
        </article>
    </section>
</template>

<style lang="scss" scoped>
nav,
h1 {
    max-width: var(--scheme-max-width);
    padding: var(--scheme-gap);
    width: 100%;
}

h1 {
    font-size: 38px;
    font-weight: 300;
    text-align: center;
}

p {
    text-align: center;
}

section {
    display: grid;
    // gap: var(--scheme-gap);
    width: 100%;
}

form {
    margin: 0 auto;
}

article {
    background-color: rgba(214, 152, 40, 0.08);
    border-radius: 25px;
    padding: var(--scheme-gap);
    margin: auto;
    text-align: center;
}

.error {
    border-color: #d21b1b;
    color: #d21b1b;
}

// базовый breakpoint 1152px
@media all and (max-width: 72em) {
}
</style>
