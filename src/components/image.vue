<script setup>
import { ref, watchEffect } from 'vue'

const props = defineProps({
    text: { type: String },
})

const avif = ref()

watchEffect(async () => {
    avif.value = (await import(/* @vite-ignore */ `@/assets/images/${props.text}.avif`)).default
})
</script>

<template>
    <picture>
        <!-- <source :srcset="webp" type="image/webp" /> -->
        <img :src="avif" decoding="async" :alt="text" loading="lazy" />
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
