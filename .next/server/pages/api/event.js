"use strict";
(() => {
var exports = {};
exports.id = 4401;
exports.ids = [4401];
exports.modules = {

/***/ 9962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
function handler(req, res) {
    res.status(200).json([
        {
            id: 1,
            img: "/assets/images/blog/blog-01.jpg",
            category: "ONLINE",
            title: "Become a Better Blogger: Content Planning",
            date: "Oct 10, 2022",
            comment: 9,
            sm_desc: "Lorem ipsum dolor sit amet cons tetur adipisicing sed.",
            delay: "100",
            home_1: true
        },
        {
            id: 2,
            img: "/assets/images/blog/blog-02.jpg",
            category: "LECTURE",
            title: "How to Keep Workouts Fresh in the Morning",
            date: "Jan 10, 2022",
            comment: 15,
            sm_desc: "Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt labore dol oremagna aliqua.",
            delay: "200",
            home_1: true
        },
        {
            id: 3,
            img: "/assets/images/blog/blog-03.jpg",
            category: "BUSINESS",
            title: "Four Ways to Keep Your Workout Routine Fresh",
            date: "Feb 10, 2021",
            comment: 12,
            sm_desc: "Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt.",
            delay: "300",
            home_1: true
        }
    ]);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9962));
module.exports = __webpack_exports__;

})();