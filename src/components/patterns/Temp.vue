<template>
    <article>
        <picture>
            <source srcset="@/assets/images/blank426.webp" type="image/webp" />
            <img src="@/assets/images/blank426.jpg" decoding="async" alt="fadi" />
        </picture>
        <p>Свитер Новогодний</p>
        <ul>
            <span>Размер</span>
            <li>S</li>
            <li>S</li>
            <li>S</li>
            <li>S</li>
        </ul>
        <p>Перейти к товару</p>
    </article>
</template>

<style scoped lang="scss">
article {
    border-right: 1px solid var(--scheme-v6);
    overflow: hidden;
    padding: var(--scheme-gap) var(--scheme-gap) 0 0;
    position: relative;

    &::after {
        animation: shimmer 2s infinite;
        background: linear-gradient(90deg, #0000 33%, rgba(255, 255, 255, 0.3) 50%, #0000 66%) transparent;
        bottom: 0;
        content: '';
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(-200%);
    }

    p {
        background-color: var(--scheme-v6);
        border-radius: 50px;
        color: transparent;
        padding: 0;
        width: fit-content;
    }

    ul {
        color: transparent;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        margin: 20px 0;

        span {
            background-color: var(--scheme-v6);
            border-radius: 50px;
        }

        li {
            background-color: var(--scheme-v6);
            color: transparent;
            padding: 2px 10px;
        }
    }
}

picture {
    img {
        width: 100%;
        display: block;
    }
}

// базовый breakpoint 1152px
@media all and (max-width: 72em) {
    article {
        &:nth-child(3) {
            border-right: none;
            padding: var(--scheme-gap) 0 0 var(--scheme-gap);
        }
    }
}

// последний breakpoint для Samsung S10 360x760px
@media all and (max-width: 42em) {
    article {
        border-bottom: 1px solid var(--scheme-v6);
        border-right: none;
        grid-column: 1 / 2;
        padding: var(--scheme-gap) 0 !important;
    }
}
</style>
