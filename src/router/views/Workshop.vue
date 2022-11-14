<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Backward from '@/components/ui/Backward.vue'
import PopularPatterns from '@/components/PopularPatterns.vue'
import Requirment from '@/components/Requirment.vue'
</script>

<template>
    <section>
        <Backward />

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

            <Requirment />
        </article>
        <img src="https://dummyimage.com/1200x2880/" alt="" />
    </section>

    <PopularPatterns />
</template>

<style lang="scss" scoped>
section {
    display: grid;
    gap: var(--scheme-gap);

    h1 {
        grid-column: 1 / 3;
        margin: 0 auto 100px;
        text-transform: uppercase;
    }

    article {
        grid-column: 1 / 2;
        padding: 0 60px 0 0;

        p {
            margin: 20px 0;
        }
    }

    img {
        grid-column: 2 / 3;
        width: 100%;
    }

    @media all and (max-width: 60em) {
        h1 {
            font-size: var(--scheme-m);
            margin: 0;
        }

        article {
            grid-column: 1 / 3;
            padding: 0;
        }

        img {
            grid-column: 1 / 3;
        }
    }
}
</style>
