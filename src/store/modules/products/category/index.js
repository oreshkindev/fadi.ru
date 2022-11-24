import axios from '@/common/axios'

// определяем состояние
const state = () => ({
    data: [],
    name: '',
})

// определяем геттеры
const getters = {
    data: (state) => state.data,
    name: (state) => state.name,
    categoryByName: (state) => (categoryName) => {
        const matchedCategory = state.data.find( ({ name }) => name == categoryName);
        return matchedCategory;
    },
}

// определяем методы
const actions = {
    async get({ commit }) {
        try {
            const response = await axios.get('/category/')

            commit('set', response.data)
        } catch (error) {
            console.log(error)
            if (error.response) {
                // вернулась ошибка (5xx, 4xx)
                commit('error', error.response.data)

                // прячем ошибку через 5 секунд
                setTimeout(() => {
                    commit('error', [])
                }, 5000)
            }
        }
    },
}

// определяем мутации
const mutations = {
    set: (state, data) => {
        state.data = data
    },
    addCategory: (state, newCategory) => {
        const categoriesCopy = JSON.parse(JSON.stringify(state.data));
        if (newCategory.parent) {
            const parentCategory = categoriesCopy.find( ({ id }) => id == newCategory.id);
            
        }
        categoriesCopy.push(newCategory);
        state.data = categoriesCopy;
    },
    updateCategory: (state, updatedCategory) => {
        const categoriesCopy = JSON.parse(JSON.stringify(state.data));
        const updatedCategoryIndex = categoriesCopy.findIndex( categoryItem => categoryItem.id == updatedCategory.id);
        updatedCategoryIndex != -1 ? categoriesCopy[updatedCategoryIndex] = updatedCategory : '';
        state.data = categoriesCopy;
    },
    deleteCategory: (state, deletedCategoryId) => {
        const categoriesCopy = JSON.parse(JSON.stringify(state.data));
        const updatedCategories = categoriesCopy.filter( categoryItem => categoryItem.id !== deletedCategoryId);

        state.data = updatedCategories;
    },
    push: (state, id) => {
        state.id = id
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
