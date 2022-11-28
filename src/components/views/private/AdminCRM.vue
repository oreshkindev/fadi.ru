<script setup>
	// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
	import Breadcrumbs from "@/components/ui/Breadcrumbs.vue";
	import Size from "@/components/ui/Size.vue";
	import Included from "@/components/ui/Included.vue";
	import ButtonContext from "@/components/ui/ButtonContext.vue";
	import Swiper from "@/components/Swiper.vue";
	import Checkbox from "@/components/ui/Checkbox.vue";
	import FilePicker from "@/components/ui/FilePicker.vue";
	import HtmlEditor from "@/components/HtmlEditor.vue";

	import { useStore } from "vuex";
	import { useRoute } from "vue-router";
	import {
		onMounted,
		defineAsyncComponent,
		computed,
		ref,
		reactive,
		watchEffect,
	} from "vue";

	// вспомогательная функции для этой страницы
	const getPositionInSwiper = (filePickerName) => {
		switch (filePickerName) {
			case "firstPicker":
				return 0;
			case "secondPicker":
				return 1;
			case "thirdPicker":
				return 2;
			case "fourthPicker":
				return 3;
		}
	};

	// Определяем наше хранилище
	const store = useStore();

	// получаем доступ к параметрам роутера
	const route = useRoute();
	if (route.query?.name) {
		store.dispatch("products/getBy", route.query);
	}
	// все существующие размеры из базы
	store.dispatch("admin/fetchSizes");

	const sizes = computed(() => store.getters["admin/sizes"]);

	const categories = computed(() => store.getters["category/data"]);
	const currentProduct = computed(() => store.getters["products/data"][0]);

	const demoSizes = ref([]);
	const demoImages = ref([]);
	const demoProductName = computed(() => {
		return newProduct.name ? newProduct.name : "[ Название ]";
	});
	const demoProductPrice = computed(() => {
		return newProduct.price ? newProduct.price : "[ Цена ]";
	});

	const demoDescription = computed(() => newProduct.descriptions);

	// модель товара без pdf
	const newProduct = reactive({
		name: "",
		category: [],
		price: "",
		descriptions: "",
		sizes: [],
	});

	const pdfFiles = ref([]);
	const images = ref([
		//"@/assets/images/mannequin.jpg",
	]);
	if (currentProduct.value && sizes.value.length) {
		console.log("sizes and product");
		newProduct.name = currentProduct.value.product.name;
		newProduct.descriptions = currentProduct.value.product.descriptions;
		newProduct.price = currentProduct.value.product.price;
		if (currentProduct.value.product.sub_category[0]?.id) {
			newProduct.category = [
				currentProduct.value.product.sub_category[0].id,
			];
		}
		if (currentProduct.value.product.images.length) {
			images.value = [...currentProduct.value.images];
		} else {
			for (let counter = 0; counter < 4; counter++) {
				images.value.push("/src/assets/images/mannequin.jpg");
			}
		}
		if (currentProduct.value.size.length) {
			newProduct.sizes = currentProduct.value.size.map((sizeName) => {
				const matchedSize = sizes.value.find(
					({ name }) => name === sizeName
				);
				if (matchedSize) {
					return matchedSize.id;
				}
			});
			demoSizes.value = [...currentProduct.value.size];
		}
	} else {
		const watchForNecessaryData = watchEffect(() => {
			if (currentProduct.value && sizes.value.length) {
				console.log("watch");
				console.log(currentProduct.value);
				newProduct.name = currentProduct.value.product.name;
				newProduct.descriptions =
					currentProduct.value.product.descriptions;
				newProduct.price = currentProduct.value.product.price;
				if (currentProduct.value.product.sub_category[0]?.id) {
					newProduct.category = [
						currentProduct.value.product.sub_category[0].id,
					];
				}
				if (currentProduct.value.product.images.length) {
					images.value = currentProduct.value.product.images.map( pathPart => `${import.meta.env.VITE_IMAGE_DIR}/${pathPart}`);
				} else {
					for (let counter = 0; counter < 4; counter++) {
						images.value.push(`/src/assets/images/mannequin.jpg`);
					}
				}
				if (currentProduct.value.size.length) {
					newProduct.sizes = currentProduct.value.size.map(
						(sizeName) => {
							const matchedSize = sizes.value.find(
								({ name }) => name === sizeName
							);
							if (matchedSize) {
								return matchedSize.id;
							}
						}
					);
					demoSizes.value = [...currentProduct.value.size];
				}
			}
		});
	}

	// размеры для превью на странице

	const handleChangeSizes = (choosenSize) => {
		if (newProduct.sizes.includes(choosenSize.id)) {
			newProduct.sizes = newProduct.sizes.filter(
				(id) => id !== choosenSize.id
			);
			demoSizes.value = demoSizes.value.filter(
				(sizeName) => sizeName !== choosenSize.name
			);
		} else {
			newProduct.sizes.push(choosenSize.id);
			demoSizes.value.push(choosenSize.name);
		}
	};

	const handleAddImageFromPicker = (fileInfo) => {
		demoImages.value.push({ name: fileInfo.name, image: fileInfo.file });
	};

	const handleDeleteImageFromPicker = (fileInfo) => {
		demoImages.value = demoImages.value.filter(
			({ name }) => name !== fileInfo.name
		);
	};

	const handleChangePreview = (previewInfo) => {
		const imageIndexInSwiper = getPositionInSwiper(previewInfo.name);
		if (previewInfo.url == null) {
			return (images.value[imageIndexInSwiper] =
				"/src/assets/images/mannequin.jpg");
		}
		images.value[imageIndexInSwiper] = previewInfo.url;
	};

	const handleAddFileFromPicker = (fileInfo) => {
		pdfFiles.value.push({ name: fileInfo.name, file_pdf: fileInfo.file });
	};
	const handleDeleteFileFromPicker = (fileInfo) => {
		pdfFiles.value = pdfFiles.value.filter( ({ name }) => name !== fileInfo.name );
	};

	const handleUploadImages = async (productId) => {
		const uploadQueue = demoImages.value.map((imageObj) => {
			const ImageData = new FormData();
			ImageData.append("image", imageObj.image);
			ImageData.append("product", productId);

			return store.dispatch("admin/createImage", ImageData);
		});

		await Promise.allSettled(uploadQueue);
	};

	const handleCreateProductSizes = async (productId) => {
		const productSizeQueue = newProduct.sizes.map((sizeId) => {
			const sku_product = `sku${productId}${sizeId}`;
			return store.dispatch("admin/createProductWithSize", { sku_product, product: productId, size: sizeId });
		});

		await Promise.allSettled(productSizeQueue);
	};

	// выводим ошибку
	// const error = computed(() => store.getters['products/error'])

	// TODO:
	// загрузить фотки на сервер
	/* const images = ref([
		"Rectangle452",
		"Rectangle121",
		"Rectangle451",
		"Rectangle453",
		"Rectangle90",
		"Rectangle89",
	]); */
	const handleSubmit = async () => {
		try {
			const createdProduct = await store.dispatch('admin/createProduct', newProduct);
			await handleUploadImages(createdProduct.id);
			await handleCreateProductSizes(createdProduct.id);

		} catch (error) {
			console.log(error);
		}
	}
