<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Image from '@/components/ui/Image.vue'

const props = defineProps({
    // заголовок изображения
    images: {
        type: String,
    },
    // заголовок карточки
    name: {
        type: String,
    },
})
</script>

<template>
    <article>
        <Image :text="images" />

        <p>
            {{ name }}
            <a href="/">Смотреть выкройку</a>
        </p>
    </article>
</template>

<style lang="scss" scoped>
a {
    border-bottom: 2px solid transparent;
    color: var(--scheme-v2);
    display: block;
    margin: 10px 0 0;
    width: max-content;

    &:hover {
        border-color: var(--scheme-v2);
    }
}
</style>
