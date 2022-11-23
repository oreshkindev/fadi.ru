<script setup>
import useFocusTrap from '@/common/helper/useFocusTrap'
import DialogContainer from '@/components/DialogContainer.vue'

defineEmits(['close'])
defineProps({
    visible: Boolean,
})

// обязательно должно быть более 1 элемента
const { trapRef } = useFocusTrap()
</script>

<template>
    <transition name="fade">
        <div v-if="visible" class="overlay" @click="$emit('close')"></div>
    </transition>

    <transition name="slide-fade">
        <dialog v-if="visible" ref="trapRef" role="dialog">
            <dialog-container>
                <template v-slot:dialog-content>
                    <h4>Добавление новой категории товаров</h4>
                    <p>
                        Вы хотите добавить новую категорию товаров, для этого вам необходимо ввести название категории, придумать заголовок и описание, а так-же добавить товары в
                        соответсвующие разделы
                    </p>

                    <form action="">
                        <input type="text" placeholder="Название категории" required />
                        <input type="text" placeholder="Заголовок" required />
                        <textarea placeholder="Описание" cols="10" rows="5"></textarea>
                    </form>
                </template>

                <template v-slot:dialog-sidebar>
                    <picture>
                        <source srcset="@/assets/images/Component7.webp" type="image/webp" />
                        <img src="@/assets/images/Component7.jpg" decoding="async" alt="Пример наполнения" loading="lazy" />
                    </picture>
                </template>
            </dialog-container>
            <nav>
                <button>Далее</button>
                <p>1 / 4</p>
            </nav>
        </dialog>
    </transition>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.5s ease-in-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    opacity: 0;
    transform: translateY(2rem);
}

.overlay {
    background: rgba(0, 0, 0, 0.3);
    inset: 0;
    position: fixed;
}

nav {
    align-items: center;
    display: flex;
    grid-column: 1 / 3;
    justify-content: space-between;

    button {
        border: 1px solid;
        border-radius: 50px;
        color: var(--scheme-v2);
        padding: 0 40px;
        white-space: nowrap;

        &:not([disabled]):hover {
            background-color: var(--scheme-v2);
            color: var(--scheme-v4);
        }

        &:disabled {
            color: var(--scheme-v3);
            cursor: default;
        }
    }

    p {
        padding: 0;
    }
}

dialog {
    border: none;
    display: grid;
    gap: var(--scheme-gap);
    inset: 0;
    margin: auto;
    padding: var(--scheme-gap);
    z-index: 10;
    max-width: 90vw;
}

h4 {
    max-width: 500px;
}

p {
    max-width: 500px;
}

picture {
    img {
        max-width: 490px;
    }
}

form {
    display: grid;
    gap: 20px;
    max-width: 400px;

    input {
        border: 1px solid var(--scheme-v2);
        border-radius: 10px;
    }

    textarea {
        border: 1px solid var(--scheme-v2);
        border-radius: 10px;

        font: inherit;

        outline: none;
        padding: 20px 40px;
    }
}

// базовый breakpoint 1152px
@media all and (max-width: 72em) {
    form {
        max-width: 100%;
    }
}
</style>
