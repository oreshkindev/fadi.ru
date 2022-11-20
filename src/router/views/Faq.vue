<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// components/ui
import Breadcrumbs from '@/components/ui/Breadcrumbs.vue'
import DropdownItem from '@/components/DropdownItem.vue'
import { defineAsyncComponent, ref } from 'vue'

const FormGroup = defineAsyncComponent(() => import('@/components/forms/FormGroup.vue'))
const Checkbox = defineAsyncComponent(() => import('@/components/ui/Checkbox.vue'))

const form = ref({
    subject: '',
    name: '',
    email: '',
    text: '',
})

const checked = ref(false)

const send = () => {
    console.log(form.value)
}
</script>

<template>
    <Breadcrumbs :array="['home']" />

    <h1>Часто задаваемые вопросы</h1>

    <section>
        <DropdownItem>
            <template v-slot:dropdown-trigger>Как определить свой размер</template>
            <template v-slot:dropdown-content
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, eius? Harum illo eius, obcaecati reiciendis tempora beatae amet illum debitis ad labore similique
                optio autem pariatur? Aliquam dolorum fugiat deserunt obcaecati recusandae quae adipisci numquam aut repellendus mollitia nesciunt nobis, quidem quibusdam
                voluptates optio praesentium eligendi reiciendis ipsam expedita! Expedita adipisci neque autem ut facilis doloribus corporis dolore maiores sapiente nulla nostrum
                animi veniam reiciendis est hic itaque doloremque quam laudantium et sed, aut perspiciatis alias. Illo, provident facilis reprehenderit est incidunt nostrum
                corporis veniam corrupti optio similique consequuntur perferendis nesciunt et quis!
            </template>
        </DropdownItem>

        <DropdownItem>
            <template v-slot:dropdown-trigger>Как скачать выкройку</template>
            <template v-slot:dropdown-content
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, eius? Harum illo eius, obcaecati reiciendis tempora beatae amet illum debitis ad labore similique
                optio autem pariatur? Aliquam dolorum fugiat deserunt obcaecati recusandae quae adipisci numquam aut repellendus mollitia nesciunt nobis, quidem quibusdam
                voluptates optio praesentium eligendi reiciendis ipsam expedita! Expedita adipisci neque autem ut facilis doloribus corporis dolore maiores sapiente nulla nostrum
                animi veniam reiciendis est hic itaque doloremque quam laudantium et sed, aut perspiciatis alias. Illo, provident facilis reprehenderit est incidunt nostrum
                corporis veniam corrupti optio similique consequuntur perferendis nesciunt et quis!
            </template>
        </DropdownItem>

        <DropdownItem>
            <template v-slot:dropdown-trigger>Как купить и посмотреть мастер-классы</template>
            <template v-slot:dropdown-content
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, eius? Harum illo eius, obcaecati reiciendis tempora beatae amet illum debitis ad labore similique
                optio autem pariatur? Aliquam dolorum fugiat deserunt obcaecati recusandae quae adipisci numquam aut repellendus mollitia nesciunt nobis, quidem quibusdam
                voluptates optio praesentium eligendi reiciendis ipsam expedita! Expedita adipisci neque autem ut facilis doloribus corporis dolore maiores sapiente nulla nostrum
                animi veniam reiciendis est hic itaque doloremque quam laudantium et sed, aut perspiciatis alias. Illo, provident facilis reprehenderit est incidunt nostrum
                corporis veniam corrupti optio similique consequuntur perferendis nesciunt et quis!
            </template>
        </DropdownItem>

        <DropdownItem>
            <template v-slot:dropdown-trigger>Инструкция по распечатке и сборке выкройки</template>
            <template v-slot:dropdown-content
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, eius? Harum illo eius, obcaecati reiciendis tempora beatae amet illum debitis ad labore similique
                optio autem pariatur? Aliquam dolorum fugiat deserunt obcaecati recusandae quae adipisci numquam aut repellendus mollitia nesciunt nobis, quidem quibusdam
                voluptates optio praesentium eligendi reiciendis ipsam expedita! Expedita adipisci neque autem ut facilis doloribus corporis dolore maiores sapiente nulla nostrum
                animi veniam reiciendis est hic itaque doloremque quam laudantium et sed, aut perspiciatis alias. Illo, provident facilis reprehenderit est incidunt nostrum
                corporis veniam corrupti optio similique consequuntur perferendis nesciunt et quis!
            </template>
        </DropdownItem>

        <h5>
            Еще остались вопросы? <br />
            Задайте их нам
        </h5>

        <Form-group :data="form" button="Отправить заявку" :checkbox="checked" @prepared="send">
            <slot>
                <input v-model="form.subject" type="text" placeholder="Тема вопроса" required />
                <input v-model="form.name" type="text" placeholder="Ваше имя" required />
                <input v-model="form.email" type="text" placeholder="Email" required />
                <textarea v-model="form.text" id="" cols="30" rows="10" />

                <Checkbox text="Я согласен с политикой конфиденциальности и даю согласие на обработку моих персональных данных" @checked="checked = !checked" />
            </slot>
        </Form-group>
    </section>
</template>

<style lang="scss" scoped>
nav,
h1 {
    max-width: var(--scheme-max-width);
    padding: 0 var(--scheme-gap);
    width: 100%;
}

section {
    display: grid;
    // gap: var(--scheme-gap);
    padding: 0 var(--scheme-gap);
    width: 100%;

    h5 {
        font: 400 var(--scheme-m) / 1.2 var(--scheme-font);
        margin: 100px 0 var(--scheme-gap);
    }

    form {
        display: grid;
        max-width: 100%;

        input {
            grid-column: 1 / 3;

            &:nth-child(2) {
                grid-column: 1 / 2;
            }
            &:nth-child(3) {
                grid-column: 2 / 3;
            }
        }

        textarea {
            border: 1px solid var(--scheme-v2);
            border-radius: 10px;

            font: inherit;

            grid-column: 1 / 3;
            outline: none;
            padding: 20px 40px;
        }

        fieldset {
            grid-column: 1 / 3;
            margin: 0;
            max-width: 600px;
        }
    }
}

// последний breakpoint для Samsung S10 360x760px
@media all and (max-width: 42em) {
    section {
        form {
            input {
                grid-column: 1 / 3 !important;
            }
        }
    }
}
</style>
