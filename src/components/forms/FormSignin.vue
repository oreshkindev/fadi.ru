<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import NamedButton from '@/components/ui/NamedButton.vue'

import { ref } from 'vue'

const items = [
    {
        title: 'Почта',
    },
    {
        title: 'Телефон',
    },
]

const selectedItem = ref(0)

let isActive = false

const setActive = (i) => (selectedItem.value = i)

items.forEach((item, index) => {
    return (isActive = item == items[index])
})
</script>

<template>
    <ul>
        <li v-for="(item, i) in items" :key="i" @click="setActive(i)" :class="{ active: i == selectedItem }">
            {{ item.title }}
        </li>
    </ul>

    <form>
        <input v-if="!selectedItem" type="text" placeholder="Логин или email" />
        <input v-else type="tel" placeholder="Телефон" />

        <a href="/">Непомню</a>

        <NamedButton text="Подтвердить" />
    </form>
</template>

<style lang="scss" scoped>
ul {
    border: 1px solid var(--scheme-v3);
    border-radius: 50px;
    box-shadow: 0px 10px 10px 0px #e7e7e7;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 10px;
    width: 100%;
    max-width: 400px;
    margin: auto;

    li {
        border-radius: 50px;
        cursor: pointer;
        padding: 10px;
        text-align: center;

        &:hover {
            background-color: #fafafa;
        }

        &.active {
            background-color: var(--scheme-v3);
        }
    }
}

form {
    display: grid;
    gap: 40px;
    width: 100%;
    max-width: 400px;
    text-align: center;

    a {
        color: var(--scheme-v5);
        justify-self: flex-start;
    }

    input {
        border: 1px solid var(--scheme-v3);
        border-radius: 50px;
        padding: 6px 40px;
        text-align: center;
    }

    button {
        background-color: var(--scheme-v2);
        color: var(--scheme-v4);
        padding: 4px 0;
    }
}
</style>
