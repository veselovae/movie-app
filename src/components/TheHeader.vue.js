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
const TheLogo_vue_1 = __importDefault(require("./icons/TheLogo.vue"));
const TheSearchIcon_vue_1 = __importDefault(require("./icons/TheSearchIcon.vue"));
const ItemOfNavigation_vue_1 = __importDefault(require("./ItemOfNavigation.vue"));
const vue_1 = require("vue");
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await Promise.resolve().then(() => __importStar(require('vue')));
const nvigationItems = (0, vue_1.ref)([
    "Главная",
    "Избранное",
    "Категории",
    "Фильмы",
    "Сериалы",
]);
const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        "X-API-KEY": "DTJYGKA-TZXM1QK-NN48GZC-CFDX2FR",
    },
};
let searchValue = (0, vue_1.ref)("");
let searchResults = (0, vue_1.ref)([]);
const showSearchResults = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=10&query=${searchValue.value}`, options);
    const res = (yield response.json());
    searchResults.value = res.docs;
    // console.log(res);
});
// function debounce(callback: Function, ms: number) {
//     return function perform(...args: any[]) {
//         let previousCall = this.lastCall;
//         this.lastCall = Date.now();
//         if (previousCall && this.lastCall - previousCall <= ms) {
//             clearTimeout(this.lastCallTimer);
//         }
//         this.lastCallTimer = setTimeout(() => callback(...args), ms);
//     };
// }
function debounce(fn, wait) {
    let timer;
    return function (...args) {
        if (timer) {
            clearTimeout(timer); // clear any pre-existing timer
        }
        const context = this; // get the current context
        timer = setTimeout(() => {
            fn.apply(context, args); // call the function if time expires
        }, wait);
    };
}
const debouncedshowSearchResults = debounce(showSearchResults, 500);
const showRecomendations = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!searchValue.value) {
        const response = yield fetch(`https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=10&query=''`, options);
        const res = yield response.json();
        searchResults.value = res.docs;
        console.log(res);
    }
});
const emit = defineEmits(["open-selected-item"]);
const selectItem = (item) => {
    emit("open-selected-item", item);
    searchValue.value = "";
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("logo-and-navigation-container") }));
    // @ts-ignore
    [TheLogo_vue_1.default,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(TheLogo_vue_1.default, new TheLogo_vue_1.default(Object.assign({ class: ("logo") })));
    const __VLS_1 = __VLS_0(Object.assign({ class: ("logo") }), ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}(Object.assign({ class: ("logo") })));
    const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(TheLogo_vue_1.default, __VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("navigation") }));
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.nvigationItems))) {
        // @ts-ignore
        [ItemOfNavigation_vue_1.default, ItemOfNavigation_vue_1.default,];
        // @ts-ignore
        const __VLS_5 = __VLS_asFunctionalComponent(ItemOfNavigation_vue_1.default, new ItemOfNavigation_vue_1.default({ key: ((item)), }));
        const __VLS_6 = __VLS_5({ key: ((item)), }, ...__VLS_functionalComponentArgsRest(__VLS_5));
        ({}({ key: ((item)), }));
        const __VLS_9 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(ItemOfNavigation_vue_1.default, __VLS_6));
        (item);
        // @ts-ignore
        [nvigationItems,];
        __VLS_nonNullable(__VLS_9.slots).default;
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("search-container") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)(Object.assign(Object.assign(Object.assign(Object.assign({ onInput: (__VLS_ctx.debouncedshowSearchResults) }, { onClick: (__VLS_ctx.showRecomendations) }), { type: ("text") }), { class: ("search-inp") }), { value: ((__VLS_ctx.searchValue)) }));
    // @ts-ignore
    [debouncedshowSearchResults, showRecomendations, searchValue,];
    // @ts-ignore
    [TheSearchIcon_vue_1.default,];
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(TheSearchIcon_vue_1.default, new TheSearchIcon_vue_1.default(Object.assign({ class: ("search-icon") })));
    const __VLS_11 = __VLS_10(Object.assign({ class: ("search-icon") }), ...__VLS_functionalComponentArgsRest(__VLS_10));
    ({}(Object.assign({ class: ("search-icon") })));
    const __VLS_14 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(TheSearchIcon_vue_1.default, __VLS_11));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("search-results") }));
    if (!__VLS_ctx.searchResults.length && !__VLS_ctx.searchValue) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("search-results-empty") }));
        // @ts-ignore
        [searchValue, searchResults,];
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("search-results-items") }));
        for (const [item] of __VLS_getVForSourceType((__VLS_ctx.searchResults))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)(Object.assign(Object.assign({ onClick: (...[$event]) => {
                    if (!(!((!__VLS_ctx.searchResults.length && !__VLS_ctx.searchValue))))
                        return;
                    __VLS_ctx.selectItem(item);
                    // @ts-ignore
                    [searchResults, selectItem,];
                } }, { class: ("search-results__item") }), { key: ((item.id)) }));
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("search-results__poster") }));
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((item.poster.url)), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("search-name") }));
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
            (item.name.length > 45
                ? item.name.slice(0, 40) + "..."
                : item.name);
        }
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['logo-and-navigation-container'];
        __VLS_styleScopedClasses['logo'];
        __VLS_styleScopedClasses['navigation'];
        __VLS_styleScopedClasses['search-container'];
        __VLS_styleScopedClasses['search-inp'];
        __VLS_styleScopedClasses['search-icon'];
        __VLS_styleScopedClasses['search-results'];
        __VLS_styleScopedClasses['search-results-empty'];
        __VLS_styleScopedClasses['search-results-items'];
        __VLS_styleScopedClasses['search-results__item'];
        __VLS_styleScopedClasses['search-results__poster'];
        __VLS_styleScopedClasses['search-name'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                logo: TheLogo_vue_1.default,
                searchIcon: TheSearchIcon_vue_1.default,
                ItemOfNavigation: ItemOfNavigation_vue_1.default,
                nvigationItems: nvigationItems,
                searchValue: searchValue,
                searchResults: searchResults,
                debouncedshowSearchResults: debouncedshowSearchResults,
                showRecomendations: showRecomendations,
                selectItem: selectItem,
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
