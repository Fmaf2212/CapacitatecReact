"use strict";
exports.id = 5294;
exports.ids = [5294];
exports.modules = {

/***/ 5294:
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
        number: 45.2,
        text: "K",
        title: "Student Enrolled",
        decimal: 1
    },
    {
        color: "secondary-color",
        number: 32.4,
        text: "K",
        title: "Class Completed",
        decimal: 1
    },
    {
        color: "extra05-color",
        number: 354,
        text: "+",
        title: "Top Instructors"
    },
    {
        color: "extra02-color",
        number: 100,
        text: "%",
        title: "Satisfaction Rate"
    }
];
const CounterBox = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "counterup-box counterup-box-1",
                children: counter_data.slice(0, 2).map((c, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "edu-counterup counterup-style-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: `counter-item count-number ${c.color}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "odometer",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_counter__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        number: parseFloat(c.number),
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
                    }, i))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "counterup-box counterup-box-2",
                children: counter_data.slice(2, 4).map((c, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "edu-counterup counterup-style-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: `counter-item count-number ${c.color}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "odometer",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_counter__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        number: parseFloat(c.number),
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
                    }, i))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CounterBox);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;