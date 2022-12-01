<script>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import Document from '@tiptap/extension-document'
import Heading from '@tiptap/extension-heading'
import Paragraph from '@tiptap/extension-paragraph'
import BulletList from '@tiptap/extension-bullet-list'
import OrderedList from '@tiptap/extension-ordered-list'
import ListItem from '@tiptap/extension-list-item'
import Text from '@tiptap/extension-text'
import { watch, ref } from 'vue'

export default {
    emits: ['update:modelValue'],
    components: { EditorContent },
    props: {
        modelValue: {
            type: String,
            default:
                '<h3>Заголовок третьего уровня</h3><ul><li>Элемент списка</li><li>Элемент списка</li><li>Элемент списка</li></ul><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum esse magni tempore consequatur qui ex possimus vero ad dolore sed doloribus deserunt, enim itaque aliquam dolores molestiae quas nam doloremque!</p><ol><li>Элемент нумерованного списка</li><li>Элемент нумерованного списка</li><li>Элемент нумерованного списка</li></ol><p>Параграф</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum esse magni tempore consequatur qui ex possimus vero ad dolore sed doloribus deserunt, enim itaque aliquam dolores molestiae quas nam doloremque!</p>',
        },
    },
    setup(props, { emit }) {
        const modelValue = ref()

        watch(
            () => modelValue,
            (value) => {
                // HTML
                const isSame = editor.value.getHTML() === value

                // JSON
                // const isSame = JSON.stringify(editor.value.getJSON()) === JSON.stringify(value)

                if (isSame) {
                    return
                }
                editor.commands.setContent(value, false)
            }
        )

        const editor = useEditor({
            content: props.modelValue,
            extensions: [
                Document,
                Paragraph,
                BulletList,
                OrderedList,
                ListItem,
                Text,
                Heading.configure({
                    levels: [3],
                }),
            ],
            onUpdate: () => {
                // HTML
                emit('update:modelValue', editor.value.getHTML())
                // JSON
                // emit('update:modelValue', editor.value.getJSON())
            },
        })

        return {
            editor,
        }
    },
}
</script>

<template>
    <div v-if="editor" class="tiptap">
        <button @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">H3</button>
        <button @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }">
            <i class="icon-format-list-bulleted-2"></i>
        </button>
        <button @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'is-active': editor.isActive('orderedList') }">
            <i class="icon-format-list-numbered-2"></i>
        </button>

        <editor-content :editor="editor" />
    </div>
</template>

<style lang="scss" scoped>
.tiptap {
    display: flex;
    flex-wrap: wrap;

    button {
        background-color: var(--scheme-v5);
        color: var(--scheme-v1);
        cursor: pointer;
        margin: 0;

        &:hover {
            background-color: var(--scheme-v6);
        }

        i {
            font-size: var(--scheme-font-22);
            vertical-align: sub;
        }
    }

    div {
        flex: 100%;
    }
}
</style>
