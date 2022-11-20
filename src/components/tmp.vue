<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
    <nav>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, laboriosam, odit impedit reiciendis delectus obcaecati quisquam porro nulla, repellat ratione expedita
        provident excepturi error. Eos quae voluptatibus consequuntur a dolore!
    </nav>
    <h4>Lorem ipsum dolor sit.</h4>
    <section>
        <div>
            <article>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dolor! Explicabo quasi expedita obcaecati nulla! Perspiciatis, illum. Totam, suscipit. Vitae, quia
                nulla deserunt amet fuga ducimus hic nisi similique illo.
            </article>

            <article>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dolor! Explicabo quasi expedita obcaecati nulla! Perspiciatis, illum. Totam, suscipit. Vitae, quia
                nulla deserunt amet fuga ducimus hic nisi similique illo.
            </article>

            <article>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dolor! Explicabo quasi expedita obcaecati nulla! Perspiciatis, illum. Totam, suscipit. Vitae, quia
                nulla deserunt amet fuga ducimus hic nisi similique illo.
            </article>
        </div>

        <aside>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, illo molestiae? Illum iusto fugit ipsam ea quaerat labore dolor, voluptas possimus minima cupiditate
            omnis nesciunt numquam soluta doloremque! Adipisci, magni!
        </aside>
    </section>
</template>

<style lang="scss" scoped>
nav,
h4,
div,
aside {
    background-color: var(--scheme-v6);
}

nav,
h4 {
    max-width: var(--scheme-max-width);
    padding: 0 var(--scheme-gap);
    width: 100%;
}

section {
    display: grid;
    gap: var(--scheme-gap);

    div {
        grid-column: 1 / 2;
        padding: var(--scheme-gap);
    }

    aside {
        grid-column: 2 / 3;
        padding: var(--scheme-gap);
    }
}

// базовый breakpoint 1152px
@media all and (max-width: 72em) {
    section {
        div {
            grid-column: 1 / 3;
        }

        aside {
            grid-column: 1 / 3;
        }
    }
}
</style>
