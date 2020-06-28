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
  }, __jsx(_component_navbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }), __jsx(Styleddiv, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, "POKEMON FOREST ", __jsx("button", {
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/forestpage');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 32
    }
  }, " reload "), " "), __jsx(Bariscard, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
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
        lineNumber: 68,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9mb3Jlc3RwYWdlLmpzeCJdLCJuYW1lcyI6WyJXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiU3R5bGVkZGl2IiwiQmFyaXNjYXJkIiwiRm9yZXN0cGFnZSIsInBva2Vtb24iLCJ0b2tlbiIsImNvdW50IiwiUm91dGVyIiwicHVzaCIsIm1hcCIsIm5hbWUiLCJzcHJpdGVzIiwiZnJvbnRfZGVmYXVsdCIsImdldFBva2Vtb24iLCJ1cmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiZ2V0SW5pdGlhbFByb3BzIiwiZmV0Y2hEYXRhIiwicmFuZCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsImluaXRpYWxVUkwiLCJmZXRjaFJlcyIsInJlc3VsdHMiLCJDb29raWVzIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsImFsbCIsInBva2Vtb25SZWNvcmQiLCJwb2tlbW9uRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsSUFBTUEsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG1CQUFiO0tBQU1GLE87QUFRTixJQUFNRyxTQUFTLEdBQUdGLHlEQUFNLENBQUNDLEdBQVYsb0JBQWY7TUFBTUMsUztBQThCTixJQUFNQyxTQUFTLEdBQUdILHlEQUFNLENBQUNDLEdBQVYsb0JBQWY7TUFBTUUsUzs7QUFTTixJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLDBCQUFFQyxPQUFGO0FBQUEsTUFBRUEsT0FBRiw2QkFBWSxFQUFaO0FBQUEsTUFBZUMsS0FBZixRQUFlQSxLQUFmO0FBQUEsTUFBc0JDLEtBQXRCLFFBQXNCQSxLQUF0QjtBQUFBLFNBRWYsTUFBQyxPQUFEO0FBQUE7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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBNkJlRix5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZm9yZXN0cGFnZS5qcy5jNjBkZmM3ZWQ2ZjA0YWZlOWEyYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnQvbmF2YmFyJztcclxuaW1wb3J0IENhcmRQb2tlIGZyb20gJy4uL2NvbXBvbmVudC9jYXJkJztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuXHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdlxyXG5gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkZGl2ID0gc3R5bGVkLmRpdmBcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogTGVmdDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwJTtcclxuICB3aWR0aDogODAlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgcGFkZGluZy1ib3R0b20gOiA0MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDglIGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMTMlIGF1dG87XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG4gIGgyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICBidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmODAxOTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTFweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBCYXJpc2NhcmQgPSBzdHlsZWQuZGl2XHJcbmBcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgbWFyZ2luOjE1cHggMjBweDtcclxuYDtcclxuXHJcbmNvbnN0IEZvcmVzdHBhZ2UgPSAoe3Bva2Vtb24gPSBbXSx0b2tlbiwgY291bnR9KSA9PihcclxuXHJcbiAgICA8V3JhcHBlcj5cclxuICAgICAgPE5hdmJhci8+XHJcbiAgICAgICAgPFN0eWxlZGRpdj5cclxuICAgICAgICAgICAgPGgyPlBPS0VNT04gRk9SRVNUIDxidXR0b24gb25DbGljaz17KCk9PlJvdXRlci5wdXNoKCcvZm9yZXN0cGFnZScpfT4gcmVsb2FkIDwvYnV0dG9uPiA8L2gyPlxyXG4gICAgICAgICAgICAgPEJhcmlzY2FyZD4gXHJcbiAgICAgICAgICAgICAgICB7cG9rZW1vbi5tYXAocG9rZW1vbiA9PnsgcmV0dXJuKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZFBva2UgbmFtYVBva2Vtb249e3Bva2Vtb24ubmFtZX0gdXJsUG9LPXtwb2tlbW9uLnNwcml0ZXMuZnJvbnRfZGVmYXVsdH0ga2V5PXtwb2tlbW9uLm5hbWV9Lz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgKX0pfVxyXG4gICAgICAgICAgICAgPC9CYXJpc2NhcmQ+XHJcbiAgICAgICAgIDwvU3R5bGVkZGl2PlxyXG4gICAgIDwvV3JhcHBlcj5cclxuICAgXHJcbilcclxuXHJcblxyXG4gIFxyXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRQb2tlbW9uKHsgdXJsIH0pIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgZmV0Y2godXJsKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSlcclxuICAgICAgICAgICAgfSlcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5Gb3Jlc3RwYWdlLmdldEluaXRpYWxQcm9wcyA9IGZldGNoRGF0YTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcclxuICBjb25zdCByYW5kID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKDk2NCAtIDEpICsgMSk7XHJcbiAgY29uc3QgaW5pdGlhbFVSTCA9ICdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24/b2Zmc2V0PScrcmFuZCsnJmxpbWl0PTMwJztcclxuICBcclxuICBjb25zdCBmZXRjaFJlcyA9IGF3YWl0IGZldGNoKGluaXRpYWxVUkwpXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2hSZXMuanNvbigpXHJcbiAgXHJcbiAgY29uc3QgZGF0YSA9IHJlcy5yZXN1bHRzXHJcbiAgY29uc3QgY291bnQgPSByZXMuY291bnQgXHJcblxyXG4gIGNvbnN0IHRva2VuID0gQ29va2llcy5nZXQoJ3Rva2VuJylcclxuICBjb25zb2xlLmxvZyh0b2tlbilcclxuICAvLyBpZih0b2tlbjwwKXtcclxuICAvLyAgIFJvdXRlci5wdXNoKCcvJyk7XHJcbiAgLy8gfVxyXG5cclxuICBsZXQgcG9rZW1vbkRhdGEgPSBhd2FpdCBQcm9taXNlLmFsbChkYXRhLm1hcChhc3luYyBwb2tlbW9uID0+IHtcclxuICAgIGxldCBwb2tlbW9uUmVjb3JkID0gYXdhaXQgZ2V0UG9rZW1vbihwb2tlbW9uKVxyXG4gICAgcmV0dXJuIHBva2Vtb25SZWNvcmRcclxuICB9KSlcclxuIFxyXG4gIHJldHVybiB7XHJcbiAgICBwb2tlbW9uOiBwb2tlbW9uRGF0YSxcclxuICAgIGNvdW50LCB0b2tlblxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3Jlc3RwYWdlXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9