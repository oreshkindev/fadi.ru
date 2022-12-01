<script>
import { ref } from 'vue'

export default {
    emits: ['search'],
    props: {
        title: {
            type: String,
            default: 'Найти что-то..',
        },
    },
    setup(props) {
        const searchQuery = ref('')

        return {
            searchQuery,
        }
    },
}
</script>

<template>
    <form>
        <input type="search" :placeholder="title" v-model="searchQuery" @keyup="$emit('search', searchQuery)" />
    </form>

    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat molestias architecto perferendis magni quia ullam optio dignissimos accusantium,
        voluptas, possimus quod laboriosam atque, blanditiis deserunt reiciendis amet nihil vel ut!
    </p>
</template>

<style lang="scss" scoped>
p {
    margin: var(--scheme-gap) auto;
    max-width: var(--scheme-width);
    padding: 0 var(--scheme-gap);
}

form {
    box-sizing: border-box;
    margin: auto;
    max-width: calc(var(--scheme-width) + (var(--scheme-gap) * 2));
    padding: 0 var(--scheme-gap);
    position: relative;
    width: 100%;

    &::after {
        background-color: var(--scheme-v3);
        border-radius: 50px;
        color: var(--scheme-v2);
        content: '\e003';
        font-family: 'fadi';
        font-size: 18px;
        height: 25px;
        letter-spacing: -2px;
        line-height: 1.3;
        padding: 9px;
        position: absolute;
        right: calc(var(--scheme-gap) + 8px);
        text-align: center;
        top: 50%;
        transform: translate(0%, -50%);
        width: 25px;
    }

    input {
        border: 1.5px solid var(--scheme-v6);
        border-radius: 50px;
        max-width: 100%;
        padding: 14px 80px 14px 40px;
    }

    i {
        background-color: var(--scheme-v2);
        border-radius: 50px;
        color: var(--scheme-v4);
        padding: 13px;
        position: absolute;
        right: 47px;
        top: 50%;
        transform: translate(0, -50%);
    }
}
</style>
