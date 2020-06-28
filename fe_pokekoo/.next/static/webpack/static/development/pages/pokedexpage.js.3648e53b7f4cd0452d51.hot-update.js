webpackHotUpdate("static\\development\\pages\\pokedexpage.js",{

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

      if (token == null) {
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
        onClick: function onClick() {
          return next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push('/pokedexpage');
        },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvbmF2YmFyLmpzeCJdLCJuYW1lcyI6WyJTdHlsZWRuYXYiLCJzdHlsZWQiLCJkaXYiLCJMb2dvIiwiaW1nIiwiTmF2IiwiVGFiIiwiYSIsIk5hdmJhciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJDb29raWVzIiwicmVtb3ZlIiwiUm91dGVyIiwicHVzaCIsInRva2VuIiwiZ2V0IiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsb2dPdXQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQWY7S0FBTUYsUztBQWNOLElBQU1HLElBQUksR0FBR0YseURBQU0sQ0FBQ0csR0FBVixvQkFBVjtNQUFNRCxJO0FBTU4sSUFBTUUsR0FBRyxHQUFHSix5REFBTSxDQUFDQyxHQUFWLG9CQUFUO01BQU1HLEc7QUFPTixJQUFNQyxHQUFHLEdBQUdMLHlEQUFNLENBQUNNLENBQVYsb0JBQVQ7TUFBTUQsRzs7SUFZQUUsTTs7Ozs7Ozs7Ozs7Ozs7OztpTkFVTyxVQUFDQyxDQUFELEVBQU07QUFDWEEsT0FBQyxDQUFDQyxjQUFGO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDQUMsdURBQU8sQ0FBQ0MsTUFBUixDQUFlLE9BQWY7QUFDQUMseURBQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVo7QUFFSCxLOzs7Ozs7O3dDQWREO0FBQ0ksVUFBTUMsS0FBSyxHQUFHSixpREFBTyxDQUFDSyxHQUFSLENBQVksT0FBWixDQUFkOztBQUNBLFVBQUdELEtBQUssSUFBRSxJQUFWLEVBQWU7QUFDWEYsMkRBQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVo7QUFDSDs7QUFDREwsYUFBTyxDQUFDQyxHQUFSLENBQVlLLEtBQVo7QUFDQUUsY0FBUSxDQUFDQyxJQUFULENBQWNDLEtBQWQsQ0FBb0JDLGVBQXBCLEdBQXNDLFNBQXRDO0FBQ0g7Ozs2QkFRTztBQUNKLGFBRUksTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQSxNQUFDLElBQUQ7QUFBTSxXQUFHLEVBQUMsY0FBVjtBQUF5QixXQUFHLEVBQUMsU0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURBLEVBRUEsTUFBQyxHQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLEdBQUQ7QUFBSyxlQUFPLEVBQUU7QUFBQSxpQkFBSVAsbURBQU0sQ0FBQ0MsSUFBUCxDQUFZLGFBQVosQ0FBSjtBQUFBLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixFQUVJLE1BQUMsR0FBRDtBQUFLLGVBQU8sRUFBRTtBQUFBLGlCQUFJRCxtREFBTSxDQUFDQyxJQUFQLENBQVksY0FBWixDQUFKO0FBQUEsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKLEVBR0ksTUFBQyxHQUFEO0FBQUssZUFBTyxFQUFFLEtBQUtPLE1BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEosQ0FGQSxDQUZKO0FBV0g7Ozs7RUE3QmdCQyw0Q0FBSyxDQUFDQyxTOztBQWdDWmpCLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwb2tlZGV4cGFnZS5qcy4zNjQ4ZTUzYjdmNGNkMDQ1MmQ1MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgU3R5bGVkbmF2ID0gc3R5bGVkLmRpdmBcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIGhlaWdodDogMTAlO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbSA6IDEycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG5gO1xyXG5jb25zdCBMb2dvID0gc3R5bGVkLmltZ1xyXG5gXHJcbmJvcmRlci1yYWRpdXM6IDEwJTtcclxubWF4LXdpZHRoOiA4MCU7XHJcbm1heC1oZWlnaHQ6IDgwJTtcclxuYDtcclxuY29uc3QgTmF2ID0gc3R5bGVkLmRpdlxyXG5gICBcclxuZGlzcGxheTogZmxleDtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuZmxleC1mbG93OiByb3c7XHJcbmA7XHJcblxyXG5jb25zdCBUYWIgPSBzdHlsZWQuYVxyXG5gXHJcbnBhZGRpbmc6IDExcHg7XHJcbm1hcmdpbi1sZWZ0OiAxNXB4O1xyXG5tYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbm1hcmdpbi10b3A6IDE1cHg7XHJcbmZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBDb25zb2xlXCIsIE1vbmFjbywgbW9ub3NwYWNlO1xyXG5mb250LXNpemU6IDIzcHg7XHJcbmN1cnNvcjogcG9pbnRlcjtcclxuY29sb3I6IzVmOGY0NTtcclxuYDtcclxuXHJcbmNsYXNzIE5hdmJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIGNvbXBvbmVudERpZE1vdW50KClcclxuICAgIHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IENvb2tpZXMuZ2V0KCd0b2tlbicpXHJcbiAgICAgICAgaWYodG9rZW49PW51bGwpe1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0b2tlbilcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2RiZGJkYlwiO1xyXG4gICAgfVxyXG4gICAgbG9nT3V0ID0gKGUpID0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnbG9nb3V0Jyk7XHJcbiAgICAgICAgQ29va2llcy5yZW1vdmUoJ3Rva2VuJyk7XHJcbiAgICAgICAgUm91dGVyLnB1c2goJy8nKTtcclxuXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxTdHlsZWRuYXY+XHJcbiAgICAgICAgICAgIDxMb2dvIHNyYz1cIi9wb2tla29vLnBuZ1wiIGFsdD1cInBva2Vrb29cIi8+XHJcbiAgICAgICAgICAgIDxOYXY+XHJcbiAgICAgICAgICAgICAgICA8VGFiIG9uQ2xpY2s9eygpPT5Sb3V0ZXIucHVzaCgnL2ZvcmVzdHBhZ2UnKX0+Rm9yZXN0PC9UYWI+IFxyXG4gICAgICAgICAgICAgICAgPFRhYiBvbkNsaWNrPXsoKT0+Um91dGVyLnB1c2goJy9wb2tlZGV4cGFnZScpfT5Qb2tlZGV4PC9UYWI+XHJcbiAgICAgICAgICAgICAgICA8VGFiIG9uQ2xpY2s9e3RoaXMubG9nT3V0fT5Mb2dvdXQ8L1RhYj5cclxuICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgPC9TdHlsZWRuYXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyOyJdLCJzb3VyY2VSb290IjoiIn0=