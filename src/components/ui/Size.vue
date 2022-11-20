<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue'

const emit = defineEmits(['size'])
// получаем размеры
const props = defineProps({
    array: {
        type: Array,
        default: () => [],
    },
})

// получаем индекс размера
const i = ref(0)
// переключалка
const visible = ref(false)

const prepare = (index) => {
    i.value = index
    // возвращаем индекс
    emit('size', index)
}
</script>

<template>
    <ul :class="{ visible: visible }">
        Размер
        <li v-for="(item, index) in array" :key="index" :class="{ active: i == index }" @click="prepare(index)">{{ item }}</li>

        <i class="icon-chevron" @click="visible = !visible"></i>
    </ul>
</template>

<style lang="scss" scoped>
ul {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 40px 0;
    place-items: center;

    li {
        background-color: var(--scheme-v6);
        cursor: pointer;
        display: none;
        padding: 4px 0;
        min-width: 35px;
        text-align: center;

        &:nth-child(-n + 3) {
            display: inline-block;
        }
        &.active {
            background-color: var(--scheme-v2);
            color: var(--scheme-v4);
        }
    }

    i {
        background-color: var(--scheme-v2);
        color: var(--scheme-v4);

        cursor: pointer;

        font-size: 24px;
        padding: 3.2px;
        transform: rotate(180deg);
    }

    &.visible {
        li {
            display: inline-block;
        }

        i {
            transform: rotate(0deg);
        }
    }
}
</style>
