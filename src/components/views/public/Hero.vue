<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { onMounted, onUnmounted, ref } from 'vue'
// подключаем элементы UI
import NamedButton from '@/components/ui/NamedButton.vue'

//  определяем ширину контейнера
let sectionWidth = ref(1480)
//  определяем контейнер
let section = ref()

const resizeHandler = () => {
    //  отслеживаем изменений ширины
    sectionWidth.value = section.value?.offsetWidth
}

onMounted(() => {
    //  устанавливаем значение по умолчанию
    window.addEventListener('load', resizeHandler)

    // слушаем
    window.addEventListener('resize', resizeHandler)
})

onUnmounted(() => window.removeEventListener('resize', resizeHandler))
</script>

<template>
    <section ref="section">
        <span>Выкройки</span>
        <span>для любой</span>

        <h1>Fadi — онлайн-магазин готовых выкроек. Здесь вы найдёте образцы современной и удобной одежды для всей семьи. Всё уже готово. Нужно всего лишь взять и использовать</h1>

        <NamedButton icon="icon-telegram" size="1.2em" text="Мы в Telegram" />
        <span>одежды</span>
    </section>
</template>

<style scoped lang="scss">
section {
    --size: v-bind((sectionWidth / 12) + `px`);

    display: grid;
    padding: var(--scheme-offset) var(--scheme-gap);
    place-items: center;

    h1 {
        font: 400 var(--scheme-s) / 1.2 var(--scheme-font);

        grid-column: 5 / 8;
        margin: 0 auto 0 0;
        max-width: 482px;
        padding: 0 0 0 20px;
        text-transform: none;
    }

    span {
        font: 700 var(--size) / 1 var(--scheme-font);

        text-transform: uppercase;

        &:first-child {
            grid-column: 3 / 8;
            margin: 0 0 0 130px;
        }

        &:nth-child(2) {
            grid-column: 1 / 5;
            margin: 0 0 0 auto;
            white-space: nowrap;
        }

        &:last-child {
            grid-column: 5 / 8;
            margin: 0 auto 0 -160px;
        }
    }

    button {
        background-color: var(--scheme-v5);
        color: var(--scheme-v4);
        grid-column: 1 / 4;
        margin: 0 auto 0 0;
        position: relative;

        &::before {
            content: '';
            border: 2px solid var(--scheme-v1);
            border-radius: 50px;
            width: 100%;
            position: absolute;
            height: 100%;
            top: -6px;
            left: -6px;
            padding: 4px;
        }
    }

    // базовый breakpoint 1152px
    @media all and (max-width: 72em) {
        gap: 20px;

        h1 {
            font: 400 var(--scheme-s) / 1.2 var(--scheme-font);

            grid-column: 1 / 8;
            margin: var(--scheme-gap) auto;
            order: 1;
            padding: 0;
        }

        span {
            &:first-child {
                grid-column: 1 / 8;
                margin: auto;
            }

            &:nth-child(2) {
                grid-column: 1 / 8;
                margin: auto;
            }

            &:last-child {
                grid-column: 1 / 8;
                margin: auto;
            }
        }

        button {
            grid-column: 1 / 8;
            margin: 40px auto;
            order: 1;
        }
    }
}
</style>
