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
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "D:\\Koomik\\fe_pokekoo\\pages\\testpage.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Testpage = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Testpage, _React$Component);

  var _super = _createSuper(Testpage);

  function Testpage(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Testpage);

    _this = _super.call(this, props);
    _this.state = {
      pokemon: [],
      token: ''
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Testpage, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 7
        }
      }, "ss", __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 10
        }
      }, "POKEMON FOREST ", __jsx("button", {
        onClick: componentDidMount,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 29
        }
      }, " reload "), " "), __jsx("ul", {
        className: "list",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 9
        }
      }, pokemon.map(function (pokemon) {
        return __jsx("li", {
          key: pokemon.name,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 15
          }
        }, __jsx("span", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 17
          }
        }, pokemon.sprites.front_default, " "));
      })));
    }
  }]);

  return Testpage;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component); // const Testpage = ({pokemon = [], token ,count}) =>(
//     <div>
//        {console.log(token)}
//       ss<h2>POKEMON FOREST <button onClick={componentDidMount}> reload </button> </h2>
//         <ul className="list">
//           {pokemon.map(pokemon => {
//             return (
//               <li key={pokemon.name} >
//                 <span>{pokemon.sprites.front_default} </span>
//               </li>
//             )
//           })}
//         </ul>
//     </div>
// )
// function componentDidMount () {
//   fetchData();
// }


