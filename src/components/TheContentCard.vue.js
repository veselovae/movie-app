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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = require("vue");
const RatingBox_vue_1 = __importDefault(require("./RatingBox.vue"));
const TheXmarkIcon_vue_1 = __importDefault(require("./icons/TheXmarkIcon.vue"));
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await Promise.resolve().then(() => __importStar(require('vue')));
let __VLS_typeProps;
const props = defineProps();
const getTop250 = (0, vue_1.computed)(() => {
    var _a, _b;
    return ((_a = props.recomendedMovie) === null || _a === void 0 ? void 0 : _a.top250)
        ? (_b = props.recomendedMovie) === null || _b === void 0 ? void 0 : _b.top250
        : "";
});
const getSlogan = (0, vue_1.computed)(() => {
    var _a, _b;
    return ((_a = props.recomendedMovie) === null || _a === void 0 ? void 0 : _a.slogan)
        ? (_b = props.recomendedMovie) === null || _b === void 0 ? void 0 : _b.slogan
        : "";
});
const getActors = (0, vue_1.computed)(() => {
    var _a, _b;
    let filtered = null;
    if (props.recomendedMovie) {
        if ((_a = props.recomendedMovie) === null || _a === void 0 ? void 0 : _a.persons) {
            const persons = (_b = props.recomendedMovie) === null || _b === void 0 ? void 0 : _b.persons;
            filtered = persons
                .filter((per) => (per === null || per === void 0 ? void 0 : per.profession) === "актеры")
                .splice(0, 5);
        }
    }
    return filtered;
});
const getProducers = (0, vue_1.computed)(() => {
    var _a, _b;
    let filtered = null;
    if (props.recomendedMovie) {
        if ((_a = props.recomendedMovie) === null || _a === void 0 ? void 0 : _a.persons) {
            const persons = (_b = props.recomendedMovie) === null || _b === void 0 ? void 0 : _b.persons;
            filtered = persons
                .filter((per) => (per === null || per === void 0 ? void 0 : per.profession) === "режиссеры")
                .splice(0, 2);
        }
    }
    return filtered;
});
const getType = (0, vue_1.computed)(() => {
    var _a;
    let typeRu = "";
    switch ((_a = props.recomendedMovie) === null || _a === void 0 ? void 0 : _a.type) {
        case "animated-series":
            typeRu = "Мультсериал";
            break;
        case "anime":
            typeRu = "Аниме";
            break;
        case "cartoon":
            typeRu = "Мультфильм";
            break;
        case "movie":
            typeRu = "Фильм";
            break;
        case "tv-series":
            typeRu = "Сериал";
            break;
    }
    return typeRu;
});
const getCountries = (0, vue_1.computed)(() => {
    var _a, _b;
    return ((_a = props.recomendedMovie) === null || _a === void 0 ? void 0 : _a.countries)
        ? (_b = props.recomendedMovie) === null || _b === void 0 ? void 0 : _b.countries.map((el) => el.name).join(", ")
        : "";
});
const getFees = (0, vue_1.computed)(() => {
    var _a, _b;
    return ((_a = props.recomendedMovie) === null || _a === void 0 ? void 0 : _a.fees) ? (_b = props.recomendedMovie) === null || _b === void 0 ? void 0 : _b.fees : "";
});
const getPremiereWorld = (0, vue_1.computed)(() => {
    var _a, _b, _c, _d;
    return ((_b = (_a = props.recomendedMovie) === null || _a === void 0 ? void 0 : _a.premiere) === null || _b === void 0 ? void 0 : _b.world)
        ? new Date((_d = (_c = props.recomendedMovie) === null || _c === void 0 ? void 0 : _c.premiere) === null || _d === void 0 ? void 0 : _d.world).toLocaleDateString()
        : "";
});
const getPremiereRussia = (0, vue_1.computed)(() => {
    var _a, _b, _c, _d;
    return ((_b = (_a = props.recomendedMovie) === null || _a === void 0 ? void 0 : _a.premiere) === null || _b === void 0 ? void 0 : _b.russia)
        ? new Date((_d = (_c = props.recomendedMovie) === null || _c === void 0 ? void 0 : _c.premiere) === null || _d === void 0 ? void 0 : _d.russia).toLocaleDateString()
        : "";
});
const getAge = (0, vue_1.computed)(() => {
    var _a, _b;
    return ((_a = props.recomendedMovie) === null || _a === void 0 ? void 0 : _a.ageRating)
        ? (_b = props.recomendedMovie) === null || _b === void 0 ? void 0 : _b.ageRating
        : "";
});
const emit = defineEmits(["close-details"]);
const __VLS_fnComponent = (await Promise.resolve().then(() => __importStar(require('vue')))).defineComponent({
    emits: {},
});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    var _a, _b, _c;
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("content-box") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("content-card") }));
    // @ts-ignore
    [TheXmarkIcon_vue_1.default,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(TheXmarkIcon_vue_1.default, new TheXmarkIcon_vue_1.default(Object.assign({ 'onClick': {} }, { class: ("xmark-icon") })));
    const __VLS_1 = __VLS_0(Object.assign({ 'onClick': {} }, { class: ("xmark-icon") }), ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}(Object.assign({ 'onClick': {} }, { class: ("xmark-icon") })));
    let __VLS_5;
    const __VLS_6 = {
        onClick: (...[$event]) => {
            __VLS_ctx.emit('close-details');
            // @ts-ignore
            [emit,];
        }
    };
    const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(TheXmarkIcon_vue_1.default, __VLS_1));
    let __VLS_2;
    let __VLS_3;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("content-card__left-side one-side") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)(Object.assign({ class: ("content-card__header") }));
    ((_a = props.recomendedMovie) === null || _a === void 0 ? void 0 : _a.name);
    __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)(Object.assign({ class: ("content-card__en-header") }));
    ((_b = props.recomendedMovie) === null || _b === void 0 ? void 0 : _b.alternativeName);
    // @ts-ignore
    [RatingBox_vue_1.default,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(RatingBox_vue_1.default, new RatingBox_vue_1.default(Object.assign({ recomendedMovie: ((__VLS_ctx.recomendedMovie)) }, { class: ("rating-box--margin") })));
    const __VLS_8 = __VLS_7(Object.assign({ recomendedMovie: ((__VLS_ctx.recomendedMovie)) }, { class: ("rating-box--margin") }), ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}(Object.assign({ recomendedMovie: ((__VLS_ctx.recomendedMovie)) }, { class: ("rating-box--margin") })));
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(RatingBox_vue_1.default, __VLS_8));
    // @ts-ignore
    [recomendedMovie,];
    if (__VLS_ctx.getTop250) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("content-card__top") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        // @ts-ignore
        [getTop250,];
        (__VLS_ctx.getTop250);
        // @ts-ignore
        [getTop250,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("content-card__description") }));
    ((_c = __VLS_ctx.recomendedMovie) === null || _c === void 0 ? void 0 : _c.description);
    // @ts-ignore
    [recomendedMovie,];
    if (__VLS_ctx.getSlogan) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("content-card__slogan") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        // @ts-ignore
        [getSlogan,];
        (__VLS_ctx.getSlogan);
        // @ts-ignore
        [getSlogan,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("content-card__right-side one-side") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("content-card__column") }));
    if (__VLS_ctx.getActors) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("content-card__actors") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
        // @ts-ignore
        [getActors,];
        for (const [actor] of __VLS_getVForSourceType((__VLS_ctx.getActors))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("content-card__actor actors") }, { key: ((actor.name || actor.enName)) }));
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)(Object.assign({ src: ((actor.photo)) }, { class: ("actors__photo photo") }));
            // @ts-ignore
            [getActors,];
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: ("actors__name") }));
            (actor.name || actor.enName);
        }
    }
    if (__VLS_ctx.getProducers) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("content-card__producers") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
        // @ts-ignore
        [getProducers,];
        for (const [producer] of __VLS_getVForSourceType((__VLS_ctx.getProducers))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("content-card__producer producers") }, { key: ((producer.name || producer.enName)) }));
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)(Object.assign({ src: ((producer.photo)) }, { class: ("producers__photo photo") }));
            // @ts-ignore
            [getProducers,];
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: ("producers__name") }));
            (producer.name || producer.enName);
        }
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("content-card__column additional-info") }));
    if (__VLS_ctx.getType) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("additional-info__type") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        // @ts-ignore
        [getType,];
        (__VLS_ctx.getType);
        // @ts-ignore
        [getType,];
    }
    if (__VLS_ctx.getCountries) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("additional-info__countries") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (__VLS_ctx.getCountries.indexOf(",") > 1
            ? "Страны:"
            : "Страна:");
        // @ts-ignore
        [getCountries, getCountries,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("countries-list") }));
        (__VLS_ctx.getCountries);
        // @ts-ignore
        [getCountries,];
    }
    if (__VLS_ctx.getFees) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("additional-info__fees") }));
        if (__VLS_ctx.getFees.russia) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("fees-russia") }));
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            // @ts-ignore
            [getFees, getFees,];
            (__VLS_ctx.getFees.russia.currency + __VLS_ctx.getFees.russia.value);
            // @ts-ignore
            [getFees, getFees,];
        }
        if (__VLS_ctx.getFees.world) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("fees-world") }));
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            // @ts-ignore
            [getFees,];
            (__VLS_ctx.getFees.world.currency + __VLS_ctx.getFees.world.value);
            // @ts-ignore
            [getFees, getFees,];
        }
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("additional-info__premiere") }));
    if (__VLS_ctx.getPremiereWorld) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("premiere-world") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        // @ts-ignore
        [getPremiereWorld,];
        (__VLS_ctx.getPremiereWorld);
        // @ts-ignore
        [getPremiereWorld,];
    }
    if (__VLS_ctx.getPremiereRussia) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("premiere-russia") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        // @ts-ignore
        [getPremiereRussia,];
        (__VLS_ctx.getPremiereRussia);
        // @ts-ignore
        [getPremiereRussia,];
    }
    if (__VLS_ctx.getAge) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("additional-info__age") }));
        (__VLS_ctx.getAge + "+");
        // @ts-ignore
        [getAge, getAge,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['content-box'];
        __VLS_styleScopedClasses['content-card'];
        __VLS_styleScopedClasses['xmark-icon'];
        __VLS_styleScopedClasses['content-card__left-side'];
        __VLS_styleScopedClasses['one-side'];
        __VLS_styleScopedClasses['content-card__header'];
        __VLS_styleScopedClasses['content-card__en-header'];
        __VLS_styleScopedClasses['rating-box--margin'];
        __VLS_styleScopedClasses['content-card__top'];
        __VLS_styleScopedClasses['content-card__description'];
        __VLS_styleScopedClasses['content-card__slogan'];
        __VLS_styleScopedClasses['content-card__right-side'];
        __VLS_styleScopedClasses['one-side'];
        __VLS_styleScopedClasses['content-card__column'];
        __VLS_styleScopedClasses['content-card__actors'];
        __VLS_styleScopedClasses['content-card__actor'];
        __VLS_styleScopedClasses['actors'];
        __VLS_styleScopedClasses['actors__photo'];
        __VLS_styleScopedClasses['photo'];
        __VLS_styleScopedClasses['actors__name'];
        __VLS_styleScopedClasses['content-card__producers'];
        __VLS_styleScopedClasses['content-card__producer'];
        __VLS_styleScopedClasses['producers'];
        __VLS_styleScopedClasses['producers__photo'];
        __VLS_styleScopedClasses['photo'];
        __VLS_styleScopedClasses['producers__name'];
        __VLS_styleScopedClasses['content-card__column'];
        __VLS_styleScopedClasses['additional-info'];
        __VLS_styleScopedClasses['additional-info__type'];
        __VLS_styleScopedClasses['additional-info__countries'];
        __VLS_styleScopedClasses['countries-list'];
        __VLS_styleScopedClasses['additional-info__fees'];
        __VLS_styleScopedClasses['fees-russia'];
        __VLS_styleScopedClasses['fees-world'];
        __VLS_styleScopedClasses['additional-info__premiere'];
        __VLS_styleScopedClasses['premiere-world'];
        __VLS_styleScopedClasses['premiere-russia'];
        __VLS_styleScopedClasses['additional-info__age'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                RatingBox: RatingBox_vue_1.default,
                TheXmarkIcon: TheXmarkIcon_vue_1.default,
                getTop250: getTop250,
                getSlogan: getSlogan,
                getActors: getActors,
                getProducers: getProducers,
                getType: getType,
                getCountries: getCountries,
                getFees: getFees,
                getPremiereWorld: getPremiereWorld,
                getPremiereRussia: getPremiereRussia,
                getAge: getAge,
                emit: emit,
            };
        },
        props: {},
        emits: {},
    });
}
exports.default = (await Promise.resolve().then(() => __importStar(require('vue')))).defineComponent({
    setup() {
        return {};
    },
    props: {},
    emits: {},
});
;
