<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import ButtonContext from '@/components/ui/ButtonContext.vue'

import { computed, ref } from "vue";
import { useStore } from 'vuex'
// Определяем наше хранилище
const store = useStore()

const props = defineProps({
    id: {
        type: Object,
        default: () => {},
    },
    // заголовок изображения
    array: {
        type: Array,
        default: () => [],
    },
    lastOrder: {
        type: Object,
        required: true
    }
})

const errors = computed( () => store.getters['order/error'] );

const isLastOrderPendingOrReject = computed( () => props.lastOrder?.status !== 'Успешно');
const lastOrderRejected = computed( () => props.lastOrder?.status == 'Отменен');

const createOrderButttonText = computed( () => {
    return lastOrderRejected.value ? 'Повторить оплату' : 'Оплатить заказ';
})
const isCreateOrderButtonDisabled = computed( () => props.lastOrder?.status == 'Ожидает оплаты' );

const price = () => {
    return props.array.reduce((acc, curr) => {
        return acc + curr.product.price
    }, 0)
}
const prepare = async () => {
    const sku_product = props.array.reduce((acc, item) => {
        let key = acc.find((i) => i.sku_product)
        if (key != null) {
            key.sku_product.push(item.sku_product)
        } else {
            acc.push({
                sku_product: [item.sku_product],
            })
        }
        return acc
    }, [])
    
   const orderData = await store.dispatch('order/post', { user: props.id.user, product_size: sku_product[0].sku_product });
   if (errors.value.length == 0) {
    const paymentRequest = await store.dispatch('order/createPaymentRequest', orderData.id);
    if (errors.value.length == 0) {
        try {
            const paymentObject = JSON.parse(paymentRequest.replace(/\g/, ''));
            if ('errorMessage' in paymentObject) {
                console.error(paymentObject);
            } else {
                window.open(paymentObject.formUrl, '_blank');
                await store.dispatch('order/get');
            }
        } catch (error) {
            console.log(error)
        }
    }
   }
} 
</script>

<template>
    <ul>
        <li>Итого</li>
        <li>{{ price() }} р</li>
        <li>Товары, {{ array.length }}шт</li>
        <li>{{ price() }} р</li>
        <li>Скидка 0%</li>

        <p>
            Оплата
            <span>Картой</span>
        </p>
        <ButtonContext :disabled="isCreateOrderButtonDisabled" icon="icon-arrow-top-right" :text="createOrderButttonText" size="20px" @click="prepare" />
        <span
            v-if="isLastOrderPendingOrReject"
            :class="{ pending: isCreateOrderButtonDisabled, rejected: lastOrderRejected }"
        >
            {{ lastOrder?.status }}
        </span>
    </ul>
</template>

<style lang="scss" scoped>
ul {
    border: 1px solid var(--scheme-v3);
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr auto;
    padding: var(--scheme-gap);

    li {
        font-size: 20px;
        font-weight: 700;
        white-space: nowrap;

        &:nth-child(n + 3) {
            font-size: var(--scheme-s);
            font-weight: 400;
        }
    }

    p {
        grid-column: 1 / 3;

        span {
            color: var(--scheme-v2);
            margin: 0 0 0 10px;
        }
    }

    // базовый breakpoint 1152px
    @media all and (max-width: 72em) {
        grid-column: 1 / 3;
    }

    span {

        grid-column: 1/3;
        text-align: center;

        &.pending {
            color: rgba($color: orange, $alpha: 0.7);
        }
        &.rejected {
            color:  rgba($color: red, $alpha: 0.7);
        }
    }
}

button {
    background-color: var(--scheme-v2);
    color: var(--scheme-v4);
    grid-column: 1 / 3;
    margin: var(--scheme-gap) auto;

    &:disabled {
        color: var(--scheme-v3);
        background-color: transparent;
		cursor: default;
    }
}
</style>
