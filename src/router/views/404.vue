<script>
import { useRoute } from 'vue-router'
import Bcrumb from '@/components/Bcrumb.vue'

export default {
    components: { Bcrumb },
    setup() {
        const route = useRoute()

        return {
            route,
        }
    },
}
</script>

<template>
    <Bcrumb :array="['home']" />
    <section>
        <article>
            <h1>404</h1>
            <p>Запрашиваемого ресурса нет : {{ route.fullPath }}</p>
        </article>
    </section>
</template>

<style lang="scss" scoped>
h1 {
    font-size: clamp(24px, 14vw, 200px);
    margin: auto auto var(--scheme-gap);
    max-width: var(--scheme-width);
    padding: 0 var(--scheme-gap);
}

section {
    margin: auto;
    max-width: var(--scheme-width);
    padding: var(--scheme-gap);
    text-align: center;

    article {
        p {
            max-width: 400px;
            margin: auto auto var(--scheme-offset);
        }
    }
}

// базовый breakpoint 1152px
@media all and (max-width: 72em) {
}
</style>
