"use strict";
exports.id = 4688;
exports.ids = [4688];
exports.modules = {

/***/ 5666:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
/* harmony import */ var _data_bearerToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2854);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);
axios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const CourseSidebarTwo = ({ onTeacherSelect, onCategorySelect })=>{
    const [showCategory, setShowCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [categoriesFromService, setCategoriesFromService] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [showTeachers, setShowTeachers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [teachersFromService, setTeachersFromService] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [selectedTeachers, setSelectedTeachers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [selectedCategories, setSelectedCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const handleTeacherChange = (teacherId)=>{
        const updatedSelection = selectedTeachers.includes(teacherId) // Verifica si el teacherId ya está dentro del array selectedTeachers
         ? selectedTeachers.filter((id_selectedTeachers)=>id_selectedTeachers !== teacherId) // Si ya está seleccionado, lo quitas
         : [
            ...selectedTeachers,
            teacherId
        ]; // Si no está seleccionado, lo agregas
        localStorage.setItem("selectedTeachers", updatedSelection);
        setSelectedTeachers(updatedSelection); // Actualiza el estado local
        onTeacherSelect(updatedSelection); // Envía el estado actualizado al padre
    };
    const handleCategoriesChange = (categoryId)=>{
        const updatedSelection = selectedCategories.includes(categoryId) // Verifica si el categoryId ya está dentro del array selectedCategories
         ? selectedCategories.filter((id_selectedCategories)=>id_selectedCategories !== categoryId) // Si ya está seleccionado, lo quitas
         : [
            ...selectedCategories,
            categoryId
        ]; // Si no está seleccionado, lo agregas
        localStorage.setItem("selectedCategories", updatedSelection);
        setSelectedCategories(updatedSelection); // Actualiza el estado local
        onCategorySelect(updatedSelection); // Envía el estado actualizado al padre
    };
    // Fetch categories from the API
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchCategories = async ()=>{
            try {
                const response = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].post("https://apitest.yosoymitosis.com/v1/Category/GetCategoryFilter", {}, {
                    headers: {
                        "Authorization": `Bearer ${_data_bearerToken__WEBPACK_IMPORTED_MODULE_3__/* .API_TOKEN */ .E}`
                    }
                });
                if (response.data.error === false) {
                    setCategoriesFromService(response.data.data);
                } else {
                    console.error("Error fetching categories");
                }
            } catch (error) {
                console.error("Error during API request", error);
            }
        };
        fetchCategories();
        const fetchTeachers = async ()=>{
            try {
                const response = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].post("https://apitest.yosoymitosis.com/v1/Teacher/GetTeacherFilter", {}, {
                    headers: {
                        "Authorization": `Bearer ${_data_bearerToken__WEBPACK_IMPORTED_MODULE_3__/* .API_TOKEN */ .E}`
                    }
                });
                if (response.data.error === false) {
                    setTeachersFromService(response.data.data);
                } else {
                    console.error("Error fetching teachers");
                }
            } catch (error) {
                console.error("Error during API request", error);
            }
        };
        fetchTeachers();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const savedTeachers = localStorage.getItem("selectedTeachers");
        if (savedTeachers) {
            setSelectedTeachers(JSON.parse(savedTeachers)); // Establece los IDs recuperados en el estado
        }
        const savedCategories = localStorage.getItem("selectedCategories");
        if (savedCategories) {
            setSelectedCategories(JSON.parse(savedCategories)); // Establece los IDs recuperados en el estado
        }
    }, []); // Solo se ejecuta una vez cuando la página se carga
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
                            children: categoriesFromService.map((category, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "edu-form-check",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "checkbox",
                                            checked: selectedCategories.includes(category.categoryId),
                                            id: `cat-check${i + 1}`,
                                            onChange: ()=>handleCategoriesChange(category.categoryId)
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                            htmlFor: `cat-check${i + 1}`,
                                            children: [
                                                category.description,
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    children: [
                                                        "(",
                                                        categoriesFromService.filter((item)=>item.category === category.description)?.length,
                                                        ")"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }, category.categoryId))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "edu-course-widget widget-category",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "inner",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                            className: `widget-title widget-toggle ${showTeachers ? "active" : ""}`,
                            onClick: ()=>setShowTeachers(!showTeachers),
                            children: "Profesores"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "content",
                            style: {
                                display: showTeachers ? "block" : "none"
                            },
                            children: teachersFromService.map((teacher, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "edu-form-check",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "checkbox",
                                            checked: selectedTeachers.includes(teacher.teacherId),
                                            id: `teacher-check${i + 1}`,
                                            onChange: ()=>handleTeacherChange(teacher.teacherId)
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                            htmlFor: `teacher-check${i + 1}`,
                                            children: [
                                                teacher.names,
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    children: [
                                                        "(",
                                                        teachersFromService.filter((item)=>item.teacher === teacher.names)?.length,
                                                        ")"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }, teacher.teacherId))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "edu-course-widget hidden",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        className: "widget-title mb-4",
                        children: "Restablecer filtros"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "edu-btn btn-small mb--30",
                        children: "Restablecer"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CourseSidebarTwo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2854:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ API_TOKEN)
/* harmony export */ });
const API_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibWl0b3NpekFwaSIsInBhc3N3b3JkIjoiQG1pdG9zaXo5NiIsImF1ZCI6IkZyb250Q2FwYWNpdGF0ZWMifQ.bRpwHDRVjqSYrYnDwXY2iySlEZdjkA3kHGtx7MTm8Ro";


/***/ })

};
;