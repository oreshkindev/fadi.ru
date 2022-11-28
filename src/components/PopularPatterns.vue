<script setup>
	// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
	import PatternItem from "@/components/PatternItem.vue";
	//
	import { useStore } from "vuex";
	import { onMounted, defineAsyncComponent, computed } from "vue";

	const PatternItemsSkeleton = defineAsyncComponent(() =>
		import("../components/views/PatternItemsSkeleton.vue")
	);

	const props = defineProps({
		// заголовок
		text: {
			type: String,
		},
		parent: {
			type: String,
		},
	});

	// Определяем наше хранилище
	const store = useStore();

	// выводим ошибку
	// const error = computed(() => store.getters['products/error'])

	// TODO:
	// загрузить фотки на сервер
	const images = [
		"https://compas.oreshkin.dev/images/images/Rectangle452.jpg",
		"https://compas.oreshkin.dev/images/images/Rectangle121.jpg",
		"https://compas.oreshkin.dev/images/images/Rectangle451.jpg",
		"https://compas.oreshkin.dev/images/images/Rectangle453.jpg",
		"https://compas.oreshkin.dev/images/images/Rectangle90.jpg",
		"https://compas.oreshkin.dev/images/images/Rectangle89.jpg",
	];

	// получаем массив с товаром
	const products = computed(() => store.getters["products/category"]);

	onMounted(() => {
		setTimeout(() => {
			if (!!props.parent) {
				store.dispatch("products/getBy", { category: props.parent });
				return;
			}
			store.dispatch("products/getBy", { price: "0.0" });
		}, 1000);
	});
	const pathPart = `${import.meta.env.VITE_IMAGE_DIR}`;
</script>

<template>
	<section>
		<h4 v-if="text" v-text="text"></h4>

		<PatternItemsSkeleton v-if="!products[0]"></PatternItemsSkeleton>
		<!-- выводим категорию или полный список -->
		<PatternItem
			v-else
			v-for="item in products"
			:key="item.id"
			:images="`${pathPart}/${item.product.images[0]}`"
			:data="item"
		/>
	</section>
</template>

<style lang="scss" scoped>
	section {
		display: grid;
		gap: var(--scheme-gap);
		grid-template-columns: repeat(3, 1fr);
		padding: 0 var(--scheme-gap);
		width: 100%;

		h4 {
			border-top: 1px solid var(--scheme-v3);
			grid-column: 1 / 4;
			padding: var(--scheme-gap) 0 0;
		}

		// базовый breakpoint 1152px
		@media all and (max-width: 72em) {
			grid-template-columns: repeat(2, 1fr);

			h4 {
				grid-column: 1 / 3;
			}
		}

		// последний breakpoint для Samsung S10 360x760px
		@media all and (max-width: 42em) {
			grid-template-columns: 1fr;

			h4 {
				grid-column: 1 / 2;
			}
		}
	}
</style>
