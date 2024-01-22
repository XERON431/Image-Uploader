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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_routes_StudentRoute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/routes/StudentRoute */ \"./components/routes/StudentRoute.js\");\n/* harmony import */ var _barrel_optimize_names_Avatar_Button_Menu_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Avatar,Button,Menu!=!antd */ \"__barrel_optimize__?names=Avatar,Button,Menu!=!./node_modules/antd/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst { item } = _barrel_optimize_names_Avatar_Button_Menu_antd__WEBPACK_IMPORTED_MODULE_4__.Menu;\nconst SingleCourse = ()=>{\n    _s();\n    const [clicked, setClicked] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(-1);\n    const [collapsed, setCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [course, setCourse] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        lessons: []\n    });\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { slug } = router.query;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (slug) loadCourse();\n    }, [\n        slug\n    ]);\n    const loadCourse = async ()=>{\n        const { data } = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"/api/user/course/\".concat(slug));\n        setCourse(data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_routes_StudentRoute__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        maxWidth: 320\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_Button_Menu_antd__WEBPACK_IMPORTED_MODULE_4__.Menu, {\n                        defaultSelectedKeys: [\n                            clicked\n                        ],\n                        inlineCollapsed: collapsed,\n                        style: {\n                            height: \"80vh\",\n                            overflow: \"scroll\"\n                        },\n                        children: course.lessons.map((lesson, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                                onClick: ()=>setClicked(index),\n                                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_Button_Menu_antd__WEBPACK_IMPORTED_MODULE_4__.Avatar, {\n                                    children: index + 1\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\user\\\\course\\\\[slug].js\",\n                                    lineNumber: 41,\n                                    columnNumber: 35\n                                }, void 0),\n                                children: lesson.title.substring(0, 30)\n                            }, index, false, {\n                                fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\user\\\\course\\\\[slug].js\",\n                                lineNumber: 38,\n                                columnNumber: 29\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\user\\\\course\\\\[slug].js\",\n                        lineNumber: 32,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\user\\\\course\\\\[slug].js\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                    fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\user\\\\course\\\\[slug].js\",\n                    lineNumber: 48,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\user\\\\course\\\\[slug].js\",\n            lineNumber: 30,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\user\\\\course\\\\[slug].js\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, undefined);\n};\n_s(SingleCourse, \"o+vtyc6SpjQWmzA1S0LHOplvEhc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = SingleCourse;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleCourse);\nvar _c;\n$RefreshReg$(_c, \"SingleCourse\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyL2NvdXJzZS9bc2x1Z10uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXVDO0FBQ1M7QUFDdEI7QUFDeUM7QUFDekI7QUFDMUMsTUFBTSxFQUFDUyxJQUFJLEVBQUMsR0FBR0YsZ0ZBQUlBO0FBQ25CLE1BQU1HLGVBQWU7O0lBRWpCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQyxDQUFDO0lBQ3hDLE1BQU0sQ0FBQ1UsV0FBV0MsYUFBYSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFLLENBQUNZLFNBQVVDLFdBQVcsR0FBQ2IsK0NBQVFBLENBQUM7SUFDckMsTUFBSyxDQUFDYyxRQUFRQyxVQUFVLEdBQUNmLCtDQUFRQSxDQUFDO1FBQUNnQixTQUFRLEVBQUU7SUFBQTtJQUM3QyxNQUFNQyxTQUFRcEIsc0RBQVNBO0lBQ3ZCLE1BQU0sRUFBQ3FCLElBQUksRUFBQyxHQUFDRCxPQUFPRSxLQUFLO0lBRXpCcEIsZ0RBQVNBLENBQUM7UUFFTixJQUFHbUIsTUFBS0U7SUFFWixHQUFFO1FBQUNGO0tBQUs7SUFFUixNQUFNRSxhQUFXO1FBRWIsTUFBSyxFQUFDQyxJQUFJLEVBQUMsR0FBQyxNQUFNcEIsaURBQVMsQ0FBQyxvQkFBeUIsT0FBTGlCO1FBQ2hESCxVQUFVTTtJQUNkO0lBRUEscUJBQ0ksOERBQUNuQix1RUFBWUE7a0JBQ1QsNEVBQUNxQjtZQUFJQyxXQUFVOzs4QkFDWCw4REFBQ0Q7b0JBQUlFLE9BQU87d0JBQUVDLFVBQVU7b0JBQUc7OEJBQ3ZCLDRFQUFDdEIsZ0ZBQUlBO3dCQUNMdUIscUJBQXFCOzRCQUFDbkI7eUJBQVE7d0JBQzlCb0IsaUJBQWlCbEI7d0JBQ2pCZSxPQUFPOzRCQUFFSSxRQUFROzRCQUFRQyxVQUFVO3dCQUFRO2tDQUV0Q2hCLE9BQU9FLE9BQU8sQ0FBQ2UsR0FBRyxDQUFDLENBQUNDLFFBQVFDLHNCQUN6Qiw4REFBQ0M7Z0NBQ0RDLFNBQVMsSUFBTTFCLFdBQVd3QjtnQ0FFMUJHLG9CQUFNLDhEQUFDL0Isa0ZBQU1BOzhDQUFFNEIsUUFBTTs7Ozs7OzBDQUVoQkQsT0FBT0ssS0FBSyxDQUFDQyxTQUFTLENBQUMsR0FBRTsrQkFIekJMOzs7Ozs7Ozs7Ozs7Ozs7OEJBUWpCLDhEQUFDVjs7Ozs7Ozs7Ozs7Ozs7OztBQU1qQjtHQS9DTWhCOztRQU1ZVixrREFBU0E7OztLQU5yQlU7QUFpRE4sK0RBQWdCQSxZQUFZQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXIvY291cnNlL1tzbHVnXS5qcz8xNTM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCB7IHVzZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFN0dWRlbnRSb3V0ZSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9yb3V0ZXMvU3R1ZGVudFJvdXRlXCI7XHJcbmltcG9ydCB7QnV0dG9uLCBNZW51LCBBdmF0YXJ9IGZyb20gJ2FudGQnO1xyXG5jb25zdCB7aXRlbX0gPSBNZW51O1xyXG5jb25zdCBTaW5nbGVDb3Vyc2UgPSAoKT0+XHJcbntcclxuICAgIGNvbnN0IFtjbGlja2VkLCBzZXRDbGlja2VkXSA9IHVzZVN0YXRlKC0xKTtcclxuICAgIGNvbnN0IFtjb2xsYXBzZWQsIHNldENvbGxhcHNlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFtsb2FkaW5nICwgc2V0TG9hZGluZ109dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3RbY291cnNlLCBzZXRDb3Vyc2VdPXVzZVN0YXRlKHtsZXNzb25zOltdfSk7XHJcbiAgICBjb25zdCByb3V0ZXIgPXVzZVJvdXRlcigpXHJcbiAgICBjb25zdCB7c2x1Z309cm91dGVyLnF1ZXJ5O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+XHJcbiAgICB7XHJcbiAgICAgICAgaWYoc2x1Zylsb2FkQ291cnNlKCk7XHJcblxyXG4gICAgfSxbc2x1Z10pXHJcblxyXG4gICAgY29uc3QgbG9hZENvdXJzZT1hc3luYygpPT5cclxuICAgIHtcclxuICAgICAgICBjb25zdHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYC9hcGkvdXNlci9jb3Vyc2UvJHtzbHVnfWApO1xyXG4gICAgICAgIHNldENvdXJzZShkYXRhKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U3R1ZGVudFJvdXRlPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXhXaWR0aDogMzIwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnUgXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFNlbGVjdGVkS2V5cz17W2NsaWNrZWRdfVxyXG4gICAgICAgICAgICAgICAgICAgIGlubGluZUNvbGxhcHNlZD17Y29sbGFwc2VkfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCI4MHZoXCIsIG92ZXJmbG93OiBcInNjcm9sbFwifX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb3Vyc2UubGVzc29ucy5tYXAoKGxlc3NvbiwgaW5kZXgpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q2xpY2tlZChpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17PEF2YXRhcj57aW5kZXgrMX08L0F2YXRhcj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xlc3Nvbi50aXRsZS5zdWJzdHJpbmcoMCwzMCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1N0dWRlbnRSb3V0ZT5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgIFNpbmdsZUNvdXJzZSJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiU3R1ZGVudFJvdXRlIiwiQnV0dG9uIiwiTWVudSIsIkF2YXRhciIsIml0ZW0iLCJTaW5nbGVDb3Vyc2UiLCJjbGlja2VkIiwic2V0Q2xpY2tlZCIsImNvbGxhcHNlZCIsInNldENvbGxhcHNlZCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiY291cnNlIiwic2V0Q291cnNlIiwibGVzc29ucyIsInJvdXRlciIsInNsdWciLCJxdWVyeSIsImxvYWRDb3Vyc2UiLCJkYXRhIiwiZ2V0IiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJtYXhXaWR0aCIsImRlZmF1bHRTZWxlY3RlZEtleXMiLCJpbmxpbmVDb2xsYXBzZWQiLCJoZWlnaHQiLCJvdmVyZmxvdyIsIm1hcCIsImxlc3NvbiIsImluZGV4IiwiSXRlbSIsIm9uQ2xpY2siLCJpY29uIiwidGl0bGUiLCJzdWJzdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/user/course/[slug].js\n"));

/***/ })

});