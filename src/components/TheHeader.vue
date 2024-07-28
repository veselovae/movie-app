<script setup lang="ts">
    import logo from "./icons/TheLogo.vue";
    import searchIcon from "./icons/TheSearchIcon.vue";
</script>
<template>
    <header>
        <div class="logo-and-navigation-container">
            <logo class="logo" />
            <div class="navigation">
                <li class="navigation-item">Home</li>
                <li class="navigation-item">Whatchlist</li>
                <li class="navigation-item">Categories</li>
                <li class="navigation-item">Movie</li>
                <li class="navigation-item">Series</li>
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
        padding: 0 50px;
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

    .navigation-item {
        cursor: pointer;
    }

    .logo {
        height: 60px;
    }

    .search-container {
        border: 1px black solid;
        box-sizing: content-box;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
    }
    .search-icon {
        height: 20px;
        width: 20px;
        padding: 10px;
    }
</style>
