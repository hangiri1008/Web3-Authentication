"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/common/components/Button/Button.impl.tsx":
/*!******************************************************!*\
  !*** ./src/common/components/Button/Button.impl.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"@emotion/react/jsx-dev-runtime\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Button_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.view */ \"./src/common/components/Button/Button.view.tsx\");\n\n\nconst Button = (props)=>{\n    return /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        ...props,\n        onClick: ()=>alert(\"나는 버튼!\")\n    }, void 0, false, {\n        fileName: \"/Users/ibct/Private/Web3-Authentication/src/common/components/Button/Button.impl.tsx\",\n        lineNumber: 5,\n        columnNumber: 12\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi5pbXBsLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBb0M7QUFHcEMsTUFBTUMsTUFBTSxHQUE2QkMsQ0FBQUEsS0FBSyxHQUFJO0lBQzlDLHFCQUFPLHVFQUFDRixvREFBTztRQUFFLEdBQUdFLEtBQUs7UUFBRUMsT0FBTyxFQUFFLElBQU1DLEtBQUssQ0FBQyxRQUFRLENBQUM7Ozs7O2lCQUFJLENBQUM7Q0FDakU7QUFFRCxpRUFBZUgsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUtbmV4dGpzLy4vc3JjL2NvbW1vbi9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24uaW1wbC50c3g/Y2MyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVkJ1dHRvbiBmcm9tIFwiLi9CdXR0b24udmlld1wiO1xuaW1wb3J0IHsgSUJ1dHRvbiB9IGZyb20gXCIuL0J1dHRvbi5pbnRlcmZhY2VcIjtcblxuY29uc3QgQnV0dG9uOiBSZWFjdC5GQzxJQnV0dG9uLklQcm9wcz4gPSBwcm9wcyA9PiB7XG4gICAgcmV0dXJuIDxWQnV0dG9uIHsuLi5wcm9wc30gb25DbGljaz17KCkgPT4gYWxlcnQoXCLrgpjripQg67KE7Yq8IVwiKX0gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iXSwibmFtZXMiOlsiVkJ1dHRvbiIsIkJ1dHRvbiIsInByb3BzIiwib25DbGljayIsImFsZXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/common/components/Button/Button.impl.tsx\n");

/***/ }),

/***/ "./src/common/components/Button/Button.view.tsx":
/*!******************************************************!*\
  !*** ./src/common/components/Button/Button.view.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"@emotion/react/jsx-dev-runtime\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst VButton = (props)=>{\n    const { name , backgroundColor , fontSize , onClick  } = props;\n    return /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        css: ButtonStyle(fontSize, backgroundColor),\n        onClick: onClick,\n        children: name\n    }, void 0, false, {\n        fileName: \"/Users/ibct/Private/Web3-Authentication/src/common/components/Button/Button.view.tsx\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, undefined);\n};\nconst ButtonStyle = (fontSize, backgroundColor)=>_emotion_react__WEBPACK_IMPORTED_MODULE_1__.css`\n    background-color: ${!!backgroundColor ? backgroundColor : \"red\"};\n    font-size: ${fontSize}px;\n    width: 100px;\n    height: 50px;\n`;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VButton);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi52aWV3LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQXFDO0FBR3JDLE1BQU1DLE9BQU8sR0FBOEJDLENBQUFBLEtBQUssR0FBSTtJQUNoRCxNQUFNLEVBQUVDLElBQUksR0FBRUMsZUFBZSxHQUFFQyxRQUFRLEdBQUVDLE9BQU8sR0FBRSxHQUFHSixLQUFLO0lBQzFELHFCQUNJLHVFQUFDSyxRQUFNO1FBQ0hDLElBQUksRUFBQyxRQUFRO1FBQ2JSLEdBQUcsRUFBRVMsV0FBVyxDQUFDSixRQUFRLEVBQUVELGVBQWUsQ0FBQztRQUMzQ0UsT0FBTyxFQUFFQSxPQUFPO2tCQUVmSCxJQUFJOzs7OztpQkFDQSxDQUNYO0NBQ0w7QUFFRCxNQUFNTSxXQUFXLEdBQUcsQ0FBQ0osUUFBZ0IsRUFBRUQsZUFBd0IsR0FBS0osK0NBQUcsQ0FBQztzQkFDbEQsRUFBRSxDQUFDLENBQUNJLGVBQWUsR0FBR0EsZUFBZSxHQUFHLEtBQUssQ0FBQztlQUNyRCxFQUFFQyxRQUFRLENBQUM7OztBQUcxQixDQUFDO0FBRUQsaUVBQWVKLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JvaWxlcnBsYXRlLW5leHRqcy8uL3NyYy9jb21tb24vY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLnZpZXcudHN4P2VjNGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgeyBJQnV0dG9uIH0gZnJvbSBcIi4vQnV0dG9uLmludGVyZmFjZVwiO1xuXG5jb25zdCBWQnV0dG9uOiBSZWFjdC5GQzxJQnV0dG9uLklWUHJvcHM+ID0gcHJvcHMgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgYmFja2dyb3VuZENvbG9yLCBmb250U2l6ZSwgb25DbGljayB9ID0gcHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBjc3M9e0J1dHRvblN0eWxlKGZvbnRTaXplLCBiYWNrZ3JvdW5kQ29sb3IpfVxuICAgICAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgPlxuICAgICAgICAgICAge25hbWV9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICk7XG59O1xuXG5jb25zdCBCdXR0b25TdHlsZSA9IChmb250U2l6ZTogbnVtYmVyLCBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcpID0+IGNzc2BcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyEhYmFja2dyb3VuZENvbG9yID8gYmFja2dyb3VuZENvbG9yIDogXCJyZWRcIn07XG4gICAgZm9udC1zaXplOiAke2ZvbnRTaXplfXB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBWQnV0dG9uO1xuIl0sIm5hbWVzIjpbImNzcyIsIlZCdXR0b24iLCJwcm9wcyIsIm5hbWUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmb250U2l6ZSIsIm9uQ2xpY2siLCJidXR0b24iLCJ0eXBlIiwiQnV0dG9uU3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/common/components/Button/Button.view.tsx\n");

/***/ }),

