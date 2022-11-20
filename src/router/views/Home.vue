<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Hero from '@/components/views/public/home/Hero.vue'
import WomensPatterns from '@/components/views/public/home/WomensPatterns.vue'
import MensPatterns from '@/components/views/public/home/MensPatterns.vue'

import { useStore } from 'vuex'
import { defineAsyncComponent, onMounted } from 'vue'

// Определяем наше хранилище
const store = useStore()
//
const ChildrensPatterns = defineAsyncComponent(() => import('@/components/views/public/home/ChildrensPatterns.vue'))
const Tailoring = defineAsyncComponent(() => import('@/components/views/public/home/Tailoring.vue'))
const Workshops = defineAsyncComponent(() => import('@/components/views/public/home/Workshops.vue'))
const FreePatterns = defineAsyncComponent(() => import('@/components/views/public/home/FreePatterns.vue'))
const Reviews = defineAsyncComponent(() => import('@/components/views/public/home/Reviews.vue'))

onMounted(() => {
    store.dispatch('products/get')
})
</script>

<template>
    <Hero />

    <WomensPatterns />

    <MensPatterns />

    <ChildrensPatterns />

    <Tailoring />

    <Workshops />

    <FreePatterns />

    <Reviews />
</template>
