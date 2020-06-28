webpackHotUpdate("static\\development\\pages\\testpage.js",{

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




var Testpage = function Testpage(_ref) {
  var _ref$pokemon = _ref.pokemon,
      pokemon = _ref$pokemon === void 0 ? [] : _ref$pokemon,
      token = _ref.token,
      count = _ref.count;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, console.log(pokemon), "ss", __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "POKEMON FOREST ", __jsx("button", {
    onClick: fetchData(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 28
    }
  }, " reload "), " "), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, pokemon.map(function (pokemon) {
    return __jsx("li", {
      key: pokemon.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 15
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    }, pokemon.sprites.front_default, " "));
  })));
};

_c = Testpage;
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
  _fetchData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    var rand, initialURL, fetchRes, res, data, count, token, pokemonData;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            rand = Math.round(Math.random() * (964 - 1) + 1);
            initialURL = 'https://pokeapi.co/api/v2/pokemon?offset=' + rand + '&limit=30';
            _context2.next = 4;
            return fetch(initialURL);

          case 4:
            fetchRes = _context2.sent;
            _context2.next = 7;
            return fetchRes.json();

          case 7:
            res = _context2.sent;
            data = res.results;
            count = res.count;
            token = js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get('token');
            _context2.next = 13;
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

          case 13:
            pokemonData = _context2.sent;
            return _context2.abrupt("return", {
              pokemon: pokemonData,
              count: count,
              token: token
            });

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90ZXN0cGFnZS5qc3giXSwibmFtZXMiOlsiVGVzdHBhZ2UiLCJwb2tlbW9uIiwidG9rZW4iLCJjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaERhdGEiLCJtYXAiLCJuYW1lIiwic3ByaXRlcyIsImZyb250X2RlZmF1bHQiLCJnZXRQb2tlbW9uIiwidXJsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImdldEluaXRpYWxQcm9wcyIsInJhbmQiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJpbml0aWFsVVJMIiwiZmV0Y2hSZXMiLCJyZXN1bHRzIiwiQ29va2llcyIsImdldCIsImFsbCIsInBva2Vtb25SZWNvcmQiLCJwb2tlbW9uRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLDBCQUFFQyxPQUFGO0FBQUEsTUFBRUEsT0FBRiw2QkFBWSxFQUFaO0FBQUEsTUFBZ0JDLEtBQWhCLFFBQWdCQSxLQUFoQjtBQUFBLE1BQXVCQyxLQUF2QixRQUF1QkEsS0FBdkI7QUFBQSxTQUdiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlKLE9BQVosQ0FESixRQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBQW1CO0FBQVEsV0FBTyxFQUFFSyxTQUFTLEVBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQW5CLE1BRkosRUFHSTtBQUFJLGFBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0wsT0FBTyxDQUFDTSxHQUFSLENBQVksVUFBQU4sT0FBTyxFQUFJO0FBRXRCLFdBQ0U7QUFBSSxTQUFHLEVBQUVBLE9BQU8sQ0FBQ08sSUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBT1AsT0FBTyxDQUFDUSxPQUFSLENBQWdCQyxhQUF2QixNQURGLENBREY7QUFNRCxHQVJBLENBREgsQ0FISixDQUhhO0FBQUEsQ0FBakI7O0tBQU1WLFE7QUFzQkMsU0FBU1csVUFBVCxRQUE2QjtBQUFBLE1BQVBDLEdBQU8sU0FBUEEsR0FBTztBQUNsQyxTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcENDLFNBQUssQ0FBQ0osR0FBRCxDQUFMLENBQVdLLElBQVgsQ0FBZ0IsVUFBQUMsR0FBRztBQUFBLGFBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUFKO0FBQUEsS0FBbkIsRUFDS0YsSUFETCxDQUNVLFVBQUFHLElBQUksRUFBSTtBQUNWTixhQUFPLENBQUNNLElBQUQsQ0FBUDtBQUNILEtBSEw7QUFJSCxHQUxNLENBQVA7QUFNRDtBQUtEcEIsUUFBUSxDQUFDcUIsZUFBVCxHQUEyQmYsU0FBM0I7O1NBRWVBLFM7Ozs7O2dNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNRZ0IsZ0JBRFIsR0FDZUMsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxNQUFpQixNQUFNLENBQXZCLElBQTRCLENBQXZDLENBRGY7QUFFUUMsc0JBRlIsR0FFcUIsOENBQTRDSixJQUE1QyxHQUFpRCxXQUZ0RTtBQUFBO0FBQUEsbUJBSXlCTixLQUFLLENBQUNVLFVBQUQsQ0FKOUI7O0FBQUE7QUFJUUMsb0JBSlI7QUFBQTtBQUFBLG1CQUtvQkEsUUFBUSxDQUFDUixJQUFULEVBTHBCOztBQUFBO0FBS1FELGVBTFI7QUFPUUUsZ0JBUFIsR0FPZUYsR0FBRyxDQUFDVSxPQVBuQjtBQVFRekIsaUJBUlIsR0FRZ0JlLEdBQUcsQ0FBQ2YsS0FScEI7QUFVUUQsaUJBVlIsR0FVZ0IyQixnREFBTyxDQUFDQyxHQUFSLENBQVksT0FBWixDQVZoQjtBQUFBO0FBQUEsbUJBYTBCakIsT0FBTyxDQUFDa0IsR0FBUixDQUFZWCxJQUFJLENBQUNiLEdBQUw7QUFBQSwyTUFBUyxpQkFBTU4sT0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUNqQlUsVUFBVSxDQUFDVixPQUFELENBRE87O0FBQUE7QUFDdkMrQixxQ0FEdUM7QUFBQSx5REFFcENBLGFBRm9DOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVQ7O0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVosQ0FiMUI7O0FBQUE7QUFhTUMsdUJBYk47QUFBQSw4Q0FrQlM7QUFDTGhDLHFCQUFPLEVBQUVnQyxXQURKO0FBRUw5QixtQkFBSyxFQUFMQSxLQUZLO0FBRUVELG1CQUFLLEVBQUxBO0FBRkYsYUFsQlQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQXdCaUJGLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFx0ZXN0cGFnZS5qcy5iMDNlNzMyNjY1ZGIxMzVhMzk0ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgICdpc29tb3JwaGljLXVuZmV0Y2gnXHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcblxyXG5cclxuXHJcbmNvbnN0IFRlc3RwYWdlID0gKHtwb2tlbW9uID0gW10sIHRva2VuICxjb3VudH0pID0+KFxyXG5cclxuIFxyXG4gICAgPGRpdj5cclxuICAgICAgIHtjb25zb2xlLmxvZyhwb2tlbW9uKX1cclxuICAgICAgc3M8aDI+UE9LRU1PTiBGT1JFU1QgPGJ1dHRvbiBvbkNsaWNrPXtmZXRjaERhdGEoKX0+IHJlbG9hZCA8L2J1dHRvbj4gPC9oMj5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxyXG4gICAgICAgICAge3Bva2Vtb24ubWFwKHBva2Vtb24gPT4ge1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxsaSBrZXk9e3Bva2Vtb24ubmFtZX0gPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3Bva2Vtb24uc3ByaXRlcy5mcm9udF9kZWZhdWx0fSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcblxyXG4gIFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9rZW1vbih7IHVybCB9KSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgZmV0Y2godXJsKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKVxyXG4gICAgICAgICAgfSlcclxuICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuVGVzdHBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gZmV0Y2hEYXRhO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xyXG4gIGNvbnN0IHJhbmQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoOTY0IC0gMSkgKyAxKTtcclxuICBjb25zdCBpbml0aWFsVVJMID0gJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbj9vZmZzZXQ9JytyYW5kKycmbGltaXQ9MzAnO1xyXG4gIFxyXG4gIGNvbnN0IGZldGNoUmVzID0gYXdhaXQgZmV0Y2goaW5pdGlhbFVSTClcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaFJlcy5qc29uKClcclxuICBcclxuICBjb25zdCBkYXRhID0gcmVzLnJlc3VsdHNcclxuICBjb25zdCBjb3VudCA9IHJlcy5jb3VudCBcclxuXHJcbiAgY29uc3QgdG9rZW4gPSBDb29raWVzLmdldCgndG9rZW4nKVxyXG4gXHJcblxyXG4gIGxldCBwb2tlbW9uRGF0YSA9IGF3YWl0IFByb21pc2UuYWxsKGRhdGEubWFwKGFzeW5jIHBva2Vtb24gPT4ge1xyXG4gICAgbGV0IHBva2Vtb25SZWNvcmQgPSBhd2FpdCBnZXRQb2tlbW9uKHBva2Vtb24pXHJcbiAgICByZXR1cm4gcG9rZW1vblJlY29yZFxyXG4gIH0pKVxyXG4gXHJcbiAgcmV0dXJuIHtcclxuICAgIHBva2Vtb246IHBva2Vtb25EYXRhLFxyXG4gICAgY291bnQsIHRva2VuXHJcbiAgfVxyXG59XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IFRlc3RwYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==