webpackHotUpdate("static\\development\\pages\\forestpage.js",{

/***/ "./component/navbar.jsx":
/*!******************************!*\
  !*** ./component/navbar.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);








var _jsxFileName = "D:\\Koomik\\fe_pokekoo\\component\\navbar.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\npadding: 11px;\nmargin-left: 15px;\nmargin-right: 15px;\nmargin-top: 15px;\nfont-family: \"Lucida Console\", Monaco, monospace;\nfont-size: 23px;\ncursor: pointer;\ncolor:#5f8f45;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["  \ndisplay: flex;\nalign-items: center;\nflex-flow: row;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\nborder-radius: 10%;\nmax-width: 80%;\nmax-height: 80%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n\n  display: flex;\n  align-items: center;\n  flex-flow: column;\n  height: 10%;\n  width: 80%;\n  padding: 20px;\n  padding-bottom : 12px;\n  margin-bottom: 1%;\n  border: 1px solid #fffff;\n  border-radius: 9px;\n  background: #f7f7f7;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Stylednav = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject());
_c = Stylednav;
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].img(_templateObject2());
_c2 = Logo;
var Nav = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject3());
_c3 = Nav;
var Tab = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].a(_templateObject4());
_c4 = Tab;

var Navbar = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Navbar, _React$Component);

  var _super = _createSuper(Navbar);

  function Navbar() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Navbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "logOut", function (e) {
      e.preventDefault();
      console.log('logout');
      js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.remove('token');
      next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push('/');
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Navbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var token = js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.get('token');

      if (token < 0) {
        next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push('/');
      }

      console.log(token);
      document.body.style.backgroundColor = "#dbdbdb";
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(Stylednav, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 13
        }
      }, __jsx(Logo, {
        src: "/pokekoo.png",
        alt: "pokekoo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 13
        }
      }), __jsx(Nav, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 13
        }
      }, __jsx(Tab, {
        onClick: function onClick() {
          return next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push('/forestpage');
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 17
        }
      }, "Forest"), __jsx(Tab, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 17
        }
      }, "Pokedex"), __jsx(Tab, {
        onClick: this.logOut,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 17
        }
      }, "Logout")));
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Stylednav");
$RefreshReg$(_c2, "Logo");
$RefreshReg$(_c3, "Nav");
$RefreshReg$(_c4, "Tab");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvbmF2YmFyLmpzeCJdLCJuYW1lcyI6WyJTdHlsZWRuYXYiLCJzdHlsZWQiLCJkaXYiLCJMb2dvIiwiaW1nIiwiTmF2IiwiVGFiIiwiYSIsIk5hdmJhciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJDb29raWVzIiwicmVtb3ZlIiwiUm91dGVyIiwicHVzaCIsInRva2VuIiwiZ2V0IiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsb2dPdXQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQWY7S0FBTUYsUztBQWNOLElBQU1HLElBQUksR0FBR0YseURBQU0sQ0FBQ0csR0FBVixvQkFBVjtNQUFNRCxJO0FBTU4sSUFBTUUsR0FBRyxHQUFHSix5REFBTSxDQUFDQyxHQUFWLG9CQUFUO01BQU1HLEc7QUFPTixJQUFNQyxHQUFHLEdBQUdMLHlEQUFNLENBQUNNLENBQVYsb0JBQVQ7TUFBTUQsRzs7SUFZQUUsTTs7Ozs7Ozs7Ozs7Ozs7OztpTkFVTyxVQUFDQyxDQUFELEVBQU07QUFDWEEsT0FBQyxDQUFDQyxjQUFGO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDQUMsdURBQU8sQ0FBQ0MsTUFBUixDQUFlLE9BQWY7QUFDQUMseURBQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVo7QUFFSCxLOzs7Ozs7O3dDQWREO0FBQ0ksVUFBTUMsS0FBSyxHQUFHSixpREFBTyxDQUFDSyxHQUFSLENBQVksT0FBWixDQUFkOztBQUNBLFVBQUdELEtBQUssR0FBQyxDQUFULEVBQVc7QUFDUEYsMkRBQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVo7QUFDSDs7QUFDREwsYUFBTyxDQUFDQyxHQUFSLENBQVlLLEtBQVo7QUFDQUUsY0FBUSxDQUFDQyxJQUFULENBQWNDLEtBQWQsQ0FBb0JDLGVBQXBCLEdBQXNDLFNBQXRDO0FBQ0g7Ozs2QkFRTztBQUNKLGFBRUksTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQSxNQUFDLElBQUQ7QUFBTSxXQUFHLEVBQUMsY0FBVjtBQUF5QixXQUFHLEVBQUMsU0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURBLEVBRUEsTUFBQyxHQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLEdBQUQ7QUFBSyxlQUFPLEVBQUU7QUFBQSxpQkFBSVAsbURBQU0sQ0FBQ0MsSUFBUCxDQUFZLGFBQVosQ0FBSjtBQUFBLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixFQUVJLE1BQUMsR0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKLEVBR0ksTUFBQyxHQUFEO0FBQUssZUFBTyxFQUFFLEtBQUtPLE1BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEosQ0FGQSxDQUZKO0FBV0g7Ozs7RUE3QmdCQyw0Q0FBSyxDQUFDQyxTOztBQWdDWmpCLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxmb3Jlc3RwYWdlLmpzLjBmNjlmZGJhOGU1MTI2OWRkNTBhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBTdHlsZWRuYXYgPSBzdHlsZWQuZGl2YFxyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMCU7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tIDogMTJweDtcclxuICBtYXJnaW4tYm90dG9tOiAxJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XHJcbmA7XHJcbmNvbnN0IExvZ28gPSBzdHlsZWQuaW1nXHJcbmBcclxuYm9yZGVyLXJhZGl1czogMTAlO1xyXG5tYXgtd2lkdGg6IDgwJTtcclxubWF4LWhlaWdodDogODAlO1xyXG5gO1xyXG5jb25zdCBOYXYgPSBzdHlsZWQuZGl2XHJcbmAgIFxyXG5kaXNwbGF5OiBmbGV4O1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG5mbGV4LWZsb3c6IHJvdztcclxuYDtcclxuXHJcbmNvbnN0IFRhYiA9IHN0eWxlZC5hXHJcbmBcclxucGFkZGluZzogMTFweDtcclxubWFyZ2luLWxlZnQ6IDE1cHg7XHJcbm1hcmdpbi1yaWdodDogMTVweDtcclxubWFyZ2luLXRvcDogMTVweDtcclxuZm9udC1mYW1pbHk6IFwiTHVjaWRhIENvbnNvbGVcIiwgTW9uYWNvLCBtb25vc3BhY2U7XHJcbmZvbnQtc2l6ZTogMjNweDtcclxuY3Vyc29yOiBwb2ludGVyO1xyXG5jb2xvcjojNWY4ZjQ1O1xyXG5gO1xyXG5cclxuY2xhc3MgTmF2YmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gQ29va2llcy5nZXQoJ3Rva2VuJylcclxuICAgICAgICBpZih0b2tlbjwwKXtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2codG9rZW4pXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNkYmRiZGJcIjtcclxuICAgIH1cclxuICAgIGxvZ091dCA9IChlKSA9PntcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2xvZ291dCcpO1xyXG4gICAgICAgIENvb2tpZXMucmVtb3ZlKCd0b2tlbicpO1xyXG4gICAgICAgIFJvdXRlci5wdXNoKCcvJyk7XHJcblxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICA8U3R5bGVkbmF2PlxyXG4gICAgICAgICAgICA8TG9nbyBzcmM9XCIvcG9rZWtvby5wbmdcIiBhbHQ9XCJwb2tla29vXCIvPlxyXG4gICAgICAgICAgICA8TmF2PlxyXG4gICAgICAgICAgICAgICAgPFRhYiBvbkNsaWNrPXsoKT0+Um91dGVyLnB1c2goJy9mb3Jlc3RwYWdlJyl9PkZvcmVzdDwvVGFiPiBcclxuICAgICAgICAgICAgICAgIDxUYWI+UG9rZWRleDwvVGFiPlxyXG4gICAgICAgICAgICAgICAgPFRhYiBvbkNsaWNrPXt0aGlzLmxvZ091dH0+TG9nb3V0PC9UYWI+XHJcbiAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgIDwvU3R5bGVkbmF2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjsiXSwic291cmNlUm9vdCI6IiJ9