/***/ "./src/common/components/Button/index.ts":
/*!***********************************************!*\
  !*** ./src/common/components/Button/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _Button_impl__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Button_impl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.impl */ \"./src/common/components/Button/Button.impl.tsx\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL2NvbXBvbmVudHMvQnV0dG9uL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUtbmV4dGpzLy4vc3JjL2NvbW1vbi9jb21wb25lbnRzL0J1dHRvbi9pbmRleC50cz81MDEwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9CdXR0b24uaW1wbFwiO1xuIl0sIm5hbWVzIjpbImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/common/components/Button/index.ts\n");

/***/ }),

/***/ "./src/common/components/Layout/Layout.impl.tsx":
/*!******************************************************!*\
  !*** ./src/common/components/Layout/Layout.impl.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"@emotion/react/jsx-dev-runtime\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Layout_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.view */ \"./src/common/components/Layout/Layout.view.tsx\");\n/* harmony import */ var _common_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/hooks */ \"./src/common/hooks/index.ts\");\n\n\n\nconst Layout = (props)=>{\n    (0,_common_hooks__WEBPACK_IMPORTED_MODULE_2__.usePageGuard)();\n    return /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Layout_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        ...props\n    }, void 0, false, {\n        fileName: \"/Users/ibct/Private/Web3-Authentication/src/common/components/Layout/Layout.impl.tsx\",\n        lineNumber: 8,\n        columnNumber: 12\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC5pbXBsLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQW9DO0FBRVM7QUFFN0MsTUFBTUUsTUFBTSxHQUE2QkMsQ0FBQUEsS0FBSyxHQUFJO0lBQzlDRiwyREFBWSxFQUFFLENBQUM7SUFFZixxQkFBTyx1RUFBQ0Qsb0RBQU87UUFBRSxHQUFHRyxLQUFLOzs7OztpQkFBSSxDQUFDO0NBQ2pDO0FBRUQsaUVBQWVELE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JvaWxlcnBsYXRlLW5leHRqcy8uL3NyYy9jb21tb24vY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmltcGwudHN4PzhmM2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZMYXlvdXQgZnJvbSBcIi4vTGF5b3V0LnZpZXdcIjtcbmltcG9ydCB7IElMYXlvdXQgfSBmcm9tIFwiLi9MYXlvdXQuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyB1c2VQYWdlR3VhcmQgfSBmcm9tIFwiQGNvbW1vbi9ob29rc1wiO1xuXG5jb25zdCBMYXlvdXQ6IFJlYWN0LkZDPElMYXlvdXQuSVByb3BzPiA9IHByb3BzID0+IHtcbiAgICB1c2VQYWdlR3VhcmQoKTtcblxuICAgIHJldHVybiA8VkxheW91dCB7Li4ucHJvcHN9IC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl0sIm5hbWVzIjpbIlZMYXlvdXQiLCJ1c2VQYWdlR3VhcmQiLCJMYXlvdXQiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/common/components/Layout/Layout.impl.tsx\n");

