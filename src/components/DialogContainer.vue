<script setup></script>
<template>
    <article>
        <slot name="dialog-content"></slot>
    </article>

    <aside>
        <slot name="dialog-sidebar"></slot>
    </aside>
</template>

<style lang="scss" scoped>
article {
    grid-column: 1 / 2;
}

aside {
    align-self: end;
    grid-column: 2 / 3;
}

// базовый breakpoint 1152px
@media all and (max-width: 72em) {
    article {
        grid-column: 1 / 3;
    }

    aside {
        grid-column: 1 / 3;
    }
}
</style>
