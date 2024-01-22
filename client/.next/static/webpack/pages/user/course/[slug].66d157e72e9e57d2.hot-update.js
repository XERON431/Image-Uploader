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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_routes_StudentRoute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/routes/StudentRoute */ \"./components/routes/StudentRoute.js\");\n/* harmony import */ var _barrel_optimize_names_Avatar_Button_List_ListItem_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Avatar,Button,List,ListItem!=!@mui/material */ \"__barrel_optimize__?names=Avatar,Button,List,ListItem!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/colors */ \"./node_modules/@mui/material/colors/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n // Import Material-UI components\n\n\nconst SingleCourse = ()=>{\n    _s();\n    const [clicked, setClicked] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(-1);\n    const [course, setCourse] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        lessons: []\n    });\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { slug } = router.query;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (slug) loadCourse();\n    }, [\n        slug\n    ]);\n    const loadCourse = async ()=>{\n        const { data } = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"/api/user/course/\".concat(slug));\n        setCourse(data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_routes_StudentRoute__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                display: \"flex\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        maxWidth: 320,\n                        marginRight: 20,\n                        backgroundColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_5__.blue\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_Button_List_ListItem_mui_material__WEBPACK_IMPORTED_MODULE_6__.List, {\n                        children: course.lessons.map((lesson, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_Button_List_ListItem_mui_material__WEBPACK_IMPORTED_MODULE_6__.ListItem, {\n                                button: true,\n                                onClick: ()=>setClicked(index),\n                                sx: {\n                                    display: \"flex\",\n                                    alignItems: \"center\",\n                                    backgroundColor: clicked === index ? \"#ADD8E6\" : \"inherit\",\n                                    color: clicked === index ? \"#0000FF\" : \"inherit\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_Button_List_ListItem_mui_material__WEBPACK_IMPORTED_MODULE_6__.Avatar, {\n                                        sx: {\n                                            marginRight: 1\n                                        },\n                                        children: index + 1\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\user\\\\course\\\\[slug].js\",\n                                        lineNumber: 41,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    lesson.title.substring(0, 30)\n                                ]\n                            }, index, true, {\n                                fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\user\\\\course\\\\[slug].js\",\n                                lineNumber: 30,\n                                columnNumber: 29\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\user\\\\course\\\\[slug].js\",\n                        lineNumber: 28,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\user\\\\course\\\\[slug].js\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col\",\n                    children: clicked !== -1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: course.lessons[clicked].video && course.lessons[clicked].video.location && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                                children: JSON.stringify(course, null, 4)\n                            }, void 0, false, {\n                                fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\user\\\\course\\\\[slug].js\",\n                                lineNumber: 52,\n                                columnNumber: 33\n                            }, undefined)\n                        }, void 0, false)\n                    }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"lead\",\n                                children: \"Click on the lesson to start learning\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\user\\\\course\\\\[slug].js\",\n                                lineNumber: 72,\n                                columnNumber: 33\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\user\\\\course\\\\[slug].js\",\n                            lineNumber: 71,\n                            columnNumber: 29\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\user\\\\course\\\\[slug].js\",\n                        lineNumber: 70,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\user\\\\course\\\\[slug].js\",\n                    lineNumber: 47,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\user\\\\course\\\\[slug].js\",\n            lineNumber: 26,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\user\\\\course\\\\[slug].js\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, undefined);\n};\n_s(SingleCourse, \"tiaV+K5guoAAW5FaT/I0E2dSVuI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = SingleCourse;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleCourse);\nvar _c;\n$RefreshReg$(_c, \"SingleCourse\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyL2NvdXJzZS9bc2x1Z10uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF3QztBQUNJO0FBQ2xCO0FBQ3lDO0FBQ0osQ0FBQyxnQ0FBZ0M7QUFDcEQ7QUFDRDtBQUUzQyxNQUFNVyxlQUFlOztJQUNqQixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1gsK0NBQVFBLENBQUMsQ0FBQztJQUN4QyxNQUFNLENBQUNZLFFBQVFDLFVBQVUsR0FBR2IsK0NBQVFBLENBQUM7UUFBRWMsU0FBUyxFQUFFO0lBQUM7SUFDbkQsTUFBTUMsU0FBU2pCLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVrQixJQUFJLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztJQUU3QmxCLGdEQUFTQSxDQUFDO1FBQ04sSUFBSWlCLE1BQU1FO0lBQ2QsR0FBRztRQUFDRjtLQUFLO0lBRVQsTUFBTUUsYUFBYTtRQUNmLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUcsTUFBTWxCLGlEQUFTLENBQUMsb0JBQXlCLE9BQUxlO1FBQ3JESCxVQUFVTTtJQUNkO0lBRUEscUJBQ0ksOERBQUNqQix1RUFBWUE7a0JBQ1QsNEVBQUNtQjtZQUFJQyxPQUFPO2dCQUFFQyxTQUFTO1lBQU87OzhCQUMxQiw4REFBQ0Y7b0JBQUlDLE9BQU87d0JBQUVFLFVBQVU7d0JBQUtDLGFBQWE7d0JBQUlDLGlCQUFpQm5CLHNEQUFJQTtvQkFBQzs4QkFDaEUsNEVBQUNILGlHQUFJQTtrQ0FDQVEsT0FBT0UsT0FBTyxDQUFDYSxHQUFHLENBQUMsQ0FBQ0MsUUFBUUMsc0JBQ3pCLDhEQUFDeEIscUdBQVFBO2dDQUNMeUIsTUFBTTtnQ0FDTkMsU0FBUyxJQUFNcEIsV0FBV2tCO2dDQUUxQkcsSUFBSTtvQ0FDQVQsU0FBUztvQ0FDVFUsWUFBWTtvQ0FDWlAsaUJBQWlCaEIsWUFBWW1CLFFBQVEsWUFBWTtvQ0FDakRLLE9BQU94QixZQUFZbUIsUUFBUSxZQUFZO2dDQUMzQzs7a0RBRUEsOERBQUN2QixtR0FBTUE7d0NBQUMwQixJQUFJOzRDQUFFUCxhQUFhO3dDQUFFO2tEQUFJSSxRQUFROzs7Ozs7b0NBQ3hDRCxPQUFPTyxLQUFLLENBQUNDLFNBQVMsQ0FBQyxHQUFHOzsrQkFUdEJQOzs7Ozs7Ozs7Ozs7Ozs7OEJBY3JCLDhEQUFDUjtvQkFBSWdCLFdBQVU7OEJBQ1YzQixZQUFZLENBQUMsa0JBQ1Y7a0NBQ0tFLE9BQU9FLE9BQU8sQ0FBQ0osUUFBUSxDQUFDNEIsS0FBSyxJQUFJMUIsT0FBT0UsT0FBTyxDQUFDSixRQUFRLENBQUM0QixLQUFLLENBQUNDLFFBQVEsa0JBQ3BFO3NDQUNBLDRFQUFDQzswQ0FBS0MsS0FBS0MsU0FBUyxDQUFDOUIsUUFBTyxNQUFLOzs7Ozs7O3NEQWtCekMsOERBQUNTO2tDQUNHLDRFQUFDQTtzQ0FDRyw0RUFBQ3NCO2dDQUFFTixXQUFVOzBDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFwRDtHQXZFTTVCOztRQUdhWCxrREFBU0E7OztLQUh0Qlc7QUF5RU4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci9jb3Vyc2UvW3NsdWddLmpzPzE1MzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgU3R1ZGVudFJvdXRlIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3JvdXRlcy9TdHVkZW50Um91dGVcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBMaXN0LCBMaXN0SXRlbSwgQXZhdGFyIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7IC8vIEltcG9ydCBNYXRlcmlhbC1VSSBjb21wb25lbnRzXHJcbmltcG9ydCB7IGJsdWUgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9jb2xvcnNcIjtcclxuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nO1xyXG5cclxuY29uc3QgU2luZ2xlQ291cnNlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2NsaWNrZWQsIHNldENsaWNrZWRdID0gdXNlU3RhdGUoLTEpO1xyXG4gICAgY29uc3QgW2NvdXJzZSwgc2V0Q291cnNlXSA9IHVzZVN0YXRlKHsgbGVzc29uczogW10gfSk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgc2x1ZyB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHNsdWcpIGxvYWRDb3Vyc2UoKTtcclxuICAgIH0sIFtzbHVnXSk7XHJcblxyXG4gICAgY29uc3QgbG9hZENvdXJzZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS91c2VyL2NvdXJzZS8ke3NsdWd9YCk7XHJcbiAgICAgICAgc2V0Q291cnNlKGRhdGEpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTdHVkZW50Um91dGU+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1heFdpZHRoOiAzMjAsIG1hcmdpblJpZ2h0OiAyMCwgYmFja2dyb3VuZENvbG9yOiBibHVlIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y291cnNlLmxlc3NvbnMubWFwKChsZXNzb24sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDbGlja2VkKGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNsaWNrZWQgPT09IGluZGV4ID8gXCIjQUREOEU2XCIgOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGNsaWNrZWQgPT09IGluZGV4ID8gXCIjMDAwMEZGXCIgOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgc3g9e3sgbWFyZ2luUmlnaHQ6IDEgfX0+e2luZGV4ICsgMX08L0F2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGVzc29uLnRpdGxlLnN1YnN0cmluZygwLCAzMCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2NsaWNrZWQgIT09IC0xID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdXJzZS5sZXNzb25zW2NsaWNrZWRdLnZpZGVvICYmIGNvdXJzZS5sZXNzb25zW2NsaWNrZWRdLnZpZGVvLmxvY2F0aW9uICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KGNvdXJzZSxudWxsLDQpfTwvcHJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2aWRlb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibXlWaWRlb1wiIHdpZHRoPVwiMzIwXCIgaGVpZ2h0PVwiMjQwXCIgY29udHJvbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17Y291cnNlLmxlc3NvbnNbY2xpY2tlZF0udmlkZW8ubG9jYXRpb259IHR5cGU9XCJ2aWRlby9tcDRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZpZGVvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlPXtjb3Vyc2UubGVzc29uc1tjbGlja2VkXS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpbmdsZS1wb3N0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRcIj5DbGljayBvbiB0aGUgbGVzc29uIHRvIHN0YXJ0IGxlYXJuaW5nPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9TdHVkZW50Um91dGU+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlQ291cnNlO1xyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIlN0dWRlbnRSb3V0ZSIsIkJ1dHRvbiIsIkxpc3QiLCJMaXN0SXRlbSIsIkF2YXRhciIsImJsdWUiLCJSZWFjdE1hcmtkb3duIiwiU2luZ2xlQ291cnNlIiwiY2xpY2tlZCIsInNldENsaWNrZWQiLCJjb3Vyc2UiLCJzZXRDb3Vyc2UiLCJsZXNzb25zIiwicm91dGVyIiwic2x1ZyIsInF1ZXJ5IiwibG9hZENvdXJzZSIsImRhdGEiLCJnZXQiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJtYXhXaWR0aCIsIm1hcmdpblJpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwibWFwIiwibGVzc29uIiwiaW5kZXgiLCJidXR0b24iLCJvbkNsaWNrIiwic3giLCJhbGlnbkl0ZW1zIiwiY29sb3IiLCJ0aXRsZSIsInN1YnN0cmluZyIsImNsYXNzTmFtZSIsInZpZGVvIiwibG9jYXRpb24iLCJwcmUiLCJKU09OIiwic3RyaW5naWZ5IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/user/course/[slug].js\n"));

/***/ })

});