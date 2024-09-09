"use strict";
exports.id = 8031;
exports.ids = [8031];
exports.modules = {

/***/ 218:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const SwitchDarkMode2 = ({ className = "" })=>{
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(()=>{
        if (localStorage.theme === "dark") {
            toDark();
        } else {
            toLight();
        }
    }, []);
    const toDark = ()=>{
        setIsDarkMode(true);
        const root = document.querySelector("html");
        if (!root) return;
        !root.classList.contains("dark") && root.classList.add("dark");
        localStorage.theme = "dark";
    };
    const toLight = ()=>{
        setIsDarkMode(false);
        const root = document.querySelector("html");
        if (!root) return;
        root.classList.remove("dark");
        localStorage.theme = "light";
    };
    function _toogleDarkMode() {
        if (localStorage.theme === "light") {
            toDark();
        } else {
            toLight();
        }
    }
    return /*#__PURE__*/ _jsxs("div", {
        className: `inline-flex ${className}`,
        children: [
            /*#__PURE__*/ _jsx("span", {
                className: "sr-only",
                children: "Enable dark mode"
            }),
            /*#__PURE__*/ _jsxs(Switch, {
                checked: isDarkMode,
                onChange: _toogleDarkMode,
                className: `${isDarkMode ? "bg-teal-900" : "bg-teal-600"}
          relative inline-flex h-[22px] w-[42px] shrink-0 cursor-pointer rounded-full border-4 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`,
                children: [
                    /*#__PURE__*/ _jsx("span", {
                        className: "sr-only",
                        children: "Enable dark mode"
                    }),
                    /*#__PURE__*/ _jsx("span", {
                        "aria-hidden": "true",
                        className: `${isDarkMode ? "translate-x-5" : "translate-x-0"}
            pointer-events-none inline-block h-[14px] w-[14px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`
                    })
                ]
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (SwitchDarkMode2)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

const SearchPopup = ({ isSearchOpen, setIsSearchOpen })=>{
    const handleSubmit = (e)=>{
        e.preventDefault();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `edu-search-popup ${isSearchOpen ? "open" : ""}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "content-wrap",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "site-logo",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            className: "logo-light",
                            src: "/assets/images/logo/logo-dark.png",
                            alt: "logo"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            className: "logo-dark",
                            src: "/assets/images/logo/logo-white.png",
                            alt: "logo"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "close-button",
                    onClick: ()=>setIsSearchOpen(false),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "close-trigger",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "icon-73"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "inner",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        className: "search-form",
                        onSubmit: handleSubmit,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                className: "edublink-search-popup-field",
                                placeholder: "Buscar aqu\xed..."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "submit-button",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "icon-2"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchPopup);


/***/ }),

/***/ 3107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout_headers_menu_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5195);




const OffCanvas = ({ isOpen, setIsOpen })=>{
    const [navTitle, setNavTitle] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const openMobileMenu = (menu)=>{
        if (navTitle === menu) {
            setNavTitle("");
        } else {
            setNavTitle(menu);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `popup-mobile-menu ${isOpen ? "active" : ""}`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "inner",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "header-top",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "logo",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "/",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "logo-light",
                                                src: "/assets/images/logo/logo-dark.png",
                                                alt: "logo"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "logo-dark",
                                                src: "/assets/images/logo/logo-white.png",
                                                alt: "logo"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "close-menu",
                                    onClick: ()=>setIsOpen(false),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "close-button",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "icon-73"
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mm-menu",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                children: _layout_headers_menu_data__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.map((menu, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        className: !menu.submenus ? "" : navTitle === menu?.title ? "has-droupdown active" : "has-droupdown",
                                        children: [
                                            menu.submenus && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                className: menu.droupdown ? "activeDroupdown" : "",
                                                onClick: ()=>openMobileMenu(menu.title),
                                                children: [
                                                    menu.title,
                                                    " "
                                                ]
                                            }),
                                            !menu.mobile_pages_menu && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                className: navTitle === menu?.title ? "sub-menu active" : "sub-menu",
                                                children: menu?.submenus?.map((sub, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: `${sub.link}`,
                                                            children: sub.title
                                                        })
                                                    }, i))
                                            }),
                                            menu.mobile_pages_menu && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                className: navTitle === menu?.title ? "sub-menu active" : "sub-menu",
                                                children: menu?.mobile_pages_menu?.map((sub, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: `${sub.link}`,
                                                            children: sub.title
                                                        })
                                                    }, i))
                                            }),
                                            !menu.submenus && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: menu.link,
                                                children: menu.title
                                            })
                                        ]
                                    }, i))
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: ()=>setIsOpen(false),
                className: `body-overlay ${isOpen ? "apply" : ""}`
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OffCanvas);


/***/ }),

/***/ 4152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);


const useCartInfo = ()=>{
    const [quantity, setQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const [total, setTotal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const cartItems = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.cart.cartCourses);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const cart = cartItems.reduce((cartTotal, cartItem)=>{
            const { price, quantity } = cartItem;
            const itemTotal = price * quantity;
            cartTotal.total += itemTotal;
            cartTotal.quantity += quantity;
            return cartTotal;
        }, {
            total: 0,
            quantity: 0
        });
        setQuantity(cart.quantity);
        setTotal(cart.total);
    }, [
        cartItems
    ]);
    return {
        quantity,
        total
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCartInfo);


/***/ }),

/***/ 3913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useSticky = ()=>{
    const [sticky, setSticky] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const stickyHeader = ()=>{
        if (window.scrollY > 80) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        window.addEventListener("scroll", stickyHeader);
    }, []);
    return {
        sticky
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSticky);


/***/ }),

/***/ 417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

const social_share = [
    {
        link: "http://facebook.com",
        target: "_blank",
        icon: "icon-facebook",
        color: "color-fb"
    },
    {
        link: "http://twitter.com",
        target: "_blank",
        icon: "icon-twitter",
        color: "color-twitter"
    },
    {
        link: "https://www.linkedin.com/",
        target: "_blank",
        icon: "icon-linkedin2",
        color: "color-linkd"
    },
    {
        link: "https://www.youtube.com/",
        target: "_blank",
        icon: "icon-youtube",
        color: "color-yt"
    },
    {
        link: "https://www.instagram.com/",
        target: "_blank",
        icon: "icon-instagram",
        color: "color-ig"
    }
];

const FooterSocial = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: social_share.map((social, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: social.link,
                    target: social.target ? social.target : "",
                    className: `${social.color}`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: social.icon
                    })
                })
            }, i))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterSocial);


/***/ }),

/***/ 1848:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var _contexts_mouse_move_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6083);
/* harmony import */ var _component_footer_social__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(417);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const footer_contents = {
    desc: "Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor incidid unt labore dolore.",
    add: "70-80 Upper St Norwich NR2",
    call: "+01 123 5641 231",
    email: "info@edublink.com",
    widgets: [
        {
            col: "3",
            class: "explore-widget",
            widget_title: "Online Platform",
            footer_links: [
                {
                    link: "about-1",
                    title: "About"
                },
                {
                    link: "course-style-1",
                    title: "Courses"
                },
                {
                    link: "team-1",
                    title: "Instructor"
                },
                {
                    link: "event-grid",
                    title: "Events"
                },
                {
                    link: "team-details",
                    title: "Instructor Profile"
                },
                {
                    link: "purchase-guide",
                    title: "Purchase Guide"
                }
            ]
        },
        {
            col: "2",
            class: "quick-link-widget",
            widget_title: "Links",
            footer_links: [
                {
                    link: "contact-us",
                    title: "Contact Us"
                },
                {
                    link: "gallery-grid",
                    title: "Gallery"
                },
                {
                    link: "blog-standard",
                    title: "News & Articles"
                },
                {
                    link: "faq",
                    title: "FAQ's"
                },
                {
                    link: "sign-in",
                    title: "Sign In/Registration"
                },
                {
                    link: "coming-soon",
                    title: "Coming Soon"
                }
            ]
        }
    ]
};
const { add, call, desc, email, widgets } = footer_contents;
const FooterTwo = ()=>{
    const { mouseDirection, mouseReverse } = (0,_contexts_mouse_move_context__WEBPACK_IMPORTED_MODULE_4__/* .useMouseMoveUI */ .sr)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        className: "edu-footer footer-light footer-for-kitchen footer-style-4",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "footer-top",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row g-5",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-3 col-md-6",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "edu-footer-widget",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                className: "widget-title",
                                                children: "Address"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "inner",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "description",
                                                        children: desc
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "widget-information",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                            className: "information-list",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: "Add:"
                                                                        }),
                                                                        add
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: "Call:"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            href: "tel:+011235641231",
                                                                            children: call
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: "Email:"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            href: "mailto:info@edublink.com",
                                                                            target: "_blank",
                                                                            rel: "noreferrer",
                                                                            children: email
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                widgets.map((w, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `col-lg-${w.col} col-sm-6`,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: `edu-footer-widget ${w.class}`,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                    className: "widget-title",
                                                    children: w.widget_title
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "inner",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                        className: "footer-link link-hover",
                                                        children: w.footer_links.map((l, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                    href: `/${l.link}`,
                                                                    children: l.title
                                                                })
                                                            }, i))
                                                    })
                                                })
                                            ]
                                        })
                                    }, i)),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-4 col-md-6",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "edu-footer-widget",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                className: "widget-title",
                                                children: "Contacts"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "inner",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "description",
                                                        children: "Enter your email address to register to our newsletter subscription"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "input-group footer-subscription-form",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                type: "email",
                                                                className: "form-control",
                                                                placeholder: "Your email"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                                className: "edu-btn btn-medium",
                                                                type: "button",
                                                                children: [
                                                                    "Subscribe ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "icon-4"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                        className: "social-share icon-transparent",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_footer_social__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: "shape-group",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.li, {
                                className: "shape-1 scene",
                                "data-sal-delay": "100",
                                "data-sal": "fade",
                                "data-sal-duration": "1000",
                                animate: {
                                    x: mouseDirection(30).x,
                                    y: mouseDirection(30).y
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/assets/images/others/shape-01-01.png",
                                    alt: "shape"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.li, {
                                className: "shape-2 scene",
                                "data-sal-delay": "100",
                                "data-sal": "fade",
                                "data-sal-duration": "1000",
                                animate: {
                                    x: mouseReverse(30).x,
                                    y: mouseReverse(30).y
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/assets/images/others/shape-02-01.png",
                                    alt: "shape"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "shape-3",
                                "data-sal-delay": "100",
                                "data-sal": "fade",
                                "data-sal-duration": "1000",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/assets/images/others/shape-03-01.png",
                                    alt: "shape"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.li, {
                                className: "shape-4 scene",
                                "data-sal-delay": "100",
                                "data-sal": "fade",
                                "data-sal-duration": "1000",
                                animate: {
                                    x: mouseDirection(30).x,
                                    y: mouseDirection(30).y
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/assets/images/others/shape-04-01.png",
                                    alt: "shape"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.li, {
                                className: "shape-5 scene",
                                "data-sal-delay": "100",
                                "data-sal": "fade",
                                "data-sal-duration": "1000",
                                animate: {
                                    x: mouseReverse(30).x,
                                    y: mouseReverse(30).y
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/assets/images/others/shape-05-01.png",
                                    alt: "shape"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "copyright-area",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-12",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "inner text-center",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        "Copyright ",
                                        new Date().getFullYear(),
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://1.envato.market/AoJezj",
                                            rel: "noreferrer",
                                            target: "_blank",
                                            children: "EduBlink"
                                        }),
                                        " Designed By ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://1.envato.market/YgGJbj",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: "DevsBlink"
                                        }),
                                        ". All Rights Reserved"
                                    ]
                                })
                            })
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterTwo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_footer_social__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(417);




const widgets = [
    {
        col: "3",
        class: "explore-widget",
        widget_title: "Online Platform",
        footer_links: [
            {
                link: "about-1",
                title: "About"
            },
            {
                link: "course-style-1",
                title: "Courses"
            },
            {
                link: "team-1",
                title: "Instructor"
            },
            {
                link: "event-grid",
                title: "Events"
            },
            {
                link: "team-details",
                title: "Instructor Profile"
            },
            {
                link: "purchase-guide",
                title: "Purchase Guide"
            }
        ]
    },
    {
        col: "2",
        class: "quick-link-widget",
        widget_title: "Links",
        footer_links: [
            {
                link: "contact-us",
                title: "Contact Us"
            },
            {
                link: "gallery-grid",
                title: "Gallery"
            },
            {
                link: "blog-standard",
                title: "News & Articles"
            },
            {
                link: "faq",
                title: "FAQ's"
            },
            {
                link: "sign-in",
                title: "Sign In/Registration"
            },
            {
                link: "coming-soon",
                title: "Coming Soon"
            }
        ]
    }
];
const FooterThree = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        className: "edu-footer footer-kindergarten footer-style-6",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "footer-top",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row g-5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-3 col-md-6 col-sm-12 col-12",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "edu-footer-widget",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "logo",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    className: "logo-dark",
                                                    src: "/assets/images/logo/logo-white.png",
                                                    alt: "Corporate Logo"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "description",
                                            children: "Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor incidid unt labore dolore magna aliqua enim."
                                        })
                                    ]
                                })
                            }),
                            widgets.map((w, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `col-lg-${w.col} col-sm-6`,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: `edu-footer-widget ${w.class}`,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                className: "widget-title",
                                                children: w.widget_title
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "inner",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                    className: "footer-link link-hover",
                                                    children: w.footer_links.map((l, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                href: `/${l.link}`,
                                                                children: l.title
                                                            })
                                                        }, i))
                                                })
                                            })
                                        ]
                                    })
                                }, i)),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-4 col-md-6 col-sm-6 col-12",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "edu-footer-widget",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                            className: "widget-title",
                                            children: "Contacts"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "inner",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "description",
                                                    children: "Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor dolore."
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "widget-information",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                        className: "information-list",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: "Add:"
                                                                    }),
                                                                    "70-80 Upper St Norwich NR2"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: "Call:"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        href: "tel:+011235641231",
                                                                        children: "+01 123 5641 231"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: "Email:"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        href: "mailto:info@edublink.com",
                                                                        target: "_blank",
                                                                        rel: "noreferrer",
                                                                        children: "info@edublink.com"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                    className: "social-share icon-transparent",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_footer_social__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "copyright-area bg-image",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-12",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "inner text-center",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        "Copyright ",
                                        new Date().toDateString(),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://1.envato.market/AoJezj",
                                            rel: "noreferrer",
                                            target: "_blank",
                                            children: "EduBlink"
                                        }),
                                        " Designed By ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://1.envato.market/YgGJbj",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: "DevsBlink"
                                        }),
                                        ". All Rights Reserved"
                                    ]
                                })
                            })
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterThree);


/***/ }),

/***/ 658:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var _contexts_mouse_move_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6083);
/* harmony import */ var _component_footer_social__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(417);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const footer_contents = {
    desc: "Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor incidid unt labore dolore.",
    add: "70-80 Upper St Norwich NR2",
    call: "+01 123 5641 231",
    email: "info@edublink.com",
    widgets: [
        {
            col: "3",
            class: "explore-widget",
            widget_title: "Online Platform",
            footer_links: [
                {
                    link: "about-1",
                    title: "About"
                },
                {
                    link: "course-style-1",
                    title: "Courses"
                },
                {
                    link: "team-1",
                    title: "Instructor"
                },
                {
                    link: "event-grid",
                    title: "Events"
                },
                {
                    link: "team-details",
                    title: "Instructor Profile"
                },
                {
                    link: "purchase-guide",
                    title: "Purchase Guide"
                }
            ]
        },
        {
            col: "2",
            class: "quick-link-widget",
            widget_title: "Links",
            footer_links: [
                {
                    link: "contact-us",
                    title: "Contact Us"
                },
                {
                    link: "gallery-grid",
                    title: "Gallery"
                },
                {
                    link: "blog-standard",
                    title: "News & Articles"
                },
                {
                    link: "faq",
                    title: "FAQ's"
                },
                {
                    link: "sign-in",
                    title: "Sign In/Registration"
                },
                {
                    link: "coming-soon",
                    title: "Coming Soon"
                }
            ]
        }
    ]
};
const { add, call, desc, email, widgets } = footer_contents;
const FooterTwo = ()=>{
    const { mouseDirection, mouseReverse } = (0,_contexts_mouse_move_context__WEBPACK_IMPORTED_MODULE_4__/* .useMouseMoveUI */ .sr)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        className: "edu-footer footer-light footer-for-yoga footer-style-5",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "footer-top",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row g-5",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-3 col-md-6",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "edu-footer-widget",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                className: "widget-title",
                                                children: "Address"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "inner",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "description",
                                                        children: desc
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "widget-information",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                            className: "information-list",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: "Add:"
                                                                        }),
                                                                        add
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: "Call:"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            href: "tel:+011235641231",
                                                                            children: call
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: "Email:"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            href: "mailto:info@edublink.com",
                                                                            target: "_blank",
                                                                            rel: "noreferrer",
                                                                            children: email
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                widgets.map((w, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `col-lg-${w.col} col-sm-6`,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: `edu-footer-widget ${w.class}`,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                    className: "widget-title",
                                                    children: w.widget_title
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "inner",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                        className: "footer-link link-hover",
                                                        children: w.footer_links.map((l, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                    href: `/${l.link}`,
                                                                    children: l.title
                                                                })
                                                            }, i))
                                                    })
                                                })
                                            ]
                                        })
                                    }, i)),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-4 col-md-6",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "edu-footer-widget",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                className: "widget-title",
                                                children: "Contacts"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "inner",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "description",
                                                        children: "Enter your email address to register to our newsletter subscription"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "input-group footer-subscription-form",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                type: "email",
                                                                className: "form-control",
                                                                placeholder: "Your email"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                                className: "edu-btn btn-medium",
                                                                type: "button",
                                                                children: [
                                                                    "Subscribe ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "icon-4"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                        className: "social-share icon-transparent",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_footer_social__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: "shape-group shape-group-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.li, {
                                className: "shape-1 scene",
                                animate: {
                                    x: mouseDirection(30).x,
                                    y: mouseDirection(30).y
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/assets/images/others/shape-06.png",
                                    alt: "shape"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.li, {
                                className: "shape-2 scene",
                                animate: {
                                    x: mouseReverse(30).x,
                                    y: mouseReverse(30).y
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/assets/images/others/shape-07.png",
                                    alt: "shape"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "shape-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/assets/images/about/shape-10.png",
                                    alt: "shape"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.li, {
                                className: "shape-4 scene",
                                animate: {
                                    x: mouseReverse(30).x,
                                    y: mouseReverse(30).y
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/assets/images/others/shape-08.png",
                                    alt: "shape"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.li, {
                                className: "shape-5 scene",
                                animate: {
                                    x: mouseDirection(30).x,
                                    y: mouseDirection(30).y
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/assets/images/others/shape-09.png",
                                    alt: "shape"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "copyright-area",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-12",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "inner text-center",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        "Copyright ",
                                        new Date().getFullYear(),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://1.envato.market/AoJezj",
                                            rel: "noreferrer",
                                            target: "_blank",
                                            children: "EduBlink"
                                        }),
                                        " Designed By ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://1.envato.market/YgGJbj",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: "DevsBlink"
                                        }),
                                        ". All Rights Reserved"
                                    ]
                                })
                            })
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterTwo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_footer_social__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(417);



const footer_contents = {
    logoLight: "/assets/images/logo/logo-dark.png",
    logoDark: "/assets/images/logo/logo-white.png",
    desc: "Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor incidid unt labore dolore.",
    add: "70-80 Upper St Norwich NR2",
    call: "+01 123 5641 231",
    email: "info@edublink.com",
    widgets: [
        {
            col: "3",
            class: "explore-widget",
            widget_title: "Online Platform",
            footer_links: [
                {
                    link: "about-1",
                    title: "About"
                },
                {
                    link: "course-style-1",
                    title: "Courses"
                },
                {
                    link: "team-1",
                    title: "Instructor"
                },
                {
                    link: "event-grid",
                    title: "Events"
                },
                {
                    link: "team-details",
                    title: "Instructor Profile"
                },
                {
                    link: "purchase-guide",
                    title: "Purchase Guide"
                }
            ]
        },
        {
            col: "2",
            class: "quick-link-widget",
            widget_title: "Links",
            footer_links: [
                {
                    link: "contact-us",
                    title: "Contact Us"
                },
                {
                    link: "gallery-grid",
                    title: "Gallery"
                },
                {
                    link: "blog-standard",
                    title: "News & Articles"
                },
                {
                    link: "faq",
                    title: "FAQ's"
                },
                {
                    link: "sign-in",
                    title: "Sign In/Registration"
                },
                {
                    link: "coming-soon",
                    title: "Coming Soon"
                }
            ]
        }
    ]
};
const { logoDark, logoLight, desc, add, call, email, widgets } = footer_contents;
const Footer = ({ style_2, dark_bg, home_4 })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        className: `edu-footer ${style_2 ? style_2 : dark_bg ? "footer-dark bg-image footer-style-3" : "footer-lighten bg-image footer-style-1"}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `footer-top ${style_2 ? "footer-top-2" : ""}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row g-5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-3 col-md-6",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "edu-footer-widget",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "logo",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                    href: "/",
                                                    children: !dark_bg && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            !style_2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                className: "logo-light",
                                                                src: logoLight,
                                                                alt: "Corporate Logo"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                className: "logo-dark",
                                                                src: logoDark,
                                                                alt: "Corporate Logo"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                    href: "/",
                                                    children: dark_bg && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "logo-light",
                                                        src: home_4 ? "/assets/images/logo/logo-white.png" : "/assets/images/logo/logo-light-2.png",
                                                        alt: "Corporate Logo"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "description",
                                            children: desc
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "widget-information",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                className: "information-list",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "Add:"
                                                            }),
                                                            add
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "Call:"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "tel:+011235641231",
                                                                children: call
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "Email:"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "mailto:info@edublink.com",
                                                                rel: "noreferrer",
                                                                target: "_blank",
                                                                children: email
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }),
                            widgets.map((w, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `col-lg-${w.col} col-sm-6`,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: `edu-footer-widget ${w.class}`,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                className: "widget-title",
                                                children: w.widget_title
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "inner",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                    className: "footer-link link-hover",
                                                    children: w.footer_links.map((l, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                href: `/${l.link}`,
                                                                children: l.title
                                                            })
                                                        }, i))
                                                })
                                            })
                                        ]
                                    })
                                }, i)),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-4 col-md-6",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "edu-footer-widget",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                            className: "widget-title",
                                            children: "Contacts"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "inner",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "description",
                                                    children: "Enter your email address to register to our newsletter subscription"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "input-group footer-subscription-form",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "email",
                                                            className: "form-control",
                                                            placeholder: "Your email"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                            className: `edu-btn ${dark_bg && !home_4 ? "btn-secondary" : ""} btn-medium`,
                                                            type: "button",
                                                            children: [
                                                                "Subscribe ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "icon-4"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                    className: "social-share icon-transparent",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_footer_social__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "copyright-area",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-12",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "inner text-center",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        "Copyright ",
                                        new Date().getFullYear(),
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://1.envato.market/AoJezj",
                                            rel: "noreferrer",
                                            target: "_blank",
                                            children: "EduBlink"
                                        }),
                                        " Designed By ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://1.envato.market/YgGJbj",
                                            rel: "noreferrer",
                                            target: "_blank",
                                            children: "DevsBlink"
                                        }),
                                        ". All Rights Reserved"
                                    ]
                                })
                            })
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 3632:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_common_SwitchDarkMode2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(218);
/* harmony import */ var _menu_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5195);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__, _components_common_SwitchDarkMode2__WEBPACK_IMPORTED_MODULE_4__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__, _components_common_SwitchDarkMode2__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




// import Avatar from "./Avatar";


// import { useCounterStore } from "store/auth";
const AvatarDropdown = ()=>{
    //   const handleLogout = useCounterStore((state) => state.handleLogout);
    //   const isLoggedIn = useCounterStore((state) => state.isLoggedIn);
    //   const userDataForAvatarDropdown = useCounterStore((state) => state.userDataForAvatarDropdown);
    return /*#__PURE__*/ _jsx("div", {
        className: "AvatarDropdown ",
        children: /*#__PURE__*/ _jsx(Popover, {
            className: "relative",
            children: ({ close })=>/*#__PURE__*/ _jsxs(_Fragment, {
                    children: [
                        /*#__PURE__*/ _jsxs(PopoverButton, {
                            className: `w-10 h-10 sm:w-12 sm:h-12 rounded-full focus:outline-none flex items-center justify-center`,
                            children: [
                                /*#__PURE__*/ _jsx("i", {
                                    className: "icon-25"
                                }),
                                menu_data.map((menu, i)=>/*#__PURE__*/ _jsxs("li", {
                                        className: "has-droupdown",
                                        children: [
                                            /*#__PURE__*/ _jsx("a", {
                                                href: "#",
                                                children: menu.title
                                            }),
                                            !menu.mega_menu && /*#__PURE__*/ _jsx("ul", {
                                                className: "submenu",
                                                children: menu.submenus.map((nav, i)=>/*#__PURE__*/ _jsx("li", {
                                                        children: /*#__PURE__*/ _jsxs(Link, {
                                                            href: `${nav.link}`,
                                                            children: [
                                                                nav.title,
                                                                nav?.hot && /*#__PURE__*/ _jsx("span", {
                                                                    className: "badge-1",
                                                                    children: "hot"
                                                                }),
                                                                nav?.new && /*#__PURE__*/ _jsx("span", {
                                                                    className: "badge",
                                                                    children: "new"
                                                                })
                                                            ]
                                                        })
                                                    }, i))
                                            }),
                                            menu.mega_menu && /*#__PURE__*/ _jsx("ul", {
                                                className: "mega-menu",
                                                children: menu.submenus.map((nav, i)=>/*#__PURE__*/ _jsxs("li", {
                                                        children: [
                                                            /*#__PURE__*/ _jsx("h6", {
                                                                className: "menu-title",
                                                                children: nav.title
                                                            }),
                                                            /*#__PURE__*/ _jsx("ul", {
                                                                className: "submenu mega-sub-menu-01",
                                                                children: nav.mega_submenu.map((m, i)=>/*#__PURE__*/ _jsx("li", {
                                                                        children: /*#__PURE__*/ _jsx(Link, {
                                                                            href: `${m.link}`,
                                                                            children: m.title
                                                                        })
                                                                    }, i))
                                                            })
                                                        ]
                                                    }, i))
                                            })
                                        ]
                                    }, i))
                            ]
                        }),
                        /*#__PURE__*/ _jsx(Transition, {
                            as: Fragment,
                            enter: "transition ease-out duration-200",
                            enterFrom: "opacity-0 translate-y-1",
                            enterTo: "opacity-100 translate-y-0",
                            leave: "transition ease-in duration-150",
                            leaveFrom: "opacity-100 translate-y-0",
                            leaveTo: "opacity-0 translate-y-1",
                            children: /*#__PURE__*/ _jsx(PopoverPanel, {
                                className: "absolute z-10 w-screen max-w-[260px] px-4 mt-3.5 -right-10 sm:right-0 sm:px-0",
                                children: /*#__PURE__*/ _jsx("div", {
                                    className: "overflow-hidden rounded-3xl shadow-lg ring-1 ring-black ring-opacity-5",
                                    children: /*#__PURE__*/ _jsxs("div", {
                                        className: "relative grid grid-cols-1 gap-6 bg-white dark:bg-neutral-800 py-7 px-6",
                                        children: [
                                            /*#__PURE__*/ _jsxs(_Fragment, {
                                                children: [
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "flex items-center space-x-3",
                                                        children: /*#__PURE__*/ _jsx("div", {
                                                            className: "flex-grow"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "w-full border-b border-neutral-200 dark:border-neutral-700"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxs(_Fragment, {
                                                children: [
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "w-full flex justify-center",
                                                        children: /*#__PURE__*/ _jsx("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            version: "1.0",
                                                            width: "48px",
                                                            height: "48px",
                                                            viewBox: "0 0 368.000000 368.000000",
                                                            preserveAspectRatio: "xMidYMid meet",
                                                            children: /*#__PURE__*/ _jsxs("g", {
                                                                transform: "translate(0.000000,368.000000) scale(0.100000,-0.100000)",
                                                                fill: "#0d9488",
                                                                stroke: "none",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("path", {
                                                                        d: "M1694 3669 c-895 -65 -1619 -796 -1683 -1701 -72 -1009 691 -1886 1702 -1957 1007 -72 1885 692 1956 1701 46 645 -252 1265 -789 1640 -183 128 -456 243 -679 288 -87 17 -350 43 -386 38 -5 0 -60 -4 -121 -9z m324 -120 c577 -63 1084 -410 1346 -919 220 -429 255 -905 99 -1353 -31 -92 -113 -268 -151 -325 l-15 -23 -64 70 c-227 249 -574 453 -923 541 -279 70 -636 69 -923 -4 -360 -92 -711 -307 -951 -584 -45 -53 -40 -58 -126 110 -253 491 -253 1058 1 1558 321 632 1008 1006 1707 929z"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("path", {
                                                                        d: "M1684 3121 c-295 -80 -489 -346 -471 -646 10 -154 62 -276 169 -391 77 -82 152 -131 258 -168 76 -27 98 -30 200 -30 102 0 124 3 200 30 106 37 181 86 258 168 70 75 112 145 144 241 32 98 33 269 1 370 -61 193 -221 355 -413 416 -95 31 -253 35 -346 10z"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "w-full border-b border-neutral-200 dark:border-neutral-700"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxs(Link, {
                                                href: "/editProfile",
                                                className: "flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50",
                                                onClick: ()=>close(),
                                                children: [
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300",
                                                        children: /*#__PURE__*/ _jsxs("svg", {
                                                            width: "24",
                                                            height: "24",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("path", {
                                                                    d: "M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.5",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round"
                                                                }),
                                                                /*#__PURE__*/ _jsx("path", {
                                                                    d: "M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.5",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "ml-4",
                                                        children: /*#__PURE__*/ _jsx("p", {
                                                            className: "text-sm font-medium ",
                                                            children: "Mi perfil"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "flex items-center justify-between p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50",
                                                children: [
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("div", {
                                                                className: "flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300",
                                                                children: /*#__PURE__*/ _jsxs("svg", {
                                                                    width: "24",
                                                                    height: "24",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("path", {
                                                                            d: "M12.0001 7.88989L10.9301 9.74989C10.6901 10.1599 10.8901 10.4999 11.3601 10.4999H12.6301C13.1101 10.4999 13.3001 10.8399 13.0601 11.2499L12.0001 13.1099",
                                                                            stroke: "currentColor",
                                                                            strokeWidth: "1.5",
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("path", {
                                                                            d: "M8.30011 18.0399V16.8799C6.00011 15.4899 4.11011 12.7799 4.11011 9.89993C4.11011 4.94993 8.66011 1.06993 13.8001 2.18993C16.0601 2.68993 18.0401 4.18993 19.0701 6.25993C21.1601 10.4599 18.9601 14.9199 15.7301 16.8699V18.0299C15.7301 18.3199 15.8401 18.9899 14.7701 18.9899H9.26011C8.16011 18.9999 8.30011 18.5699 8.30011 18.0399Z",
                                                                            stroke: "currentColor",
                                                                            strokeWidth: "1.5",
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round"
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("path", {
                                                                            d: "M8.5 22C10.79 21.35 13.21 21.35 15.5 22",
                                                                            stroke: "currentColor",
                                                                            strokeWidth: "1.5",
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round"
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ _jsx("div", {
                                                                className: "ml-4",
                                                                children: /*#__PURE__*/ _jsx("p", {
                                                                    className: "text-sm font-medium ",
                                                                    children: "Tema Oscuro"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ _jsx(SwitchDarkMode2, {})
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "w-full border-b border-neutral-200 dark:border-neutral-700"
                                            }),
                                            /*#__PURE__*/ _jsxs("button", {
                                                className: "flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50",
                                                children: [
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300",
                                                        children: /*#__PURE__*/ _jsxs("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            width: "24px",
                                                            height: "24px",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("path", {
                                                                    d: "M12.9999 2C10.2385 2 7.99991 4.23858 7.99991 7C7.99991 7.55228 8.44762 8 8.99991 8C9.55219 8 9.99991 7.55228 9.99991 7C9.99991 5.34315 11.3431 4 12.9999 4H16.9999C18.6568 4 19.9999 5.34315 19.9999 7V17C19.9999 18.6569 18.6568 20 16.9999 20H12.9999C11.3431 20 9.99991 18.6569 9.99991 17C9.99991 16.4477 9.55219 16 8.99991 16C8.44762 16 7.99991 16.4477 7.99991 17C7.99991 19.7614 10.2385 22 12.9999 22H16.9999C19.7613 22 21.9999 19.7614 21.9999 17V7C21.9999 4.23858 19.7613 2 16.9999 2H12.9999Z",
                                                                    fill: "currentColor"
                                                                }),
                                                                /*#__PURE__*/ _jsx("path", {
                                                                    d: "M13.9999 11C14.5522 11 14.9999 11.4477 14.9999 12C14.9999 12.5523 14.5522 13 13.9999 13V11Z",
                                                                    fill: "currentColor"
                                                                }),
                                                                /*#__PURE__*/ _jsx("path", {
                                                                    d: "M5.71783 11C5.80685 10.8902 5.89214 10.7837 5.97282 10.682C6.21831 10.3723 6.42615 10.1004 6.57291 9.90549C6.64636 9.80795 6.70468 9.72946 6.74495 9.67492L6.79152 9.61162L6.804 9.59454L6.80842 9.58848C6.80846 9.58842 6.80892 9.58778 5.99991 9L6.80842 9.58848C7.13304 9.14167 7.0345 8.51561 6.58769 8.19098C6.14091 7.86637 5.51558 7.9654 5.19094 8.41215L5.18812 8.41602L5.17788 8.43002L5.13612 8.48679C5.09918 8.53682 5.04456 8.61033 4.97516 8.7025C4.83623 8.88702 4.63874 9.14542 4.40567 9.43937C3.93443 10.0337 3.33759 10.7481 2.7928 11.2929L2.08569 12L2.7928 12.7071C3.33759 13.2519 3.93443 13.9663 4.40567 14.5606C4.63874 14.8546 4.83623 15.113 4.97516 15.2975C5.04456 15.3897 5.09918 15.4632 5.13612 15.5132L5.17788 15.57L5.18812 15.584L5.19045 15.5872C5.51509 16.0339 6.14091 16.1336 6.58769 15.809C7.0345 15.4844 7.13355 14.859 6.80892 14.4122L5.99991 15C6.80892 14.4122 6.80897 14.4123 6.80892 14.4122L6.804 14.4055L6.79152 14.3884L6.74495 14.3251C6.70468 14.2705 6.64636 14.1921 6.57291 14.0945C6.42615 13.8996 6.21831 13.6277 5.97282 13.318C5.89214 13.2163 5.80685 13.1098 5.71783 13H13.9999V11H5.71783Z",
                                                                    fill: "currentColor"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("span", {
                                                        className: "ml-4 text-sm font-medium",
                                                        children: "Cerrar Sesi\xf3n"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxs(Link, {
                                                href: "/login",
                                                className: "flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50",
                                                onClick: ()=>close(),
                                                children: [
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300",
                                                        children: /*#__PURE__*/ _jsx("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            width: "24px",
                                                            height: "24px",
                                                            viewBox: "0 0 24 24",
                                                            fill: "currentColor",
                                                            children: /*#__PURE__*/ _jsx("path", {
                                                                fillRule: "evenodd",
                                                                clipRule: "evenodd",
                                                                d: "M2 6.5C2 4.01472 4.01472 2 6.5 2H12C14.2091 2 16 3.79086 16 6V7C16 7.55228 15.5523 8 15 8C14.4477 8 14 7.55228 14 7V6C14 4.89543 13.1046 4 12 4H6.5C5.11929 4 4 5.11929 4 6.5V17.5C4 18.8807 5.11929 20 6.5 20H12C13.1046 20 14 19.1046 14 18V17C14 16.4477 14.4477 16 15 16C15.5523 16 16 16.4477 16 17V18C16 20.2091 14.2091 22 12 22H6.5C4.01472 22 2 19.9853 2 17.5V6.5ZM18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289L22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071C17.9024 15.3166 17.9024 14.6834 18.2929 14.2929L19.5858 13L11 13C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11L19.5858 11L18.2929 9.70711C17.9024 9.31658 17.9024 8.68342 18.2929 8.29289Z",
                                                                fill: "currentColor"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "ml-4",
                                                        children: /*#__PURE__*/ _jsx("p", {
                                                            className: "text-sm font-medium ",
                                                            children: "Login"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    ]
                })
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (AvatarDropdown)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7522:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_use_cart_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4152);
/* harmony import */ var _redux_features_cart_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6709);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_redux_features_cart_slice__WEBPACK_IMPORTED_MODULE_4__]);
_redux_features_cart_slice__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Cart = ()=>{
    const cartItems = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.cart.cartCourses);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    const { total } = (0,_hooks_use_cart_info__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "edublink-header-mini-cart",
        children: [
            cartItems.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "wrapper empty-cart-wrapper",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                    className: "empty-cart",
                    children: "Your cart is empty"
                })
            }),
            cartItems.length >= 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "wrapper",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: `items ${cartItems.length > 4 ? "cart-height" : ""}`,
                        children: cartItems.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: "each-item",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "thumb",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: `/course-details/${item.id}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: item.img,
                                                alt: "course-thumb"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "content",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                className: "title",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: `/course-details/${item.id}`,
                                                    children: item.title
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "price-and-quantity",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "quantity",
                                                        children: item.quantity
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "quantity-symbol",
                                                        children: "\xd7"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        className: "price",
                                                        children: [
                                                            "$ ",
                                                            item.price
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "cart-item-remove",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: ()=>dispatch((0,_redux_features_cart_slice__WEBPACK_IMPORTED_MODULE_4__/* .remove_cart_course */ .rC)(item)),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "icon-73"
                                            })
                                        })
                                    })
                                ]
                            }, index))
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "total-price-wrapper",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "total-text",
                                children: "Subtotal:"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "total-amount",
                                children: [
                                    "$",
                                    parseFloat(total.toFixed(3))
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "cart-checkout-buttons",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/cart",
                                className: "edu-btn btn-small cart-btn",
                                children: "View Cart"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/checkout",
                                className: "edu-btn btn-small btn-secondary checkout-btn",
                                children: "Checkout"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6640:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const HeaderTopLeft = ()=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "header-notify",
        children: [
            "First 20 students get 50% discount. ",
            /*#__PURE__*/ _jsx("a", {
                href: "#",
                children: "Hurry up!"
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (HeaderTopLeft)));


/***/ }),

