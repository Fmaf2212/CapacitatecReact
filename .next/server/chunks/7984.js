"use strict";
exports.id = 7984;
exports.ids = [7984];
exports.modules = {

/***/ 7984:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7219);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_products__WEBPACK_IMPORTED_MODULE_2__]);
_store_products__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


 // Importar el store de Zustand
const SortingArea = ({ onSortingSelect })=>{
    const { setSortingOption, sortingOption } = (0,_store_products__WEBPACK_IMPORTED_MODULE_2__/* .useProductStore */ .a)();
    const handleChange = (e)=>{
        const value = e.target.value;
        sortCourses(value);
    };
    const sortCourses = (value)=>{
        let valueSort = "";
        let columnOrder = "";
        let orderDirection = "";
        if (value === "Ordenar de A - Z") {
            valueSort = value;
            columnOrder = "Name";
            orderDirection = "ASC";
        } else if (value === "Ordenar de Z - A") {
            valueSort = value;
            columnOrder = "Name";
            orderDirection = "DESC";
        } else if (value === "Precio m\xe1s bajo") {
            valueSort = value;
            columnOrder = "Price";
            orderDirection = "ASC";
        } else if (value === "Precio m\xe1s alto") {
            valueSort = value;
            columnOrder = "Price";
            orderDirection = "DESC";
        } else {
            valueSort = "Filtros";
            columnOrder = "";
            orderDirection = "";
        }
        onSortingSelect({
            valueSort,
            columnOrder,
            orderDirection
        });
        setSortingOption({
            valueSort: valueSort,
            columnOrder: columnOrder,
            orderDirection: orderDirection
        }); // Para actualizar la opción seleccionada en Zustand
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const savedsortingOption = localStorage.getItem("sortingOption");
        if (savedsortingOption) {
            setSortingOption({
                valueSort: savedsortingOption.valueSort,
                columnOrder: savedsortingOption.columnOrder,
                orderDirection: savedsortingOption.orderDirection
            });
        }
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "edu-sorting-area",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "sorting-left"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "sorting-right",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "edu-sorting",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "icon",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "icon-55"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                            onChange: handleChange,
                            className: "edu-select",
                            value: sortingOption.valueSort,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    children: "Filtros"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    children: "Ordenar de A - Z"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    children: "Ordenar de Z - A"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    children: "Precio m\xe1s alto"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    children: "Precio m\xe1s bajo"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SortingArea);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7219:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   a: () => (/* binding */ useProductStore)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6912);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__]);
zustand__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const useProductStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set)=>({
        products: [],
        searchTerm: "",
        sortingOption: {
            valueSort: "Filtros",
            columnOrder: "",
            orderDirection: ""
        },
        setProducts: (newProducts)=>set({
                products: newProducts
            }),
        setSearchTerm: (term)=>set({
                searchTerm: term
            }),
        //setSortingOption: (option) => set({ sortingOption: option }), // Función para actualizar la opción de ordenamiento
        // Función para actualizar la opción de ordenamiento
        setSortingOption: ({ valueSort, columnOrder, orderDirection })=>set((state1)=>({
                    sortingOption: {
                        valueSort: valueSort || state1.sortingOption.valueSort,
                        columnOrder: columnOrder || state1.sortingOption.columnOrder,
                        orderDirection: orderDirection || state1.sortingOption.orderDirection
                    }
                })),
        getProductsAndSorting: ()=>({
                products: state.products,
                sortingOption: state.sortingOption
            })
    }));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useProductStore);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;