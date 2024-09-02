"use strict";
exports.id = 4688;
exports.ids = [4688];
exports.modules = {

/***/ 5666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4791);
/* harmony import */ var _redux_features_filter_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1786);


// import Slider from 'react-rangeslider';
// import 'react-rangeslider/lib/index.css'; 



const courses = _data__WEBPACK_IMPORTED_MODULE_3__/* .course_data */ .sG.filter((arr, index, self)=>index === self.findIndex((i)=>i.img === arr.img && i.State === arr.State));
const max_prices = courses.map((item)=>Number(item.course_price));
const maxPrice = Math.max(...max_prices);
const minPrice = Math.min(...max_prices);
const all_categories = [
    ...new Set(courses.map((course)=>course.category))
];
const all_instructors = [
    ...new Set(courses.map((course)=>course.instructor))
];
const all_levels = [
    ...new Set(courses.map((course)=>course.level))
];
const all_languages = [
    ...new Set(courses.map((course)=>course.language))
];
const CourseSidebarTwo = ({ course_items })=>{
    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(maxPrice);
    const [showCategory, setShowCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [showLevel, setShowLevel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [showInstructor, setShowInstructor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [showLanguage, setShowLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { categories, instructors, levels, languages } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.filter);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    // handleCategory
    const handleCategory = (cate)=>{
        const index = categories.findIndex((item)=>item === cate);
        if (index >= 0) {
            dispatch((0,_redux_features_filter_slice__WEBPACK_IMPORTED_MODULE_4__/* .add_category */ .k9)({
                changeType: "remove",
                item: cate,
                maxPrice
            }));
        } else {
            dispatch((0,_redux_features_filter_slice__WEBPACK_IMPORTED_MODULE_4__/* .add_category */ .k9)({
                changeType: "added",
                item: cate,
                maxPrice
            }));
        }
        dispatch((0,_redux_features_filter_slice__WEBPACK_IMPORTED_MODULE_4__/* .add_item_offset */ .Xn)(0));
        dispatch((0,_redux_features_filter_slice__WEBPACK_IMPORTED_MODULE_4__/* .add_force_page */ .CF)(0));
    };
    // handleInstructor
    const handleInstructor = (instructor)=>{
        dispatch((0,_redux_features_filter_slice__WEBPACK_IMPORTED_MODULE_4__/* .add_instructor */ .Lc)({
            instructor,
            maxPrice
        }));
        dispatch((0,_redux_features_filter_slice__WEBPACK_IMPORTED_MODULE_4__/* .add_item_offset */ .Xn)(0));
        dispatch((0,_redux_features_filter_slice__WEBPACK_IMPORTED_MODULE_4__/* .add_force_page */ .CF)(0));
    };
    // handleLevel
    const handleLevel = (level)=>{
        dispatch((0,_redux_features_filter_slice__WEBPACK_IMPORTED_MODULE_4__/* .add_level */ .FB)({
            level,
            maxPrice
        }));
        dispatch((0,_redux_features_filter_slice__WEBPACK_IMPORTED_MODULE_4__/* .add_item_offset */ .Xn)(0));
        dispatch((0,_redux_features_filter_slice__WEBPACK_IMPORTED_MODULE_4__/* .add_force_page */ .CF)(0));
    };
    // handleLanguage
    const handleLanguage = (language)=>{
        dispatch((0,_redux_features_filter_slice__WEBPACK_IMPORTED_MODULE_4__/* .add_language */ .Pg)({
            language,
            maxPrice
        }));
        dispatch((0,_redux_features_filter_slice__WEBPACK_IMPORTED_MODULE_4__/* .add_item_offset */ .Xn)(0));
        dispatch((0,_redux_features_filter_slice__WEBPACK_IMPORTED_MODULE_4__/* .add_force_page */ .CF)(0));
    };
    // handlePrice
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        dispatch((0,_redux_features_filter_slice__WEBPACK_IMPORTED_MODULE_4__/* .add_price */ .Jd)(price));
    }, [
        dispatch,
        price
    ]);
    // handlePriceChange
    const handlePriceChange = (value)=>{
        setPrice(value);
        dispatch((0,_redux_features_filter_slice__WEBPACK_IMPORTED_MODULE_4__/* .add_item_offset */ .Xn)(0));
        dispatch((0,_redux_features_filter_slice__WEBPACK_IMPORTED_MODULE_4__/* .add_force_page */ .CF)(0));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "course-sidebar-2",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "edu-course-widget widget-category",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "inner",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                            className: `widget-title widget-toggle ${showCategory ? "active" : ""}`,
                            onClick: ()=>setShowCategory(!showCategory),
                            children: "Categor\xedas"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "content",
                            style: {
                                display: showCategory ? "block" : "none"
                            },
                            children: all_categories.map((c, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "edu-form-check",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            onClick: ()=>handleCategory(c),
                                            type: "checkbox",
                                            checked: categories.includes(c),
                                            id: `cat-check${i + 1}`,
                                            readOnly: true
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                            htmlFor: `cat-check${i + 1}`,
                                            children: [
                                                c,
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    children: [
                                                        "(",
                                                        course_items.filter((item)=>item.category === c)?.length,
                                                        ")"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }, i))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "edu-course-widget widget-instructor",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "inner",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                            className: `widget-title widget-toggle ${showInstructor ? "active" : ""}`,
                            onClick: ()=>setShowInstructor(!showInstructor),
                            children: "Docente"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "content",
                            style: {
                                display: showInstructor ? "block" : "none"
                            },
                            children: all_instructors.map((instructor, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "edu-form-check",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            onClick: ()=>handleInstructor(instructor),
                                            checked: instructors.includes(instructor),
                                            type: "checkbox",
                                            id: `cat-check-2${i + 1}`,
                                            readOnly: true
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                            htmlFor: `cat-check-2${i + 1}`,
                                            children: [
                                                instructor,
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    children: [
                                                        "(",
                                                        course_items.filter((item)=>item.instructor === instructor)?.length,
                                                        ")"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }, i))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "edu-course-widget",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        className: "widget-title mb-4",
                        children: "Reset Filter"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>dispatch((0,_redux_features_filter_slice__WEBPACK_IMPORTED_MODULE_4__/* .reset_filter */ .nN)(maxPrice)),
                        className: "edu-btn btn-small mb--30",
                        children: "Reset Filter"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CourseSidebarTwo);


/***/ })

};
;