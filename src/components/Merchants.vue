<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
    <ul>
        <li>
            <img src="@/assets/images/mir.svg" alt="Поддерживается оплата картой Мир" />
        </li>

        <li>
            <img src="@/assets/images/mastercard.svg" alt="Поддерживается оплата картой Mastercard" />
        </li>

        <li>
            <img src="@/assets/images/visa.svg" alt="Поддерживается оплата картой Visa" />
        </li>
    </ul>
</template>

<style lang="scss" scoped>
ul {
    display: flex;
    flex-wrap: wrap;
    gap: var(--scheme-gap);
    margin: 20px 0 !important;

    li {
        img {
            background-color: var(--scheme-v4);
            border-radius: 6px;
            height: 50px;
            max-width: 160px;
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
