<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// ui
import Breadcrumbs from '@/components/ui/Breadcrumbs.vue'
import Size from '@/components/ui/Size.vue'
import Included from '@/components/ui/Included.vue'
import ButtonContext from '@/components/ui/ButtonContext.vue'
import Swiper from '@/components/Swiper.vue'

import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { onMounted, computed, defineAsyncComponent } from 'vue'

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
const images = ['Rectangle452', 'Rectangle121', 'Rectangle451', 'Rectangle453', 'Rectangle90', 'Rectangle89']

// получаем массив с товаром
const product = computed(() => store.getters['products/data'])

// отправляем форму
const get = () => {
    store.dispatch('products/getOne', route.params.id)
}

onMounted(() => {
    get()
})
</script>

<template>
    <section>
        <Breadcrumbs :crumbs="['выкройки', 'для женщин', 'свитер']" />

        <!-- TODO: получить фотки товара -->
        <Swiper :images="images" />

        <article>
            <h1>{{ product[0]?.name }}</h1>

            <!-- TODO: получить вот эту вот штуку снизу -->
            <Included :array="['Средняя сложность', 'Подробная инструкция', 'Плоттер 600']" />

            <Size :array="product[0]?.sizes" />

            <!-- TODO: как получить стоимость? -->
            <h4>150 р</h4>

            <ButtonContext icon="icon-arrow-top-right" text="Добавить в корзину" />

            <p>
                <small>Ссылки на скачивание купленной выкройки будут отправлены на ваш электронный адрес, а также скачать выкройки можно в личном кабинете</small>
            </p>

            <h5>Описание</h5>

            {{ product[0]?.descriptions }}

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

        <PopularPatterns text="С этим товаром так же смотрят" />
    </section>
</template>

<style lang="scss" scoped>
section {
    display: grid;
    gap: var(--scheme-gap);

    h1 {
        font: 400 var(--scheme-xm) / 1.42 var(--scheme-font);
    }

    section {
        border-top: 1px solid var(--scheme-v3);
        grid-column: 1 / 3;
        padding: var(--scheme-gap) 0;
        width: 100%;
    }

    div {
        grid-column: 1 / 2;
    }

    article {
        p {
            small {
                display: block;
                margin: 20px 0;
                opacity: 0.6;
            }
        }

        h5 {
            margin: 40px 0;
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
    }

    button {
        background-color: var(--scheme-v2);
        color: var(--scheme-v4);
        margin: var(--scheme-gap) auto auto 0;
    }

    @media all and (max-width: 60em) {
        article,
        div {
            grid-column: 1 / 3;
        }
    }
}
</style>
