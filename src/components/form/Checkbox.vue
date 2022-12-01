<script>
export default {
    emits: ['checked'],
    setup(context, { emit }) {
        const prepare = () => {
            emit('checked')
        }
        return { prepare }
    },
}
</script>

<template>
    <fieldset>
        <input type="checkbox" v-on:click="prepare" />
        <svg width="32" height="32" viewBox="-6 -6 39 39" aria-hidden="true" focusable="false">
            <polyline points="1,14 12,23 27,5" stroke-width="3"></polyline>
        </svg>

        <span> Я согласен с политикой конфиденциальности и даю согласие на обработку моих персональных данных </span>
    </fieldset>
</template>

<style lang="scss" scoped>
fieldset {
    border: none;
    margin: 20px 0;
    outline: none;
    padding: 0;

    input[type='checkbox'] {
        cursor: pointer;
        height: 1.4em;
        margin: 0;
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
</style>
