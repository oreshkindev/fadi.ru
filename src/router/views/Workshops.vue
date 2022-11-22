<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// components/ui
import Breadcrumbs from '@/components/ui/Breadcrumbs.vue'
import SearchBar from '@/components/ui/SearchBar.vue'
// TODO:
import { defineAsyncComponent } from 'vue'

const Categories = defineAsyncComponent(() => import('@/components/Categories.vue'))
const PopularPatterns = defineAsyncComponent(() => import('@/components/PopularPatterns.vue'))
</script>

<template>
    <Breadcrumbs :array="['home']" />

    <h1>Мастер-классы <br />от опытного наставника</h1>

    <SearchBar />

    <section>
        <p>
            Плащ свободного объема, немного расклешенного силуэта, длиной ниже линии колен, без подкладки. Перед с центральной бортовой застежкой на кнопки или пришивные пуговицы и
            обметанные петли. На детали передней части накладной карман. Спинка со средним швом и расположенным в области талии хлястиком, который немного собирает объем спинки.
        </p>
    </section>

    <section>
        <PopularPatterns />

        <aside>
            <Categories />
        </aside>
    </section>
</template>

<style lang="scss" scoped>
nav,
h1,
form {
    max-width: var(--scheme-max-width);
    padding: 0 var(--scheme-gap);
    width: 100%;
}

section {
    display: grid;
    // gap: var(--scheme-gap);
    padding: var(--scheme-gap);
    width: 100%;

    section {
        border-top: 1px solid var(--scheme-v3);
        grid-column: 2 / 3;
        height: 100%;
        padding: var(--scheme-gap) 0 0 var(--scheme-gap);
    }

    aside {
        border-top: 1px solid var(--scheme-v3);
        border-right: 1px solid var(--scheme-v3);
        grid-column: 1 / 2;
        grid-row: 1;
        padding: var(--scheme-gap) var(--scheme-gap) 0 0;
    }

    p {
        max-width: 820px;
    }
}

// последний breakpoint для Samsung S10 360x760px
@media all and (max-width: 42em) {
    section {
        section {
            grid-column: 1 / 3;
            padding: var(--scheme-gap) 0;
        }

        aside {
            border: 1px solid var(--scheme-v3);
            grid-column: 1 / 3;
            padding: var(--scheme-gap);
        }
    }
}
</style>