/***/ }),

/***/ "./src/common/components/Layout/Layout.view.tsx":
/*!******************************************************!*\
  !*** ./src/common/components/Layout/Layout.view.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"@emotion/react/jsx-dev-runtime\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst VLayout = ({ children  })=>{\n    return /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        css: layoutStyle,\n        children: [\n            /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                css: headerStyle,\n                children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"지갑 연결\"\n                }, void 0, false, {\n                    fileName: \"/Users/ibct/Private/Web3-Authentication/src/common/components/Layout/Layout.view.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ibct/Private/Web3-Authentication/src/common/components/Layout/Layout.view.tsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                css: mainStyle,\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/ibct/Private/Web3-Authentication/src/common/components/Layout/Layout.view.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                css: footerStyle,\n                children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Web3-Authentication\"\n                }, void 0, false, {\n                    fileName: \"/Users/ibct/Private/Web3-Authentication/src/common/components/Layout/Layout.view.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ibct/Private/Web3-Authentication/src/common/components/Layout/Layout.view.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ibct/Private/Web3-Authentication/src/common/components/Layout/Layout.view.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\nconst layoutStyle = _emotion_react__WEBPACK_IMPORTED_MODULE_1__.css`\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n  flex-direction: column;\n  align-items: center;\n`;\nconst headerStyle = _emotion_react__WEBPACK_IMPORTED_MODULE_1__.css`\n  width: 100%;\n  height: 10%;\n  padding: 5px;\n  text-align: center;\n`;\nconst mainStyle = _emotion_react__WEBPACK_IMPORTED_MODULE_1__.css`\n  width: 100%;\n  height: 80%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n`;\nconst footerStyle = _emotion_react__WEBPACK_IMPORTED_MODULE_1__.css`\n  width: 100%;\n  height: 10%;\n  background-color: #000;\n  padding: 30px;\n  text-align: center;\n  color: #fff;\n`;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VLayout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC52aWV3LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQXFDO0FBSXJDLE1BQU1DLE9BQU8sR0FBOEIsQ0FBQyxFQUFFQyxRQUFRLEdBQUUsR0FBSztJQUMzRCxxQkFDRSx1RUFBQ0MsS0FBRztRQUFDSCxHQUFHLEVBQUVJLFdBQVc7OzBCQUNuQix1RUFBQ0MsUUFBTTtnQkFBQ0wsR0FBRyxFQUFFTSxXQUFXOzBCQUN0QixxRkFBQ0MsSUFBRTs4QkFBQyxPQUFLOzs7Ozs2QkFBSzs7Ozs7eUJBQ1A7MEJBQ1QsdUVBQUNDLE1BQUk7Z0JBQUNSLEdBQUcsRUFBRVMsU0FBUzswQkFBR1AsUUFBUTs7Ozs7eUJBQVE7MEJBQ3ZDLHVFQUFDUSxRQUFNO2dCQUFDVixHQUFHLEVBQUVXLFdBQVc7MEJBQ3RCLHFGQUFDSixJQUFFOzhCQUFDLHFCQUFtQjs7Ozs7NkJBQUs7Ozs7O3lCQUNyQjs7Ozs7O2lCQUNMLENBQ047Q0FDSDtBQUVELE1BQU1ILFdBQVcsR0FBR0osK0NBQUcsQ0FBQzs7Ozs7O0FBTXhCLENBQUM7QUFFRCxNQUFNTSxXQUFXLEdBQUdOLCtDQUFHLENBQUM7Ozs7O0FBS3hCLENBQUM7QUFFRCxNQUFNUyxTQUFTLEdBQUdULCtDQUFHLENBQUM7Ozs7OztBQU10QixDQUFDO0FBRUQsTUFBTVcsV0FBVyxHQUFHWCwrQ0FBRyxDQUFDOzs7Ozs7O0FBT3hCLENBQUM7QUFFRCxpRUFBZUMsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUtbmV4dGpzLy4vc3JjL2NvbW1vbi9jb21wb25lbnRzL0xheW91dC9MYXlvdXQudmlldy50c3g/NGNlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgSUxheW91dCB9IGZyb20gXCIuL0xheW91dC5pbnRlcmZhY2VcIjtcblxuY29uc3QgVkxheW91dDogUmVhY3QuRkM8SUxheW91dC5JVlByb3BzPiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNzcz17bGF5b3V0U3R5bGV9PlxuICAgICAgPGhlYWRlciBjc3M9e2hlYWRlclN0eWxlfT5cbiAgICAgICAgPGgyPuyngOqwkSDsl7DqsrA8L2gyPlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8bWFpbiBjc3M9e21haW5TdHlsZX0+e2NoaWxkcmVufTwvbWFpbj5cbiAgICAgIDxmb290ZXIgY3NzPXtmb290ZXJTdHlsZX0+XG4gICAgICAgIDxoMj5XZWIzLUF1dGhlbnRpY2F0aW9uPC9oMj5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgbGF5b3V0U3R5bGUgPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IGhlYWRlclN0eWxlID0gY3NzYFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMCU7XG4gIHBhZGRpbmc6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuYDtcblxuY29uc3QgbWFpblN0eWxlID0gY3NzYFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBmb290ZXJTdHlsZSA9IGNzc2BcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgVkxheW91dDtcbiJdLCJuYW1lcyI6WyJjc3MiLCJWTGF5b3V0IiwiY2hpbGRyZW4iLCJkaXYiLCJsYXlvdXRTdHlsZSIsImhlYWRlciIsImhlYWRlclN0eWxlIiwiaDIiLCJtYWluIiwibWFpblN0eWxlIiwiZm9vdGVyIiwiZm9vdGVyU3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/common/components/Layout/Layout.view.tsx\n");

/***/ }),

