<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
const props = defineProps(['image', 'size', 'height', 'price', 'text'])
</script>

<template>
    <article>
        <img :src="image || 'https://dummyimage.com/431x552/'" alt="" />

        <h4>{{ text || 'Заголовок' }}</h4>

        <span>{{ price || 0 }} <small>₽</small></span>

        <ul>
            <li>Размер {{ size }}</li>
            <li>Рост {{ height }}</li>
        </ul>
    </article>
</template>

<style scoped lang="scss">
article {
    border-top: 1px solid var(--scheme-v3);
    display: grid;
    grid-template-columns: 178px 1fr max-content;
    gap: 10px 80px;
    padding: 40px 0 0;

    img {
        grid-row: 1 / 4;
        max-width: 178px;
        width: 100%;
    }

    h4,
    span {
        font-size: 32px;
    }

    ul {
        display: grid;
        grid-template-columns: repeat(3, auto);
        gap: 40px;
        color: var(--scheme-v2);

        li {
            white-space: nowrap;
        }
    }

    @media all and (max-width: 78em) {
        gap: 40px;
    }

    @media all and (max-width: 68em) {
        grid-template-columns: 128px auto max-content;
        gap: 20px;
    }

    @media all and (max-width: 60em) {
        grid-template-columns: 1fr;

        img {
            max-width: 100%;
        }

        ul {
            order: -1;
        }
    }
}
</style>
