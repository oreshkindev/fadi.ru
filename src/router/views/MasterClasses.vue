<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Backward from '@/components/ui/Backward.vue'
import PopularShowcases from '@/components/PopularShowcases.vue'
import SearchBar from '@/components/ui/SearchBar.vue'
</script>

<template>
    <section>
        <Backward />

        <h1>
            Мастер-классы <br />
            от опытного наставника
        </h1>

        <SearchBar />

        <p>
            Плащ свободного объема, немного расклешенного силуэта, длиной ниже линии колен, без подкладки. Перед с центральной бортовой застежкой на кнопки или пришивные пуговицы и
            обметанные петли. На детали передней части накладной карман. Спинка со средним швом и расположенным в области талии хлястиком, который немного собирает объем спинки.
        </p>

        <PopularShowcases />
    </section>
</template>

<style lang="scss" scoped>
section {
    display: grid;
    gap: var(--scheme-gap);

    h1 {
        direction: rtl;
        grid-column: 1 / 3;
        text-transform: uppercase;
    }

    form {
        grid-column: 1 / 3;
    }

    p {
        grid-column: 1 / 3;
    }

    section {
        grid-column: 1 / 3;
    }

    @media all and (max-width: 60em) {
        h1 {
            font-size: var(--scheme-m);
            margin: 0;
        }
    }
}
</style>
