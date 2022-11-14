<template>
    <section>
        <h3>404</h3>
        <p>Запрашиваемого ресурса нет : {{ route.fullPath }}</p>
    </section>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import Name from './components/Name.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style lang="scss" scoped></style>
