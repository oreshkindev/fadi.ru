<script setup>
import FormGroup from '../../components/forms/FormGroup.vue'

import {  ref, computed, } from 'vue'

import { useStore } from 'vuex'

const store = useStore()

const categories = computed(() => store.getters['category/data'])

const form = ref(null);
const filePicker = ref(null);
const isFilePicked = ref(false);

const currentCategory = ref(null)

const mutationType = ref('create')

const handleUpdateCategory = async (type) => {
    switch (type) {
        case 'create':
            await store.dispatch('admin/createCategory', categoryData)
            break
        case 'update':
            await store.dispatch('admin/updateCategory', { ...categoryData, id: currentCategory.value })
            break
        case 'delete':
            await store.dispatch('admin/deleteCategory', currentCategory.value)
            break
    }
}

const buttonText = computed(() => (mutationType.value === 'update' ? 'Изменить' : 'Создать'))


const handleSendFile = () => {
  const fileData = new FormData(form.value.$el);
  store.dispatch('admin/createProductsFromFile', fileData);
};
const handleChangeFile = () => {
  isFilePicked.value = filePicker.value.files.length !== 0;
}

</script>

<template>
    <section>
        <FormGroup
            @prepared="handleSendFile"
            :button="buttonText"
            :checkbox="isFilePicked"
            ref="form"
        >
            <input type="file"  name="file" ref="filePicker" @change="handleChangeFile"/>
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
                v-for="category in categories"
                :key="category.id"
                @click="currentCategory = category.id"
            >
                {{ category.name }}
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
