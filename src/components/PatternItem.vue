<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Image from '@/components/Image.vue'

import { computed } from "vue";
import { useStore } from "vuex";

const props = defineProps({
    // заголовок изображения
    images: {
        type: String,
    },
    // заголовок карточки
    data: {
        type: Object,
        default: () => {},
    },
})
const store = useStore();

const user = computed( () => store.getters['auth/userData'] );
const productLink = computed(() => {
    console.log(user.role)
    if (user.value.role === 'DefaultUser') {
        return `/patterns/${props.data.product.sub_category[0].category.slug}/?name=${props.data.product.name}`
    }
    return `/tmp/${props.data.product.sub_category[0].category.slug}/?name=${props.data.product.name}`
})
</script>

<template>
    <article>
        <Image :srcPath="images" :text="`Картинка ${data.product?.name}`" />

        <p>
            {{ data.product?.name }}
            <router-link :to="productLink">Смотреть выкройку</router-link>
        </p>
    </article>
</template>

<style lang="scss" scoped>
a {
    border-bottom: 2px solid transparent;
    color: var(--scheme-v2);
    display: block;
    margin: 10px 0 0;
    width: max-content;

    &:hover {
        border-color: var(--scheme-v2);
    }
}
</style>
