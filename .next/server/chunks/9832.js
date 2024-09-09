"use strict";
exports.id = 9832;
exports.ids = [9832];
exports.modules = {

/***/ 9211:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ blog_details_area)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/blog/blog-sidebar.jsx
var blog_sidebar = __webpack_require__(1130);
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(2296);
// EXTERNAL MODULE: ./src/utils/validation-schema.js
var validation_schema = __webpack_require__(4293);
// EXTERNAL MODULE: ./src/components/forms/error-msg.jsx
var error_msg = __webpack_require__(6746);
;// CONCATENATED MODULE: ./src/components/forms/blog-comment-form.jsx





const BlogCommentForm = ()=>{
    const { handleChange, handleSubmit, handleBlur, errors, values, touched } = (0,external_formik_.useFormik)({
        initialValues: {
            name: "",
            email: "",
            msg: ""
        },
        validationSchema: validation_schema/* blogCommentSchema */.NA,
        onSubmit: (values, { resetForm })=>{
            toast.success(`${values.name} your comment added successfully`, {
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
                    className: "form-group col-lg-6",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                            value: values.email,
                            onChange: handleChange,
                            onBlur: handleBlur,
                            type: "email",
                            name: "email",
                            id: "contact-email",
                            placeholder: "Your Email"
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
                            placeholder: "Leave A Comment"
                        }),
                        touched.msg && /*#__PURE__*/ jsx_runtime.jsx(error_msg/* default */.Z, {
                            error: errors.msg
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "form-group",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "edu-form-check",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                type: "checkbox",
                                id: "save-info"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                htmlFor: "save-info",
                                children: "Save my name, email, and website in this browser for the next time I comment."
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "form-group col-12",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                        type: "submit",
                        className: "edu-btn submit-btn",
                        children: [
                            "Send Message ",
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
/* harmony default export */ const blog_comment_form = (BlogCommentForm);

;// CONCATENATED MODULE: ./src/components/blog-details/comment-area.jsx


const CommentArea = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "comment-area",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                className: "heading-title",
                children: "Comments"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "comment-list-wrapper",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "comment",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "thumbnail",
                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    src: "/assets/images/blog/comment-01.jpg",
                                    alt: "Comment Images"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "comment-content",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                        className: "title",
                                        children: "Haley Bennet"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: "date",
                                        children: "Oct 10, 2021"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "reply-btn-wrapper",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            className: "reply-btn",
                                            href: "#",
                                            children: "Reply"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "comment comment-reply",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "thumbnail",
                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    src: "/assets/images/blog/comment-02.jpg",
                                    alt: "Comment Images"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "comment-content",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                        className: "title",
                                        children: "Simon Baker"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: "date",
                                        children: "Oct 10, 2021"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "reply-btn-wrapper",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            className: "reply-btn",
                                            href: "#",
                                            children: "Reply"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "comment",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "thumbnail",
                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    src: "/assets/images/blog/comment-03.jpg",
                                    alt: "Comment Images"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "comment-content",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                        className: "title",
                                        children: "Richard Gere"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: "date",
                                        children: "Oct 10, 2021"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "reply-btn-wrapper",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            className: "reply-btn",
                                            href: "#",
                                            children: "Reply"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const comment_area = (CommentArea);

;// CONCATENATED MODULE: ./src/components/blog-details/blog-details-area.jsx





const BlogDetailsArea = ({ blog })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "blog-details-area section-gap-equal",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "row row--30",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "col-lg-8",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "blog-details-content",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "entry-content",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "category",
                                                children: "Developer"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                className: "title",
                                                children: blog?.title
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                className: "blog-meta",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "icon-27"
                                                            }),
                                                            blog?.date
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "icon-28"
                                                            }),
                                                            "Com ",
                                                            blog?.comment
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "thumbnail",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    src: "/assets/images/blog/blog-large-1.jpg",
                                                    alt: "Blog Image"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores. "
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        children: "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam."
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: "Aute irure dolor in reprehenderit"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: "Occaecat cupidatat non proident sunt in culpa"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: "Pariatur enim ipsam."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("blockquote", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                children: "Lorem ipsum dolor amet con sectur elitadicing elit sed do usmod tempor uincididunt enim minim veniam nostrud."
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                className: "author",
                                                children: "Simon Baker"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                        className: "title",
                                        children: "The Complete Camtasia"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        children: "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam. "
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "features-image",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "row g-md-5",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "col-6",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "thumb",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: "/assets/images/blog/features-1.jpg",
                                                            alt: "Features Images"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "col-6",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "thumb",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: "/assets/images/blog/features-2.jpg",
                                                            alt: "Features Images"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        children: "Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores. "
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        children: "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam."
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                        className: "title",
                                        children: "Intrinsic Motivation"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        children: "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam. "
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: "Aute irure dolor in reprehenderit"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: "Occaecat cupidatat non proident sunt in culpa"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: "Pariatur enim ipsam."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "blog-share-area",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "row align-items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "col-md-7",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "blog-tags",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                                className: "title",
                                                                children: "Tags:"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "tag-list",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                        href: "#",
                                                                        children: "Language"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                        href: "#",
                                                                        children: "eLearn"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                        href: "#",
                                                                        children: "Tips"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "col-md-5",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "blog-share",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                                className: "title",
                                                                children: "Share on:"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                                className: "social-share icon-transparent",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                            href: "#",
                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                className: "icon-facebook"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                            href: "#",
                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                className: "icon-twitter"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                            href: "#",
                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                className: "icon-instagram"
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "blog-author",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "thumbnail",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            src: "/assets/images/blog/author-01.jpg",
                                            alt: "Author Images"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "author-content",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                className: "title",
                                                children: "Edward Norton"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                children: "Enim ad minim veniam quis nostrud exercitation lamco laboris nisi ex commodo consequat aute irure."
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                className: "social-share icon-transparent",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "icon-facebook"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "icon-twitter"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "icon-instagram"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "blog-pagination",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "row g-5",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "col-lg-6",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "blog-pagination-list prev-post",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                    href: "#",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                            className: "icon-west"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            children: "Instructional Design and Adult Learners"
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "col-lg-6",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "blog-pagination-list next-post",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                    href: "#",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            children: "Qualification for Students Satisfaction Rate"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                            className: "icon-east"
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(comment_area, {}),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "comment-form-area",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                        className: "heading-title",
                                        children: "Leave Your Comment Here"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(blog_comment_form, {})
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-lg-4",
                        children: /*#__PURE__*/ jsx_runtime.jsx(blog_sidebar/* default */.Z, {})
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const blog_details_area = (BlogDetailsArea);


/***/ }),

/***/ 9832:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8031);
/* harmony import */ var _breadcrumb_breadcrumb_3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2203);
/* harmony import */ var _homes_home_ad_banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7028);
/* harmony import */ var _blog_details_area__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9211);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout__WEBPACK_IMPORTED_MODULE_2__, _breadcrumb_breadcrumb_3__WEBPACK_IMPORTED_MODULE_3__, _homes_home_ad_banner__WEBPACK_IMPORTED_MODULE_4__]);
([_layout__WEBPACK_IMPORTED_MODULE_2__, _breadcrumb_breadcrumb_3__WEBPACK_IMPORTED_MODULE_3__, _homes_home_ad_banner__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const index = ({ blog })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "sticky-header",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            id: "main-wrapper",
            className: "main-wrapper",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout__WEBPACK_IMPORTED_MODULE_2__/* .Header */ .h4, {
                    no_top_bar: true
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_breadcrumb_breadcrumb_3__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    title: "Blog Details",
                    subtitle: "Blog Details"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blog_details_area__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    blog: blog
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_homes_home_ad_banner__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
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