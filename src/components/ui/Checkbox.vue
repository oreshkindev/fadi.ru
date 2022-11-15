<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue'

const emit = defineEmits(['checked'])

const props = defineProps({
    text: {
        type: String,
    },
})

const check = ref(false)

// возвращаем подготовленную схему
const checked = () => {
    check.value = !check.value

    emit('checked')
}
</script>

<template>
    <fieldset>
        <input type="checkbox" @click="checked" />
        <svg width="32" height="32" viewBox="-6 -6 39 39" aria-hidden="true" focusable="false">
            <!-- Галка-->
            <polyline points="1,14 12,23 27,5" stroke-width="3"></polyline>
        </svg>

        <span v-if="text" v-text="text"></span>
    </fieldset>
</template>

<style lang="scss" scoped>
fieldset {
    display: grid;
    gap: 20px;

    input[type='checkbox'] {
        cursor: pointer;
        height: 1.4em;
        opacity: 0;
        position: absolute;
        width: 1.4em;
    }

    input[type='checkbox']:not(:checked) + svg {
        polyline {
            stroke: transparent;
        }
    }

    input[type='checkbox']:focus:not(:focus-visible) + svg {
        outline: none;
    }

    span {
        color: var(--scheme-v3);
        font-size: 14px;
        grid-column: 2 / 3;
        margin: -4px 0 0;
    }

    svg {
        border: 1.6px solid var(--scheme-v3);
        border-radius: 6px;
        height: 1.4em;
        width: 1.4em;

        polyline {
            fill: none;
            stroke: var(--scheme-v2);
        }

        @media screen and (-ms-high-contrast: active) {
            rect {
                stroke: windowText;
            }
        }
    }

    @media screen and (-ms-high-contrast: active) {
        input[type='checkbox']:checked ~ svg {
            rect {
                fill: windowText;
            }

            polyline {
                stroke: highlight;
            }
        }
    }
}
</style>
