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
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 7
        }
      }, console.log(token), "ss", __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 10
        }
      }, "POKEMON FOREST ", __jsx("button", {
        onClick: componentDidMount,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 29
        }
      }, " reload "), " "), __jsx("ul", {
        className: "list",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 9
        }
      }, pokemon.map(function (pokemon) {
        return __jsx("li", {
          key: pokemon.name,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 15
          }
        }, __jsx("span", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36,
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
// export function getPokemon({ url }) {
//   return new Promise((resolve, reject) => {
//       fetch(url).then(res => res.json())
//           .then(data => {
//               resolve(data)
//           })
//   });
// }
// Testpage.getInitialProps = fetchData;


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
              var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(pokemon) {
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
                return _ref.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90ZXN0cGFnZS5qc3giXSwibmFtZXMiOlsiVGVzdHBhZ2UiLCJwcm9wcyIsInN0YXRlIiwicG9rZW1vbiIsInRva2VuIiwiY29uc29sZSIsImxvZyIsImNvbXBvbmVudERpZE1vdW50IiwibWFwIiwibmFtZSIsInNwcml0ZXMiLCJmcm9udF9kZWZhdWx0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJmZXRjaERhdGEiLCJyYW5kIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwiaW5pdGlhbFVSTCIsImZldGNoIiwiZmV0Y2hSZXMiLCJqc29uIiwicmVzIiwiZGF0YSIsInJlc3VsdHMiLCJjb3VudCIsIkNvb2tpZXMiLCJnZXQiLCJQcm9taXNlIiwiYWxsIiwiZ2V0UG9rZW1vbiIsInBva2Vtb25SZWNvcmQiLCJwb2tlbW9uRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUtNQSxROzs7OztBQUNKLG9CQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUE7O0FBQ2hCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFXO0FBQ1BDLGFBQU8sRUFBQyxFQUREO0FBRVBDLFdBQUssRUFBQztBQUZDLEtBQVg7QUFGZ0I7QUFRbkI7Ozs7d0NBSWtCLENBRWxCOzs7NkJBR1M7QUFBQTs7QUFDTixhQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVosQ0FEQSxRQUVHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQW1CO0FBQVEsZUFBTyxFQUFFRyxpQkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBbkIsTUFGSCxFQUdFO0FBQUksaUJBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDR0osT0FBTyxDQUFDSyxHQUFSLENBQVksVUFBQUwsT0FBTyxFQUFJO0FBRXRCLGVBQ0U7QUFBSSxhQUFHLEVBQUVBLE9BQU8sQ0FBQ00sSUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBT04sT0FBTyxDQUFDTyxPQUFSLENBQWdCQyxhQUF2QixNQURGLENBREY7QUFNRCxPQVJBLENBREgsQ0FIRixDQURGO0FBaUJEOzs7O0VBcENvQkMsNENBQUssQ0FBQ0MsUyxHQXlDN0I7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBOzs7U0FFZUMsUzs7Ozs7Z01BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVFDLGdCQUZSLEdBRWVDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsTUFBaUIsTUFBTSxDQUF2QixJQUE0QixDQUF2QyxDQUZmO0FBR1FDLHNCQUhSLEdBR3FCLDhDQUE0Q0osSUFBNUMsR0FBaUQsV0FIdEU7QUFBQTtBQUFBLG1CQUt5QkssS0FBSyxDQUFDRCxVQUFELENBTDlCOztBQUFBO0FBS1FFLG9CQUxSO0FBQUE7QUFBQSxtQkFNb0JBLFFBQVEsQ0FBQ0MsSUFBVCxFQU5wQjs7QUFBQTtBQU1RQyxlQU5SO0FBUVFDLGdCQVJSLEdBUWVELEdBQUcsQ0FBQ0UsT0FSbkI7QUFTUUMsaUJBVFIsR0FTZ0JILEdBQUcsQ0FBQ0csS0FUcEI7QUFXUXRCLGlCQVhSLEdBV2dCdUIsZ0RBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosQ0FYaEI7QUFBQTtBQUFBLG1CQWMwQkMsT0FBTyxDQUFDQyxHQUFSLENBQVlOLElBQUksQ0FBQ2hCLEdBQUw7QUFBQSwwTUFBUyxpQkFBTUwsT0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUNqQjRCLFVBQVUsQ0FBQzVCLE9BQUQsQ0FETzs7QUFBQTtBQUN2QzZCLHFDQUR1QztBQUFBLHlEQUVwQ0EsYUFGb0M7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBVDs7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBWixDQWQxQjs7QUFBQTtBQWNNQyx1QkFkTjtBQW1CRTVCLG1CQUFPLENBQUNDLEdBQVIsQ0FBWTJCLFdBQVo7QUFuQkYsOENBb0JTO0FBQ0w5QixxQkFBTyxFQUFFOEIsV0FESjtBQUVMUCxtQkFBSyxFQUFMQSxLQUZLO0FBRUV0QixtQkFBSyxFQUFMQTtBQUZGLGFBcEJUOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUEwQmlCSix1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcdGVzdHBhZ2UuanMuN2QxYzE4ZWY5MDNmNWU2ZTMyOWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCAsIHsgdXNlU3RhdGUgfSAgZnJvbSAncmVhY3QnXHJcbmltcG9ydCAgJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuXHJcblxyXG5cclxuXHJcbmNsYXNzIFRlc3RwYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGU9e1xyXG4gICAgICAgIHBva2Vtb246W10sXHJcbiAgICAgICAgdG9rZW46JydcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5jb21wb25lbnREaWRNb3VudCgpe1xyXG4gIFxyXG59XHJcblxyXG5cclxuICByZW5kZXIoKXtcclxuICAgIHJldHVybihcclxuICAgICAgPGRpdj5cclxuICAgICB7Y29uc29sZS5sb2codG9rZW4pfVxyXG4gICAgICAgc3M8aDI+UE9LRU1PTiBGT1JFU1QgPGJ1dHRvbiBvbkNsaWNrPXtjb21wb25lbnREaWRNb3VudH0+IHJlbG9hZCA8L2J1dHRvbj4gPC9oMj5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxyXG4gICAgICAgICAge3Bva2Vtb24ubWFwKHBva2Vtb24gPT4ge1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxsaSBrZXk9e3Bva2Vtb24ubmFtZX0gPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3Bva2Vtb24uc3ByaXRlcy5mcm9udF9kZWZhdWx0fSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBjb25zdCBUZXN0cGFnZSA9ICh7cG9rZW1vbiA9IFtdLCB0b2tlbiAsY291bnR9KSA9PihcclxuXHJcbiBcclxuLy8gICAgIDxkaXY+XHJcbi8vICAgICAgICB7Y29uc29sZS5sb2codG9rZW4pfVxyXG4vLyAgICAgICBzczxoMj5QT0tFTU9OIEZPUkVTVCA8YnV0dG9uIG9uQ2xpY2s9e2NvbXBvbmVudERpZE1vdW50fT4gcmVsb2FkIDwvYnV0dG9uPiA8L2gyPlxyXG4vLyAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0XCI+XHJcbi8vICAgICAgICAgICB7cG9rZW1vbi5tYXAocG9rZW1vbiA9PiB7XHJcbiAgICAgICAgICAgXHJcbi8vICAgICAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgICAgPGxpIGtleT17cG9rZW1vbi5uYW1lfSA+XHJcbi8vICAgICAgICAgICAgICAgICA8c3Bhbj57cG9rZW1vbi5zcHJpdGVzLmZyb250X2RlZmF1bHR9IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgICAgIDwvbGk+XHJcbi8vICAgICAgICAgICAgIClcclxuLy8gICAgICAgICAgIH0pfVxyXG4vLyAgICAgICAgIDwvdWw+XHJcbi8vICAgICA8L2Rpdj5cclxuLy8gKVxyXG5cclxuXHJcblxyXG4vLyBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCAoKSB7XHJcbiAgXHJcbi8vICAgZmV0Y2hEYXRhKCk7XHJcbi8vIH1cclxuICBcclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldFBva2Vtb24oeyB1cmwgfSkge1xyXG4vLyAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbi8vICAgICAgIGZldGNoKHVybCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuLy8gICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4vLyAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSlcclxuLy8gICAgICAgICAgIH0pXHJcbi8vICAgfSk7XHJcbi8vIH1cclxuXHJcblxyXG5cclxuXHJcbi8vIFRlc3RwYWdlLmdldEluaXRpYWxQcm9wcyA9IGZldGNoRGF0YTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcclxuICBcclxuICBjb25zdCByYW5kID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKDk2NCAtIDEpICsgMSk7XHJcbiAgY29uc3QgaW5pdGlhbFVSTCA9ICdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24/b2Zmc2V0PScrcmFuZCsnJmxpbWl0PTMwJztcclxuICBcclxuICBjb25zdCBmZXRjaFJlcyA9IGF3YWl0IGZldGNoKGluaXRpYWxVUkwpXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2hSZXMuanNvbigpXHJcbiAgXHJcbiAgY29uc3QgZGF0YSA9IHJlcy5yZXN1bHRzXHJcbiAgY29uc3QgY291bnQgPSByZXMuY291bnQgXHJcbiBcclxuICBjb25zdCB0b2tlbiA9IENvb2tpZXMuZ2V0KCd0b2tlbicpXHJcbiBcclxuXHJcbiAgbGV0IHBva2Vtb25EYXRhID0gYXdhaXQgUHJvbWlzZS5hbGwoZGF0YS5tYXAoYXN5bmMgcG9rZW1vbiA9PiB7XHJcbiAgICBsZXQgcG9rZW1vblJlY29yZCA9IGF3YWl0IGdldFBva2Vtb24ocG9rZW1vbilcclxuICAgIHJldHVybiBwb2tlbW9uUmVjb3JkXHJcbiAgfSkpXHJcbiBcclxuICBjb25zb2xlLmxvZyhwb2tlbW9uRGF0YSlcclxuICByZXR1cm4ge1xyXG4gICAgcG9rZW1vbjogcG9rZW1vbkRhdGEsXHJcbiAgICBjb3VudCwgdG9rZW5cclxuICB9XHJcbn1cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgVGVzdHBhZ2UiXSwic291cmNlUm9vdCI6IiJ9