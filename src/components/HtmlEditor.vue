<template>
	<div>
		<nav v-if="editor">
			<button @click="handleSetParagraph" :class="{ 'is-active': editor.isActive('paragraph') }">
				P
			</button>
			<button @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'is-active': editor.isActive('orderedList') }">
				List
			</button>
		</nav>
		<editor-content :editor="editor" />
	</div>
</template>

<script>
	import StarterKit from "@tiptap/starter-kit";
	import { Editor, EditorContent } from "@tiptap/vue-3";

	export default {
		components: {
			EditorContent,
		},

		props: {
			modelValue: {
				type: String,
				default: "",
			},
		},

		emits: ["update:modelValue"],

		data() {
			return {
				editor: null,
			};
		},

		watch: {
			modelValue(value) {
				// HTML
				const isSame = this.editor.getHTML() === value;

				// JSON
				// const isSame = JSON.stringify(this.editor.getJSON()) === JSON.stringify(value)

				if (isSame) {
					return;
				}

				this.editor.commands.setContent(value, false);
			},
		},

    methods: {
      handleSetParagraph() {
        this.editor.chain().focus().setParagraph().run();
      }
    },
		mounted() {
			this.editor = new Editor({
				extensions: [StarterKit],
				content: this.modelValue,
				onUpdate: () => {
					// HTML
					this.$emit("update:modelValue", this.editor.getHTML());

					// JSON
					// this.$emit('update:modelValue', this.editor.getJSON())
				},
			});
		},

		beforeUnmount() {
			this.editor.destroy();
		},
	};
</script>

<style lang="scss" scoped>
	/* Basic editor styles */
	.editor {
		div {
			width: 100%;
		}
	}

	nav {
		button {
			margin: 1px;
			border: 1px solid black;
			border-radius: 3px;
			padding: 1px 4px;
			background: white;
      text-transform: lowercase;
      font-size: 32px;
      line-height: 1;
			&.is-active {
				background: black;
				color: #fff;
			}
		}
	}
	:deep(.ProseMirror) {
		//--scheme-v2: #d69828;
		border: 1px solid var(--scheme-v2);
		border-radius: 10px;
		padding: 10px;

		> * + * {
			margin-top: 0.75em;
		}

		ul,
		ol {
			padding: 0 1rem;
		}

		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			line-height: 1.1;
		}

		code {
			background-color: rgba(#616161, 0.1);
			color: #616161;
		}

		pre {
			background: #0d0d0d;
			color: #fff;
			font-family: "JetBrainsMono", monospace;
			padding: 0.75rem 1rem;
			border-radius: 0.5rem;

			code {
				color: inherit;
				padding: 0;
				background: none;
				font-size: 0.8rem;
			}
		}

		img {
			max-width: 100%;
			height: auto;
		}

		hr {
			margin: 1rem 0;
		}

		blockquote {
			padding-left: 1rem;
			border-left: 2px solid rgba(#0d0d0d, 0.1);
		}
	}
</style>
