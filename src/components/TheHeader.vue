<script setup lang="ts">
    import logo from "./icons/TheLogo.vue";
    import searchIcon from "./icons/TheSearchIcon.vue";
    import ItemOfNavigation from "./ItemOfNavigation.vue";

    import { ref } from "vue";
    const nvigationItems = ref<string[]>([
        "Главная",
        "Избранное",
        "Категории",
        "Фильмы",
        "Сериалы",
    ]);
</script>
<template>
    <header>
        <div class="logo-and-navigation-container">
            <logo class="logo" />
            <div class="navigation">
                <ItemOfNavigation v-for="item in nvigationItems" :key="item">
                    {{ item }}
                </ItemOfNavigation>
            </div>
        </div>

        <div class="search-container">
            <searchIcon class="search-icon" />
        </div>
    </header>
</template>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 50px;
        background-color: white;
        position: fixed;
        z-index: 30;
        width: 100%;
    }

    .logo-and-navigation-container {
        display: flex;
        align-items: center;
        gap: 30px;
    }

    .navigation {
        display: flex;
        list-style: none;
        gap: 30px;
        font-weight: 600;
        font-size: 20px;
    }

    .logo {
        height: 60px;
    }

    .search-container {
        border: 1px black solid;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
    }
    .search-icon {
        box-sizing: content-box !important;
        height: 20px;
        width: 20px;
        padding: 10px;
    }
</style>
