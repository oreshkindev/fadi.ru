<script setup>
	import { ref } from "vue";

	const props = defineProps({
		name: { type: String, required: true },
		accept: { type: String, default: "" },
		multiple: { type: Boolean, default: false },
		// свойство для картинок
		renderPreview: { type: Boolean, default: false },
	});
	const emit = defineEmits({
		"file-picked": null,
		"file-removed": null,
	});

	const pickerRef = ref(null);
	const file = ref(null);

	// TODO: написать регулярку для определения формата

	const preview = ref(null);
	const handleRenderPreview = () => {
		const ImageReader = new FileReader();

		ImageReader.addEventListener("load", () => {
			preview.value = ImageReader.result;
		});

		ImageReader.readAsDataURL(file.value);
	};

	const handleSetFileToPicker = () => {
		file.value = pickerRef.value.files[0];
		emit("file-picked", { name: props.name, file: file.value });
		if (props.renderPreview) {
			handleRenderPreview();
		}
	};
	const handleClearFileFromPicker = () => {
		pickerRef.value.value = "";
		preview.value = null;
		file.value = null;
		emit("file-removed", { name: props.name });
	};
</script>

<template>
	<div>
		<input
			type="file"
			:name="name"
			:id="`${name}Id`"
			:accept="accept"
			:multiple="multiple"
			ref="pickerRef"
			@change="handleSetFileToPicker"
		/>
		<label :for="`${name}Id`">
      <!-- пока слот будет рендерится по условию, не смог в стили -->
			<slot v-if="!file" name="picker-icon"></slot>
			<picture v-if="preview">
				<img :src="preview" alt="загружаемое фото" />
			</picture>
		</label>
		<button v-if="file" type="button" @click="handleClearFileFromPicker">
			X
		</button>
	</div>
</template>

<style scoped lang="scss">
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		max-width: 305px;
		min-width: 305px;
		min-height: 185px;
		max-height: 185px;
		position: relative;
		background-color: #f9f9f9;
		border-radius: 12px;
		border: 1px solid var(--scheme-v3);

		input {
			opacity: 0;
			visibility: hidden;
			position: absolute;
		}

		label {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			cursor: pointer;

			:slotted(i) {
				position: absolute;
				top: 50%;
				left: 50%;
        color: #CECECE;
			}

			picture {
				img {
					object-position: center;
					object-fit: contain;
					height: 100%;
				}
			}
		}

		button {
			position: absolute;
			top: 0;
			right: 0;
		}
	}
</style>
