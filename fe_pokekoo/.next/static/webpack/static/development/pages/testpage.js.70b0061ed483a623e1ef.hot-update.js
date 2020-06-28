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
      lineNumber: 9,
      columnNumber: 5
    }
  }, console.log(token), "ss", __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, pokemon.map(function (pokemon) {
    return __jsx("li", {
      key: pokemon.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 15
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
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
            token = Cookies.get('token');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90ZXN0cGFnZS5qc3giXSwibmFtZXMiOlsiVGVzdHBhZ2UiLCJwb2tlbW9uIiwidG9rZW4iLCJjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJuYW1lIiwic3ByaXRlcyIsImZyb250X2RlZmF1bHQiLCJnZXRQb2tlbW9uIiwidXJsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImdldEluaXRpYWxQcm9wcyIsImZldGNoRGF0YSIsInJhbmQiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJpbml0aWFsVVJMIiwiZmV0Y2hSZXMiLCJyZXN1bHRzIiwiQ29va2llcyIsImdldCIsImFsbCIsInBva2Vtb25SZWNvcmQiLCJwb2tlbW9uRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUlBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsMEJBQUVDLE9BQUY7QUFBQSxNQUFFQSxPQUFGLDZCQUFZLEVBQVo7QUFBQSxNQUFnQkMsS0FBaEIsUUFBZ0JBLEtBQWhCO0FBQUEsTUFBdUJDLEtBQXZCLFFBQXVCQSxLQUF2QjtBQUFBLFNBR2I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBWixDQURKLFFBR0k7QUFBSSxhQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dELE9BQU8sQ0FBQ0ssR0FBUixDQUFZLFVBQUFMLE9BQU8sRUFBSTtBQUV0QixXQUNFO0FBQUksU0FBRyxFQUFFQSxPQUFPLENBQUNNLElBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU9OLE9BQU8sQ0FBQ08sT0FBUixDQUFnQkMsYUFBdkIsTUFERixDQURGO0FBTUQsR0FSQSxDQURILENBSEosQ0FIYTtBQUFBLENBQWpCOztLQUFNVCxRO0FBc0JDLFNBQVNVLFVBQVQsUUFBNkI7QUFBQSxNQUFQQyxHQUFPLFNBQVBBLEdBQU87QUFDbEMsU0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDQyxTQUFLLENBQUNKLEdBQUQsQ0FBTCxDQUFXSyxJQUFYLENBQWdCLFVBQUFDLEdBQUc7QUFBQSxhQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLEtBQW5CLEVBQ0tGLElBREwsQ0FDVSxVQUFBRyxJQUFJLEVBQUk7QUFDVk4sYUFBTyxDQUFDTSxJQUFELENBQVA7QUFDSCxLQUhMO0FBSUgsR0FMTSxDQUFQO0FBTUQ7QUFLRG5CLFFBQVEsQ0FBQ29CLGVBQVQsR0FBMkJDLFNBQTNCOztTQUVlQSxTOzs7OztnTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUUMsZ0JBRFIsR0FDZUMsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxNQUFpQixNQUFNLENBQXZCLElBQTRCLENBQXZDLENBRGY7QUFFUUMsc0JBRlIsR0FFcUIsOENBQTRDSixJQUE1QyxHQUFpRCxXQUZ0RTtBQUFBO0FBQUEsbUJBSXlCUCxLQUFLLENBQUNXLFVBQUQsQ0FKOUI7O0FBQUE7QUFJUUMsb0JBSlI7QUFBQTtBQUFBLG1CQUtvQkEsUUFBUSxDQUFDVCxJQUFULEVBTHBCOztBQUFBO0FBS1FELGVBTFI7QUFPUUUsZ0JBUFIsR0FPZUYsR0FBRyxDQUFDVyxPQVBuQjtBQVFRekIsaUJBUlIsR0FRZ0JjLEdBQUcsQ0FBQ2QsS0FScEI7QUFVUUQsaUJBVlIsR0FVZ0IyQixPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLENBVmhCO0FBQUE7QUFBQSxtQkFhMEJsQixPQUFPLENBQUNtQixHQUFSLENBQVlaLElBQUksQ0FBQ2IsR0FBTDtBQUFBLDJNQUFTLGlCQUFNTCxPQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBQ2pCUyxVQUFVLENBQUNULE9BQUQsQ0FETzs7QUFBQTtBQUN2QytCLHFDQUR1QztBQUFBLHlEQUVwQ0EsYUFGb0M7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBVDs7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBWixDQWIxQjs7QUFBQTtBQWFNQyx1QkFiTjtBQUFBLDhDQWtCUztBQUNMaEMscUJBQU8sRUFBRWdDLFdBREo7QUFFTDlCLG1CQUFLLEVBQUxBLEtBRks7QUFFRUQsbUJBQUssRUFBTEE7QUFGRixhQWxCVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBd0JpQkYsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHRlc3RwYWdlLmpzLjcwYjAwNjFlZDQ4M2E2MjNlMWVmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCAgJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuXHJcblxyXG5cclxuY29uc3QgVGVzdHBhZ2UgPSAoe3Bva2Vtb24gPSBbXSwgdG9rZW4gLGNvdW50fSkgPT4oXHJcblxyXG4gXHJcbiAgICA8ZGl2PlxyXG4gICAgICAge2NvbnNvbGUubG9nKHRva2VuKX1cclxuICAgICAgc3NcclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxyXG4gICAgICAgICAge3Bva2Vtb24ubWFwKHBva2Vtb24gPT4ge1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxsaSBrZXk9e3Bva2Vtb24ubmFtZX0gPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3Bva2Vtb24uc3ByaXRlcy5mcm9udF9kZWZhdWx0fSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcblxyXG4gIFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9rZW1vbih7IHVybCB9KSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgZmV0Y2godXJsKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKVxyXG4gICAgICAgICAgfSlcclxuICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuVGVzdHBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gZmV0Y2hEYXRhO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xyXG4gIGNvbnN0IHJhbmQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoOTY0IC0gMSkgKyAxKTtcclxuICBjb25zdCBpbml0aWFsVVJMID0gJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbj9vZmZzZXQ9JytyYW5kKycmbGltaXQ9MzAnO1xyXG4gIFxyXG4gIGNvbnN0IGZldGNoUmVzID0gYXdhaXQgZmV0Y2goaW5pdGlhbFVSTClcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaFJlcy5qc29uKClcclxuICBcclxuICBjb25zdCBkYXRhID0gcmVzLnJlc3VsdHNcclxuICBjb25zdCBjb3VudCA9IHJlcy5jb3VudCBcclxuXHJcbiAgY29uc3QgdG9rZW4gPSBDb29raWVzLmdldCgndG9rZW4nKVxyXG4gXHJcblxyXG4gIGxldCBwb2tlbW9uRGF0YSA9IGF3YWl0IFByb21pc2UuYWxsKGRhdGEubWFwKGFzeW5jIHBva2Vtb24gPT4ge1xyXG4gICAgbGV0IHBva2Vtb25SZWNvcmQgPSBhd2FpdCBnZXRQb2tlbW9uKHBva2Vtb24pXHJcbiAgICByZXR1cm4gcG9rZW1vblJlY29yZFxyXG4gIH0pKVxyXG4gXHJcbiAgcmV0dXJuIHtcclxuICAgIHBva2Vtb246IHBva2Vtb25EYXRhLFxyXG4gICAgY291bnQsIHRva2VuXHJcbiAgfVxyXG59XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IFRlc3RwYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==