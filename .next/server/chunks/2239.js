"use strict";
exports.id = 2239;
exports.ids = [2239];
exports.modules = {

/***/ 1786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CF: () => (/* binding */ add_force_page),
/* harmony export */   FB: () => (/* binding */ add_level),
/* harmony export */   Jd: () => (/* binding */ add_price),
/* harmony export */   Lc: () => (/* binding */ add_instructor),
/* harmony export */   Pg: () => (/* binding */ add_language),
/* harmony export */   Xn: () => (/* binding */ add_item_offset),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   el: () => (/* binding */ add_count_page),
/* harmony export */   k9: () => (/* binding */ add_category),
/* harmony export */   nN: () => (/* binding */ reset_filter)
/* harmony export */ });
/* unused harmony export filterSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const filterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "filter",
    initialState: {
        categories: [],
        instructors: [],
        levels: [],
        languages: [],
        price: 0,
        page_count: 0,
        item_offset: 0,
        forcePage: null
    },
    reducers: {
        add_category: (state, { payload })=>{
            if (payload.changeType === "remove") {
                state.categories = state.categories.filter((category)=>category !== payload.item);
            } else if (payload.changeType === "added") {
                state.categories.push(payload.item);
            }
        },
        add_instructor: (state, { payload })=>{
            const isExist = state.instructors.includes(payload.instructor);
            if (!isExist) {
                state.instructors.push(payload.instructor);
            } else {
                state.instructors = state.instructors.filter((instructor)=>instructor !== payload.instructor);
            }
        },
        add_level: (state, { payload })=>{
            const isExist = state.levels.includes(payload.level);
            if (!isExist) {
                state.levels.push(payload.level);
            } else {
                state.levels = state.levels.filter((level)=>level !== payload.level);
            }
        },
        add_language: (state, { payload })=>{
            const isExist = state.languages.includes(payload.language);
            if (!isExist) {
                state.languages.push(payload.language);
            } else {
                state.languages = state.languages.filter((language)=>language !== payload.language);
            }
        },
        add_price: (state, { payload })=>{
            state.price = payload;
        },
        add_count_page: (state, { payload })=>{
            state.page_count = payload;
        },
        add_item_offset: (state, { payload })=>{
            state.item_offset = payload;
        },
        add_force_page: (state, { payload })=>{
            state.forcePage = payload;
        },
        reset_filter: (state, { payload })=>{
            state.categories = [];
            state.instructors = [];
            state.languages = [];
            state.levels = [];
            state.price = payload;
        }
    }
});
const { add_category, add_instructor, add_level, add_language, add_price, reset_filter, add_count_page, add_item_offset, add_force_page } = filterSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filterSlice.reducer);


/***/ })

};
;