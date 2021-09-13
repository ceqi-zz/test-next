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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/FileNamer/FileNamer.js":
/*!*******************************************!*\
  !*** ./components/FileNamer/FileNamer.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FileNamer)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _FileNamer_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileNamer.module.css */ \"./components/FileNamer/FileNamer.module.css\");\n/* harmony import */ var _FileNamer_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_FileNamer_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/ce/dev/test-next-js/components/FileNamer/FileNamer.js\";\n\n\nfunction FileNamer() {\n  const {\n    0: name,\n    1: setName\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n  const {\n    0: alert,\n    1: setAlert\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n\n  const validate = event => {\n    if (/\\*/.test(name)) {\n      event.preventDefault();\n      setAlert(true);\n      return;\n    }\n\n    setAlert(false);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_FileNamer_module_css__WEBPACK_IMPORTED_MODULE_2___default().wrapper),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_FileNamer_module_css__WEBPACK_IMPORTED_MODULE_2___default().preview),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: [\"Preview: \", name, \".js\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Name:\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 22,\n            columnNumber: 21\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            autoComplete: \"off\",\n            name: \"name\",\n            onChange: event => setName(event.target.value),\n            onFocus: () => setAlert(true),\n            onBlur: () => setAlert(false)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 21\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 17\n        }, this), alert && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            role: \"img\",\n            \"aria-label\": \"allowed\",\n            children: \"\\u2705\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 21\n          }, this), \"Alphanumeric Characters\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 21\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            role: \"img\",\n            \"aria-label\": \"not allowed\",\n            children: \"\\u26D4\\uFE0F\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 21\n          }, this), \"*\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 17\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: validate,\n            children: \"Save\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 21\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 9\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpbGVOYW1lci9GaWxlTmFtZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNFLFNBQVQsR0FBcUI7QUFDaEMsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCSCwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0ksS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JMLCtDQUFRLENBQUMsS0FBRCxDQUFsQzs7QUFDQSxRQUFNTSxRQUFRLEdBQUdDLEtBQUssSUFBSTtBQUN0QixRQUFHLEtBQUtDLElBQUwsQ0FBVU4sSUFBVixDQUFILEVBQW9CO0FBQ2hCSyxNQUFBQSxLQUFLLENBQUNFLGNBQU47QUFDQUosTUFBQUEsUUFBUSxDQUFDLElBQUQsQ0FBUjtBQUNBO0FBQ0g7O0FBQ0RBLElBQUFBLFFBQVEsQ0FBQyxLQUFELENBQVI7QUFDSCxHQVBEOztBQVNBLHNCQUNJO0FBQUssYUFBUyxFQUFFTixzRUFBaEI7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBRUEsc0VBQWhCO0FBQUEsOEJBQ0k7QUFBQSxnQ0FBY0csSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUEsZ0NBQ0E7QUFBQSxrQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQ0Msd0JBQVksRUFBQyxLQURkO0FBRUMsZ0JBQUksRUFBQyxNQUZOO0FBR0Msb0JBQVEsRUFBRUssS0FBSyxJQUFJSixPQUFPLENBQUNJLEtBQUssQ0FBQ0ssTUFBTixDQUFhQyxLQUFkLENBSDNCO0FBSUMsbUJBQU8sRUFBRSxNQUFLUixRQUFRLENBQUMsSUFBRCxDQUp2QjtBQUtDLGtCQUFNLEVBQUUsTUFBSUEsUUFBUSxDQUFDLEtBQUQ7QUFMckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREEsRUFXQ0QsS0FBSyxpQkFDTjtBQUFBLGtDQUNJO0FBQU0sZ0JBQUksRUFBQyxLQUFYO0FBQWlCLDBCQUFXLFNBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLDBDQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkosZUFHSTtBQUFNLGdCQUFJLEVBQUMsS0FBWDtBQUFpQiwwQkFBVyxhQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWkEsZUFpQkE7QUFBQSxpQ0FDSTtBQUFRLG1CQUFPLEVBQUVFLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFqQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBNEJIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC1uZXh0Ly4vY29tcG9uZW50cy9GaWxlTmFtZXIvRmlsZU5hbWVyLmpzPzkwM2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL0ZpbGVOYW1lci5tb2R1bGUuY3NzJ1xuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpbGVOYW1lcigpIHtcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbYWxlcnQsIHNldEFsZXJ0XSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IHZhbGlkYXRlID0gZXZlbnQgPT4ge1xuICAgICAgICBpZigvXFwqLy50ZXN0KG5hbWUpKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBzZXRBbGVydCh0cnVlKVxuICAgICAgICAgICAgcmV0dXJuIFxuICAgICAgICB9XG4gICAgICAgIHNldEFsZXJ0KGZhbHNlKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByZXZpZXd9PlxuICAgICAgICAgICAgICAgIDxoMj5QcmV2aWV3OiB7bmFtZX0uanM8L2gyPlxuICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHA+TmFtZTo8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCIgXG4gICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiIFxuICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHNldE5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgIG9uRm9jdXM9eygpPT4gc2V0QWxlcnQodHJ1ZSl9XG4gICAgICAgICAgICAgICAgICAgICBvbkJsdXI9eygpPT5zZXRBbGVydChmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICB7YWxlcnQgJiYgXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJhbGxvd2VkXCI+4pyFPC9zcGFuPkFscGhhbnVtZXJpYyBDaGFyYWN0ZXJzXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiByb2xlPVwiaW1nXCIgYXJpYS1sYWJlbD1cIm5vdCBhbGxvd2VkXCI+4puU77iPPC9zcGFuPipcbiAgICAgICAgICAgICAgICA8L2Rpdj59XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt2YWxpZGF0ZX0+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVN0YXRlIiwiRmlsZU5hbWVyIiwibmFtZSIsInNldE5hbWUiLCJhbGVydCIsInNldEFsZXJ0IiwidmFsaWRhdGUiLCJldmVudCIsInRlc3QiLCJwcmV2ZW50RGVmYXVsdCIsIndyYXBwZXIiLCJwcmV2aWV3IiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FileNamer/FileNamer.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_FileNamer_FileNamer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FileNamer/FileNamer */ \"./components/FileNamer/FileNamer.js\");\n\nvar _jsxFileName = \"/Users/ce/dev/test-next-js/pages/index.js\";\n\n\nconst home = () => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FileNamer_FileNamer__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 12\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQyxJQUFJLEdBQUcsTUFBTTtBQUNmLHNCQUFPLDhEQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNILENBRkQ7O0FBSUEsaUVBQWVBLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0LW5leHQvLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGaWxlTmFtZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRmlsZU5hbWVyL0ZpbGVOYW1lclwiXG5cbmNvbnN0IGhvbWUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIDxGaWxlTmFtZXIgLz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgaG9tZSJdLCJuYW1lcyI6WyJGaWxlTmFtZXIiLCJob21lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./components/FileNamer/FileNamer.module.css":
/*!***************************************************!*\
  !*** ./components/FileNamer/FileNamer.module.css ***!
  \***************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"preview\": \"FileNamer_preview__29C-w\",\n\t\"wrapper\": \"FileNamer_wrapper__4hv3W\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpbGVOYW1lci9GaWxlTmFtZXIubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC1uZXh0Ly4vY29tcG9uZW50cy9GaWxlTmFtZXIvRmlsZU5hbWVyLm1vZHVsZS5jc3M/NWZkMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwcmV2aWV3XCI6IFwiRmlsZU5hbWVyX3ByZXZpZXdfXzI5Qy13XCIsXG5cdFwid3JhcHBlclwiOiBcIkZpbGVOYW1lcl93cmFwcGVyX180aHYzV1wiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FileNamer/FileNamer.module.css\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();