/***/ "./src/common/components/Layout/index.ts":
/*!***********************************************!*\
  !*** ./src/common/components/Layout/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _Layout_impl__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Layout_impl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.impl */ \"./src/common/components/Layout/Layout.impl.tsx\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL2NvbXBvbmVudHMvTGF5b3V0L2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUtbmV4dGpzLy4vc3JjL2NvbW1vbi9jb21wb25lbnRzL0xheW91dC9pbmRleC50cz9hMWUwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9MYXlvdXQuaW1wbFwiO1xuIl0sIm5hbWVzIjpbImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/common/components/Layout/index.ts\n");

/***/ }),

/***/ "./src/common/components/index.ts":
/*!****************************************!*\
  !*** ./src/common/components/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Button\": () => (/* reexport safe */ _Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"Layout\": () => (/* reexport safe */ _Layout__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout */ \"./src/common/components/Layout/index.ts\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ \"./src/common/components/Button/index.ts\");\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL2NvbXBvbmVudHMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE2QztBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUtbmV4dGpzLy4vc3JjL2NvbW1vbi9jb21wb25lbnRzL2luZGV4LnRzPzRhMjIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgZGVmYXVsdCBhcyBMYXlvdXQgfSBmcm9tIFwiLi9MYXlvdXRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQnV0dG9uIH0gZnJvbSBcIi4vQnV0dG9uXCI7XG4iXSwibmFtZXMiOlsiZGVmYXVsdCIsIkxheW91dCIsIkJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/common/components/index.ts\n");

/***/ }),

/***/ "./src/common/hooks/index.ts":
/*!***********************************!*\
  !*** ./src/common/hooks/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"usePageGuard\": () => (/* reexport safe */ _usePageGuard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _usePageGuard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usePageGuard */ \"./src/common/hooks/usePageGuard.ts\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL2hvb2tzL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXlEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUtbmV4dGpzLy4vc3JjL2NvbW1vbi9ob29rcy9pbmRleC50cz9lZDAzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlUGFnZUd1YXJkIH0gZnJvbSBcIi4vdXNlUGFnZUd1YXJkXCI7XG4iXSwibmFtZXMiOlsiZGVmYXVsdCIsInVzZVBhZ2VHdWFyZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/common/hooks/index.ts\n");

/***/ }),

