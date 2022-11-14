<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue'

let visible = ref(false)

const open = () => {
    visible.value = !visible.value
}
</script>

<template>
    <ol :class="{ visible: visible }">
        <span @click="open">
            <slot name="accordion-trigger"></slot>
        </span>

        <div v-show="visible">
            <!-- Этот слот будет обрабатывать все содержимое, которое передается в него -->
            <slot name="accordion-content"></slot>
        </div>
    </ol>
</template>

<style lang="scss" scoped>
ol {
    span {
        cursor: pointer;

        &::after {
            color: var(--scheme-v2);
            content: '\e008';
            display: inline-block;
            font-family: 'fadi';
            font-size: 24px;
            margin: 0 0 0 20px;
            transform: rotate(90deg);
        }
    }

    &.visible {
        span {
            &::after {
                transform: rotate(270deg);
            }
        }
    }
}
</style>