/***/ 776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const social_share = [
    {
        link: "http://facebook.com",
        target: "_blank",
        icon: "icon-facebook"
    },
    {
        link: "http://twitter.com",
        target: "_blank",
        icon: "icon-twitter"
    },
    {
        link: "https://www.linkedin.com/",
        target: "_blank",
        icon: "icon-linkedin2"
    },
    {
        link: "https://www.instagram.com/",
        target: "_blank",
        icon: "icon-instagram"
    }
];
const HeaderTopRight = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
        className: "header-info",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/sign-in",
                    children: "Login"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/sign-in",
                    children: "Register"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    href: "tel:+011235641231",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "icon-phone"
                        }),
                        "Call: 123 4561 5523"
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    href: "mailto:info@edublink.com",
                    rel: "noreferrer",
                    target: "_blank",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "icon-envelope"
                        }),
                        "Email: info@edublink.com"
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "social-icon",
                children: social_share.map((social, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: social.link,
                        target: social.target ? social.target : "",
                        className: `${social.color}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: social.icon
                        })
                    }, i))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderTopRight);


/***/ }),

/***/ 9239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _menu_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5195);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);




const MainMenu = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        className: "mainmenu",
        children: _menu_data__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.map((menu, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                className: menu.droupdown ? "has-droupdown" : "",
                children: [
                    menu.title === "Inicio" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                        href: `${menu.link}`,
                        children: menu.title
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: menu.link,
                        children: menu.title
                    }),
                    !menu.mega_menu && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: "submenu",
                        children: menu.submenus.map((nav, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: `${nav.link}`,
                                    children: [
                                        nav.title,
                                        nav?.hot && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "badge-1",
                                            children: "hot"
                                        }),
                                        nav?.new && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "badge",
                                            children: "new"
                                        })
                                    ]
                                })
                            }, i))
                    }),
                    menu.mega_menu && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: "mega-menu",
                        children: menu.submenus.map((nav, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        className: "menu-title",
                                        children: nav.title
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                        className: "submenu mega-sub-menu-01",
                                        children: nav.mega_submenu.map((m, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    href: `${m.link}`,
                                                    children: m.title
                                                })
                                            }, i))
                                    })
                                ]
                            }, i))
                    })
                ]
            }, i))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainMenu);


/***/ }),

/***/ 5023:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_common_popup_modal_search_popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3489);
/* harmony import */ var _components_common_sidebar_off_canvas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3107);
/* harmony import */ var _hooks_use_cart_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4152);
/* harmony import */ var _hooks_use_sticky__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3913);
/* harmony import */ var _redux_features_wishlist_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3961);
/* harmony import */ var _component_main_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9239);
/* harmony import */ var _component_cart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7522);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_redux_features_wishlist_slice__WEBPACK_IMPORTED_MODULE_8__, _component_cart__WEBPACK_IMPORTED_MODULE_10__]);
([_redux_features_wishlist_slice__WEBPACK_IMPORTED_MODULE_8__, _component_cart__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const HeaderTwo = ({ style_3, no_topBar = false })=>{
    const { sticky } = (0,_hooks_use_sticky__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const { quantity } = (0,_hooks_use_cart_info__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const [isSearchOpen, setIsSearchOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const wishlists = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_redux_features_wishlist_slice__WEBPACK_IMPORTED_MODULE_8__/* .wishlistItems */ .iC);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                className: `edu-header header-style-${style_3 ? "3" : "2"} ${no_topBar ? "no-topbar" : ""}`,
                children: [
                    !no_topBar && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "header-top-bar",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "header-top",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "header-top-left",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            className: "header-info",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                        href: "tel:+011235641231",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "icon-phone"
                                                            }),
                                                            "Call: 123 4561 5523"
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                        href: "mailto:info@edublink.com",
                                                        rel: "noreferrer",
                                                        target: "_blank",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "icon-envelope"
                                                            }),
                                                            "Email: info@edublink.com"
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "header-top-right",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            className: "header-info",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                        href: "/sign-in",
                                                        children: "Login"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                        href: "/sign-in",
                                                        children: "Register"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "header-btn",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                        href: "#",
                                                        className: `edu-btn ${style_3 ? "" : "btn-secondary"} btn-medium`,
                                                        children: [
                                                            "Apply Now ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "icon-4"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        id: "edu-sticky-placeholder"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `header-mainmenu ${sticky ? "edu-sticky" : ""}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "header-navbar",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "header-brand",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "logo",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: "/",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "logo-light",
                                                        src: style_3 ? "/assets/images/logo/logo-dark.png" : "/assets/images/logo/logo-dark-2.png",
                                                        alt: "Corporate Logo"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "logo-dark",
                                                        src: style_3 ? "/assets/images/logo/logo-white.png" : "/assets/images/logo/logo-light-2.png",
                                                        alt: "Corporate Logo"
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "header-mainnav",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                                            className: "mainmenu-nav",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_main_menu__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "header-right",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            className: "header-action",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "icon search-icon",
                                                    onClick: ()=>setIsSearchOpen(true),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        style: {
                                                            cursor: "pointer"
                                                        },
                                                        className: "search-trigger",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "icon-2"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "icon",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                        href: "/wishlist",
                                                        className: "wishlist",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "icon-22"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "count",
                                                                children: wishlists?.length
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                    className: "icon cart-icon",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: "/cart",
                                                            className: "cart-icon",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "icon-3"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "count",
                                                                    children: quantity
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_cart__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
                                                    ]
                                                }),
                                                no_topBar && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "header-btn",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                        href: "#",
                                                        className: "edu-btn btn-medium",
                                                        children: [
                                                            "Apply Now ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "icon-4"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "mobile-menu-bar d-block d-xl-none",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: "hamberger-button",
                                                        onClick: ()=>setIsOpen(true),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "icon-54"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_popup_modal_search_popup__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        isSearchOpen: isSearchOpen,
                        setIsSearchOpen: setIsSearchOpen
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_sidebar_off_canvas__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                isOpen: isOpen,
                setIsOpen: setIsOpen
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderTwo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8654:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_common_popup_modal_search_popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3489);
/* harmony import */ var _components_common_sidebar_off_canvas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3107);
/* harmony import */ var _hooks_use_cart_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4152);
/* harmony import */ var _hooks_use_sticky__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3913);
/* harmony import */ var _redux_features_wishlist_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3961);
/* harmony import */ var _component_main_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9239);
/* harmony import */ var _component_cart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7522);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_redux_features_wishlist_slice__WEBPACK_IMPORTED_MODULE_8__, _component_cart__WEBPACK_IMPORTED_MODULE_10__]);
([_redux_features_wishlist_slice__WEBPACK_IMPORTED_MODULE_8__, _component_cart__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const HeaderThree = ()=>{
    const { sticky } = (0,_hooks_use_sticky__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const { quantity } = (0,_hooks_use_cart_info__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const wishlists = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_redux_features_wishlist_slice__WEBPACK_IMPORTED_MODULE_8__/* .wishlistItems */ .iC);
    const [isSearchOpen, setIsSearchOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                className: "edu-header header-style-4 header-fullwidth no-topbar",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        id: "edu-sticky-placeholder"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `header-mainmenu ${sticky ? "edu-sticky" : ""}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container-fluid",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "header-navbar",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "header-brand",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "logo",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: "/",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "logo-light",
                                                        src: "/assets/images/logo/logo-dark.png",
                                                        alt: "Corporate Logo"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "logo-dark",
                                                        src: "/assets/images/logo/logo-white.png",
                                                        alt: "Corporate Logo"
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "header-mainnav",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                                            className: "mainmenu-nav",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_main_menu__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "header-right",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            className: "header-action",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "search-bar",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "input-group",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                type: "text",
                                                                className: "form-control",
                                                                placeholder: "Search"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                onClick: ()=>setIsSearchOpen(true),
                                                                className: "search-btn",
                                                                type: "button",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "icon-2"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "icon search-icon",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "#",
                                                        className: "search-trigger",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "icon-2"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "icon",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                        href: "/wishlist",
                                                        className: "wishlist",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "icon-22"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "count",
                                                                children: wishlists?.length
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                    className: "icon cart-icon",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: "/cart",
                                                            className: "cart-icon",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "icon-3"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "count",
                                                                    children: quantity
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_cart__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "header-btn",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                        href: "/contact-us",
                                                        className: "edu-btn btn-medium btn-curved",
                                                        children: [
                                                            "Try for free ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "icon-4"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "mobile-menu-bar d-block d-xl-none",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: "hamberger-button",
                                                        onClick: ()=>setIsOpen(true),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "icon-54"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_popup_modal_search_popup__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        isSearchOpen: isSearchOpen,
                        setIsSearchOpen: setIsSearchOpen
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_sidebar_off_canvas__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                isOpen: isOpen,
                setIsOpen: setIsOpen
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderThree);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5115:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _headers_component_main_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9239);
/* harmony import */ var _headers_component_header_top_right__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(776);
/* harmony import */ var _headers_component_header_top_left__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6640);
/* harmony import */ var _components_common_popup_modal_search_popup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3489);
/* harmony import */ var _hooks_use_sticky__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3913);
/* harmony import */ var _redux_features_wishlist_slice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3961);
/* harmony import */ var _hooks_use_cart_info__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4152);
/* harmony import */ var _components_common_sidebar_off_canvas__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3107);
/* harmony import */ var _component_cart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7522);
/* harmony import */ var _AvatarDropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3632);
/* harmony import */ var _menu_data__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5195);
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5927);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_redux_features_wishlist_slice__WEBPACK_IMPORTED_MODULE_9__, _component_cart__WEBPACK_IMPORTED_MODULE_12__, _AvatarDropdown__WEBPACK_IMPORTED_MODULE_13__, _store_auth__WEBPACK_IMPORTED_MODULE_15__]);
([_redux_features_wishlist_slice__WEBPACK_IMPORTED_MODULE_9__, _component_cart__WEBPACK_IMPORTED_MODULE_12__, _AvatarDropdown__WEBPACK_IMPORTED_MODULE_13__, _store_auth__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const categories = [
    {
        link: "/course-style-1",
        title: "Design"
    },
    {
        link: "/course-style-1",
        title: "Development"
    },
    {
        link: "/course-style-1",
        title: "Architecture"
    },
    {
        link: "/course-style-1",
        title: "Life Style"
    },
    {
        link: "/course-style-1",
        title: "Data Science"
    },
    {
        link: "/course-style-1",
        title: "Marketing"
    },
    {
        link: "/course-style-1",
        title: "Music"
    },
    {
        link: "/course-style-1",
        title: "Photography"
    },
    {
        link: "/course-style-1",
        title: "Finance"
    },
    {
        link: "/course-style-1",
        title: "Motivation"
    }
];
const Header = ({ header_style, no_top_bar, disable_full_width, disable_category })=>{
    const handleLogout = (0,_store_auth__WEBPACK_IMPORTED_MODULE_15__/* .useCounterStore */ .A)((state)=>state.handleLogout);
    // const isLoggedIn = useCounterStore((state) => state.isLoggedIn);
    const { sticky } = (0,_hooks_use_sticky__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    const { quantity } = (0,_hooks_use_cart_info__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)();
    const wishlists = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_redux_features_wishlist_slice__WEBPACK_IMPORTED_MODULE_9__/* .wishlistItems */ .iC);
    const [isSearchOpen, setIsSearchOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const userDataForAvatarDropdown = (0,_store_auth__WEBPACK_IMPORTED_MODULE_15__/* .useCounterStore */ .A)((state)=>state.userDataForAvatarDropdown);
    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        names: "",
        lastName: ""
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Este código se ejecuta solo en el cliente
        const userAuth = localStorage.getItem("USER_AUTH");
        if (userAuth) {
            setIsLoggedIn(true);
            const userDataForAvatarDropdown = JSON.parse(userAuth);
            setUserData({
                names: userDataForAvatarDropdown.names,
                lastName: userDataForAvatarDropdown.lastName
            });
        }
    }, []); // El array vacío asegura que esto solo se ejecute una vez cuando el componente se monta
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                className: `edu-header header-style-${header_style ? header_style : "1"} ${disable_full_width ? "disbale-header-fullwidth" : "header-fullwidth"} ${no_top_bar ? "no-topbar" : ""}`,
                children: [
                    !no_top_bar && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "header-top-bar",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container-fluid",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "header-top",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "header-top-left"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "header-top-right",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headers_component_header_top_right__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        id: "edu-sticky-placeholder"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `header-mainmenu ${sticky ? "edu-sticky" : ""}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container-fluid",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "header-navbar",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "header-brand",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "logo",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: "/",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            className: "logo-light",
                                                            src: "/assets/images/logo/logo-dark.png",
                                                            alt: "logo"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            className: "logo-dark",
                                                            src: "/assets/images/logo/logo-white.png",
                                                            alt: "logo"
                                                        })
                                                    ]
                                                })
                                            }),
                                            !disable_category && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "header-category hidden",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                                                    className: "mainmenu-nav",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                        className: "mainmenu",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                            className: "has-droupdown",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                    href: "#",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: "icon-1"
                                                                        }),
                                                                        "Category"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                                    className: "submenu",
                                                                    children: categories.map((category, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                href: `${category.link}`,
                                                                                children: category.title
                                                                            })
                                                                        }, i))
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "header-mainnav",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                                            className: "mainmenu-nav",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headers_component_main_menu__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "header-right",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            className: "header-action",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                    className: "icon has-droupdown w-[62px] p-0",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "#",
                                                            className: "flex justify-center items-center",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "icon-25"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                            className: "submenu py-7 px-6",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "flex flex-col items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                version: "1.0",
                                                                                width: "48px",
                                                                                height: "48px",
                                                                                viewBox: "0 0 368.000000 368.000000",
                                                                                preserveAspectRatio: "xMidYMid meet",
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                                                                    transform: "translate(0.000000,368.000000) scale(0.100000,-0.100000)",
                                                                                    fill: "#0d9488",
                                                                                    stroke: "none",
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                            d: "M1694 3669 c-895 -65 -1619 -796 -1683 -1701 -72 -1009 691 -1886 1702 -1957 1007 -72 1885 692 1956 1701 46 645 -252 1265 -789 1640 -183 128 -456 243 -679 288 -87 17 -350 43 -386 38 -5 0 -60 -4 -121 -9z m324 -120 c577 -63 1084 -410 1346 -919 220 -429 255 -905 99 -1353 -31 -92 -113 -268 -151 -325 l-15 -23 -64 70 c-227 249 -574 453 -923 541 -279 70 -636 69 -923 -4 -360 -92 -711 -307 -951 -584 -45 -53 -40 -58 -126 110 -253 491 -253 1058 1 1558 321 632 1008 1006 1707 929z"
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                            d: "M1684 3121 c-295 -80 -489 -346 -471 -646 10 -154 62 -276 169 -391 77 -82 152 -131 258 -168 76 -27 98 -30 200 -30 102 0 124 3 200 30 106 37 181 86 258 168 70 75 112 145 144 241 32 98 33 269 1 370 -61 193 -221 355 -413 416 -95 31 -253 35 -346 10z"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                className: "flex flex-col items-center gap-2 ml-0",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                                                                        className: "font-semibold text-center mb-0",
                                                                                        children: [
                                                                                            userData.names,
                                                                                            " ",
                                                                                            userData.lastName
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                        className: "text-sm mb-0",
                                                                                        children: [
                                                                                            "Rango: ",
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                className: "font-[500]",
                                                                                                children: "Doble Diamante"
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                        className: "text-sm mb-0",
                                                                                        children: [
                                                                                            "Puntos: ",
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                className: "font-[500]",
                                                                                                children: "40 ptos."
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "w-full border-b border-neutral-200 dark:border-neutral-700"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                        href: `/edit-profile`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                                width: "24",
                                                                                height: "24",
                                                                                viewBox: "0 0 24 24",
                                                                                fill: "none",
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                        d: "M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z",
                                                                                        stroke: "currentColor",
                                                                                        strokeWidth: "1.5",
                                                                                        strokeLinecap: "round",
                                                                                        strokeLinejoin: "round"
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                        d: "M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z",
                                                                                        stroke: "currentColor",
                                                                                        strokeWidth: "1.5",
                                                                                        strokeLinecap: "round",
                                                                                        strokeLinejoin: "round"
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            "Mi perfil"
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "w-full border-b border-neutral-200 dark:border-neutral-700"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                        href: `/`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                                width: "24",
                                                                                height: "24",
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                id: "Layer_1",
                                                                                version: "1.1",
                                                                                viewBox: "0 0 64 64",
                                                                                stroke: "currentColor",
                                                                                fill: "none",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                        stroke: "currentColor",
                                                                                        strokeWidth: "1.5",
                                                                                        strokeLinecap: "round",
                                                                                        strokeLinejoin: "round",
                                                                                        d: "M63.69172,44.81383c-0.62661-1.75697-1.91092-3.12349-3.61652-3.87351s-3.5858-0.7603-5.30169-0.03085L43.2661,45.76935 c0.01028-0.13358,0.02057-0.28772,0.02057-0.43158c0-2.23984-1.81861-4.05838-4.05851-4.05838h-8.30176 c-0.33914,0-0.66787-0.07193-0.97603-0.21579l-7.03815-3.17485c-1.09932-0.50344-2.32205-0.77059-3.53437-0.77059h-5.95927 v-0.57537c0-1.13017-0.91432-2.0549-2.0549-2.0549H0v25.93287h11.36368c1.14058,0,2.0549-0.92467,2.0549-2.0549v-1.61304h3.29808 l12.27812,3.94538c1.01717,0.31851,2.06519,0.48294,3.12337,0.48294c1.66459,0,3.32893-0.40072,4.80853-1.19188L64,45.64606 L63.69172,44.81383z M7.22301,56.60895c-0.79116,0-1.43833-0.6473-1.43833-1.43846c0-0.80138,0.64717-1.44868,1.43833-1.44868 s1.43846,0.6473,1.43846,1.44868C8.66147,55.96165,8.01417,56.60895,7.22301,56.60895z M35.97109,58.1707 c-1.94178,1.03767-4.25354,1.23289-6.34958,0.56508l-12.43214-3.9968l-3.77079-0.04108V39.17307h5.95927 c0.92461,0,1.84946,0.2055,2.68163,0.58566l7.03802,3.18514c0.57543,0.25686,1.19188,0.39043,1.82889,0.39043h8.30176 c1.1096,0,2.0036,0.9041,2.0036,2.00348c0,1.10966-0.894,2.00354-2.0036,2.00354h-10.7471v2.0549h10.7471 c0.75014,0,1.44874-0.19522,2.04474-0.5548L55.57495,42.8c1.19175-0.50344,2.49664-0.49316,3.67836,0.02057 c0.90404,0.40066,1.64377,1.05824,2.13693,1.89048L35.97109,58.1707z"
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                        stroke: "currentColor",
                                                                                        strokeWidth: "1.5",
                                                                                        strokeLinecap: "round",
                                                                                        strokeLinejoin: "round",
                                                                                        d: "M9.30727,30.34497l6.39875-3.54516l6.26605,3.77493l-1.39431-7.18112l4.59757-3.98721l-1.69745,7.31326 c-0.09231,0.39533,0.05719,0.80771,0.38128,1.05254c0.32509,0.24482,0.76156,0.27542,1.11675,0.07826l7.1129-3.93973 l6.96339,4.19509c0.33587,0.20422,0.7768,0.20085,1.11876-0.03813c0.33212-0.23228,0.49667-0.63915,0.41941-1.03749 l-1.54921-7.98131l0.14624-0.12686l4.60622,4.29712l-1.65393,7.12581l6.39875-3.54516l6.26593,3.77493l-1.39418-7.18112 l5.52631-4.79279l-7.26039-0.893l-2.85057-6.73701l-3.09289,6.62914l-5.57573,0.4813l5.02689-4.35927 c0.30703-0.26589,0.42744-0.68731,0.30904-1.07561c-0.1184-0.3883-0.45353-0.67075-0.85688-0.72042l-8.07011-0.99233 L33.3982,3.44598c-0.15853-0.37376-0.52175-0.61958-0.92712-0.62711c-0.00702,0-0.01304,0-0.01906,0 c-0.39834,0-0.76256,0.23078-0.93113,0.59299l-3.43755,7.36775l-8.10021,0.69935c-0.88109,0.07543-1.26465,1.16423-0.61306,1.77496 l5.58025,5.20499l-6.10664-0.75109l-2.85045-6.73701l-3.09289,6.62914L5.6121,18.22908l5.34897,4.99008L9.30727,30.34497z M28.85192,12.77583c0.36623-0.03161,0.68731-0.25586,0.84283-0.58898l2.71111-5.81203l2.49939,5.90634 c0.14348,0.33864,0.45654,0.57443,0.82076,0.61958l6.36538,0.78263l-4.84528,4.20212 c-0.27794,0.24081-0.40536,0.61105-0.33512,0.97176l1.2221,6.29615l-5.49345-3.30912 c-0.31649-0.19146-0.71086-0.19536-1.02745-0.01856l-5.61085,3.10794l1.44987-6.24749 c0.08328-0.3577-0.03111-0.73296-0.29901-0.9838l-4.69076-4.3752L28.85192,12.77583z"
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            "Mis Puntos"
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "w-full border-b border-neutral-200 dark:border-neutral-700"
                                                                }),
                                                                isLoggedIn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                                        type: "button",
                                                                        className: "flex items-center font-['Spartan'] transition duration-150 ease-in-out rounded-lg bg-white h-[35px] hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 leading-[1.8] font-semibold text-[15px] text-black gap-[20px] m-0 p-0",
                                                                        onClick: handleLogout,
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                                width: "24px",
                                                                                height: "24px",
                                                                                viewBox: "0 0 24 24",
                                                                                fill: "none",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                        d: "M12.9999 2C10.2385 2 7.99991 4.23858 7.99991 7C7.99991 7.55228 8.44762 8 8.99991 8C9.55219 8 9.99991 7.55228 9.99991 7C9.99991 5.34315 11.3431 4 12.9999 4H16.9999C18.6568 4 19.9999 5.34315 19.9999 7V17C19.9999 18.6569 18.6568 20 16.9999 20H12.9999C11.3431 20 9.99991 18.6569 9.99991 17C9.99991 16.4477 9.55219 16 8.99991 16C8.44762 16 7.99991 16.4477 7.99991 17C7.99991 19.7614 10.2385 22 12.9999 22H16.9999C19.7613 22 21.9999 19.7614 21.9999 17V7C21.9999 4.23858 19.7613 2 16.9999 2H12.9999Z",
                                                                                        fill: "currentColor"
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                        d: "M13.9999 11C14.5522 11 14.9999 11.4477 14.9999 12C14.9999 12.5523 14.5522 13 13.9999 13V11Z",
                                                                                        fill: "currentColor"
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                        d: "M5.71783 11C5.80685 10.8902 5.89214 10.7837 5.97282 10.682C6.21831 10.3723 6.42615 10.1004 6.57291 9.90549C6.64636 9.80795 6.70468 9.72946 6.74495 9.67492L6.79152 9.61162L6.804 9.59454L6.80842 9.58848C6.80846 9.58842 6.80892 9.58778 5.99991 9L6.80842 9.58848C7.13304 9.14167 7.0345 8.51561 6.58769 8.19098C6.14091 7.86637 5.51558 7.9654 5.19094 8.41215L5.18812 8.41602L5.17788 8.43002L5.13612 8.48679C5.09918 8.53682 5.04456 8.61033 4.97516 8.7025C4.83623 8.88702 4.63874 9.14542 4.40567 9.43937C3.93443 10.0337 3.33759 10.7481 2.7928 11.2929L2.08569 12L2.7928 12.7071C3.33759 13.2519 3.93443 13.9663 4.40567 14.5606C4.63874 14.8546 4.83623 15.113 4.97516 15.2975C5.04456 15.3897 5.09918 15.4632 5.13612 15.5132L5.17788 15.57L5.18812 15.584L5.19045 15.5872C5.51509 16.0339 6.14091 16.1336 6.58769 15.809C7.0345 15.4844 7.13355 14.859 6.80892 14.4122L5.99991 15C6.80892 14.4122 6.80897 14.4123 6.80892 14.4122L6.804 14.4055L6.79152 14.3884L6.74495 14.3251C6.70468 14.2705 6.64636 14.1921 6.57291 14.0945C6.42615 13.8996 6.21831 13.6277 5.97282 13.318C5.89214 13.2163 5.80685 13.1098 5.71783 13H13.9999V11H5.71783Z",
                                                                                        fill: "currentColor"
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            "Cerrar Sesi\xf3n"
                                                                        ]
                                                                    })
                                                                }),
                                                                !isLoggedIn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                        href: "/sign-in",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                width: "24px",
                                                                                height: "24px",
                                                                                viewBox: "0 0 24 24",
                                                                                fill: "currentColor",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                    fillRule: "evenodd",
                                                                                    clipRule: "evenodd",
                                                                                    d: "M2 6.5C2 4.01472 4.01472 2 6.5 2H12C14.2091 2 16 3.79086 16 6V7C16 7.55228 15.5523 8 15 8C14.4477 8 14 7.55228 14 7V6C14 4.89543 13.1046 4 12 4H6.5C5.11929 4 4 5.11929 4 6.5V17.5C4 18.8807 5.11929 20 6.5 20H12C13.1046 20 14 19.1046 14 18V17C14 16.4477 14.4477 16 15 16C15.5523 16 16 16.4477 16 17V18C16 20.2091 14.2091 22 12 22H6.5C4.01472 22 2 19.9853 2 17.5V6.5ZM18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289L22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071C17.9024 15.3166 17.9024 14.6834 18.2929 14.2929L19.5858 13L11 13C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11L19.5858 11L18.2929 9.70711C17.9024 9.31658 17.9024 8.68342 18.2929 8.29289Z",
                                                                                    fill: "currentColor"
                                                                                })
                                                                            }),
                                                                            "Login"
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                    className: "icon cart-icon",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: "/cart",
                                                            className: "cart-icon",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "icon-3 font-extrabold"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "count",
                                                                    children: quantity
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_cart__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "mobile-menu-bar d-block d-xl-none",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: "hamberger-button",
                                                        onClick: ()=>setIsOpen(true),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "icon-54"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_popup_modal_search_popup__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        isSearchOpen: isSearchOpen,
                        setIsSearchOpen: setIsSearchOpen
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_sidebar_off_canvas__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                isOpen: isOpen,
                setIsOpen: setIsOpen
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const menu_data = [
    {
        title: "Inicio",
        link: "/",
        mega_menu: false,
        droupdown: false,
        submenus: []
    },
    {
        title: "Programas de Estudio",
        link: "#",
        mega_menu: false,
        droupdown: true,
        submenus: [
            {
                title: "Cursos",
                link: "/cursos"
            },
            {
                title: "Diplomados y Especializaciones",
                link: "/"
            },
            {
                title: "Paquetes",
                link: "#"
            },
            {
                title: "Siminarios y talleres",
                link: "#"
            }
        ]
    },
    {
        title: "Nosotros",
        link: "#",
        mega_menu: false,
        droupdown: true,
        submenus: [
            {
                title: "Quienes Somos",
                link: "/about-1"
            },
            {
                title: "Eventos",
                link: "#"
            },
            {
                title: "Contacto",
                link: "/contact-us"
            }
        ]
    },
    {
        title: "Servicios",
        link: "#",
        mega_menu: false,
        droupdown: true,
        submenus: [
            {
                title: "Puntos",
                link: "#"
            },
            {
                title: "Tienda",
                link: "/event-grid"
            },
            {
                title: "Verificaci\xf3n de Certificado",
                link: "#"
            }
        ]
    }
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu_data);