/***/ "./src/common/hooks/usePageGuard.ts":
/*!******************************************!*\
  !*** ./src/common/hooks/usePageGuard.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ usePageGuard)\n/* harmony export */ });\n/* harmony import */ var _constants_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @constants/path */ \"./src/constants/path.ts\");\n/* harmony import */ var _recoil_loggedInState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @recoil/loggedInState */ \"./src/recoil/loggedInState.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction usePageGuard() {\n    const isLoggedIn = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilValue)(_recoil_loggedInState__WEBPACK_IMPORTED_MODULE_1__.loggedInState);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (router.pathname === _constants_path__WEBPACK_IMPORTED_MODULE_0__[\"default\"].MAIN && !isLoggedIn) {\n            alert(\"로그인 해주세요.\");\n            router.push(_constants_path__WEBPACK_IMPORTED_MODULE_0__[\"default\"].HOME);\n        }\n    }, [\n        isLoggedIn\n    ]);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL2hvb2tzL3VzZVBhZ2VHdWFyZC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBbUM7QUFDbUI7QUFDZDtBQUNOO0FBQ007QUFFekIsU0FBU0ssWUFBWSxHQUFHO0lBQ25DLE1BQU1DLFVBQVUsR0FBR0Ysc0RBQWMsQ0FBQ0gsZ0VBQWEsQ0FBQztJQUNoRCxNQUFNTSxNQUFNLEdBQUdMLHNEQUFTLEVBQUU7SUFFMUJDLGdEQUFTLENBQUMsSUFBTTtRQUNaLElBQUlJLE1BQU0sQ0FBQ0MsUUFBUSxLQUFLUiw0REFBUyxJQUFJLENBQUNNLFVBQVUsRUFBRTtZQUM5Q0ksS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ25CSCxNQUFNLENBQUNJLElBQUksQ0FBQ1gsNERBQVMsQ0FBQyxDQUFDO1NBQzFCO0tBQ0osRUFBRTtRQUFDTSxVQUFVO0tBQUMsQ0FBQyxDQUFDO0NBQ3BCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUtbmV4dGpzLy4vc3JjL2NvbW1vbi9ob29rcy91c2VQYWdlR3VhcmQudHM/NmIxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUEFUSCBmcm9tIFwiQGNvbnN0YW50cy9wYXRoXCI7XG5pbXBvcnQgeyBsb2dnZWRJblN0YXRlIH0gZnJvbSBcIkByZWNvaWwvbG9nZ2VkSW5TdGF0ZVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJlY29pbFZhbHVlIH0gZnJvbSBcInJlY29pbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VQYWdlR3VhcmQoKSB7XG4gICAgY29uc3QgaXNMb2dnZWRJbiA9IHVzZVJlY29pbFZhbHVlKGxvZ2dlZEluU3RhdGUpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHJvdXRlci5wYXRobmFtZSA9PT0gUEFUSC5NQUlOICYmICFpc0xvZ2dlZEluKSB7XG4gICAgICAgICAgICBhbGVydChcIuuhnOq3uOyduCDtlbTso7zshLjsmpQuXCIpO1xuICAgICAgICAgICAgcm91dGVyLnB1c2goUEFUSC5IT01FKTtcbiAgICAgICAgfVxuICAgIH0sIFtpc0xvZ2dlZEluXSk7XG59XG4iXSwibmFtZXMiOlsiUEFUSCIsImxvZ2dlZEluU3RhdGUiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VSZWNvaWxWYWx1ZSIsInVzZVBhZ2VHdWFyZCIsImlzTG9nZ2VkSW4iLCJyb3V0ZXIiLCJwYXRobmFtZSIsIk1BSU4iLCJhbGVydCIsInB1c2giLCJIT01FIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/common/hooks/usePageGuard.ts\n");

/***/ }),

