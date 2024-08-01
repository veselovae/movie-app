<template>
    <li class="navigation-item">
        <slot></slot>
    </li>
</template>

<style scoped>
    .navigation-item {
        cursor: pointer;
        position: relative;
    }

    .navigation-item::after {
        display: block;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 2px;
        background-color: #111;
        content: "";
        transition: width 0.3s ease-out;
        z-index: 30;
    }

    .navigation-item:hover::after {
        width: 100%;
    }
</style>
