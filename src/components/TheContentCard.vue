<script setup lang="ts">
    import { computed } from "vue";

    import RatingBox from "./RatingBox.vue";
    import TheXmarkIcon from "./icons/TheXmarkIcon.vue";

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

    const props = defineProps<{ recomendedMovie: IMovie | null }>();

    const getTop250 = computed(() => {
        return props.recomendedMovie?.top250
            ? props.recomendedMovie?.top250
            : "";
    });

    const getSlogan = computed(() => {
        return props.recomendedMovie?.slogan
            ? props.recomendedMovie?.slogan
            : "";
    });

    const getActors = computed(() => {
        let filtered = null;
        if (props.recomendedMovie) {
            const persons = props.recomendedMovie?.persons;
            filtered = persons
                .filter((per) => per?.profession === "актеры")
                .splice(0, 5);
        }
        return filtered;
    });

    const getProducers = computed(() => {
        let filtered = null;
        if (props.recomendedMovie) {
            const persons = props.recomendedMovie?.persons;
            filtered = persons
                .filter((per) => per?.profession === "режиссеры")
                .splice(0, 2);
        }
        return filtered;
    });

    const getCountries = computed(() => {
        return props.recomendedMovie?.countries
            ? props.recomendedMovie?.countries.map((el) => el.name).join(", ")
            : "";
    });

    const getFees = computed(() => {
        return props.recomendedMovie?.fees ? props.recomendedMovie?.fees : "";
    });

    const getPremiereWorld = computed(() => {
        return props.recomendedMovie?.premiere?.world
            ? new Date(
                  props.recomendedMovie?.premiere?.world
              ).toLocaleDateString()
            : "";
    });

    const getPremiereRussia = computed(() => {
        return props.recomendedMovie?.premiere?.russia
            ? new Date(
                  props.recomendedMovie?.premiere?.russia
              ).toLocaleDateString()
            : "";
    });

    const getAge = computed(() => {
        return props.recomendedMovie?.ageRating
            ? props.recomendedMovie?.ageRating
            : "";
    });

    const emit = defineEmits(["close-details"]);
</script>

<template>
    <div class="content-box">
        <div class="content-card">
            <TheXmarkIcon class="xmark-icon" @click="emit('close-details')" />
            <div class="content-card__left-side one-side">
                <h1 class="content-card__header">
                    {{ props.recomendedMovie?.name }}
                </h1>
                <h4 class="content-card__en-header">
                    {{ props.recomendedMovie?.alternativeName }}
                </h4>

                <RatingBox
                    :recomended-movie="recomendedMovie"
                    class="rating-box--margin"
                />
                <div class="content-card__top" v-if="getTop250">
                    <span>Топ 250:</span> {{ getTop250 }} место
                </div>

                <div class="content-card__description">
                    {{ recomendedMovie?.description }}
                </div>

                <div class="content-card__slogan" v-if="getSlogan">
                    <span>Слоган: </span>{{ getSlogan }}
                </div>
            </div>
            <div class="content-card__right-side one-side">
                <div class="content-card__column">
                    <div class="content-card__actors">
                        <h3>В главных ролях:</h3>
                        <div
                            class="content-card__actor actors"
                            v-for="actor in getActors"
                            :key="actor.name"
                        >
                            <img
                                :src="actor.photo"
                                class="actors__photo photo"
                            />
                            <span class="actors__name">{{ actor.name }}</span>
                        </div>
                    </div>

                    <div class="content-card__producers">
                        <h3>Режиссеры:</h3>
                        <div
                            class="content-card__producer producers"
                            v-for="producer in getProducers"
                            :key="producer.name"
                        >
                            <img
                                :src="producer.photo"
                                class="producers__photo photo"
                            />
                            <span class="producers__name">{{
                                producer.name
                            }}</span>
                        </div>
                    </div>
                </div>

                <div class="content-card__column additional-info">
                    <div class="additional-info__countries" v-if="getCountries">
                        <span>{{
                            getCountries.indexOf(",") > 1
                                ? "Страны:"
                                : "Страна:"
                        }}</span>
                        <div class="countries-list">
                            {{ getCountries }}
                        </div>
                    </div>

                    <div class="additional-info__fees" v-if="getFees">
                        <div class="fees-russia" v-if="getFees.russia">
                            <span>Сборы в России:</span>
                            {{ getFees.russia.currency + getFees.russia.value }}
                        </div>
                        <div class="fees-world" v-if="getFees.world">
                            <span>Сборы в мире:</span>
                            {{ getFees.world.currency + getFees.world.value }}
                        </div>
                    </div>

                    <div class="additional-info__premiere">
                        <div class="premiere-world" v-if="getPremiereWorld">
                            <span>Премьера в мире: </span>{{ getPremiereWorld }}
                        </div>
                        <div class="premiere-russia" v-if="getPremiereRussia">
                            <span>Премьера в России: </span
                            >{{ getPremiereRussia }}
                        </div>
                    </div>

                    <div class="additional-info__age" v-if="getAge">
                        {{ getAge + "+" }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .content-box {
        /*display: none;*/
        position: absolute;
        left: 0;
        top: 0;
        height: 100vh;
        width: 100%;
        background-color: #000000b0;
        z-index: 9999;
        color: #000;
    }
    .content-card {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 80%;
        height: auto;
        background-color: #ffffff;
        border-radius: 20px;
        padding: 40px;
        display: flex;
        gap: 30px 40px;
    }

    .xmark-icon {
        position: absolute;
        right: 10px;
        top: 10px;
        height: 25px;
    }

    .one-side {
        flex: 1;
    }

    .content-card__header {
        font-size: 60px;
        line-height: 70px;
        font-family: "Oswald", "Poppins", sans-serif;
    }

    .content-card__en-header {
        margin-bottom: 15px;
    }

    .rating-box--margin {
        margin-bottom: 10px;
    }

    .content-card__top {
        font-size: 18px;
        margin-bottom: 15px;
    }

    .content-card__top span,
    .content-card__slogan span,
    .additional-info__countries span,
    .additional-info__fees span,
    .additional-info__premiere span {
        font-weight: bold;
    }

    .content-card__description {
        text-align: justify;
        margin-bottom: 15px;
        font-size: 20px;
        line-height: 25px;
    }

    .content-card__slogan {
        margin-bottom: 15px;
        font-size: 18px;
    }

    .content-card__right-side {
        display: flex;
        justify-content: space-between;
        gap: 10px;
    }

    .content-card__actors {
        margin-bottom: 15px;
    }

    .content-card__actor,
    .content-card__producer {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .content-card__actor:not(:last-child),
    .content-card__producer:not(:last-child) {
        margin-bottom: 5px;
    }

    .photo {
        width: 40px;
    }

    .additional-info__countries {
        display: flex;
        gap: 6px;
        margin-bottom: 15px;
    }

    .additional-info__fees {
        margin-bottom: 15px;
    }

    .additional-info__premiere {
        margin-bottom: 15px;
    }

    .additional-info__age {
        height: 45px;
        width: 45px;
        border: 2px #000 solid;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
