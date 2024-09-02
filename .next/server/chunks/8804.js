"use strict";
exports.id = 8804;
exports.ids = [8804];
exports.modules = {

/***/ 8804:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9700);
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_1__);


const Pagination = ({ handlePageClick, pageCount, focusPage })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_paginate__WEBPACK_IMPORTED_MODULE_1___default()), {
        nextLabel: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                className: "icon-east"
            })
        }),
        onPageChange: handlePageClick,
        forcePage: focusPage,
        pageRangeDisplayed: 3,
        marginPagesDisplayed: 2,
        pageCount: pageCount,
        previousLabel: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                className: "icon-west"
            })
        }),
        pageClassName: "page-items",
        pageLinkClassName: "page-links",
        previousClassName: "page-items",
        previousLinkClassName: "page-links",
        nextClassName: "page-items",
        nextLinkClassName: "page-links",
        breakLabel: "...",
        breakClassName: "page-items",
        breakLinkClassName: "page-links",
        containerClassName: "edu-pagination",
        activeClassName: "active",
        renderOnZeroPageCount: null
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);


/***/ })

};
;