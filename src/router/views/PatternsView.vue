<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Breadcrumbs from '@/components/ui/Breadcrumbs.vue'
import Size from '@/components/ui/Size.vue'
import Included from '@/components/ui/Included.vue'
import ButtonContext from '@/components/ui/ButtonContext.vue'
import Swiper from '@/components/Swiper.vue'

import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { onMounted, defineAsyncComponent, computed, ref } from 'vue'

// Список популярных товаров
const PopularPatterns = defineAsyncComponent(() => import('@/components/PopularPatterns.vue'))

// получаем доступ к параметрам роутера
const route = useRoute()

// Определяем наше хранилище
const store = useStore()

// выводим ошибку
// const error = computed(() => store.getters['products/error'])

// TODO:
// загрузить фотки на сервер
const images = computed( () => {
    return data.value.product.images.map( partPath => `${import.meta.env.VITE_IMAGE_DIR}/${partPath}` )
} )

const cart = computed(() => store.getters['cart/data'])
// получаем массив с товаром
const data = computed(() => store.getters['products/data'][0])

// отправляем запрос на получение товара по его имени
const get = store.dispatch('products/getBy', route.query)

const index = ref(0)
// присваиваем индекс
const setSize = (i) => {
    index.value = i
}

const prepare = () => {
    const t = data.value
    // подготавливаем новый объект товара
    const item = {
        sku_product: t.sku_product[index.value],
        product: {
            id: t.product.id,
            name: t.product.name,
            price: t.product.price,
            images: images[0],
            size: t.size[index.value],
        },
    }
    store.commit('cart/set', item)
}

onMounted(() => {
    store.commit[('products/set', [])]
})
</script>

<template>
    <Breadcrumbs :array="['home', 'patterns']" />

    <section v-if="data">
        <article>
            <h1>{{ data.product.name }}</h1>

            <!-- TODO: получить вот эту вот штуку снизу -->
            <Included :array="['Средняя сложность', 'Подробная инструкция', 'Плоттер 600']" />

            <Size :array="data.size" @size="setSize" />

            <h4>{{ data.product.price }} р</h4>

            <!-- TODO: сделать по человечески -->
            <ButtonContext v-if="!cart.find((i) => i.product.id == data.product.id)" icon="icon-arrow-top-right" text="Добавить в корзину" @click="prepare" />
            <ButtonContext v-else icon="icon-arrow-top-right" text="В корзине" @click="$router.push('/cart')" />

            <p>
                <small>Ссылки на скачивание купленной выкройки будут отправлены на ваш электронный адрес, а также скачать выкройки можно в личном кабинете</small>
            </p>

            <h5>Описание</h5>

            <p v-html="data.product.descriptions"></p>

            <!-- TODO: убрать когда будет наполнение -->
            <p>
                Выкройка воротника. Аксессуар съемный – воротник меховой, на подкладке, с застежкой на пату на петли и пуговицы. На фото представлен воротник, сшитый в бюро FADI по
                выкройке №1
            </p>

            <p>
                В образе на фото также представлены: пальто по выкройке №1, водолазка по выкройке №1, брюки по выкройке №1, юбка по бесплатной выкройке №1 Выкройка в вашем заказе
                будет в двух вариантах печати:
            </p>

            <ol>
                <li>Для печати на А4/Letter. Нужно распечатать выкройку на принтере на листах формата А4/Letter, склеить листы и вырезать выкройку.</li>
                <li>Для печати на широкоформатном плоттере.</li>
            </ol>

            <p>Для проверки масштаба печати на А4/Letter используйте Тестовый квадрат, расположенный на первом листе в файле А4/Letter.</p>

            <p>Высота воротника - 21,8 см, ширина воротника - 66,4 см.</p>
        </article>

        <aside>
            <!-- TODO: получить фотки товара -->
            <Swiper :images="images" />
        </aside>
    </section>

    <PopularPatterns v-if="data" text="С этим товаром так же смотрят" :parent="data.product.sub_category[0].category.name" />
</template>

<style lang="scss" scoped>
nav {
    max-width: var(--scheme-max-width);
    padding: 0 var(--scheme-gap);
    width: 100%;
}

section {
    display: grid;
    // gap: var(--scheme-gap);
    width: 100%;

    h1 {
        font: 400 var(--scheme-xm) / 1.42 var(--scheme-font);
    }

    article {
        grid-column: 2 / 3;
        grid-row: 1;
        padding: 0 var(--scheme-gap);

        p {
            small {
                display: block;
                margin: 20px 0;
                opacity: 0.6;
            }
        }

        ol {
            font-size: 24px;
            padding: 0;
            margin: 40px 0;

            li {
                font-size: var(--scheme-s);
                margin: 8px 0 8px 20px;
            }

            h5 {
                color: var(--scheme-v2);
                margin: 40px 0 0;
            }

            p {
                font-size: var(--scheme-s);
                margin: 20px 0;

                b {
                    color: var(--scheme-v2);
                }
            }
        }

        button {
            background-color: var(--scheme-v2);
            color: var(--scheme-v4);
            margin: var(--scheme-gap) auto auto 0;
        }
    }

    aside {
        grid-column: 1 / 2;
        padding: 0 var(--scheme-gap);
    }
}

// базовый breakpoint 1152px
@media all and (max-width: 72em) {
    section {
        gap: var(--scheme-gap);

        article {
            grid-column: 1 / 3;
            grid-row: 2;
        }

        aside {
            grid-column: 1 / 3;
        }
    }
}
</style>
