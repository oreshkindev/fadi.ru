import axios from "@/common/axios";

// определяем состояние
const state = () => ({
	error: [],
	data: [],
	sizes: [],
	
});

// определяем геттеры
const getters = {
	data: (state) => state.data,
	error: (state) => state.error,
	sizes: (state) => state.sizes,
};

// определяем методы
const actions = {
	async createCategory({ commit }, categoryData) {
		/*
      categoryData = {
      name: string;
      название созаваемой категории

      slug: string;
      короткое имя, создаваемой категории, на латинице

      parent?: number;
      }
      */
		try {
			const response = await axios.post("/category/", categoryData);
			const newCategory = {
				id: response.data.id,
				name: response.data.name,
				slug: response.data.slug,
        parent: response.data.parent,
				children: [],
			};
            
			commit("category/addCategory", newCategory, { root: true });
		} catch (error) {
			if (error.response) {
				// вернулась ошибка (5xx, 4xx)
				commit("error", error.response.data);

				// прячем ошибку через 5 секунд
				setTimeout(() => {
					commit("error", []);
				}, 5000);
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
				children: updatedCategory?.children?.length
					? updatedCategory.children
					: [],
			});

			commit("category/updateCategory", updatedCategory, { root: true });
		} catch (error) {
			if (error.response) {
				// вернулась ошибка (5xx, 4xx)
				commit("error", error.response.data);

				// прячем ошибку через 5 секунд
				setTimeout(() => {
					commit("error", []);
				}, 5000);
			}
		}
	},

	async deleteCategory({ commit }, deletedCategoryId) {
		/* deletedCategoryId: number;
            идентификатор удаляемой категории
         */
		try {
			await axios.delete(`/category/${deletedCategoryId}/`);
			commit("category/deleteCategory", deletedCategoryId, {
				root: true,
			});
		} catch (error) {
			if (error.response) {
				// вернулась ошибка (5xx, 4xx)
				commit("error", error.response.data);

				// прячем ошибку через 5 секунд
				setTimeout(() => {
					commit("error", []);
				}, 5000);
			}
		}
	},

	/*
    Экшены для работы с моделью image 
    Модель описывает фотографию для выкройки 
     */

	async createImage({}, productImage) {
		/* productImage
            это объект класса FormData
            https://developer.mozilla.org/en-US/docs/Web/API/FormData
            этот объект имеет поля
            image: File;
            File - https://developer.mozilla.org/en-US/docs/Web/API/File

            product?: string;
            идентификатор продукта
         */
		try {
			await axios.post("/image/", productImage, {
				headers: { "Content-Type": "multipart/form-data" },
			});
		} catch (error) {
			console.log(error);
		}
	},

	async updateImage({}, { imageData, updatedImageId }) {
		/* imageData
            это объект класса FormData
            https://developer.mozilla.org/en-US/docs/Web/API/FormData
            этот объект имеет поля
            image?: File;
            File - https://developer.mozilla.org/en-US/docs/Web/API/File

            product?: string;
            идентификатор продукта

            updatedImageId: number;
            идентификатор обновляемой картинки
         */
		try {
			await axios.patch(`/image/${updatedImageId}/`, imageData, {
				headers: { "Content-Type": "multipart/form-data" },
			});
		} catch (error) {
			console.log(error);
		}
	},

	async deleteImage({}, deletedImageId) {
		/*
           deletedImageId: number;
           идентификатор удаляемой картинки
        */
		try {
			await axios.delete(`/image/${deletedImageId}/`);
		} catch (error) {
			console.log(error);
		}
	},

	/*
	Экшены для работы с пдф-файлами для выкроек
	*/

	async createPdf({}, pdfData) {
		/* pdfData
		это объект класса FormData
    https://developer.mozilla.org/en-US/docs/Web/API/FormData
    этот объект имеет поля
    file_pdf: File;
    File - https://developer.mozilla.org/en-US/docs/Web/API/File

    product_size: string;
    артикул продукта
    */
	 try {
		await axios.post('/product_size/pdf/', pdfData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		})
	 } catch (error) {
		
	 }
	},

	/*
    Экшены для работы с моделью sizes 
    Модель описывает размер
    Затем эти размеры нужно добавлять для создания модели product
     */
	async fetchSizes({ commit }) {
		try {
			const response = await axios.get("/sizes");
			commit("sizes", response.data);
		} catch (error) {
			console.log(error);
		}
	},

	async createSize({}, sizeValue) {
		/*
        sizeValue: string;
        размер выкройки
        */

		try {
			await axios.post("/sizes/", {
				name: sizeValue,
			});
		} catch (error) {
			console.log(error);
		}
	},

	async updateSize({}, { sizeValue, sizeId }) {
		/*
        sizeValue: string;
        размер выкройки

        sizeId: number;
        идентификатор обновляемого размера
        */

		try {
			await axios.patch(`/sizes/${sizeId}/`, {
				name: sizeValue,
			});
		} catch (error) {
			console.log(error);
		}
	},

	async deleteSize({}, sizeId) {
		/*
        sizeId: number;
        идентификатор удаляемого размера
        */

		try {
			await axios.delete(`/sizes/${sizeId}/`);
		} catch (error) {
			console.log(error);
		}
	},
	/*
    Экшены для работы с моделью product 
    Является одной из вспомогательных сущностей в этом бизнес-домене
    Описывает выкройку без привязки к pdf-файлу
    
     */
	async createProduct({ commit }, createdProduct) {
		/* createdProduct = {
            name: string;
            имя выкройки

            category: number[];
            массив идентификаторов категорий для которых мы добавляем выкройку

            price: string;
            цена выкройки

            descriptions: string;
            описание товара

            sizes: number[];
            массив идентификаторов в таблице размеров
            размеры можно получить по запросу: GET http?s://backendHost/sizes
        } */
		try {
			const { data } = await axios.post("/products/", createdProduct);
			return data;
		} catch (error) {
			console.log(error);
			if (error.response) {
				// вернулась ошибка (5xx, 4xx)
				commit("error", error.response.data);
				// прячем ошибку через 5 секунд
				setTimeout(() => {
					commit("error", []);
				}, 5000);
			}
		}
	},

	async updateProduct({ commit }, updatedProduct) {
		/* updatedProduct = {
            name: string;
            имя выкройки

            category: number[];
            массив идентификаторов категорий для которых мы добавляем выкройку

            price: string;
            цена выкройки

            descriptions: string;
            описание товара

            sizes: number[];
            массив идентификаторов в таблице размеров
            размеры можно получить по запросу: GET http?s://backendHost/sizes
        } */
		try {
			const { data } = await axios.put("/products/", updatedProduct);
			commit('products/set', data);
		} catch (error) {
			console.log(error);
			if (error.response) {
				// вернулась ошибка (5xx, 4xx)
				commit("error", error.response.data);
				// прячем ошибку через 5 секунд
				setTimeout(() => {
					commit("error", []);
				}, 5000);
			}
		}
	},

	/*
    Экшены для работы с моделью product-size 
    Является одной из главных сущностей в этом бизнес-домене
    Описывает выкройку для продажи, с конкретным размером и артикулом
     */
	async createProductWithSize({}, createdProduct) {
		/* createdProduct = {
            sku_product: string;
            артикул создаваемой выкройки с pdf

            product: number;
            идентификатор выкройки из модели product

            size: number;
            идентификатор размера для создаваемой выкройки с pdf
        } */

		try {
			await axios.post("/product-size/", createdProduct);
		} catch (error) {
			console.log(error);
		}
	},

	async updateProductWithSize({}, updatedProduct) {
		/* createdProduct = {
            sku_product: string;
            артикул создаваемой выкройки с pdf

            product: number;
            идентификатор выкройки из модели product

            size: number;
            идентификатор размера для создаваемой выкройки с pdf
        } */

		try {
			await axios.put("/product-size/", updatedProduct);
		} catch (error) {
			console.log(error);
		}
	},

	async createProductsWithSizeFromFile({ commit }, fileData) {
		/* fileData
            это объект класса FormData
            https://developer.mozilla.org/en-US/docs/Web/API/FormData
         */
		try {
			await axios.post("/fadi/upload_products", fileData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
		} catch (error) {
			console.log(error);
			if (error.response) {
				// вернулась ошибка (5xx, 4xx)
				commit("error", error.response.data);
				// прячем ошибку через 5 секунд
				setTimeout(() => {
					commit("error", []);
				}, 5000);
			}
		}
	},
};

// определяем мутации
const mutations = {
	set: (state, data) => {
		state.data = data;
	},
	error: (state, error) => {
		state.error = error;
	},
	sizes: (state, sizes) => {
		state.sizes = sizes;
	},
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
};
