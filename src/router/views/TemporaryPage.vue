<script setup>
import FormGroup from '../../components/forms/FormGroup.vue'

import {  ref, } from 'vue'

import { useStore } from 'vuex'

const store = useStore();

const form = ref(null);

const size = ref('');

const sizes = ref([]);

const currentSize = ref(null);

store.dispatch('admin/fetchSizes').then( (fetchedSizes) => {
   
    sizes.value = fetchedSizes;
});


const handleCreateSize = () => {
 
  store.dispatch('admin/deleteSize', currentSize.value);
};


</script>

<template>
    <section>
        <FormGroup
            @prepared="handleCreateSize"
            button="Создать"
            :checkbox="Boolean(size.length)"
            ref="form"
        >
            <input type="text" v-model="size"/>
        </FormGroup>

        <!-- <div class="controls">
            <label for="createRadio">Создать</label>
            <input type="radio" v-model="mutationType" value="create" id="createRadio" />
            <label for="updateRadio">Изменить</label>
            <input type="radio" v-model="mutationType" value="update" id="updateRadio" />
            <label for="deleteRadio">Удалить</label>
            <input type="radio" v-model="mutationType" value="delete" id="deleteRadio" />
        </div> -->

        <ul>
            <li
                v-for="size in sizes"
                :key="size.id"
                @click="currentSize = size.id"
            >
                {{ size.name }}
            </li>
        </ul>
    </section>
</template>

<style scoped lang="scss">
section {
    display: grid;
    gap: 30px;
    form {
        margin: 0 0 30px 0;
        grid-column: 2/3;
    }
    ul {
        grid-column: 1/2;
        grid-row: 1;
        display: flex;
        flex-wrap: wrap;
        max-width: 300px;
        li {
            background-color: var(--scheme-v2);
            border-radius: 30px;
            padding: 10px;
            color: var(--scheme-v4);
            margin: 0 0 10px 0;
            &:last-child {
                margin: 0;
            }
        }
    }
}
.controls {
    display: grid;
    grid-column: 2/3;
    label {
        grid-column: 1/2;
    }
    input {
        grid-column: 2/3;
        margin: 0 0 20px 0;
    }
}
</style>