/***/ "./src/constants/path.ts":
/*!*******************************!*\
  !*** ./src/constants/path.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst PATH = {\n    HOME: \"/\",\n    MAIN: \"/main\",\n    API: {\n        TEAM: \"/api/team\",\n        LUNCH: \"/api/lunch\"\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PATH);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uc3RhbnRzL3BhdGgudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLElBQUksR0FBRztJQUNUQyxJQUFJLEVBQUUsR0FBRztJQUNUQyxJQUFJLEVBQUUsT0FBTztJQUNiQyxHQUFHLEVBQUU7UUFDREMsSUFBSSxFQUFFLFdBQVc7UUFDakJDLEtBQUssRUFBRSxZQUFZO0tBQ3RCO0NBQ0o7QUFFRCxpRUFBZUwsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUtbmV4dGpzLy4vc3JjL2NvbnN0YW50cy9wYXRoLnRzPzg5ZWIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUEFUSCA9IHtcbiAgICBIT01FOiBcIi9cIixcbiAgICBNQUlOOiBcIi9tYWluXCIsXG4gICAgQVBJOiB7XG4gICAgICAgIFRFQU06IFwiL2FwaS90ZWFtXCIsXG4gICAgICAgIExVTkNIOiBcIi9hcGkvbHVuY2hcIixcbiAgICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUEFUSDtcbiJdLCJuYW1lcyI6WyJQQVRIIiwiSE9NRSIsIk1BSU4iLCJBUEkiLCJURUFNIiwiTFVOQ0giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/constants/path.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"@emotion/react/jsx-dev-runtime\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/components */ \"./src/common/components/index.ts\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClient();\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"WALLET CONNECTION\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ibct/Private/Web3-Authentication/src/pages/_app.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"This is Next.js boilerplate used in IBCT dev team\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ibct/Private/Web3-Authentication/src/pages/_app.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ibct/Private/Web3-Authentication/src/pages/_app.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ibct/Private/Web3-Authentication/src/pages/_app.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClientProvider, {\n                client: queryClient,\n                children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recoil__WEBPACK_IMPORTED_MODULE_4__.RecoilRoot, {\n                    children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_components__WEBPACK_IMPORTED_MODULE_1__.Layout, {\n                        children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                            ...pageProps\n                        }, void 0, false, {\n                            fileName: \"/Users/ibct/Private/Web3-Authentication/src/pages/_app.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ibct/Private/Web3-Authentication/src/pages/_app.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ibct/Private/Web3-Authentication/src/pages/_app.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ibct/Private/Web3-Authentication/src/pages/_app.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTRDO0FBQzZCO0FBRTVDO0FBQ087QUFFcEMsTUFBTUssV0FBVyxHQUFHLElBQUlKLDhEQUFXLEVBQUU7QUFFckMsU0FBU0ssR0FBRyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFZLEVBQUU7SUFDL0MscUJBQ0U7OzBCQUNFLHVFQUFDTCxrREFBSTs7a0NBQ0gsdUVBQUNNLE9BQUs7a0NBQUMsbUJBQWlCOzs7Ozs0QkFBUTtrQ0FDaEMsdUVBQUNDLE1BQUk7d0JBQ0hDLElBQUksRUFBQyxhQUFhO3dCQUNsQkMsT0FBTyxFQUFDLG1EQUFtRDs7Ozs7NEJBQzNEO2tDQUNGLHVFQUFDQyxNQUFJO3dCQUFDQyxHQUFHLEVBQUMsTUFBTTt3QkFBQ0MsSUFBSSxFQUFDLGNBQWM7Ozs7OzRCQUFHOzs7Ozs7b0JBQ2xDOzBCQUNQLHVFQUFDYixzRUFBbUI7Z0JBQUNjLE1BQU0sRUFBRVgsV0FBVzswQkFDdEMscUZBQUNELDhDQUFVOzhCQUNULHFGQUFDSixzREFBTTtrQ0FDTCxxRkFBQ08sU0FBUzs0QkFBRSxHQUFHQyxTQUFTOzs7OztnQ0FBSTs7Ozs7NEJBQ3JCOzs7Ozt3QkFDRTs7Ozs7b0JBQ087O29CQUNyQixDQUNIO0NBQ0g7QUFFRCxpRUFBZUYsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUtbmV4dGpzLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSBcIkBjb21tb24vY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgUXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXIgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBSZWNvaWxSb290IH0gZnJvbSBcInJlY29pbFwiO1xuXG5jb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCgpO1xuXG5mdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPldBTExFVCBDT05ORUNUSU9OPC90aXRsZT5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNvbnRlbnQ9XCJUaGlzIGlzIE5leHQuanMgYm9pbGVycGxhdGUgdXNlZCBpbiBJQkNUIGRldiB0ZWFtXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+XG4gICAgICAgIDxSZWNvaWxSb290PlxuICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIDwvUmVjb2lsUm9vdD5cbiAgICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm5hbWVzIjpbIkxheW91dCIsIlF1ZXJ5Q2xpZW50IiwiUXVlcnlDbGllbnRQcm92aWRlciIsIkhlYWQiLCJSZWNvaWxSb290IiwicXVlcnlDbGllbnQiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwiY2xpZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/recoil/idAtom.ts":
