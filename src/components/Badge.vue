<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
    <figure>
        <img src="@/assets/images/fadi-VI-logo.svg" alt="" />
    </figure>
</template>

<style scoped lang="scss">
figure {
    background-color: var(--scheme-v4);
    border-radius: 100%;
    height: 150px;
    position: absolute;
    top: 50%;
    left: 55%;
    transform: translate(-50%, -50%);
    width: 150px;

    img {
        left: 54%;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 100px;
    }

    &::before {
        content: '';
        border: 2px solid var(--scheme-v1);
        border-radius: 100%;
        width: 90%;
        position: absolute;
        height: 90%;
        top: 6px;
        left: 6px;
    }
}
</style>
