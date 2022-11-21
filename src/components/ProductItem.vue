<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Image from '@/components/image.vue'

const props = defineProps({
    // объект товара
    data: {
        type: Object,
        default: () => {},
    },
    // TODO: получать из объекта
    image: {
        type: String,
    },
})
</script>

<template>
    <article>
        <Image :text="image" />

        <p>
            {{ data.product.name }}
        </p>

        <ul>
            Размер
            <li v-for="item in data.size">{{ item }}</li>
        </ul>

        <router-link :to="`/patterns/${data.product.sub_category[0].category.id}/${data.product.name}`">Перейти к товару</router-link>
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
        padding: 4px 0;
        min-width: 35px;
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
