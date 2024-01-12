"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/instructor/course/view/[slug]",{

/***/ "./pages/instructor/course/view/[slug].js":
/*!************************************************!*\
  !*** ./pages/instructor/course/view/[slug].js ***!
  \************************************************/
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var _components_routes_InstructorRoute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/routes/InstructorRoute */ \"./components/routes/InstructorRoute.js\");\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modal */ \"./pages/instructor/course/view/Modal.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/index.js\");\n/* harmony import */ var _components_forms_AddLessonForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/forms/AddLessonForm */ \"./components/forms/AddLessonForm.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst CourseView = ()=>{\n    _s();\n    const [course, setCourse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    //for lessons\n    // const [visible, setVisible] = useState(false);\n    const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: \"\",\n        content: \"\",\n        video: \"\"\n    });\n    const [uploading, setUploading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [uploadButtonText, setUploadButtonText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Upload video\");\n    const [progress, setProgress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { slug } = router.query;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        loadCourse();\n    }, [\n        slug\n    ]);\n    const loadCourse = async ()=>{\n        const { data } = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"/api/course/\".concat(slug));\n        setCourse(data);\n    };\n    const handleAddLesson = (e)=>{\n        e.preventDefault();\n        console.log(values);\n    };\n    const handleVideo = async (e)=>{\n        try {\n            const file = e.target.files[0];\n            setUploadButtonText(file.name);\n            setUploading(true);\n            const videoData = new FormData();\n            videoData.append(\"video\", file);\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].post(\"/api/course/video-upload/$\", videoData, {\n                onUploadProgress: (e)=>{\n                    setProgress(Math.round(100 * e.loaded / e.total));\n                }\n            });\n            console.log(data);\n            setValues({\n                ...values,\n                video: data\n            });\n            setUploading(false);\n        // console.log(\"Handle Video Upload\")\n        } catch (err) {\n            console.log(err);\n            setUploading(false);\n            (0,react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast)(\"Video upload failed\");\n        }\n    };\n    const [isModalOpen, setModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const openModal = ()=>{\n        setModalOpen(true);\n    };\n    const closeModal = ()=>{\n        setModalOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_routes_InstructorRoute__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container-fluid pt-3\",\n            children: course && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container-fluid pt-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"d-flex align-items-center pt-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: course.image ? course.image.Location : \"/1-8.jpg\",\n                                alt: \"Course Thumbnail\",\n                                style: {\n                                    width: \"80px\",\n                                    height: \"80px\",\n                                    borderRadius: \"50%\",\n                                    marginRight: \"15px\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\instructor\\\\course\\\\view\\\\[slug].js\",\n                                lineNumber: 80,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"ml-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        className: \"text-primary\",\n                                        children: course.name\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\instructor\\\\course\\\\view\\\\[slug].js\",\n                                        lineNumber: 86,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            course.lessons && course.lessons.length,\n                                            \" Lessons\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\instructor\\\\course\\\\view\\\\[slug].js\",\n                                        lineNumber: 87,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        style: {\n                                            fontSize: \"10px\"\n                                        },\n                                        children: course.category\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\instructor\\\\course\\\\view\\\\[slug].js\",\n                                        lineNumber: 88,\n                                        columnNumber: 33\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\instructor\\\\course\\\\view\\\\[slug].js\",\n                                lineNumber: 85,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\instructor\\\\course\\\\view\\\\[slug].js\",\n                        lineNumber: 79,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                        fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\instructor\\\\course\\\\view\\\\[slug].js\",\n                        lineNumber: 92,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                children: course.description\n                            }, void 0, false, {\n                                fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\instructor\\\\course\\\\view\\\\[slug].js\",\n                                lineNumber: 95,\n                                columnNumber: 33\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\instructor\\\\course\\\\view\\\\[slug].js\",\n                            lineNumber: 94,\n                            columnNumber: 29\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\instructor\\\\course\\\\view\\\\[slug].js\",\n                        lineNumber: 93,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: openModal,\n                                className: \"col-md-6 offset-md-3 text-center btn btn-primary btn-lg\",\n                                children: \"Add lesson\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\instructor\\\\course\\\\view\\\\[slug].js\",\n                                lineNumber: 99,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                isOpen: isModalOpen,\n                                onClose: closeModal,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_forms_AddLessonForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    values: values,\n                                    setValues: setValues,\n                                    handleAddLesson: handleAddLesson,\n                                    uploading: uploading,\n                                    uploadButtonText: uploadButtonText,\n                                    handleVideo: handleVideo,\n                                    progress: progress\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\instructor\\\\course\\\\view\\\\[slug].js\",\n                                    lineNumber: 106,\n                                    columnNumber: 33\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\instructor\\\\course\\\\view\\\\[slug].js\",\n                                lineNumber: 105,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\instructor\\\\course\\\\view\\\\[slug].js\",\n                        lineNumber: 98,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\instructor\\\\course\\\\view\\\\[slug].js\",\n                        lineNumber: 118,\n                        columnNumber: 25\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\instructor\\\\course\\\\view\\\\[slug].js\",\n                lineNumber: 78,\n                columnNumber: 21\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\instructor\\\\course\\\\view\\\\[slug].js\",\n            lineNumber: 76,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\instructor\\\\course\\\\view\\\\[slug].js\",\n        lineNumber: 75,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CourseView, \"OM8vYZWghAXINpS/v3erw+sp5Y8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = CourseView;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CourseView);\nvar _c;\n$RefreshReg$(_c, \"CourseView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbnN0cnVjdG9yL2NvdXJzZS92aWV3L1tzbHVnXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDVDtBQUNvQztBQUNoRDtBQUNGO0FBQ2lCO0FBQzRCO0FBQ2hDO0FBRXZDLE1BQU1VLGFBQWE7O0lBQ2YsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdaLCtDQUFRQSxDQUFDLENBQUM7SUFDdEMsYUFBYTtJQUNiLGlEQUFpRDtJQUNqRCxNQUFNLENBQUNhLFFBQVFDLFVBQVUsR0FBR2QsK0NBQVFBLENBQUM7UUFDakNlLE9BQU87UUFDUEMsU0FBUztRQUNUQyxPQUFPO0lBQ1g7SUFDQSxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR25CLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ29CLGtCQUFrQkMsb0JBQW9CLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUN6RCxNQUFNLENBQUNzQixVQUFVQyxZQUFZLEdBQUd2QiwrQ0FBUUEsQ0FBQztJQUV6QyxNQUFNd0IsU0FBU3JCLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVzQixJQUFJLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztJQUU3QnpCLGdEQUFTQSxDQUFDO1FBQ04wQjtJQUNKLEdBQUc7UUFBQ0Y7S0FBSztJQUVULE1BQU1FLGFBQWE7UUFDZixNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHLE1BQU10QixpREFBUyxDQUFDLGVBQW9CLE9BQUxtQjtRQUNoRGIsVUFBVWdCO0lBQ2Q7SUFDQSxNQUFNRSxrQkFBa0IsQ0FBQ0M7UUFDckJBLEVBQUVDLGNBQWM7UUFDaEJDLFFBQVFDLEdBQUcsQ0FBQ3JCO0lBQ2hCO0lBRUEsTUFBTXNCLGNBQWMsT0FBT0o7UUFDdkIsSUFBRztZQUNDLE1BQU1LLE9BQU1MLEVBQUVNLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLEVBQUU7WUFDN0JqQixvQkFBb0JlLEtBQUtHLElBQUk7WUFDN0JwQixhQUFhO1lBQ2IsTUFBTXFCLFlBQVksSUFBSUM7WUFDdEJELFVBQVVFLE1BQU0sQ0FBQyxTQUFTTjtZQUUxQixNQUFNLEVBQUNSLElBQUksRUFBQyxHQUFHLE1BQU10QixrREFBVSxDQUFDLDhCQUE4QmtDLFdBQVc7Z0JBQ3JFSSxrQkFBa0IsQ0FBQ2I7b0JBQ2ZSLFlBQVlzQixLQUFLQyxLQUFLLENBQUMsTUFBS2YsRUFBRWdCLE1BQU0sR0FBSWhCLEVBQUVpQixLQUFLO2dCQUNuRDtZQUNKO1lBQ0FmLFFBQVFDLEdBQUcsQ0FBQ047WUFDWmQsVUFBVTtnQkFBQyxHQUFHRCxNQUFNO2dCQUFFSSxPQUFPVztZQUFJO1lBQ2pDVCxhQUFhO1FBQ2IscUNBQXFDO1FBQ3pDLEVBQUUsT0FBTThCLEtBQUk7WUFDUmhCLFFBQVFDLEdBQUcsQ0FBQ2U7WUFDWjlCLGFBQWE7WUFDYlYscURBQUtBLENBQUM7UUFDVjtJQUNKO0lBR0EsTUFBTSxDQUFDeUMsYUFBYUMsYUFBYSxHQUFHbkQsK0NBQVFBLENBQUM7SUFFN0MsTUFBTW9ELFlBQVk7UUFDZEQsYUFBYTtJQUNqQjtJQUVBLE1BQU1FLGFBQWE7UUFDZkYsYUFBYTtJQUNqQjtJQUVBLHFCQUNJLDhEQUFDL0MsMEVBQWVBO2tCQUNaLDRFQUFDa0Q7WUFBSUMsV0FBVTtzQkFDVjVDLHdCQUNHLDhEQUFDMkM7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNDO2dDQUNHQyxLQUFLOUMsT0FBTytDLEtBQUssR0FBRy9DLE9BQU8rQyxLQUFLLENBQUNDLFFBQVEsR0FBRztnQ0FDNUNDLEtBQUk7Z0NBQ0pDLE9BQU87b0NBQUVDLE9BQU87b0NBQVFDLFFBQVE7b0NBQVFDLGNBQWM7b0NBQU9DLGFBQWE7Z0NBQU87Ozs7OzswQ0FFckYsOERBQUNYO2dDQUFJQyxXQUFVOztrREFDWCw4REFBQ1c7d0NBQUdYLFdBQVU7a0RBQWdCNUMsT0FBTzRCLElBQUk7Ozs7OztrREFDekMsOERBQUM0Qjs7NENBQUd4RCxPQUFPeUQsT0FBTyxJQUFJekQsT0FBT3lELE9BQU8sQ0FBQ0MsTUFBTTs0Q0FBQzs7Ozs7OztrREFDNUMsOERBQUNGO3dDQUFFTixPQUFPOzRDQUFFUyxVQUFVO3dDQUFPO2tEQUFJM0QsT0FBTzRELFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJeEQsOERBQUNDOzs7OztrQ0FDRCw4REFBQ2xCO3dCQUFJQyxXQUFVO2tDQUNYLDRFQUFDRDs0QkFBSUMsV0FBVTtzQ0FDWCw0RUFBQ2hELHNEQUFhQTswQ0FBRUksT0FBTzhELFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBRzFDLDhEQUFDbkI7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDbUI7Z0NBQ0dDLFNBQVN2QjtnQ0FDVEcsV0FBVTswQ0FDYjs7Ozs7OzBDQUdELDhEQUFDbEQsOENBQUtBO2dDQUFDdUUsUUFBUTFCO2dDQUFhMkIsU0FBU3hCOzBDQUNqQyw0RUFBQzdDLHVFQUFhQTtvQ0FDZEssUUFBUUE7b0NBQ1JDLFdBQVdBO29DQUNYZ0IsaUJBQWlCQTtvQ0FDakJaLFdBQVdBO29DQUNYRSxrQkFBa0JBO29DQUNsQmUsYUFBYUE7b0NBQ2JiLFVBQVVBOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLbEIsOERBQUN3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXpCO0dBbEhNcEU7O1FBYWFQLGtEQUFTQTs7O0tBYnRCTztBQW9ITiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbnN0cnVjdG9yL2NvdXJzZS92aWV3L1tzbHVnXS5qcz85ZDQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEluc3RydWN0b3JSb3V0ZSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9yb3V0ZXMvSW5zdHJ1Y3RvclJvdXRlXCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi9Nb2RhbFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bic7XHJcbmltcG9ydCBBZGRMZXNzb25Gb3JtIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2Zvcm1zL0FkZExlc3NvbkZvcm1cIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuXHJcbmNvbnN0IENvdXJzZVZpZXcgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbY291cnNlLCBzZXRDb3Vyc2VdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgLy9mb3IgbGVzc29uc1xyXG4gICAgLy8gY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICB0aXRsZTogXCJcIixcclxuICAgICAgICBjb250ZW50OiBcIlwiLFxyXG4gICAgICAgIHZpZGVvOiBcIlwiLFxyXG4gICAgfSlcclxuICAgIGNvbnN0IFt1cGxvYWRpbmcsIHNldFVwbG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdXBsb2FkQnV0dG9uVGV4dCwgc2V0VXBsb2FkQnV0dG9uVGV4dF0gPSB1c2VTdGF0ZShcIlVwbG9hZCB2aWRlb1wiKTtcclxuICAgIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IHNsdWcgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxvYWRDb3Vyc2UoKVxyXG4gICAgfSwgW3NsdWddKTtcclxuXHJcbiAgICBjb25zdCBsb2FkQ291cnNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL2NvdXJzZS8ke3NsdWd9YCk7XHJcbiAgICAgICAgc2V0Q291cnNlKGRhdGEpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlQWRkTGVzc29uID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codmFsdWVzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVWaWRlbyA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCBmaWxlPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgICAgICAgICAgc2V0VXBsb2FkQnV0dG9uVGV4dChmaWxlLm5hbWUpO1xyXG4gICAgICAgICAgICBzZXRVcGxvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZpZGVvRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICB2aWRlb0RhdGEuYXBwZW5kKCd2aWRlbycsIGZpbGUpXHJcblxyXG4gICAgICAgICAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL2NvdXJzZS92aWRlby11cGxvYWQvJCcsIHZpZGVvRGF0YSwge1xyXG4gICAgICAgICAgICAgICAgb25VcGxvYWRQcm9ncmVzczogKGUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UHJvZ3Jlc3MoTWF0aC5yb3VuZCgoMTAwKmUubG9hZGVkKSAvIGUudG90YWwpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCB2aWRlbzogZGF0YX0pXHJcbiAgICAgICAgICAgIHNldFVwbG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSGFuZGxlIFZpZGVvIFVwbG9hZFwiKVxyXG4gICAgICAgIH0gY2F0Y2goZXJyKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgc2V0VXBsb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgdG9hc3QoXCJWaWRlbyB1cGxvYWQgZmFpbGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgW2lzTW9kYWxPcGVuLCBzZXRNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IG9wZW5Nb2RhbCA9ICgpID0+IHtcclxuICAgICAgICBzZXRNb2RhbE9wZW4odHJ1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0TW9kYWxPcGVuKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8SW5zdHJ1Y3RvclJvdXRlPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBwdC0zXCI+XHJcbiAgICAgICAgICAgICAgICB7Y291cnNlICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBwdC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBwdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtjb3Vyc2UuaW1hZ2UgPyBjb3Vyc2UuaW1hZ2UuTG9jYXRpb24gOiBcIi8xLTguanBnXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQ291cnNlIFRodW1ibmFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiODBweFwiLCBoZWlnaHQ6IFwiODBweFwiLCBib3JkZXJSYWRpdXM6IFwiNTAlXCIsIG1hcmdpblJpZ2h0OiBcIjE1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlcIj57Y291cnNlLm5hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Y291cnNlLmxlc3NvbnMgJiYgY291cnNlLmxlc3NvbnMubGVuZ3RofSBMZXNzb25zPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEwcHhcIiB9fT57Y291cnNlLmNhdGVnb3J5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RNYXJrZG93bj57Y291cnNlLmRlc2NyaXB0aW9ufTwvUmVhY3RNYXJrZG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvcGVuTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2Zmc2V0LW1kLTMgdGV4dC1jZW50ZXIgYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIGxlc3NvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9kYWwgaXNPcGVuPXtpc01vZGFsT3Blbn0gb25DbG9zZT17Y2xvc2VNb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZExlc3NvbkZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9e3ZhbHVlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZXM9e3NldFZhbHVlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVBZGRMZXNzb249e2hhbmRsZUFkZExlc3Nvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGxvYWRpbmc9e3VwbG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGxvYWRCdXR0b25UZXh0PXt1cGxvYWRCdXR0b25UZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVZpZGVvPXtoYW5kbGVWaWRlb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcz17cHJvZ3Jlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0luc3RydWN0b3JSb3V0ZT5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3Vyc2VWaWV3O1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2UiLCJ1c2VSb3V0ZXIiLCJJbnN0cnVjdG9yUm91dGUiLCJNb2RhbCIsImF4aW9zIiwiUmVhY3RNYXJrZG93biIsIkFkZExlc3NvbkZvcm0iLCJ0b2FzdCIsIkNvdXJzZVZpZXciLCJjb3Vyc2UiLCJzZXRDb3Vyc2UiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ0aXRsZSIsImNvbnRlbnQiLCJ2aWRlbyIsInVwbG9hZGluZyIsInNldFVwbG9hZGluZyIsInVwbG9hZEJ1dHRvblRleHQiLCJzZXRVcGxvYWRCdXR0b25UZXh0IiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsInJvdXRlciIsInNsdWciLCJxdWVyeSIsImxvYWRDb3Vyc2UiLCJkYXRhIiwiZ2V0IiwiaGFuZGxlQWRkTGVzc29uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZVZpZGVvIiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwibmFtZSIsInZpZGVvRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicG9zdCIsIm9uVXBsb2FkUHJvZ3Jlc3MiLCJNYXRoIiwicm91bmQiLCJsb2FkZWQiLCJ0b3RhbCIsImVyciIsImlzTW9kYWxPcGVuIiwic2V0TW9kYWxPcGVuIiwib3Blbk1vZGFsIiwiY2xvc2VNb2RhbCIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImltYWdlIiwiTG9jYXRpb24iLCJhbHQiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luUmlnaHQiLCJoNSIsInAiLCJsZXNzb25zIiwibGVuZ3RoIiwiZm9udFNpemUiLCJjYXRlZ29yeSIsImhyIiwiZGVzY3JpcHRpb24iLCJidXR0b24iLCJvbkNsaWNrIiwiaXNPcGVuIiwib25DbG9zZSIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/instructor/course/view/[slug].js\n"));

/***/ })

});