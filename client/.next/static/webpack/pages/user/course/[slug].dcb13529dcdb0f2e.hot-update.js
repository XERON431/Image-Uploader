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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_routes_StudentRoute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/routes/StudentRoute */ \"./components/routes/StudentRoute.js\");\n/* harmony import */ var _barrel_optimize_names_Avatar_Button_List_ListItem_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Avatar,Button,List,ListItem!=!@mui/material */ \"__barrel_optimize__?names=Avatar,Button,List,ListItem!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/colors */ \"./node_modules/@mui/material/colors/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n // Import Material-UI components\n\n\n\nconst SingleCourse = ()=>{\n    _s();\n    const [clicked, setClicked] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(-1);\n    const [course, setCourse] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        lessons: []\n    });\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { slug } = router.query;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (slug) loadCourse();\n    }, [\n        slug\n    ]);\n    const loadCourse = async ()=>{\n        const { data } = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"/api/user/course/\".concat(slug));\n        setCourse(data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_routes_StudentRoute__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                display: \"flex\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        maxWidth: 320,\n                        marginRight: 20,\n                        backgroundColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_5__.blue\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_Button_List_ListItem_mui_material__WEBPACK_IMPORTED_MODULE_6__.List, {\n                        children: course.lessons.map((lesson, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_Button_List_ListItem_mui_material__WEBPACK_IMPORTED_MODULE_6__.ListItem, {\n                                button: true,\n                                onClick: ()=>setClicked(index),\n                                sx: {\n                                    display: \"flex\",\n                                    alignItems: \"center\",\n                                    backgroundColor: clicked === index ? \"#ADD8E6\" : \"inherit\",\n                                    color: clicked === index ? \"#0000FF\" : \"inherit\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_Button_List_ListItem_mui_material__WEBPACK_IMPORTED_MODULE_6__.Avatar, {\n                                        sx: {\n                                            marginRight: 1\n                                        },\n                                        children: index + 1\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\user\\\\course\\\\[slug].js\",\n                                        lineNumber: 38,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    lesson.title.substring(0, 30)\n                                ]\n                            }, index, true, {\n                                fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\user\\\\course\\\\[slug].js\",\n                                lineNumber: 31,\n                                columnNumber: 29\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\user\\\\course\\\\[slug].js\",\n                        lineNumber: 29,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\user\\\\course\\\\[slug].js\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col\",\n                    children: clicked !== -1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                            children: JSON.stringify(course.lessons[clicked], null, 4)\n                        }, void 0, false, {\n                            fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\user\\\\course\\\\[slug].js\",\n                            lineNumber: 47,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: \"Click on the lesson to start learning\"\n                    }, void 0, false)\n                }, void 0, false, {\n                    fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\user\\\\course\\\\[slug].js\",\n                    lineNumber: 44,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\user\\\\course\\\\[slug].js\",\n            lineNumber: 27,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\user\\\\course\\\\[slug].js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, undefined);\n};\n_s(SingleCourse, \"tiaV+K5guoAAW5FaT/I0E2dSVuI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = SingleCourse;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleCourse);\nvar _c;\n$RefreshReg$(_c, \"SingleCourse\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyL2NvdXJzZS9bc2x1Z10uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF3QztBQUNJO0FBQ2xCO0FBQ3lDO0FBQ0osQ0FBQyxnQ0FBZ0M7QUFDcEQ7QUFDTjtBQUNJO0FBRTFDLE1BQU1ZLGVBQWU7O0lBQ2pCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHWiwrQ0FBUUEsQ0FBQyxDQUFDO0lBQ3hDLE1BQU0sQ0FBQ2EsUUFBUUMsVUFBVSxHQUFHZCwrQ0FBUUEsQ0FBQztRQUFFZSxTQUFTLEVBQUU7SUFBQztJQUNuRCxNQUFNQyxTQUFTbEIsc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRW1CLElBQUksRUFBRSxHQUFHRCxPQUFPRSxLQUFLO0lBRTdCbkIsZ0RBQVNBLENBQUM7UUFDTixJQUFJa0IsTUFBTUU7SUFDZCxHQUFHO1FBQUNGO0tBQUs7SUFFVCxNQUFNRSxhQUFhO1FBQ2YsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBRyxNQUFNbkIsaURBQVMsQ0FBQyxvQkFBeUIsT0FBTGdCO1FBQ3JESCxVQUFVTTtJQUNkO0lBRUEscUJBQ0ksOERBQUNsQix1RUFBWUE7a0JBQ1QsNEVBQUNvQjtZQUFJQyxPQUFPO2dCQUFFQyxTQUFTO1lBQU87OzhCQUMxQiw4REFBQ0Y7b0JBQUlDLE9BQU87d0JBQUVFLFVBQVU7d0JBQUtDLGFBQWE7d0JBQUlDLGlCQUFpQnBCLHNEQUFJQTtvQkFBQzs4QkFDaEUsNEVBQUNILGlHQUFJQTtrQ0FDQVMsT0FBT0UsT0FBTyxDQUFDYSxHQUFHLENBQUMsQ0FBQ0MsUUFBUUMsc0JBQ3pCLDhEQUFDekIscUdBQVFBO2dDQUNUMEIsTUFBTTtnQ0FDTkMsU0FBUyxJQUFNcEIsV0FBV2tCO2dDQUUxQkcsSUFBSTtvQ0FBRVQsU0FBUztvQ0FBUVUsWUFBWTtvQ0FDbkNQLGlCQUFpQmhCLFlBQVltQixRQUFRLFlBQVk7b0NBQ2xESyxPQUFNeEIsWUFBWW1CLFFBQVEsWUFBWTtnQ0FBWTs7a0RBQzdDLDhEQUFDeEIsbUdBQU1BO3dDQUFDMkIsSUFBSTs0Q0FBRVAsYUFBYTt3Q0FBRTtrREFBSUksUUFBUTs7Ozs7O29DQUN4Q0QsT0FBT08sS0FBSyxDQUFDQyxTQUFTLENBQUMsR0FBRzs7K0JBTDFCUDs7Ozs7Ozs7Ozs7Ozs7OzhCQVVqQiw4REFBQ1I7b0JBQUlnQixXQUFVOzhCQUNWM0IsWUFBWSxDQUFDLGtCQUNWO2tDQUNBLDRFQUFDNEI7c0NBQUtDLEtBQUtDLFNBQVMsQ0FBQzVCLE9BQU9FLE9BQU8sQ0FBQ0osUUFBUSxFQUFFLE1BQU07Ozs7OztzREFxQnBEO2tDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNMUI7R0FoRU1EOztRQUdhWixrREFBU0E7OztLQUh0Qlk7QUFrRU4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci9jb3Vyc2UvW3NsdWddLmpzPzE1MzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgU3R1ZGVudFJvdXRlIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3JvdXRlcy9TdHVkZW50Um91dGVcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBMaXN0LCBMaXN0SXRlbSwgQXZhdGFyIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7IC8vIEltcG9ydCBNYXRlcmlhbC1VSSBjb21wb25lbnRzXHJcbmltcG9ydCB7IGJsdWUgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9jb2xvcnNcIjtcclxuaW1wb3J0IFJlYWN0UGxheWVyIGZyb20gJ3JlYWN0LXBsYXllcidcclxuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nXHJcblxyXG5jb25zdCBTaW5nbGVDb3Vyc2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbY2xpY2tlZCwgc2V0Q2xpY2tlZF0gPSB1c2VTdGF0ZSgtMSk7XHJcbiAgICBjb25zdCBbY291cnNlLCBzZXRDb3Vyc2VdID0gdXNlU3RhdGUoeyBsZXNzb25zOiBbXSB9KTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBzbHVnIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoc2x1ZykgbG9hZENvdXJzZSgpO1xyXG4gICAgfSwgW3NsdWddKTtcclxuXHJcbiAgICBjb25zdCBsb2FkQ291cnNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3VzZXIvY291cnNlLyR7c2x1Z31gKTtcclxuICAgICAgICBzZXRDb3Vyc2UoZGF0YSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN0dWRlbnRSb3V0ZT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWF4V2lkdGg6IDMyMCwgbWFyZ2luUmlnaHQ6IDIwLCBiYWNrZ3JvdW5kQ29sb3I6IGJsdWUgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb3Vyc2UubGVzc29ucy5tYXAoKGxlc3NvbiwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDbGlja2VkKGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY2xpY2tlZCA9PT0gaW5kZXggPyBcIiNBREQ4RTZcIiA6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpjbGlja2VkID09PSBpbmRleCA/IFwiIzAwMDBGRlwiIDogXCJpbmhlcml0XCIsICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHN4PXt7IG1hcmdpblJpZ2h0OiAxIH19PntpbmRleCArIDF9PC9BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xlc3Nvbi50aXRsZS5zdWJzdHJpbmcoMCwgMzApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjbGlja2VkICE9PSAtMSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkoY291cnNlLmxlc3NvbnNbY2xpY2tlZF0sIG51bGwsIDQpfTwvcHJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyoge2NvdXJzZS5sZXNzb25zW2NsaWNrZWRdLnZpZGVvICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3Vyc2UubGVzc29uc1tjbGlja2VkXS52aWRlby5sb2NhdGlvbiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdFBsYXllclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsYXllclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXtjb3Vyc2UubGVzc29uc1tjbGlja2VkXS52aWRlby5sb2NhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RNYXJrZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZT17Y291cnNlLmxlc3NvbnNbY2xpY2tlZF0uY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaW5nbGUtcG9zdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PkNsaWNrIG9uIHRoZSBsZXNzb24gdG8gc3RhcnQgbGVhcm5pbmc8Lz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU3R1ZGVudFJvdXRlPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpbmdsZUNvdXJzZTtcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJTdHVkZW50Um91dGUiLCJCdXR0b24iLCJMaXN0IiwiTGlzdEl0ZW0iLCJBdmF0YXIiLCJibHVlIiwiUmVhY3RQbGF5ZXIiLCJSZWFjdE1hcmtkb3duIiwiU2luZ2xlQ291cnNlIiwiY2xpY2tlZCIsInNldENsaWNrZWQiLCJjb3Vyc2UiLCJzZXRDb3Vyc2UiLCJsZXNzb25zIiwicm91dGVyIiwic2x1ZyIsInF1ZXJ5IiwibG9hZENvdXJzZSIsImRhdGEiLCJnZXQiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJtYXhXaWR0aCIsIm1hcmdpblJpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwibWFwIiwibGVzc29uIiwiaW5kZXgiLCJidXR0b24iLCJvbkNsaWNrIiwic3giLCJhbGlnbkl0ZW1zIiwiY29sb3IiLCJ0aXRsZSIsInN1YnN0cmluZyIsImNsYXNzTmFtZSIsInByZSIsIkpTT04iLCJzdHJpbmdpZnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/user/course/[slug].js\n"));

/***/ })

});