<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// components/ui
import Breadcrumbs from '@/components/ui/Breadcrumbs.vue'
// components/forms
import FormGroup from '@/components/forms/FormGroup.vue'
//
import { useStore } from 'vuex'
import { ref, computed } from 'vue'

// Определяем наше хранилище
const store = useStore()

// Подготавливаем форму
const form = ref({
    username: 'uknowme@mail.ru',
    password: '',
})

// выводим ошибку
const error = computed(() => store.getters['auth/error'])

// отправляем форму
const send = () => {
    store.dispatch('auth/login', form.value)
}
</script>

<template>
    <Breadcrumbs :array="['home', 'signin', 'signup']" />

    <h1>Вход в личный кабинет</h1>
    <section>
        <p>{{ error?.non_field_errors }}</p>

        <Form-group :data="form" button="Продолжить" checkbox @prepared="send">
            <slot>
                <input v-model="form.username" type="text" placeholder="Ваш email" :class="{ error: error?.non_field_errors }" />
                <input v-model="form.password" type="password" placeholder="Пароль" :class="{ error: error?.non_field_errors }" />
            </slot>
        </Form-group>
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

.error {
    border-color: #d21b1b;
    color: #d21b1b;
}

// базовый breakpoint 1152px
@media all and (max-width: 72em) {
}
</style>
