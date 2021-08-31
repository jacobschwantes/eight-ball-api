"use strict";
self["webpackHotUpdate_N_E"]("pages/demo",{

/***/ "./pages/demo.js":
/*!***********************!*\
  !*** ./pages/demo.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Demo; }
/* harmony export */ });
/* harmony import */ var C_Users_Jacob_Documents_GitHub_magic_eight_ball_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Jacob_Documents_GitHub_magic_eight_ball_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Jacob_Documents_GitHub_magic_eight_ball_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Jacob_Documents_GitHub_magic_eight_ball_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Jacob\\Documents\\GitHub\\magic-eight-ball-api\\pages\\demo.js",
    _s = $RefreshSig$();





function Demo() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      res = _useState[0],
      setRes = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      question = _useState2[0],
      setQuestion = _useState2[1];

  var getResponse = /*#__PURE__*/function () {
    var _ref = (0,C_Users_Jacob_Documents_GitHub_magic_eight_ball_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_Jacob_Documents_GitHub_magic_eight_ball_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(question) {
      return C_Users_Jacob_Documents_GitHub_magic_eight_ball_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("api/biased?q=".concat(question)).then(function (response) {
                return response.json();
              }).then(function (data) {
                setRes(data.reading);
              })["catch"](function (err) {
                return alert(err);
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getResponse(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    getResponse(question);
  };

  var handleChange = function handleChange(e) {
    setQuestion(e.target.value);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: "bg-black h-screen flex flex-col justify-center items-center",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("title", {
        children: "8ball Demo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
      className: "font-bold text-white  text-5xl mb-5",
      children: "Magic 8-ball"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("form", {
      onSubmit: handleSubmit,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "flex",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
            htmlFor: "email",
            className: "sr-only",
            children: "Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            onChange: function onChange(e) {
              handleChange(e);
            },
            value: question,
            required: true,
            type: "text",
            name: "email",
            id: "email",
            className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md",
            placeholder: "Will I get promoted?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
          type: "submit",
          className: " ml-2 mb-5 bg-indigo-600 p-2 rounded-md text-white font-bold hover:bg-indigo-700",
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: " text-white text-xl italic",
      children: res
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

_s(Demo, "cgHvF0cVQAOF//fMfy/ZlIxrj0c=");

_c = Demo;

var _c;

$RefreshReg$(_c, "Demo");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGVtby40OTgwMDJiNDJhMGRkNDc1ZjZmOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFDZSxTQUFTRSxJQUFULEdBQWdCO0FBQUE7O0FBQzdCLGtCQUFzQkQsK0NBQVEsQ0FBQyxFQUFELENBQTlCO0FBQUEsTUFBT0UsR0FBUDtBQUFBLE1BQVlDLE1BQVo7O0FBQ0EsbUJBQWdDSCwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFBQSxNQUFPSSxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLE1BQU1DLFdBQVc7QUFBQSx5VEFBRyxpQkFBT0YsUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDWkcsS0FBSyx3QkFBaUJILFFBQWpCLEVBQUwsQ0FDSEksSUFERyxDQUNFLFVBQUNDLFFBQUQ7QUFBQSx1QkFBY0EsUUFBUSxDQUFDQyxJQUFULEVBQWQ7QUFBQSxlQURGLEVBRUhGLElBRkcsQ0FFRSxVQUFDRyxJQUFELEVBQVU7QUFDZFIsZ0JBQUFBLE1BQU0sQ0FBQ1EsSUFBSSxDQUFDQyxPQUFOLENBQU47QUFDRCxlQUpHLFdBS0csVUFBQ0MsR0FBRDtBQUFBLHVCQUFTQyxLQUFLLENBQUNELEdBQUQsQ0FBZDtBQUFBLGVBTEgsQ0FEWTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFYUCxXQUFXO0FBQUE7QUFBQTtBQUFBLEtBQWpCOztBQVFBLE1BQU1TLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBTztBQUMxQkEsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FYLElBQUFBLFdBQVcsQ0FBQ0YsUUFBRCxDQUFYO0FBQ0QsR0FIRDs7QUFJQSxNQUFNYyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDRixDQUFELEVBQU87QUFDMUJYLElBQUFBLFdBQVcsQ0FBQ1csQ0FBQyxDQUFDRyxNQUFGLENBQVNDLEtBQVYsQ0FBWDtBQUNELEdBRkQ7O0FBR0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsNkRBQWY7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFlBQUksRUFBQyxVQUFYO0FBQXNCLGVBQU8sRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRTtBQUFJLGVBQVMsRUFBQyxxQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBTUU7QUFBTSxjQUFRLEVBQUVMLFlBQWhCO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBQSxnQ0FDRTtBQUFBLGtDQUNFO0FBQU8sbUJBQU8sRUFBQyxPQUFmO0FBQXVCLHFCQUFTLEVBQUMsU0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFJRTtBQUNFLG9CQUFRLEVBQUUsa0JBQUNDLENBQUQsRUFBTztBQUNmRSxjQUFBQSxZQUFZLENBQUNGLENBQUQsQ0FBWjtBQUNELGFBSEg7QUFJRSxpQkFBSyxFQUFFWixRQUpUO0FBS0Usb0JBQVEsTUFMVjtBQU1FLGdCQUFJLEVBQUMsTUFOUDtBQU9FLGdCQUFJLEVBQUMsT0FQUDtBQVFFLGNBQUUsRUFBQyxPQVJMO0FBU0UscUJBQVMsRUFBQyw0R0FUWjtBQVVFLHVCQUFXLEVBQUM7QUFWZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQWtCRTtBQUNFLGNBQUksRUFBQyxRQURQO0FBRUUsbUJBQVMsRUFBQyxrRkFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBaUNFO0FBQUssZUFBUyxFQUFDLDRCQUFmO0FBQUEsZ0JBQTZDRjtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBcUNEOztHQXZEdUJEOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kZW1vLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcclxuICBjb25zdCBbcmVzLCBzZXRSZXNdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3F1ZXN0aW9uLCBzZXRRdWVzdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBnZXRSZXNwb25zZSA9IGFzeW5jIChxdWVzdGlvbikgPT4ge1xyXG4gICAgYXdhaXQgZmV0Y2goYGFwaS9iaWFzZWQ/cT0ke3F1ZXN0aW9ufWApXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIHNldFJlcyhkYXRhLnJlYWRpbmcpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gYWxlcnQoZXJyKSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZ2V0UmVzcG9uc2UocXVlc3Rpb24pO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldFF1ZXN0aW9uKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsYWNrIGgtc2NyZWVuIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT44YmFsbCBEZW1vPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXdoaXRlICB0ZXh0LTV4bCBtYi01XCI+TWFnaWMgOC1iYWxsPC9oMT5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwic3Itb25seVwiPlxyXG4gICAgICAgICAgICAgIEVtYWlsXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlKGUpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3F1ZXN0aW9ufVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93LXNtIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpib3JkZXItaW5kaWdvLTUwMCBibG9jayB3LWZ1bGwgc206dGV4dC1zbSBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaWxsIEkgZ2V0IHByb21vdGVkP1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBtbC0yIG1iLTUgYmctaW5kaWdvLTYwMCBwLTIgcm91bmRlZC1tZCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBob3ZlcjpiZy1pbmRpZ28tNzAwXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB0ZXh0LXdoaXRlIHRleHQteGwgaXRhbGljXCI+e3Jlc308L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VTdGF0ZSIsIkRlbW8iLCJyZXMiLCJzZXRSZXMiLCJxdWVzdGlvbiIsInNldFF1ZXN0aW9uIiwiZ2V0UmVzcG9uc2UiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwicmVhZGluZyIsImVyciIsImFsZXJ0IiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9