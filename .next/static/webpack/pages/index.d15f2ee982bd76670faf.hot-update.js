"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var C_Users_Jacob_Documents_GitHub_magic_eight_ball_api_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\Jacob\\Documents\\GitHub\\magic-eight-ball-api\\pages\\index.js";



var exampleBiased = {
  reading: "It is decidedly so.",
  question: "Will I win the lottery",
  sentiment: {
    score: 4,
    comparative: 0.8,
    calculation: [{
      win: 4
    }],
    tokens: ["will", "i", "win", "the", "lottery"],
    words: ["win"],
    positive: ["win"],
    negative: []
  }
};
var exampleRandom = {
  reading: "Reply hazy, try again."
};
function Home() {
  var _jsxDEV2;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "bg-black min-h-screen w-screen overflow-x-hidden flex   justify-center  lg:p-10 py-4 px-1",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("title", {
        children: "My page title"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "lg:max-w-5xl w-full flex-grow flex flex-col",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "flex flex-col items-center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
          className: "text-white font-bold text-5xl",
          children: "8 Ball"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
          className: "text-white text-xl mt-3",
          children: "An API"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
        className: "text-white text-xl",
        children: "Random reading:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "w-full bg-gray-700 rounded-lg flex items-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
          href: "https://www.eightballapi.com/api/",
          className: "text-white text-2xl p-4",
          children: "https://eightballapi.com/api/"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
        className: "text-white ",
        children: "Send a GET request to this endpoint and it returns a random 8ball response message."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
        className: "text-white text-xl mt-4",
        children: "Example response:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "w-full bg-gray-700 rounded-lg flex items-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          className: "text-white text-xl p-4 ",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("code", {
            children: JSON.stringify(exampleRandom)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
        className: "text-white text-xl mt-4",
        children: "Biased reading:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "w-full bg-gray-700 rounded-lg  flex items-center ",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
          href: "https://www.eightballapi.com/api?biased=true&q=will+i+win+the+lottery",
          className: "text-white text-2xl p-4",
          children: "https://eightballapi.com/api?biased=true&q=will+i+win+the+lottery"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
        className: "text-white ",
        children: ["Send a GET request to this endpoint with a question and it will return a biased response. If the question has positive sentiment, it will return a positive response. Negative sentiment, negative response. You must add ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          className: "italic",
          children: "biased=true"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 20
        }, this), " and", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          className: "italic",
          children: "q"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this), " parameters to your request."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
        className: "text-white text-xl mt-4",
        children: "Example response:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "w-full bg-gray-700 rounded-lg flex items-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          className: "text-white text-xl p-4 break-words",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("code", {
            children: JSON.stringify(exampleBiased)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("footer", {
        className: " mt-5 flex justify-between",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", (_jsxDEV2 = {
          href: true,
          className: "dark:text-white text-white transition-colors",
          target: "_blank",
          rel: "noreferrer"
        }, (0,C_Users_Jacob_Documents_GitHub_magic_eight_ball_api_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV2, "href", "https://github.com/j-sch23/magic-eight-ball-api"), (0,C_Users_Jacob_Documents_GitHub_magic_eight_ball_api_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV2, "children", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "currentColor",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
            d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 13
        }, this)), _jsxDEV2), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/demo",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
            className: " font-bold  dark:text-white text-white transition-colors",
            children: "Demo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDE1ZjJlZTk4MmJkNzY2NzBmYWYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsSUFBTUUsYUFBYSxHQUFHO0FBQ3BCQyxFQUFBQSxPQUFPLEVBQUUscUJBRFc7QUFFcEJDLEVBQUFBLFFBQVEsRUFBRSx3QkFGVTtBQUdwQkMsRUFBQUEsU0FBUyxFQUFFO0FBQ1RDLElBQUFBLEtBQUssRUFBRSxDQURFO0FBRVRDLElBQUFBLFdBQVcsRUFBRSxHQUZKO0FBR1RDLElBQUFBLFdBQVcsRUFBRSxDQUNYO0FBQ0VDLE1BQUFBLEdBQUcsRUFBRTtBQURQLEtBRFcsQ0FISjtBQVFUQyxJQUFBQSxNQUFNLEVBQUUsQ0FBQyxNQUFELEVBQVMsR0FBVCxFQUFjLEtBQWQsRUFBcUIsS0FBckIsRUFBNEIsU0FBNUIsQ0FSQztBQVNUQyxJQUFBQSxLQUFLLEVBQUUsQ0FBQyxLQUFELENBVEU7QUFVVEMsSUFBQUEsUUFBUSxFQUFFLENBQUMsS0FBRCxDQVZEO0FBV1RDLElBQUFBLFFBQVEsRUFBRTtBQVhEO0FBSFMsQ0FBdEI7QUFpQkEsSUFBTUMsYUFBYSxHQUFHO0FBQ3BCWCxFQUFBQSxPQUFPLEVBQUU7QUFEVyxDQUF0QjtBQUllLFNBQVNZLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0Isc0JBQ0U7QUFBSyxhQUFTLEVBQUMsMkZBQWY7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFlBQUksRUFBQyxVQUFYO0FBQXNCLGVBQU8sRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRTtBQUFLLGVBQVMsRUFBQyw2Q0FBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyw0QkFBZjtBQUFBLGdDQUNF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RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E5Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUErRUQ7S0FoRnVCYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuY29uc3QgZXhhbXBsZUJpYXNlZCA9IHtcclxuICByZWFkaW5nOiBcIkl0IGlzIGRlY2lkZWRseSBzby5cIixcclxuICBxdWVzdGlvbjogXCJXaWxsIEkgd2luIHRoZSBsb3R0ZXJ5XCIsXHJcbiAgc2VudGltZW50OiB7XHJcbiAgICBzY29yZTogNCxcclxuICAgIGNvbXBhcmF0aXZlOiAwLjgsXHJcbiAgICBjYWxjdWxhdGlvbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgd2luOiA0LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIHRva2VuczogW1wid2lsbFwiLCBcImlcIiwgXCJ3aW5cIiwgXCJ0aGVcIiwgXCJsb3R0ZXJ5XCJdLFxyXG4gICAgd29yZHM6IFtcIndpblwiXSxcclxuICAgIHBvc2l0aXZlOiBbXCJ3aW5cIl0sXHJcbiAgICBuZWdhdGl2ZTogW10sXHJcbiAgfSxcclxufTtcclxuY29uc3QgZXhhbXBsZVJhbmRvbSA9IHtcclxuICByZWFkaW5nOiBcIlJlcGx5IGhhenksIHRyeSBhZ2Fpbi5cIixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmxhY2sgbWluLWgtc2NyZWVuIHctc2NyZWVuIG92ZXJmbG93LXgtaGlkZGVuIGZsZXggICBqdXN0aWZ5LWNlbnRlciAgbGc6cC0xMCBweS00IHB4LTFcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPk15IHBhZ2UgdGl0bGU8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOm1heC13LTV4bCB3LWZ1bGwgZmxleC1ncm93IGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LWJvbGQgdGV4dC01eGxcIj44IEJhbGw8L2gxPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC14bCBtdC0zXCI+QW4gQVBJPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LXhsXCI+UmFuZG9tIHJlYWRpbmc6PC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmF5LTcwMCByb3VuZGVkLWxnIGZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuZWlnaHRiYWxsYXBpLmNvbS9hcGkvXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LTJ4bCBwLTRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBodHRwczovL2VpZ2h0YmFsbGFwaS5jb20vYXBpL1xyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIFwiPlxyXG4gICAgICAgICAgU2VuZCBhIEdFVCByZXF1ZXN0IHRvIHRoaXMgZW5kcG9pbnQgYW5kIGl0IHJldHVybnMgYSByYW5kb20gOGJhbGxcclxuICAgICAgICAgIHJlc3BvbnNlIG1lc3NhZ2UuXHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LXhsIG10LTRcIj5FeGFtcGxlIHJlc3BvbnNlOjwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctZ3JheS03MDAgcm91bmRlZC1sZyBmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LXhsIHAtNCBcIj5cclxuICAgICAgICAgICAgPGNvZGU+e0pTT04uc3RyaW5naWZ5KGV4YW1wbGVSYW5kb20pfTwvY29kZT5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LXhsIG10LTRcIj5CaWFzZWQgcmVhZGluZzo8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyYXktNzAwIHJvdW5kZWQtbGcgIGZsZXggaXRlbXMtY2VudGVyIFwiPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmVpZ2h0YmFsbGFwaS5jb20vYXBpP2JpYXNlZD10cnVlJnE9d2lsbCtpK3dpbit0aGUrbG90dGVyeVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC0yeGwgcC00XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgaHR0cHM6Ly9laWdodGJhbGxhcGkuY29tL2FwaT9iaWFzZWQ9dHJ1ZSZxPXdpbGwraSt3aW4rdGhlK2xvdHRlcnlcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBcIj5cclxuICAgICAgICAgIFNlbmQgYSBHRVQgcmVxdWVzdCB0byB0aGlzIGVuZHBvaW50IHdpdGggYSBxdWVzdGlvbiBhbmQgaXQgd2lsbCByZXR1cm5cclxuICAgICAgICAgIGEgYmlhc2VkIHJlc3BvbnNlLiBJZiB0aGUgcXVlc3Rpb24gaGFzIHBvc2l0aXZlIHNlbnRpbWVudCwgaXQgd2lsbFxyXG4gICAgICAgICAgcmV0dXJuIGEgcG9zaXRpdmUgcmVzcG9uc2UuIE5lZ2F0aXZlIHNlbnRpbWVudCwgbmVnYXRpdmUgcmVzcG9uc2UuIFlvdVxyXG4gICAgICAgICAgbXVzdCBhZGQgPHNwYW4gY2xhc3NOYW1lPVwiaXRhbGljXCI+Ymlhc2VkPXRydWU8L3NwYW4+IGFuZHtcIiBcIn1cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIml0YWxpY1wiPnE8L3NwYW4+IHBhcmFtZXRlcnMgdG8geW91ciByZXF1ZXN0LlxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC14bCBtdC00XCI+RXhhbXBsZSByZXNwb25zZTo8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyYXktNzAwIHJvdW5kZWQtbGcgZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC14bCBwLTQgYnJlYWstd29yZHNcIj5cclxuICAgICAgICAgICAgPGNvZGU+e0pTT04uc3RyaW5naWZ5KGV4YW1wbGVCaWFzZWQpfTwvY29kZT5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj57XCIgXCJ9XHJcbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCIgbXQtNSBmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgaHJlZlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkYXJrOnRleHQtd2hpdGUgdGV4dC13aGl0ZSB0cmFuc2l0aW9uLWNvbG9yc1wiXHJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2otc2NoMjMvbWFnaWMtZWlnaHQtYmFsbC1hcGlcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCIyNFwiXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMjRcIlxyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMiAwYy02LjYyNiAwLTEyIDUuMzczLTEyIDEyIDAgNS4zMDIgMy40MzggOS44IDguMjA3IDExLjM4Ny41OTkuMTExLjc5My0uMjYxLjc5My0uNTc3di0yLjIzNGMtMy4zMzguNzI2LTQuMDMzLTEuNDE2LTQuMDMzLTEuNDE2LS41NDYtMS4zODctMS4zMzMtMS43NTYtMS4zMzMtMS43NTYtMS4wODktLjc0NS4wODMtLjcyOS4wODMtLjcyOSAxLjIwNS4wODQgMS44MzkgMS4yMzcgMS44MzkgMS4yMzcgMS4wNyAxLjgzNCAyLjgwNyAxLjMwNCAzLjQ5Mi45OTcuMTA3LS43NzUuNDE4LTEuMzA1Ljc2Mi0xLjYwNC0yLjY2NS0uMzA1LTUuNDY3LTEuMzM0LTUuNDY3LTUuOTMxIDAtMS4zMTEuNDY5LTIuMzgxIDEuMjM2LTMuMjIxLS4xMjQtLjMwMy0uNTM1LTEuNTI0LjExNy0zLjE3NiAwIDAgMS4wMDgtLjMyMiAzLjMwMSAxLjIzLjk1Ny0uMjY2IDEuOTgzLS4zOTkgMy4wMDMtLjQwNCAxLjAyLjAwNSAyLjA0Ny4xMzggMy4wMDYuNDA0IDIuMjkxLTEuNTUyIDMuMjk3LTEuMjMgMy4yOTctMS4yMy42NTMgMS42NTMuMjQyIDIuODc0LjExOCAzLjE3Ni43Ny44NCAxLjIzNSAxLjkxMSAxLjIzNSAzLjIyMSAwIDQuNjA5LTIuODA3IDUuNjI0LTUuNDc5IDUuOTIxLjQzLjM3Mi44MjMgMS4xMDIuODIzIDIuMjIydjMuMjkzYzAgLjMxOS4xOTIuNjk0LjgwMS41NzYgNC43NjUtMS41ODkgOC4xOTktNi4wODYgOC4xOTktMTEuMzg2IDAtNi42MjctNS4zNzMtMTItMTItMTJ6XCIgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2RlbW9cIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiIGZvbnQtYm9sZCAgZGFyazp0ZXh0LXdoaXRlIHRleHQtd2hpdGUgdHJhbnNpdGlvbi1jb2xvcnNcIj5cclxuICAgICAgICAgICAgICBEZW1vXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwiTGluayIsImV4YW1wbGVCaWFzZWQiLCJyZWFkaW5nIiwicXVlc3Rpb24iLCJzZW50aW1lbnQiLCJzY29yZSIsImNvbXBhcmF0aXZlIiwiY2FsY3VsYXRpb24iLCJ3aW4iLCJ0b2tlbnMiLCJ3b3JkcyIsInBvc2l0aXZlIiwibmVnYXRpdmUiLCJleGFtcGxlUmFuZG9tIiwiSG9tZSIsIkpTT04iLCJzdHJpbmdpZnkiXSwic291cmNlUm9vdCI6IiJ9