/*!******************************!*\
  !*** ./src/recoil/idAtom.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"idState\": () => (/* binding */ idState)\n/* harmony export */ });\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);\n\nconst idState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({\n    key: \"idState\",\n    default: \"\"\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVjb2lsL2lkQXRvbS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEI7QUFFdkIsTUFBTUMsT0FBTyxHQUFHRCw0Q0FBSSxDQUFTO0lBQ2hDRSxHQUFHLEVBQUUsU0FBUztJQUNkQyxPQUFPLEVBQUUsRUFBRTtDQUNkLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JvaWxlcnBsYXRlLW5leHRqcy8uL3NyYy9yZWNvaWwvaWRBdG9tLnRzP2ZjNzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXRvbSB9IGZyb20gXCJyZWNvaWxcIjtcblxuZXhwb3J0IGNvbnN0IGlkU3RhdGUgPSBhdG9tPHN0cmluZz4oe1xuICAgIGtleTogXCJpZFN0YXRlXCIsXG4gICAgZGVmYXVsdDogXCJcIixcbn0pO1xuIl0sIm5hbWVzIjpbImF0b20iLCJpZFN0YXRlIiwia2V5IiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/recoil/idAtom.ts\n");

/***/ }),

/***/ "./src/recoil/loggedInState.ts":
/*!*************************************!*\
  !*** ./src/recoil/loggedInState.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loggedInState\": () => (/* binding */ loggedInState)\n/* harmony export */ });\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _idAtom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./idAtom */ \"./src/recoil/idAtom.ts\");\n\n\nconst loggedInState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.selector)({\n    key: \"loggedInState\",\n    get: ({ get  })=>{\n        const id = get(_idAtom__WEBPACK_IMPORTED_MODULE_1__.idState);\n        if (id === \"\") return false;\n        return true;\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVjb2lsL2xvZ2dlZEluU3RhdGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFrQztBQUNDO0FBRTVCLE1BQU1FLGFBQWEsR0FBR0YsZ0RBQVEsQ0FBVTtJQUMzQ0csR0FBRyxFQUFFLGVBQWU7SUFDcEJDLEdBQUcsRUFBRSxDQUFDLEVBQUVBLEdBQUcsR0FBRSxHQUFLO1FBQ2QsTUFBTUMsRUFBRSxHQUFHRCxHQUFHLENBQUNILDRDQUFPLENBQUM7UUFFdkIsSUFBSUksRUFBRSxLQUFLLEVBQUUsRUFBRSxPQUFPLEtBQUssQ0FBQztRQUM1QixPQUFPLElBQUksQ0FBQztLQUNmO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUtbmV4dGpzLy4vc3JjL3JlY29pbC9sb2dnZWRJblN0YXRlLnRzPzZlMDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2VsZWN0b3IgfSBmcm9tIFwicmVjb2lsXCI7XG5pbXBvcnQgeyBpZFN0YXRlIH0gZnJvbSBcIi4vaWRBdG9tXCI7XG5cbmV4cG9ydCBjb25zdCBsb2dnZWRJblN0YXRlID0gc2VsZWN0b3I8Ym9vbGVhbj4oe1xuICAgIGtleTogXCJsb2dnZWRJblN0YXRlXCIsXG4gICAgZ2V0OiAoeyBnZXQgfSkgPT4ge1xuICAgICAgICBjb25zdCBpZCA9IGdldChpZFN0YXRlKTtcblxuICAgICAgICBpZiAoaWQgPT09IFwiXCIpIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbn0pO1xuIl0sIm5hbWVzIjpbInNlbGVjdG9yIiwiaWRTdGF0ZSIsImxvZ2dlZEluU3RhdGUiLCJrZXkiLCJnZXQiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/recoil/loggedInState.ts\n");

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ "@emotion/react/jsx-dev-runtime":
/*!*************************************************!*\
  !*** external "@emotion/react/jsx-dev-runtime" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("@emotion/react/jsx-dev-runtime");

/***/ }),

/***/ "@tanstack/react-query":
/*!****************************************!*\
  !*** external "@tanstack/react-query" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@tanstack/react-query");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "recoil":
/*!*************************!*\
  !*** external "recoil" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("recoil");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();