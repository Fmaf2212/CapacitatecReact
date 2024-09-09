"use strict";
exports.id = 8915;
exports.ids = [8915];
exports.modules = {

/***/ 8915:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5637);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_counter__WEBPACK_IMPORTED_MODULE_2__]);
_common_counter__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const counter_data = [
    {
        color: "primary-color",
        delay: "50",
        count: 29.3,
        text: "K",
        title: "Student Enrolled",
        decimal: 1
    },
    {
        color: "secondary-color",
        delay: "100",
        count: 32.4,
        text: "K",
        title: "Class Completed",
        decimal: 1
    },
    {
        color: "extra02-color",
        delay: "150",
        count: 100,
        text: "%",
        title: "Satisfaction Rate"
    },
    {
        color: "extra05-color",
        delay: "200",
        count: 354,
        text: "%",
        title: "Top Instructors"
    }
];
const CounterArea = ({ home_3 = false, home_8 = false })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${home_3 ? "counterup-area-1 gap-lg-bottom-equal" : home_8 ? "counterup-area-3 gap-bottom-equal" : "counterup-area-5 edu-section-gap"}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row g-5",
                children: counter_data.map((c, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-3 col-sm-6",
                        "data-sal-delay": c.delay,
                        "data-sal": "slide-up",
                        "data-sal-duration": "800",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `edu-counterup counterup-style-${home_3 ? "1" : "5"} ${!home_3 && c.color}`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: `counter-item count-number ${home_3 && c.color}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "odometer",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_counter__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                            number: parseFloat(c.count),
                                            text: c.text,
                                            decimal: c.decimal
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                    className: "title",
                                    children: c.title
                                })
                            ]
                        })
                    }, i))
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CounterArea);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;