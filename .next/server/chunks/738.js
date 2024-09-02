"use strict";
exports.id = 738;
exports.ids = [738];
exports.modules = {

/***/ 738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const msInSecond = 1000;
const msInMinute = 60 * 1000;
const msInAHour = 60 * msInMinute;
const msInADay = 24 * msInAHour;
const getPartsofTimeDuration = (duration)=>{
    const days = Math.floor(duration / msInADay);
    const hours = Math.floor(duration % msInADay / msInAHour);
    const minutes = Math.floor(duration % msInAHour / msInMinute);
    const seconds = Math.floor(duration % msInMinute / msInSecond);
    return {
        days,
        hours,
        minutes,
        seconds
    };
};
const Time = (endDateTime)=>{
    const date = new Date().toLocaleTimeString();
    const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(date);
    const now = Date.now(); // Number of milliseconds from begining of time
    const future = new Date(endDateTime);
    const timeDif = future.getTime() - now;
    let timeParts = getPartsofTimeDuration(timeDif);
    timeParts.days = timeParts.days <= 9 ? `0${timeParts.days}` : timeParts.days;
    timeParts.minutes = timeParts.minutes <= 9 ? `0${timeParts.minutes}` : timeParts.minutes;
    timeParts.hours = timeParts.hours <= 9 ? `0${timeParts.hours}` : timeParts.hours;
    timeParts.seconds = timeParts.seconds <= 9 ? `0${timeParts.seconds}` : timeParts.seconds;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const timeout = setTimeout(()=>{
            const date = new Date();
            setTime(date.toLocaleTimeString());
        }, 1000);
        return ()=>{
            clearTimeout(timeout);
        };
    }, [
        time
    ]);
    return timeParts;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Time);


/***/ })

};
;