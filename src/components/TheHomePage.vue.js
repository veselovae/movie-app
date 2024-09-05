"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = require("vue");
const ButtonsComponent_vue_1 = __importDefault(require("./ButtonsComponent.vue"));
const ThePopularSection_vue_1 = __importDefault(require("./ThePopularSection.vue"));
const TheContentCard_vue_1 = __importDefault(require("./TheContentCard.vue"));
const RatingBox_vue_1 = __importDefault(require("./RatingBox.vue"));
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await Promise.resolve().then(() => __importStar(require('vue')));
let recomendedMovie = (0, vue_1.ref)(null);
const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        "X-API-KEY": "DTJYGKA-TZXM1QK-NN48GZC-CFDX2FR",
    },
};
const getRecommendedMovie = () => __awaiter(void 0, void 0, void 0, function* () {
    // const response = await fetch(
    //     "https://api.kinopoisk.dev/v1.4/movie/random?lists=popular-films&notNullFields=backdrop.url",
    //     options
    // );
    const response = yield fetch("https://api.kinopoisk.dev/v1.4/movie/random?notNullFields=backdrop.url&notNullFields=top250&type=movie", options);
    const res = yield response.json();
    recomendedMovie.value = res;
    console.log("recomendedMovie: ", recomendedMovie.value);
});
(0, vue_1.onMounted)(() => {
    getRecommendedMovie();
});
const getBackgroundStyle = (0, vue_1.computed)(() => {
    return `background-image: url( ${recomendedMovie.value ? recomendedMovie.value.backdrop.url : ""})`;
});
const getName = (0, vue_1.computed)(() => {
    var _a, _b;
    return ((_a = recomendedMovie.value) === null || _a === void 0 ? void 0 : _a.name) ? (_b = recomendedMovie.value) === null || _b === void 0 ? void 0 : _b.name : "";
});
const getYear = (0, vue_1.computed)(() => {
    var _a;
    return ((_a = recomendedMovie.value) === null || _a === void 0 ? void 0 : _a.year)
        ? String(recomendedMovie.value.year)
        : "";
});
const getGenres = (0, vue_1.computed)(() => {
    var _a;
    if ((_a = recomendedMovie.value) === null || _a === void 0 ? void 0 : _a.genres) {
        const genres = recomendedMovie.value.genres;
        const genresString = genres
            .map((item) => item.name)
            .join(", ");
        return genresString;
    }
    else {
        return "";
    }
});
const getMovieLength = (0, vue_1.computed)(() => {
    var _a, _b;
    if ((_a = recomendedMovie.value) === null || _a === void 0 ? void 0 : _a.movieLength) {
        const movieLengthMin = (_b = recomendedMovie.value) === null || _b === void 0 ? void 0 : _b.movieLength;
        const hours = Math.floor(movieLengthMin / 60);
        const minutes = movieLengthMin % 60;
        return `${hours ? hours + "ч" : ""} ${minutes}м`;
    }
    return "";
});
const getDescription = (0, vue_1.computed)(() => {
    var _a, _b;
    return ((_a = recomendedMovie.value) === null || _a === void 0 ? void 0 : _a.shortDescription)
        ? (_b = recomendedMovie.value) === null || _b === void 0 ? void 0 : _b.shortDescription
        : "";
});
const showDetails = (0, vue_1.ref)(false);
const setRecomendedMovie = (targetMovie) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`https://api.kinopoisk.dev/v1.4/movie/${targetMovie.id}`, options);
    const res = yield response.json();
    recomendedMovie.value = res;
});
let __VLS_typeProps;
const props = defineProps();
(0, vue_1.watch)(() => props.itemFromSearch, () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`https://api.kinopoisk.dev/v1.4/movie/${props.itemFromSearch.id}`, options);
    const res = yield response.json();
    recomendedMovie.value = res;
}));
const __VLS_fnComponent = (await Promise.resolve().then(() => __importStar(require('vue')))).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("home-container") }, { style: ((__VLS_ctx.getBackgroundStyle)) }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("background-box") }));
    // @ts-ignore
    [getBackgroundStyle,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("home-container-main") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("film-info-box") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    (__VLS_ctx.getName);
    // @ts-ignore
    [getName,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("rating-and-details") }));
    // @ts-ignore
    [RatingBox_vue_1.default,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(RatingBox_vue_1.default, new RatingBox_vue_1.default({ recomendedMovie: ((__VLS_ctx.recomendedMovie)), }));
    const __VLS_1 = __VLS_0({ recomendedMovie: ((__VLS_ctx.recomendedMovie)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({ recomendedMovie: ((__VLS_ctx.recomendedMovie)), }));
    const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(RatingBox_vue_1.default, __VLS_1));
    // @ts-ignore
    [recomendedMovie,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("movie-details") }));
    if (__VLS_ctx.getYear) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("year movie-details-item") }));
        (__VLS_ctx.getYear);
        // @ts-ignore
        [getYear, getYear,];
    }
    if (__VLS_ctx.getGenres) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("genres movie-details-item") }));
        (__VLS_ctx.getGenres);
        // @ts-ignore
        [getGenres, getGenres,];
    }
    if (__VLS_ctx.getMovieLength) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("movie-length movie-details-item") }));
        (__VLS_ctx.getMovieLength);
        // @ts-ignore
        [getMovieLength, getMovieLength,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("movie-short-description") }));
    (__VLS_ctx.getDescription);
    // @ts-ignore
    [getDescription,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("buttons-box") }));
    // @ts-ignore
    [ButtonsComponent_vue_1.default, ButtonsComponent_vue_1.default,];
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(ButtonsComponent_vue_1.default, new ButtonsComponent_vue_1.default(Object.assign({ class: ("play-now-btn") })));
    const __VLS_6 = __VLS_5(Object.assign({ class: ("play-now-btn") }), ...__VLS_functionalComponentArgsRest(__VLS_5));
    ({}(Object.assign({ class: ("play-now-btn") })));
    const __VLS_9 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(ButtonsComponent_vue_1.default, __VLS_6));
    __VLS_nonNullable(__VLS_9.slots).default;
    // @ts-ignore
    [ButtonsComponent_vue_1.default, ButtonsComponent_vue_1.default,];
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(ButtonsComponent_vue_1.default, new ButtonsComponent_vue_1.default(Object.assign({ class: ("favourites-btn") })));
    const __VLS_11 = __VLS_10(Object.assign({ class: ("favourites-btn") }), ...__VLS_functionalComponentArgsRest(__VLS_10));
    ({}(Object.assign({ class: ("favourites-btn") })));
    const __VLS_14 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(ButtonsComponent_vue_1.default, __VLS_11));
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)(Object.assign({ class: ("favorites-btn-svg") }, { xmlns: ("http://www.w3.org/2000/svg"), viewBox: ("0 0 384 512") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ d: ("M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"), });
    __VLS_nonNullable(__VLS_14.slots).default;
    // @ts-ignore
    [ButtonsComponent_vue_1.default, ButtonsComponent_vue_1.default,];
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(ButtonsComponent_vue_1.default, new ButtonsComponent_vue_1.default(Object.assign({ 'onClick': {} })));
    const __VLS_16 = __VLS_15(Object.assign({ 'onClick': {} }), ...__VLS_functionalComponentArgsRest(__VLS_15));
    ({}(Object.assign({ 'onClick': {} })));
    let __VLS_20;
    const __VLS_21 = {
        onClick: (...[$event]) => {
            __VLS_ctx.showDetails = true;
            // @ts-ignore
            [showDetails,];
        }
    };
    const __VLS_19 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(ButtonsComponent_vue_1.default, __VLS_16));
    let __VLS_17;
    let __VLS_18;
    __VLS_nonNullable(__VLS_19.slots).default;
    // @ts-ignore
    [ThePopularSection_vue_1.default,];
    // @ts-ignore
    const __VLS_22 = __VLS_asFunctionalComponent(ThePopularSection_vue_1.default, new ThePopularSection_vue_1.default(Object.assign({ 'onSetTargetMovie': {} })));
    const __VLS_23 = __VLS_22(Object.assign({ 'onSetTargetMovie': {} }), ...__VLS_functionalComponentArgsRest(__VLS_22));
    ({}(Object.assign({ 'onSetTargetMovie': {} })));
    let __VLS_27;
    const __VLS_28 = {
        onSetTargetMovie: (__VLS_ctx.setRecomendedMovie)
    };
    const __VLS_26 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(ThePopularSection_vue_1.default, __VLS_23));
    let __VLS_24;
    let __VLS_25;
    // @ts-ignore
    [setRecomendedMovie,];
    if (__VLS_ctx.showDetails) {
        // @ts-ignore
        [TheContentCard_vue_1.default,];
        // @ts-ignore
        const __VLS_29 = __VLS_asFunctionalComponent(TheContentCard_vue_1.default, new TheContentCard_vue_1.default(Object.assign({ 'onCloseDetails': {} }, { recomendedMovie: ((__VLS_ctx.recomendedMovie)) })));
        const __VLS_30 = __VLS_29(Object.assign({ 'onCloseDetails': {} }, { recomendedMovie: ((__VLS_ctx.recomendedMovie)) }), ...__VLS_functionalComponentArgsRest(__VLS_29));
        ({}(Object.assign({ 'onCloseDetails': {} }, { recomendedMovie: ((__VLS_ctx.recomendedMovie)) })));
        let __VLS_34;
        const __VLS_35 = {
            onCloseDetails: (...[$event]) => {
                if (!((__VLS_ctx.showDetails)))
                    return;
                __VLS_ctx.showDetails = false;
                // @ts-ignore
                [recomendedMovie, showDetails, showDetails,];
            }
        };
        const __VLS_33 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(TheContentCard_vue_1.default, __VLS_30));
        let __VLS_31;
        let __VLS_32;
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['home-container'];
        __VLS_styleScopedClasses['background-box'];
        __VLS_styleScopedClasses['home-container-main'];
        __VLS_styleScopedClasses['film-info-box'];
        __VLS_styleScopedClasses['rating-and-details'];
        __VLS_styleScopedClasses['movie-details'];
        __VLS_styleScopedClasses['year'];
        __VLS_styleScopedClasses['movie-details-item'];
        __VLS_styleScopedClasses['genres'];
        __VLS_styleScopedClasses['movie-details-item'];
        __VLS_styleScopedClasses['movie-length'];
        __VLS_styleScopedClasses['movie-details-item'];
        __VLS_styleScopedClasses['movie-short-description'];
        __VLS_styleScopedClasses['buttons-box'];
        __VLS_styleScopedClasses['play-now-btn'];
        __VLS_styleScopedClasses['favourites-btn'];
        __VLS_styleScopedClasses['favorites-btn-svg'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                ButtonsComponent: ButtonsComponent_vue_1.default,
                ThePopularSection: ThePopularSection_vue_1.default,
                TheContentCard: TheContentCard_vue_1.default,
                RatingBox: RatingBox_vue_1.default,
                recomendedMovie: recomendedMovie,
                getBackgroundStyle: getBackgroundStyle,
                getName: getName,
                getYear: getYear,
                getGenres: getGenres,
                getMovieLength: getMovieLength,
                getDescription: getDescription,
                showDetails: showDetails,
                setRecomendedMovie: setRecomendedMovie,
            };
        },
        props: {},
    });
}
exports.default = (await Promise.resolve().then(() => __importStar(require('vue')))).defineComponent({
    setup() {
        return {};
    },
    props: {},
});
;
