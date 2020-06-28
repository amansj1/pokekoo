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
    onClick: fetchData,
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
            console.log('haii');
            rand = Math.round(Math.random() * (964 - 1) + 1);
            initialURL = 'https://pokeapi.co/api/v2/pokemon?offset=' + rand + '&limit=30';
            _context2.next = 5;
            return fetch(initialURL);

          case 5:
            fetchRes = _context2.sent;
            _context2.next = 8;
            return fetchRes.json();

          case 8:
            res = _context2.sent;
            data = res.results;
            count = res.count;
            token = js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get('token');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90ZXN0cGFnZS5qc3giXSwibmFtZXMiOlsiVGVzdHBhZ2UiLCJwb2tlbW9uIiwidG9rZW4iLCJjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaERhdGEiLCJtYXAiLCJuYW1lIiwic3ByaXRlcyIsImZyb250X2RlZmF1bHQiLCJnZXRQb2tlbW9uIiwidXJsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImdldEluaXRpYWxQcm9wcyIsInJhbmQiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJpbml0aWFsVVJMIiwiZmV0Y2hSZXMiLCJyZXN1bHRzIiwiQ29va2llcyIsImdldCIsImFsbCIsInBva2Vtb25SZWNvcmQiLCJwb2tlbW9uRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLDBCQUFFQyxPQUFGO0FBQUEsTUFBRUEsT0FBRiw2QkFBWSxFQUFaO0FBQUEsTUFBZ0JDLEtBQWhCLFFBQWdCQSxLQUFoQjtBQUFBLE1BQXVCQyxLQUF2QixRQUF1QkEsS0FBdkI7QUFBQSxTQUdiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlKLE9BQVosQ0FESixRQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBQW1CO0FBQVEsV0FBTyxFQUFFSyxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFuQixNQUZKLEVBR0k7QUFBSSxhQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dMLE9BQU8sQ0FBQ00sR0FBUixDQUFZLFVBQUFOLE9BQU8sRUFBSTtBQUV0QixXQUNFO0FBQUksU0FBRyxFQUFFQSxPQUFPLENBQUNPLElBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU9QLE9BQU8sQ0FBQ1EsT0FBUixDQUFnQkMsYUFBdkIsTUFERixDQURGO0FBTUQsR0FSQSxDQURILENBSEosQ0FIYTtBQUFBLENBQWpCOztLQUFNVixRO0FBc0JDLFNBQVNXLFVBQVQsUUFBNkI7QUFBQSxNQUFQQyxHQUFPLFNBQVBBLEdBQU87QUFDbEMsU0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDQyxTQUFLLENBQUNKLEdBQUQsQ0FBTCxDQUFXSyxJQUFYLENBQWdCLFVBQUFDLEdBQUc7QUFBQSxhQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLEtBQW5CLEVBQ0tGLElBREwsQ0FDVSxVQUFBRyxJQUFJLEVBQUk7QUFDVk4sYUFBTyxDQUFDTSxJQUFELENBQVA7QUFDSCxLQUhMO0FBSUgsR0FMTSxDQUFQO0FBTUQ7QUFLRHBCLFFBQVEsQ0FBQ3FCLGVBQVQsR0FBMkJmLFNBQTNCOztTQUVlQSxTOzs7OztnTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRUYsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDTWlCLGdCQUZSLEdBRWVDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsTUFBaUIsTUFBTSxDQUF2QixJQUE0QixDQUF2QyxDQUZmO0FBR1FDLHNCQUhSLEdBR3FCLDhDQUE0Q0osSUFBNUMsR0FBaUQsV0FIdEU7QUFBQTtBQUFBLG1CQUt5Qk4sS0FBSyxDQUFDVSxVQUFELENBTDlCOztBQUFBO0FBS1FDLG9CQUxSO0FBQUE7QUFBQSxtQkFNb0JBLFFBQVEsQ0FBQ1IsSUFBVCxFQU5wQjs7QUFBQTtBQU1RRCxlQU5SO0FBUVFFLGdCQVJSLEdBUWVGLEdBQUcsQ0FBQ1UsT0FSbkI7QUFTUXpCLGlCQVRSLEdBU2dCZSxHQUFHLENBQUNmLEtBVHBCO0FBV1FELGlCQVhSLEdBV2dCMkIsZ0RBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosQ0FYaEI7QUFBQTtBQUFBLG1CQWMwQmpCLE9BQU8sQ0FBQ2tCLEdBQVIsQ0FBWVgsSUFBSSxDQUFDYixHQUFMO0FBQUEsMk1BQVMsaUJBQU1OLE9BQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFDakJVLFVBQVUsQ0FBQ1YsT0FBRCxDQURPOztBQUFBO0FBQ3ZDK0IscUNBRHVDO0FBQUEseURBRXBDQSxhQUZvQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFUOztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFaLENBZDFCOztBQUFBO0FBY01DLHVCQWROO0FBQUEsOENBbUJTO0FBQ0xoQyxxQkFBTyxFQUFFZ0MsV0FESjtBQUVMOUIsbUJBQUssRUFBTEEsS0FGSztBQUVFRCxtQkFBSyxFQUFMQTtBQUZGLGFBbkJUOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUF5QmlCRix1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcdGVzdHBhZ2UuanMuOWE3NzdkY2Q2ODE4YmViY2NlNDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICAnaXNvbW9ycGhpYy11bmZldGNoJ1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5cclxuXHJcblxyXG5jb25zdCBUZXN0cGFnZSA9ICh7cG9rZW1vbiA9IFtdLCB0b2tlbiAsY291bnR9KSA9PihcclxuXHJcbiBcclxuICAgIDxkaXY+XHJcbiAgICAgICB7Y29uc29sZS5sb2cocG9rZW1vbil9XHJcbiAgICAgIHNzPGgyPlBPS0VNT04gRk9SRVNUIDxidXR0b24gb25DbGljaz17ZmV0Y2hEYXRhfT4gcmVsb2FkIDwvYnV0dG9uPiA8L2gyPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0XCI+XHJcbiAgICAgICAgICB7cG9rZW1vbi5tYXAocG9rZW1vbiA9PiB7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGxpIGtleT17cG9rZW1vbi5uYW1lfSA+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57cG9rZW1vbi5zcHJpdGVzLmZyb250X2RlZmF1bHR9IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuKVxyXG5cclxuXHJcbiAgXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2tlbW9uKHsgdXJsIH0pIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBmZXRjaCh1cmwpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpXHJcbiAgICAgICAgICB9KVxyXG4gIH0pO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5UZXN0cGFnZS5nZXRJbml0aWFsUHJvcHMgPSBmZXRjaERhdGE7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XHJcbiAgY29uc29sZS5sb2coJ2hhaWknKTtcclxuICBjb25zdCByYW5kID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKDk2NCAtIDEpICsgMSk7XHJcbiAgY29uc3QgaW5pdGlhbFVSTCA9ICdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24/b2Zmc2V0PScrcmFuZCsnJmxpbWl0PTMwJztcclxuICBcclxuICBjb25zdCBmZXRjaFJlcyA9IGF3YWl0IGZldGNoKGluaXRpYWxVUkwpXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2hSZXMuanNvbigpXHJcbiAgXHJcbiAgY29uc3QgZGF0YSA9IHJlcy5yZXN1bHRzXHJcbiAgY29uc3QgY291bnQgPSByZXMuY291bnQgXHJcblxyXG4gIGNvbnN0IHRva2VuID0gQ29va2llcy5nZXQoJ3Rva2VuJylcclxuIFxyXG5cclxuICBsZXQgcG9rZW1vbkRhdGEgPSBhd2FpdCBQcm9taXNlLmFsbChkYXRhLm1hcChhc3luYyBwb2tlbW9uID0+IHtcclxuICAgIGxldCBwb2tlbW9uUmVjb3JkID0gYXdhaXQgZ2V0UG9rZW1vbihwb2tlbW9uKVxyXG4gICAgcmV0dXJuIHBva2Vtb25SZWNvcmRcclxuICB9KSlcclxuIFxyXG4gIHJldHVybiB7XHJcbiAgICBwb2tlbW9uOiBwb2tlbW9uRGF0YSxcclxuICAgIGNvdW50LCB0b2tlblxyXG4gIH1cclxufVxyXG5cclxuICBleHBvcnQgZGVmYXVsdCBUZXN0cGFnZSJdLCJzb3VyY2VSb290IjoiIn0=