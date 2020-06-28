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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./config.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);



var _this = undefined,
    _jsxFileName = "D:\\Koomik\\fe_pokekoo\\pages\\testpage.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var Testpage = function Testpage(_ref) {
  var _ref$pokemon = _ref.pokemon,
      pokemon = _ref$pokemon === void 0 ? [] : _ref$pokemon,
      token = _ref.token;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, console.log(pokemon), console.log(token), "ss", __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, "POKEMON FOREST  "), __jsx("ul", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, pokemon.map(function (pokemon) {
    return __jsx("li", {
      key: pokemon.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 15
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }
    }, pokemon.sprites.front_default, " "));
  })));
};

_c = Testpage;
Testpage.getInitialProps = fetchData;

function fetchData() {
  return _fetchData.apply(this, arguments);
}

function _fetchData() {
  _fetchData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var token, initialURL, config, fetchRes;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get('token');
            initialURL = "".concat(_config__WEBPACK_IMPORTED_MODULE_5__["API"], "/profile");
            config = {
              headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + this.state.token
              }
            };
            fetchRes = axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(initialURL, config).then(function (response) {
              setState({
                fetchRes: response.data
              });
            })["catch"](function (error) {
              alert(error.response.request.responseText);
            });
            console.log(res.data);
            return _context.abrupt("return", {
              pokemon: fetchRes,
              token: token
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90ZXN0cGFnZS5qc3giXSwibmFtZXMiOlsiVGVzdHBhZ2UiLCJwb2tlbW9uIiwidG9rZW4iLCJjb25zb2xlIiwibG9nIiwibWFwIiwibmFtZSIsInNwcml0ZXMiLCJmcm9udF9kZWZhdWx0IiwiZ2V0SW5pdGlhbFByb3BzIiwiZmV0Y2hEYXRhIiwiQ29va2llcyIsImdldCIsImluaXRpYWxVUkwiLCJBUEkiLCJjb25maWciLCJoZWFkZXJzIiwic3RhdGUiLCJmZXRjaFJlcyIsIkF4aW9zIiwidGhlbiIsInJlc3BvbnNlIiwic2V0U3RhdGUiLCJkYXRhIiwiZXJyb3IiLCJhbGVydCIsInJlcXVlc3QiLCJyZXNwb25zZVRleHQiLCJyZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUdBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsMEJBQUVDLE9BQUY7QUFBQSxNQUFFQSxPQUFGLDZCQUFZLEVBQVo7QUFBQSxNQUFnQkMsS0FBaEIsUUFBZ0JBLEtBQWhCO0FBQUEsU0FHYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0lDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxPQUFaLENBREosRUFFSUUsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVosQ0FGSixRQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBSEosRUFJSTtBQUFJLGFBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0QsT0FBTyxDQUFDSSxHQUFSLENBQVksVUFBQUosT0FBTyxFQUFJO0FBRXRCLFdBQ0U7QUFBSSxTQUFHLEVBQUVBLE9BQU8sQ0FBQ0ssSUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBT0wsT0FBTyxDQUFDTSxPQUFSLENBQWdCQyxhQUF2QixNQURGLENBREY7QUFNRCxHQVJBLENBREgsQ0FKSixDQUhhO0FBQUEsQ0FBakI7O0tBQU1SLFE7QUF1Qk5BLFFBQVEsQ0FBQ1MsZUFBVCxHQUEyQkMsU0FBM0I7O1NBRWVBLFM7Ozs7O2dNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVRUixpQkFGUixHQUVnQlMsZ0RBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosQ0FGaEI7QUFHUUMsc0JBSFIsYUFHd0JDLDJDQUh4QjtBQUlNQyxrQkFKTixHQUlhO0FBQ1RDLHFCQUFPLEVBQUM7QUFDTiwwQkFBVSxrQkFESjtBQUVOLGlDQUFpQixZQUFVLEtBQUtDLEtBQUwsQ0FBV2Y7QUFGaEM7QUFEQyxhQUpiO0FBV1FnQixvQkFYUixHQVdtQkMsNENBQUssQ0FBQ1AsR0FBTixDQUFVQyxVQUFWLEVBQXNCRSxNQUF0QixFQUE4QkssSUFBOUIsQ0FBbUMsVUFBQ0MsUUFBRCxFQUFjO0FBQ2pFQyxzQkFBUSxDQUFDO0FBQ1BKLHdCQUFRLEVBQUVHLFFBQVEsQ0FBQ0U7QUFEWixlQUFELENBQVI7QUFHRSxhQUpjLFdBSU4sVUFBQUMsS0FBSyxFQUFJO0FBQ2pCQyxtQkFBSyxDQUFDRCxLQUFLLENBQUNILFFBQU4sQ0FBZUssT0FBZixDQUF1QkMsWUFBeEIsQ0FBTDtBQUNBLGFBTmMsQ0FYbkI7QUFxQkV4QixtQkFBTyxDQUFDQyxHQUFSLENBQVl3QixHQUFHLENBQUNMLElBQWhCO0FBckJGLDZDQXNCUztBQUNMdEIscUJBQU8sRUFBRWlCLFFBREo7QUFFTGhCLG1CQUFLLEVBQUxBO0FBRkssYUF0QlQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQTRCaUJGLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFx0ZXN0cGFnZS5qcy4yNTlkNTZhZjIyOWNlMzNmYWRjOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0ICwgeyB1c2VTdGF0ZSB9ICBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICAnaXNvbW9ycGhpYy11bmZldGNoJ1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5cclxuaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcblxyXG5jb25zdCBUZXN0cGFnZSA9ICh7cG9rZW1vbiA9IFtdLCB0b2tlbn0pID0+KFxyXG5cclxuIFxyXG4gICAgPGRpdj5cclxuICAgICAgIHtjb25zb2xlLmxvZyhwb2tlbW9uKX1cclxuICAgICAgIHtjb25zb2xlLmxvZyh0b2tlbil9XHJcbiAgICAgIHNzPGgyPlBPS0VNT04gRk9SRVNUICA8L2gyPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0XCI+XHJcbiAgICAgICAgICB7cG9rZW1vbi5tYXAocG9rZW1vbiA9PiB7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGxpIGtleT17cG9rZW1vbi5uYW1lfSA+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57cG9rZW1vbi5zcHJpdGVzLmZyb250X2RlZmF1bHR9IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuKVxyXG5cclxuXHJcblxyXG5UZXN0cGFnZS5nZXRJbml0aWFsUHJvcHMgPSBmZXRjaERhdGE7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XHJcbiAgXHJcbiAgY29uc3QgdG9rZW4gPSBDb29raWVzLmdldCgndG9rZW4nKVxyXG4gIGNvbnN0IGluaXRpYWxVUkwgPSBgJHtBUEl9L3Byb2ZpbGVgO1xyXG4gIGxldCBjb25maWc9e1xyXG4gICAgaGVhZGVyczp7XHJcbiAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnK3RoaXMuc3RhdGUudG9rZW5cclxuICAgIH1cclxuICAgfTtcclxuICBcclxuICBjb25zdCBmZXRjaFJlcyA9IEF4aW9zLmdldChpbml0aWFsVVJMLCBjb25maWcpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgIHNldFN0YXRlKHtcclxuICAgICBmZXRjaFJlcyA6cmVzcG9uc2UuZGF0YVxyXG4gICB9KVxyXG4gICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgIGFsZXJ0KGVycm9yLnJlc3BvbnNlLnJlcXVlc3QucmVzcG9uc2VUZXh0KTtcclxuICAgIH0pO1xyXG5cclxuICBcclxuXHJcbiAgY29uc29sZS5sb2cocmVzLmRhdGEpXHJcbiAgcmV0dXJuIHtcclxuICAgIHBva2Vtb246IGZldGNoUmVzLFxyXG4gICAgdG9rZW5cclxuICB9XHJcbn1cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgVGVzdHBhZ2UiXSwic291cmNlUm9vdCI6IiJ9