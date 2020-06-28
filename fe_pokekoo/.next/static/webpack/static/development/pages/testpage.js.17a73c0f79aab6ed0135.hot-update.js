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


Testpage.getInitialProps = fetchData;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90ZXN0cGFnZS5qc3giXSwibmFtZXMiOlsiVGVzdHBhZ2UiLCJwcm9wcyIsInN0YXRlIiwicG9rZW1vbiIsInRva2VuIiwiZmV0Y2hEYXRhIiwicmFuZCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsImluaXRpYWxVUkwiLCJmZXRjaCIsImZldGNoUmVzIiwianNvbiIsInJlcyIsImRhdGEiLCJyZXN1bHRzIiwiY291bnQiLCJDb29raWVzIiwiZ2V0IiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsImdldFBva2Vtb24iLCJwb2tlbW9uUmVjb3JkIiwicG9rZW1vbkRhdGEiLCJjb25zb2xlIiwibG9nIiwiUmVhY3QiLCJDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFLTUEsUTs7Ozs7QUFDSixvQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBOztBQUNoQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBVztBQUNQQyxhQUFPLEVBQUMsRUFERDtBQUVQQyxXQUFLLEVBQUM7QUFGQyxLQUFYO0FBRmdCO0FBUW5COzs7O3dDQUlrQjtBQUFBLGVBQ0ZDLFNBREU7QUFBQTtBQUFBOztBQUFBO0FBQUEsc01BQ2pCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVRQyxzQkFGUixHQUVlQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLE1BQWlCLE1BQU0sQ0FBdkIsSUFBNEIsQ0FBdkMsQ0FGZjtBQUdRQyw0QkFIUixHQUdxQiw4Q0FBNENKLElBQTVDLEdBQWlELFdBSHRFO0FBQUE7QUFBQSx5QkFLeUJLLEtBQUssQ0FBQ0QsVUFBRCxDQUw5Qjs7QUFBQTtBQUtRRSwwQkFMUjtBQUFBO0FBQUEseUJBTW9CQSxRQUFRLENBQUNDLElBQVQsRUFOcEI7O0FBQUE7QUFNUUMscUJBTlI7QUFRUUMsc0JBUlIsR0FRZUQsR0FBRyxDQUFDRSxPQVJuQjtBQVNRQyx1QkFUUixHQVNnQkgsR0FBRyxDQUFDRyxLQVRwQjtBQVdRYix1QkFYUixHQVdnQmMsZ0RBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosQ0FYaEI7QUFBQTtBQUFBLHlCQWMwQkMsT0FBTyxDQUFDQyxHQUFSLENBQVlOLElBQUksQ0FBQ08sR0FBTDtBQUFBLGdOQUFTLGlCQUFNbkIsT0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQUNqQm9CLFVBQVUsQ0FBQ3BCLE9BQUQsQ0FETzs7QUFBQTtBQUN2Q3FCLDJDQUR1QztBQUFBLCtEQUVwQ0EsYUFGb0M7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQVQ7O0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQVosQ0FkMUI7O0FBQUE7QUFjTUMsNkJBZE47QUFtQkVDLHlCQUFPLENBQUNDLEdBQVIsQ0FBWUYsV0FBWjtBQW5CRixvREFvQlM7QUFDTHRCLDJCQUFPLEVBQUVzQixXQURKO0FBRUxSLHlCQUFLLEVBQUxBLEtBRks7QUFFRWIseUJBQUssRUFBTEE7QUFGRixtQkFwQlQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FEaUI7QUFBQTtBQUFBO0FBNEJsQjs7OzZCQUdTO0FBQ04sYUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREY7QUFpQkQ7Ozs7RUE5RG9Cd0IsNENBQUssQ0FBQ0MsUyxHQW1FN0I7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBS0E3QixRQUFRLENBQUM4QixlQUFULEdBQTJCekIsU0FBM0I7QUFJaUJMLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFx0ZXN0cGFnZS5qcy4xN2E3M2MwZjc5YWFiNmVkMDEzNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0ICwgeyB1c2VTdGF0ZSB9ICBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICAnaXNvbW9ycGhpYy11bmZldGNoJ1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5cclxuXHJcblxyXG5cclxuY2xhc3MgVGVzdHBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZT17XHJcbiAgICAgICAgcG9rZW1vbjpbXSxcclxuICAgICAgICB0b2tlbjonJ1xyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcbmNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xyXG4gIFxyXG4gICAgY29uc3QgcmFuZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqICg5NjQgLSAxKSArIDEpO1xyXG4gICAgY29uc3QgaW5pdGlhbFVSTCA9ICdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24/b2Zmc2V0PScrcmFuZCsnJmxpbWl0PTMwJztcclxuICAgIFxyXG4gICAgY29uc3QgZmV0Y2hSZXMgPSBhd2FpdCBmZXRjaChpbml0aWFsVVJMKVxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2hSZXMuanNvbigpXHJcbiAgICBcclxuICAgIGNvbnN0IGRhdGEgPSByZXMucmVzdWx0c1xyXG4gICAgY29uc3QgY291bnQgPSByZXMuY291bnQgXHJcbiAgIFxyXG4gICAgY29uc3QgdG9rZW4gPSBDb29raWVzLmdldCgndG9rZW4nKVxyXG4gICBcclxuICBcclxuICAgIGxldCBwb2tlbW9uRGF0YSA9IGF3YWl0IFByb21pc2UuYWxsKGRhdGEubWFwKGFzeW5jIHBva2Vtb24gPT4ge1xyXG4gICAgICBsZXQgcG9rZW1vblJlY29yZCA9IGF3YWl0IGdldFBva2Vtb24ocG9rZW1vbilcclxuICAgICAgcmV0dXJuIHBva2Vtb25SZWNvcmRcclxuICAgIH0pKVxyXG4gICBcclxuICAgIGNvbnNvbGUubG9nKHBva2Vtb25EYXRhKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcG9rZW1vbjogcG9rZW1vbkRhdGEsXHJcbiAgICAgIGNvdW50LCB0b2tlblxyXG4gICAgfVxyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5cclxuICByZW5kZXIoKXtcclxuICAgIHJldHVybihcclxuICAgICAgPGRpdj5cclxuICAgICB7Lyoge2NvbnNvbGUubG9nKHRva2VuKX1cclxuICAgICAgIHNzPGgyPlBPS0VNT04gRk9SRVNUIDxidXR0b24gb25DbGljaz17Y29tcG9uZW50RGlkTW91bnR9PiByZWxvYWQgPC9idXR0b24+IDwvaDI+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3RcIj5cclxuICAgICAgICAgIHtwb2tlbW9uLm1hcChwb2tlbW9uID0+IHtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8bGkga2V5PXtwb2tlbW9uLm5hbWV9ID5cclxuICAgICAgICAgICAgICAgIDxzcGFuPntwb2tlbW9uLnNwcml0ZXMuZnJvbnRfZGVmYXVsdH0gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC91bD4gKi99XHJcbiAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIGNvbnN0IFRlc3RwYWdlID0gKHtwb2tlbW9uID0gW10sIHRva2VuICxjb3VudH0pID0+KFxyXG5cclxuIFxyXG4vLyAgICAgPGRpdj5cclxuLy8gICAgICAgIHtjb25zb2xlLmxvZyh0b2tlbil9XHJcbi8vICAgICAgIHNzPGgyPlBPS0VNT04gRk9SRVNUIDxidXR0b24gb25DbGljaz17Y29tcG9uZW50RGlkTW91bnR9PiByZWxvYWQgPC9idXR0b24+IDwvaDI+XHJcbi8vICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3RcIj5cclxuLy8gICAgICAgICAgIHtwb2tlbW9uLm1hcChwb2tlbW9uID0+IHtcclxuICAgICAgICAgICBcclxuLy8gICAgICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgICAgICA8bGkga2V5PXtwb2tlbW9uLm5hbWV9ID5cclxuLy8gICAgICAgICAgICAgICAgIDxzcGFuPntwb2tlbW9uLnNwcml0ZXMuZnJvbnRfZGVmYXVsdH0gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgXHJcbi8vICAgICAgICAgICAgICAgPC9saT5cclxuLy8gICAgICAgICAgICAgKVxyXG4vLyAgICAgICAgICAgfSl9XHJcbi8vICAgICAgICAgPC91bD5cclxuLy8gICAgIDwvZGl2PlxyXG4vLyApXHJcblxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50ICgpIHtcclxuICBcclxuLy8gICBmZXRjaERhdGEoKTtcclxuLy8gfVxyXG4gIFxyXG4vLyBleHBvcnQgZnVuY3Rpb24gZ2V0UG9rZW1vbih7IHVybCB9KSB7XHJcbi8vICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuLy8gICAgICAgZmV0Y2godXJsKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4vLyAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKVxyXG4vLyAgICAgICAgICAgfSlcclxuLy8gICB9KTtcclxuLy8gfVxyXG5cclxuXHJcblxyXG5cclxuVGVzdHBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gZmV0Y2hEYXRhO1xyXG5cclxuXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IFRlc3RwYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==