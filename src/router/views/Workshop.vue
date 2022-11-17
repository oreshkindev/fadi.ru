<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// components/ui
import Breadcrumbs from '@/components/ui/Breadcrumbs.vue'
import Checkbox from '@/components/ui/Checkbox.vue'
// components/forms
import FormGroup from '@/components/forms/FormGroup.vue'
//
import { defineAsyncComponent, ref } from 'vue'

const PopularPatterns = defineAsyncComponent(() => import('@/components/PopularPatterns.vue'))

// TODO: доставать из состояния
// получаем массив с выкройками
const array = [
    {
        id: 1,
        image: 'Rectangle120',
        text: 'Выкройка фади № 1',
        doc: '#',
        category: 1,
    },
    {
        id: 2,
        image: 'Rectangle121',
        text: 'Выкройка фади № 2',
        doc: '#',
        category: 2,
    },
    {
        id: 3,
        image: 'Rectangle450',
        text: 'Выкройка фади № 3',
        doc: '#',
        category: 4,
    },
    {
        id: 4,
        image: 'Rectangle451',
        text: 'Выкройка фади № 4',
        doc: '#',
        category: 3,
    },
    {
        id: 5,
        image: 'Rectangle452',
        text: 'Выкройка фади № 5',
        doc: '#',
        category: 4,
    },
    {
        id: 6,
        image: 'Rectangle453',
        text: 'Выкройка фади № 6',
        doc: '#',
        category: 1,
    },
]

const form = ref({
    name: '',
    phone: '',
})

const checked = ref(false)

const send = (r) => {
    console.log(r)
}
</script>

<template>
    <section>
        <Breadcrumbs />

        <h1>Услуги швейного цеха</h1>

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
                    <input v-model="form.name" type="text" placeholder="Ваше имя" required />
                    <input v-model="form.phone" type="text" placeholder="Ваш телефон" required />

                    <Checkbox text="Я согласен с политикой конфиденциальности и даю согласие на обработку моих персональных данных" @checked="checked = !checked" />
                </slot>
            </Form-group>
        </article>

        <picture>
            <!-- <source srcset="@/assets/images/sewing-machines.webp" type="image/webp" /> -->
            <img src="@/assets/images/sewing-machines.avif" decoding="async" alt="Услуги швейного цеха" loading="lazy" />
        </picture>
    </section>

    <PopularPatterns :array="array" text="Популярные выкройки" />
</template>

<style lang="scss" scoped>
section {
    display: grid;
    gap: var(--scheme-offset);

    h1 {
        grid-column: 1 / 3;
    }

    article {
        grid-column: 1 / 2;

        // ограничиваем ширину контейнера
        // p {
        //     max-width: 660px;
        // }

        h5 {
            margin: 50px 0 0;
        }
    }

    picture {
        grid-column: 2 / 3;

        img {
            max-width: 400px;
        }
    }

    // базовый breakpoint 1152px
    @media all and (max-width: 72em) {
        article {
            grid-column: 1 / 3;

            // если ограничили ширину выше
            // p {
            //     max-width: 100%;
            // }
        }

        picture {
            display: none;
        }
    }
}
</style>
