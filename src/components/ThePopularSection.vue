<script setup lang="ts">
    import { ref, onMounted } from "vue";
    import "vue3-carousel/dist/carousel.css";
    import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

    let popularMovies = ref(null);

    interface IPopularMovies {
        docs: Object[];
        total: number;
        limit: number;
        page: number;
        pages: number;
    }

    interface IPerson {
        description: string;
        enName: string | null;
        enProfession: string;
        id: number;
        name: string;
        photo: string | null;
        profession: string;
    }
    interface ICountry {
        name: string;
    }

    interface IPremiere {
        bluray: string;
        cinema: string;
        digital: string;
        dvd: string;
        russia: string;
        world: string;
    }

    interface IMovie {
        ageRating: number | null;
        alternativeName: string | null;
        audience?: object[] | null;
        backdrop: {
            previeUrl: string | null;
            url: string;
        };
        budget?: object | null;
        countries: ICountry[] | null;
        deleteedAt: any;
        description: string | null;
        distributors: any;
        enName: string | null;
        externalId: any;
        facts: object[];
        fees: any;
        genres: object[] | null;
        id: number;
        isSeries: boolean | null;
        lists: string[];
        movieLength: number | null;
        name: string;
        names: any;
        networks: any;
        persons: IPerson[] | null;
        poster: any;
        premiere: IPremiere | null;
        rating: {
            kp?: number;
            imdb?: number;
        };
        ratingMpaa: any;
        seriesLength: any;
        shortDescription: string | null;
        slogan: string | null;
        status: any;
        ticketsOnSale: any;
        top10: any;
        top250: any;
        totalSeriesLength: any;
        type: string;
        typeNumber: number | null;
        updatedAt: any;
        votes: any;
        watchability: any;
        year: number | null;
    }

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
        const res: IPopularMovies = await response.json();
        popularMovies.value = res.docs;
        console.log(popularMovies.value);
    };

    onMounted(() => getPopularMovies());
    const emit = defineEmits(["set-target-movie"]);

    const getSelectedMovie = (targetMovie: IMovie) => {
        console.log(targetMovie);
        emit("set-target-movie", targetMovie);
    };
</script>

<template>
    <div class="popular-container">
        <h4 class="popular-header">Популярное</h4>
        <carousel
            :items-to-show="6"
            class="popular-list"
            snap-align="start"
            :wrap-around="true"
            :autoplay="3000"
            :transition="600"
            :pauseAutoplayOnHover="true"
        >
            <template #slides>
                <slide
                    v-for="movie in popularMovies"
                    :key="movie.id"
                    class="popular-list-item"
                    :style="`background-image: url( ${movie.backdrop.url})`"
                    @click="getSelectedMovie(movie)"
                >
                    <div class="background-box"></div>
                    <span class="popular-movie-name">{{ movie.name }}</span>
                </slide>
            </template>

            <template #addons>
                <navigation class="buttons-carousel" />
                <pagination />
            </template>
        </carousel>
    </div>
</template>

<style scoped>
    .popular-container {
        color: #fff;
        width: 100%;
        position: relative;
        z-index: 100;
        padding: 0 50px;
    }

    h4 {
        font-size: 25px;
        margin-bottom: 10px;
    }

    .popular-list-item {
        display: inline-block;
        height: 200px;
        width: 300px;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        cursor: pointer;
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
        height: 100%;
        width: 100%;
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
        font-family: "Oswald", "Poppins", sans-serif;
    }
</style>
