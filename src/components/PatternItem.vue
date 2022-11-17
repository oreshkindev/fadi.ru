<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Image from '@/components/image.vue'

const props = defineProps({
    // заголовок изображения
    image: {
        type: String,
    },
    // заголовок карточки
    text: {
        type: String,
    },
    // ссылка скачивание файла
    doc: {
        type: String,
    },
})
</script>

<template>
    <article>
        <Image :text="image" />

        <p>
            {{ text }}
            <a :href="doc" download>Скачать выкройку</a>
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
