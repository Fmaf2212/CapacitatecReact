"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/course-style-1",{

/***/ "./src/components/course-style-1/course-1-area.jsx":
/*!*********************************************************!*\
  !*** ./src/components/course-style-1/course-1-area.jsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data */ \"./src/data/index.js\");\n/* harmony import */ var _course_filter_sorting_area__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../course-filter/sorting-area */ \"./src/components/course-filter/sorting-area.jsx\");\n/* harmony import */ var _course_course_type_one__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../course/course-type-one */ \"./src/components/course/course-type-one.jsx\");\n/* harmony import */ var _store_products__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/products */ \"./src/store/products.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst CourseArea = ()=>{\n    var _courses_slice;\n    _s();\n    const coursePerView = 8;\n    const [next, setNext] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(coursePerView);\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [courses, setCourses] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_data__WEBPACK_IMPORTED_MODULE_2__.course_data);\n    const { products, setProducts } = (0,_store_products__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    const productsPerPage = 9;\n    const totalProducts = products.length;\n    const totalPages = Math.ceil(totalProducts / productsPerPage);\n    const paginatedProducts = products.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);\n    const paginateNew = (data)=>{\n        setCurrentPage(data.selected + 1);\n    };\n    const showNextButton = currentPage !== totalPages;\n    const showPrevButton = currentPage - 1 !== 0;\n    // handleLoadData\n    const handleLoadData = ()=>{\n        setNext((value)=>value + 4);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const pageNumber = 1;\n            const pageSize = 1000;\n            try {\n                let userId = 0; // Valor por defecto\n                // Verificar si existe la clave USER_AUTH en localStorage\n                const infoUserLogued = localStorage.getItem(\"USER_AUTH\");\n                if (infoUserLogued) {\n                    const userData = JSON.parse(infoUserLogued);\n                    userId = userData.userId;\n                }\n                const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"https://api.yosoymitosis.com/v1/Product/GetProductsStore\", {\n                    number: pageNumber,\n                    size: pageSize\n                }, {\n                    headers: {\n                        \"Content-Type\": \"application/json\",\n                        \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibWl0b3NpekFwaSIsInBhc3N3b3JkIjoiQG1pdG9zaXo5NiIsImF1ZCI6IkZyb250TWl0b3NpeiJ9.PjRxNwguwkC6I_Qtlo6XLy1686QFyU5L2QroleKQAX0\"\n                    }\n                });\n                if (response.data.message === \"Success\") {\n                    // setDataProducts(response.data.data.productStore);\n                    // console.log(response.data.data.productStore)\n                    setProducts(response.data.data.productStore);\n                } else {\n                    console.error(\"Error al consumir el servicio GetProductsStore\");\n                }\n            } catch (error) {\n                console.error(error);\n            }\n        };\n        fetchData();\n    }, [\n        currentPage,\n        productsPerPage,\n        setProducts\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"edu-course-area course-area-1 gap-tb-text\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_course_filter_sorting_area__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    course_items: _data__WEBPACK_IMPORTED_MODULE_2__.course_data,\n                    num: (_courses_slice = courses === null || courses === void 0 ? void 0 : courses.slice(0, next)) === null || _courses_slice === void 0 ? void 0 : _courses_slice.length,\n                    setCourses: setCourses,\n                    courses: courses\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ADMIN\\\\Downloads\\\\edublink-react-education-template\\\\edublink\\\\src\\\\components\\\\course-style-1\\\\course-1-area.jsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row g-5\",\n                    children: paginatedProducts === null || paginatedProducts === void 0 ? void 0 : paginatedProducts.map((item, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-md-6 col-xl-3\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_course_course_type_one__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                data: index,\n                                classes: \"course-box-shadow\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ADMIN\\\\Downloads\\\\edublink-react-education-template\\\\edublink\\\\src\\\\components\\\\course-style-1\\\\course-1-area.jsx\",\n                                lineNumber: 81,\n                                columnNumber: 17\n                            }, undefined)\n                        }, item, false, {\n                            fileName: \"C:\\\\Users\\\\ADMIN\\\\Downloads\\\\edublink-react-education-template\\\\edublink\\\\src\\\\components\\\\course-style-1\\\\course-1-area.jsx\",\n                            lineNumber: 80,\n                            columnNumber: 15\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ADMIN\\\\Downloads\\\\edublink-react-education-template\\\\edublink\\\\src\\\\components\\\\course-style-1\\\\course-1-area.jsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, undefined),\n                next < courses.length && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: handleLoadData,\n                    className: \"load-more-btn\",\n                    \"data-sal-delay\": \"100\",\n                    \"data-sal\": \"slide-up\",\n                    \"data-sal-duration\": \"1200\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"edu-btn\",\n                        style: {\n                            cursor: \"pointer\"\n                        },\n                        children: [\n                            \"Load More \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"icon-56\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ADMIN\\\\Downloads\\\\edublink-react-education-template\\\\edublink\\\\src\\\\components\\\\course-style-1\\\\course-1-area.jsx\",\n                                lineNumber: 95,\n                                columnNumber: 76\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ADMIN\\\\Downloads\\\\edublink-react-education-template\\\\edublink\\\\src\\\\components\\\\course-style-1\\\\course-1-area.jsx\",\n                        lineNumber: 95,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ADMIN\\\\Downloads\\\\edublink-react-education-template\\\\edublink\\\\src\\\\components\\\\course-style-1\\\\course-1-area.jsx\",\n                    lineNumber: 94,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ADMIN\\\\Downloads\\\\edublink-react-education-template\\\\edublink\\\\src\\\\components\\\\course-style-1\\\\course-1-area.jsx\",\n            lineNumber: 74,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ADMIN\\\\Downloads\\\\edublink-react-education-template\\\\edublink\\\\src\\\\components\\\\course-style-1\\\\course-1-area.jsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CourseArea, \"dfgCneNFnbc9WzuUxwlSnbLhM+Q=\", false, function() {\n    return [\n        _store_products__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = CourseArea;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CourseArea);\nvar _c;\n$RefreshReg$(_c, \"CourseArea\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb3Vyc2Utc3R5bGUtMS9jb3Vyc2UtMS1hcmVhLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMEI7QUFDa0I7QUFDSDtBQUNlO0FBQ0Y7QUFFSDtBQUV6QjtBQUUxQixNQUFNUSxhQUFhO1FBZ0VrQ0M7O0lBL0RuRCxNQUFNQyxnQkFBZ0I7SUFDdEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdYLCtDQUFRQSxDQUFDUztJQUNqQyxNQUFNLENBQUNHLGFBQWFDLGVBQWUsR0FBR2IsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDUSxTQUFTTSxXQUFXLEdBQUdkLCtDQUFRQSxDQUFDRSw4Q0FBV0E7SUFDbEQsTUFBTSxFQUFFYSxRQUFRLEVBQUVDLFdBQVcsRUFBRSxHQUFHWCwyREFBZUE7SUFDakQsTUFBTVksa0JBQWtCO0lBQ3hCLE1BQU1DLGdCQUFnQkgsU0FBU0k7SUFDL0IsTUFBTUMsYUFBYUMsS0FBS0MsS0FBS0osZ0JBQWdCRDtJQUM3QyxNQUFNTSxvQkFBb0JSLFNBQVNTLE1BQ2pDLENBQUNaLGNBQWMsS0FBS0ssaUJBQ3BCTCxjQUFjSztJQUVoQixNQUFNUSxjQUFjLENBQUNDO1FBQVdiLGVBQWVhLEtBQUtDLFdBQVc7SUFBRztJQUNsRSxNQUFNQyxpQkFBaUJoQixnQkFBZ0JRO0lBQ3ZDLE1BQU1TLGlCQUFpQmpCLGNBQVksTUFBTTtJQUV6QyxpQkFBaUI7SUFDakIsTUFBTWtCLGlCQUFpQjtRQUNyQm5CLFFBQVFvQixDQUFBQSxRQUFTQSxRQUFRO0lBQzNCO0lBQ0E5QixnREFBU0EsQ0FBQztRQUNSLE1BQU0rQixZQUFZO1lBQ2hCLE1BQU1DLGFBQWE7WUFDbkIsTUFBTUMsV0FBVztZQUNqQixJQUFJO2dCQUNGLElBQUlDLFNBQVMsR0FBRyxvQkFBb0I7Z0JBRXBDLHlEQUF5RDtnQkFDekQsTUFBTUMsaUJBQWlCQyxhQUFhQyxRQUFRO2dCQUM1QyxJQUFJRixnQkFBZ0I7b0JBQ2xCLE1BQU1HLFdBQVdDLEtBQUtDLE1BQU1MO29CQUM1QkQsU0FBU0ksU0FBU0o7Z0JBQ3BCO2dCQUNBLE1BQU1PLFdBQVcsTUFBTXBDLGtEQUFVcUMsQ0FDL0IsNERBQ0E7b0JBQ0VDLFFBQVFYO29CQUNSWSxNQUFNWDtnQkFDUixHQUNBO29CQUNFWSxTQUFTO3dCQUNQLGdCQUFnQjt3QkFDaEIsaUJBQWlCO29CQUNuQjtnQkFDRjtnQkFFRixJQUFJSixTQUFTaEIsS0FBS3FCLFlBQVksV0FBVztvQkFDdkMsb0RBQW9EO29CQUNwRCwrQ0FBK0M7b0JBQy9DL0IsWUFBWTBCLFNBQVNoQixLQUFLQSxLQUFLc0I7Z0JBQ2pDLE9BQU87b0JBQ0xDLFFBQVFDLE1BQU07Z0JBQ2hCO1lBQ0YsRUFBRSxPQUFPQSxPQUFPO2dCQUNkRCxRQUFRQyxNQUFNQTtZQUNoQjtRQUNGO1FBQ0FsQjtJQUNGLEdBQUc7UUFBQ3BCO1FBQWFLO1FBQWlCRDtLQUFZO0lBRTlDLHFCQUNFLDhEQUFDbUM7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNqRCxtRUFBV0E7b0JBQUNrRCxjQUFjbkQsOENBQVdBO29CQUFFb0QsS0FBSzlDLENBQUFBLGlCQUFBQSxvQkFBQUEscUJBQUFBLEtBQUFBLElBQUFBLFFBQVNnQixNQUFNLEdBQUdkLG1CQUFsQkYsNEJBQUFBLEtBQUFBLElBQUFBLGVBQXlCVztvQkFBUUwsWUFBWUE7b0JBQVlOLFNBQVNBOzs7Ozs7OEJBRS9HLDhEQUFDMkM7b0JBQUlDLFdBQVU7OEJBQ1o3Qiw4QkFBQUEsK0JBQUFBLEtBQUFBLElBQUFBLGtCQUFtQmdDLElBQUksQ0FBQ0MsTUFBTUM7d0JBQzdCLHFCQUNFLDhEQUFDTjs0QkFBZUMsV0FBVTtzQ0FDeEIsNEVBQUNoRCwrREFBYUE7Z0NBQUNzQixNQUFNK0I7Z0NBQU9DLFNBQVE7Ozs7OzsyQkFENUJGOzs7OztvQkFJZDs7Ozs7O2dCQVNEOUMsT0FBT0YsUUFBUVcsd0JBQ2QsOERBQUNnQztvQkFBSVEsU0FBUzdCO29CQUFnQnNCLFdBQVU7b0JBQWdCUSxrQkFBZTtvQkFBTUMsWUFBUztvQkFBV0MscUJBQWtCOzhCQUNqSCw0RUFBQ0M7d0JBQUVYLFdBQVU7d0JBQVVZLE9BQU87NEJBQUVDLFFBQVE7d0JBQVU7OzRCQUFHOzBDQUFVLDhEQUFDQztnQ0FBRWQsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU14RjtHQTFGTTdDOztRQUs4QkYsdURBQWVBOzs7S0FMN0NFO0FBNEZOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NvdXJzZS1zdHlsZS0xL2NvdXJzZS0xLWFyZWEuanN4PzkyYzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY291cnNlX2RhdGEgfSBmcm9tICcuLi8uLi9kYXRhJztcclxuaW1wb3J0IFNvcnRpbmdBcmVhIGZyb20gJy4uL2NvdXJzZS1maWx0ZXIvc29ydGluZy1hcmVhJztcclxuaW1wb3J0IENvdXJzZVR5cGVPbmUgZnJvbSAnLi4vY291cnNlL2NvdXJzZS10eXBlLW9uZSc7XHJcblxyXG5pbXBvcnQgdXNlUHJvZHVjdFN0b3JlIGZyb20gJy4uLy4uL3N0b3JlL3Byb2R1Y3RzJztcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBDb3Vyc2VBcmVhID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvdXJzZVBlclZpZXcgPSA4O1xyXG4gIGNvbnN0IFtuZXh0LCBzZXROZXh0XSA9IHVzZVN0YXRlKGNvdXJzZVBlclZpZXcpO1xyXG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW2NvdXJzZXMsIHNldENvdXJzZXNdID0gdXNlU3RhdGUoY291cnNlX2RhdGEpO1xyXG4gIGNvbnN0IHsgcHJvZHVjdHMsIHNldFByb2R1Y3RzIH0gPSB1c2VQcm9kdWN0U3RvcmUoKTtcclxuICBjb25zdCBwcm9kdWN0c1BlclBhZ2UgPSA5O1xyXG4gIGNvbnN0IHRvdGFsUHJvZHVjdHMgPSBwcm9kdWN0cy5sZW5ndGg7XHJcbiAgY29uc3QgdG90YWxQYWdlcyA9IE1hdGguY2VpbCh0b3RhbFByb2R1Y3RzIC8gcHJvZHVjdHNQZXJQYWdlKTtcclxuICBjb25zdCBwYWdpbmF0ZWRQcm9kdWN0cyA9IHByb2R1Y3RzLnNsaWNlKFxyXG4gICAgKGN1cnJlbnRQYWdlIC0gMSkgKiBwcm9kdWN0c1BlclBhZ2UsXHJcbiAgICBjdXJyZW50UGFnZSAqIHByb2R1Y3RzUGVyUGFnZVxyXG4gICk7XHJcbiAgY29uc3QgcGFnaW5hdGVOZXcgPSAoZGF0YSkgPT4geyBzZXRDdXJyZW50UGFnZShkYXRhLnNlbGVjdGVkICsgMSkgfVxyXG4gIGNvbnN0IHNob3dOZXh0QnV0dG9uID0gY3VycmVudFBhZ2UgIT09IHRvdGFsUGFnZXM7XHJcbiAgY29uc3Qgc2hvd1ByZXZCdXR0b24gPSBjdXJyZW50UGFnZS0xICE9PSAwO1xyXG5cclxuICAvLyBoYW5kbGVMb2FkRGF0YVxyXG4gIGNvbnN0IGhhbmRsZUxvYWREYXRhID0gKCkgPT4ge1xyXG4gICAgc2V0TmV4dCh2YWx1ZSA9PiB2YWx1ZSArIDQpXHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHBhZ2VOdW1iZXIgPSAxO1xyXG4gICAgICBjb25zdCBwYWdlU2l6ZSA9IDEwMDA7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IHVzZXJJZCA9IDA7IC8vIFZhbG9yIHBvciBkZWZlY3RvXHJcblxyXG4gICAgICAgIC8vIFZlcmlmaWNhciBzaSBleGlzdGUgbGEgY2xhdmUgVVNFUl9BVVRIIGVuIGxvY2FsU3RvcmFnZVxyXG4gICAgICAgIGNvbnN0IGluZm9Vc2VyTG9ndWVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJVU0VSX0FVVEhcIik7XHJcbiAgICAgICAgaWYgKGluZm9Vc2VyTG9ndWVkKSB7XHJcbiAgICAgICAgICBjb25zdCB1c2VyRGF0YSA9IEpTT04ucGFyc2UoaW5mb1VzZXJMb2d1ZWQpO1xyXG4gICAgICAgICAgdXNlcklkID0gdXNlckRhdGEudXNlcklkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgICBcImh0dHBzOi8vYXBpLnlvc295bWl0b3Npcy5jb20vdjEvUHJvZHVjdC9HZXRQcm9kdWN0c1N0b3JlXCIsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG51bWJlcjogcGFnZU51bWJlcixcclxuICAgICAgICAgICAgc2l6ZTogcGFnZVNpemVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciBleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKMWMyVnlJam9pYldsMGIzTnBla0Z3YVNJc0luQmhjM04zYjNKa0lqb2lRRzFwZEc5emFYbzVOaUlzSW1GMVpDSTZJa1p5YjI1MFRXbDBiM05wZWlKOS5QalJ4TndndXdrQzZJX1F0bG82WEx5MTY4NlFGeVU1TDJRcm9sZUtRQVgwJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEubWVzc2FnZSA9PT0gXCJTdWNjZXNzXCIpIHtcclxuICAgICAgICAgIC8vIHNldERhdGFQcm9kdWN0cyhyZXNwb25zZS5kYXRhLmRhdGEucHJvZHVjdFN0b3JlKTtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEuZGF0YS5wcm9kdWN0U3RvcmUpXHJcbiAgICAgICAgICBzZXRQcm9kdWN0cyhyZXNwb25zZS5kYXRhLmRhdGEucHJvZHVjdFN0b3JlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFsIGNvbnN1bWlyIGVsIHNlcnZpY2lvIEdldFByb2R1Y3RzU3RvcmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW2N1cnJlbnRQYWdlLCBwcm9kdWN0c1BlclBhZ2UsIHNldFByb2R1Y3RzXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImVkdS1jb3Vyc2UtYXJlYSBjb3Vyc2UtYXJlYS0xIGdhcC10Yi10ZXh0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPFNvcnRpbmdBcmVhIGNvdXJzZV9pdGVtcz17Y291cnNlX2RhdGF9IG51bT17Y291cnNlcz8uc2xpY2UoMCwgbmV4dCk/Lmxlbmd0aH0gc2V0Q291cnNlcz17c2V0Q291cnNlc30gY291cnNlcz17Y291cnNlc30gLz5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZy01XCI+XHJcbiAgICAgICAgICB7cGFnaW5hdGVkUHJvZHVjdHM/Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbX0gY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLXhsLTNcIj5cclxuICAgICAgICAgICAgICAgIDxDb3Vyc2VUeXBlT25lIGRhdGE9e2luZGV4fSBjbGFzc2VzPVwiY291cnNlLWJveC1zaGFkb3dcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJncmlkIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIHhsOmdyaWQtY29scy0zIGdhcC14LTggZ2FwLXktMTAgbXQtOCBsZzptdC0xMFwiPlxyXG4gICAgICAgICAge3BhZ2luYXRlZFByb2R1Y3RzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgLy8gPFByb2R1Y3RDYXJkU2VydmljZSBkYXRhPXtpdGVtfSBrZXk9e2luZGV4fSAvPlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLCBpbmRleClcclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PiAqL31cclxuXHJcbiAgICAgICAge25leHQgPCBjb3Vyc2VzLmxlbmd0aCAmJlxyXG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXtoYW5kbGVMb2FkRGF0YX0gY2xhc3NOYW1lPVwibG9hZC1tb3JlLWJ0blwiIGRhdGEtc2FsLWRlbGF5PVwiMTAwXCIgZGF0YS1zYWw9XCJzbGlkZS11cFwiIGRhdGEtc2FsLWR1cmF0aW9uPVwiMTIwMFwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJlZHUtYnRuXCIgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0+TG9hZCBNb3JlIDxpIGNsYXNzTmFtZT1cImljb24tNTZcIj48L2k+PC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ291cnNlQXJlYTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNvdXJzZV9kYXRhIiwiU29ydGluZ0FyZWEiLCJDb3Vyc2VUeXBlT25lIiwidXNlUHJvZHVjdFN0b3JlIiwiYXhpb3MiLCJDb3Vyc2VBcmVhIiwiY291cnNlcyIsImNvdXJzZVBlclZpZXciLCJuZXh0Iiwic2V0TmV4dCIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJzZXRDb3Vyc2VzIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsInByb2R1Y3RzUGVyUGFnZSIsInRvdGFsUHJvZHVjdHMiLCJsZW5ndGgiLCJ0b3RhbFBhZ2VzIiwiTWF0aCIsImNlaWwiLCJwYWdpbmF0ZWRQcm9kdWN0cyIsInNsaWNlIiwicGFnaW5hdGVOZXciLCJkYXRhIiwic2VsZWN0ZWQiLCJzaG93TmV4dEJ1dHRvbiIsInNob3dQcmV2QnV0dG9uIiwiaGFuZGxlTG9hZERhdGEiLCJ2YWx1ZSIsImZldGNoRGF0YSIsInBhZ2VOdW1iZXIiLCJwYWdlU2l6ZSIsInVzZXJJZCIsImluZm9Vc2VyTG9ndWVkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVzZXJEYXRhIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2UiLCJwb3N0IiwibnVtYmVyIiwic2l6ZSIsImhlYWRlcnMiLCJtZXNzYWdlIiwicHJvZHVjdFN0b3JlIiwiY29uc29sZSIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiY291cnNlX2l0ZW1zIiwibnVtIiwibWFwIiwiaXRlbSIsImluZGV4IiwiY2xhc3NlcyIsIm9uQ2xpY2siLCJkYXRhLXNhbC1kZWxheSIsImRhdGEtc2FsIiwiZGF0YS1zYWwtZHVyYXRpb24iLCJhIiwic3R5bGUiLCJjdXJzb3IiLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/course-style-1/course-1-area.jsx\n"));

/***/ })

});