<script setup>
	// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
	import { useStore } from "vuex";
	import { computed, reactive, ref } from "vue";
	import Modal from "@/components/Modal.vue";
	import Checkbox from "@/components/ui/Checkbox.vue";

	import FilePicker from "@/components/ui/FilePicker.vue";

	// Определяем наше хранилище
	const store = useStore();

	const index = ref(3);

	// отправляем запрос на получение категорий
	const get = store.dispatch("category/get");

	const visible = ref(false);

	// получаем массив с категориями
	const category = computed(() => store.getters["category/data"]);

	const push = (name) => {
		if (name == "Бесплатные выкройки") {
			store.dispatch("products/getBy", { price: "0.0" });
			return;
		}
		store.dispatch("products/getBy", { category: name });
	};

	const error = computed(() => store.getters["admin/error"]);

	// работа с модальными окнами

	const modalSteps = ref(1);

	const nextStep = () => {
		console.log("nextStep");
		if (modalSteps.value < 5) {
			modalSteps.value += 1;
		}
	};
	// новая категория
	const categoryData = reactive({
		name: "",
		slug: "",
	});
	let createdCategory = null;
	// новый продукт
	const newProduct = reactive({
		name: "",
		category: [],
		price: null,
		descriptions: "",
		sizes: [],
	});
	let createdProduct = null;

	// размеры
	const sizes = computed(() => store.getters["admin/sizes"]);

	const handleChangeSizes = (changedSizeId) => {
		if (newProduct.sizes.includes(changedSizeId)) {
			newProduct.sizes = newProduct.sizes.filter(
				(id) => id !== changedSizeId
			);
		} else {
			newProduct.sizes.push(changedSizeId);
		}
	};
	// работа с фотографиями
	const images = ref([]);

	const handleAddImageFromPicker = (fileInfo) => {
		images.value.push({ name: fileInfo.name, image: fileInfo.file });
	};

	const handleDeleteImageFromPicker = (fileInfo) => {
		images.value = images.value.filter(
			({ name }) => name !== fileInfo.name
		);
	};

	const handleUploadImages = async () => {
		const uploadQueue = images.value.map((imageObj) => {
			const ImageData = new FormData();
			ImageData.append("image", imageObj.image);
			ImageData.append("product", createdProduct.id);

			return store.dispatch("admin/createImage", ImageData);
		});

		await Promise.allSettled(uploadQueue);
	};

	const handleSubmitStep = async () => {
		switch (modalSteps.value) {
			case 1:
				await store.dispatch("admin/createCategory", categoryData);
				createdCategory = store.getters["category/categoryByName"](
					categoryData.name
				);

				if (error.value.length == 0) {
					await store.dispatch("admin/fetchSizes");
					nextStep();
				}
				break;

			case 2:
				await store.dispatch("admin/createCategory", {
					...categoryData,
					parent: createdCategory.id,
				});
				if (error.value.length == 0) {
					const subCategory = store.getters["category/categoryByName"](createdCategory.name).children[0];
                    newProduct.category = [subCategory.id];
					nextStep();
				}
			case 3:
				createdProduct = await store.dispatch("admin/createProduct", {
					...newProduct,
				});
				const productsWithSize = createdProduct.sizes.map((sizeId) => {
					return {
						sku_product: `sku${createdProduct.id}${sizeId}`,
						product: createdProduct.id,
						size: sizeId,
					};
				});
				const productsWithSizeQueue = productsWithSize.map(
					(product) => {
						return store.dispatch(
							"admin/createProductWithSize",
							product
						);
					}
				);
				await Promise.allSettled(productsWithSizeQueue);

				if (error.value.length == 0) {
					nextStep();
				}
				break;
			case 4:
				await handleUploadImages();
				if (error.value.length == 0) {
					nextStep();
				}
		}
	};
</script>

<template>
	<ul>
		<li
			v-for="(item, i) in category"
			:key="i"
			:class="{ active: index == i }"
			@click="push(item.name), (index = i)"
		>
			{{ item.name }}
		</li>
		<i class="icon-plus" id="show-modal" @click="visible = true"></i>
	</ul>

	<Teleport to="body">
		<Modal
			:visible="visible"
			title="Добавление новой категории товаров"
			subTitle="Вы хотите добавить новую категорию товаров, для этого вам необходимо ввести название категории, придумать заголовок и описание, а так-же добавить товары в
                        соответсвующие разделы"
			@close="visible = false"
		>
			<template #modal-content>
				<form v-if="modalSteps == 1" class="modal__content" action="">
					<input
						v-model="categoryData.name"
						type="text"
						placeholder="Название категории"
						required
					/>
					<input
						v-model="categoryData.slug"
						type="text"
						placeholder="Короткое имя на латинице"
						required
					/>
				</form>

				<form v-if="modalSteps == 2" class="modal__content" action="">
					<input
						v-model="newProduct.name"
						type="text"
						placeholder="Название товара"
						required
					/>
					<textarea
						v-model="newProduct.descriptions"
						placeholder="Описание"
						cols="10"
						rows="5"
					></textarea>
					<ul>
						<Checkbox
							v-for="size in sizes"
							:key="size.id"
							:text="size.name"
							@checked="handleChangeSizes(size.id)"
						/>
					</ul>
					<input
						v-model="newProduct.price"
						type="text"
						placeholder="Цена товара"
						required
					/>
				</form>

				<form v-if="modalSteps == 3" class="modal__content" action="">
					<FilePicker
						name="firstPicker"
						accept=".jpg"
						:renderPreview="true"
						@file-picked="handleAddImageFromPicker"
						@file-removed="handleDeleteImageFromPicker"
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
					>
						<template #picker-icon>
							<i class="icon-add-a-photo"></i>
						</template>
					</FilePicker>
				</form>

				<form v-if="modalSteps == 4" class="modal__content" action="">
					<input
						v-model="categoryData.name"
						type="text"
						placeholder="Название категории"
						required
					/>
					<input
						v-model="categoryData.slug"
						type="text"
						placeholder="Короткое имя на латинице"
						required
					/>
				</form>
			</template>
			<template #modal-sidebar>
				<picture class="modal__sidebar">
					<source
						srcset="@/assets/images/Component7.webp"
						type="image/webp"
					/>
					<img
						src="@/assets/images/Component7.jpg"
						decoding="async"
						alt="Пример наполнения"
						loading="lazy"
					/>
				</picture>
			</template>
			<template #modal-navigation>
				<button @click="handleSubmitStep">Далее</button>
				<p>{{ modalSteps }} / 4</p>
			</template>
		</Modal>
	</Teleport>
</template>

<style lang="scss" scoped>
	ul {
		display: grid;
		place-items: baseline;

		li {
			border-radius: 25px;

			cursor: pointer;

			grid-column: 1 / 2;
			padding: 8px 30px;

			&.active {
				background-color: var(--scheme-v2);
			}
		}

		i {
			grid-column: 2 / 3;
			grid-row: 1;
			color: var(--scheme-v2);

			cursor: pointer;

			margin: 0 0 0 auto;
			padding: 8px;
			border-radius: 50%;
			border: 1px solid;

			&:hover {
				background-color: var(--scheme-v2);
				color: var(--scheme-v4);
			}
		}
	}
	// базовый breakpoint 1152px
	@media all and (max-width: 72em) {
	}
</style>
