webpackHotUpdate("static\\development\\pages\\testpage.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
false,

/***/ "./pages/testpage.jsx":
/*!****************************!*\
  !*** ./pages/testpage.jsx ***!
  \****************************/
/*! exports provided: getPokemon, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPokemon", function() { return getPokemon; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);



var _this = undefined,
    _jsxFileName = "D:\\Koomik\\fe_pokekoo\\pages\\testpage.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
    pokemon = _useState[0],
    token = _useState[1];

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
  }, "POKEMON FOREST ", __jsx("button", {
    onClick: componentDidMount,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 28
    }
  }, " reload "), " "), __jsx("ul", {
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

function click() {
  return _click.apply(this, arguments);
}

function _click() {
  _click = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('click');
            fetchData(); // return { pokemon };

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _click.apply(this, arguments);
}

function componentDidMount() {
  fetchData();
}

function getPokemon(_ref2) {
  var url = _ref2.url;
  return new Promise(function (resolve, reject) {
    fetch(url).then(function (res) {
      return res.json();
    }).then(function (data) {
      resolve(data);
    });
  });
}
Testpage.getInitialProps = fetchData;

function fetchData() {
  return _fetchData.apply(this, arguments);
}

function _fetchData() {
  _fetchData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
    var rand, initialURL, fetchRes, res, data, count, token, pokemonData;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            rand = Math.round(Math.random() * (964 - 1) + 1);
            initialURL = 'https://pokeapi.co/api/v2/pokemon?offset=' + rand + '&limit=30';
            _context3.next = 4;
            return fetch(initialURL);

          case 4:
            fetchRes = _context3.sent;
            _context3.next = 7;
            return fetchRes.json();

          case 7:
            res = _context3.sent;
            data = res.results;
            count = res.count;
            token = js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get('token');
            _context3.next = 13;
            return Promise.all(data.map( /*#__PURE__*/function () {
              var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(pokemon) {
                var pokemonRecord;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return getPokemon(pokemon);

                      case 2:
                        pokemonRecord = _context2.sent;
                        return _context2.abrupt("return", pokemonRecord);

                      case 4:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x) {
                return _ref3.apply(this, arguments);
              };
            }()));

          case 13:
            pokemonData = _context3.sent;
            console.log(pokemonData);
            return _context3.abrupt("return", {
              pokemon: pokemonData,
              count: count,
              token: token
            });

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90ZXN0cGFnZS5qc3giXSwibmFtZXMiOlsidXNlU3RhdGUiLCJwb2tlbW9uIiwidG9rZW4iLCJUZXN0cGFnZSIsImNvdW50IiwiY29uc29sZSIsImxvZyIsImNvbXBvbmVudERpZE1vdW50IiwibWFwIiwibmFtZSIsInNwcml0ZXMiLCJmcm9udF9kZWZhdWx0IiwiY2xpY2siLCJmZXRjaERhdGEiLCJnZXRQb2tlbW9uIiwidXJsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImdldEluaXRpYWxQcm9wcyIsInJhbmQiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJpbml0aWFsVVJMIiwiZmV0Y2hSZXMiLCJyZXN1bHRzIiwiQ29va2llcyIsImdldCIsImFsbCIsInBva2Vtb25SZWNvcmQiLCJwb2tlbW9uRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7Z0JBR3lCQSxzREFBUSxDQUFDLEVBQUQsQztJQUExQkMsTztJQUFTQyxLOztBQUVoQixJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLDBCQUFFRixPQUFGO0FBQUEsTUFBRUEsT0FBRiw2QkFBWSxFQUFaO0FBQUEsTUFBZ0JDLEtBQWhCLFFBQWdCQSxLQUFoQjtBQUFBLE1BQXVCRSxLQUF2QixRQUF1QkEsS0FBdkI7QUFBQSxTQUdiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlKLEtBQVosQ0FESixRQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBQW1CO0FBQVEsV0FBTyxFQUFFSyxpQkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBbkIsTUFGSixFQUdJO0FBQUksYUFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTixPQUFPLENBQUNPLEdBQVIsQ0FBWSxVQUFBUCxPQUFPLEVBQUk7QUFFdEIsV0FDRTtBQUFJLFNBQUcsRUFBRUEsT0FBTyxDQUFDUSxJQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFPUixPQUFPLENBQUNTLE9BQVIsQ0FBZ0JDLGFBQXZCLE1BREYsQ0FERjtBQU1ELEdBUkEsQ0FESCxDQUhKLENBSGE7QUFBQSxDQUFqQjs7S0FBTVIsUTs7U0FvQlNTLEs7Ozs7OzRMQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRVAsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDQU8scUJBQVMsR0FGWCxDQUdFOztBQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFNQSxTQUFTTixpQkFBVCxHQUE4QjtBQUU1Qk0sV0FBUztBQUNWOztBQUVNLFNBQVNDLFVBQVQsUUFBNkI7QUFBQSxNQUFQQyxHQUFPLFNBQVBBLEdBQU87QUFDbEMsU0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDQyxTQUFLLENBQUNKLEdBQUQsQ0FBTCxDQUFXSyxJQUFYLENBQWdCLFVBQUFDLEdBQUc7QUFBQSxhQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLEtBQW5CLEVBQ0tGLElBREwsQ0FDVSxVQUFBRyxJQUFJLEVBQUk7QUFDVk4sYUFBTyxDQUFDTSxJQUFELENBQVA7QUFDSCxLQUhMO0FBSUgsR0FMTSxDQUFQO0FBTUQ7QUFLRHBCLFFBQVEsQ0FBQ3FCLGVBQVQsR0FBMkJYLFNBQTNCOztTQUVlQSxTOzs7OztnTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFUVksZ0JBRlIsR0FFZUMsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxNQUFpQixNQUFNLENBQXZCLElBQTRCLENBQXZDLENBRmY7QUFHUUMsc0JBSFIsR0FHcUIsOENBQTRDSixJQUE1QyxHQUFpRCxXQUh0RTtBQUFBO0FBQUEsbUJBS3lCTixLQUFLLENBQUNVLFVBQUQsQ0FMOUI7O0FBQUE7QUFLUUMsb0JBTFI7QUFBQTtBQUFBLG1CQU1vQkEsUUFBUSxDQUFDUixJQUFULEVBTnBCOztBQUFBO0FBTVFELGVBTlI7QUFRUUUsZ0JBUlIsR0FRZUYsR0FBRyxDQUFDVSxPQVJuQjtBQVNRM0IsaUJBVFIsR0FTZ0JpQixHQUFHLENBQUNqQixLQVRwQjtBQVdRRixpQkFYUixHQVdnQjhCLGdEQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLENBWGhCO0FBQUE7QUFBQSxtQkFjMEJqQixPQUFPLENBQUNrQixHQUFSLENBQVlYLElBQUksQ0FBQ2YsR0FBTDtBQUFBLDJNQUFTLGtCQUFNUCxPQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBQ2pCYSxVQUFVLENBQUNiLE9BQUQsQ0FETzs7QUFBQTtBQUN2Q2tDLHFDQUR1QztBQUFBLDBEQUVwQ0EsYUFGb0M7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBVDs7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBWixDQWQxQjs7QUFBQTtBQWNNQyx1QkFkTjtBQW1CRS9CLG1CQUFPLENBQUNDLEdBQVIsQ0FBWThCLFdBQVo7QUFuQkYsOENBb0JTO0FBQ0xuQyxxQkFBTyxFQUFFbUMsV0FESjtBQUVMaEMsbUJBQUssRUFBTEEsS0FGSztBQUVFRixtQkFBSyxFQUFMQTtBQUZGLGFBcEJUOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUEwQmlCQyx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcdGVzdHBhZ2UuanMuYTk0MmUxYjM1ODM2MDU3NDBkNTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCAsIHsgdXNlU3RhdGUgfSAgZnJvbSAncmVhY3QnXHJcbmltcG9ydCAgJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuXHJcblxyXG5jb25zdCBbcG9rZW1vbiwgdG9rZW5dID0gdXNlU3RhdGUoW10pO1xyXG5cclxuY29uc3QgVGVzdHBhZ2UgPSAoe3Bva2Vtb24gPSBbXSwgdG9rZW4gLGNvdW50fSkgPT4oXHJcblxyXG4gXHJcbiAgICA8ZGl2PlxyXG4gICAgICAge2NvbnNvbGUubG9nKHRva2VuKX1cclxuICAgICAgc3M8aDI+UE9LRU1PTiBGT1JFU1QgPGJ1dHRvbiBvbkNsaWNrPXtjb21wb25lbnREaWRNb3VudH0+IHJlbG9hZCA8L2J1dHRvbj4gPC9oMj5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxyXG4gICAgICAgICAge3Bva2Vtb24ubWFwKHBva2Vtb24gPT4ge1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxsaSBrZXk9e3Bva2Vtb24ubmFtZX0gPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3Bva2Vtb24uc3ByaXRlcy5mcm9udF9kZWZhdWx0fSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNsaWNrKCkge1xyXG4gIGNvbnNvbGUubG9nKCdjbGljaycpXHJcbiAgZmV0Y2hEYXRhKClcclxuICAvLyByZXR1cm4geyBwb2tlbW9uIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50ICgpIHtcclxuICBcclxuICBmZXRjaERhdGEoKTtcclxufVxyXG4gIFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9rZW1vbih7IHVybCB9KSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgZmV0Y2godXJsKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKVxyXG4gICAgICAgICAgfSlcclxuICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuVGVzdHBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gZmV0Y2hEYXRhO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xyXG4gIFxyXG4gIGNvbnN0IHJhbmQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoOTY0IC0gMSkgKyAxKTtcclxuICBjb25zdCBpbml0aWFsVVJMID0gJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbj9vZmZzZXQ9JytyYW5kKycmbGltaXQ9MzAnO1xyXG4gIFxyXG4gIGNvbnN0IGZldGNoUmVzID0gYXdhaXQgZmV0Y2goaW5pdGlhbFVSTClcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaFJlcy5qc29uKClcclxuICBcclxuICBjb25zdCBkYXRhID0gcmVzLnJlc3VsdHNcclxuICBjb25zdCBjb3VudCA9IHJlcy5jb3VudCBcclxuIFxyXG4gIGNvbnN0IHRva2VuID0gQ29va2llcy5nZXQoJ3Rva2VuJylcclxuIFxyXG5cclxuICBsZXQgcG9rZW1vbkRhdGEgPSBhd2FpdCBQcm9taXNlLmFsbChkYXRhLm1hcChhc3luYyBwb2tlbW9uID0+IHtcclxuICAgIGxldCBwb2tlbW9uUmVjb3JkID0gYXdhaXQgZ2V0UG9rZW1vbihwb2tlbW9uKVxyXG4gICAgcmV0dXJuIHBva2Vtb25SZWNvcmRcclxuICB9KSlcclxuIFxyXG4gIGNvbnNvbGUubG9nKHBva2Vtb25EYXRhKVxyXG4gIHJldHVybiB7XHJcbiAgICBwb2tlbW9uOiBwb2tlbW9uRGF0YSxcclxuICAgIGNvdW50LCB0b2tlblxyXG4gIH1cclxufVxyXG5cclxuICBleHBvcnQgZGVmYXVsdCBUZXN0cGFnZSJdLCJzb3VyY2VSb290IjoiIn0=