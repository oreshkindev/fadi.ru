<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import NamedButton from '@/components/ui/NamedButton.vue'
</script>

<template>
    <ul>
        <li>Итого</li>
        <li>300 р</li>
        <li>Товары, 2шт</li>
        <li>300 р</li>
        <li>Скидка 0%</li>

        <p>
            Оплата
            <span>Картой</span>
        </p>
        <NamedButton icon="icon-arrow-top-right" text="Оплатить заказ" size="20px" />
    </ul>
</template>

<style lang="scss" scoped>
ul {
    border: 1px solid var(--scheme-v3);
    display: grid;
    padding: 20px;
    gap: 10px;

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

    button {
        background-color: var(--scheme-v2);
        color: var(--scheme-v4);
        margin: var(--scheme-gap) auto auto 0;
    }

    @media all and (max-width: 60em) {
        grid-template-columns: inherit;
        grid-column: 1 / 3;
    }
}
</style>
