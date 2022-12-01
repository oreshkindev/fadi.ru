<script>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import Search from '@/components/form/Search.vue'

export default {
    components: { Search },
    setup() {
        // Определяем наше хранилище
        const store = useStore()
        // определяем роутер
        const route = useRoute()

        return { route }
    },
}
</script>

<template>
    <nav>
        <router-link to="/secure/redactor/patterns">Выкройки</router-link>
        <router-link to="/secure/redactor/category">Категории</router-link>
    </nav>

    <router-view />

    <template v-if="route.name == 'redactor'">
        <h1>Редактор</h1>

        <section>
            <h4>Инструкция</h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, perspiciatis doloremque atque veritatis eligendi quaerat nisi tenetur corporis
                libero pariatur veniam repellendus deserunt eveniet qui mollitia natus unde recusandae. Quas impedit fugiat ullam accusantium aspernatur vero
                quod optio repudiandae vitae fuga odio nam omnis, corporis maiores! Cum libero inventore expedita eaque accusamus perferendis repudiandae itaque
                nihil! Voluptates obcaecati laborum sint maxime doloremque numquam cum magni iure incidunt culpa perspiciatis vero possimus suscipit,
                necessitatibus laudantium unde eligendi aperiam ipsam sequi libero dolore quidem quod. Dolore cumque qui fugit sunt obcaecati doloribus ipsa
                asperiores vitae nihil ratione molestiae amet, voluptatibus aspernatur, impedit neque labore maiores voluptas harum officia earum beatae. Vero
                laboriosam eligendi modi quae, quos aperiam reiciendis iusto nobis quam eum alias magnam assumenda architecto beatae eius a in, animi dicta
                delectus non sit culpa harum. Doloremque rem autem incidunt! Incidunt repudiandae commodi quibusdam ratione blanditiis quia libero voluptatem?
                Esse aperiam ad facilis voluptate. Est velit quidem voluptatem nemo error doloremque omnis sit corporis? Vel, quos ipsa. Cupiditate ipsa
                necessitatibus iure, voluptatum labore reiciendis sint culpa repudiandae enim quos? Cumque, illo hic omnis dignissimos est velit excepturi
                ratione ab. Optio doloremque commodi repudiandae facilis quo expedita ducimus asperiores laborum, dolorum molestias voluptates nemo recusandae
                sequi harum. Magnam a optio, alias, voluptatum esse tempore quidem maiores sequi aperiam similique dolore praesentium quo officia libero
                repellat ad, dolor animi repellendus exercitationem! Nisi repellat ullam accusamus, ipsam officia reprehenderit quae magni quasi dicta deleniti
                sapiente similique deserunt neque natus a at laudantium delectus harum maxime fugit eaque eum temporibus facilis. Temporibus laboriosam hic sit
                eligendi aspernatur ut, atque laborum et excepturi odit eaque quas aut totam voluptatem vitae! Quasi similique placeat, sed distinctio quae
                possimus, reiciendis debitis ab iure maxime deleniti! Voluptas eaque illo, doloribus impedit, quae sit praesentium modi, omnis illum adipisci
                eligendi.
            </p>
        </section>
    </template>
</template>

<style lang="scss" scoped>
nav {
    border-radius: 20px;
    box-sizing: border-box;
    background-color: var(--scheme-v5);
    display: flex;
    gap: var(--scheme-gap);
    margin: var(--scheme-gap) auto var(--scheme-offset);
    max-width: var(--scheme-width);
    padding: var(--scheme-gap);

    a {
        border-bottom: 2px solid transparent;
        cursor: pointer;
        white-space: nowrap;

        &.router-link-exact-active,
        &:hover {
            border-color: var(--scheme-v3);
        }
    }
}

h1 {
    margin: auto auto var(--scheme-gap);
    max-width: var(--scheme-width);
    padding: 0 var(--scheme-gap);
}

section {
    margin: auto;
    max-width: var(--scheme-width);
    padding: var(--scheme-gap);

    ul {
        border-bottom: 1px solid var(--scheme-v6);
        display: grid;
        gap: var(--scheme-gap);
        grid-template-columns: minmax(260px, 1fr) minmax(132px, 1fr) minmax(142px, 1fr) 185px;
        margin: 0;
        overflow: auto;
        padding: 20px;
        width: 100%;

        &:first-child {
            border: none;
        }

        &:hover {
            background-color: var(--scheme-v5);
        }

        li {
            &:last-child {
                text-align: center;
            }

            span {
                color: var(--scheme-v6);
                display: block;
            }

            i {
                cursor: pointer;
                transform: rotate(90deg);

                &:hover {
                    color: var(--scheme-v3);
                }
            }
        }
    }
}
</style>
