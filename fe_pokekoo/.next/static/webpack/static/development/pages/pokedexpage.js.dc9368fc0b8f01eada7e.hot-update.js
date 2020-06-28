webpackHotUpdate("static\\development\\pages\\pokedexpage.js",{

/***/ "./pages/pokedexpage.jsx":
/*!*******************************!*\
  !*** ./pages/pokedexpage.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _component_navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/navbar */ "./component/navbar.jsx");
/* harmony import */ var _component_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/card */ "./component/card.jsx");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../config */ "./config.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_11__);




var _this = undefined,
    _jsxFileName = "D:\\Koomik\\fe_pokekoo\\pages\\pokedexpage.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n background: #ff8019;\n    color: #fff;\n    padding: 11px;\n    margin-top: 15px;\n    width: 10%;\n    border: none;\n    border-radius: 4px;\n    box-sizing: border-box;\n "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  content: \"\";\n  display: table;\n  align-items: center;\n  clear: both;\n  margin:15px 20px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n\n  display: flex;\n  align-items: Left;\n  flex-flow: column;\n  height: 10%;\n  width: 80%;\n  padding: 20px;\n  padding-bottom : 40px;\n  margin-bottom: 8% auto;\n  margin-top: 13% auto;\n  border: 1px solid #fffff;\n  border-radius: 9px;\n  background: #f7f7f7;\n  h2 {\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 14px;\n  }\n  \n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["   display: flex;\n    flex-flow: column;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
_c = Wrapper;
var Styleddiv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject2());
_c2 = Styleddiv;
var Bariscard = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject3());
_c3 = Bariscard;
var Reload = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button(_templateObject4());

var Pokedexpage = function Pokedexpage(_ref) {
  var _ref$pokemon = _ref.pokemon,
      pokemon = _ref$pokemon === void 0 ? [] : _ref$pokemon,
      token = _ref.token,
      count = _ref.count;
  return __jsx(Wrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 8
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, "Pokedex Page : POKEKOO"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  })), __jsx(_component_navbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }), __jsx(Styleddiv, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, "POKEMON DEX "), __jsx(Bariscard, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 14
    }
  }, pokemon.map(function (pokemon) {
    return __jsx(_component_card__WEBPACK_IMPORTED_MODULE_7__["default"], {
      namaPokemon: pokemon.pokeName,
      urlPoK: pokemon.pokeImg,
      key: pokemon.pokeName,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 21
      }
    });
  }))));
};

_c4 = Pokedexpage;
Pokedexpage.getInitialProps = fetchData;

function fetchData() {
  return _fetchData.apply(this, arguments);
}

