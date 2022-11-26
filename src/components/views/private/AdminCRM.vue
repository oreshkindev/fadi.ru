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
	} from "vue";

	// Определяем наше хранилище
	const store = useStore();

	// получаем доступ к параметрам роутера
	const route = useRoute();

	const categories = computed(() => store.getters["category/data"]);
	
	// модель товара без pdf
	const newProduct = reactive({
		name: "",
		category: [],
		price: null,
		descriptions: "",
		sizes: [],
	});
	// размеры для превью на странице
	const demoSizes = ref([]);
	const demoProductName = computed(() => {
		return newProduct.name ? newProduct.name : "[ Название ]";
	});
	const demoProductPrice = computed(() => {
		return newProduct.price ? newProduct.price : "[Цена]";
	});

	const demoDescription = computed(() => newProduct.descriptions);

	// все существующие размеры из базы
	store.dispatch("admin/fetchSizes");

	const sizes = computed(() => store.getters["admin/sizes"]);

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

	const demoImages = ref([]);

	const handleAddImageFromPicker = (fileInfo) => {
		demoImages.value.push({ name: fileInfo.name, image: fileInfo.file });
	};

	const handleDeleteImageFromPicker = (fileInfo) => {
		demoImages.value = images.value.filter(
			({ name }) => name !== fileInfo.name
		);
	};

	const handleChangePreview = (previewInfo) => {
		images.value[0] = previewInfo.url;
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
	const images = ref([
		//"@/assets/images/mannequin.jpg",
		"https://compas.oreshkin.dev/images/images/Rectangle452.jpg",
		"https://compas.oreshkin.dev/images/images/Rectangle452.jpg",
		"https://compas.oreshkin.dev/images/images/Rectangle452.jpg",
		"https://compas.oreshkin.dev/images/images/Rectangle452.jpg",
	]);
	// получаем массив с товаром
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
			<Swiper :images="images" />
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
					@checked="handleChangeSizes(size)"
				/>
			</ul>
			<input
				v-model="newProduct.price"
				type="text"
				placeholder="Введите цену"
			/>

			<HtmlEditor class="editor" v-model="newProduct.descriptions" />

			<div>
				<FilePicker
					name="firstPicker"
					accept=".jpg"
					:renderPreview="true"
					@file-picked="handleAddImageFromPicker"
					@file-removed="handleDeleteImageFromPicker"
					@preview-changed="handleChangePreview"
					ref="firstPicker"
				>
					<template #picker-icon>
						<i class="icon-add-a-photo"></i>
					</template>
				</FilePicker>
				<FilePicker
					name="secondPicker"
					accept=".jpg"
					:renderPreview="true"
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
					@file-picked="handleAddImageFromPicker"
					@file-removed="handleDeleteImageFromPicker"
					@preview-changed="handleChangePreview"
				>
					<template #picker-icon>
						<i class="icon-add-a-photo"></i>
					</template>
				</FilePicker>
			</div>
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
			}

			div.editor {
				display: block;
				width: 80%;

				margin: 20px 0 0 0;
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