</script>

<template>
	<Breadcrumbs :array="['home', 'patterns']" />

	<section>
		<article>
			<h1>{{ demoProductName }}</h1>

			<!-- TODO: получить вот эту вот штуку снизу -->
			<Included
				:array="[
					'Средняя сложность',
					'Подробная инструкция',
					'Плоттер 600',
				]"
			/>

			<Size :array="demoSizes" />

			<h4>{{ demoProductPrice }} р</h4>

			<!-- TODO: сделать по человечески -->
			<ButtonContext
				icon="icon-arrow-top-right"
				text="Добавить в корзину"
			/>

			<p>
				<small
					>Ссылки на скачивание купленной выкройки будут доступны в
					личном кабинете</small
				>
			</p>

			<h5>Описание</h5>

			<p v-html="demoDescription"></p>
		</article>

		<aside>
			<!-- TODO: получить фотки товара -->
			<Swiper v-if="images.length" :images="images" />
			<input
				v-model="newProduct.name"
				type="text"
				placeholder="Введите название выкройки"
			/>
			<ul>
				<Checkbox
					v-for="size in sizes"
					:key="size.id"
					:text="size.name"
					:state-checked="demoSizes.includes(size.name)"
					@checked="handleChangeSizes(size)"
				/>
			</ul>
			<input
				v-model="newProduct.price"
				type="text"
				placeholder="Введите цену"
			/>

			<HtmlEditor class="editor" v-model="newProduct.descriptions" />

			<div v-if="images.length">
				<FilePicker
					name="firstPicker"
					accept=".jpg"
					:renderPreview="true"
					:previewSrc="images[0]"
					@file-picked="handleAddImageFromPicker"
					@file-removed="handleDeleteImageFromPicker"
					@preview-changed="handleChangePreview"
				>
					<template #picker-icon>
						<i class="icon-add-a-photo"></i>
					</template>
				</FilePicker>
				<FilePicker
					name="secondPicker"
					accept=".jpg"
					:renderPreview="true"
					:previewSrc="images[1]"
					@file-picked="handleAddImageFromPicker"
					@file-removed="handleDeleteImageFromPicker"
					@preview-changed="handleChangePreview"
				>
					<template #picker-icon>
						<i class="icon-add-a-photo"></i>
					</template>
				</FilePicker>
				<FilePicker
					name="thirdPicker"
					accept=".jpg"
					:renderPreview="true"
					:previewSrc="images[2]"
					@file-picked="handleAddImageFromPicker"
					@file-removed="handleDeleteImageFromPicker"
					@preview-changed="handleChangePreview"
				>
					<template #picker-icon>
						<i class="icon-add-a-photo"></i>
					</template>
				</FilePicker>
				<FilePicker
					name="fourthPicker"
					accept=".jpg"
					:renderPreview="true"
					:previewSrc="images[3]"
					@file-picked="handleAddImageFromPicker"
					@file-removed="handleDeleteImageFromPicker"
					@preview-changed="handleChangePreview"
				>
					<template #picker-icon>
						<i class="icon-add-a-photo"></i>
					</template>
				</FilePicker>

				<h4>Pdf-файлы к выкройкам</h4>

				<div v-for="sizeName in demoSizes">
					<h5>{{ `Размер ${sizeName}` }}</h5>
					<FilePicker
						:name="`${sizeName}Pdf`"
						accept=".pdf"
						@file-picked="handleAddFileFromPicker"
						@file-removed="handleDeleteFileFromPicker"
					>
						<template #picker-icon>
							<i class="icon-download-solid" :class="{ picked: pdfFiles.find( ({ name }) => name === `${sizeName}Pdf` ) }"></i>
						</template>
					</FilePicker>
				</div>
			</div>
			<button @click="handleSubmit">Сохранить изменения</button>
		</aside>
	</section>
