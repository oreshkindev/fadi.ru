<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

const props = defineProps({
    // иконка
    icon: {
        type: String,
    },
    // заголовок кнопки
    text: {
        type: String,
    },
})
</script>

<template>
    <button>
        {{ text || `Без заголовка` }}

        <i v-if="icon" :class="icon"></i>
    </button>
</template>

<style lang="scss" scoped>
button {
    border: 1px solid;
    border-radius: 50px;
    margin: 20px 0;
    padding: 4px 40px;
    position: relative;
    text-transform: uppercase;
    white-space: nowrap;

    i {
        font-size: 18px;
        margin: 0 0 0 16px;
        vertical-align: text-top;
    }

    // базовый breakpoint 1152px
    @media all and (max-width: 72em) {
    }
}
</style>
