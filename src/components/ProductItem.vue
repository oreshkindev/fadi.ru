<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
const props = defineProps({
    // идентификатор товара
    id: {
        type: Number,
    },
    // заголовок изображения
    image: {
        type: String,
    },
    // заголовок карточки
    text: {
        type: String,
    },
    // идентификатор категории
    category: {
        type: Number,
    },
    sizes: {
        type: Array,
        default: () => [],
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
        </p>

        <ul v-if="sizes">
            Размер
            <li v-for="item in sizes">{{ item }}</li>
        </ul>

        <router-link :to="`/patterns/${category}/${id}`">Перейти к товару</router-link>
    </article>
</template>

<style lang="scss" scoped>
p {
    padding: 0;
}

ul {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 20px 0;
    place-items: center;

    li {
        background-color: var(--scheme-v6);
        padding: 6px 10px;
        text-align: center;
    }
}

a {
    border-bottom: 2px solid transparent;
    color: var(--scheme-v2);

    &:hover {
        border-color: var(--scheme-v2);
    }
}
</style>
