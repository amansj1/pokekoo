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
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 7
        }
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90ZXN0cGFnZS5qc3giXSwibmFtZXMiOlsiVGVzdHBhZ2UiLCJwcm9wcyIsInN0YXRlIiwicG9rZW1vbiIsInRva2VuIiwiZmV0Y2hEYXRhIiwicmFuZCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsImluaXRpYWxVUkwiLCJmZXRjaCIsImZldGNoUmVzIiwianNvbiIsInJlcyIsImRhdGEiLCJyZXN1bHRzIiwiY291bnQiLCJDb29raWVzIiwiZ2V0IiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsImdldFBva2Vtb24iLCJwb2tlbW9uUmVjb3JkIiwicG9rZW1vbkRhdGEiLCJjb25zb2xlIiwibG9nIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFLTUEsUTs7Ozs7QUFDSixvQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBOztBQUNoQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBVztBQUNQQyxhQUFPLEVBQUMsRUFERDtBQUVQQyxXQUFLLEVBQUM7QUFGQyxLQUFYO0FBRmdCO0FBUW5COzs7O3dDQUlrQjtBQUFBLGVBQ0ZDLFNBREU7QUFBQTtBQUFBOztBQUFBO0FBQUEsc01BQ2pCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVRQyxzQkFGUixHQUVlQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLE1BQWlCLE1BQU0sQ0FBdkIsSUFBNEIsQ0FBdkMsQ0FGZjtBQUdRQyw0QkFIUixHQUdxQiw4Q0FBNENKLElBQTVDLEdBQWlELFdBSHRFO0FBQUE7QUFBQSx5QkFLeUJLLEtBQUssQ0FBQ0QsVUFBRCxDQUw5Qjs7QUFBQTtBQUtRRSwwQkFMUjtBQUFBO0FBQUEseUJBTW9CQSxRQUFRLENBQUNDLElBQVQsRUFOcEI7O0FBQUE7QUFNUUMscUJBTlI7QUFRUUMsc0JBUlIsR0FRZUQsR0FBRyxDQUFDRSxPQVJuQjtBQVNRQyx1QkFUUixHQVNnQkgsR0FBRyxDQUFDRyxLQVRwQjtBQVdRYix1QkFYUixHQVdnQmMsZ0RBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosQ0FYaEI7QUFBQTtBQUFBLHlCQWMwQkMsT0FBTyxDQUFDQyxHQUFSLENBQVlOLElBQUksQ0FBQ08sR0FBTDtBQUFBLGdOQUFTLGlCQUFNbkIsT0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQUNqQm9CLFVBQVUsQ0FBQ3BCLE9BQUQsQ0FETzs7QUFBQTtBQUN2Q3FCLDJDQUR1QztBQUFBLCtEQUVwQ0EsYUFGb0M7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQVQ7O0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQVosQ0FkMUI7O0FBQUE7QUFjTUMsNkJBZE47QUFtQkVDLHlCQUFPLENBQUNDLEdBQVIsQ0FBWUYsV0FBWjtBQW5CRixvREFvQlM7QUFDTHRCLDJCQUFPLEVBQUVzQixXQURKO0FBRUxSLHlCQUFLLEVBQUxBLEtBRks7QUFFRWIseUJBQUssRUFBTEE7QUFGRixtQkFwQlQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FEaUI7QUFBQTtBQUFBO0FBNEJsQjs7OzZCQUdTO0FBQ04sYUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREY7QUFpQkQ7Ozs7RUE5RG9Cd0IsNENBQUssQ0FBQ0MsUyxHQW1FN0I7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBOzs7QUFJaUI3Qix1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcdGVzdHBhZ2UuanMuODQ2YzYyMGYyNTAyMDA1ODMzMzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCAsIHsgdXNlU3RhdGUgfSAgZnJvbSAncmVhY3QnXHJcbmltcG9ydCAgJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuXHJcblxyXG5cclxuXHJcbmNsYXNzIFRlc3RwYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGU9e1xyXG4gICAgICAgIHBva2Vtb246W10sXHJcbiAgICAgICAgdG9rZW46JydcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5jb21wb25lbnREaWRNb3VudCgpe1xyXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcclxuICBcclxuICAgIGNvbnN0IHJhbmQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoOTY0IC0gMSkgKyAxKTtcclxuICAgIGNvbnN0IGluaXRpYWxVUkwgPSAnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uP29mZnNldD0nK3JhbmQrJyZsaW1pdD0zMCc7XHJcbiAgICBcclxuICAgIGNvbnN0IGZldGNoUmVzID0gYXdhaXQgZmV0Y2goaW5pdGlhbFVSTClcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoUmVzLmpzb24oKVxyXG4gICAgXHJcbiAgICBjb25zdCBkYXRhID0gcmVzLnJlc3VsdHNcclxuICAgIGNvbnN0IGNvdW50ID0gcmVzLmNvdW50IFxyXG4gICBcclxuICAgIGNvbnN0IHRva2VuID0gQ29va2llcy5nZXQoJ3Rva2VuJylcclxuICAgXHJcbiAgXHJcbiAgICBsZXQgcG9rZW1vbkRhdGEgPSBhd2FpdCBQcm9taXNlLmFsbChkYXRhLm1hcChhc3luYyBwb2tlbW9uID0+IHtcclxuICAgICAgbGV0IHBva2Vtb25SZWNvcmQgPSBhd2FpdCBnZXRQb2tlbW9uKHBva2Vtb24pXHJcbiAgICAgIHJldHVybiBwb2tlbW9uUmVjb3JkXHJcbiAgICB9KSlcclxuICAgXHJcbiAgICBjb25zb2xlLmxvZyhwb2tlbW9uRGF0YSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBva2Vtb246IHBva2Vtb25EYXRhLFxyXG4gICAgICBjb3VudCwgdG9rZW5cclxuICAgIH1cclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH1cclxuICBcclxufVxyXG5cclxuXHJcbiAgcmVuZGVyKCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgey8qIHtjb25zb2xlLmxvZyh0b2tlbil9XHJcbiAgICAgICBzczxoMj5QT0tFTU9OIEZPUkVTVCA8YnV0dG9uIG9uQ2xpY2s9e2NvbXBvbmVudERpZE1vdW50fT4gcmVsb2FkIDwvYnV0dG9uPiA8L2gyPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0XCI+XHJcbiAgICAgICAgICB7cG9rZW1vbi5tYXAocG9rZW1vbiA9PiB7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGxpIGtleT17cG9rZW1vbi5uYW1lfSA+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57cG9rZW1vbi5zcHJpdGVzLmZyb250X2RlZmF1bHR9IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvdWw+ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBjb25zdCBUZXN0cGFnZSA9ICh7cG9rZW1vbiA9IFtdLCB0b2tlbiAsY291bnR9KSA9PihcclxuXHJcbiBcclxuLy8gICAgIDxkaXY+XHJcbi8vICAgICAgICB7Y29uc29sZS5sb2codG9rZW4pfVxyXG4vLyAgICAgICBzczxoMj5QT0tFTU9OIEZPUkVTVCA8YnV0dG9uIG9uQ2xpY2s9e2NvbXBvbmVudERpZE1vdW50fT4gcmVsb2FkIDwvYnV0dG9uPiA8L2gyPlxyXG4vLyAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0XCI+XHJcbi8vICAgICAgICAgICB7cG9rZW1vbi5tYXAocG9rZW1vbiA9PiB7XHJcbiAgICAgICAgICAgXHJcbi8vICAgICAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgICAgPGxpIGtleT17cG9rZW1vbi5uYW1lfSA+XHJcbi8vICAgICAgICAgICAgICAgICA8c3Bhbj57cG9rZW1vbi5zcHJpdGVzLmZyb250X2RlZmF1bHR9IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgICAgIDwvbGk+XHJcbi8vICAgICAgICAgICAgIClcclxuLy8gICAgICAgICAgIH0pfVxyXG4vLyAgICAgICAgIDwvdWw+XHJcbi8vICAgICA8L2Rpdj5cclxuLy8gKVxyXG5cclxuXHJcblxyXG4vLyBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCAoKSB7XHJcbiAgXHJcbi8vICAgZmV0Y2hEYXRhKCk7XHJcbi8vIH1cclxuICBcclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldFBva2Vtb24oeyB1cmwgfSkge1xyXG4vLyAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbi8vICAgICAgIGZldGNoKHVybCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuLy8gICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4vLyAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSlcclxuLy8gICAgICAgICAgIH0pXHJcbi8vICAgfSk7XHJcbi8vIH1cclxuXHJcblxyXG5cclxuXHJcbi8vIFRlc3RwYWdlLmdldEluaXRpYWxQcm9wcyA9IGZldGNoRGF0YTtcclxuXHJcblxyXG5cclxuICBleHBvcnQgZGVmYXVsdCBUZXN0cGFnZSJdLCJzb3VyY2VSb290IjoiIn0=