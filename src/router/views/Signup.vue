<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Backward from '@/components/ui/Backward.vue'
import FormSignup from '@/components/forms/FormSignup.vue'
</script>

<template>
    <section>
        <Backward :crumbs="['Регистрация', 'Вход']" />

        <h1>Регистрация личног кабинета</h1>

        <FormSignup />
    </section>
</template>

<style lang="scss" scoped>
section {
    display: grid;
    gap: var(--scheme-gap);

    h1 {
        font-size: 18px;
        font-weight: 400;
        grid-column: 1 / 3;
        // text-transform: uppercase;
        margin: 100px auto 0;
    }

    :deep(form) {
        grid-column: 1 / 3;
        margin: 0 auto 100px;
    }

    @media all and (max-width: 60em) {
    }
}
</style>
