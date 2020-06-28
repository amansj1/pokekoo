webpackHotUpdate("static\\development\\pages\\pokedexpage.js",{

/***/ "./pages/pokedexpage.jsx":
/*!*******************************!*\
  !*** ./pages/pokedexpage.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../config */ "./config.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_11__);




var _this = undefined,
    _jsxFileName = "D:\\Koomik\\fe_pokekoo\\pages\\pokedexpage.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n background: #ff8019;\n    color: #fff;\n    padding: 11px;\n    margin-top: 15px;\n    width: 10%;\n    border: none;\n    border-radius: 4px;\n    box-sizing: border-box;\n "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  content: \"\";\n  display: table;\n  align-items: center;\n  clear: both;\n  margin:15px 20px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n\n  display: flex;\n  align-items: Left;\n  flex-flow: column;\n  height: 10%;\n  width: 80%;\n  padding: 20px;\n  padding-bottom : 40px;\n  margin-bottom: 8% auto;\n  margin-top: 13% auto;\n  border: 1px solid #fffff;\n  border-radius: 9px;\n  background: #f7f7f7;\n  h2 {\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 14px;\n  }\n  \n"]);

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
var Reload = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button(_templateObject4());

var Pokedexpage = function Pokedexpage(_ref) {
  var _ref$pokemon = _ref.pokemon,
      pokemon = _ref$pokemon === void 0 ? [] : _ref$pokemon,
      token = _ref.token,
      count = _ref.count;
  return __jsx(Wrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }, console.log(pokemon.data.name), __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 8
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 10
    }
  }, "Pokedex Page : POKEKOO"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 10
    }
  })), __jsx(_component_navbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }), __jsx(Styleddiv, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, "POKEMON DEX ", pokemon.data.name, " "), __jsx(Bariscard, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 14
    }
  }, pokemon.data.poke.data.map(function (pokemon) {
    return __jsx(_component_card__WEBPACK_IMPORTED_MODULE_7__["default"], {
      namaPokemon: pokemon.pokeName,
      urlPoK: pokemon.pokeImg,
      key: pokemon.pokeName,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 21
      }
    });
  }))));
};

_c4 = Pokedexpage;
Pokedexpage.getInitialProps = fetchData;

function fetchData() {
  return _fetchData.apply(this, arguments);
}

