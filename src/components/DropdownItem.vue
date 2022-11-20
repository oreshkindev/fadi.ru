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
    width: 100%;

    span {
        border-bottom: 1px solid var(--scheme-v3);
        cursor: pointer;
        display: flex;
        font-size: 24px;
        justify-content: space-between;
        padding: 20px 60px 20px 0;
        position: relative;

        &::after {
            background-color: var(--scheme-v2);
            color: var(--scheme-v4);
            content: '\e007';
            font-family: fadi;
            font-size: 20px;
            transform: rotate(90deg);
            position: absolute;
            right: 0;
            bottom: 26px;
            padding: 6px;
            line-height: 1;
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
