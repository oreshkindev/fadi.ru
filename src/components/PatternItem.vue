<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
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
        <!-- не забываем сжать изображения перед подключением https://avif.io -->
        <!-- смотрим как https://avif.io/blog/tutorials/html/ -->
        <!-- здесь сжимаем все остальное кроме .avif https://squoosh.app/ -->
        <picture>
            <source :srcset="`src/assets/images/${image}.avif`" type="image/avif" />
            <source :srcset="`src/assets/images/${image}.webp`" type="image/webp" />
            <img :src="`src/assets/images/${image}.jpg`" decoding="async" :alt="text" loading="lazy" />
        </picture>

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
