<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Image from '@/components/Image.vue'

import { ref } from 'vue'

const props = defineProps({
    // заголовок изображения
    images: {
        type: Array,
        default: () => [],
    },
})

// создаем реактивный экземпляр массива
const swiper = ref(props.images)

const next = (index) => {
    if (index != 0) {
        const first = swiper.value.shift()
        //
        swiper.value = swiper.value.concat(first)
    }
}
</script>

<template>
    <div class="swiper">
        <Image v-for="(item, index) in swiper" :key="index" :srcPath="item" @click="next(index)" />
    </div>
</template>

<style lang="scss" scoped>
.swiper {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 20px;
    height: min-content;

    picture {
        width: 110px;

        &:first-child {
            grid-area: 1 / 2 / 4 / 4;
            height: 100%;
            max-width: 376px;
            object-fit: cover;
            width: 100%;
        }
        &:nth-child(2) {
            grid-area: 1 / 1 / 2 / 2;
        }
        &:nth-child(3) {
            grid-area: 2 / 1 / 3 / 2;
            opacity: 0.2;
        }
        &:nth-child(4) {
            grid-area: 3 / 1 / 4 / 2;
            opacity: 0.2;
        }
        &:nth-child(n + 5) {
            display: none;
        }
    }

    // базовый breakpoint 1152px
    @media all and (max-width: 72em) {
        display: flex;
        flex-wrap: wrap;

        picture {
            &:first-child {
                flex: 100%;
                max-width: 100%;
            }
        }
    }

    @media all and (max-width: 48em) {
        picture {
            width: 80px;
        }
    }
}
</style>
