<script>
import { onMounted, ref } from 'vue'
import Hero from './sections/home/Hero.vue'
import Patterns from '@/router/views/public/sections/home/Patterns.vue'
import PatternsHome from './sections/home/PatternsHome.vue'
import PatternsCount from './sections/home/PatternsCount.vue'
import Reviews from './sections/home/Reviews.vue'

export default {
    components: { Hero, Patterns, PatternsHome, PatternsCount, Reviews },
    setup() {
        const defer = ref(false)

        onMounted(() => {
            setTimeout(() => {
                defer.value = true
            }, 1000)
        })
        return { defer }
    },
}
</script>

<template>
    <Hero />
    <Patterns title="Женские" button="Перейти в каталог" :count="2" />
    <Patterns title="Мужские" button="Перейти в каталог" :count="2" />
    <PatternsHome
        title="Детские выкройки"
        desc="Умеренноый объём, прямой силуэт, длина — до линии бёдер. Плечо спущено на 7 см от естественной точки плеча. Перед и спинка с рельефами, образующими V-образную линию."
        button="Перейти в каталог"
        path="/patterns"
        wide
        v-show="defer"
    />
    <PatternsHome
        title="Цех"
        desc="Умеренноый объём, прямой силуэт, длина — до линии бёдер. Плечо спущено на 7 см от естественной точки плеча. Перед и спинка с рельефами, образующими V-образную линию."
        button="Работа цеха"
        path="/tailoring"
        wide
        v-show="defer"
    />
    <PatternsHome
        title="Мастер-классы"
        desc="На мастер-классах в режиме онлайн обучаю, как строить выкройки и создавать по ним одежду. Жду всех, кто хочет воплощать свои идеи в жизнь под чутким руководством опытного наставника."
        button="Мастер-классы"
        path="/workshops"
        v-show="defer"
    />
    <PatternsCount title="Бесплатные выкройки" button="Перейти в каталог" path="/patterns" v-show="defer" />
    <Reviews v-show="defer" />
</template>

<style lang="scss" scoped></style>
