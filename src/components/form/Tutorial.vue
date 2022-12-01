<script>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'

import generateUrl from '@/common/helper/generateUrl'

export default {
    emits: ['close'],
    setup(props, { emit }) {
        // Определяем наше хранилище
        const store = useStore()
        // Определяем роутер
        const route = useRoute()

        const category = computed(() => store.getters['category/data'])

        const sizes = computed(() => store.getters['sizes/data'])

        const fCategory = ref({
            name: '',
            slug: '',
            parent: null,
        })

        const step = ref(false)

        const fProduct = ref({
            name: '',
            category: [],
            price: '',
            descriptions: '',
            sizes: [],
        })

        const nextStep = () => {
            const getSizes = store.dispatch('sizes/get')

            if (!!fCategory.value.name.length) {
                fCategory.value.slug = generateUrl(fCategory.value.name)
                // TODO:
                // console.log(fCategory.value)
                store.dispatch('category/create', fCategory.value)
            }
            step.value = true
        }

        const create = () => {
            store.dispatch('products/create', fProduct.value)
            emit('close')
        }
        return { nextStep, fCategory, fProduct, step, category, sizes, create }
    },
}
</script>

<template>
    <dialog>
        <section v-if="!step">
            <i class="icon-plus" @click="$emit('close')"></i>
            <article>
                <h3>Добавление новой категории</h3>
                <p>
                    Вы хотите добавить новую категорию товаров, для этого вам необходимо ввести название категории, придумать заголовок и описание, а так-же
                    добавить товары в соответсвующие разделы
                </p>

                <form onsubmit.prevent>
                    <label>Название категории</label>
                    <input v-model="fCategory.name" type="text" placeholder="Женские" />
                </form>
            </article>

            <picture>
                <source srcset="@/assets/images/Component7.webp" type="image/webp" />
                <img src="@/assets/images/Component7.jpg" decoding="async" alt="Создание категории" loading="lazy" />
            </picture>

            <button @click="nextStep" v-text="!fCategory.name.length ? `Пропустить шаг` : `Далее`"></button>

            <span>1 / 3</span>
        </section>

        <section v-else>
            <i class="icon-plus" @click="$emit('close')"></i>
            <article>
                <h3>Добавление товара</h3>
                <p>
                    Вы хотите добавить новую категорию товаров, для этого вам необходимо ввести название категории, придумать заголовок и описание, а так-же
                    добавить товары в соответсвующие разделы
                </p>

                <form onsubmit.prevent>
                    <label>Название товара</label>
                    <input v-model="fProduct.name" type="text" placeholder="Платье вечернее" />

                    <label>Категория товара</label>
                    <ul>
                        <li v-for="(item, index) in category" :key="index" v-on:click="fProduct.category = [item.id]">
                            {{ item.name }}
                        </li>
                    </ul>

                    <label>Стоимость товара</label>
                    <input v-model="fProduct.price" type="number" placeholder="150" />

                    <label>Размер товара</label>
                    <ul>
                        <li v-for="(item, index) in sizes" :key="index" v-on:click="fProduct.sizes = [item.id]">
                            {{ item.name }}
                        </li>
                    </ul>
                </form>
            </article>

            <picture>
                <source srcset="@/assets/images/Component8.webp" type="image/webp" />
                <img src="@/assets/images/Component8.jpg" decoding="async" alt="Создание товара" loading="lazy" />
            </picture>

            <button @click="create">Продолжить</button>

            <span>2 / 3</span>
        </section>
    </dialog>
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
        background-color: var(--scheme-v2);
        box-sizing: border-box;
        display: inherit;
        gap: var(--scheme-gap);
        grid-template-columns: repeat(2, auto);
        padding: 80px var(--scheme-gap) var(--scheme-gap);
        place-items: center;
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
                width: 500px;
                object-fit: contain;
            }
        }

        button {
            margin: 0 auto 0 0;
        }

        span {
            margin: 0 0 0 auto;
        }
    }
}

// базовый breakpoint 1152px
@media all and (max-width: 72em) {
    dialog {
        section {
            grid-template-columns: 1fr;
            overflow: auto;
            picture {
                display: none;
            }
        }
    }
}
</style>
