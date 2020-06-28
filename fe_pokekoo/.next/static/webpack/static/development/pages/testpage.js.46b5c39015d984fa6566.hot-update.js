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
  }, console.log(pokemon.poke), console.log(token), "ss", __jsx("h2", {
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
  }, pokemon.map(function (pokemon) {
    return __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }
    }, pokemon.poke.data.id);
  })));
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
            return fetchRes.json();

          case 8:
            res = _context.sent;
            console.log(res.data.poke);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90ZXN0cGFnZS5qc3giXSwibmFtZXMiOlsiVGVzdHBhZ2UiLCJwb2tlbW9uIiwidG9rZW4iLCJjb25zb2xlIiwibG9nIiwicG9rZSIsIm1hcCIsImRhdGEiLCJpZCIsImdldEluaXRpYWxQcm9wcyIsImZldGNoRGF0YSIsIkNvb2tpZXMiLCJnZXQiLCJpbml0aWFsVVJMIiwiQVBJIiwiY29uZmlnIiwiaGVhZGVycyIsImZldGNoIiwiZmV0Y2hSZXMiLCJqc29uIiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUdBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsMEJBQUVDLE9BQUY7QUFBQSxNQUFFQSxPQUFGLDZCQUFZLEVBQVo7QUFBQSxNQUFnQkMsS0FBaEIsUUFBZ0JBLEtBQWhCO0FBQUEsU0FHYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0lDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxPQUFPLENBQUNJLElBQXBCLENBREosRUFFSUYsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVosQ0FGSixRQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBSEosRUFJRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VELE9BQU8sQ0FBQ0ssR0FBUixDQUFZLFVBQUFMLE9BQU8sRUFBRTtBQUFDLFdBQ3JCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS0EsT0FBTyxDQUFDSSxJQUFSLENBQWFFLElBQWIsQ0FBa0JDLEVBQXZCLENBRHFCO0FBRXJCLEdBRkQsQ0FERixDQUpILENBSGE7QUFBQSxDQUFqQjs7S0FBTVIsUTtBQWtCTkEsUUFBUSxDQUFDUyxlQUFULEdBQTJCQyxTQUEzQjs7U0FFZUEsUzs7Ozs7Z01BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVFSLGlCQUZSLEdBRWdCUyxnREFBTyxDQUFDQyxHQUFSLENBQVksT0FBWixDQUZoQjtBQUdRQyxzQkFIUixhQUd3QkMsMkNBSHhCO0FBSU1DLGtCQUpOLEdBSWE7QUFDVEMscUJBQU8sRUFBQztBQUNOLDBCQUFVLGtCQURKO0FBRU4saUNBQWlCLFlBQVVkO0FBRnJCO0FBREMsYUFKYjtBQUFBO0FBQUEsbUJBV3lCZSx5REFBSyxDQUFDSixVQUFELEVBQWFFLE1BQWIsQ0FYOUI7O0FBQUE7QUFXUUcsb0JBWFI7QUFBQTtBQUFBLG1CQVlvQkEsUUFBUSxDQUFDQyxJQUFULEVBWnBCOztBQUFBO0FBWVFDLGVBWlI7QUFlRWpCLG1CQUFPLENBQUNDLEdBQVIsQ0FBWWdCLEdBQUcsQ0FBQ2IsSUFBSixDQUFTRixJQUFyQjtBQWZGLDZDQWdCUztBQUNMSixxQkFBTyxFQUFFbUIsR0FBRyxDQUFDYixJQUFKLENBQVNGLElBRGI7QUFFTEgsbUJBQUssRUFBTEE7QUFGSyxhQWhCVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBc0JpQkYsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHRlc3RwYWdlLmpzLjQ2YjVjMzkwMTVkOTg0ZmE2NTY2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgLCB7IHVzZVN0YXRlIH0gIGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5cclxuaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi4vY29uZmlnJztcclxuXHJcblxyXG5jb25zdCBUZXN0cGFnZSA9ICh7cG9rZW1vbiA9IFtdLCB0b2tlbn0pID0+KFxyXG5cclxuIFxyXG4gICAgPGRpdj5cclxuICAgICAgIHtjb25zb2xlLmxvZyhwb2tlbW9uLnBva2UpfVxyXG4gICAgICAge2NvbnNvbGUubG9nKHRva2VuKX1cclxuICAgICAgc3M8aDI+UE9LRU1PTiBGT1JFU1QgIDwvaDI+XHJcbiAgICAgICA8dWw+XHJcbiAgICAgICAge3Bva2Vtb24ubWFwKHBva2Vtb249PntyZXR1cm4oXHJcbiAgICAgICAgICA8bGk+e3Bva2Vtb24ucG9rZS5kYXRhLmlkfTwvbGk+XHJcbiAgICAgICAgKX0pfVxyXG4gICAgICAgICBcclxuICAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuKVxyXG5cclxuXHJcblxyXG5UZXN0cGFnZS5nZXRJbml0aWFsUHJvcHMgPSBmZXRjaERhdGE7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XHJcbiAgXHJcbiAgY29uc3QgdG9rZW4gPSBDb29raWVzLmdldCgndG9rZW4nKVxyXG4gIGNvbnN0IGluaXRpYWxVUkwgPSBgJHtBUEl9L3Byb2ZpbGVgO1xyXG4gIGxldCBjb25maWc9e1xyXG4gICAgaGVhZGVyczp7XHJcbiAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnK3Rva2VuXHJcbiAgICB9XHJcbiAgIH07XHJcbiAgXHJcbiAgY29uc3QgZmV0Y2hSZXMgPSBhd2FpdCBmZXRjaChpbml0aWFsVVJMLCBjb25maWcpXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2hSZXMuanNvbigpXHJcbiAgXHJcblxyXG4gIGNvbnNvbGUubG9nKHJlcy5kYXRhLnBva2UpXHJcbiAgcmV0dXJuIHtcclxuICAgIHBva2Vtb246IHJlcy5kYXRhLnBva2UsXHJcbiAgICB0b2tlblxyXG4gIH1cclxufVxyXG5cclxuICBleHBvcnQgZGVmYXVsdCBUZXN0cGFnZSJdLCJzb3VyY2VSb290IjoiIn0=