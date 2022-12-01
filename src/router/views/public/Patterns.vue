<script>
import { ref } from 'vue'

import Bcrumb from '@/components/Bcrumb.vue'
import Search from '@/components/form/Search.vue'
import Sidebar from '@/components/patterns/Sidebar.vue'
import Category from '@/components/patterns/Category.vue'

export default {
    components: { Bcrumb, Search, Sidebar, Category },
    setup() {
        const category = ref('detskie')

        const query = ref('')

        return { category, query }
    },
}
</script>

<template>
    <Bcrumb :array="['home']" />

    <h1>Выкройки на любой вкус</h1>

    <Search title="Найти выкройку.." @search="query = $event" />

    <section>
        <aside>
            <Sidebar @picked="category = $event" :category="category" />
        </aside>

        <div>
            <Category :category="category" :searchQuery="query" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
h1 {
    margin: auto auto var(--scheme-gap);
    max-width: var(--scheme-width);
    padding: 0 var(--scheme-gap);
}

section {
    display: grid;
    grid-template-columns: 300px 1fr;
    margin: auto;
    max-width: var(--scheme-width);
    padding: var(--scheme-gap);

    aside {
        border-top: 1px solid #ccc;
        padding: var(--scheme-gap);
        padding-left: 0;
        border-right: 1px solid #ccc;
    }

    div {
        padding: 0;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        border-top: 1px solid #ccc;
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
