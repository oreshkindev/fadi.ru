<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
const props = defineProps(['size'])
</script>

<template>
    <i></i>
</template>

<style scoped lang="scss">
i {
    // динамическое изменение рамеров иконки путем переопределения глобальной переменной
    // с последующей передачей в нее параметра или присваиванием значения по умолчанию.
    --size: v-bind(size || `24px`);

    background-color: var(--scheme-v2);
    border-radius: 100%;
    overflow: hidden;
    padding: var(--size);
    position: relative;

    &::before {
        font-size: calc(var(--size) * 1.5);
        line-height: calc(var(--size) / 1.5);
        position: absolute;
        transform: translateX(-50%);
    }
}
</style>
