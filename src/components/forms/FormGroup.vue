<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { computed } from 'vue'

const emit = defineEmits(['prepared'])

const props = defineProps({
    // схема
    data: {
        type: Object,
        default: () => ({}),
    },
    // заголовок кнопки
    button: {
        type: String,
    },
    // заголовок кнопки
    checkbox: {
        type: Boolean,
    },
})

// проверяем нет ли пустой пары
const checkKeys = computed(() => {
    if (!props.checkbox) {
        return
    }
    for (let key in props.data) {
        if (props.data[key] == '') {
            return false
        }
    }
    return true
})

// возвращаем подготовленную схему
const commit = () => {
    emit('prepared', props.data)
}
</script>

<template>
    <form @submit.prevent="commit">
        <slot></slot>

        <button type="submit" v-text="button || `Без заголовка`" :disabled="!checkKeys"></button>
    </form>
</template>

<style lang="scss" scoped>
form {
    display: grid;
    gap: 20px;
    max-width: 400px;
    input {
        border: 1px solid var(--scheme-v2);
        border-radius: 10px;
    }

    button {
        border: 1px solid;
        border-radius: 50px;
        color: var(--scheme-v2);
        margin: 20px 0;
        padding: 4px 60px;
        text-transform: uppercase;
        white-space: nowrap;

        &:not([disabled]):hover {
            background-color: var(--scheme-v2);
            color: var(--scheme-v4);
        }

        &:disabled {
            color: var(--scheme-v3);
            cursor: default;
        }
    }
}
</style>
