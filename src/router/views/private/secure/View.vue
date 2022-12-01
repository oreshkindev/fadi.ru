<script>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'

import Bcrumb from '@/components/Bcrumb.vue'
import Editor from '@/components/form/Editor.vue'

export default {
    components: { Bcrumb, Editor },
    setup() {
        const route = useRoute()

        const store = useStore()

        const product = computed(() => store.getters['products/product']({ k: 'slug', v: route.params.product })[0])

        const category = computed(() => store.getters['category/get']({ k: 'slug', v: route.params.category })[0])

        const index = ref(0)

        // redactor
        const redactor = ref({
            name: product.value.product.name,
            price: product.value.product.price,
        })

        const content = ref()

        return { product, category, index, redactor, content }
    },
}
</script>

<template>
    <!-- <pre>{{ product }}</pre> -->
    <Bcrumb :array="['redactor', category.name]" :name="product?.product.name" />

    <h1 @blur="redactor.name = $event.target.innerText.trim()" contenteditable>{{ product?.product.name }}</h1>

    <section>
        <div>
            <ul>
                <li>
                    <img src="@/assets/images/blank426.jpg" alt="" />
                </li>
                <li>
                    <img src="@/assets/images/blank426.jpg" alt="" />
                </li>
                <li>
                    <img src="@/assets/images/blank426.jpg" alt="" />
                </li>
            </ul>
            <picture>
                <img src="@/assets/images/blank426.jpg" alt="" />
            </picture>
        </div>

        <article>
            <h2 @blur="redactor.name = $event.target.innerText.trim()" contenteditable>
                {{ product?.product.name }}
            </h2>

            <ul class="sizes">
                <span>Размер</span>

                <li v-for="(item, i) in product?.size" :key="i" @click="index = i" :class="{ active: i == index }">
                    {{ item }}
                </li>
            </ul>

            <h3>
                <span @blur="redactor.price = $event.target.innerText.trim()" contenteditable>{{ product?.product.price }}</span> p
            </h3>

            <button disabled>Добавить в корзину</button>
            <p>Ссылки на скачивание купленной выкройки будут отправлены на ваш электронный адрес, а также скачать выкройки можно в личном кабинете</p>

            <br />

            <Editor v-model="content" />
        </article>
    </section>
</template>

<style lang="scss" scoped>
h1 {
    margin: auto auto var(--scheme-offset);
    max-width: var(--scheme-width);
    padding: 0 var(--scheme-gap);
}

section {
    display: grid;
    grid-template-columns: 500px auto;
    gap: 40px;
    margin: auto;
    max-width: var(--scheme-width);
    padding: var(--scheme-gap);

    div {
        display: grid;
        grid-template-columns: 150px auto;
        gap: 10px;
        grid-template-rows: 500px;

        ul {
            margin: 0;
            display: grid;
            gap: 10px;
            grid-template-rows: repeat(3, 1fr);
            grid-column: 1 / 2;
            overflow: hidden;

            li {
                position: relative;
                overflow: hidden;

                img {
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
        }

        picture {
            grid-column: 2 / 3;

            img {
                display: block;
                width: 100%;
                object-fit: cover;
                height: 100%;
            }
        }
    }

    article {
        grid-column: 2 / 3;

        h2 {
            line-height: 1;
            margin: 0 0 var(--scheme-gap);
        }

        .sizes {
            align-items: center;
            display: grid;
            gap: 20px;
            grid-template-columns: 56px repeat(6, min-content);
            text-align: center;

            li {
                background-color: var(--scheme-v5);
                cursor: pointer;
                min-width: 32px;
                padding: 4px;

                &.active {
                    background-color: var(--scheme-v6);
                }

                &:hover {
                    background-color: var(--scheme-v6);
                }
            }
        }
    }
}

// базовый breakpoint 1152px
@media all and (max-width: 72em) {
    section {
        display: inherit;

        article {
            grid-column: 1 / 3;
            padding: 0;

            h2 {
                margin: var(--scheme-gap) 0;
            }
        }
    }
}
// базовый breakpoint 1152px
@media all and (max-width: 42em) {
    section {
        display: inherit;

        div {
            display: grid;
            grid-template-columns: 110px auto;
            gap: 10px;
            grid-template-rows: 320px;
        }

        article {
            grid-column: 1 / 3;
            padding: 0;

            ul {
                grid-template-columns: 56px repeat(auto-fit, 46px);
            }
        }
    }
}
</style>
