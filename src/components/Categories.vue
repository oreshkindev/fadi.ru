<script setup>
	// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
	import { useStore } from "vuex";
	import { computed, reactive, ref } from "vue";
	import { useRouter } from "vue-router";
	import Modal from "@/components/Modal.vue";

	// Определяем наше хранилище
	const store = useStore();

	// Определяем  роутер
	const router = useRouter();

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
		if (modalSteps.value < 3) {
			modalSteps.value += 1;
		}
	};

	const popupTitle = computed( () => {
		switch(modalSteps.value) {
			case 1:
				return 'Добавление новой категории товаров';
			case 2:
				return `Добавление новой подкатегории товаров в категории ${createdCategory.name}`;
			case 3:
				return 'Финальный шаг';
			default:
				return 'Добавление новой категории товаров';
		}
	});
	const popupSubTitle = computed( () => {
		switch(modalSteps.value) {
			case 1:
				return 'Для добавления новой категории укажите название категории и короткое имя на латинице';
			case 2:
				return `Для добавления новой подкатегории в категории ${createdCategory.name} укажите название подкатегории и короткое имя на латинице`;
			case 3:
				return `Нажмите на кнопку ниже для перехода к созданию выкройки для категории ${createdCategory.name}`;
			default:
				return '';
		}
	});
	// новая категория
	const categoryData = reactive({
		name: "",
		slug: "",
	});
	let createdCategory = null;
	/* переменная для хранения родительской категории, если захотят создать дочернюю категорию
		т.к. мы перезаписываем категорию ниже
	 */
	let parentCategory = null;
	// новый продукт



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
				categoryData.name = '';
				categoryData.slug = '';

				if (error.value.length == 0) {
					nextStep();
				}
				break;

			case 2:
				await store.dispatch("admin/createCategory", {
					...categoryData,
					parent: createdCategory.id,
				});
				if (error.value.length == 0) {
					parentCategory = createdCategory;
					createdCategory = store.getters["category/categoryByName"](createdCategory.name).children[0];

					nextStep();
				}
				break;
			case 3:
				const sub_category = {
					id: createdCategory.id,
					name: createdCategory.name,
					slug: createdCategory.slug,
				};
				parentCategory ? sub_category.category = [parentCategory] : '';
				const productModel = {};
				productModel.product = {
					descriptions: '',
					images: [],
					name: '',
					price: '',
					sub_category: [
						sub_category
					]
				};
				productModel.size = [];
				productModel.sku_product = [];
				store.commit('products/set', [productModel]);
				router.push({ name: 'tmp', params: { categoryName: createdCategory.slug } });
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
			:title="popupTitle"
			:subTitle="popupSubTitle"
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
						v-model="categoryData.name"
						type="text"
						placeholder="Название подкатегории"
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
				<button @click="handleSubmitStep">{{ modalSteps == 3 ? 'Перейти к созданию выкройки' : 'Далее' }}</button>
				<button @click="nextStep" v-if="modalSteps == 2">Пропустить</button>
				<p>{{ modalSteps }} / 3</p>
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
