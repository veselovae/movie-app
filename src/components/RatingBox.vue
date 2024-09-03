<template>
    <div class="rating-box">
        <div class="imdb-rating rating" v-if="getIMDbRating">
            <img
                src="../assets/IMDb_Logo.png"
                alt="IMDb"
                class="rating-logo imdb-logo"
            />
            <img src="../assets/star-icon.png" class="star-rating-logo" />
            <span>{{ getIMDbRating }}</span>
        </div>
        <div class="kp-rating rating" v-if="getKPRating">
            <img
                src="../assets/Kinopoisk_logo.png"
                alt="KP"
                class="rating-logo kp-logo"
            />
            <img src="../assets/star-icon.png" class="star-rating-logo" />
            <span>{{ getKPRating }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { computed } from "vue";
    import { IMovie } from "./interface";

    const props = defineProps<{ recomendedMovie: IMovie | null }>();

    const getIMDbRating = computed((): string => {
        return props.recomendedMovie?.rating?.imdb
            ? Math.floor(props.recomendedMovie.rating.imdb) + "/10"
            : "";
    });

    const getKPRating = computed((): string => {
        return props.recomendedMovie?.rating?.kp
            ? Math.floor(props.recomendedMovie.rating.kp) + "/10"
            : "";
    });
</script>

<style scoped>
    .rating-box,
    .rating {
        display: flex;
        align-items: center;
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
</style>
