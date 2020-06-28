webpackHotUpdate("static\\development\\pages\\testpage.js",{

/***/ "./pages/testpage.jsx":
/*!****************************!*\
  !*** ./pages/testpage.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./config.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_5__);



var _this = undefined,
    _jsxFileName = "D:\\Koomik\\fe_pokekoo\\pages\\testpage.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var Testpage = function Testpage(_ref) {
  var _ref$pokemon = _ref.pokemon,
      pokemon = _ref$pokemon === void 0 ? [] : _ref$pokemon,
      token = _ref.token,
      count = _ref.count;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, console.log(token), "ss", __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, "POKEMON FOREST  "), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, pokemon.map(function (pokemon) {
    return __jsx("li", {
      key: pokemon.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 15
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }
    }, pokemon.sprites.front_default, " "));
  })));
};

_c = Testpage;
Testpage.getInitialProps = fetchData;

function fetchData() {
  return _fetchData.apply(this, arguments);
}

function _fetchData() {
  _fetchData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var token, initialURL, header, fetchRes, res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get('token');
            initialURL = "".concat(_config__WEBPACK_IMPORTED_MODULE_5__["API"], "/pokedex/add");
            header = {
              headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + token
              }
            };
            _context.next = 5;
            return fetch(initialURL, header);

          case 5:
            fetchRes = _context.sent;
            _context.next = 8;
            return fetchRes.json();

          case 8:
            res = _context.sent;
            console.log(res.results);
            return _context.abrupt("return", {
              pokemon: res.results,
              token: token
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchData.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (Testpage);

var _c;

$RefreshReg$(_c, "Testpage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90ZXN0cGFnZS5qc3giXSwibmFtZXMiOlsiVGVzdHBhZ2UiLCJwb2tlbW9uIiwidG9rZW4iLCJjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJuYW1lIiwic3ByaXRlcyIsImZyb250X2RlZmF1bHQiLCJnZXRJbml0aWFsUHJvcHMiLCJmZXRjaERhdGEiLCJDb29raWVzIiwiZ2V0IiwiaW5pdGlhbFVSTCIsIkFQSSIsImhlYWRlciIsImhlYWRlcnMiLCJBY2NlcHQiLCJBdXRob3JpemF0aW9uIiwiZmV0Y2giLCJmZXRjaFJlcyIsImpzb24iLCJyZXMiLCJyZXN1bHRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUdBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsMEJBQUVDLE9BQUY7QUFBQSxNQUFFQSxPQUFGLDZCQUFZLEVBQVo7QUFBQSxNQUFnQkMsS0FBaEIsUUFBZ0JBLEtBQWhCO0FBQUEsTUFBdUJDLEtBQXZCLFFBQXVCQSxLQUF2QjtBQUFBLFNBR2I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBWixDQURKLFFBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGSixFQUdJO0FBQUksYUFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRCxPQUFPLENBQUNLLEdBQVIsQ0FBWSxVQUFBTCxPQUFPLEVBQUk7QUFFdEIsV0FDRTtBQUFJLFNBQUcsRUFBRUEsT0FBTyxDQUFDTSxJQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFPTixPQUFPLENBQUNPLE9BQVIsQ0FBZ0JDLGFBQXZCLE1BREYsQ0FERjtBQU1ELEdBUkEsQ0FESCxDQUhKLENBSGE7QUFBQSxDQUFqQjs7S0FBTVQsUTtBQXNCTkEsUUFBUSxDQUFDVSxlQUFULEdBQTJCQyxTQUEzQjs7U0FFZUEsUzs7Ozs7Z01BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVFULGlCQUZSLEdBRWdCVSxnREFBTyxDQUFDQyxHQUFSLENBQVksT0FBWixDQUZoQjtBQUdRQyxzQkFIUixhQUd3QkMsMkNBSHhCO0FBSVFDLGtCQUpSLEdBSWlCO0FBQUNDLHFCQUFPLEVBQUU7QUFDdkJDLHNCQUFNLEVBQUUsa0JBRGU7QUFFdkJDLDZCQUFhLEVBQUUsWUFBVWpCO0FBRkY7QUFBVixhQUpqQjtBQUFBO0FBQUEsbUJBU3lCa0IsS0FBSyxDQUFDTixVQUFELEVBQWFFLE1BQWIsQ0FUOUI7O0FBQUE7QUFTUUssb0JBVFI7QUFBQTtBQUFBLG1CQVVvQkEsUUFBUSxDQUFDQyxJQUFULEVBVnBCOztBQUFBO0FBVVFDLGVBVlI7QUFhRW5CLG1CQUFPLENBQUNDLEdBQVIsQ0FBWWtCLEdBQUcsQ0FBQ0MsT0FBaEI7QUFiRiw2Q0FjUztBQUNMdkIscUJBQU8sRUFBRXNCLEdBQUcsQ0FBQ0MsT0FEUjtBQUVMdEIsbUJBQUssRUFBTEE7QUFGSyxhQWRUOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFvQmlCRix1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcdGVzdHBhZ2UuanMuMGQ4NjY4MGQwMjIyYWM4ZjdjYmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCAsIHsgdXNlU3RhdGUgfSAgZnJvbSAncmVhY3QnXHJcbmltcG9ydCAgJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuXHJcbmltcG9ydCB7IEFQSSB9IGZyb20gJy4uL2NvbmZpZyc7XHJcblxyXG5cclxuY29uc3QgVGVzdHBhZ2UgPSAoe3Bva2Vtb24gPSBbXSwgdG9rZW4gLGNvdW50fSkgPT4oXHJcblxyXG4gXHJcbiAgICA8ZGl2PlxyXG4gICAgICAge2NvbnNvbGUubG9nKHRva2VuKX1cclxuICAgICAgc3M8aDI+UE9LRU1PTiBGT1JFU1QgIDwvaDI+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3RcIj5cclxuICAgICAgICAgIHtwb2tlbW9uLm1hcChwb2tlbW9uID0+IHtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8bGkga2V5PXtwb2tlbW9uLm5hbWV9ID5cclxuICAgICAgICAgICAgICAgIDxzcGFuPntwb2tlbW9uLnNwcml0ZXMuZnJvbnRfZGVmYXVsdH0gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4pXHJcblxyXG5cclxuXHJcblRlc3RwYWdlLmdldEluaXRpYWxQcm9wcyA9IGZldGNoRGF0YTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcclxuICBcclxuICBjb25zdCB0b2tlbiA9IENvb2tpZXMuZ2V0KCd0b2tlbicpXHJcbiAgY29uc3QgaW5pdGlhbFVSTCA9IGAke0FQSX0vcG9rZWRleC9hZGRgO1xyXG4gIGNvbnN0IGhlYWRlciA9IHtoZWFkZXJzOiB7XHJcbiAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyt0b2tlbixcclxufX1cclxuICBcclxuICBjb25zdCBmZXRjaFJlcyA9IGF3YWl0IGZldGNoKGluaXRpYWxVUkwsIGhlYWRlcilcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaFJlcy5qc29uKClcclxuICBcclxuXHJcbiAgY29uc29sZS5sb2cocmVzLnJlc3VsdHMpXHJcbiAgcmV0dXJuIHtcclxuICAgIHBva2Vtb246IHJlcy5yZXN1bHRzLFxyXG4gICAgdG9rZW5cclxuICB9XHJcbn1cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgVGVzdHBhZ2UiXSwic291cmNlUm9vdCI6IiJ9