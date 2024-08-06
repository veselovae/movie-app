<script setup lang="ts">
    import { ref, onMounted, computed } from "vue";

    let popularMovies = ref(null);

    const options: object = {
        method: "GET",
        headers: {
            accept: "application/json",
            "X-API-KEY": "DTJYGKA-TZXM1QK-NN48GZC-CFDX2FR",
        },
    };

    const getPopularMovies = async () => {
        const response = await fetch(
            "https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10&selectFields=&notNullFields=backdrop.url&lists=popular-films",
            options
        );
        const res: object = await response.json();
        popularMovies.value = res.docs;
        console.log(popularMovies.value);
    };

    onMounted(() => getPopularMovies());
</script>

<template>
    <div class="popular-container">
        <h4 class="popular-header">Популярное</h4>
        <div class="popular-list">
            <div
                class="popular-list-item"
                v-for="movie in popularMovies"
                :key="movie.id"
                :style="`background-image: url( ${movie.backdrop.url})`"
            >
                <div class="background-box"></div>
                <span class="popular-movie-name">{{ movie.name }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .popular-container {
        color: #fff;
    }

    .popular-list {
        width: max-content;
    }

    .popular-list-item {
        display: inline-block;
        height: 200px;
        width: 300px;
        background-color: aqua;
        margin-right: 5px;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
    }

    .popular-list-item:hover .background-box {
        visibility: visible;
    }

    .popular-list-item:hover .popular-movie-name {
        visibility: visible;
    }

    .background-box {
        position: absolute;
        left: 0;
        top: 0;
        height: 200px;
        width: 300px;
        background-color: #00000081;
        visibility: hidden;
        transition: all 0.2s ease;
    }

    .popular-movie-name {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 90%;
        text-align: center;
        visibility: hidden;
        transition: all 0.2s ease;
    }
</style>
