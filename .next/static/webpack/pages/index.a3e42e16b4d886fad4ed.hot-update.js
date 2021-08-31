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
        children: ["Send a GET request to this endpoint with a question and it will return a biased response. If the question has positive sentiment, it will return a positive response. Negative sentiment, negative response. You must add a ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("code", {
          children: "q"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 22
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTNlNDJlMTZiNGQ4ODZmYWQ0ZWQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsSUFBTUUsYUFBYSxHQUFHO0FBQ3BCQyxFQUFBQSxPQUFPLEVBQUUscUJBRFc7QUFFcEJDLEVBQUFBLFFBQVEsRUFBRSx3QkFGVTtBQUdwQkMsRUFBQUEsU0FBUyxFQUFFO0FBQ1RDLElBQUFBLEtBQUssRUFBRSxDQURFO0FBRVRDLElBQUFBLFdBQVcsRUFBRSxHQUZKO0FBR1RDLElBQUFBLFdBQVcsRUFBRSxDQUNYO0FBQ0VDLE1BQUFBLEdBQUcsRUFBRTtBQURQLEtBRFcsQ0FISjtBQVFUQyxJQUFBQSxNQUFNLEVBQUUsQ0FBQyxNQUFELEVBQVMsR0FBVCxFQUFjLEtBQWQsRUFBcUIsS0FBckIsRUFBNEIsU0FBNUIsQ0FSQztBQVNUQyxJQUFBQSxLQUFLLEVBQUUsQ0FBQyxLQUFELENBVEU7QUFVVEMsSUFBQUEsUUFBUSxFQUFFLENBQUMsS0FBRCxDQVZEO0FBV1RDLElBQUFBLFFBQVEsRUFBRTtBQVhEO0FBSFMsQ0FBdEI7QUFpQkEsSUFBTUMsYUFBYSxHQUFHO0FBQ3BCWCxFQUFBQSxPQUFPLEVBQUU7QUFEVyxDQUF0QjtBQUllLFNBQVNZLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0Isc0JBRUU7QUFBSyxhQUFTLEVBQUMsMkZBQWY7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyw2Q0FBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyw0QkFBZjtBQUFBLGdDQUNFO0FBQUksbUJBQVMsRUFBQywrQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUksbUJBQVMsRUFBQyx5QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUtFO0FBQUksaUJBQVMsRUFBQyxvQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLGVBTUU7QUFBSyxpQkFBUyxFQUFDLGlEQUFmO0FBQUEsK0JBQ0U7QUFDRSxjQUFJLEVBQUMsbUNBRFA7QUFFRSxtQkFBUyxFQUFDLHlCQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GLGVBY0U7QUFBSSxpQkFBUyxFQUFDLGFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FkRixlQWtCRTtBQUFJLGlCQUFTLEVBQUMseUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsQkYsZUFtQkU7QUFBSyxpQkFBUyxFQUFDLGlEQUFmO0FBQUEsK0JBQ0U7QUFBRyxtQkFBUyxFQUFDLHlCQUFiO0FBQUEsaUNBQ0U7QUFBQSxzQkFBT0MsSUFBSSxDQUFDQyxTQUFMLENBQWVILGFBQWY7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FuQkYsZUF3QkU7QUFBSSxpQkFBUyxFQUFDLHlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBeEJGLGVBeUJFO0FBQUssaUJBQVMsRUFBQyxtREFBZjtBQUFBLCtCQUNFO0FBQ0UsY0FBSSxFQUFDLHVFQURQO0FBRUUsbUJBQVMsRUFBQyx5QkFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F6QkYsZUFpQ0U7QUFBSSxpQkFBUyxFQUFDLGFBQWQ7QUFBQSxnUUFJYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQ0YsZUF5Q0U7QUFBSSxpQkFBUyxFQUFDLHlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBekNGLGVBMENFO0FBQUssaUJBQVMsRUFBQyxpREFBZjtBQUFBLCtCQUNFO0FBQUcsbUJBQVMsRUFBQyxvQ0FBYjtBQUFBLGlDQUNFO0FBQUEsc0JBQU9FLElBQUksQ0FBQ0MsU0FBTCxDQUFlZixhQUFmO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBMUNGLG9CQThDUztBQUFRLGlCQUFTLEVBQUMsNEJBQWxCO0FBQUEsZ0NBRVQ7QUFBRyxjQUFJLE1BQVA7QUFBUSxtQkFBUyxFQUFDLDhDQUFsQjtBQUFpRSxnQkFBTSxFQUFDLFFBQXhFO0FBQWlGLGFBQUcsRUFBQztBQUFyRixnTEFBdUcsaURBQXZHLHlMQUNFO0FBQUssZUFBSyxFQUFDLDRCQUFYO0FBQ0UsY0FBSSxFQUFDLGNBRFA7QUFFRSxlQUFLLEVBQUMsSUFGUjtBQUdFLGdCQUFNLEVBQUMsSUFIVDtBQUlFLGlCQUFPLEVBQUMsV0FKVjtBQUFBLGlDQUtFO0FBQU0sYUFBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGUyxlQVVULDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLE9BQVg7QUFBQSxpQ0FDRztBQUFJLHFCQUFTLEVBQUMsMERBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTlDVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRkY7QUF1RUQ7S0F4RXVCYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmNvbnN0IGV4YW1wbGVCaWFzZWQgPSB7XHJcbiAgcmVhZGluZzogXCJJdCBpcyBkZWNpZGVkbHkgc28uXCIsXHJcbiAgcXVlc3Rpb246IFwiV2lsbCBJIHdpbiB0aGUgbG90dGVyeVwiLFxyXG4gIHNlbnRpbWVudDoge1xyXG4gICAgc2NvcmU6IDQsXHJcbiAgICBjb21wYXJhdGl2ZTogMC44LFxyXG4gICAgY2FsY3VsYXRpb246IFtcclxuICAgICAge1xyXG4gICAgICAgIHdpbjogNCxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICB0b2tlbnM6IFtcIndpbGxcIiwgXCJpXCIsIFwid2luXCIsIFwidGhlXCIsIFwibG90dGVyeVwiXSxcclxuICAgIHdvcmRzOiBbXCJ3aW5cIl0sXHJcbiAgICBwb3NpdGl2ZTogW1wid2luXCJdLFxyXG4gICAgbmVnYXRpdmU6IFtdLFxyXG4gIH0sXHJcbn07XHJcbmNvbnN0IGV4YW1wbGVSYW5kb20gPSB7XHJcbiAgcmVhZGluZzogXCJSZXBseSBoYXp5LCB0cnkgYWdhaW4uXCIsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICBcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmxhY2sgbWluLWgtc2NyZWVuIHctc2NyZWVuIG92ZXJmbG93LXgtaGlkZGVuIGZsZXggICBqdXN0aWZ5LWNlbnRlciAgbGc6cC0xMCBweS00IHB4LTFcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzptYXgtdy01eGwgdy1mdWxsIGZsZXgtZ3JvdyBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQtNXhsXCI+TWFnaWMgOCBCYWxsPC9oMT5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQteGwgbXQtM1wiPkFuIEFQSTwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC14bFwiPlJhbmRvbSByZWFkaW5nOjwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctZ3JheS03MDAgcm91bmRlZC1sZyBmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmVpZ2h0YmFsbGFwaS5jb20vYXBpL1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC0yeGwgcC00XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgaHR0cHM6Ly9laWdodGJhbGxhcGkuY29tL2FwaS9cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBcIj5cclxuICAgICAgICAgIFNlbmQgYSBHRVQgcmVxdWVzdCB0byB0aGlzIGVuZHBvaW50IGFuZCBpdCByZXR1cm5zIGEgcmFuZG9tIDhiYWxsXHJcbiAgICAgICAgICByZXNwb25zZSBtZXNzYWdlLlxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC14bCBtdC00XCI+RXhhbXBsZSByZXNwb25zZTo8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyYXktNzAwIHJvdW5kZWQtbGcgZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC14bCBwLTQgXCI+XHJcbiAgICAgICAgICAgIDxjb2RlPntKU09OLnN0cmluZ2lmeShleGFtcGxlUmFuZG9tKX08L2NvZGU+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC14bCBtdC00XCI+Qmlhc2VkIHJlYWRpbmc6PC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmF5LTcwMCByb3VuZGVkLWxnICBmbGV4IGl0ZW1zLWNlbnRlciBcIj5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5laWdodGJhbGxhcGkuY29tL2FwaT9iaWFzZWQ9dHJ1ZSZxPXdpbGwraSt3aW4rdGhlK2xvdHRlcnlcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtMnhsIHAtNFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIGh0dHBzOi8vZWlnaHRiYWxsYXBpLmNvbS9hcGk/Ymlhc2VkPXRydWUmcT13aWxsK2krd2luK3RoZStsb3R0ZXJ5XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgXCI+XHJcbiAgICAgICAgICBTZW5kIGEgR0VUIHJlcXVlc3QgdG8gdGhpcyBlbmRwb2ludCB3aXRoIGEgcXVlc3Rpb24gYW5kIGl0IHdpbGwgcmV0dXJuXHJcbiAgICAgICAgICBhIGJpYXNlZCByZXNwb25zZS4gSWYgdGhlIHF1ZXN0aW9uIGhhcyBwb3NpdGl2ZSBzZW50aW1lbnQsIGl0IHdpbGxcclxuICAgICAgICAgIHJldHVybiBhIHBvc2l0aXZlIHJlc3BvbnNlLiBOZWdhdGl2ZSBzZW50aW1lbnQsIG5lZ2F0aXZlIHJlc3BvbnNlLiBZb3VcclxuICAgICAgICAgIG11c3QgYWRkIGEgPGNvZGUgPnE8L2NvZGU+IHBhcmFtZW50ZXIgdG8geW91clxyXG4gICAgICAgICAgcmVxdWVzdCB0byBhdHRhY2ggeW91ciBxdWVzdGlvbiBvdGhlcndpc2UgdGhlIHJlc3BvbnNlIHdpbGwgYWx3YXlzIGJlXHJcbiAgICAgICAgICBuZXV0cmFsLlxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC14bCBtdC00XCI+RXhhbXBsZSByZXNwb25zZTo8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyYXktNzAwIHJvdW5kZWQtbGcgZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC14bCBwLTQgYnJlYWstd29yZHNcIj5cclxuICAgICAgICAgICAgPGNvZGU+e0pTT04uc3RyaW5naWZ5KGV4YW1wbGVCaWFzZWQpfTwvY29kZT5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj4gPGZvb3RlciBjbGFzc05hbWU9XCIgbXQtNSBmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgIFxyXG4gICAgICA8YSBocmVmIGNsYXNzTmFtZT1cImRhcms6dGV4dC13aGl0ZSB0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vai1zY2gyMy9tYWdpYy1laWdodC1iYWxsLWFwaVwiPlxyXG4gICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgIHdpZHRoPVwiMjRcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiMjRcIlxyXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgICAgPHBhdGggZD1cIk0xMiAwYy02LjYyNiAwLTEyIDUuMzczLTEyIDEyIDAgNS4zMDIgMy40MzggOS44IDguMjA3IDExLjM4Ny41OTkuMTExLjc5My0uMjYxLjc5My0uNTc3di0yLjIzNGMtMy4zMzguNzI2LTQuMDMzLTEuNDE2LTQuMDMzLTEuNDE2LS41NDYtMS4zODctMS4zMzMtMS43NTYtMS4zMzMtMS43NTYtMS4wODktLjc0NS4wODMtLjcyOS4wODMtLjcyOSAxLjIwNS4wODQgMS44MzkgMS4yMzcgMS44MzkgMS4yMzcgMS4wNyAxLjgzNCAyLjgwNyAxLjMwNCAzLjQ5Mi45OTcuMTA3LS43NzUuNDE4LTEuMzA1Ljc2Mi0xLjYwNC0yLjY2NS0uMzA1LTUuNDY3LTEuMzM0LTUuNDY3LTUuOTMxIDAtMS4zMTEuNDY5LTIuMzgxIDEuMjM2LTMuMjIxLS4xMjQtLjMwMy0uNTM1LTEuNTI0LjExNy0zLjE3NiAwIDAgMS4wMDgtLjMyMiAzLjMwMSAxLjIzLjk1Ny0uMjY2IDEuOTgzLS4zOTkgMy4wMDMtLjQwNCAxLjAyLjAwNSAyLjA0Ny4xMzggMy4wMDYuNDA0IDIuMjkxLTEuNTUyIDMuMjk3LTEuMjMgMy4yOTctMS4yMy42NTMgMS42NTMuMjQyIDIuODc0LjExOCAzLjE3Ni43Ny44NCAxLjIzNSAxLjkxMSAxLjIzNSAzLjIyMSAwIDQuNjA5LTIuODA3IDUuNjI0LTUuNDc5IDUuOTIxLjQzLjM3Mi44MjMgMS4xMDIuODIzIDIuMjIydjMuMjkzYzAgLjMxOS4xOTIuNjk0LjgwMS41NzYgNC43NjUtMS41ODkgOC4xOTktNi4wODYgOC4xOTktMTEuMzg2IDAtNi42MjctNS4zNzMtMTItMTItMTJ6XCIgLz48L3N2Zz5cclxuICAgICAgPC9hPlxyXG4gICAgICA8TGluayBocmVmPVwiL2RlbW9cIj5cclxuICAgICAgICAgPGEgIGNsYXNzTmFtZT1cIiBmb250LWJvbGQgIGRhcms6dGV4dC13aGl0ZSB0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzXCIgID5cclxuICAgICAgICBEZW1vXHJcbiAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgPC9mb290ZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiSGVhZCIsIkxpbmsiLCJleGFtcGxlQmlhc2VkIiwicmVhZGluZyIsInF1ZXN0aW9uIiwic2VudGltZW50Iiwic2NvcmUiLCJjb21wYXJhdGl2ZSIsImNhbGN1bGF0aW9uIiwid2luIiwidG9rZW5zIiwid29yZHMiLCJwb3NpdGl2ZSIsIm5lZ2F0aXZlIiwiZXhhbXBsZVJhbmRvbSIsIkhvbWUiLCJKU09OIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==