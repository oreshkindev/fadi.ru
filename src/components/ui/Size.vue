<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue'

const props = defineProps(['array'])

const hidden = ref(false)
</script>

<template>
    <ul :class="{ visible: hidden }">
        Размер
        <li v-for="item in array" :key="item">{{ item }}</li>
        <i class="icon-chevron" @click="hidden = !hidden"></i>
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
        background-color: var(--scheme-v3);
        display: none;
        padding: 2px 6px;

        &:nth-child(-n + 3) {
            display: inherit;
        }
    }

    i {
        background-color: var(--scheme-v2);
        color: var(--scheme-v4);

        cursor: pointer;

        font-size: 24px;
        padding: 3.2px;
        transform: rotate(90deg);
    }

    &.visible {
        li {
            display: inherit;
        }

        i {
            transform: rotate(180deg);
        }
    }
}
</style>