function getPokemon(_ref) {
  var url = _ref.url;
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
            token = js_cookie__WEBPACK_IMPORTED_MODULE_9___default.a.get('token');
            _context2.next = 13;
            return Promise.all(data.map( /*#__PURE__*/function () {
              var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(pokemon) {
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
                return _ref2.apply(this, arguments);
              };
            }()));

          case 13:
            pokemonData = _context2.sent;
            console.log(pokemonData);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90ZXN0cGFnZS5qc3giXSwibmFtZXMiOlsiVGVzdHBhZ2UiLCJwcm9wcyIsInN0YXRlIiwicG9rZW1vbiIsInRva2VuIiwiY29tcG9uZW50RGlkTW91bnQiLCJtYXAiLCJuYW1lIiwic3ByaXRlcyIsImZyb250X2RlZmF1bHQiLCJSZWFjdCIsIkNvbXBvbmVudCIsImdldFBva2Vtb24iLCJ1cmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiZ2V0SW5pdGlhbFByb3BzIiwiZmV0Y2hEYXRhIiwicmFuZCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsImluaXRpYWxVUkwiLCJmZXRjaFJlcyIsInJlc3VsdHMiLCJjb3VudCIsIkNvb2tpZXMiLCJnZXQiLCJhbGwiLCJwb2tlbW9uUmVjb3JkIiwicG9rZW1vbkRhdGEiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUtNQSxROzs7OztBQUNKLG9CQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUE7O0FBQ2hCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFXO0FBQ1BDLGFBQU8sRUFBQyxFQUREO0FBRVBDLFdBQUssRUFBQztBQUZDLEtBQVg7QUFGZ0I7QUFRbkI7Ozs7NkJBTVM7QUFBQTs7QUFDTixhQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFFRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUFtQjtBQUFRLGVBQU8sRUFBRUMsaUJBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQW5CLE1BRkgsRUFHRTtBQUFJLGlCQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0dGLE9BQU8sQ0FBQ0csR0FBUixDQUFZLFVBQUFILE9BQU8sRUFBSTtBQUV0QixlQUNFO0FBQUksYUFBRyxFQUFFQSxPQUFPLENBQUNJLElBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQU9KLE9BQU8sQ0FBQ0ssT0FBUixDQUFnQkMsYUFBdkIsTUFERixDQURGO0FBTUQsT0FSQSxDQURILENBSEYsQ0FERjtBQWlCRDs7OztFQWpDb0JDLDRDQUFLLENBQUNDLFMsR0FzQzdCO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTs7O0FBRU8sU0FBU0MsVUFBVCxPQUE2QjtBQUFBLE1BQVBDLEdBQU8sUUFBUEEsR0FBTztBQUNsQyxTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcENDLFNBQUssQ0FBQ0osR0FBRCxDQUFMLENBQVdLLElBQVgsQ0FBZ0IsVUFBQUMsR0FBRztBQUFBLGFBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUFKO0FBQUEsS0FBbkIsRUFDS0YsSUFETCxDQUNVLFVBQUFHLElBQUksRUFBSTtBQUNWTixhQUFPLENBQUNNLElBQUQsQ0FBUDtBQUNILEtBSEw7QUFJSCxHQUxNLENBQVA7QUFNRDtBQUtEckIsUUFBUSxDQUFDc0IsZUFBVCxHQUEyQkMsU0FBM0I7O1NBRWVBLFM7Ozs7O2dNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVRQyxnQkFGUixHQUVlQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLE1BQWlCLE1BQU0sQ0FBdkIsSUFBNEIsQ0FBdkMsQ0FGZjtBQUdRQyxzQkFIUixHQUdxQiw4Q0FBNENKLElBQTVDLEdBQWlELFdBSHRFO0FBQUE7QUFBQSxtQkFLeUJQLEtBQUssQ0FBQ1csVUFBRCxDQUw5Qjs7QUFBQTtBQUtRQyxvQkFMUjtBQUFBO0FBQUEsbUJBTW9CQSxRQUFRLENBQUNULElBQVQsRUFOcEI7O0FBQUE7QUFNUUQsZUFOUjtBQVFRRSxnQkFSUixHQVFlRixHQUFHLENBQUNXLE9BUm5CO0FBU1FDLGlCQVRSLEdBU2dCWixHQUFHLENBQUNZLEtBVHBCO0FBV1EzQixpQkFYUixHQVdnQjRCLGdEQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLENBWGhCO0FBQUE7QUFBQSxtQkFjMEJuQixPQUFPLENBQUNvQixHQUFSLENBQVliLElBQUksQ0FBQ2YsR0FBTDtBQUFBLDJNQUFTLGlCQUFNSCxPQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBQ2pCUyxVQUFVLENBQUNULE9BQUQsQ0FETzs7QUFBQTtBQUN2Q2dDLHFDQUR1QztBQUFBLHlEQUVwQ0EsYUFGb0M7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBVDs7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBWixDQWQxQjs7QUFBQTtBQWNNQyx1QkFkTjtBQW1CRUMsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixXQUFaO0FBbkJGLDhDQW9CUztBQUNMakMscUJBQU8sRUFBRWlDLFdBREo7QUFFTEwsbUJBQUssRUFBTEEsS0FGSztBQUVFM0IsbUJBQUssRUFBTEE7QUFGRixhQXBCVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBMEJpQkosdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHRlc3RwYWdlLmpzLmRlMzFlODM3ODM2MzkyYzA1Mjc3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgLCB7IHVzZVN0YXRlIH0gIGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgICdpc29tb3JwaGljLXVuZmV0Y2gnXHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcblxyXG5cclxuXHJcblxyXG5jbGFzcyBUZXN0cGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgICBwb2tlbW9uOltdLFxyXG4gICAgICAgIHRva2VuOicnXHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIHJlbmRlcigpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgIHsvKiB7Y29uc29sZS5sb2codG9rZW4pfSAqL31cclxuICAgICAgIHNzPGgyPlBPS0VNT04gRk9SRVNUIDxidXR0b24gb25DbGljaz17Y29tcG9uZW50RGlkTW91bnR9PiByZWxvYWQgPC9idXR0b24+IDwvaDI+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3RcIj5cclxuICAgICAgICAgIHtwb2tlbW9uLm1hcChwb2tlbW9uID0+IHtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8bGkga2V5PXtwb2tlbW9uLm5hbWV9ID5cclxuICAgICAgICAgICAgICAgIDxzcGFuPntwb2tlbW9uLnNwcml0ZXMuZnJvbnRfZGVmYXVsdH0gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gY29uc3QgVGVzdHBhZ2UgPSAoe3Bva2Vtb24gPSBbXSwgdG9rZW4gLGNvdW50fSkgPT4oXHJcblxyXG4gXHJcbi8vICAgICA8ZGl2PlxyXG4vLyAgICAgICAge2NvbnNvbGUubG9nKHRva2VuKX1cclxuLy8gICAgICAgc3M8aDI+UE9LRU1PTiBGT1JFU1QgPGJ1dHRvbiBvbkNsaWNrPXtjb21wb25lbnREaWRNb3VudH0+IHJlbG9hZCA8L2J1dHRvbj4gPC9oMj5cclxuLy8gICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxyXG4vLyAgICAgICAgICAge3Bva2Vtb24ubWFwKHBva2Vtb24gPT4ge1xyXG4gICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgICAgIDxsaSBrZXk9e3Bva2Vtb24ubmFtZX0gPlxyXG4vLyAgICAgICAgICAgICAgICAgPHNwYW4+e3Bva2Vtb24uc3ByaXRlcy5mcm9udF9kZWZhdWx0fSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICBcclxuLy8gICAgICAgICAgICAgICA8L2xpPlxyXG4vLyAgICAgICAgICAgICApXHJcbi8vICAgICAgICAgICB9KX1cclxuLy8gICAgICAgICA8L3VsPlxyXG4vLyAgICAgPC9kaXY+XHJcbi8vIClcclxuXHJcblxyXG5cclxuLy8gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQgKCkge1xyXG4gIFxyXG4vLyAgIGZldGNoRGF0YSgpO1xyXG4vLyB9XHJcbiAgXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2tlbW9uKHsgdXJsIH0pIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBmZXRjaCh1cmwpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpXHJcbiAgICAgICAgICB9KVxyXG4gIH0pO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5UZXN0cGFnZS5nZXRJbml0aWFsUHJvcHMgPSBmZXRjaERhdGE7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XHJcbiAgXHJcbiAgY29uc3QgcmFuZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqICg5NjQgLSAxKSArIDEpO1xyXG4gIGNvbnN0IGluaXRpYWxVUkwgPSAnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uP29mZnNldD0nK3JhbmQrJyZsaW1pdD0zMCc7XHJcbiAgXHJcbiAgY29uc3QgZmV0Y2hSZXMgPSBhd2FpdCBmZXRjaChpbml0aWFsVVJMKVxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoUmVzLmpzb24oKVxyXG4gIFxyXG4gIGNvbnN0IGRhdGEgPSByZXMucmVzdWx0c1xyXG4gIGNvbnN0IGNvdW50ID0gcmVzLmNvdW50IFxyXG4gXHJcbiAgY29uc3QgdG9rZW4gPSBDb29raWVzLmdldCgndG9rZW4nKVxyXG4gXHJcblxyXG4gIGxldCBwb2tlbW9uRGF0YSA9IGF3YWl0IFByb21pc2UuYWxsKGRhdGEubWFwKGFzeW5jIHBva2Vtb24gPT4ge1xyXG4gICAgbGV0IHBva2Vtb25SZWNvcmQgPSBhd2FpdCBnZXRQb2tlbW9uKHBva2Vtb24pXHJcbiAgICByZXR1cm4gcG9rZW1vblJlY29yZFxyXG4gIH0pKVxyXG4gXHJcbiAgY29uc29sZS5sb2cocG9rZW1vbkRhdGEpXHJcbiAgcmV0dXJuIHtcclxuICAgIHBva2Vtb246IHBva2Vtb25EYXRhLFxyXG4gICAgY291bnQsIHRva2VuXHJcbiAgfVxyXG59XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IFRlc3RwYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==