"use strict";
exports.id = 7314;
exports.ids = [7314];
exports.modules = {

/***/ 7314:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _contexts_mouse_move_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6083);
/* harmony import */ var _hooks_use_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8266);
/* harmony import */ var _common_popup_modal_video_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6886);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const VideoArea = ({ about_p_2 })=>{
    const { isVideoOpen, setIsVideoOpen } = (0,_hooks_use_modal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const { mouseDirection, mouseReverse } = (0,_contexts_mouse_move_context__WEBPACK_IMPORTED_MODULE_3__/* .useMouseMoveUI */ .sr)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `video-area-${about_p_2 ? "4" : "1"}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row justify-content-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-9",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "video-gallery",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "thumbnail",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "/assets/images/others/video-01.jpg",
                                                alt: "Thumb"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: ()=>setIsVideoOpen(true),
                                                className: "video-play-btn video-popup-activation",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "icon-18"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        className: "shape-group",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "shape-1 scene",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    className: "rotateit",
                                                    src: "/assets/images/about/shape-37.png",
                                                    alt: "Shape"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "shape-2 scene",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "/assets/images/faq/shape-04.png",
                                                    alt: "Shape"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.li, {
                                                className: "shape-3 scene shape-light",
                                                animate: {
                                                    x: mouseReverse(25).x,
                                                    y: mouseReverse(25).y
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "/assets/images/faq/shape-14.png",
                                                    alt: "Shape"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.li, {
                                                className: "shape-3 scene shape-dark",
                                                animate: {
                                                    x: mouseReverse(25).x,
                                                    y: mouseReverse(25).y
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "/assets/images/faq/dark-shape-14.png",
                                                    alt: "Shape"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_popup_modal_video_modal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                isVideoOpen: isVideoOpen,
                setIsVideoOpen: setIsVideoOpen,
                videoId: "PICj5tr9hcc"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoArea);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;