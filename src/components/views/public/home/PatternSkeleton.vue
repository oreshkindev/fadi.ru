<template>
    <article>
        <picture>
            <img src="@/assets/images/skeleton.avif" decoding="async" alt="fadi" loading="lazy" />
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

    <article>
        <picture>
            <img src="@/assets/images/skeleton.avif" decoding="async" alt="fadi" loading="lazy" />
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

    <button>Посмотреть каталог</button>
</template>

<style scoped lang="scss">
article {
    border-right: 1px solid var(--scheme-v3);
    overflow: hidden;
    padding: var(--scheme-gap) var(--scheme-gap) 0 0;
    position: relative;

    &::after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transform: translateX(-200%);
        background: linear-gradient(90deg, #0000 33%, rgba(255, 255, 255, 0.3) 50%, #0000 66%) transparent;
        animation: shimmer 2s infinite;
        content: '';
    }

    p {
        background-color: var(--scheme-v3);
        color: transparent;
        padding: 0;
        width: fit-content;
    }

    ul {
        color: transparent;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        margin: 40px 0;

        span {
            background-color: var(--scheme-v3);
        }

        li {
            background-color: var(--scheme-v3);
            color: transparent;
            padding: 2px 10px;
        }
    }
}

button {
    background-color: var(--scheme-v3);
    border-radius: 50px;
    color: transparent;
    cursor: default;
    margin: var(--scheme-gap) auto auto 0;
    padding: 4px 40px;
}

@keyframes shimmer {
    100% {
        transform: translateX(100%);
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

    button {
        grid-column: 1 / 3;
        margin: var(--scheme-gap) auto;
    }
}

// последний breakpoint для Samsung S10 360x760px
@media all and (max-width: 42em) {
    article {
        border-bottom: 1px solid var(--scheme-v3);
        border-right: none;
        grid-column: 1 / 2;
        padding: var(--scheme-gap) 0 !important;
    }
}
</style>
