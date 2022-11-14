<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
    <ul>
        <li>
            <img src="@/assets/images/sberbank.svg" alt="Поддерживается оплата через Сбербанк-онлайн" />
        </li>

        <li>
            <img src="@/assets/images/visa.svg" alt="Поддерживается карта Visa" />
        </li>

        <li>
            <img src="@/assets/images/mastercard-text.svg" alt="Поддерживается карта Mastercard" />
        </li>
    </ul>
</template>

<style scoped lang="scss">
ul {
    display: flex;
    flex-wrap: wrap;
    gap: var(--scheme-gap);
    margin: 20px 0 !important;

    li {
        img {
            background-color: var(--scheme-v4);
            border-radius: 6px;
            height: 60px;
            max-width: 180px;
            padding: 10px 40px;
        }
    }
}

@media all and (max-width: 48em) {
    ul {
        li {
            img {
                max-width: 140px;
            }
        }
    }
}
</style>
