<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import ButtonContext from '@/components/ui/ButtonContext.vue'

const props = defineProps({
    // заголовок изображения
    array: {
        type: Array,
        default: () => [],
    },
})

const price = () => {
    return props.array.reduce((acc, curr) => {
        return acc + curr.product.price
    }, 0)
}
</script>

<template>
    <ul>
        <li>Итого</li>
        <li>{{ price() }} р</li>
        <li>Товары, {{ array.length }}шт</li>
        <li>{{ price() }} р</li>
        <li>Скидка 0%</li>

        <p>
            Оплата
            <span>Картой</span>
        </p>
        <ButtonContext icon="icon-arrow-top-right" text="Оплатить заказ" size="20px" />
    </ul>
</template>

<style lang="scss" scoped>
ul {
    border: 1px solid var(--scheme-v3);
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr auto;
    padding: var(--scheme-gap);

    li {
        font-size: 20px;
        font-weight: 700;
        white-space: nowrap;

        &:nth-child(n + 3) {
            font-size: var(--scheme-s);
            font-weight: 400;
        }
    }

    p {
        grid-column: 1 / 3;

        span {
            color: var(--scheme-v2);
            margin: 0 0 0 10px;
        }
    }

    // базовый breakpoint 1152px
    @media all and (max-width: 72em) {
        grid-column: 1 / 3;
    }
}

button {
    background-color: var(--scheme-v2);
    color: var(--scheme-v4);
    grid-column: 1 / 3;
    margin: var(--scheme-gap) auto;
}
</style>
