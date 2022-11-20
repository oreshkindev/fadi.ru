<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

const table = [
    {
        image: 'src/assets/images/Rectangle451.avif',
        name: 'Свитер, выкройка Fadi №1',
        date: '11.11.2022',
        price: '150',
        pdf: '/',
    },
    {
        image: 'src/assets/images/Rectangle451.avif',
        name: 'Свитер, выкройка Fadi №1',
        date: '11.11.2022',
        price: '150',
        pdf: '/',
    },
    {
        image: 'src/assets/images/Rectangle451.avif',
        name: 'Свитер, выкройка Fadi №1',
        date: '11.11.2022',
        price: '150',
        pdf: '/',
    },
]

const download = () => {}
</script>

<template>
    <section>
        <ul>
            <li>Фото</li>
            <li>Название</li>
            <li>Дата покупки</li>
            <li>Цена</li>
            <li>Скачать</li>
        </ul>

        <ul v-for="item in table" :key="item">
            <li>
                <img :src="item.image" :alt="item.name" />
            </li>
            <li>{{ item.name }}</li>
            <li>{{ item.date }}</li>
            <li>{{ item.price }}р</li>
            <li>
                <i class="icon-download-solid" @click="download(item.pdf)"></i>
            </li>
        </ul>
    </section>
</template>

<style lang="scss" scoped>
section {
    overflow: auto;
    padding: 0 var(--scheme-gap);

    ul {
        align-items: center;
        border-bottom: 1px solid var(--scheme-v3);
        display: grid;
        gap: var(--scheme-gap);
        grid-template-columns: 105px 1fr minmax(110px, 1fr) 1fr 60px;
        padding: 20px var(--scheme-gap);

        &:first-child {
            border: none;
        }

        &:hover {
            background-color: var(--scheme-v6);
        }

        li {
            &:last-child {
                text-align: center;
            }

            img {
                display: block;
            }

            i {
                cursor: pointer;

                &:hover {
                    color: var(--scheme-v2);
                }
            }
        }
    }

    // базовый breakpoint 1152px
    @media all and (max-width: 72em) {
    }
}
</style>
