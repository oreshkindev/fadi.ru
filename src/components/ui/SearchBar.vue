<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
    <form>
        <input type="text" placeholder="Найти выкройку.." />
        <i class="icon-search"></i>
    </form>
</template>

<style scoped lang="scss">
form {
    position: relative;
    input {
        border: 1.5px solid var(--scheme-v1);
        border-radius: 50px;
        padding: 2px 60px 2px 40px;
        width: 100%;
    }

    i {
        background-color: var(--scheme-v2);
        border-radius: 50px;
        color: var(--scheme-v4);
        padding: 13px;
        position: absolute;
        right: 7px;
        top: 50%;
        transform: translate(0, -50%);
    }
}
</style>
