<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
const props = defineProps(['image', 'sizes', 'url', 'text', 'download'])
</script>

<template>
    <article>
        <img :src="image || 'https://dummyimage.com/16:9x432/'" alt="" />

        <ul v-if="sizes">
            <span>Размер</span>
            <li v-for="item in sizes">{{ item }}</li>
        </ul>

        <p v-else>{{ text }}</p>

        <a v-if="download" :href="download || '/'">Скачать выкройку</a>

        <a v-else :href="url || '/'">Перейти к товару</a>
    </article>
</template>

<style scoped lang="scss">
article {
    // max-width: min-content;
    max-width: 431px;

    img {
        width: 100%;
    }

    ul {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 20px;
        line-height: 50px;
        margin: 40px 0 0;

        span {
            grid-row: 1 / 3;
        }

        li {
            background-color: #f5f5f5;
            padding: 0 10px;
            text-align: center;
        }
    }

    p {
        margin: 20px 0;
    }

    a {
        display: inline-block;
        color: var(--scheme-v5);
    }

    @media all and (max-width: 60em) {
        ul {
            grid-template-columns: repeat(3, 1fr);
        }
    }
}
</style>
