<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// components/ui
import Breadcrumbs from '@/components/ui/Breadcrumbs.vue'
import SearchBar from '@/components/ui/SearchBar.vue'
// TODO:
import { defineAsyncComponent, ref } from 'vue'

const PopularPatterns = defineAsyncComponent(() => import('@/components/PopularPatterns.vue'))

let index = ref(4)

// TODO: доставать из состояния
// получаем массив с категориями
const category = ['Все', 'Женщинам', 'Мужчинам', 'Детям', 'Бесплатные выкройки']

// TODO: доставать из состояния
// получаем массив с выкройками
const array = [
    {
        id: 1,
        image: 'Rectangle120',
        text: 'Выкройка фади № 1',
        doc: '#',
        category: 1,
    },
    {
        id: 2,
        image: 'Rectangle121',
        text: 'Выкройка фади № 2',
        doc: '#',
        category: 2,
    },
    {
        id: 3,
        image: 'Rectangle450',
        text: 'Выкройка фади № 3',
        doc: '#',
        category: 4,
    },
    {
        id: 4,
        image: 'Rectangle451',
        text: 'Выкройка фади № 4',
        doc: '#',
        category: 3,
    },
    {
        id: 5,
        image: 'Rectangle452',
        text: 'Выкройка фади № 5',
        doc: '#',
        category: 4,
    },
    {
        id: 6,
        image: 'Rectangle453',
        text: 'Выкройка фади № 6',
        doc: '#',
        category: 1,
    },
]

// подготавливаем поисковой запрос
const query = ref('')

const prepareQuery = (r) => {
    query.value = r.toLowerCase()
}
</script>

<template>
    <section>
        <Breadcrumbs />
        <h1>
            Мастер-классы <br />
            от опытного наставника
        </h1>

        <SearchBar @query="prepareQuery" />

        <p>
            Плащ свободного объема, немного расклешенного силуэта, длиной ниже линии колен, без подкладки. Перед с центральной бортовой застежкой на кнопки или пришивные пуговицы и
            обметанные петли. На детали передней части накладной карман. Спинка со средним швом и расположенным в области талии хлястиком, который немного собирает объем спинки.
        </p>

        <nav class="category">
            <ul v-for="(item, i) in category" :key="i">
                <li :class="{ active: index == i }" @click="index = i">{{ item }}</li>
            </ul>
        </nav>

        <PopularPatterns :array="array" :category="index" :query="query" />
    </section>
</template>

<style lang="scss" scoped>
section {
    display: grid;
    gap: var(--scheme-gap);
    grid-auto-columns: 1fr auto;

    h1 {
        direction: rtl;
        grid-column: 1 / 3;
    }

    form {
        grid-column: 1 / 3;
    }

    p {
        grid-column: 1 / 3;
    }

    .category {
        border-right: 1px solid var(--scheme-v3);
        border-top: 1px solid var(--scheme-v3);
        grid-column: 1 / 2;
        max-width: fit-content;
        padding: 40px 40px 0 0;

        ul {
            li {
                border-radius: 25px;
                cursor: pointer;
                margin: 0 0 20px;
                padding: 8px 40px;
                white-space: nowrap;

                &.active {
                    background-color: var(--scheme-v2);
                    color: var(--scheme-v4);
                }
            }
        }
    }

    section {
        border-top: 1px solid var(--scheme-v3);
        grid-column: 2 / 3;
        grid-template-columns: repeat(2, 1fr);
        padding: 40px 0 0 40px;
    }

    // базовый breakpoint 1152px
    @media all and (max-width: 72em) {
        section,
        .category {
            border: none;
            grid-column: 1 / 3;
            padding: 0;
        }

        section {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    // последний breakpoint для Samsung S10 360x760px
    @media all and (max-width: 42em) {
        section {
            grid-template-columns: 1fr;
        }
    }
}
</style>