/***/ }),

/***/ 8031:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $_: () => (/* reexport safe */ _footers_footer__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   Ef: () => (/* reexport safe */ _headers_header_3__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   Fd: () => (/* reexport safe */ _footers_footer_4__WEBPACK_IMPORTED_MODULE_6__.Z),
/* harmony export */   h4: () => (/* reexport safe */ _headers_header__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   iK: () => (/* reexport safe */ _footers_footer_2__WEBPACK_IMPORTED_MODULE_4__.Z),
/* harmony export */   im: () => (/* reexport safe */ _wrapper__WEBPACK_IMPORTED_MODULE_7__.Z),
/* harmony export */   jS: () => (/* reexport safe */ _headers_header_2__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   yD: () => (/* reexport safe */ _footers_footer_3__WEBPACK_IMPORTED_MODULE_5__.Z)
/* harmony export */ });
/* harmony import */ var _headers_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5115);
/* harmony import */ var _headers_header_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5023);
/* harmony import */ var _headers_header_3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8654);
/* harmony import */ var _footers_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8581);
/* harmony import */ var _footers_footer_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1848);
/* harmony import */ var _footers_footer_3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6541);
/* harmony import */ var _footers_footer_4__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(658);
/* harmony import */ var _wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8955);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headers_header__WEBPACK_IMPORTED_MODULE_0__, _headers_header_2__WEBPACK_IMPORTED_MODULE_1__, _headers_header_3__WEBPACK_IMPORTED_MODULE_2__, _footers_footer_2__WEBPACK_IMPORTED_MODULE_4__, _footers_footer_4__WEBPACK_IMPORTED_MODULE_6__, _wrapper__WEBPACK_IMPORTED_MODULE_7__]);
([_headers_header__WEBPACK_IMPORTED_MODULE_0__, _headers_header_2__WEBPACK_IMPORTED_MODULE_1__, _headers_header_3__WEBPACK_IMPORTED_MODULE_2__, _footers_footer_2__WEBPACK_IMPORTED_MODULE_4__, _footers_footer_4__WEBPACK_IMPORTED_MODULE_6__, _wrapper__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8955:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3590);
/* harmony import */ var _redux_features_cart_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6709);
/* harmony import */ var _redux_features_wishlist_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3961);
/* harmony import */ var _ui_scroll_to_top__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5782);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_3__, _redux_features_cart_slice__WEBPACK_IMPORTED_MODULE_4__, _redux_features_wishlist_slice__WEBPACK_IMPORTED_MODULE_5__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_3__, _redux_features_cart_slice__WEBPACK_IMPORTED_MODULE_4__, _redux_features_wishlist_slice__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function Wrapper({ children }) {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        dispatch((0,_redux_features_wishlist_slice__WEBPACK_IMPORTED_MODULE_5__/* .get_wishlist_products */ .yR)());
        dispatch((0,_redux_features_cart_slice__WEBPACK_IMPORTED_MODULE_4__/* .get_cart_courses */ .eg)());
    }, [
        dispatch
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_scroll_to_top__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {})
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5927:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useCounterStore)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6912);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__]);
zustand__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const useCounterStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set)=>{
    //   const getPurchaseDataFromLocalStorage = () => {
    //     const purchaseData = localStorage.getItem('purchaseData');
    //     return purchaseData ? JSON.parse(purchaseData) : null;
    //   };
    const isBrowser = "undefined" !== "undefined";
    const getUserDataForAvatarDropdownFromLocalStorage = ()=>{
        const userDataForAvatarDropdownString = isBrowser && localStorage.getItem("userDataForAvatarDropdown");
        return userDataForAvatarDropdownString ? JSON.parse(userDataForAvatarDropdownString) : {
            imageUrl: "",
            lastName: "",
            names: ""
        };
    };
    const updateUserDataForAvatarDropdown = (names, lastName)=>{
        set((state)=>({
                ...state,
                userDataForAvatarDropdown: {
                    ...state.userDataForAvatarDropdown,
                    names,
                    lastName
                }
            }));
        const userDataString = isBrowser && localStorage.getItem("userDataForAvatarDropdown");
        if (userDataString) {
            const userData = JSON.parse(userDataString);
            isBrowser && localStorage.setItem("userDataForAvatarDropdown", JSON.stringify({
                ...userData,
                names,
                lastName
            }));
        }
    };
    const updateUserDataForAvatarDropdownWithImg = (names, lastName, imageUrl)=>{
        set((state)=>({
                ...state,
                userDataForAvatarDropdown: {
                    ...state.userDataForAvatarDropdown,
                    names,
                    lastName,
                    imageUrl
                }
            }));
        const userDataString = isBrowser && localStorage.getItem("userDataForAvatarDropdown");
        if (userDataString) {
            const userData = JSON.parse(userDataString);
            isBrowser && localStorage.setItem("userDataForAvatarDropdown", JSON.stringify({
                ...userData,
                names,
                lastName,
                imageUrl
            }));
        }
    };
    return {
        // count: 0,
        isLoggedIn: isBrowser && localStorage.getItem("USER_AUTH") ? true : false,
        dataIsLoggedIn: isBrowser && localStorage.getItem("USER_AUTH") ? JSON.parse(localStorage.getItem("USER_AUTH")) : {},
        userDataForAvatarDropdown: getUserDataForAvatarDropdownFromLocalStorage(),
        setUserDataForAvatarDropdown: (userData)=>{
            set((state)=>({
                    ...state,
                    userDataForAvatarDropdown: userData
                }));
            isBrowser && localStorage.setItem("userDataForAvatarDropdown", JSON.stringify(userData));
        },
        clearUserDataForAvatarDropdown: ()=>{
            set((state)=>({
                    ...state,
                    userDataForAvatarDropdown: {
                        imageUrl: "",
                        lastName: "",
                        names: ""
                    }
                }));
            isBrowser && localStorage.removeItem("userDataForAvatarDropdown");
        },
        updateNamesAndLastName: (names, lastName)=>{
            updateUserDataForAvatarDropdown(names, lastName);
        },
        updateNamesAndLastNameAndImg: (names, lastName, nameImageUrl)=>{
            const imageUrl = `https://api.yosoymitosis.com/StaticFiles/ProfileImg/${nameImageUrl}`;
            updateUserDataForAvatarDropdownWithImg(names, lastName, imageUrl);
        },
        // increment: () => {
        //   set((state) => ({ ...state, count: state.count + 1 }));
        // },
        // decrement: () => {
        //   set((state) => ({ ...state, count: state.count - 1 }));
        // },
        handleLogin: ()=>{
            set((state)=>({
                    ...state,
                    isLoggedIn: true
                }));
        },
        handleLogout: ()=>{
            const initialPurchaseData = {
                userId: 0,
                grossAmount: 0,
                netAmount: 0,
                realPoints: 0,
                promotionPoints: 0,
                quantity: 0,
                storeId: 0,
                statusPurchase: "",
                typePurchase: "",
                receipt: "",
                documentReceipt: "",
                typeDocumentReceipt: "",
                typePayment: "",
                purchaseDetail: []
            };
            isBrowser && localStorage.removeItem("StoresForShopping");
            isBrowser && localStorage.removeItem("TypePurchase");
            isBrowser && localStorage.removeItem("carritoLength");
            isBrowser && localStorage.setItem("purchaseData", JSON.stringify(initialPurchaseData));
            set((state)=>({
                    ...state,
                    isLoggedIn: false
                }));
            isBrowser && localStorage.removeItem("userDataForAvatarDropdown");
            isBrowser && localStorage.removeItem("USER_AUTH");
            window.location.href = "/sign-in";
        }
    };
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5782:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ scroll_to_top)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/hooks/use-scroll-to-top.js

