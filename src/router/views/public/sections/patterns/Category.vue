<script>
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'

import Bcrumb from '@/components/Bcrumb.vue'
import Category from '@/components/patterns/Category.vue'

export default {
    components: { Bcrumb, Category },
    setup() {
        // Определяем наше хранилище
        const store = useStore()

        // получаем доступ к параметрам роутера
        const route = useRoute()

        const category = computed(() => store.getters['category/get']({ k: 'slug', v: route.params.category })[0])

        return { category, route }
    },
}
</script>

<template>
    <router-view />

    <template v-if="route.name == 'category'">
        <!-- <pre>{{ category }}</pre> -->
        <Bcrumb :array="['home', 'patterns']" :name="category.name" />

        <h1>{{ category.name }}</h1>

        <section>
            <div>
                <Category :category="category.slug" />
            </div>
        </section>
    </template>
</template>

<style lang="scss" scoped>
h1 {
    margin: auto auto var(--scheme-gap);
    max-width: var(--scheme-width);
    padding: 0 var(--scheme-gap);
}

section {
    display: grid;
    grid-template-columns: 1fr;
    margin: auto;
    max-width: var(--scheme-width);
    padding: var(--scheme-gap);

    div {
        padding: 0;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        border-top: 1px solid #ccc;
        border-left: 1px solid #ccc;
    }
}

// базовый breakpoint 1152px
@media all and (max-width: 72em) {
    section {
        div {
            grid-template-columns: repeat(2, 1fr);
        }
    }
}

@media all and (max-width: 56em) {
    section {
        div {
            grid-template-columns: repeat(1, 1fr);
        }
    }
}

@media all and (max-width: 42em) {
    section {
        grid-template-columns: repeat(1, 1fr);

        aside {
            border: 1px solid var(--scheme-v6);
            padding: var(--scheme-gap);
        }
        div {
            grid-template-columns: repeat(1, 1fr);
        }
    }
}
</style>
