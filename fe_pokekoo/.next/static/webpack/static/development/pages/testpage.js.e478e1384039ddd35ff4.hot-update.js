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
    value: function componentDidMount() {
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

                case 17:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));
        return _fetchData.apply(this, arguments);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 7
        }
      }, console.log(token), "ss", __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 10
        }
      }, "POKEMON FOREST ", __jsx("button", {
        onClick: componentDidMount,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 29
        }
      }, " reload "), " "), __jsx("ul", {
        className: "list",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 9
        }
      }, pokemon.map(function (pokemon) {
        return __jsx("li", {
          key: pokemon.name,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 15
          }
        }, __jsx("span", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90ZXN0cGFnZS5qc3giXSwibmFtZXMiOlsiVGVzdHBhZ2UiLCJwcm9wcyIsInN0YXRlIiwicG9rZW1vbiIsInRva2VuIiwiZmV0Y2hEYXRhIiwicmFuZCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsImluaXRpYWxVUkwiLCJmZXRjaCIsImZldGNoUmVzIiwianNvbiIsInJlcyIsImRhdGEiLCJyZXN1bHRzIiwiY291bnQiLCJDb29raWVzIiwiZ2V0IiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsImdldFBva2Vtb24iLCJwb2tlbW9uUmVjb3JkIiwicG9rZW1vbkRhdGEiLCJjb25zb2xlIiwibG9nIiwiY29tcG9uZW50RGlkTW91bnQiLCJuYW1lIiwic3ByaXRlcyIsImZyb250X2RlZmF1bHQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUtNQSxROzs7OztBQUNKLG9CQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUE7O0FBQ2hCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFXO0FBQ1BDLGFBQU8sRUFBQyxFQUREO0FBRVBDLFdBQUssRUFBQztBQUZDLEtBQVg7QUFGZ0I7QUFRbkI7Ozs7d0NBSWtCO0FBQUEsZUFDRkMsU0FERTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxzTUFDakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVFDLHNCQUZSLEdBRWVDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsTUFBaUIsTUFBTSxDQUF2QixJQUE0QixDQUF2QyxDQUZmO0FBR1FDLDRCQUhSLEdBR3FCLDhDQUE0Q0osSUFBNUMsR0FBaUQsV0FIdEU7QUFBQTtBQUFBLHlCQUt5QkssS0FBSyxDQUFDRCxVQUFELENBTDlCOztBQUFBO0FBS1FFLDBCQUxSO0FBQUE7QUFBQSx5QkFNb0JBLFFBQVEsQ0FBQ0MsSUFBVCxFQU5wQjs7QUFBQTtBQU1RQyxxQkFOUjtBQVFRQyxzQkFSUixHQVFlRCxHQUFHLENBQUNFLE9BUm5CO0FBU1FDLHVCQVRSLEdBU2dCSCxHQUFHLENBQUNHLEtBVHBCO0FBV1FiLHVCQVhSLEdBV2dCYyxnREFBTyxDQUFDQyxHQUFSLENBQVksT0FBWixDQVhoQjtBQUFBO0FBQUEseUJBYzBCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWU4sSUFBSSxDQUFDTyxHQUFMO0FBQUEsZ05BQVMsaUJBQU1uQixPQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBQ2pCb0IsVUFBVSxDQUFDcEIsT0FBRCxDQURPOztBQUFBO0FBQ3ZDcUIsMkNBRHVDO0FBQUEsK0RBRXBDQSxhQUZvQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBVDs7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBWixDQWQxQjs7QUFBQTtBQWNNQyw2QkFkTjtBQW1CRUMseUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixXQUFaO0FBbkJGLG9EQW9CUztBQUNMdEIsMkJBQU8sRUFBRXNCLFdBREo7QUFFTFIseUJBQUssRUFBTEEsS0FGSztBQUVFYix5QkFBSyxFQUFMQTtBQUZGLG1CQXBCVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURpQjtBQUFBO0FBQUE7QUE0QmxCOzs7NkJBR1M7QUFBQTs7QUFDTixhQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQXNCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZdkIsS0FBWixDQURBLFFBRUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFBbUI7QUFBUSxlQUFPLEVBQUV3QixpQkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBbkIsTUFGSCxFQUdFO0FBQUksaUJBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDR3pCLE9BQU8sQ0FBQ21CLEdBQVIsQ0FBWSxVQUFBbkIsT0FBTyxFQUFJO0FBRXRCLGVBQ0U7QUFBSSxhQUFHLEVBQUVBLE9BQU8sQ0FBQzBCLElBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQU8xQixPQUFPLENBQUMyQixPQUFSLENBQWdCQyxhQUF2QixNQURGLENBREY7QUFNRCxPQVJBLENBREgsQ0FIRixDQURGO0FBaUJEOzs7O0VBOURvQkMsNENBQUssQ0FBQ0MsUyxHQW1FN0I7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBOzs7QUFJaUJqQyx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcdGVzdHBhZ2UuanMuZTQ3OGUxMzg0MDM5ZGRkMzVmZjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCAsIHsgdXNlU3RhdGUgfSAgZnJvbSAncmVhY3QnXHJcbmltcG9ydCAgJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuXHJcblxyXG5cclxuXHJcbmNsYXNzIFRlc3RwYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGU9e1xyXG4gICAgICAgIHBva2Vtb246W10sXHJcbiAgICAgICAgdG9rZW46JydcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5jb21wb25lbnREaWRNb3VudCgpe1xyXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcclxuICBcclxuICAgIGNvbnN0IHJhbmQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoOTY0IC0gMSkgKyAxKTtcclxuICAgIGNvbnN0IGluaXRpYWxVUkwgPSAnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uP29mZnNldD0nK3JhbmQrJyZsaW1pdD0zMCc7XHJcbiAgICBcclxuICAgIGNvbnN0IGZldGNoUmVzID0gYXdhaXQgZmV0Y2goaW5pdGlhbFVSTClcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoUmVzLmpzb24oKVxyXG4gICAgXHJcbiAgICBjb25zdCBkYXRhID0gcmVzLnJlc3VsdHNcclxuICAgIGNvbnN0IGNvdW50ID0gcmVzLmNvdW50IFxyXG4gICBcclxuICAgIGNvbnN0IHRva2VuID0gQ29va2llcy5nZXQoJ3Rva2VuJylcclxuICAgXHJcbiAgXHJcbiAgICBsZXQgcG9rZW1vbkRhdGEgPSBhd2FpdCBQcm9taXNlLmFsbChkYXRhLm1hcChhc3luYyBwb2tlbW9uID0+IHtcclxuICAgICAgbGV0IHBva2Vtb25SZWNvcmQgPSBhd2FpdCBnZXRQb2tlbW9uKHBva2Vtb24pXHJcbiAgICAgIHJldHVybiBwb2tlbW9uUmVjb3JkXHJcbiAgICB9KSlcclxuICAgXHJcbiAgICBjb25zb2xlLmxvZyhwb2tlbW9uRGF0YSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBva2Vtb246IHBva2Vtb25EYXRhLFxyXG4gICAgICBjb3VudCwgdG9rZW5cclxuICAgIH1cclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH1cclxuICBcclxufVxyXG5cclxuXHJcbiAgcmVuZGVyKCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxkaXY+XHJcbiAgICAge2NvbnNvbGUubG9nKHRva2VuKX1cclxuICAgICAgIHNzPGgyPlBPS0VNT04gRk9SRVNUIDxidXR0b24gb25DbGljaz17Y29tcG9uZW50RGlkTW91bnR9PiByZWxvYWQgPC9idXR0b24+IDwvaDI+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3RcIj5cclxuICAgICAgICAgIHtwb2tlbW9uLm1hcChwb2tlbW9uID0+IHtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8bGkga2V5PXtwb2tlbW9uLm5hbWV9ID5cclxuICAgICAgICAgICAgICAgIDxzcGFuPntwb2tlbW9uLnNwcml0ZXMuZnJvbnRfZGVmYXVsdH0gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gY29uc3QgVGVzdHBhZ2UgPSAoe3Bva2Vtb24gPSBbXSwgdG9rZW4gLGNvdW50fSkgPT4oXHJcblxyXG4gXHJcbi8vICAgICA8ZGl2PlxyXG4vLyAgICAgICAge2NvbnNvbGUubG9nKHRva2VuKX1cclxuLy8gICAgICAgc3M8aDI+UE9LRU1PTiBGT1JFU1QgPGJ1dHRvbiBvbkNsaWNrPXtjb21wb25lbnREaWRNb3VudH0+IHJlbG9hZCA8L2J1dHRvbj4gPC9oMj5cclxuLy8gICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxyXG4vLyAgICAgICAgICAge3Bva2Vtb24ubWFwKHBva2Vtb24gPT4ge1xyXG4gICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgICAgIDxsaSBrZXk9e3Bva2Vtb24ubmFtZX0gPlxyXG4vLyAgICAgICAgICAgICAgICAgPHNwYW4+e3Bva2Vtb24uc3ByaXRlcy5mcm9udF9kZWZhdWx0fSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICBcclxuLy8gICAgICAgICAgICAgICA8L2xpPlxyXG4vLyAgICAgICAgICAgICApXHJcbi8vICAgICAgICAgICB9KX1cclxuLy8gICAgICAgICA8L3VsPlxyXG4vLyAgICAgPC9kaXY+XHJcbi8vIClcclxuXHJcblxyXG5cclxuLy8gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQgKCkge1xyXG4gIFxyXG4vLyAgIGZldGNoRGF0YSgpO1xyXG4vLyB9XHJcbiAgXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBnZXRQb2tlbW9uKHsgdXJsIH0pIHtcclxuLy8gICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4vLyAgICAgICBmZXRjaCh1cmwpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbi8vICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuLy8gICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpXHJcbi8vICAgICAgICAgICB9KVxyXG4vLyAgIH0pO1xyXG4vLyB9XHJcblxyXG5cclxuXHJcblxyXG4vLyBUZXN0cGFnZS5nZXRJbml0aWFsUHJvcHMgPSBmZXRjaERhdGE7XHJcblxyXG5cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgVGVzdHBhZ2UiXSwic291cmNlUm9vdCI6IiJ9