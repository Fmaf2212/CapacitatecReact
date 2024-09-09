"use strict";
exports.id = 2786;
exports.ids = [2786];
exports.modules = {

/***/ 2786:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Loader = ()=>{
    return(// <div className="loader-container">
    //     <div className="spinner">Loading...</div>
    //     {/* Puedes agregar cualquier otro estilo o animación aquí */}
    // </div>
    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                className: "fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#1ab69d]",
                initial: {
                    x: "100%",
                    with: "100%"
                },
                animate: {
                    x: "0%",
                    width: "0%"
                },
                exit: {
                    x: [
                        "0%",
                        "100%"
                    ],
                    width: [
                        "0%",
                        "100%"
                    ]
                },
                transition: {
                    duration: 0.8,
                    ease: "easeInOut"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                className: "fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-light",
                initial: {
                    x: "100%",
                    with: "100%"
                },
                animate: {
                    x: "0%",
                    width: "0%"
                },
                transition: {
                    delay: 0.2,
                    duration: 0.8,
                    ease: "easeInOut"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                className: "fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#31b978]",
                initial: {
                    x: "100%",
                    with: "100%"
                },
                animate: {
                    x: "0%",
                    width: "0%"
                },
                transition: {
                    delay: 0.4,
                    duration: 0.8,
                    ease: "easeInOut"
                }
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;