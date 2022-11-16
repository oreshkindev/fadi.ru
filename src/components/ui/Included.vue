<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
const props = defineProps(['array'])
</script>

<template>
    <ul v-if="array">
        <li v-for="item in array" :key="item">{{ item }}</li>
    </ul>
</template>

<style lang="scss" scoped>
ul {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 40px 0;
    place-items: center;

    li {
        background-color: var(--scheme-v6);
        border-radius: 25px;
        padding: 6px 20px;
    }
}
</style>
