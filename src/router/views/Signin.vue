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
    username: '',
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
    <section>
        <Breadcrumbs :crumbs="['Регистрация', 'Вход']" />

        <h1>Вход в личный кабинет</h1>

        <p>{{ error?.non_field_errors }}</p>

        <Form-group :data="form" button="Продолжить" checkbox @prepared="send">
            <slot>
                <input v-model="form.username" type="text" placeholder="Ваш email" :class="{ error: error?.non_field_errors }" />
                <input v-model="form.password" type="text" placeholder="Пароль" :class="{ error: error?.non_field_errors }" />
            </slot>
        </Form-group>
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

    // базовый breakpoint 1152px
    @media all and (max-width: 72em) {
    }
}

.error {
    border-color: red;
}
</style>
