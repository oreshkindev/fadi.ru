<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// components/ui
import Breadcrumbs from '@/components/ui/Breadcrumbs.vue'
import Checkbox from '@/components/ui/Checkbox.vue'
// components/forms
import FormGroup from '@/components/forms/FormGroup.vue'
//
import { defineAsyncComponent, computed, ref } from 'vue'
import { useStore } from 'vuex'
const id = computed(() => store.getters['auth/id'])

// Определяем наше хранилище
const store = useStore()

const PopularPatterns = defineAsyncComponent(() => import('@/components/PopularPatterns.vue'))

let form = ref({
    email: '',
    text: '',
})

const checked = ref(false)

const send = () => {
    store.dispatch('auth/me').then(store.dispatch('support/create', { ...form.value, formtype_ticket: '1', user: id.value }))
}
</script>

<template>
    <Breadcrumbs :array="['home']" />

    <h1>Услуги швейного цеха</h1>

    <section>
        <article>
            <h4>У нас самый лучший цех!</h4>

            <p>Вид лекал и тестовый квадрат по формату совпадают со всеми выкройками FADI, никаких технических особенностей нет.</p>

            <p>
                Определение размера и печать осуществляется в соответствии с инструкциями Grasser. Также вы можете спокойно задавать нам все вопросы по пошиву, мы всегда будем
                отвечать так же внимательно, как обычно! Приятного вам пошива и прекрасного результата!
            </p>

            <p>
                Выкройка плаща. Плащ свободного объема, немного расклешенного силуэта, длиной ниже линии колен, без подкладки. Перед с центральной бортовой застежкой на кнопки или
                пришивные пуговицы и обметанные петли. На детали передней части накладной карман. Спинка со средним швом и расположенным в области талии хлястиком, который немного
                собирает объем спинки.
            </p>

            <h5>Оставьте заявку</h5>

            <p>И мы подробно расскажем Вам о преимуществах работы с компанией «FАDI06»</p>

            <Form-group :data="form" button="Отправить заявку" :checkbox="checked" @prepared="send">
                <slot>
                    <input v-model="form.email" type="text" placeholder="Ваш email" required />
                    <input v-model="form.text" type="text" placeholder="Ваш телефон" required />

                    <Checkbox text="Я согласен с политикой конфиденциальности и даю согласие на обработку моих персональных данных" @checked="checked = !checked" />
                </slot>
            </Form-group>
        </article>

        <picture>
            <!-- <source srcset="@/assets/images/sewing-machines.webp" type="image/webp" /> -->
            <img src="@/assets/images/sewing-machines.webp" type="image/webp" decoding="async" alt="Услуги швейного цеха" loading="lazy" />
        </picture>
    </section>

    <PopularPatterns text="Популярные выкройки" />
</template>

<style lang="scss" scoped>
nav,
h1 {
    max-width: var(--scheme-max-width);
    padding: 0 var(--scheme-gap);
    width: 100%;
}

h5 {
    padding: var(--scheme-gap) 0 0;
}

section {
    display: grid;
    // gap: var(--scheme-gap);
    width: 100%;

    article {
        grid-column: 1 / 2;
        padding: var(--scheme-gap);
    }

    picture {
        grid-column: 2 / 3;
        padding: var(--scheme-gap);

        img {
            max-height: 920px;
        }
    }
}

// базовый breakpoint 1152px
@media all and (max-width: 72em) {
    section {
        article {
            grid-column: 1 / 3;
        }

        picture {
            display: none;
        }
    }
}
</style>
