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

<!-- <script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const route = useRoute()

// Use the useActions as you would use mapActions
const store = useStore()

let category = computed(() => store.getters['session/get'])

const getCategory = () => {
    store.dispatch('session/getCategory')
}
</script>
 -->
