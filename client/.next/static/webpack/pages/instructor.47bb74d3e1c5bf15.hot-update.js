"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/instructor",{

/***/ "./components/nav/InstructorNav.js":
/*!*****************************************!*\
  !*** ./components/nav/InstructorNav.js ***!
  \*****************************************/
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst InstructorNav = ()=>{\n    _s();\n    const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n         true && setCurrent(window.location.pathname);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"nav flex-column nav-pills mt-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__, {\n                href: \"/instructor\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"nav-link active\",\n                    children: \"Dashboard\"\n                }, void 0, false, {\n                    fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\components\\\\nav\\\\InstructorNav.js\",\n                    lineNumber: 15,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\components\\\\nav\\\\InstructorNav.js\",\n                lineNumber: 13,\n                columnNumber: 10\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__, {\n                href: \"/instructor\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"nav-link active\",\n                    children: \"Course Create\"\n                }, void 0, false, {\n                    fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\components\\\\nav\\\\InstructorNav.js\",\n                    lineNumber: 20,\n                    columnNumber: 15\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\components\\\\nav\\\\InstructorNav.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\components\\\\nav\\\\InstructorNav.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_s(InstructorNav, \"lPekgOwCkugqeSOEhIPIsdmCF3w=\");\n_c = InstructorNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InstructorNav);\nvar _c;\n$RefreshReg$(_c, \"InstructorNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdi9JbnN0cnVjdG9yTmF2LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFpRTtBQUNyQztBQUU1QixNQUFNSyxnQkFBZ0I7O0lBRXBCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSiwrQ0FBUUEsQ0FBQztJQUV2Q0QsZ0RBQVNBLENBQUM7UUFDUk0sS0FBZSxJQUFJRCxXQUFXRyxPQUFPQyxRQUFRLENBQUNDLFFBQVE7SUFDeEQ7SUFDQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1YsOERBQUNWLHNDQUFJQTtnQkFBQ1csTUFBSzswQkFFSiw0RUFBQ0M7b0JBQUVGLFdBQVU7OEJBQWtCOzs7Ozs7Ozs7OzswQkFHbkMsOERBQUNWLHNDQUFJQTtnQkFBQ1csTUFBSzswQkFFVCw0RUFBQ0M7b0JBQUVGLFdBQVU7OEJBQWtCOzs7Ozs7Ozs7Ozs7Ozs7OztBQUs3QztHQXJCTVQ7S0FBQUE7QUF1Qk4sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYvSW5zdHJ1Y3Rvck5hdi5qcz8xMGVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VEZWJ1Z1ZhbHVlLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IEluc3RydWN0b3JOYXYgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcHJvY2Vzcy5icm93c2VyICYmIHNldEN1cnJlbnQod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKVxyXG4gIH0pXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSduYXYgZmxleC1jb2x1bW4gbmF2LXBpbGxzIG10LTInPlxyXG4gICAgICAgICA8TGluayBocmVmPVwiL2luc3RydWN0b3JcIj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbmF2LWxpbmsgYWN0aXZlJz5EYXNoYm9hcmQ8L3A+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9pbnN0cnVjdG9yXCI+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSduYXYtbGluayBhY3RpdmUnPkNvdXJzZSBDcmVhdGU8L3A+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnN0cnVjdG9yTmF2O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VEZWJ1Z1ZhbHVlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiSW5zdHJ1Y3Rvck5hdiIsImN1cnJlbnQiLCJzZXRDdXJyZW50IiwicHJvY2VzcyIsImJyb3dzZXIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiaHJlZiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/nav/InstructorNav.js\n"));

/***/ })

});