webpackHotUpdate("static\\development\\pages\\forestpage.js",{

/***/ "./pages/forestpage.jsx":
/*!******************************!*\
  !*** ./pages/forestpage.jsx ***!
  \******************************/
/*! exports provided: getPokemon, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPokemon", function() { return getPokemon; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
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




var _this = undefined,
    _jsxFileName = "D:\\Koomik\\fe_pokekoo\\pages\\forestpage.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  content: \"\";\n  display: table;\n  align-items: center;\n  clear: both;\n  margin:15px 20px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n\n  display: flex;\n  align-items: Left;\n  flex-flow: column;\n  height: 10%;\n  width: 80%;\n  padding: 20px;\n  padding-bottom : 40px;\n  margin-bottom: 8% auto;\n  margin-top: 13% auto;\n  border: 1px solid #fffff;\n  border-radius: 9px;\n  background: #f7f7f7;\n  h2 {\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 14px;\n  }\n  button {\n    background: #ff8019;\n    color: #fff;\n    padding: 11px;\n    margin-top: 15px;\n    width: 80%;\n    border: none;\n    border-radius: 4px;\n    box-sizing: border-box;\n  }\n"]);

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

var Forestpage = function Forestpage(_ref) {
  var _ref$pokemon = _ref.pokemon,
      pokemon = _ref$pokemon === void 0 ? [] : _ref$pokemon,
      token = _ref.token,
      count = _ref.count;
  return __jsx(Wrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 8
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, "Forest Page : POKEKOO"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  })), __jsx(_component_navbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }), __jsx(Styleddiv, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, "POKEMON FOREST ", __jsx("button", {
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/forestpage');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 32
    }
  }, " reload "), " "), __jsx(Bariscard, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 14
    }
  }, pokemon.map(function (pokemon) {
    return __jsx(_component_card__WEBPACK_IMPORTED_MODULE_7__["default"], {
      namaPokemon: pokemon.name,
      urlPoK: pokemon.sprites.front_default,
      key: pokemon.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 21
      }
    });
  }))));
};

_c4 = Forestpage;
function getPokemon(_ref2) {
  var url = _ref2.url;
  return new Promise(function (resolve, reject) {
    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default()(url).then(function (res) {
      return res.json();
    }).then(function (data) {
      resolve(data);
    });
  });
}
Forestpage.getInitialProps = fetchData;

function fetchData() {
  return _fetchData.apply(this, arguments);
}

function _fetchData() {
  _fetchData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    var rand, initialURL, fetchRes, res, data, count, token, pokemonData;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            rand = Math.round(Math.random() * (964 - 1) + 1);
            initialURL = 'https://pokeapi.co/api/v2/pokemon?offset=' + rand + '&limit=30';
            _context2.next = 4;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default()(initialURL);

          case 4:
            fetchRes = _context2.sent;
            _context2.next = 7;
            return fetchRes.json();

          case 7:
            res = _context2.sent;
            data = res.results;
            count = res.count;
            token = js_cookie__WEBPACK_IMPORTED_MODULE_9___default.a.get('token');
            console.log(token); // if(token<0){
            //   Router.push('/');
            // }

            _context2.next = 14;
            return Promise.all(data.map( /*#__PURE__*/function () {
              var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(pokemon) {
                var pokemonRecord;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return getPokemon(pokemon);

                      case 2:
                        pokemonRecord = _context.sent;
                        return _context.abrupt("return", pokemonRecord);

                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x) {
                return _ref3.apply(this, arguments);
              };
            }()));

          case 14:
            pokemonData = _context2.sent;
            return _context2.abrupt("return", {
              pokemon: pokemonData,
              count: count,
              token: token
            });

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _fetchData.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (Forestpage);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Wrapper");
$RefreshReg$(_c2, "Styleddiv");
$RefreshReg$(_c3, "Bariscard");
$RefreshReg$(_c4, "Forestpage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9mb3Jlc3RwYWdlLmpzeCJdLCJuYW1lcyI6WyJXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiU3R5bGVkZGl2IiwiQmFyaXNjYXJkIiwiRm9yZXN0cGFnZSIsInBva2Vtb24iLCJ0b2tlbiIsImNvdW50IiwiUm91dGVyIiwicHVzaCIsIm1hcCIsIm5hbWUiLCJzcHJpdGVzIiwiZnJvbnRfZGVmYXVsdCIsImdldFBva2Vtb24iLCJ1cmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiZ2V0SW5pdGlhbFByb3BzIiwiZmV0Y2hEYXRhIiwicmFuZCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsImluaXRpYWxVUkwiLCJmZXRjaFJlcyIsInJlc3VsdHMiLCJDb29raWVzIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsImFsbCIsInBva2Vtb25SZWNvcmQiLCJwb2tlbW9uRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsSUFBTUEsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG1CQUFiO0tBQU1GLE87QUFRTixJQUFNRyxTQUFTLEdBQUdGLHlEQUFNLENBQUNDLEdBQVYsb0JBQWY7TUFBTUMsUztBQThCTixJQUFNQyxTQUFTLEdBQUdILHlEQUFNLENBQUNDLEdBQVYsb0JBQWY7TUFBTUUsUzs7QUFTTixJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLDBCQUFFQyxPQUFGO0FBQUEsTUFBRUEsT0FBRiw2QkFBWSxFQUFaO0FBQUEsTUFBZUMsS0FBZixRQUFlQSxLQUFmO0FBQUEsTUFBc0JDLEtBQXRCLFFBQXNCQSxLQUF0QjtBQUFBLFNBRWYsTUFBQyxPQUFEO0FBQUE7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OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVQ7O0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVosQ0FoQjFCOztBQUFBO0FBZ0JNQyx1QkFoQk47QUFBQSw4Q0FxQlM7QUFDTGxDLHFCQUFPLEVBQUVrQyxXQURKO0FBRUxoQyxtQkFBSyxFQUFMQSxLQUZLO0FBRUVELG1CQUFLLEVBQUxBO0FBRkYsYUFyQlQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQTZCZUYseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGZvcmVzdHBhZ2UuanMuNTgzZjMzMDM1MzhiOGQzN2U5ZjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50L25hdmJhcic7XHJcbmltcG9ydCBDYXJkUG9rZSBmcm9tICcuLi9jb21wb25lbnQvY2FyZCc7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcblxyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZcclxuYCAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZGRpdiA9IHN0eWxlZC5kaXZgXHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IExlZnQ7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMCU7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tIDogNDBweDtcclxuICBtYXJnaW4tYm90dG9tOiA4JSBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDEzJSBhdXRvO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuICBoMiB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZjgwMTk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDExcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQmFyaXNjYXJkID0gc3R5bGVkLmRpdlxyXG5gXHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIG1hcmdpbjoxNXB4IDIwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBGb3Jlc3RwYWdlID0gKHtwb2tlbW9uID0gW10sdG9rZW4sIGNvdW50fSkgPT4oXHJcblxyXG4gICAgPFdyYXBwZXI+XHJcbiAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5Gb3Jlc3QgUGFnZSA6IFBPS0VLT088L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgIDxOYXZiYXIvPlxyXG4gICAgICAgIDxTdHlsZWRkaXY+XHJcbiAgICAgICAgICAgIDxoMj5QT0tFTU9OIEZPUkVTVCA8YnV0dG9uIG9uQ2xpY2s9eygpPT5Sb3V0ZXIucHVzaCgnL2ZvcmVzdHBhZ2UnKX0+IHJlbG9hZCA8L2J1dHRvbj4gPC9oMj5cclxuICAgICAgICAgICAgIDxCYXJpc2NhcmQ+IFxyXG4gICAgICAgICAgICAgICAge3Bva2Vtb24ubWFwKHBva2Vtb24gPT57IHJldHVybihcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRQb2tlIG5hbWFQb2tlbW9uPXtwb2tlbW9uLm5hbWV9IHVybFBvSz17cG9rZW1vbi5zcHJpdGVzLmZyb250X2RlZmF1bHR9IGtleT17cG9rZW1vbi5uYW1lfS8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICl9KX1cclxuICAgICAgICAgICAgIDwvQmFyaXNjYXJkPlxyXG4gICAgICAgICA8L1N0eWxlZGRpdj5cclxuICAgICA8L1dyYXBwZXI+XHJcbiAgIFxyXG4pXHJcblxyXG5cclxuICBcclxuICBleHBvcnQgZnVuY3Rpb24gZ2V0UG9rZW1vbih7IHVybCB9KSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGZldGNoKHVybCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuRm9yZXN0cGFnZS5nZXRJbml0aWFsUHJvcHMgPSBmZXRjaERhdGE7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XHJcbiAgY29uc3QgcmFuZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqICg5NjQgLSAxKSArIDEpO1xyXG4gIGNvbnN0IGluaXRpYWxVUkwgPSAnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uP29mZnNldD0nK3JhbmQrJyZsaW1pdD0zMCc7XHJcbiAgXHJcbiAgY29uc3QgZmV0Y2hSZXMgPSBhd2FpdCBmZXRjaChpbml0aWFsVVJMKVxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoUmVzLmpzb24oKVxyXG4gIFxyXG4gIGNvbnN0IGRhdGEgPSByZXMucmVzdWx0c1xyXG4gIGNvbnN0IGNvdW50ID0gcmVzLmNvdW50IFxyXG5cclxuICBjb25zdCB0b2tlbiA9IENvb2tpZXMuZ2V0KCd0b2tlbicpXHJcbiAgY29uc29sZS5sb2codG9rZW4pXHJcbiAgLy8gaWYodG9rZW48MCl7XHJcbiAgLy8gICBSb3V0ZXIucHVzaCgnLycpO1xyXG4gIC8vIH1cclxuXHJcbiAgbGV0IHBva2Vtb25EYXRhID0gYXdhaXQgUHJvbWlzZS5hbGwoZGF0YS5tYXAoYXN5bmMgcG9rZW1vbiA9PiB7XHJcbiAgICBsZXQgcG9rZW1vblJlY29yZCA9IGF3YWl0IGdldFBva2Vtb24ocG9rZW1vbilcclxuICAgIHJldHVybiBwb2tlbW9uUmVjb3JkXHJcbiAgfSkpXHJcbiBcclxuICByZXR1cm4ge1xyXG4gICAgcG9rZW1vbjogcG9rZW1vbkRhdGEsXHJcbiAgICBjb3VudCwgdG9rZW5cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9yZXN0cGFnZVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==