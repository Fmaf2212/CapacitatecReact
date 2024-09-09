"use strict";
exports.id = 8230;
exports.ids = [8230];
exports.modules = {

/***/ 8230:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_use_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5296);
/* harmony import */ var _utils_validation_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4293);
/* harmony import */ var _error_msg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6746);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_use_firebase__WEBPACK_IMPORTED_MODULE_3__]);
_hooks_use_firebase__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const RegisterForm = ()=>{
    const [showPass, setShowPass] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // register With Email Password
    const { registerWithEmailPassword } = (0,_hooks_use_firebase__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    // use formik
    const { handleChange, handleSubmit, handleBlur, errors, values, touched } = (0,formik__WEBPACK_IMPORTED_MODULE_2__.useFormik)({
        initialValues: {
            name: "",
            email: "",
            password: "",
            terms: false
        },
        validationSchema: _utils_validation_schema__WEBPACK_IMPORTED_MODULE_4__/* .registerSchema */ .gY,
        onSubmit: (values, { resetForm })=>{
            registerWithEmailPassword(values.email, values.password, values.name);
            resetForm();
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "reg-name",
                        children: "Nombres y apellidos*"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        value: values.name,
                        onChange: handleChange,
                        onBlur: handleBlur,
                        type: "text",
                        name: "name",
                        id: "reg-name",
                        placeholder: "Ingresar nombre completo"
                    }),
                    touched.name && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_error_msg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        error: errors.name
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "log-email",
                        children: "Usuario o Correo*"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        value: values.email,
                        onChange: handleChange,
                        onBlur: handleBlur,
                        type: "email",
                        name: "email",
                        id: "log-email",
                        placeholder: "Ingresar correo"
                    }),
                    touched.email && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_error_msg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        error: errors.email
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "log-password",
                        children: "Contrase\xf1a*"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        value: values.password,
                        onChange: handleChange,
                        onBlur: handleBlur,
                        type: showPass ? "text" : "password",
                        name: "password",
                        id: "log-password",
                        placeholder: "Ingresar contrase\xf1a"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        onClick: ()=>setShowPass(!showPass),
                        className: "password-show",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "icon-76"
                        })
                    })
                ]
            }),
            touched.password && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_error_msg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                error: errors.password
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "form-group chekbox-area",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "edu-form-check",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            value: values.terms,
                            onChange: handleChange,
                            onBlur: handleBlur,
                            type: "checkbox",
                            name: "terms",
                            id: "terms-condition"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            htmlFor: "terms-condition",
                            children: [
                                "Acepto el Acuerdo de Usuario y",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    href: "/terms-condition",
                                    className: "pl-1",
                                    children: "T\xe9rminos y Condiciones."
                                })
                            ]
                        })
                    ]
                })
            }),
            touched.terms && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_error_msg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                error: errors.terms?.split("true,")[1]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "form-group",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                    type: "submit",
                    className: "edu-btn btn-medium",
                    children: [
                        "Registrarme ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "icon-4"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegisterForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const firebaseConfig = {
    apiKey: "AIzaSyBBUsU6zVh1unjDVE2zGgZSgtBzFdHAgYg",
    authDomain: "edu-blink.firebaseapp.com",
    projectId: "edu-blink",
    storageBucket: "edu-blink.appspot.com",
    messagingSenderId: "568463423109",
    appId: "1:568463423109:web:66e8a7a12aaa3af3619bec"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firebaseConfig);


/***/ }),

/***/ 1987:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5536);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__]);
firebase_app__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function firebaseInitialization() {
    (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firebaseInitialization);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5296:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(401);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3590);
/* harmony import */ var _firebase_firebase_init__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1987);
/* harmony import */ var _redux_features_auth_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6874);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_0__, react_toastify__WEBPACK_IMPORTED_MODULE_2__, _firebase_firebase_init__WEBPACK_IMPORTED_MODULE_3__]);
([firebase_auth__WEBPACK_IMPORTED_MODULE_0__, react_toastify__WEBPACK_IMPORTED_MODULE_2__, _firebase_firebase_init__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





// initialize firebase app
(0,_firebase_firebase_init__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
// declare auth
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)();
const useFirebase = ()=>{
    // dispatch
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    // register With Email Password
    const registerWithEmailPassword = (email, password, name)=>{
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.createUserWithEmailAndPassword)(auth, email, password).then((user)=>{
            (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.updateProfile)(auth.currentUser, {
                displayName: name
            }).then(()=>{}).catch((error)=>{});
            dispatch((0,_redux_features_auth_slice__WEBPACK_IMPORTED_MODULE_4__/* .add_user */ .jb)({
                name: name,
                email: user.user.email,
                uid: user.user.uid
            }));
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(`${name} register successfully`, {
                position: "top-left"
            });
        }).catch((error)=>{
            const errorMessage = error?.message;
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(`${errorMessage}`, {
                position: "top-left"
            });
        });
    };
    // login with email and password
    const loginWithEmailPassword = (email, password)=>{
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signInWithEmailAndPassword)(auth, email, password).then((user)=>{
            const { displayName: name, email, uid } = user.user;
            dispatch((0,_redux_features_auth_slice__WEBPACK_IMPORTED_MODULE_4__/* .user_info */ .bT)({
                name: name,
                email: email,
                uid: uid
            }));
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(`${name} login successfully`, {
                position: "top-left"
            });
        }).catch((error)=>{
            const errorMessage = error.message;
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(`${errorMessage}`, {
                position: "top-left"
            });
        });
    };
    // password reset email sent
    const resetPassword = (email)=>{
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.sendPasswordResetEmail)(auth, email).then(()=>{
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(`Password reset email sent!`, {
                position: "top-left"
            });
        }).catch((error)=>{
            const errorMessage = error?.message;
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(`${errorMessage}`, {
                position: "top-left"
            });
        });
    };
    // logout
    const logout = ()=>{
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signOut)(auth).then(()=>{
            dispatch((0,_redux_features_auth_slice__WEBPACK_IMPORTED_MODULE_4__/* .sign_out */ .QA)());
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(`Sign-out successful.`, {
                position: "top-left"
            });
        }).catch((error)=>{
        // An error happened.
        });
    };
    return {
        registerWithEmailPassword,
        loginWithEmailPassword,
        resetPassword,
        logout
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFirebase);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QA: () => (/* binding */ sign_out),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   bT: () => (/* binding */ user_info),
/* harmony export */   jb: () => (/* binding */ add_user)
/* harmony export */ });
/* unused harmony exports authSlice, get_user */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(408);


const initialState = {
    allUsers: [],
    user: {}
};
const authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "auth",
    initialState,
    reducers: {
        add_user: (state, { payload })=>{
            state.allUsers.push(payload);
            state.user = payload;
            (0,_utils_localstorage__WEBPACK_IMPORTED_MODULE_1__/* .setLocalStorage */ .q)("user", state.user);
        },
        user_info: (state, { payload })=>{
            state.user = payload;
            (0,_utils_localstorage__WEBPACK_IMPORTED_MODULE_1__/* .setLocalStorage */ .q)("user", state.user);
        },
        sign_out: (state, { payload })=>{
            state.user = {};
            (0,_utils_localstorage__WEBPACK_IMPORTED_MODULE_1__/* .setLocalStorage */ .q)("user", state.user);
        },
        get_user: (state, { payload })=>{
            state.user = (0,_utils_localstorage__WEBPACK_IMPORTED_MODULE_1__/* .getLocalStorage */ .$)("user");
        }
    }
});
const { user_info, add_user, sign_out, get_user } = authSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authSlice.reducer);


/***/ })

};
;