</template>

<style lang="scss" scoped>
	nav {
		max-width: var(--scheme-max-width);
		padding: 0 var(--scheme-gap);
		width: 100%;
	}

	section {
		display: grid;
		// gap: var(--scheme-gap);
		width: 100%;

		h1 {
			font: 400 var(--scheme-xm) / 1.42 var(--scheme-font);
		}

		article {
			grid-column: 2 / 3;
			grid-row: 1;
			padding: 0 var(--scheme-gap);

			:deep(p) {
				small {
					display: block;
					margin: 20px 0;
					opacity: 0.6;
				}

				ol {
					font-size: 24px;
					padding: 0;
					margin: 40px 0;

					li {
						font-size: var(--scheme-s);
						margin: 8px 0 8px 20px;
					}

					h5 {
						color: var(--scheme-v2);
						margin: 40px 0 0;
					}

					p {
						font-size: var(--scheme-s);
						margin: 20px 0;

						b {
							color: var(--scheme-v2);
						}
					}
				}
			}

			button {
				background-color: var(--scheme-v2);
				color: var(--scheme-v4);
				margin: var(--scheme-gap) auto auto 0;
			}
		}

		aside {
			grid-column: 1 / 2;
			padding: 0 var(--scheme-gap);

			input {
				width: 80%;
				margin: 20px 0 0 0;
			}

			ul {
				display: flex;
				flex-wrap: wrap;
				gap: 10px;
				width: 80%;

				margin: 20px 0 0 0;

				:deep(fieldset) {
					gap: 10px;
					align-items: center;
					span {
						color: var(--scheme-v1);
					}
				}
			}

			div {
				display: grid;
				grid-template-columns: repeat(auto-fill, 305px);
				gap: 10px;

				margin: 20px 0 0 0;

				h4 {
					grid-column: 1/3;
				}
			}

			div.editor {
				display: block;
				width: 80%;

				margin: 20px 0 0 0;
			}
			button {
				margin: 30px 0 0 0;
				background-color: var(--scheme-v2);
				color: var(--scheme-v4);
				border-radius: 50px;
				padding: 4px 20px;
			}
			:deep(i.icon-download-solid) {
				font-size: 32px;
				top: calc(50% - 15px);
				left: calc(50% - 15px);
				&.picked {
					color: var(--scheme-v2);
				}
			}
		}
	}

	// базовый breakpoint 1152px
	@media all and (max-width: 72em) {
		section {
			gap: var(--scheme-gap);

			article {
				grid-column: 1 / 3;
				grid-row: 2;
			}

			aside {
				grid-column: 1 / 3;
			}
		}
	}
</style>
