<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

export default {
    emits: ['picked', 'create'],
    props: {
        category: {
            type: String,
        },
        redactor: {
            type: Boolean,
        },
    },
    setup(props) {
        // Определяем наше хранилище
        const store = useStore()

        const selected = ref(props.category)
        const child = ref('')

        const select = (slug) => {
            selected.value = slug
        }
        // получаем массив с товаром
        const categories = computed(() => store.getters['category/data'].filter((i) => i.childrens != 0))

        return { categories, select, selected, child }
    },
}
</script>

<template>
    <nav>
        <ul v-if="redactor" class="redactor">
            <li>
                <span @click=";((selected = ''), (child = '')), $emit('picked', 'all'), select('all')">Все</span>
                <i class="icon-plus" @click="$emit('create')"></i>
            </li>
        </ul>

        <ul class="defer" v-if="!categories.length">
            <li>
                <span>Женские</span>
            </li>
            <li>
                <span>Мужские</span>
            </li>
        </ul>

        <ul v-else>
            <li v-for="c in categories" :key="c.id">
                <span
                    @click=";((selected = c.slug), (child = '')), $emit('picked', c.slug)"
                    :class="{ active: c.slug == selected || c.childrens.some((e) => e.slug === child) }"
                    >{{ c.name }}</span
                >

                <ul v-show="selected == c.slug || c.childrens.some((e) => e.slug === child)">
                    <li v-for="i in c.childrens" :key="i.id">
                        <span @click=";((selected = ''), (child = i.slug)), $emit('picked', i.slug)" :class="{ active: i.slug == child }">{{ i.name }}</span>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
.redactor {
    border-radius: 50px;
    margin: 0 0 20px;

    li {
        background-color: var(--scheme-v5);

        i {
            background-color: var(--scheme-v2);
            border-radius: 50px;
            cursor: pointer;
            padding: 10px;
            position: absolute;
            right: 0%;
            top: 50%;
            transform: translate(-20%, -50%);

            &:hover {
                background-color: var(--scheme-v3);
                color: var(--scheme-v2);
            }
        }
    }
}
nav {
    ul {
        display: grid;
        gap: 10px;
        margin: 0;
        overflow: hidden;
        position: relative;

        ul {
            margin: 10px 0 0;
            padding: 0 0 0 var(--scheme-gap);

            li {
                span {
                    &.active {
                        background-color: var(--scheme-v5);
                        color: var(--scheme-v1);
                    }
                }
            }
        }

        li {
            span {
                border-bottom: 2px solid transparent;
                border-radius: 50px;
                cursor: pointer;
                display: block;
                padding: 12px 40px;

                &.active {
                    background-color: var(--scheme-v3);
                    color: var(--scheme-v2);
                }
            }
        }

        &.defer {
            li {
                background-color: var(--scheme-v6);
                overflow: hidden;
                position: relative;

                span {
                    color: var(--scheme-v6);
                    cursor: default;
                }
            }
        }
    }
}
</style>
