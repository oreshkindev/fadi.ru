<script>
import { useStore } from 'vuex'
import { ref } from 'vue'
import Bcrumb from '@/components/Bcrumb.vue'
import Group from '@/components/form/Group.vue'

export default {
    components: { Bcrumb, Group },
    setup() {
        // Определяем наше хранилище
        const store = useStore()

        const supportForm = ref({
            email: '',
            text: '',
            type_ticket: 1,
            user: 1,
        })

        const prepareForm = () => {
            store.dispatch('support/createTicket', supportForm.value).then((supportForm.value.text = ''))
        }
        return { supportForm, prepareForm }
    },
}
</script>

<template>
    <Bcrumb :array="['home']" />

    <h1>Услуги швейного цеха</h1>

    <section>
        <article>
            <h4>У нас самый лучший цех!</h4>

            <p>Вид лекал и тестовый квадрат по формату совпадают со всеми выкройками FADI, никаких технических особенностей нет.</p>

            <p>
                Определение размера и печать осуществляется в соответствии с инструкциями Grasser. Также вы можете спокойно задавать нам все вопросы по пошиву,
                мы всегда будем отвечать так же внимательно, как обычно! Приятного вам пошива и прекрасного результата!
            </p>

            <p>
                Выкройка плаща. Плащ свободного объема, немного расклешенного силуэта, длиной ниже линии колен, без подкладки. Перед с центральной бортовой
                застежкой на кнопки или пришивные пуговицы и обметанные петли. На детали передней части накладной карман. Спинка со средним швом и расположенным
                в области талии хлястиком, который немного собирает объем спинки.
            </p>

            <br />
            <br />

            <h4>Оставьте заявку</h4>
            <p>И мы подробно расскажем Вам о преимуществах работы с компанией «FАDI06»</p>

            <form @submit.prevent="prepareForm">
                <label> Ваша почта </label>
                <input v-model="supportForm.email" type="text" />

                <textarea v-model="supportForm.text" rows="6" placeholder="Не более 120 символов.."></textarea>

                <button type="submit" :disabled="supportForm.text.length > 120">Отправить</button>
            </form>
        </article>

        <picture>
            <source srcset="@/assets/images/sewing-machines.webp" type="image/webp" />
            <img src="@/assets/images/sewing-machines.jpg" decoding="async" alt="Услуги швейного цеха" />
        </picture>
    </section>
</template>

<style lang="scss" scoped>
h1 {
    margin: auto auto var(--scheme-offset);
    max-width: var(--scheme-width);
    padding: 0 var(--scheme-gap);
}

section {
    display: grid;
    margin: auto;
    max-width: var(--scheme-width);
    padding: var(--scheme-gap);

    article {
        grid-column: 1 / 2;
        padding: 0 var(--scheme-gap) 0 0;
    }

    picture {
        grid-column: 2 / 3;

        img {
            max-height: 920px;
        }
    }
}

form {
    display: grid;
    input {
        margin: 10px 0 20px;
    }

    textarea {
        border: 1px solid var(--scheme-v3);
        border-radius: 10px;
        box-sizing: border-box;
        font-family: inherit;
        max-width: 400px;
        outline: none;
        padding: 20px;
    }

    button {
        display: block;
        margin: var(--scheme-gap) auto 0 0;
    }
}

// базовый breakpoint 1152px
@media all and (max-width: 72em) {
    section {
        article {
            grid-column: 1 / 3;
            padding: 0;
        }

        picture {
            display: none;
        }
    }
}
</style>
