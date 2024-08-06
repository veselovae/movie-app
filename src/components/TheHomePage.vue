<script setup lang="ts">
    import { onMounted, ref, computed } from "vue";
    import ButtonsComponent from "./ButtonsComponent.vue";
    import ThePopularSection from "./ThePopularSection.vue";

    interface IMovie {
        ageRating: number | null;
        alternativeName: string | null;
        audience?: object[] | null;
        backdrop: {
            previeUrl: string | null;
            url: string;
        };
        budget?: object | null;
        countries: object[] | null;
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
        persons: object[] | null;
        poster: any;
        premiere: object | null;
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

    let recomendedMovie = ref<IMovie>(null);

    // &year=2024

    // const requiredFields = {
    //     notNullFields: [
    //         "id",
    //         "year",
    //         "genres.name",
    //         "shortDescription",
    //         "rating.kp",
    //         "rating.imdb",
    //         "movieLength",
    //         "countries.name",
    //         "persons.enName",
    //         "backdrop.url",
    //     ],
    // };

    const options: object = {
        method: "GET",
        headers: {
            accept: "application/json",
            "X-API-KEY": "DTJYGKA-TZXM1QK-NN48GZC-CFDX2FR",
        },
    };

    const getRecommendedMovie = async () => {
        const response = await fetch(
            "https://api.kinopoisk.dev/v1.4/movie/random?lists=popular-films&notNullFields=backdrop.url",
            options
        );
        const res: IMovie = await response.json();
        recomendedMovie.value = res;
        console.log(recomendedMovie.value);
    };

    onMounted((): void => {
        getRecommendedMovie();
    });

    const getBackgroundStyle = computed((): string => {
        return `background-image: url( ${
            recomendedMovie.value ? recomendedMovie.value.backdrop.url : ""
        })`;
    });
    const getName = computed((): string => {
        return recomendedMovie.value?.name ? recomendedMovie.value?.name : "";
    });

    const getIMDbRating = computed((): string => {
        return recomendedMovie.value?.rating?.imdb
            ? Math.floor(recomendedMovie.value.rating.imdb) + "/10"
            : "";
    });

    const getKPRating = computed((): string => {
        return recomendedMovie.value?.rating?.kp
            ? Math.floor(recomendedMovie.value.rating.kp) + "/10"
            : "";
    });

    const getYear = computed((): string => {
        return recomendedMovie.value?.year
            ? String(recomendedMovie.value.year)
            : "";
    });

    interface IGenre {
        name: string;
    }

    const getGenres = computed((): string => {
        if (recomendedMovie.value?.genres) {
            const genres = recomendedMovie.value.genres;
            const genresString = genres
                .map((item: IGenre) => item.name)
                .join(", ");
            return genresString;
        } else {
            return "";
        }
    });

    const getMovieLength = computed((): string => {
        if (recomendedMovie.value?.movieLength) {
            const movieLengthMin = recomendedMovie.value?.movieLength;
            const hours = Math.floor(movieLengthMin / 60);
            const minutes = movieLengthMin % 60;
            return `${hours ? hours + "ч" : ""} ${minutes}м`;
        }
        return "";
    });

    const getDescription = computed((): string => {
        return recomendedMovie.value?.shortDescription
            ? recomendedMovie.value?.shortDescription
            : "";
    });
</script>

<template>
    <div class="home-container" :style="getBackgroundStyle">
        <div class="background-box"></div>
        <div class="film-info-box">
            <!-- <h1>{{ getName }}</h1> -->
            <h1>{{ getName }}</h1>
            <div class="rating-and-details">
                <div class="rating-box">
                    <div class="imdb-rating rating" v-if="getIMDbRating">
                        <img
                            src="../assets/IMDb_Logo.png"
                            alt="IMDb"
                            class="rating-logo imdb-logo"
                        />
                        <img
                            src="../assets/star-icon.png"
                            class="star-rating-logo"
                        />
                        <span>{{ getIMDbRating }}</span>
                    </div>
                    <div class="kp-rating rating" v-if="getKPRating">
                        <img
                            src="../assets/Kinopoisk_logo.png"
                            alt="KP"
                            class="rating-logo kp-logo"
                        />
                        <img
                            src="../assets/star-icon.png"
                            class="star-rating-logo"
                        />
                        <span>{{ getKPRating }}</span>
                    </div>
                </div>
                <div class="movie-details">
                    <div class="year movie-details-item" v-if="getYear">
                        {{ getYear }}
                    </div>
                    <div class="genres movie-details-item" v-if="getGenres">
                        {{ getGenres }}
                    </div>
                    <div
                        class="movie-length movie-details-item"
                        v-if="getMovieLength"
                    >
                        {{ getMovieLength }}
                    </div>
                </div>
            </div>
            <div class="movie-short-description">
                {{ getDescription }}
            </div>
            <div class="buttons-box">
                <!--buttons x2-->
                <ButtonsComponent class="play-now-btn"
                    >Смотреть</ButtonsComponent
                >
                <ButtonsComponent class="favourites-btn">
                    <svg
                        class="favorites-btn-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                    >
                        <path
                            d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"
                        />
                    </svg>
                </ButtonsComponent>
                <ButtonsComponent>Узнать больше</ButtonsComponent>
            </div>

            <ThePopularSection />
        </div>
    </div>
</template>

<style scoped>
    .home-container {
        overflow-y: hidden;
        overflow-x: hidden;
        background-color: #111;
        height: 100vh;
        width: 100%;
        color: #fff;
        /*background-image: url("../assets/movie-poster.jpg");*/
        background-repeat: no-repeat;
        background-size: cover;
        font-size: 20px;
        padding-top: 150px;
        z-index: 1;
    }

    .background-box {
        z-index: 2;
        left: 0;
        top: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #00000081;
    }

    .film-info-box {
        z-index: 100;
        position: relative;
        padding-left: 50px;
        padding-bottom: 30px;
        border-radius: 30px;
        width: 50%;
        /*background-color: #a1a1a167;
        box-shadow: 0px -1px 23px 29px #a1a1a167;*/
    }

    h1 {
        font-size: 90px;
        font-family: "Oswald", "Poppins", sans-serif;
        margin-bottom: 30px;
        line-height: 100px;
    }

    .rating-and-details,
    .rating,
    .movie-details,
    .rating-box {
        display: flex;
        align-items: center;
    }

    .rating-and-details {
        margin-bottom: 30px;
    }

    .rating-box {
        gap: 20px;
        margin-right: 30px;
    }

    .rating {
        gap: 5px;
        align-items: center;
    }

    .rating-logo {
        height: 20px;
    }

    .star-rating-logo {
        height: 15px;
    }

    .movie-details {
        gap: 20px;
    }

    .movie-details-item {
        position: relative;
    }

    .movie-details-item:not(:first-child)::before {
        content: "";
        position: absolute;
        left: -10px;
        top: 13px;
        height: 4px;
        width: 4px;
        border-radius: 50%;
        background-color: #fff;
    }

    .movie-short-description {
        margin-bottom: 30px;
        width: 90%;
    }

    .buttons-box {
        display: flex;
    }
    .play-now-btn {
        margin-right: 10px;
        background-color: #fff;
        color: #111;
    }

    .play-now-btn:hover {
        background-color: transparent;
        color: #fff;
    }
    .favourites-btn {
        margin-right: 10px;
        width: auto;
    }

    .favourites-btn:hover .favorites-btn-svg {
        fill: black;
    }

    .favorites-btn-svg {
        height: 25px;
        width: 25px;
        fill: #fff;
    }
</style>
