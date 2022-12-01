<script>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { ref } from 'vue'

export default {
    setup() {
        // Определяем наше хранилище
        const store = useStore()
        // определяем роутер
        const route = useRoute()

        return { route }
    },
}
</script>

<template>
    <h1>Категории</h1>

    <section>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, quibusdam perspiciatis odit facere dicta inventore saepe aspernatur repudiandae,
        aperiam mollitia sed ducimus recusandae ipsum quisquam officia dolores doloremque optio consequatur aliquid dignissimos accusamus earum provident unde.
        Atque voluptate adipisci alias aspernatur dolorem repellat, ipsam, porro dolor praesentium aut, fugit voluptatem sed. Laborum nostrum dicta at est
        facilis non corporis, distinctio molestiae eum magnam esse beatae consequuntur adipisci harum culpa eos? Deserunt, repellendus rerum ullam excepturi
        officiis illum similique consectetur consequuntur atque maxime, id fugit quas libero dolorem temporibus voluptatibus commodi voluptatem veritatis
        dolorum! Illum, vel eos quidem facilis exercitationem laudantium expedita labore aut eveniet iusto aliquid possimus enim quo, dolore ducimus accusamus
        tempore ab deserunt! Natus, iure error accusamus qui recusandae repudiandae quos excepturi similique impedit eius officiis non iusto vel, exercitationem
        magnam vitae earum eos, harum quisquam laborum! Consequatur eum architecto illum voluptatem, repellat dolor neque saepe. Nostrum, deserunt voluptatibus.
        Reiciendis sequi excepturi quia temporibus necessitatibus cum vitae error blanditiis, quo, voluptatem tempore, iure eius nobis sunt? Voluptatum ipsam
        sunt accusantium. Ea veritatis sit earum possimus, non quis repellat iste hic placeat beatae quisquam, voluptates, et amet corrupti iusto corporis
        deleniti voluptatibus iure veniam labore similique. Doloribus nulla corrupti laudantium officia explicabo ipsa praesentium rerum ab ut. Id, vero nemo
        totam tenetur possimus qui, optio facere ex quas, animi doloremque quis. Consequuntur repudiandae illum impedit deleniti sit reprehenderit voluptatibus.
        Facilis delectus earum nostrum, nisi quibusdam enim deleniti libero saepe voluptate, odio rerum et nesciunt vitae dolorum? Minima facere aliquid quas
        excepturi sunt quia unde, numquam id esse iusto eius natus? Esse distinctio quae quod architecto consectetur ipsa deleniti modi, incidunt exercitationem
        libero. Pariatur aut quidem delectus, blanditiis fuga sint maiores veniam illo possimus debitis ullam nemo fugiat adipisci nesciunt animi a fugit
        laborum dicta cum consequatur quam ab beatae.
    </section>
</template>

<style lang="scss" scoped>
h1 {
    margin: auto auto var(--scheme-gap);
    max-width: var(--scheme-width);
    padding: 0 var(--scheme-gap);
}

section {
    margin: auto;
    max-width: var(--scheme-width);
    padding: var(--scheme-gap);
}
</style>
