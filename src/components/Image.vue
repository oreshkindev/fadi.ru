<script setup>

const props = defineProps({
    srcPath: { type: String },
    text: { type: String, default: 'картинка' }
})
</script>

<template>
    <picture>
        <!-- <source :srcset="webp" type="image/webp" /> -->
        <img :src="srcPath" type="image/jpg" decoding="async" :alt="text" loading="lazy" />
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
