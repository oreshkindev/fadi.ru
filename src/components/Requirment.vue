<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue'

const checked = ref(false)
</script>

<template>
    <h4>Оставьте заявку</h4>

    <p>И мы подробно расскажем Вам о преимуществах работы с компанией «FАDI06»</p>

    <form @submit.prevent>
        <input type="text" name="name" placeholder="Ваше имя" />

        <input type="tel" name="phone" placeholder="Ваш телефон" />

        <fieldset>
            <input type="checkbox" name="check" />
            <label @click="checked = !checked" for="check" :class="{ checked: checked }"></label>
            <p>Я согласен с политикой конфиденциальности и даю согласие на обработку моих персональных данных</p>
        </fieldset>

        <button type="submit">ОТПРАВИТЬ ЗАЯВКУ</button>
    </form>
</template>

<style lang="scss" scoped>
h4 {
    margin: 80px 0 20px;
}

p {
    max-width: 442px;
}

form {
    gap: 20px;
    margin: 20px 0 0;
    max-width: 400px;

    input {
        display: block;
        border: 1px solid var(--scheme-v3);
        border-radius: 50px;
        margin: 20px 0;
        padding: 4px 40px;
        width: 100%;
    }
    fieldset {
        &:nth-child(3) {
            align-items: flex-start;
            display: flex;
            gap: 10px;
            margin: 20px 0 10px;

            input {
                display: none;
            }

            label {
                border: 1px solid var(--scheme-v3);
                border-radius: 5px;

                cursor: pointer;

                margin: 2px 0 0;
                padding: 10px;

                &.checked {
                    background: var(--scheme-v3);
                }
            }

            p {
                color: var(--scheme-v3);
                font-size: 14px;
                max-width: 389px;
            }
        }

        input {
            border: 1px solid var(--scheme-v2);
            border-radius: 5px;
            height: 52px;
            max-width: 419px;
            padding: 0 20px;
            width: 100%;
        }
    }

    button {
        background-color: var(--scheme-v2);
        color: var(--scheme-v4);
        margin: 20px 0;
        padding: 6px 60px;
    }
}
</style>
