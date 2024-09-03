<script setup lang="ts">
    import TheHeader from "./components/TheHeader.vue";
    import TheHomePage from "./components/TheHomePage.vue";

    import { ref } from "vue";
    import { IMovie } from "./components/interface";

    const itemFromSearch = ref<IMovie | null>(null);
    const changeItemFromSearch = (item: IMovie): void => {
        itemFromSearch.value = item;
    };
</script>

<template>
    <div>
        <TheHeader @open-selected-item="changeItemFromSearch" />
        <TheHomePage :item-from-search="itemFromSearch" />
    </div>
</template>

<style scoped>
    @import "./assets/main.css";
</style>
