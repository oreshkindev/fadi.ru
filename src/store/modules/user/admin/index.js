import axios from '@/common/axios'

// определяем состояние
const state = () => ({
    error: [],
    data: [],
})

// определяем геттеры
const getters = {
    data: (state) => state.data,
    error: (state) => state.error,
}

// определяем методы
const actions = {
    async createCategory({ commit }, categoryData) {
        /*
      categoryData = {
      name: string;
      название созаваемой категории

      slug: string;
      короткое имя, создаваемой категории, на латинице

      }
      */

        try {
            const response = await axios.post('/category/', {
                name: categoryData.name,
                slug: categoryData.slug,
            })
            const newCategory = { id: response.data.id, name: response.data.name, slug: response.data.slug, children: [] }

            commit('category/addCategory', newCategory)
        } catch (error) {
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

    async updateCategory({ commit }, updatedCategory) {
        try {
            await axios.put(`/category/${updatedCategory.id}`, {
                name: updatedCategory.name,
                slug: updatedCategory.slug,
                children: updatedCategory.children.length ? updatedCategory.children : [],
            });

            
        } catch (error) {
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
    error: (state, error) => {
        state.error = error
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
