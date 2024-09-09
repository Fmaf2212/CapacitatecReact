"use strict";
exports.id = 3651;
exports.ids = [3651];
exports.modules = {

/***/ 4277:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ course_details_area)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/common/sidebar/course-details-sidebar.jsx
var course_details_sidebar = __webpack_require__(5382);
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(2296);
// EXTERNAL MODULE: ./src/utils/validation-schema.js
var validation_schema = __webpack_require__(4293);
// EXTERNAL MODULE: ./src/components/forms/error-msg.jsx
var error_msg = __webpack_require__(6746);
;// CONCATENATED MODULE: ./src/components/forms/comment-form-course.jsx





const CommentFormCourse = ()=>{
    const { handleChange, handleSubmit, handleBlur, errors, values, touched } = (0,external_formik_.useFormik)({
        initialValues: {
            title: "",
            name: "",
            email: "",
            msg: ""
        },
        validationSchema: validation_schema/* courseSchema */.Ih,
        onSubmit: (values, { resetForm })=>{
            toast.success(`${values.name} your review added successfully`, {
                position: "top-left"
            });
            resetForm();
        }
    });
    return /*#__PURE__*/ jsx_runtime.jsx("form", {
        className: "comment-form",
        onSubmit: handleSubmit,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "row g-5",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "form-group col-lg-6",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                            type: "text",
                            value: values.title,
                            onChange: handleChange,
                            onBlur: handleBlur,
                            name: "title",
                            id: "comm-title",
                            placeholder: "Review Title"
                        }),
                        touched.title && /*#__PURE__*/ jsx_runtime.jsx(error_msg/* default */.Z, {
                            error: errors.title
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "form-group col-lg-6",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                            value: values.name,
                            onChange: handleChange,
                            onBlur: handleBlur,
                            type: "text",
                            name: "name",
                            id: "contact-name",
                            placeholder: "Your Name"
                        }),
                        touched.name && /*#__PURE__*/ jsx_runtime.jsx(error_msg/* default */.Z, {
                            error: errors.name
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "form-group col-12",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                            value: values.email,
                            onChange: handleChange,
                            onBlur: handleBlur,
                            type: "email",
                            name: "email",
                            id: "contact-email",
                            placeholder: "Reviewer Email"
                        }),
                        touched.email && /*#__PURE__*/ jsx_runtime.jsx(error_msg/* default */.Z, {
                            error: errors.email
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "form-group col-12",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                            value: values.msg,
                            onChange: handleChange,
                            onBlur: handleBlur,
                            name: "msg",
                            id: "comm-message",
                            cols: "30",
                            rows: "5",
                            placeholder: "Review summary"
                        }),
                        touched.msg && /*#__PURE__*/ jsx_runtime.jsx(error_msg/* default */.Z, {
                            error: errors.msg
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "form-group col-12",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                        type: "submit",
                        className: "edu-btn submit-btn",
                        children: [
                            "Submit Review ",
                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                className: "icon-4"
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const comment_form_course = (CommentFormCourse);

// EXTERNAL MODULE: ./src/components/course-details/single-comment.jsx
var single_comment = __webpack_require__(6447);
// EXTERNAL MODULE: ./src/components/course-details/single-progressbar.jsx
var single_progressbar = __webpack_require__(4304);
;// CONCATENATED MODULE: ./src/components/course-details/course-details-area.jsx






const CourseDetailsArea = ({ course })=>{
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
                            className: "course-details-content",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                    className: "nav nav-tabs",
                                    id: "myTab",
                                    role: "tablist",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            className: "nav-item",
                                            role: "presentation",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                className: "nav-link active",
                                                id: "overview-tab",
                                                "data-bs-toggle": "tab",
                                                "data-bs-target": "#overview",
                                                type: "button",
                                                role: "tab",
                                                "aria-controls": "overview",
                                                "aria-selected": "true",
                                                children: "Overview"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            className: "nav-item",
                                            role: "presentation",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                className: "nav-link",
                                                id: "carriculam-tab",
                                                "data-bs-toggle": "tab",
                                                "data-bs-target": "#carriculam",
                                                type: "button",
                                                role: "tab",
                                                "aria-controls": "carriculam",
                                                "aria-selected": "false",
                                                children: "Carriculam"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            className: "nav-item",
                                            role: "presentation",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                className: "nav-link",
                                                id: "instructor-tab",
                                                "data-bs-toggle": "tab",
                                                "data-bs-target": "#instructor",
                                                type: "button",
                                                role: "tab",
                                                "aria-controls": "instructor",
                                                "aria-selected": "false",
                                                children: "Instructor"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            className: "nav-item",
                                            role: "presentation",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                className: "nav-link",
                                                id: "review-tab",
                                                "data-bs-toggle": "tab",
                                                "data-bs-target": "#review",
                                                type: "button",
                                                role: "tab",
                                                "aria-controls": "review",
                                                "aria-selected": "false",
                                                children: "Reviews"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "tab-content",
                                    id: "myTabContent",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "tab-pane fade show active",
                                            id: "overview",
                                            role: "tabpanel",
                                            "aria-labelledby": "overview-tab",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "course-tab-content",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "course-overview",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                            className: "heading-title",
                                                            children: "Course Description"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            children: course_desc
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            className: "mb--60",
                                                            children: course_desc_2
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                            className: "title",
                                                            children: "What You’ll Learn?"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                            className: "mb--60",
                                                            children: learn_list?.map((l, i)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: l
                                                                }, i))
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            children: course_desc_3
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "tab-pane fade",
                                            id: "carriculam",
                                            role: "tabpanel",
                                            "aria-labelledby": "carriculam-tab",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "course-tab-content",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "course-curriculam",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                            className: "heading-title",
                                                            children: "Course Curriculum"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            children: curriculum_desc
                                                        }),
                                                        course_lessons.map((lesson, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "course-lesson",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                                        className: "title",
                                                                        children: lesson?.title
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                        children: lesson?.text
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                                        children: lesson?.lessons?.map((list, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
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
                                                                ]
                                                            }, i))
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "tab-pane fade",
                                            id: "instructor",
                                            role: "tabpanel",
                                            "aria-labelledby": "instructor-tab",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "course-tab-content",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "course-instructor",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "thumbnail",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                src: `/assets/images/team/team-02/${instructor_img}`,
                                                                alt: "team images"
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
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "tab-pane fade",
                                            id: "review",
                                            role: "tabpanel",
                                            "aria-labelledby": "review-tab",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "course-tab-content",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "course-review",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                            className: "heading-title",
                                                            children: "Course Rating"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                            children: [
                                                                rating,
                                                                " average rating based on ",
                                                                rating_count,
                                                                " rating"
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
                                                                                    " Review)"
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "col-sm-8",
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
                                                                    children: "Reviews"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "comment-list-wrapper",
                                                                    children: reviews?.map((review, i)=>/*#__PURE__*/ jsx_runtime.jsx(single_comment/* default */.Z, {
                                                                            review: review
                                                                        }, i))
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "comment-form-area",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                                    className: "heading-title",
                                                                    children: "Write a Review"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "rating-icon",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                                            className: "title",
                                                                            children: "Rating Here"
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
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx(comment_form_course, {})
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-lg-4",
                        children: /*#__PURE__*/ jsx_runtime.jsx(course_details_sidebar/* default */.Z, {
                            course: course
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const course_details_area = (CourseDetailsArea);


/***/ }),

/***/ 3651:
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
/* harmony import */ var _course_details_area__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4277);
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
                    subtitle: `Course Details: ${id}`,
                    codigo: id
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_course_details_area__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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