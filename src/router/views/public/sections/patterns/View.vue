<script>
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { computed, ref } from 'vue'
import Bcrumb from '@/components/Bcrumb.vue'

export default {
    components: { Bcrumb },
    setup() {
        const route = useRoute()

        const router = useRouter()

        const store = useStore()

        const product = computed(() => store.getters['products/product']({ k: 'slug', v: route.params.product })[0])

        const category = computed(() => store.getters['category/get']({ k: 'slug', v: route.params.category })[0])

        const cart = computed(() => store.getters['cart/product']({ k: 'id', v: product.value.product.id })[0])

        const index = ref(0)

        const pushToCart = () => {
            let { sku_product, size, ...p } = product.value
            // подготавливаем новый объект товара
            sku_product = sku_product[index.value]

            size = size[index.value]
            // комитим
            store.commit('cart/pushToCart', { sku_product, size, ...p })
        }

        if (!product.value) {
            router.push(`/${route.params.product}`)
        }
        return { product, category, index, pushToCart, cart }
    },
}
</script>

<template>
    <!-- <pre>{{ product }}</pre> -->
    <Bcrumb :array="['home', 'patterns', category.name]" :name="product?.product.name" />

    <h1>{{ product?.product.name }}</h1>

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
            <h2>
                {{ product?.product.name }}
            </h2>

            <ul class="sizes">
                <span>Размер</span>

                <li v-for="(item, i) in product?.size" :key="i" @click="index = i" :class="{ active: i == index }">
                    {{ item }}
                </li>
            </ul>

            <h3>{{ product?.product.price }} p</h3>

            <button v-text="!cart ? `Добавить в корзину` : `В корзине`" @click="pushToCart"></button>
            <p>Ссылки на скачивание купленной выкройки будут отправлены на ваш электронный адрес, а также скачать выкройки можно в личном кабинете</p>

            <br />
            {{ product?.product.descriptions }}

            <!-- TODO: -->
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, id laboriosam accusamus veniam porro explicabo minima culpa necessitatibus
                error dolorem, temporibus ipsa dolor nostrum quibusdam consequuntur suscipit fugiat. Repudiandae voluptates eaque nemo vel quis consequatur
                possimus temporibus voluptatibus est reiciendis optio nulla rerum nihil maxime enim repellat nesciunt incidunt, eveniet, tempore odit quidem
                quas. Rerum dolorem nobis iusto, ducimus voluptate est esse dignissimos blanditiis eos et reprehenderit eius praesentium debitis. Blanditiis
                veritatis, aliquid aperiam nobis praesentium aspernatur tempore tempora sequi! Autem expedita temporibus assumenda exercitationem ullam
                consectetur commodi cumque ipsum magnam voluptatem. Veniam facilis voluptatibus, hic, culpa incidunt enim illum accusamus, qui delectus sit
                sequi. Id provident ab minima, nemo praesentium nulla eum fuga reiciendis accusantium veniam obcaecati quibusdam quo officiis nisi expedita
                consequuntur? Harum ratione architecto neque reprehenderit, repellat porro consectetur veniam similique maxime sequi omnis vero ipsum cumque hic
                velit quibusdam impedit culpa debitis aperiam rem mollitia? Odit quasi illum vero quam accusantium voluptatibus perferendis quae, laborum fugit
                quia aut omnis dolor quas asperiores sint deleniti odio. Eaque ex voluptatem porro rerum reiciendis architecto hic est soluta a commodi qui
                voluptas repellendus itaque perferendis perspiciatis ratione tempora, consectetur id, sit minus! Reprehenderit suscipit assumenda deleniti,
                recusandae ipsum doloremque!
            </p>
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
