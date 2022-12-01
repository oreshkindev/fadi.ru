<script>
import { computed, ref } from 'vue'

export default {
    props: {
        form: {
            type: Object,
            default: () => {},
        },
    },
    setup(props) {
        const check = ref(false)
        // возвращаем подготовленную схему
        const checked = () => {
            check.value = !check.value
        }

        const send = () => {
            // store.dispatch('auth/me').then(store.dispatch('support/create', { ...form.value, formtype_ticket: '1', user: id.value }))
        }

        const empty = computed(() => {
            if (check.value) {
                return check.value === false
            }
            if (props.form.name) {
                return props.form.name.length === 0
            }
            if (props.form.email) {
                return props.form.email.length === 0
            }
            if (props.form.password) {
                return props.form.password.length === 0
            }
            return true
        })

        return {
            check,
            checked,
            empty,
        }
    },
}
</script>

<template>
    <form v-on:submit.prevent>
        <slot :user_requests="form"></slot>

        <fieldset>
            <input type="checkbox" @click="checked" />
            <svg width="32" height="32" viewBox="-6 -6 39 39" aria-hidden="true" focusable="false">
                <polyline points="1,14 12,23 27,5" stroke-width="3"></polyline>
            </svg>

            <span> Я согласен с политикой конфиденциальности и даю согласие на обработку моих персональных данных </span>
        </fieldset>

        <button v-if="!empty" :disabled="empty">Отправить заявку</button>
    </form>
</template>

<style lang="scss" scoped>
form {
    margin: var(--scheme-gap) 0;

    fieldset {
        border: none;
        margin: 20px 0;
        outline: none;
        padding: 0;

        input[type='checkbox'] {
            cursor: pointer;
            height: 1.4em;
            opacity: 0;
            position: absolute;
            width: 1.4em;
        }

        input[type='checkbox']:not(:checked) + svg {
            margin: 0 20px 20px 0;
            polyline {
                stroke: transparent;
            }
        }

        input[type='checkbox']:focus:not(:focus-visible) + svg {
            outline: none;
        }

        span {
            color: var(--scheme-v6);
            font-size: 14px;
            max-width: 340px;
            display: inline-block;
            margin: -6px 0 0;
        }

        svg {
            margin: 0 20px 20px 0;
            border: 1px solid var(--scheme-v3);
            border-radius: 6px;
            height: 1.4em;
            width: 1.4em;
            vertical-align: top;

            polyline {
                fill: none;
                stroke: var(--scheme-v3);
            }

            @media screen and (-ms-high-contrast: active) {
                rect {
                    stroke: windowText;
                }
            }
        }

        @media screen and (-ms-high-contrast: active) {
            input[type='checkbox']:checked ~ svg {
                rect {
                    fill: windowText;
                }

                polyline {
                    stroke: highlight;
                }
            }
        }
    }
}
</style>
