import axios from '@/common/axios'
import axiosOriginal from 'axios'



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
            const newCategory = {
                id: response.data.id,
                name: response.data.name,
                slug: response.data.slug,
                children: [],
            }

            commit('category/addCategory', newCategory, { root: true })
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
        /* updatedCategory = {
            id: number;
            идентификатор обновляемой категории
            
            name: string;
            название созаваемой категории
      
            slug: string;
            короткое имя, создаваемой категории, на латинице
            } */

        try {
            
            await axios.put(`/category/${updatedCategory.id}/`, {
                name: updatedCategory.name,
                slug: updatedCategory.slug,
                children: updatedCategory?.children?.length ? updatedCategory.children : [],
            })

            commit('category/updateCategory', updatedCategory, { root: true })
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

    async deleteCategory({ commit }, deletedCategoryId) {
        /* deletedCategoryId: number;
            идентификатор удаляемой категории
         */
        try {
            await axios.delete(`/category/${deletedCategoryId}/`)
            commit('category/deleteCategory', deletedCategoryId, { root: true })
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

    async createProductsFromFile({ commit }, fileData) {
        /* fileData
            это объект класса FormData
            https://developer.mozilla.org/en-US/docs/Web/API/FormData
         */
        try {
            await fetch(`${import.meta.env.VITE_API}/fadi/upload_products`, {
                method: 'POST',
                body: fileData,
            })
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

    async addImage({}, productImage) {
        try {
            await axiosOriginal.post(`${import.meta.env.VITE_API}/image/`, {
                image: productImage.image,
                product: productImage?.product ? productImage.product : null,
            }, {
                headers: { "Content-Type": "multipart/form-data", Authorization: `token ${storage.get('fadi.auth_token')}` }
            })
        } catch (error) {
            console.log(error)
        }
    },

    async addProduct({ commit }, addedProduct) {
        /* addedProduct = {
            name: string;
            имя выкройки

            category: number;
            идентификатор категории для которой мы добавляем выкройку

            price: string;
            цена выкройки

            descriptions: string;
            описание товара

            sizes: number[];
            массив идентификаторов в таблице размеров
            размеры можно получить по запросу: GET http?s://backendHost/sizes
        } */
        try {
            await axios.post('/products/', {
                name: addedProduct.name,
                category: addedProduct.categoryId,
                price: addedProduct.price,
                description: addedProduct.description,
                sizes: addedProduct.sizes,
            });
            
        } catch (error) {
            console.log(error)
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
