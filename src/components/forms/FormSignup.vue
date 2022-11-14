<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import NamedButton from '@/components/ui/NamedButton.vue'
</script>

<template>
    <form @submit.prevent="">
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Пароль" />
        <input type="text" placeholder="Повторите пароль" />

        <NamedButton text="Продолжить" />
    </form>
</template>

<style lang="scss" scoped>
form {
    display: grid;
    gap: 20px;
    width: 100%;
    max-width: 400px;
    text-align: center;

    a {
        color: var(--scheme-v5);
        justify-self: flex-start;
    }

    input {
        border: 1px solid var(--scheme-v3);
        border-radius: 50px;
        padding: 6px 40px;
        text-align: center;
    }

    button {
        background-color: var(--scheme-v2);
        color: var(--scheme-v4);
        padding: 4px 0;
        margin: 40px 0 0;
    }
}
</style>
