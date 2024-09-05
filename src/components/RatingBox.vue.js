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
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = require("vue");
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await Promise.resolve().then(() => __importStar(require('vue')));
let __VLS_typeProps;
const props = defineProps();
const getIMDbRating = (0, vue_1.computed)(() => {
    var _a, _b;
    return ((_b = (_a = props.recomendedMovie) === null || _a === void 0 ? void 0 : _a.rating) === null || _b === void 0 ? void 0 : _b.imdb)
        ? Math.floor(props.recomendedMovie.rating.imdb) + "/10"
        : "";
});
const getKPRating = (0, vue_1.computed)(() => {
    var _a, _b;
    return ((_b = (_a = props.recomendedMovie) === null || _a === void 0 ? void 0 : _a.rating) === null || _b === void 0 ? void 0 : _b.kp)
        ? Math.floor(props.recomendedMovie.rating.kp) + "/10"
        : "";
});
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("rating-box") }));
    if (__VLS_ctx.getIMDbRating) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("imdb-rating rating") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)(Object.assign({ src: ("../assets/IMDb_Logo.png"), alt: ("IMDb") }, { class: ("rating-logo imdb-logo") }));
        // @ts-ignore
        [getIMDbRating,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)(Object.assign({ src: ("../assets/star-icon.png") }, { class: ("star-rating-logo") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (__VLS_ctx.getIMDbRating);
        // @ts-ignore
        [getIMDbRating,];
    }
    if (__VLS_ctx.getKPRating) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("kp-rating rating") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)(Object.assign({ src: ("../assets/Kinopoisk_logo.png"), alt: ("KP") }, { class: ("rating-logo kp-logo") }));
        // @ts-ignore
        [getKPRating,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)(Object.assign({ src: ("../assets/star-icon.png") }, { class: ("star-rating-logo") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (__VLS_ctx.getKPRating);
        // @ts-ignore
        [getKPRating,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['rating-box'];
        __VLS_styleScopedClasses['imdb-rating'];
        __VLS_styleScopedClasses['rating'];
        __VLS_styleScopedClasses['rating-logo'];
        __VLS_styleScopedClasses['imdb-logo'];
        __VLS_styleScopedClasses['star-rating-logo'];
        __VLS_styleScopedClasses['kp-rating'];
        __VLS_styleScopedClasses['rating'];
        __VLS_styleScopedClasses['rating-logo'];
        __VLS_styleScopedClasses['kp-logo'];
        __VLS_styleScopedClasses['star-rating-logo'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                getIMDbRating: getIMDbRating,
                getKPRating: getKPRating,
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
