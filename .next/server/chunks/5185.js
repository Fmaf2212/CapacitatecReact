"use strict";
exports.id = 5185;
exports.ids = [5185];
exports.modules = {

/***/ 6220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ course_details_two)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/common/sidebar/course-details-sidebar.jsx
var course_details_sidebar = __webpack_require__(5382);
// EXTERNAL MODULE: ./src/components/course-details/single-comment.jsx
var single_comment = __webpack_require__(6447);
// EXTERNAL MODULE: ./src/components/course-details/single-progressbar.jsx
var single_progressbar = __webpack_require__(4304);
;// CONCATENATED MODULE: ./src/components/detalleCurso/single-accordion.jsx


const SingleAccordion = ({ show = false, id, title, desc })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "accordion-item",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                className: "accordion-header",
                id: "headingOne",
                children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                    className: `accordion-button ${show ? "" : "collapsed"}`,
                    type: "button",
                    "data-bs-toggle": "collapse",
                    "data-bs-target": `#question-${id}`,
                    "aria-expanded": show ? "true" : "false",
                    children: title
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                id: `question-${id}`,
                className: `accordion-collapse collapse ${show ? "show" : ""}`,
                "data-bs-parent": "#faq-accordion",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "accordion-body",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "course-lesson",
                        children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                            children: desc.map((list, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                    children: [
                                        list.title && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "text",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                    className: "icon-65"
                                                }),
                                                list.title
                                            ]
                                        }),
                                        !list?.badge_list && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "icon",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                className: list?.icon
                                            })
                                        }),
                                        list?.badge_list && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "badge-list",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                    className: "badge badge-primary",
                                                    children: [
                                                        list?.question,
                                                        " Question"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                    className: "badge badge-secondary",
                                                    children: [
                                                        list?.minutes,
                                                        " Minutes"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }, i))
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const single_accordion = (SingleAccordion);

;// CONCATENATED MODULE: ./src/components/detalleCurso/course-details-two.jsx






