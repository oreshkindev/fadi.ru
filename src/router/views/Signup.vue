<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// components/ui
import Breadcrumbs from '@/components/ui/Breadcrumbs.vue'
import Checkbox from '@/components/ui/Checkbox.vue'
// components/forms
import FormGroup from '@/components/forms/FormGroup.vue'
//
import { ref } from 'vue'

const form = ref({
    email: '',
    password: '',
    confirm: '',
})

const checked = ref(false)

const send = (r) => {
    console.log(r)
}
</script>

<template>
    <section>
        <Breadcrumbs :crumbs="['Регистрация', 'Вход']" />

        <h1>Регистрация личного кабинета</h1>

        <Form-group :data="form" button="Продолжить" :checkbox="checked" @prepared="send">
            <slot>
                <input v-model="form.email" type="text" placeholder="Ваше email" required />
                <input v-model="form.password" type="text" placeholder="Пароль" required />
                <input v-model="form.confirm" type="text" placeholder="Повторите пароль" required />

                <Checkbox text="Я согласен с политикой конфиденциальности и даю согласие на обработку моих персональных данных" @checked="checked = !checked" />
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

    :deep(form) {
        grid-column: 1 / 3;
        margin: 0 auto 100px;
    }

    // базовый breakpoint 1152px
    @media all and (max-width: 72em) {
    }
}
</style>
