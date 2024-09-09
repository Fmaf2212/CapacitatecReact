"use strict";
exports.id = 6083;
exports.ids = [6083];
exports.modules = {

/***/ 6083:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sr: () => (/* binding */ useMouseMoveUI),
/* harmony export */   u9: () => (/* binding */ MouseMoveProvider)
/* harmony export */ });
/* unused harmony export MouseMoveContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const MouseMoveContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
const MouseMoveProvider = ({ children })=>{
    const [currentPosition, setCurrentPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        x: 0,
        y: 0
    });
    const whileMouseMove = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{
        setCurrentPosition({
            x: e.clientX - window.innerWidth / 2,
            y: e.clientY - window.innerHeight / 2
        });
    }, []);
    const mouseDirection = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return (main = 20)=>({
                x: currentPosition.x / main,
                y: currentPosition.y / main
            });
    }, [
        currentPosition
    ]);
    const mouseReverse = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return (main = 20)=>({
                x: currentPosition.x / main * -1,
                y: currentPosition.y / main * -1
            });
    }, [
        currentPosition
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.addEventListener("mousemove", whileMouseMove);
        return ()=>{
            window.removeEventListener("mousemove", whileMouseMove);
        };
    }, [
        whileMouseMove
    ]);
    const param = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            mouseDirection,
            mouseReverse
        }), [
        mouseDirection,
        mouseReverse
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MouseMoveContext.Provider, {
        value: param,
        children: children
    });
};
const useMouseMoveUI = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(MouseMoveContext);


/***/ })

};
;