function _fetchData() {
  _fetchData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var token, initialURL, config, fetchRes, res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = js_cookie__WEBPACK_IMPORTED_MODULE_9___default.a.get('token');
            initialURL = "".concat(_config__WEBPACK_IMPORTED_MODULE_11__["API"], "/profile");
            config = {
              headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
              }
            };
            _context.next = 5;
            return fetch(initialURL, config);

          case 5:
            fetchRes = _context.sent;
            _context.next = 8;
            return fetchRes.json();

          case 8:
            res = _context.sent;
            return _context.abrupt("return", {
              pokemon: res,
              token: token
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchData.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (Pokedexpage);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Wrapper");
$RefreshReg$(_c2, "Styleddiv");
$RefreshReg$(_c3, "Bariscard");
$RefreshReg$(_c4, "Pokedexpage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb2tlZGV4cGFnZS5qc3giXSwibmFtZXMiOlsiV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIlN0eWxlZGRpdiIsIkJhcmlzY2FyZCIsIlJlbG9hZCIsImJ1dHRvbiIsIlBva2VkZXhwYWdlIiwicG9rZW1vbiIsInRva2VuIiwiY291bnQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIm5hbWUiLCJwb2tlIiwibWFwIiwicG9rZU5hbWUiLCJwb2tlSW1nIiwiZ2V0SW5pdGlhbFByb3BzIiwiZmV0Y2hEYXRhIiwiQ29va2llcyIsImdldCIsImluaXRpYWxVUkwiLCJBUEkiLCJjb25maWciLCJoZWFkZXJzIiwiZmV0Y2giLCJmZXRjaFJlcyIsImpzb24iLCJyZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSxJQUFNQSxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQWI7S0FBTUYsTztBQVFOLElBQU1HLFNBQVMsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVixvQkFBZjtNQUFNQyxTO0FBcUJOLElBQU1DLFNBQVMsR0FBR0gseURBQU0sQ0FBQ0MsR0FBVixvQkFBZjtNQUFNRSxTO0FBUUwsSUFBTUMsTUFBTSxHQUFHSix5REFBTSxDQUFDSyxNQUFWLG9CQUFaOztBQVlELElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsMEJBQUVDLE9BQUY7QUFBQSxNQUFFQSxPQUFGLDZCQUFZLEVBQVo7QUFBQSxNQUFlQyxLQUFmLFFBQWVBLEtBQWY7QUFBQSxNQUFzQkMsS0FBdEIsUUFBc0JBLEtBQXRCO0FBQUEsU0FFaEIsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlKLE9BQU8sQ0FBQ0ssSUFBUixDQUFhQyxJQUF6QixDQURKLEVBRUcsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFERixFQUVFO0FBQU0sUUFBSSxFQUFDLFVBQVg7QUFBc0IsV0FBTyxFQUFDLHVDQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FGSCxFQU1FLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLEVBT0ksTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFpQk4sT0FBTyxDQUFDSyxJQUFSLENBQWFDLElBQTlCLE1BREosRUFFSyxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJTixPQUFPLENBQUNLLElBQVIsQ0FBYUUsSUFBYixDQUFrQkYsSUFBbEIsQ0FBdUJHLEdBQXZCLENBQTJCLFVBQUFSLE9BQU8sRUFBRztBQUFFLFdBRXBDLE1BQUMsdURBQUQ7QUFBVSxpQkFBVyxFQUFFQSxPQUFPLENBQUNTLFFBQS9CO0FBQXlDLFlBQU0sRUFBRVQsT0FBTyxDQUFDVSxPQUF6RDtBQUFrRSxTQUFHLEVBQUVWLE9BQU8sQ0FBQ1MsUUFBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZvQztBQUl0QyxHQUpELENBREosQ0FGTCxDQVBKLENBRmdCO0FBQUEsQ0FBcEI7O01BQU1WLFc7QUEwQk5BLFdBQVcsQ0FBQ1ksZUFBWixHQUE4QkMsU0FBOUI7O1NBRWVBLFM7Ozs7O2dNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVVWCxpQkFGVixHQUVrQlksZ0RBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosQ0FGbEI7QUFHVUMsc0JBSFYsYUFHMEJDLDRDQUgxQjtBQUlRQyxrQkFKUixHQUllO0FBQ1RDLHFCQUFPLEVBQUM7QUFDTiwwQkFBVSxrQkFESjtBQUVOLGlDQUFpQixZQUFVakI7QUFGckI7QUFEQyxhQUpmO0FBQUE7QUFBQSxtQkFXMkJrQixLQUFLLENBQUNKLFVBQUQsRUFBYUUsTUFBYixDQVhoQzs7QUFBQTtBQVdVRyxvQkFYVjtBQUFBO0FBQUEsbUJBWXNCQSxRQUFRLENBQUNDLElBQVQsRUFadEI7O0FBQUE7QUFZVUMsZUFaVjtBQUFBLDZDQWVXO0FBQ0x0QixxQkFBTyxFQUFFc0IsR0FESjtBQUVMckIsbUJBQUssRUFBTEE7QUFGSyxhQWZYOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUF1QmVGLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwb2tlZGV4cGFnZS5qcy4zNGZmZTA0ZWYxMTIyNDBjYWRmNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnQvbmF2YmFyJztcclxuaW1wb3J0IENhcmRQb2tlIGZyb20gJy4uL2NvbXBvbmVudC9jYXJkJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IEFQSSB9IGZyb20gJy4uL2NvbmZpZyc7XHJcblxyXG5cclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2XHJcbmAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRkaXYgPSBzdHlsZWQuZGl2YFxyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBMZWZ0O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIGhlaWdodDogMTAlO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbSA6IDQwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogOCUgYXV0bztcclxuICBtYXJnaW4tdG9wOiAxMyUgYXV0bztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XHJcbiAgaDIge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIFxyXG5gO1xyXG5cclxuY29uc3QgQmFyaXNjYXJkID0gc3R5bGVkLmRpdlxyXG5gXHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIG1hcmdpbjoxNXB4IDIwcHg7XHJcbmA7XHJcbiBjb25zdCBSZWxvYWQgPSBzdHlsZWQuYnV0dG9uXHJcbiBgXHJcbiBiYWNrZ3JvdW5kOiAjZmY4MDE5O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxMXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gYDtcclxuXHJcbmNvbnN0IFBva2VkZXhwYWdlID0gKHtwb2tlbW9uID0gW10sdG9rZW4sIGNvdW50fSkgPT4oXHJcblxyXG4gICAgPFdyYXBwZXI+XHJcbiAgICAgICB7Y29uc29sZS5sb2cocG9rZW1vbi5kYXRhLm5hbWUpfVxyXG4gICAgICAgPEhlYWQ+XHJcbiAgICAgICAgIDx0aXRsZT5Qb2tlZGV4IFBhZ2UgOiBQT0tFS09PPC90aXRsZT5cclxuICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgPE5hdmJhci8+XHJcbiAgICAgICAgPFN0eWxlZGRpdj5cclxuICAgICAgICAgICAgPGgyPlBPS0VNT04gREVYIHtwb2tlbW9uLmRhdGEubmFtZX0gPC9oMj5cclxuICAgICAgICAgICAgIDxCYXJpc2NhcmQ+IFxyXG4gICAgICAgICAgICAgICAge3Bva2Vtb24uZGF0YS5wb2tlLmRhdGEubWFwKHBva2Vtb24gPT57IHJldHVybihcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRQb2tlIG5hbWFQb2tlbW9uPXtwb2tlbW9uLnBva2VOYW1lfSB1cmxQb0s9e3Bva2Vtb24ucG9rZUltZ30ga2V5PXtwb2tlbW9uLnBva2VOYW1lfS8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICl9KX1cclxuICAgICAgICAgICAgIDwvQmFyaXNjYXJkPlxyXG4gICAgICAgICA8L1N0eWxlZGRpdj5cclxuICAgICA8L1dyYXBwZXI+XHJcbiAgIFxyXG4pXHJcblxyXG5cclxuXHJcblxyXG5Qb2tlZGV4cGFnZS5nZXRJbml0aWFsUHJvcHMgPSBmZXRjaERhdGE7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XHJcbiAgXHJcbiAgICBjb25zdCB0b2tlbiA9IENvb2tpZXMuZ2V0KCd0b2tlbicpXHJcbiAgICBjb25zdCBpbml0aWFsVVJMID0gYCR7QVBJfS9wcm9maWxlYDtcclxuICAgIGxldCBjb25maWc9e1xyXG4gICAgICBoZWFkZXJzOntcclxuICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnK3Rva2VuXHJcbiAgICAgIH1cclxuICAgICB9O1xyXG4gICAgXHJcbiAgICBjb25zdCBmZXRjaFJlcyA9IGF3YWl0IGZldGNoKGluaXRpYWxVUkwsIGNvbmZpZylcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoUmVzLmpzb24oKVxyXG4gICAgXHJcbiAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwb2tlbW9uOiByZXMsXHJcbiAgICAgIHRva2VuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb2tlZGV4cGFnZVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==