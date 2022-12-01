<script>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { ref } from 'vue'

import Search from '@/components/form/Search.vue'
import Sidebar from '@/components/patterns/Sidebar.vue'
import Category from '@/components/patterns/Category.vue'
import Tutorial from '@/components/form/Tutorial.vue'

export default {
    components: { Search, Sidebar, Category, Tutorial },
    setup() {
        const category = ref('all')

        const query = ref('')

        const tutorial = ref(false)

        return { category, query, tutorial }
    },
}
</script>

<template>
    <h1>Выкройки на любой вкус</h1>

    <Search title="Найти выкройку.." @search="query = $event" />

    <section>
        <aside>
            <Sidebar @picked="category = $event" :category="category" @create="tutorial = true" redactor />
        </aside>

        <div>
            <Category :category="category" :searchQuery="query" redactor />
        </div>
    </section>

    <teleport to="body">
        <Tutorial v-if="tutorial" @close="tutorial = false" />
    </teleport>
</template>

<style lang="scss" scoped>
dialog {
    background-color: rgba(0, 0, 0, 0.8);
    box-sizing: border-box;
    display: grid;
    height: 100%;
    inset: 0;
    place-content: center;
    position: fixed;
    width: 100%;
    z-index: 999;

    section {
        align-items: flex-start;
        background-color: var(--scheme-v2);
        box-sizing: border-box;
        display: inherit;
        gap: var(--scheme-gap);
        grid-template-columns: repeat(2, auto);
        justify-items: baseline;
        padding: 80px var(--scheme-gap) var(--scheme-gap);
        position: relative;

        i {
            color: var(--scheme-v3);
            cursor: pointer;
            font-size: var(--scheme-font-32);
            position: absolute;
            right: 10px;
            top: 10px;
            transform: rotate(45deg);
        }

        article {
            h3 {
                margin: 0;
                max-width: 600px;
            }
            p {
                max-width: 600px;
            }
            form {
                margin: 40px 0;

                ul {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    place-content: baseline;

                    li {
                        background-color: var(--scheme-v5);
                        border-radius: 10px;
                        cursor: pointer;
                        padding: 10px 20px;
                        width: fit-content;
                    }
                }
            }
        }

        picture {
            img {
                height: 500px;
                max-width: 500px;
                object-fit: contain;
            }
        }

        span {
            margin: 0 0 0 auto;
        }
    }
}

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
    dialog {
        section {
            grid-template-columns: 1fr;

            picture {
                display: none;
            }
        }
    }
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
