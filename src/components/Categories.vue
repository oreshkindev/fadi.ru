<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import Modal from '@/components/Modal.vue'

// Определяем наше хранилище
const store = useStore()

const index = ref(3)

// отправляем запрос на получение категорий
const get = store.dispatch('category/get')

const visible = ref(false)

// получаем массив с категориями
const category = computed(() => store.getters['category/data'])

const push = (name) => {
    if (name == 'Бесплатные выкройки') {
        store.dispatch('products/getBy', { price: '0.0' })
        return
    }
    store.dispatch('products/getBy', { category: name })
}
</script>

<template>
    <ul>
        <li
            v-for="(item, i) in category"
            :key="i"
            :class="{ active: index == i }"
            @click="push(item.name), (index = i)"
        >
            {{ item.name }}
        </li>
        <i class="icon-plus" id="show-modal" @click="visible = true"></i>
    </ul>

    <Teleport to="body">
        <Modal
            :visible="visible"
            title="Добавление новой категории товаров"
            subTitle="Вы хотите добавить новую категорию товаров, для этого вам необходимо ввести название категории, придумать заголовок и описание, а так-же добавить товары в
                        соответсвующие разделы"
            @close="visible = false"
        >
            <template #modal-content>
                <form class="modal__content" action="">
                    <input type="text" placeholder="Название категории" required />
                    <input type="text" placeholder="Заголовок" required />
                    <textarea placeholder="Описание" cols="10" rows="5"></textarea>
                </form>
            </template>
            <template #modal-sidebar>
                <picture class="modal__sidebar">
                    <source srcset="@/assets/images/Component7.webp" type="image/webp" />
                    <img
                        src="@/assets/images/Component7.jpg"
                        decoding="async"
                        alt="Пример наполнения"
                        loading="lazy"
                    />
                </picture>
            </template>
        </Modal>
    </Teleport>
</template>

<style lang="scss" scoped>
ul {
    display: grid;
    place-items: baseline;

    li {
        border-radius: 25px;

        cursor: pointer;

        grid-column: 1 / 2;
        padding: 8px 30px;

        &.active {
            background-color: var(--scheme-v2);
        }
    }

    i {
        grid-column: 2 / 3;
        grid-row: 1;
        color: var(--scheme-v2);

        cursor: pointer;

        margin: 0 0 0 auto;
        padding: 8px;
        border-radius: 50%;
        border: 1px solid;

        &:hover {
            background-color: var(--scheme-v2);
            color: var(--scheme-v4);
        }
    }
}

// базовый breakpoint 1152px
@media all and (max-width: 72em) {
}
</style>