const CourseDetailsTwo = ({ course })=>{
    const { course_desc, course_desc_2, learn_list, course_desc_3, curriculum_desc, course_lessons, instructor_img, instructor_title, instructor_desc, social_links, reviews, instructor, rating, rating_count } = course || {};
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "edu-section-gap course-details-area",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "row row--30",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-lg-8",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "course-details-content course-details-2",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "course-overview",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                            className: "heading-title",
                                            "data-sal-delay": "150",
                                            "data-sal": "slide-up",
                                            "data-sal-duration": "800",
                                            children: "Acerca de Este Curso"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            "data-sal-delay": "150",
                                            "data-sal": "slide-up",
                                            "data-sal-duration": "800",
                                            children: course_desc
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            "data-sal-delay": "150",
                                            "data-sal": "slide-up",
                                            "data-sal-duration": "800",
                                            children: course_desc_2
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "border-box",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                    className: "title",
                                                    "data-sal-delay": "150",
                                                    "data-sal": "slide-up",
                                                    "data-sal-duration": "800",
                                                    children: "\xbfQu\xe9 Aprender\xe1s?"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "row g-5",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "col-lg-6",
                                                            "data-sal-delay": "150",
                                                            "data-sal": "slide-up",
                                                            "data-sal-duration": "800",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                        children: "\xa1Aprende a usar Python profesionalmente, aprendiendo tanto Python 2 como Python 3!"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                        children: "Construye 6 proyectos reales y bellos para tu portafolio (no aplicaciones aburridas)"
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "col-lg-6",
                                                            "data-sal-delay": "150",
                                                            "data-sal": "slide-up",
                                                            "data-sal-duration": "800",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                        children: "Entiende la teor\xeda detr\xe1s de Vue.js y \xfasalo en proyectos reales"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                        children: "Crea dise\xf1os responsivos, accesibles y hermosos"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                            className: "heading-title",
                                            "data-sal-delay": "150",
                                            "data-sal": "slide-up",
                                            "data-sal-duration": "800",
                                            children: "Requisitos"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                            className: "mb--90",
                                            "data-sal-delay": "150",
                                            "data-sal": "slide-up",
                                            "data-sal-duration": "800",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: "No se requiere conocimiento previo de Wordpress ya que todo ser\xe1 cubierto en este curso."
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: "Conocimientos b\xe1sicos de HTML y CSS ayudan, pero no son imprescindibles"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: "No necesitas ninguna experiencia en programaci\xf3n. Esa es la belleza de Wordpress."
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: "Se requiere conocimiento b\xe1sico de JavaScript"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                            className: "heading-title",
                                            "data-sal-delay": "150",
                                            "data-sal": "slide-up",
                                            "data-sal-duration": "800",
                                            children: "P\xfablico Objetivo"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                            className: "mb--90",
                                            "data-sal-delay": "150",
                                            "data-sal": "slide-up",
                                            "data-sal-duration": "800",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: "Desarrolladores frontend tanto novatos como experimentados interesados en aprender un marco moderno de JavaScript"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: "Si quieres aprender a dominar Wordpress sin quedar atrapado con jerga t\xe9cnica, este curso es para ti."
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: "Este curso es para ti si deseas construir un sitio web, ya sea por razones personales o comerciales."
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: "Este curso es perfecto para ti si est\xe1s tomando el control de un sitio web de Wordpress existente, o quieres construir uno desde cero"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "course-curriculam mb--90",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                            className: "heading-title",
                                            "data-sal-delay": "150",
                                            "data-sal": "slide-up",
                                            "data-sal-duration": "800",
                                            children: "Temas de Este Curso"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            "data-sal-delay": "150",
                                            "data-sal": "slide-up",
                                            "data-sal-duration": "800",
                                            children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua."
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "accordion edu-accordion",
                                            id: "accordionExample",
                                            "data-sal-delay": "150",
                                            "data-sal": "slide-up",
                                            "data-sal-duration": "800",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(single_accordion, {
                                                    show: true,
                                                    id: "1",
                                                    title: "Introducci\xf3n al Curso",
                                                    desc: [
                                                        {
                                                            title: "Introducci\xf3n",
                                                            icon: "icon-68"
                                                        },
                                                        {
                                                            title: "Visi\xf3n General del Curso",
                                                            icon: "icon-68"
                                                        },
                                                        {
                                                            title: "Visi\xf3n General del Curso",
                                                            badge_list: true,
                                                            question: 0,
                                                            minutes: 10
                                                        },
                                                        {
                                                            title: "Ejercicio del Curso / Archivos de Referencia",
                                                            icon: "icon-68"
                                                        },
                                                        {
                                                            title: "Instalaci\xf3n del Editor de C\xf3digo (Opcional si ya tienes uno)",
                                                            icon: "icon-68"
                                                        },
                                                        {
                                                            title: "Incrustaci\xf3n de PHP en HTML",
                                                            icon: "icon-68"
                                                        }
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(single_accordion, {
                                                    id: "2",
                                                    title: "Fundamentos del Lenguaje JavaScript",
                                                    desc: [
                                                        {
                                                            title: "Introducci\xf3n",
                                                            icon: "icon-68"
                                                        },
                                                        {
                                                            title: "Visi\xf3n General del Curso",
                                                            icon: "icon-68"
                                                        },
                                                        {
                                                            title: "Visi\xf3n General del Curso",
                                                            badge_list: true,
                                                            question: 2,
                                                            minutes: 12
                                                        },
                                                        {
                                                            title: "Ejercicio del Curso / Archivos de Referencia",
                                                            icon: "icon-68"
                                                        },
                                                        {
                                                            title: "Instalaci\xf3n del Editor de C\xf3digo (Opcional si ya tienes uno)",
                                                            icon: "icon-68"
                                                        },
                                                        {
                                                            title: "Incrustaci\xf3n de PHP en HTML",
                                                            icon: "icon-68"
                                                        }
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(single_accordion, {
                                                    id: "3",
                                                    title: "Componentes & Data Binding",
                                                    desc: [
                                                        {
                                                            title: "Introducci\xf3n",
                                                            icon: "icon-68"
                                                        },
                                                        {
                                                            title: "Visi\xf3n General del Curso",
                                                            icon: "icon-68"
                                                        },
                                                        {
                                                            title: "Visi\xf3n General del Curso",
                                                            badge_list: true,
                                                            question: 4,
                                                            minutes: 15
                                                        },
                                                        {
                                                            title: "Ejercicio del Curso / Archivos de Referencia",
                                                            icon: "icon-68"
                                                        },
                                                        {
                                                            title: "Instalaci\xf3n del Editor de C\xf3digo (Opcional si ya tienes uno)",
                                                            icon: "icon-68"
                                                        },
                                                        {
                                                            title: "Incrustaci\xf3n de PHP en HTML",
                                                            icon: "icon-68"
                                                        }
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(single_accordion, {
                                                    id: "4",
                                                    title: "Liderazgo en Gesti\xf3n de Productos",
                                                    desc: [
                                                        {
                                                            title: "Introducci\xf3n",
                                                            icon: "icon-68"
                                                        },
                                                        {
                                                            title: "Visi\xf3n General del Curso",
                                                            icon: "icon-68"
                                                        },
                                                        {
                                                            title: "Visi\xf3n General del Curso",
                                                            badge_list: true,
                                                            question: 6,
                                                            minutes: 18
                                                        },
                                                        {
                                                            title: "Ejercicio del Curso / Archivos de Referencia",
                                                            icon: "icon-68"
                                                        },
                                                        {
                                                            title: "Instalaci\xf3n del Editor de C\xf3digo (Opcional si ya tienes uno)",
                                                            icon: "icon-68"
                                                        },
                                                        {
                                                            title: "Incrustaci\xf3n de PHP en HTML",
                                                            icon: "icon-68"
                                                        }
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "course-instructor-wrap mb--90",
                                    "data-sal-delay": "150",
                                    "data-sal": "slide-up",
                                    "data-sal-duration": "800",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                            className: "heading-title",
                                            children: "Tus Instructores"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "course-instructor",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "thumbnail",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: `/assets/images/team/team-02/${instructor_img}`,
                                                        alt: "im\xe1genes del equipo"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "author-content",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                            className: "title",
                                                            children: instructor
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "subtitle",
                                                            children: instructor_title
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            children: instructor_desc
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                            className: "social-share",
                                                            children: social_links?.map((social, i)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                        href: social.link,
                                                                        target: social.target ? social.target : "",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                            className: social.icon
                                                                        })
                                                                    })
                                                                }, i))
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "course-review",
                                    "data-sal-delay": "150",
                                    "data-sal": "slide-up",
                                    "data-sal-duration": "800",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                            className: "heading-title",
                                            children: "Opiniones de Estudiantes"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                            children: [
                                                rating,
                                                " calificaci\xf3n promedio basada en ",
                                                rating_count,
                                                " calificaciones"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "row g-0 align-items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "col-sm-4",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "rating-box",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "rating-number",
                                                                children: rating
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "rating",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                        className: "icon-23"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                        className: "icon-23"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                        className: "icon-23"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                        className: "icon-23"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                        className: "icon-23"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                children: [
                                                                    "(",
                                                                    rating_count,
                                                                    " Rese\xf1as)"
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "col-lg-8",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "review-wrapper",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx(single_progressbar/* default */.Z, {
                                                                value: "100",
                                                                rating_value: rating_count
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx(single_progressbar/* default */.Z, {
                                                                value: "0",
                                                                rating_value: "0"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx(single_progressbar/* default */.Z, {
                                                                value: "0",
                                                                rating_value: "0"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx(single_progressbar/* default */.Z, {
                                                                value: "0",
                                                                rating_value: "0"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx(single_progressbar/* default */.Z, {
                                                                value: "0",
                                                                rating_value: "0"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "comment-area",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                    className: "heading-title",
                                                    children: "Rese\xf1as"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "comment-list-wrapper",
                                                    children: reviews?.map((review, i)=>/*#__PURE__*/ jsx_runtime.jsx(single_comment/* default */.Z, {
                                                            review: review
                                                        }, i))
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-lg-4",
                        children: /*#__PURE__*/ jsx_runtime.jsx(course_details_sidebar/* default */.Z, {
                            course: course,
                            details_2: true
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const course_details_two = (CourseDetailsTwo);


/***/ }),

/***/ 5185:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8031);
/* harmony import */ var _breadcrumb_breadcrumb_5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(158);
/* harmony import */ var _course_details_two__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6220);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout__WEBPACK_IMPORTED_MODULE_2__, _breadcrumb_breadcrumb_5__WEBPACK_IMPORTED_MODULE_3__]);
([_layout__WEBPACK_IMPORTED_MODULE_2__, _breadcrumb_breadcrumb_5__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const index = ({ course })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const { id } = router.query;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "sticky-header",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            id: "main-wrapper",
            className: "main-wrapper",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout__WEBPACK_IMPORTED_MODULE_2__/* .Header */ .h4, {
                    no_top_bar: true
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_breadcrumb_breadcrumb_5__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    course: course,
                    subtitle: `Detalle del curso: ${id}`,
                    codigo: id
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_course_details_two__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    course: course,
                    codigo: id
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout__WEBPACK_IMPORTED_MODULE_2__/* .Footer */ .$_, {
                    style_2: "footer-dark bg-image footer-style-2"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;