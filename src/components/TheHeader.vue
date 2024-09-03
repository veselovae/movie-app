<script setup lang="ts">
    import logo from "./icons/TheLogo.vue";
    import searchIcon from "./icons/TheSearchIcon.vue";
    import ItemOfNavigation from "./ItemOfNavigation.vue";

    import { ref } from "vue";
    import { IMovie, IPopularMovies } from "./interface";

    const nvigationItems = ref<string[]>([
        "Главная",
        "Избранное",
        "Категории",
        "Фильмы",
        "Сериалы",
    ]);

    const options: object = {
        method: "GET",
        headers: {
            accept: "application/json",
            "X-API-KEY": "DTJYGKA-TZXM1QK-NN48GZC-CFDX2FR",
        },
    };

    let searchValue = ref<string>("");
    let searchResults = ref<IMovie[] | null>([]);

    const showSearchResults = async () => {
        const response = await fetch(
            `https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=10&query=${searchValue.value}`,
            options
        );
        const res = (await response.json()) as IPopularMovies;
        searchResults.value = res.docs;
        console.log(res);
    };

    function debounce(callback: Function, ms: number) {
        return function perform(...args) {
            let previousCall = this.lastCall;

            this.lastCall = Date.now();

            if (previousCall && this.lastCall - previousCall <= ms) {
                clearTimeout(this.lastCallTimer);
            }

            this.lastCallTimer = setTimeout(() => callback(...args), ms);
        };
    }

    const debouncedshowSearchResults = debounce(showSearchResults, 500);

    const showRecomendations = async () => {
        if (!searchValue.value) {
            const response = await fetch(
                `https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=10&query=''`,
                options
            );
            const res = await response.json();
            searchResults.value = res.docs;
            console.log(res);
        }
    };

    const emit = defineEmits(["open-selected-item"]);
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
            <input
                type="text"
                class="search-inp"
                @input="debouncedshowSearchResults"
                @click="showRecomendations"
                v-model="searchValue"
            />
            <searchIcon class="search-icon" />
            <div class="search-results">
                <div
                    class="search-results-empty"
                    v-if="!searchResults.length && !searchValue"
                >
                    Нет результатов
                </div>
                <div class="search-results-items" v-else>
                    <li
                        class="search-results__item"
                        v-for="item of searchResults"
                        :key="item.id"
                        @click="emit('open-selected-item', item)"
                    >
                        <div class="search-results__poster">
                            <img :src="item.poster.url" />
                        </div>
                        <div class="search-name">
                            <p>
                                {{
                                    item.name.length > 45
                                        ? item.name.slice(0, 40) + "..."
                                        : item.name
                                }}
                            </p>
                        </div>
                    </li>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 50px;
        background-color: #000000a1;
        position: fixed;
        z-index: 30;
        width: 100%;
        color: #fff;
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
        border: 2px #fff solid;
        border-radius: 10px;
        cursor: pointer;
        display: flex;
        position: relative;
    }

    .search-inp {
        width: 250px;
        background: transparent;
        border: 0;
        border-radius: 20px;
        color: #fff;
        padding-left: 15px;
    }

    .search-inp:focus,
    .search-inp:focus-visible,
    .search-inp:active {
        border: 0;
        outline: 0;
    }

    .search-icon {
        box-sizing: content-box !important;
        position: relative;
        right: 0;
        height: 20px;
        width: 20px;
        padding: 10px;
        font-size: 20px;
    }

    .search-results {
        display: none;
        position: absolute;
        left: 0;
        top: 50px;
        width: 290px;
        /*height: 50px;*/
        max-height: 370px;
        border-radius: 5px;
        background-color: #ffffffc7;
        list-style: none;
        overflow-y: scroll;
        padding: 15px;
    }

    .search-inp:focus ~ .search-results,
    .search-results:hover {
        display: block;
    }

    .search-results-empty {
        color: #000;
        font-size: 20px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .search-results__item {
        display: flex;
        align-items: center;
        gap: 10px;
        color: #000;
        font-size: 17px;
    }

    .search-results__item:not(:last-child) {
        margin-bottom: 5px;
    }

    .search-results__item:hover {
        background-color: #c6c6c6;
        border-radius: 5px;
    }

    .search-results__poster {
        height: 80px;
    }

    .search-results__poster img {
        height: 100%;
    }
</style>
