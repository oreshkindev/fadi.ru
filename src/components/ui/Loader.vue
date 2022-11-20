<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// const post = await fetch(`/api/post/1`).then((r) => r.json())
</script>

<template>
    <div class="spinner">
        <div class="dots"></div>
    </div>
</template>

<style lang="scss" scoped>
.spinner {
    margin: var(--scheme-offset) auto;
    text-align: center;
    grid-column: 1 /4;
    .dots {
        width: 10px;
        height: 10px;
        background-color: var(--scheme-v3);
        border-radius: 50%;
        display: inline-block;
        animation: motion 3s cubic-bezier(0.77, 0, 0.175, 1) infinite;
    }

    // последний breakpoint для Samsung S10 360x760px
    @media all and (max-width: 42em) {
        grid-column: 1 / 3;
    }
}

@keyframes motion {
    0% {
        transform: translateX(0) scale(1);
    }
    25% {
        transform: translateX(-50px) scale(0.3);
    }
    50% {
        transform: translateX(0) scale(1);
    }
    75% {
        transform: translateX(50px) scale(0.3);
    }
    100% {
        transform: translateX(0) scale(1);
    }
}
</style>
