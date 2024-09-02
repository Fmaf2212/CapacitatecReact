"use strict";
exports.id = 7618;
exports.ids = [7618];
exports.modules = {

/***/ 6746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ErrorMsg = ({ error })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            style: {
                color: "red"
            },
            children: error
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorMsg);


/***/ }),

/***/ 4293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ih: () => (/* binding */ courseSchema),
/* harmony export */   NA: () => (/* binding */ blogCommentSchema),
/* harmony export */   dm: () => (/* binding */ loginSchema),
/* harmony export */   gY: () => (/* binding */ registerSchema)
/* harmony export */ });
/* unused harmony export contactSchema */
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);

const registerSchema = yup__WEBPACK_IMPORTED_MODULE_0__.object().shape({
    name: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().label("Name"),
    email: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().email().label("Email"),
    password: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().min(6).label("Password"),
    terms: yup__WEBPACK_IMPORTED_MODULE_0__.bool().oneOf([
        true,
        "You need to accept the terms and conditions"
    ])
});
const loginSchema = yup__WEBPACK_IMPORTED_MODULE_0__.object().shape({
    // email: Yup.string().required('El correo electrónico es obligatorio.').email('El usuario o correo electrónico debe ser válido.').label( 'Email' ),
    // password: Yup.string().required('La contraseña es obligatoria.').min(6,'La contraseña debe tener al menos 6 carácteres.').label( 'Password' )
    email: yup__WEBPACK_IMPORTED_MODULE_0__.string().required("El usuario es obligatorio.").label("Email"),
    password: yup__WEBPACK_IMPORTED_MODULE_0__.string().required("La contrase\xf1a es obligatoria.").label("Password")
});
const blogCommentSchema = yup__WEBPACK_IMPORTED_MODULE_0__.object().shape({
    name: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().label("Name"),
    email: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().email().label("Email"),
    msg: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().min(20).label("Message")
});
const contactSchema = yup__WEBPACK_IMPORTED_MODULE_0__.object().shape({
    name: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().label("Name"),
    email: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().email().label("Email"),
    phone: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().min(11).label("Phone"),
    msg: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().min(20).label("Message")
});
const courseSchema = yup__WEBPACK_IMPORTED_MODULE_0__.object().shape({
    title: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().label("Title"),
    name: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().label("Name"),
    email: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().email().label("Email"),
    msg: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().min(20).label("Summery")
});


/***/ })

};
;