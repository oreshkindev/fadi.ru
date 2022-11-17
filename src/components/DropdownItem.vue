<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue'

let visible = ref(false)

const open = () => {
    visible.value = !visible.value
}
</script>

<template>
    <article :class="{ visible: visible }">
        <span @click="open">
            <slot name="dropdown-trigger" @click="open"></slot>
        </span>

        <div v-show="visible">
            <!-- Этот слот будет обрабатывать все содержимое, которое передается в него -->
            <slot name="dropdown-content"></slot>
        </div>
    </article>
</template>

<style lang="scss" scoped>
article {
    span {
        border-bottom: 1px solid var(--scheme-v3);
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        position: relative;

        &::after {
            color: var(--scheme-v2);
            content: '\e008';
            display: inline-block;
            font-family: 'fadi';
            font-size: 24px;
            margin: 0 20px 0 20px;
            transform: rotate(90deg);
            position: absolute;
            right: 0;
            top: 25%;
        }
    }

    div {
        padding: var(--scheme-gap) 0;
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
