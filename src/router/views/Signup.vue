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
    <section>
        <Breadcrumbs :crumbs="['Регистрация', 'Вход']" />

        <h1>Регистрация личного кабинета</h1>

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
section {
    display: grid;
    gap: var(--scheme-gap);

    h1 {
        font-size: var(--scheme-s);
        font-weight: 400;
        grid-column: 1 / 3;
        // text-transform: uppercase;
        margin: 100px auto 0;
    }

    p {
        grid-column: 1 / 3;
        margin: auto;
    }

    :deep(form) {
        grid-column: 1 / 3;
        margin: 0 auto 100px;
    }

    article {
        border: 1px solid var(--scheme-v3);
        border-radius: 25px;
        grid-column: 1 / 3;
        margin: 0 auto 100px;
        padding: var(--scheme-gap);
        text-align: center;
    }

    // базовый breakpoint 1152px
    @media all and (max-width: 72em) {
    }
}

.error {
    border-color: red;
}
</style>
