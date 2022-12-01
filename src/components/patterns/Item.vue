<script>
export default {
    props: {
        data: {
            type: Object,
            default: () => {},
        },
        category: {
            type: String,
            default: '',
        },
        redactor: {
            type: Boolean,
        },
    },
    setup(props) {
        const image = import.meta.env.VITE_DIR + `/images/images/` + `Rectangle452`

        return {
            image,
        }
    },
}
</script>

<template>
    <!-- <pre> {{ data }}</pre> -->
    <article>
        <picture>
            <source :srcset="`${image}.webp`" type="image/webp" />
            <img :src="`${image}.jpg`" decoding="async" :alt="data.product.name" loading="lazy" />
        </picture>

        <p>
            {{ data.product.name }}
        </p>

        <ul>
            <span>Размер</span>
            <li v-for="item in data.size">{{ item }}</li>
        </ul>

        <router-link
            :to="{
                name: redactor ? 'product/edit' : 'product',
                params: { category: category, product: data.product.slug },
            }"
            >Перейти к товару</router-link
        >
    </article>
</template>

<style lang="scss" scoped>
article {
    picture {
        img {
            width: 100%;
            display: block;
        }
    }
}

p {
    padding: 0;
}

ul {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 20px 0;
    place-items: center;

    li {
        background-color: var(--scheme-v5);
        cursor: default;
        padding: 4px 0;
        min-width: 35px;
        text-align: center;
    }
}

a {
    border-bottom: 2px solid transparent;
    color: var(--scheme-v3);

    &:hover {
        border-color: var(--scheme-v3);
    }
}
</style>