function useScrollToTop() {
    const [stick, setStick] = (0,external_react_.useState)(false);
    const onClickHandler = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    (0,external_react_.useEffect)(()=>{
        const scrollHandler = ()=>{
            const scrollPos = window.pageYOffset;
            if (scrollPos > 50) {
                setStick(true);
            } else {
                setStick(false);
            }
        };
        window.addEventListener("scroll", scrollHandler);
        return ()=>{
            window.removeEventListener("scroll", scrollHandler);
        };
    }, [
        stick
    ]);
    return {
        stick,
        onClickHandler
    };
}
/* harmony default export */ const use_scroll_to_top = (useScrollToTop);

;// CONCATENATED MODULE: ./src/ui/scroll-to-top.jsx



const ScrollToTop = ()=>{
    const { stick, onClickHandler } = use_scroll_to_top();
    (0,external_react_.useEffect)(()=>{
        const progressPath = document.querySelector(".rn-progress-parent path");
        const pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = "none";
        progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = "stroke-dashoffset 10ms linear";
        const updateProgress = ()=>{
            const scroll = window.scrollY;
            const docHeight = document.body.offsetHeight;
            const winHeight = window.innerHeight;
            const height = docHeight - winHeight;
            const progress = pathLength - scroll * pathLength / height;
            progressPath.style.strokeDashoffset = progress;
        };
        updateProgress();
        window.addEventListener("scroll", updateProgress);
    });
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: `rn-progress-parent ${stick && "rn-backto-top-active"}`,
        role: "button",
        onClick: onClickHandler,
        onKeyUp: (e)=>e,
        tabIndex: -1,
        children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
            className: "rn-back-circle svg-inner",
            width: "100%",
            height: "100%",
            viewBox: "-1 -1 102 102",
            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                d: "M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            })
        })
    });
};
/* harmony default export */ const scroll_to_top = (ScrollToTop);


/***/ })

};
;