function _fetchData() {
  _fetchData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var token, config;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = js_cookie__WEBPACK_IMPORTED_MODULE_9___default.a.get('token');
            config = {
              headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + this.state.token
              }
            };
            axios.get("".concat(_config__WEBPACK_IMPORTED_MODULE_11__["API"], "/profile"), config).then(function (response) {//  alert(response.data.data.pokeName+' berhasil ditambahkan')
              //    console.log(response.data);
            })["catch"](function (error) {
              alert(error.response.request.responseText);
            });
            return _context.abrupt("return", {
              pokemon: response.data.data.poke.data,
              token: token
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _fetchData.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (Pokedexpage);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Wrapper");
$RefreshReg$(_c2, "Styleddiv");
$RefreshReg$(_c3, "Bariscard");
$RefreshReg$(_c4, "Pokedexpage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb2tlZGV4cGFnZS5qc3giXSwibmFtZXMiOlsiV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIlN0eWxlZGRpdiIsIkJhcmlzY2FyZCIsIlJlbG9hZCIsImJ1dHRvbiIsIlBva2VkZXhwYWdlIiwicG9rZW1vbiIsInRva2VuIiwiY291bnQiLCJtYXAiLCJwb2tlTmFtZSIsInBva2VJbWciLCJnZXRJbml0aWFsUHJvcHMiLCJmZXRjaERhdGEiLCJDb29raWVzIiwiZ2V0IiwiY29uZmlnIiwiaGVhZGVycyIsInN0YXRlIiwiYXhpb3MiLCJBUEkiLCJ0aGVuIiwicmVzcG9uc2UiLCJlcnJvciIsImFsZXJ0IiwicmVxdWVzdCIsInJlc3BvbnNlVGV4dCIsImRhdGEiLCJwb2tlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsSUFBTUEsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG1CQUFiO0tBQU1GLE87QUFRTixJQUFNRyxTQUFTLEdBQUdGLHlEQUFNLENBQUNDLEdBQVYsb0JBQWY7TUFBTUMsUztBQXFCTixJQUFNQyxTQUFTLEdBQUdILHlEQUFNLENBQUNDLEdBQVYsb0JBQWY7TUFBTUUsUztBQVFMLElBQU1DLE1BQU0sR0FBR0oseURBQU0sQ0FBQ0ssTUFBVixvQkFBWjs7QUFZRCxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLDBCQUFFQyxPQUFGO0FBQUEsTUFBRUEsT0FBRiw2QkFBWSxFQUFaO0FBQUEsTUFBZUMsS0FBZixRQUFlQSxLQUFmO0FBQUEsTUFBc0JDLEtBQXRCLFFBQXNCQSxLQUF0QjtBQUFBLFNBRWhCLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ1M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFEVCxFQUVTO0FBQU0sUUFBSSxFQUFDLFVBQVg7QUFBc0IsV0FBTyxFQUFDLHVDQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRlQsQ0FESCxFQUtFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBTUksTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLEVBRUssTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSUYsT0FBTyxDQUFDRyxHQUFSLENBQVksVUFBQUgsT0FBTyxFQUFHO0FBQUUsV0FFckIsTUFBQyx1REFBRDtBQUFVLGlCQUFXLEVBQUVBLE9BQU8sQ0FBQ0ksUUFBL0I7QUFBeUMsWUFBTSxFQUFFSixPQUFPLENBQUNLLE9BQXpEO0FBQWtFLFNBQUcsRUFBRUwsT0FBTyxDQUFDSSxRQUEvRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRnFCO0FBSXZCLEdBSkQsQ0FESixDQUZMLENBTkosQ0FGZ0I7QUFBQSxDQUFwQjs7TUFBTUwsVztBQXlCTkEsV0FBVyxDQUFDTyxlQUFaLEdBQThCQyxTQUE5Qjs7U0FFZUEsUzs7Ozs7Z01BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVVOLGlCQUZWLEdBRWtCTyxnREFBTyxDQUFDQyxHQUFSLENBQVksT0FBWixDQUZsQjtBQUdhQyxrQkFIYixHQUdvQjtBQUNWQyxxQkFBTyxFQUFDO0FBQ04sMEJBQVUsa0JBREo7QUFFTixpQ0FBaUIsWUFBVSxLQUFLQyxLQUFMLENBQVdYO0FBRmhDO0FBREUsYUFIcEI7QUFTU1ksaUJBQUssQ0FBQ0osR0FBTixXQUFhSyw0Q0FBYixlQUE0QkosTUFBNUIsRUFDQ0ssSUFERCxDQUNNLFVBQUNDLFFBQUQsRUFBYyxDQUNyQjtBQUNBO0FBQ0UsYUFKRCxXQUlTLFVBQUFDLEtBQUssRUFBSTtBQUNqQkMsbUJBQUssQ0FBQ0QsS0FBSyxDQUFDRCxRQUFOLENBQWVHLE9BQWYsQ0FBdUJDLFlBQXhCLENBQUw7QUFDQSxhQU5EO0FBVFQsNkNBZ0JTO0FBQ0xwQixxQkFBTyxFQUFFZ0IsUUFBUSxDQUFDSyxJQUFULENBQWNBLElBQWQsQ0FBbUJDLElBQW5CLENBQXdCRCxJQUQ1QjtBQUVMcEIsbUJBQUssRUFBTEE7QUFGSyxhQWhCVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBd0JlRiwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccG9rZWRleHBhZ2UuanMuZGM5MzY4ZmMwYjhmMDFlYWRhN2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50L25hdmJhcic7XHJcbmltcG9ydCBDYXJkUG9rZSBmcm9tICcuLi9jb21wb25lbnQvY2FyZCc7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi4vY29uZmlnJztcclxuXHJcblxyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZcclxuYCAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZGRpdiA9IHN0eWxlZC5kaXZgXHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IExlZnQ7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMCU7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tIDogNDBweDtcclxuICBtYXJnaW4tYm90dG9tOiA4JSBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDEzJSBhdXRvO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuICBoMiB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgXHJcbmA7XHJcblxyXG5jb25zdCBCYXJpc2NhcmQgPSBzdHlsZWQuZGl2XHJcbmBcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgbWFyZ2luOjE1cHggMjBweDtcclxuYDtcclxuIGNvbnN0IFJlbG9hZCA9IHN0eWxlZC5idXR0b25cclxuIGBcclxuIGJhY2tncm91bmQ6ICNmZjgwMTk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDExcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiBgO1xyXG5cclxuY29uc3QgUG9rZWRleHBhZ2UgPSAoe3Bva2Vtb24gPSBbXSx0b2tlbiwgY291bnR9KSA9PihcclxuXHJcbiAgICA8V3JhcHBlcj5cclxuICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPlBva2VkZXggUGFnZSA6IFBPS0VLT088L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgIDxOYXZiYXIvPlxyXG4gICAgICAgIDxTdHlsZWRkaXY+XHJcbiAgICAgICAgICAgIDxoMj5QT0tFTU9OIERFWCA8L2gyPlxyXG4gICAgICAgICAgICAgPEJhcmlzY2FyZD4gXHJcbiAgICAgICAgICAgICAgICB7cG9rZW1vbi5tYXAocG9rZW1vbiA9PnsgcmV0dXJuKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZFBva2UgbmFtYVBva2Vtb249e3Bva2Vtb24ucG9rZU5hbWV9IHVybFBvSz17cG9rZW1vbi5wb2tlSW1nfSBrZXk9e3Bva2Vtb24ucG9rZU5hbWV9Lz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgKX0pfVxyXG4gICAgICAgICAgICAgPC9CYXJpc2NhcmQ+XHJcbiAgICAgICAgIDwvU3R5bGVkZGl2PlxyXG4gICAgIDwvV3JhcHBlcj5cclxuICAgXHJcbilcclxuXHJcblxyXG5cclxuXHJcblBva2VkZXhwYWdlLmdldEluaXRpYWxQcm9wcyA9IGZldGNoRGF0YTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcclxuICAgIFxyXG4gICAgY29uc3QgdG9rZW4gPSBDb29raWVzLmdldCgndG9rZW4nKSAgICAgXHJcbiAgICAgICAgIGxldCBjb25maWc9e1xyXG4gICAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnK3RoaXMuc3RhdGUudG9rZW5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgfTtcclxuICAgICAgICAgYXhpb3MuZ2V0KGAke0FQSX0vcHJvZmlsZWAsIGNvbmZpZylcclxuICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgLy8gIGFsZXJ0KHJlc3BvbnNlLmRhdGEuZGF0YS5wb2tlTmFtZSsnIGJlcmhhc2lsIGRpdGFtYmFoa2FuJylcclxuICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgYWxlcnQoZXJyb3IucmVzcG9uc2UucmVxdWVzdC5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICB9KTtcclxuICByZXR1cm4ge1xyXG4gICAgcG9rZW1vbjogcmVzcG9uc2UuZGF0YS5kYXRhLnBva2UuZGF0YSxcclxuICAgIHRva2VuXHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBva2VkZXhwYWdlXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9