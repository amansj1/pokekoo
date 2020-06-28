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
      token = _ref.token;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, console.log(pokemon.data), console.log(token), "ss", __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "POKEMON FOREST  "), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 8
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 12
    }
  }, pokemon.id)));
};

_c = Testpage;
Testpage.getInitialProps = fetchData;

function fetchData() {
  return _fetchData.apply(this, arguments);
}

function _fetchData() {
  _fetchData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var token, initialURL, config, fetchRes, res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get('token');
            initialURL = "".concat(_config__WEBPACK_IMPORTED_MODULE_5__["API"], "/profile");
            config = {
              headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
              }
            };
            _context.next = 5;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(initialURL, config);

          case 5:
            fetchRes = _context.sent;
            _context.next = 8;
            return fetchRes;

          case 8:
            res = _context.sent;
            console.log(res.data);
            return _context.abrupt("return", {
              pokemon: res.data.poke,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90ZXN0cGFnZS5qc3giXSwibmFtZXMiOlsiVGVzdHBhZ2UiLCJwb2tlbW9uIiwidG9rZW4iLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImlkIiwiZ2V0SW5pdGlhbFByb3BzIiwiZmV0Y2hEYXRhIiwiQ29va2llcyIsImdldCIsImluaXRpYWxVUkwiLCJBUEkiLCJjb25maWciLCJoZWFkZXJzIiwiZmV0Y2giLCJmZXRjaFJlcyIsInJlcyIsInBva2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBR0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSwwQkFBRUMsT0FBRjtBQUFBLE1BQUVBLE9BQUYsNkJBQVksRUFBWjtBQUFBLE1BQWdCQyxLQUFoQixRQUFnQkEsS0FBaEI7QUFBQSxTQUdiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlILE9BQU8sQ0FBQ0ksSUFBcEIsQ0FESixFQUVJRixPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWixDQUZKLFFBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFISixFQUlHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtELE9BQU8sQ0FBQ0ssRUFBYixDQUZKLENBSkgsQ0FIYTtBQUFBLENBQWpCOztLQUFNTixRO0FBa0JOQSxRQUFRLENBQUNPLGVBQVQsR0FBMkJDLFNBQTNCOztTQUVlQSxTOzs7OztnTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFUU4saUJBRlIsR0FFZ0JPLGdEQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLENBRmhCO0FBR1FDLHNCQUhSLGFBR3dCQywyQ0FIeEI7QUFJTUMsa0JBSk4sR0FJYTtBQUNUQyxxQkFBTyxFQUFDO0FBQ04sMEJBQVUsa0JBREo7QUFFTixpQ0FBaUIsWUFBVVo7QUFGckI7QUFEQyxhQUpiO0FBQUE7QUFBQSxtQkFXeUJhLHlEQUFLLENBQUNKLFVBQUQsRUFBYUUsTUFBYixDQVg5Qjs7QUFBQTtBQVdRRyxvQkFYUjtBQUFBO0FBQUEsbUJBWW9CQSxRQVpwQjs7QUFBQTtBQVlRQyxlQVpSO0FBZUVkLG1CQUFPLENBQUNDLEdBQVIsQ0FBWWEsR0FBRyxDQUFDWixJQUFoQjtBQWZGLDZDQWdCUztBQUNMSixxQkFBTyxFQUFFZ0IsR0FBRyxDQUFDWixJQUFKLENBQVNhLElBRGI7QUFFTGhCLG1CQUFLLEVBQUxBO0FBRkssYUFoQlQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQXNCaUJGLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFx0ZXN0cGFnZS5qcy5lNzI2NTFkYjhlY2NmNDVmZTcwMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0ICwgeyB1c2VTdGF0ZSB9ICBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuXHJcbmltcG9ydCB7IEFQSSB9IGZyb20gJy4uL2NvbmZpZyc7XHJcblxyXG5cclxuY29uc3QgVGVzdHBhZ2UgPSAoe3Bva2Vtb24gPSBbXSwgdG9rZW59KSA9PihcclxuXHJcbiBcclxuICAgIDxkaXY+XHJcbiAgICAgICB7Y29uc29sZS5sb2cocG9rZW1vbi5kYXRhKX1cclxuICAgICAgIHtjb25zb2xlLmxvZyh0b2tlbil9XHJcbiAgICAgIHNzPGgyPlBPS0VNT04gRk9SRVNUICA8L2gyPlxyXG4gICAgICAgPHVsPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgIDxsaT57cG9rZW1vbi5pZH08L2xpPlxyXG5cclxuICAgICAgICAgXHJcbiAgICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcblxyXG5cclxuVGVzdHBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gZmV0Y2hEYXRhO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xyXG4gIFxyXG4gIGNvbnN0IHRva2VuID0gQ29va2llcy5nZXQoJ3Rva2VuJylcclxuICBjb25zdCBpbml0aWFsVVJMID0gYCR7QVBJfS9wcm9maWxlYDtcclxuICBsZXQgY29uZmlnPXtcclxuICAgIGhlYWRlcnM6e1xyXG4gICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyt0b2tlblxyXG4gICAgfVxyXG4gICB9O1xyXG4gIFxyXG4gIGNvbnN0IGZldGNoUmVzID0gYXdhaXQgZmV0Y2goaW5pdGlhbFVSTCwgY29uZmlnKVxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoUmVzXHJcbiAgXHJcblxyXG4gIGNvbnNvbGUubG9nKHJlcy5kYXRhKVxyXG4gIHJldHVybiB7XHJcbiAgICBwb2tlbW9uOiByZXMuZGF0YS5wb2tlLFxyXG4gICAgdG9rZW5cclxuICB9XHJcbn1cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgVGVzdHBhZ2UiXSwic291cmNlUm9vdCI6IiJ9