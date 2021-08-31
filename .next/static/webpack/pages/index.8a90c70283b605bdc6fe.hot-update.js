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
          href: "https://",
          className: "text-white text-2xl p-4",
          children: "https://magic-eight-ball-api.herokuapp.com/api/v1"
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
          href: "https://magic-eight-ball-api.herokuapp.com/api/v1/biased?q=Will+I+win+the+lottery",
          className: "text-white text-2xl p-4",
          children: "https://magic-eight-ball-api.herokuapp.com/api/v1/biased?q=(yourquestion)"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGE5MGM3MDI4M2I2MDViZGM2ZmUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsSUFBTUUsYUFBYSxHQUFHO0FBQ3BCQyxFQUFBQSxPQUFPLEVBQUUscUJBRFc7QUFFcEJDLEVBQUFBLFFBQVEsRUFBRSx3QkFGVTtBQUdwQkMsRUFBQUEsU0FBUyxFQUFFO0FBQ1RDLElBQUFBLEtBQUssRUFBRSxDQURFO0FBRVRDLElBQUFBLFdBQVcsRUFBRSxHQUZKO0FBR1RDLElBQUFBLFdBQVcsRUFBRSxDQUNYO0FBQ0VDLE1BQUFBLEdBQUcsRUFBRTtBQURQLEtBRFcsQ0FISjtBQVFUQyxJQUFBQSxNQUFNLEVBQUUsQ0FBQyxNQUFELEVBQVMsR0FBVCxFQUFjLEtBQWQsRUFBcUIsS0FBckIsRUFBNEIsU0FBNUIsQ0FSQztBQVNUQyxJQUFBQSxLQUFLLEVBQUUsQ0FBQyxLQUFELENBVEU7QUFVVEMsSUFBQUEsUUFBUSxFQUFFLENBQUMsS0FBRCxDQVZEO0FBV1RDLElBQUFBLFFBQVEsRUFBRTtBQVhEO0FBSFMsQ0FBdEI7QUFpQkEsSUFBTUMsYUFBYSxHQUFHO0FBQ3BCWCxFQUFBQSxPQUFPLEVBQUU7QUFEVyxDQUF0QjtBQUllLFNBQVNZLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0Isc0JBRUU7QUFBSyxhQUFTLEVBQUMsMkZBQWY7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyw2Q0FBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyw0QkFBZjtBQUFBLGdDQUNFO0FBQUksbUJBQVMsRUFBQywrQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUksbUJBQVMsRUFBQyx5QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUtFO0FBQUksaUJBQVMsRUFBQyxvQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLGVBTUU7QUFBSyxpQkFBUyxFQUFDLGlEQUFmO0FBQUEsK0JBQ0U7QUFDRSxjQUFJLEVBQUMsVUFEUDtBQUVFLG1CQUFTLEVBQUMseUJBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkYsZUFjRTtBQUFJLGlCQUFTLEVBQUMsYUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWRGLGVBa0JFO0FBQUksaUJBQVMsRUFBQyx5QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxCRixlQW1CRTtBQUFLLGlCQUFTLEVBQUMsaURBQWY7QUFBQSwrQkFDRTtBQUFHLG1CQUFTLEVBQUMseUJBQWI7QUFBQSxpQ0FDRTtBQUFBLHNCQUFPQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUgsYUFBZjtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQW5CRixlQXdCRTtBQUFJLGlCQUFTLEVBQUMseUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F4QkYsZUF5QkU7QUFBSyxpQkFBUyxFQUFDLG1EQUFmO0FBQUEsK0JBQ0U7QUFDRSxjQUFJLEVBQUMsbUZBRFA7QUFFRSxtQkFBUyxFQUFDLHlCQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXpCRixlQWlDRTtBQUFJLGlCQUFTLEVBQUMsYUFBZDtBQUFBLGdRQUlhO0FBQU0sbUJBQVMsRUFBQyxRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQ0YsZUF5Q0U7QUFBSSxpQkFBUyxFQUFDLHlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBekNGLGVBMENFO0FBQUssaUJBQVMsRUFBQyxpREFBZjtBQUFBLCtCQUNFO0FBQUcsbUJBQVMsRUFBQyxvQ0FBYjtBQUFBLGlDQUNFO0FBQUEsc0JBQU9FLElBQUksQ0FBQ0MsU0FBTCxDQUFlZixhQUFmO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBMUNGLG9CQThDUztBQUFRLGlCQUFTLEVBQUMsNEJBQWxCO0FBQUEsZ0NBRVQ7QUFBRyxjQUFJLE1BQVA7QUFBUSxtQkFBUyxFQUFDLDhDQUFsQjtBQUFpRSxnQkFBTSxFQUFDLFFBQXhFO0FBQWlGLGFBQUcsRUFBQztBQUFyRixnTEFBdUcsaURBQXZHLHlMQUNFO0FBQUssZUFBSyxFQUFDLDRCQUFYO0FBQ0UsY0FBSSxFQUFDLGNBRFA7QUFFRSxlQUFLLEVBQUMsSUFGUjtBQUdFLGdCQUFNLEVBQUMsSUFIVDtBQUlFLGlCQUFPLEVBQUMsV0FKVjtBQUFBLGlDQUtFO0FBQU0sYUFBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGUyxlQVVULDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLE9BQVg7QUFBQSxpQ0FDRztBQUFJLHFCQUFTLEVBQUMsMERBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTlDVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRkY7QUF1RUQ7S0F4RXVCYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmNvbnN0IGV4YW1wbGVCaWFzZWQgPSB7XHJcbiAgcmVhZGluZzogXCJJdCBpcyBkZWNpZGVkbHkgc28uXCIsXHJcbiAgcXVlc3Rpb246IFwiV2lsbCBJIHdpbiB0aGUgbG90dGVyeVwiLFxyXG4gIHNlbnRpbWVudDoge1xyXG4gICAgc2NvcmU6IDQsXHJcbiAgICBjb21wYXJhdGl2ZTogMC44LFxyXG4gICAgY2FsY3VsYXRpb246IFtcclxuICAgICAge1xyXG4gICAgICAgIHdpbjogNCxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICB0b2tlbnM6IFtcIndpbGxcIiwgXCJpXCIsIFwid2luXCIsIFwidGhlXCIsIFwibG90dGVyeVwiXSxcclxuICAgIHdvcmRzOiBbXCJ3aW5cIl0sXHJcbiAgICBwb3NpdGl2ZTogW1wid2luXCJdLFxyXG4gICAgbmVnYXRpdmU6IFtdLFxyXG4gIH0sXHJcbn07XHJcbmNvbnN0IGV4YW1wbGVSYW5kb20gPSB7XHJcbiAgcmVhZGluZzogXCJSZXBseSBoYXp5LCB0cnkgYWdhaW4uXCIsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICBcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmxhY2sgbWluLWgtc2NyZWVuIHctc2NyZWVuIG92ZXJmbG93LXgtaGlkZGVuIGZsZXggICBqdXN0aWZ5LWNlbnRlciAgbGc6cC0xMCBweS00IHB4LTFcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzptYXgtdy01eGwgdy1mdWxsIGZsZXgtZ3JvdyBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQtNXhsXCI+TWFnaWMgOCBCYWxsPC9oMT5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQteGwgbXQtM1wiPkFuIEFQSTwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC14bFwiPlJhbmRvbSByZWFkaW5nOjwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctZ3JheS03MDAgcm91bmRlZC1sZyBmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LTJ4bCBwLTRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBodHRwczovL21hZ2ljLWVpZ2h0LWJhbGwtYXBpLmhlcm9rdWFwcC5jb20vYXBpL3YxXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgXCI+XHJcbiAgICAgICAgICBTZW5kIGEgR0VUIHJlcXVlc3QgdG8gdGhpcyBlbmRwb2ludCBhbmQgaXQgcmV0dXJucyBhIHJhbmRvbSA4YmFsbFxyXG4gICAgICAgICAgcmVzcG9uc2UgbWVzc2FnZS5cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQteGwgbXQtNFwiPkV4YW1wbGUgcmVzcG9uc2U6PC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmF5LTcwMCByb3VuZGVkLWxnIGZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQteGwgcC00IFwiPlxyXG4gICAgICAgICAgICA8Y29kZT57SlNPTi5zdHJpbmdpZnkoZXhhbXBsZVJhbmRvbSl9PC9jb2RlPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQteGwgbXQtNFwiPkJpYXNlZCByZWFkaW5nOjwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctZ3JheS03MDAgcm91bmRlZC1sZyAgZmxleCBpdGVtcy1jZW50ZXIgXCI+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tYWdpYy1laWdodC1iYWxsLWFwaS5oZXJva3VhcHAuY29tL2FwaS92MS9iaWFzZWQ/cT1XaWxsK0krd2luK3RoZStsb3R0ZXJ5XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LTJ4bCBwLTRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBodHRwczovL21hZ2ljLWVpZ2h0LWJhbGwtYXBpLmhlcm9rdWFwcC5jb20vYXBpL3YxL2JpYXNlZD9xPSh5b3VycXVlc3Rpb24pXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgXCI+XHJcbiAgICAgICAgICBTZW5kIGEgR0VUIHJlcXVlc3QgdG8gdGhpcyBlbmRwb2ludCB3aXRoIGEgcXVlc3Rpb24gYW5kIGl0IHdpbGwgcmV0dXJuXHJcbiAgICAgICAgICBhIGJpYXNlZCByZXNwb25zZS4gSWYgdGhlIHF1ZXN0aW9uIGhhcyBwb3NpdGl2ZSBzZW50aW1lbnQsIGl0IHdpbGxcclxuICAgICAgICAgIHJldHVybiBhIHBvc2l0aXZlIHJlc3BvbnNlLiBOZWdhdGl2ZSBzZW50aW1lbnQsIG5lZ2F0aXZlIHJlc3BvbnNlLiBZb3VcclxuICAgICAgICAgIG11c3QgYWRkIGEgPHNwYW4gY2xhc3NOYW1lPVwiaXRhbGljXCI+cTwvc3Bhbj4gcGFyYW1lbnRlciB0byB5b3VyXHJcbiAgICAgICAgICByZXF1ZXN0IHRvIGF0dGFjaCB5b3VyIHF1ZXN0aW9uIG90aGVyd2lzZSB0aGUgcmVzcG9uc2Ugd2lsbCBhbHdheXMgYmVcclxuICAgICAgICAgIG5ldXRyYWwuXHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LXhsIG10LTRcIj5FeGFtcGxlIHJlc3BvbnNlOjwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctZ3JheS03MDAgcm91bmRlZC1sZyBmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LXhsIHAtNCBicmVhay13b3Jkc1wiPlxyXG4gICAgICAgICAgICA8Y29kZT57SlNPTi5zdHJpbmdpZnkoZXhhbXBsZUJpYXNlZCl9PC9jb2RlPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PiA8Zm9vdGVyIGNsYXNzTmFtZT1cIiBtdC01IGZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgXHJcbiAgICAgIDxhIGhyZWYgY2xhc3NOYW1lPVwiZGFyazp0ZXh0LXdoaXRlIHRleHQtd2hpdGUgdHJhbnNpdGlvbi1jb2xvcnNcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9qLXNjaDIzL21hZ2ljLWVpZ2h0LWJhbGwtYXBpXCI+XHJcbiAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgd2lkdGg9XCIyNFwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIyNFwiXHJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICAgICAgICA8cGF0aCBkPVwiTTEyIDBjLTYuNjI2IDAtMTIgNS4zNzMtMTIgMTIgMCA1LjMwMiAzLjQzOCA5LjggOC4yMDcgMTEuMzg3LjU5OS4xMTEuNzkzLS4yNjEuNzkzLS41Nzd2LTIuMjM0Yy0zLjMzOC43MjYtNC4wMzMtMS40MTYtNC4wMzMtMS40MTYtLjU0Ni0xLjM4Ny0xLjMzMy0xLjc1Ni0xLjMzMy0xLjc1Ni0xLjA4OS0uNzQ1LjA4My0uNzI5LjA4My0uNzI5IDEuMjA1LjA4NCAxLjgzOSAxLjIzNyAxLjgzOSAxLjIzNyAxLjA3IDEuODM0IDIuODA3IDEuMzA0IDMuNDkyLjk5Ny4xMDctLjc3NS40MTgtMS4zMDUuNzYyLTEuNjA0LTIuNjY1LS4zMDUtNS40NjctMS4zMzQtNS40NjctNS45MzEgMC0xLjMxMS40NjktMi4zODEgMS4yMzYtMy4yMjEtLjEyNC0uMzAzLS41MzUtMS41MjQuMTE3LTMuMTc2IDAgMCAxLjAwOC0uMzIyIDMuMzAxIDEuMjMuOTU3LS4yNjYgMS45ODMtLjM5OSAzLjAwMy0uNDA0IDEuMDIuMDA1IDIuMDQ3LjEzOCAzLjAwNi40MDQgMi4yOTEtMS41NTIgMy4yOTctMS4yMyAzLjI5Ny0xLjIzLjY1MyAxLjY1My4yNDIgMi44NzQuMTE4IDMuMTc2Ljc3Ljg0IDEuMjM1IDEuOTExIDEuMjM1IDMuMjIxIDAgNC42MDktMi44MDcgNS42MjQtNS40NzkgNS45MjEuNDMuMzcyLjgyMyAxLjEwMi44MjMgMi4yMjJ2My4yOTNjMCAuMzE5LjE5Mi42OTQuODAxLjU3NiA0Ljc2NS0xLjU4OSA4LjE5OS02LjA4NiA4LjE5OS0xMS4zODYgMC02LjYyNy01LjM3My0xMi0xMi0xMnpcIiAvPjwvc3ZnPlxyXG4gICAgICA8L2E+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvZGVtb1wiPlxyXG4gICAgICAgICA8YSAgY2xhc3NOYW1lPVwiIGZvbnQtYm9sZCAgZGFyazp0ZXh0LXdoaXRlIHRleHQtd2hpdGUgdHJhbnNpdGlvbi1jb2xvcnNcIiAgPlxyXG4gICAgICAgIERlbW9cclxuICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwiTGluayIsImV4YW1wbGVCaWFzZWQiLCJyZWFkaW5nIiwicXVlc3Rpb24iLCJzZW50aW1lbnQiLCJzY29yZSIsImNvbXBhcmF0aXZlIiwiY2FsY3VsYXRpb24iLCJ3aW4iLCJ0b2tlbnMiLCJ3b3JkcyIsInBvc2l0aXZlIiwibmVnYXRpdmUiLCJleGFtcGxlUmFuZG9tIiwiSG9tZSIsIkpTT04iLCJzdHJpbmdpZnkiXSwic291cmNlUm9vdCI6IiJ9