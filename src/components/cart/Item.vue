<script>
import { useStore } from 'vuex'

export default {
    props: {
        obj: {
            type: Object,
            default: () => {},
        },
    },
    setup() {
        const store = useStore()

        const removeFromCart = (id) => {
            // комитим
            store.commit('cart/removeFromCart', id)
        }

        return {
            removeFromCart,
        }
    },
}
</script>

<template>
    <article>
        <picture>
            <img src="@/assets/images/blank426.jpg" alt="" />
        </picture>
        <ul>
            <li>{{ obj.product.name }}</li>
            <li>{{ obj.product.price }} р</li>
            <li>размер {{ obj.size }}</li>
            <li @click="removeFromCart(obj.product.id)">
                <i class="icon-delete"></i>
            </li>
        </ul>
    </article>
</template>

<style lang="scss" scoped>
article {
    border: 1px solid var(--scheme-v6);
    display: inherit;
    gap: 20px;
    grid-template-columns: auto 1fr;

    picture {
        img {
            height: 241px;
            width: 200px;
        }
    }

    ul {
        display: inherit;
        grid-template-columns: 1fr auto;
        padding: var(--scheme-gap);
        padding-left: 20px;

        li {
            &:first-child,
            &:nth-child(2) {
                font-size: var(--scheme-font-22);
            }
            i {
                background-color: var(--scheme-v5);
                border-radius: 50px;
                color: var(--scheme-v6);
                cursor: pointer;
                font-size: var(--scheme-font-22);
                padding: 10px;
                &:hover {
                    background-color: var(--scheme-v3);
                    color: var(--scheme-v2);
                }
            }
        }
    }
}

// базовый breakpoint 1152px
@media all and (max-width: 42em) {
    article {
        grid-template-columns: 1fr;
        padding: 0;

        picture {
            img {
                object-fit: cover;
                width: 100%;
            }
        }

        ul {
            gap: 20px;
        }
    }
}
</style>
