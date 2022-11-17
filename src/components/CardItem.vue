<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Image from '@/components/image.vue'

const props = defineProps({
    // имя файла без расширения
    image: {
        type: String,
    },
    // выбранный размер
    size: {
        type: Number,
    },
    // рост
    height: {
        type: String,
    },
    // стоимость макета
    price: {
        type: Number,
    },
    // заголовок
    text: {
        type: String,
    },
})
</script>

<template>
    <article>
        <Image :text="image" />

        <h4>{{ text || 'Без заголовока' }}</h4>

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
    gap: 10px var(--scheme-gap);
    padding: var(--scheme-gap) 0 0;

    picture {
        grid-row: 1 / 4;
        max-width: 178px;
    }

    h4,
    span {
        font-size: 32px;
        padding: 0;
    }

    ul {
        display: flex;
        gap: var(--scheme-gap);
        color: var(--scheme-v2);

        li {
            white-space: nowrap;
        }
    }

    // @media all and (max-width: 74em) {
    //     grid-template-columns: 128px auto max-content;
    //     gap: 20px;
    // }

    // базовый breakpoint 1152px
    @media all and (max-width: 72em) {
        grid-template-columns: 128px auto max-content;
    }

    // последний breakpoint для Samsung S10 360x760px
    @media all and (max-width: 42em) {
        grid-template-columns: 1fr;

        picture {
            // grid-row: 1 / 4;
            max-width: 100%;
        }
    }
}
</style>
