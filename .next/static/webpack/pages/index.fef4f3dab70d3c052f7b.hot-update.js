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
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "lg:max-w-5xl w-full flex-grow flex flex-col",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "flex flex-col items-center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
          className: "text-white font-bold text-5xl",
          children: "Magic 8 Ball"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
          className: "text-white text-xl mt-3",
          children: "An API"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
        className: "text-white text-xl",
        children: "Random reading:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "w-full bg-gray-700 rounded-lg flex items-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
          href: "https://www.eightballapi.com/api/",
          className: "text-white text-2xl p-4",
          children: "https://eightballapi.com/api/"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
        className: "text-white ",
        children: "Send a GET request to this endpoint and it returns a random 8ball response message."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
        className: "text-white text-xl mt-4",
        children: "Example response:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "w-full bg-gray-700 rounded-lg flex items-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          className: "text-white text-xl p-4 ",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("code", {
            children: JSON.stringify(exampleRandom)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
        className: "text-white text-xl mt-4",
        children: "Biased reading:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "w-full bg-gray-700 rounded-lg  flex items-center ",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
          href: "https://www.eightballapi.com/api?biased=true&q=will+i+win+the+lottery",
          className: "text-white text-2xl p-4",
          children: "https://eightballapi.com/api?biased=true&q=will+i+win+the+lottery"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
        className: "text-white ",
        children: ["Send a GET request to this endpoint with a question and it will return a biased response. If the question has positive sentiment, it will return a positive response. Negative sentiment, negative response. You must add a ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          className: "italic",
          children: "biased=true"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 22
        }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          className: "italic",
          children: "q"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 66
        }, this), " paramenter to your request to attach your question otherwise the response will always be neutral."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
        className: "text-white text-xl mt-4",
        children: "Example response:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "w-full bg-gray-700 rounded-lg flex items-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          className: "text-white text-xl p-4 break-words",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("code", {
            children: JSON.stringify(exampleBiased)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
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
            lineNumber: 82,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 9
        }, this)), _jsxDEV2), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/demo",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
            className: " font-bold  dark:text-white text-white transition-colors",
            children: "Demo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 10
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 16
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmVmNGYzZGFiNzBkM2MwNTJmN2IuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsSUFBTUUsYUFBYSxHQUFHO0FBQ3BCQyxFQUFBQSxPQUFPLEVBQUUscUJBRFc7QUFFcEJDLEVBQUFBLFFBQVEsRUFBRSx3QkFGVTtBQUdwQkMsRUFBQUEsU0FBUyxFQUFFO0FBQ1RDLElBQUFBLEtBQUssRUFBRSxDQURFO0FBRVRDLElBQUFBLFdBQVcsRUFBRSxHQUZKO0FBR1RDLElBQUFBLFdBQVcsRUFBRSxDQUNYO0FBQ0VDLE1BQUFBLEdBQUcsRUFBRTtBQURQLEtBRFcsQ0FISjtBQVFUQyxJQUFBQSxNQUFNLEVBQUUsQ0FBQyxNQUFELEVBQVMsR0FBVCxFQUFjLEtBQWQsRUFBcUIsS0FBckIsRUFBNEIsU0FBNUIsQ0FSQztBQVNUQyxJQUFBQSxLQUFLLEVBQUUsQ0FBQyxLQUFELENBVEU7QUFVVEMsSUFBQUEsUUFBUSxFQUFFLENBQUMsS0FBRCxDQVZEO0FBV1RDLElBQUFBLFFBQVEsRUFBRTtBQVhEO0FBSFMsQ0FBdEI7QUFpQkEsSUFBTUMsYUFBYSxHQUFHO0FBQ3BCWCxFQUFBQSxPQUFPLEVBQUU7QUFEVyxDQUF0QjtBQUllLFNBQVNZLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0Isc0JBRUU7QUFBSyxhQUFTLEVBQUMsMkZBQWY7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyw2Q0FBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyw0QkFBZjtBQUFBLGdDQUNFO0FBQUksbUJBQVMsRUFBQywrQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUksbUJBQVMsRUFBQyx5QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUtFO0FBQUksaUJB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cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5jb25zdCBleGFtcGxlQmlhc2VkID0ge1xyXG4gIHJlYWRpbmc6IFwiSXQgaXMgZGVjaWRlZGx5IHNvLlwiLFxyXG4gIHF1ZXN0aW9uOiBcIldpbGwgSSB3aW4gdGhlIGxvdHRlcnlcIixcclxuICBzZW50aW1lbnQ6IHtcclxuICAgIHNjb3JlOiA0LFxyXG4gICAgY29tcGFyYXRpdmU6IDAuOCxcclxuICAgIGNhbGN1bGF0aW9uOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB3aW46IDQsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgdG9rZW5zOiBbXCJ3aWxsXCIsIFwiaVwiLCBcIndpblwiLCBcInRoZVwiLCBcImxvdHRlcnlcIl0sXHJcbiAgICB3b3JkczogW1wid2luXCJdLFxyXG4gICAgcG9zaXRpdmU6IFtcIndpblwiXSxcclxuICAgIG5lZ2F0aXZlOiBbXSxcclxuICB9LFxyXG59O1xyXG5jb25zdCBleGFtcGxlUmFuZG9tID0ge1xyXG4gIHJlYWRpbmc6IFwiUmVwbHkgaGF6eSwgdHJ5IGFnYWluLlwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsYWNrIG1pbi1oLXNjcmVlbiB3LXNjcmVlbiBvdmVyZmxvdy14LWhpZGRlbiBmbGV4ICAganVzdGlmeS1jZW50ZXIgIGxnOnAtMTAgcHktNCBweC0xXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6bWF4LXctNXhsIHctZnVsbCBmbGV4LWdyb3cgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtYm9sZCB0ZXh0LTV4bFwiPk1hZ2ljIDggQmFsbDwvaDE+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LXhsIG10LTNcIj5BbiBBUEk8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQteGxcIj5SYW5kb20gcmVhZGluZzo8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyYXktNzAwIHJvdW5kZWQtbGcgZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5laWdodGJhbGxhcGkuY29tL2FwaS9cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtMnhsIHAtNFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIGh0dHBzOi8vZWlnaHRiYWxsYXBpLmNvbS9hcGkvXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgXCI+XHJcbiAgICAgICAgICBTZW5kIGEgR0VUIHJlcXVlc3QgdG8gdGhpcyBlbmRwb2ludCBhbmQgaXQgcmV0dXJucyBhIHJhbmRvbSA4YmFsbFxyXG4gICAgICAgICAgcmVzcG9uc2UgbWVzc2FnZS5cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQteGwgbXQtNFwiPkV4YW1wbGUgcmVzcG9uc2U6PC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmF5LTcwMCByb3VuZGVkLWxnIGZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQteGwgcC00IFwiPlxyXG4gICAgICAgICAgICA8Y29kZT57SlNPTi5zdHJpbmdpZnkoZXhhbXBsZVJhbmRvbSl9PC9jb2RlPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQteGwgbXQtNFwiPkJpYXNlZCByZWFkaW5nOjwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctZ3JheS03MDAgcm91bmRlZC1sZyAgZmxleCBpdGVtcy1jZW50ZXIgXCI+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuZWlnaHRiYWxsYXBpLmNvbS9hcGk/Ymlhc2VkPXRydWUmcT13aWxsK2krd2luK3RoZStsb3R0ZXJ5XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LTJ4bCBwLTRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBodHRwczovL2VpZ2h0YmFsbGFwaS5jb20vYXBpP2JpYXNlZD10cnVlJnE9d2lsbCtpK3dpbit0aGUrbG90dGVyeVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIFwiPlxyXG4gICAgICAgICAgU2VuZCBhIEdFVCByZXF1ZXN0IHRvIHRoaXMgZW5kcG9pbnQgd2l0aCBhIHF1ZXN0aW9uIGFuZCBpdCB3aWxsIHJldHVyblxyXG4gICAgICAgICAgYSBiaWFzZWQgcmVzcG9uc2UuIElmIHRoZSBxdWVzdGlvbiBoYXMgcG9zaXRpdmUgc2VudGltZW50LCBpdCB3aWxsXHJcbiAgICAgICAgICByZXR1cm4gYSBwb3NpdGl2ZSByZXNwb25zZS4gTmVnYXRpdmUgc2VudGltZW50LCBuZWdhdGl2ZSByZXNwb25zZS4gWW91XHJcbiAgICAgICAgICBtdXN0IGFkZCBhIDxzcGFuIGNsYXNzTmFtZT1cIml0YWxpY1wiPmJpYXNlZD10cnVlPC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9XCJpdGFsaWNcIj5xPC9zcGFuPiBwYXJhbWVudGVyIHRvIHlvdXJcclxuICAgICAgICAgIHJlcXVlc3QgdG8gYXR0YWNoIHlvdXIgcXVlc3Rpb24gb3RoZXJ3aXNlIHRoZSByZXNwb25zZSB3aWxsIGFsd2F5cyBiZVxyXG4gICAgICAgICAgbmV1dHJhbC5cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQteGwgbXQtNFwiPkV4YW1wbGUgcmVzcG9uc2U6PC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmF5LTcwMCByb3VuZGVkLWxnIGZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQteGwgcC00IGJyZWFrLXdvcmRzXCI+XHJcbiAgICAgICAgICAgIDxjb2RlPntKU09OLnN0cmluZ2lmeShleGFtcGxlQmlhc2VkKX08L2NvZGU+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+IDxmb290ZXIgY2xhc3NOYW1lPVwiIG10LTUgZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICBcclxuICAgICAgPGEgaHJlZiBjbGFzc05hbWU9XCJkYXJrOnRleHQtd2hpdGUgdGV4dC13aGl0ZSB0cmFuc2l0aW9uLWNvbG9yc1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2otc2NoMjMvbWFnaWMtZWlnaHQtYmFsbC1hcGlcIj5cclxuICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICB3aWR0aD1cIjI0XCJcclxuICAgICAgICAgIGhlaWdodD1cIjI0XCJcclxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICAgIDxwYXRoIGQ9XCJNMTIgMGMtNi42MjYgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAyIDMuNDM4IDkuOCA4LjIwNyAxMS4zODcuNTk5LjExMS43OTMtLjI2MS43OTMtLjU3N3YtMi4yMzRjLTMuMzM4LjcyNi00LjAzMy0xLjQxNi00LjAzMy0xLjQxNi0uNTQ2LTEuMzg3LTEuMzMzLTEuNzU2LTEuMzMzLTEuNzU2LTEuMDg5LS43NDUuMDgzLS43MjkuMDgzLS43MjkgMS4yMDUuMDg0IDEuODM5IDEuMjM3IDEuODM5IDEuMjM3IDEuMDcgMS44MzQgMi44MDcgMS4zMDQgMy40OTIuOTk3LjEwNy0uNzc1LjQxOC0xLjMwNS43NjItMS42MDQtMi42NjUtLjMwNS01LjQ2Ny0xLjMzNC01LjQ2Ny01LjkzMSAwLTEuMzExLjQ2OS0yLjM4MSAxLjIzNi0zLjIyMS0uMTI0LS4zMDMtLjUzNS0xLjUyNC4xMTctMy4xNzYgMCAwIDEuMDA4LS4zMjIgMy4zMDEgMS4yMy45NTctLjI2NiAxLjk4My0uMzk5IDMuMDAzLS40MDQgMS4wMi4wMDUgMi4wNDcuMTM4IDMuMDA2LjQwNCAyLjI5MS0xLjU1MiAzLjI5Ny0xLjIzIDMuMjk3LTEuMjMuNjUzIDEuNjUzLjI0MiAyLjg3NC4xMTggMy4xNzYuNzcuODQgMS4yMzUgMS45MTEgMS4yMzUgMy4yMjEgMCA0LjYwOS0yLjgwNyA1LjYyNC01LjQ3OSA1LjkyMS40My4zNzIuODIzIDEuMTAyLjgyMyAyLjIyMnYzLjI5M2MwIC4zMTkuMTkyLjY5NC44MDEuNTc2IDQuNzY1LTEuNTg5IDguMTk5LTYuMDg2IDguMTk5LTExLjM4NiAwLTYuNjI3LTUuMzczLTEyLTEyLTEyelwiIC8+PC9zdmc+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPExpbmsgaHJlZj1cIi9kZW1vXCI+XHJcbiAgICAgICAgIDxhICBjbGFzc05hbWU9XCIgZm9udC1ib2xkICBkYXJrOnRleHQtd2hpdGUgdGV4dC13aGl0ZSB0cmFuc2l0aW9uLWNvbG9yc1wiICA+XHJcbiAgICAgICAgRGVtb1xyXG4gICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICBcclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkhlYWQiLCJMaW5rIiwiZXhhbXBsZUJpYXNlZCIsInJlYWRpbmciLCJxdWVzdGlvbiIsInNlbnRpbWVudCIsInNjb3JlIiwiY29tcGFyYXRpdmUiLCJjYWxjdWxhdGlvbiIsIndpbiIsInRva2VucyIsIndvcmRzIiwicG9zaXRpdmUiLCJuZWdhdGl2ZSIsImV4YW1wbGVSYW5kb20iLCJIb21lIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=