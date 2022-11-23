<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { useStore } from 'vuex'
import { prettyDate } from '@/common/helper/processStrings'

const store = useStore()

const props = defineProps({
    // массив заказов
    array: {
        type: Object,
        default: () => [],
    },
})

const get = (id) => {
    const response = store.dispatch('products/getBy', id)
    console.log(response)
    return response
}

const download = () => {}
</script>

<template>
    <section>
        <ul>
            <li>Фото</li>
            <li>Название</li>
            <li>Дата покупки</li>
            <li>Цена</li>
            <li>Статус</li>
            <li>Скачать</li>
        </ul>

        <ul v-for="item in array" :key="item">
            <li>
                <img src="@/assets/images/Rectangle451.webp" type="image/webp" decoding="async" loading="lazy" :alt="item.name" />
            </li>
            <li>{{ item.info_order[0].name }}</li>
            <li>{{ prettyDate(item.created) }}</li>
            <li>{{ item.info_order[0].price }}р</li>
            <li>{{ item.status }}</li>
            <li>
                <i class="icon-download-solid" @click="download()"></i>
            </li>
        </ul>
    </section>
</template>

<style lang="scss" scoped>
section {
    overflow: auto;
    padding: 0 var(--scheme-gap);

    ul {
        align-items: center;
        border-bottom: 1px solid var(--scheme-v3);
        display: grid;
        gap: var(--scheme-gap);
        grid-template-columns: 105px 1fr minmax(110px, 1fr) 100px 1fr 60px;
        padding: 20px var(--scheme-gap);

        &:first-child {
            border: none;
        }

        &:hover {
            background-color: var(--scheme-v6);
        }

        li {
            &:last-child {
                text-align: center;
            }

            img {
                display: block;
            }

            i {
                cursor: pointer;

                &:hover {
                    color: var(--scheme-v2);
                }
            }
        }
    }

    // последний breakpoint для Samsung S10 360x760px
    @media all and (max-width: 42em) {
        ul {
            width: fit-content;
        }
    }
}
</style>
