<script setup>
import { ref, watchEffect } from 'vue'

const props = defineProps({
    text: { type: String },
})

const webp = ref()

watchEffect(async () => {
    if (props.text) {
        webp.value = (await import(/* @vite-ignore */ `@/assets/images/${props.text}.webp`)).default
    }
})
</script>

<template>
    <picture>
        <!-- <source :srcset="webp" type="image/webp" /> -->
        <img :src="webp" type="image/webp" decoding="async" :alt="text" loading="lazy" />
    </picture>
</template>

<style lang="scss" scoped>
picture {
    display: block;

    img {
        object-fit: cover;
        height: 100%;
    }
}
</style>
