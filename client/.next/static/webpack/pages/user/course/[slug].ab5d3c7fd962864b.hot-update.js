"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user/course/[slug]",{

/***/ "./pages/user/course/[slug].js":
/*!*************************************!*\
  !*** ./pages/user/course/[slug].js ***!
  \*************************************/
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_routes_StudentRoute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/routes/StudentRoute */ \"./components/routes/StudentRoute.js\");\n/* harmony import */ var _barrel_optimize_names_Avatar_Button_Menu_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Avatar,Button,Menu!=!antd */ \"__barrel_optimize__?names=Avatar,Button,Menu!=!./node_modules/antd/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst SingleCourse = ()=>{\n    _s();\n    const [clicked, setClicked] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(-1);\n    const [collapsed, setCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [course, setCourse] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        lessons: []\n    });\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { slug } = router.query;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (slug) loadCourse();\n    }, [\n        slug\n    ]);\n    const loadCourse = async ()=>{\n        const { data } = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"/api/user/course/\".concat(slug));\n        setCourse(data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_routes_StudentRoute__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    maxWidth: 320\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_Button_Menu_antd__WEBPACK_IMPORTED_MODULE_5__.Menu, {\n                    defaultSelectedKeys: [\n                        clicked\n                    ],\n                    inlineCollapsed: collapsed,\n                    style: {\n                        height: \"80vh\",\n                        overflow: \"scroll\"\n                    },\n                    children: course.lessons.map((lesson, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                            children: lesson.title\n                        }, void 0, false, {\n                            fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\user\\\\course\\\\[slug].js\",\n                            lineNumber: 37,\n                            columnNumber: 29\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\user\\\\course\\\\[slug].js\",\n                    lineNumber: 31,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\user\\\\course\\\\[slug].js\",\n                lineNumber: 30,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\user\\\\course\\\\[slug].js\",\n            lineNumber: 29,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\user\\\\course\\\\[slug].js\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, undefined);\n};\n_s(SingleCourse, \"o+vtyc6SpjQWmzA1S0LHOplvEhc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = SingleCourse;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleCourse);\nvar _c;\n$RefreshReg$(_c, \"SingleCourse\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyL2NvdXJzZS9bc2x1Z10uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXVDO0FBQ1M7QUFDdEI7QUFDeUM7QUFDekI7QUFDMUMsTUFBTVMsZUFBZTs7SUFFakIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdSLCtDQUFRQSxDQUFDLENBQUM7SUFDeEMsTUFBTSxDQUFDUyxXQUFXQyxhQUFhLEdBQUdWLCtDQUFRQSxDQUFDO0lBQzNDLE1BQUssQ0FBQ1csU0FBVUMsV0FBVyxHQUFDWiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFLLENBQUNhLFFBQVFDLFVBQVUsR0FBQ2QsK0NBQVFBLENBQUM7UUFBQ2UsU0FBUSxFQUFFO0lBQUE7SUFDN0MsTUFBTUMsU0FBUW5CLHNEQUFTQTtJQUN2QixNQUFNLEVBQUNvQixJQUFJLEVBQUMsR0FBQ0QsT0FBT0UsS0FBSztJQUV6Qm5CLGdEQUFTQSxDQUFDO1FBRU4sSUFBR2tCLE1BQUtFO0lBRVosR0FBRTtRQUFDRjtLQUFLO0lBRVIsTUFBTUUsYUFBVztRQUViLE1BQUssRUFBQ0MsSUFBSSxFQUFDLEdBQUMsTUFBTW5CLGlEQUFTLENBQUMsb0JBQXlCLE9BQUxnQjtRQUNoREgsVUFBVU07SUFDZDtJQUVBLHFCQUNJLDhEQUFDbEIsdUVBQVlBO2tCQUNULDRFQUFDb0I7WUFBSUMsV0FBVTtzQkFDWCw0RUFBQ0Q7Z0JBQUlFLE9BQU87b0JBQUVDLFVBQVU7Z0JBQUc7MEJBQ3ZCLDRFQUFDckIsZ0ZBQUlBO29CQUNMc0IscUJBQXFCO3dCQUFDbkI7cUJBQVE7b0JBQzlCb0IsaUJBQWlCbEI7b0JBQ2pCZSxPQUFPO3dCQUFFSSxRQUFRO3dCQUFRQyxVQUFVO29CQUFROzhCQUV0Q2hCLE9BQU9FLE9BQU8sQ0FBQ2UsR0FBRyxDQUFDLENBQUNDLFFBQVFDLHNCQUN6Qiw4REFBQ0M7c0NBQ0lGLE9BQU9HLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTdDO0dBeENNNUI7O1FBTVlULGtEQUFTQTs7O0tBTnJCUztBQTBDTiwrREFBZ0JBLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci9jb3Vyc2UvW3NsdWddLmpzPzE1MzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IHsgdXNlLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgU3R1ZGVudFJvdXRlIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3JvdXRlcy9TdHVkZW50Um91dGVcIjtcclxuaW1wb3J0IHtCdXR0b24sIE1lbnUsIEF2YXRhcn0gZnJvbSAnYW50ZCc7XHJcbmNvbnN0IFNpbmdsZUNvdXJzZSA9ICgpPT5cclxue1xyXG4gICAgY29uc3QgW2NsaWNrZWQsIHNldENsaWNrZWRdID0gdXNlU3RhdGUoLTEpO1xyXG4gICAgY29uc3QgW2NvbGxhcHNlZCwgc2V0Q29sbGFwc2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0W2xvYWRpbmcgLCBzZXRMb2FkaW5nXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFtjb3Vyc2UsIHNldENvdXJzZV09dXNlU3RhdGUoe2xlc3NvbnM6W119KTtcclxuICAgIGNvbnN0IHJvdXRlciA9dXNlUm91dGVyKClcclxuICAgIGNvbnN0IHtzbHVnfT1yb3V0ZXIucXVlcnk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT5cclxuICAgIHtcclxuICAgICAgICBpZihzbHVnKWxvYWRDb3Vyc2UoKTtcclxuXHJcbiAgICB9LFtzbHVnXSlcclxuXHJcbiAgICBjb25zdCBsb2FkQ291cnNlPWFzeW5jKCk9PlxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0e2RhdGF9PWF3YWl0IGF4aW9zLmdldChgL2FwaS91c2VyL2NvdXJzZS8ke3NsdWd9YCk7XHJcbiAgICAgICAgc2V0Q291cnNlKGRhdGEpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTdHVkZW50Um91dGU+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1heFdpZHRoOiAzMjB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudSBcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0U2VsZWN0ZWRLZXlzPXtbY2xpY2tlZF19XHJcbiAgICAgICAgICAgICAgICAgICAgaW5saW5lQ29sbGFwc2VkPXtjb2xsYXBzZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjgwdmhcIiwgb3ZlcmZsb3c6IFwic2Nyb2xsXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvdXJzZS5sZXNzb25zLm1hcCgobGVzc29uLCBpbmRleCk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsZXNzb24udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1N0dWRlbnRSb3V0ZT5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgIFNpbmdsZUNvdXJzZSJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiU3R1ZGVudFJvdXRlIiwiQnV0dG9uIiwiTWVudSIsIkF2YXRhciIsIlNpbmdsZUNvdXJzZSIsImNsaWNrZWQiLCJzZXRDbGlja2VkIiwiY29sbGFwc2VkIiwic2V0Q29sbGFwc2VkIiwibG9hZGluZyIsInNldExvYWRpbmciLCJjb3Vyc2UiLCJzZXRDb3Vyc2UiLCJsZXNzb25zIiwicm91dGVyIiwic2x1ZyIsInF1ZXJ5IiwibG9hZENvdXJzZSIsImRhdGEiLCJnZXQiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsIm1heFdpZHRoIiwiZGVmYXVsdFNlbGVjdGVkS2V5cyIsImlubGluZUNvbGxhcHNlZCIsImhlaWdodCIsIm92ZXJmbG93IiwibWFwIiwibGVzc29uIiwiaW5kZXgiLCJJdGVtIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/user/course/[slug].js\n"));

/***/ })

});