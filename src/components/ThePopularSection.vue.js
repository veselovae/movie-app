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
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = require("vue");
require("vue3-carousel/dist/carousel.css");
const vue3_carousel_1 = require("vue3-carousel");
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await Promise.resolve().then(() => __importStar(require('vue')));
let popularMovies = (0, vue_1.ref)(null);
const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        "X-API-KEY": "DTJYGKA-TZXM1QK-NN48GZC-CFDX2FR",
    },
};
const getPopularMovies = () => __awaiter(void 0, void 0, void 0, function* () {
    // const response = await fetch(
    //     "https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10&notNullFields=backdrop.url&lists=popular-films",
    //     options
    // );
    const response = yield fetch("https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10&notNullFields=backdrop.url&notNullFields=top250", options);
    const res = yield response.json();
    popularMovies.value = res.docs;
    console.log("popularMovies: ", popularMovies.value);
});
(0, vue_1.onMounted)(() => getPopularMovies());
const emit = defineEmits(["set-target-movie"]);
const getSelectedMovie = (targetMovie) => {
    console.log("targetMovie pop: ", targetMovie);
    emit("set-target-movie", targetMovie);
};
const __VLS_fnComponent = (await Promise.resolve().then(() => __importStar(require('vue')))).defineComponent({
    emits: {},
});
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("popular-container") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)(Object.assign({ class: ("popular-header") }));
    // @ts-ignore
    const __VLS_0 = {}
        .carousel;
    ({}.carousel);
    ({}.carousel);
    __VLS_components.Carousel;
    __VLS_components.carousel;
    __VLS_components.Carousel;
    __VLS_components.carousel;
    // @ts-ignore
    [vue3_carousel_1.Carousel, vue3_carousel_1.Carousel,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(Object.assign(Object.assign({ itemsToShow: ((6)) }, { class: ("popular-list") }), { snapAlign: ("start"), wrapAround: ((true)), autoplay: ((3000)), transition: ((600)), pauseAutoplayOnHover: ((true)) })));
    const __VLS_2 = __VLS_1(Object.assign(Object.assign({ itemsToShow: ((6)) }, { class: ("popular-list") }), { snapAlign: ("start"), wrapAround: ((true)), autoplay: ((3000)), transition: ((600)), pauseAutoplayOnHover: ((true)) }), ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}(Object.assign(Object.assign({ itemsToShow: ((6)) }, { class: ("popular-list") }), { snapAlign: ("start"), wrapAround: ((true)), autoplay: ((3000)), transition: ((600)), pauseAutoplayOnHover: ((true)) })));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { slides: __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
        for (const [movie] of __VLS_getVForSourceType((__VLS_ctx.popularMovies))) {
            // @ts-ignore
            const __VLS_6 = {}
                .slide;
            ({}.slide);
            ({}.slide);
            __VLS_components.Slide;
            __VLS_components.slide;
            __VLS_components.Slide;
            __VLS_components.slide;
            // @ts-ignore
            [vue3_carousel_1.Slide, vue3_carousel_1.Slide,];
            // @ts-ignore
            const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6(Object.assign(Object.assign(Object.assign({ 'onClick': {} }, { key: ((movie.id)) }), { class: ("popular-list-item") }), { style: ((`background-image: url( ${movie.backdrop.url})`)) })));
            const __VLS_8 = __VLS_7(Object.assign(Object.assign(Object.assign({ 'onClick': {} }, { key: ((movie.id)) }), { class: ("popular-list-item") }), { style: ((`background-image: url( ${movie.backdrop.url})`)) }), ...__VLS_functionalComponentArgsRest(__VLS_7));
            ({}(Object.assign(Object.assign(Object.assign({ 'onClick': {} }, { key: ((movie.id)) }), { class: ("popular-list-item") }), { style: ((`background-image: url( ${movie.backdrop.url})`)) })));
            let __VLS_12;
            const __VLS_13 = {
                onClick: (...[$event]) => {
                    __VLS_ctx.getSelectedMovie(movie);
                    // @ts-ignore
                    [popularMovies, getSelectedMovie,];
                }
            };
            const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
            let __VLS_9;
            let __VLS_10;
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("background-box") }));
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: ("popular-movie-name") }));
            (movie.name);
            __VLS_nonNullable(__VLS_11.slots).default;
        }
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { addons: __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
        // @ts-ignore
        const __VLS_14 = {}
            .navigation;
        ({}.navigation);
        __VLS_components.Navigation;
        __VLS_components.navigation;
        // @ts-ignore
        [vue3_carousel_1.Navigation,];
        // @ts-ignore
        const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14(Object.assign({ class: ("buttons-carousel") })));
        const __VLS_16 = __VLS_15(Object.assign({ class: ("buttons-carousel") }), ...__VLS_functionalComponentArgsRest(__VLS_15));
        ({}(Object.assign({ class: ("buttons-carousel") })));
        const __VLS_19 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16));
        // @ts-ignore
        const __VLS_20 = {}
            .pagination;
        ({}.pagination);
        __VLS_components.Pagination;
        __VLS_components.pagination;
        // @ts-ignore
        [vue3_carousel_1.Pagination,];
        // @ts-ignore
        const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({}));
        const __VLS_22 = __VLS_21({}, ...__VLS_functionalComponentArgsRest(__VLS_21));
        ({}({}));
        const __VLS_25 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22));
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['popular-container'];
        __VLS_styleScopedClasses['popular-header'];
        __VLS_styleScopedClasses['popular-list'];
        __VLS_styleScopedClasses['popular-list-item'];
        __VLS_styleScopedClasses['background-box'];
        __VLS_styleScopedClasses['popular-movie-name'];
        __VLS_styleScopedClasses['buttons-carousel'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                Carousel: vue3_carousel_1.Carousel,
                Slide: vue3_carousel_1.Slide,
                Pagination: vue3_carousel_1.Pagination,
                Navigation: vue3_carousel_1.Navigation,
                popularMovies: popularMovies,
                getSelectedMovie: getSelectedMovie,
            };
        },
        emits: {},
    });
}
exports.default = (await Promise.resolve().then(() => __importStar(require('vue')))).defineComponent({
    setup() {
        return {};
    },
    emits: {},
});
;
