<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
const props = defineProps(['icon', 'text', 'size'])
</script>

<template>
    <button>
        {{ text || 'Lorem ipsum' }}

        <i :class="icon" v-if="icon"></i>
    </button>
</template>

<style scoped lang="scss">
button {
    // динамическое изменение рамеров иконки путем переопределения глобальной переменной
    // с последующей передачей в нее параметра или присваиванием значения по умолчанию.
    --size: v-bind(size || `22px`);

    border-radius: 50px;
    padding: 0 40px;

    i {
        font-size: var(--size);
        margin: 0 0 0 16px;
        vertical-align: text-top;
    }

    @media all and (max-width: 60em) {
        font-size: var(--scheme-s);
        // padding: 0 30px;

        i {
            display: none;
        }
    }
}
</style>
