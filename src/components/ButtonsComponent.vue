<template>
    <button class="btn"><slot /></button>
</template>

<style scoped>
    button {
        font-size: 20px;
        padding: 10px 30px;
        width: 210px;
        border-radius: 10px;
        background: transparent;
        color: #fff;
        border: 1px #fff solid;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    button:hover {
        background-color: #fff;
        color: #111;
    }
</style>
