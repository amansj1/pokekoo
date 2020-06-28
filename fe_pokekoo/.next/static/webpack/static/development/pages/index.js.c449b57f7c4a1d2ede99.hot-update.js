webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/loginpage.jsx":
/*!*****************************!*\
  !*** ./pages/loginpage.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../config */ "./config.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_13__);






var _jsxFileName = "D:\\Koomik\\fe_pokekoo\\pages\\loginpage.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\nmargin-top: 12px;\nfont-family: monospace;\ncolor: #4d7d5e;\nfont-size:90%;\nwidth: 80%;\ncursor: pointer;\nalign-text: center;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\ndisplay: block;\nwidth: 70%;\npadding: 15px;\nmargin-top: 15px;\nfont-family: $font-family;\n-webkit-appearance: none;\nborder: 0;\noutline: 0;\ntransition: 0.3s;\n\n&:focus {\n    background: darken(#fff, 3%);\n}\n  \n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n\n  display: flex;\n  align-items: center;\n  flex-flow: column;\n  width: 30%;\n  padding: 20px;\n  padding-bottom : 90px;\n  margin: 200px auto;\n  border: 1px solid #fffff;\n  border-radius: 9px;\n  background: #f7f7f7;\n  h2 {\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 14px;\n  }\n  button {\n    background: #ff8019;\n    color: #fff;\n    padding: 11px;\n    margin-top: 15px;\n    width: 80%;\n    border: none;\n    border-radius: 4px;\n    box-sizing: border-box;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\nborder-radius: 10%;\nmax-width: 80%;\nmax-height: 80%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["   display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject());
_c = Wrapper;
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].img(_templateObject2());
_c2 = Logo;
var StyledLogin = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].form(_templateObject3());
_c3 = StyledLogin;
var StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].input(_templateObject4());
_c4 = StyledInput;
var Registerlink = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].a(_templateObject5());
_c5 = Registerlink;

var Loginpage = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Loginpage, _React$Component);

  var _super = _createSuper(Loginpage);

  function Loginpage(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Loginpage);

    _this = _super.call(this, props);
    _this.state = {
      email: '',
      password: ''
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Loginpage, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var datalogin = {
        email: this.state.email,
        password: this.state.password
      };
      var config = {
        headers: {
          'Accept': 'application/json'
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_11___default.a.post("".concat(_config__WEBPACK_IMPORTED_MODULE_12__["API"], "/auth/login"), datalogin, config).then(function (response) {
        js_cookie__WEBPACK_IMPORTED_MODULE_13___default.a.set('token', response.data.meta.token);
        var token = js_cookie__WEBPACK_IMPORTED_MODULE_13___default.a.get('token');
        console.log(token);
        next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/forestpage');
        console.log(response.data);
      })["catch"](function (error) {
        alert(error.response.request.responseText);
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var token = js_cookie__WEBPACK_IMPORTED_MODULE_13___default.a.get('token');

      if (token !== null) {
        js_cookie__WEBPACK_IMPORTED_MODULE_13___default.a.remove('token');
      }

      document.body.style.backgroundColor = "#dbdbdb";
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(Wrapper, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 13
        }
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 15
        }
      }, __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 17
        }
      }, "Login Page : POKEKOO"), __jsx("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 17
        }
      })), __jsx(StyledLogin, {
        onSubmit: this.handleSubmit.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 17
        }
      }, __jsx(Logo, {
        src: "/pokekoo.png",
        alt: "pokekoo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 21
        }
      }), __jsx(StyledInput, {
        type: "email",
        placeholder: "email",
        required: true,
        value: this.state.email,
        onChange: function onChange(e) {
          return _this2.setState({
            email: e.target.value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 21
        }
      }), __jsx(StyledInput, {
        type: "password",
        placeholder: "password",
        required: true,
        value: this.state.password,
        onChange: function onChange(e) {
          return _this2.setState({
            password: e.target.value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 21
        }
      }), __jsx("button", {
        type: "submit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 21
        }
      }, "LOGIN"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/registerpage",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 21
        }
      }, __jsx(Registerlink, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 48
        }
      }, "Belum punya akun? ", __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 80
        }
      }, " Buat Akun Sekarang ", __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 103
        }
      }, "\u2192"))))));
    }
  }]);

  return Loginpage;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Loginpage);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Wrapper");
$RefreshReg$(_c2, "Logo");
$RefreshReg$(_c3, "StyledLogin");
$RefreshReg$(_c4, "StyledInput");
$RefreshReg$(_c5, "Registerlink");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbnBhZ2UuanN4Il0sIm5hbWVzIjpbIldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJMb2dvIiwiaW1nIiwiU3R5bGVkTG9naW4iLCJmb3JtIiwiU3R5bGVkSW5wdXQiLCJpbnB1dCIsIlJlZ2lzdGVybGluayIsImEiLCJMb2dpbnBhZ2UiLCJwcm9wcyIsInN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGFsb2dpbiIsImNvbmZpZyIsImhlYWRlcnMiLCJheGlvcyIsInBvc3QiLCJBUEkiLCJ0aGVuIiwicmVzcG9uc2UiLCJDb29raWVzIiwic2V0IiwiZGF0YSIsIm1ldGEiLCJ0b2tlbiIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJSb3V0ZXIiLCJwdXNoIiwiZXJyb3IiLCJhbGVydCIsInJlcXVlc3QiLCJyZXNwb25zZVRleHQiLCJyZW1vdmUiLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImhhbmRsZVN1Ym1pdCIsImJpbmQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0EsSUFBTUEsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG1CQUFiO0tBQU1GLE87QUFNTixJQUFNRyxJQUFJLEdBQUdGLHlEQUFNLENBQUNHLEdBQVYsb0JBQVY7TUFBTUQsSTtBQU1OLElBQU1FLFdBQVcsR0FBR0oseURBQU0sQ0FBQ0ssSUFBVixvQkFBakI7TUFBTUQsVztBQTZCTixJQUFNRSxXQUFXLEdBQUdOLHlEQUFNLENBQUNPLEtBQVYsb0JBQWpCO01BQU1ELFc7QUFpQk4sSUFBTUUsWUFBWSxHQUFHUix5REFBTSxDQUFDUyxDQUFWLG9CQUFsQjtNQUFNRCxZOztJQVlBRSxTOzs7OztBQUNGLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsV0FBSyxFQUFFLEVBREk7QUFFWEMsY0FBUSxFQUFFO0FBRkMsS0FBYjtBQUZlO0FBTWhCOzs7O2lDQUVZQyxDLEVBQUU7QUFDYkEsT0FBQyxDQUFDQyxjQUFGO0FBQ0EsVUFBTUMsU0FBUyxHQUFFO0FBQ2ZKLGFBQUssRUFBRSxLQUFLRCxLQUFMLENBQVdDLEtBREg7QUFFZkMsZ0JBQVEsRUFBRSxLQUFLRixLQUFMLENBQVdFO0FBRk4sT0FBakI7QUFLQyxVQUFJSSxNQUFNLEdBQUM7QUFDVkMsZUFBTyxFQUFDO0FBQ04sb0JBQVU7QUFESjtBQURFLE9BQVg7QUFLQUMsbURBQUssQ0FBQ0MsSUFBTixXQUFjQyw0Q0FBZCxrQkFBZ0NMLFNBQWhDLEVBQTJDQyxNQUEzQyxFQUNDSyxJQURELENBQ00sVUFBQ0MsUUFBRCxFQUFjO0FBRWxCQyx5REFBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQkYsUUFBUSxDQUFDRyxJQUFULENBQWNDLElBQWQsQ0FBbUJDLEtBQXhDO0FBQ0EsWUFBTUEsS0FBSyxHQUFHSixpREFBTyxDQUFDSyxHQUFSLENBQVksT0FBWixDQUFkO0FBRUFDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaO0FBQ0FJLDJEQUFNLENBQUNDLElBQVAsQ0FBWSxhQUFaO0FBQ0FILGVBQU8sQ0FBQ0MsR0FBUixDQUFZUixRQUFRLENBQUNHLElBQXJCO0FBQ0QsT0FURCxXQVNTLFVBQUFRLEtBQUssRUFBSTtBQUNqQkMsYUFBSyxDQUFDRCxLQUFLLENBQUNYLFFBQU4sQ0FBZWEsT0FBZixDQUF1QkMsWUFBeEIsQ0FBTDtBQUNBLE9BWEQ7QUFhSDs7O3dDQUdGO0FBQ0UsVUFBTVQsS0FBSyxHQUFHSixpREFBTyxDQUFDSyxHQUFSLENBQVksT0FBWixDQUFkOztBQUNBLFVBQUdELEtBQUssS0FBRyxJQUFYLEVBQWdCO0FBQ2RKLHlEQUFPLENBQUNjLE1BQVIsQ0FBZSxPQUFmO0FBQ0g7O0FBRUdDLGNBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxLQUFkLENBQW9CQyxlQUFwQixHQUFzQyxTQUF0QztBQUVIOzs7NkJBQ087QUFBQTs7QUFDSixhQUNJLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FERixFQUVFO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBc0IsZUFBTyxFQUFDLHVDQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkYsQ0FERixFQUtJLE1BQUMsV0FBRDtBQUFhLGdCQUFRLEVBQUUsS0FBS0MsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsSUFBRDtBQUFNLFdBQUcsRUFBQyxjQUFWO0FBQXlCLFdBQUcsRUFBQyxTQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosRUFFSSxNQUFDLFdBQUQ7QUFDQSxZQUFJLEVBQUMsT0FETDtBQUVBLG1CQUFXLEVBQUMsT0FGWjtBQUdBLGdCQUFRLE1BSFI7QUFJQSxhQUFLLEVBQUUsS0FBS2pDLEtBQUwsQ0FBV0MsS0FKbEI7QUFLQSxnQkFBUSxFQUFFLGtCQUFBRSxDQUFDO0FBQUEsaUJBQUksTUFBSSxDQUFDK0IsUUFBTCxDQUFjO0FBQUVqQyxpQkFBSyxFQUFFRSxDQUFDLENBQUNnQyxNQUFGLENBQVNDO0FBQWxCLFdBQWQsQ0FBSjtBQUFBLFNBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZKLEVBU0ksTUFBQyxXQUFEO0FBQ0EsWUFBSSxFQUFDLFVBREw7QUFFQSxtQkFBVyxFQUFDLFVBRlo7QUFHQSxnQkFBUSxNQUhSO0FBSUEsYUFBSyxFQUFFLEtBQUtwQyxLQUFMLENBQVdFLFFBSmxCO0FBS0EsZ0JBQVEsRUFBRSxrQkFBQUMsQ0FBQztBQUFBLGlCQUFJLE1BQUksQ0FBQytCLFFBQUwsQ0FBYztBQUFFaEMsb0JBQVEsRUFBRUMsQ0FBQyxDQUFDZ0MsTUFBRixDQUFTQztBQUFyQixXQUFkLENBQUo7QUFBQSxTQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFUSixFQWVJO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFmSixFQWdCSSxNQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLGVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUEyQixNQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFBZ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FBdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBdkIsQ0FBaEMsQ0FBM0IsQ0FoQkosQ0FMSixDQURKO0FBMEJIOzs7O0VBekVtQkMsNENBQUssQ0FBQ0MsUzs7QUE4RWZ4Qyx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYzQ0OWI1N2Y3YzRhMWQyZWRlOTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi4vY29uZmlnJztcclxuXHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSdcclxuXHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdlxyXG5gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuYDtcclxuY29uc3QgTG9nbyA9IHN0eWxlZC5pbWdcclxuYFxyXG5ib3JkZXItcmFkaXVzOiAxMCU7XHJcbm1heC13aWR0aDogODAlO1xyXG5tYXgtaGVpZ2h0OiA4MCU7XHJcbmA7XHJcbmNvbnN0IFN0eWxlZExvZ2luID0gc3R5bGVkLmZvcm1gXHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICB3aWR0aDogMzAlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgcGFkZGluZy1ib3R0b20gOiA5MHB4O1xyXG4gIG1hcmdpbjogMjAwcHggYXV0bztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XHJcbiAgaDIge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIGJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmY4MDE5O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxMXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuYDtcclxuXHJcblxyXG5jb25zdCBTdHlsZWRJbnB1dCA9IHN0eWxlZC5pbnB1dGBcclxuZGlzcGxheTogYmxvY2s7XHJcbndpZHRoOiA3MCU7XHJcbnBhZGRpbmc6IDE1cHg7XHJcbm1hcmdpbi10b3A6IDE1cHg7XHJcbmZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XHJcbi13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuYm9yZGVyOiAwO1xyXG5vdXRsaW5lOiAwO1xyXG50cmFuc2l0aW9uOiAwLjNzO1xyXG5cclxuJjpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oI2ZmZiwgMyUpO1xyXG59XHJcbiAgXHJcbmA7XHJcblxyXG5jb25zdCBSZWdpc3RlcmxpbmsgPSBzdHlsZWQuYVxyXG5gXHJcbm1hcmdpbi10b3A6IDEycHg7XHJcbmZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbmNvbG9yOiAjNGQ3ZDVlO1xyXG5mb250LXNpemU6OTAlO1xyXG53aWR0aDogODAlO1xyXG5jdXJzb3I6IHBvaW50ZXI7XHJcbmFsaWduLXRleHQ6IGNlbnRlcjtcclxuYFxyXG5cclxuXHJcbmNsYXNzIExvZ2lucGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgICBwYXNzd29yZDogJydcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBoYW5kbGVTdWJtaXQoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGRhdGFsb2dpbiA9e1xyXG4gICAgICAgICAgZW1haWw6IHRoaXMuc3RhdGUuZW1haWwsXHJcbiAgICAgICAgICBwYXNzd29yZDogdGhpcy5zdGF0ZS5wYXNzd29yZFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgIH07XHJcbiAgICAgICAgIGxldCBjb25maWc9e1xyXG4gICAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgIH1cclxuICAgICAgICAgfTtcclxuICAgICAgICAgYXhpb3MucG9zdChgJHtBUEl9L2F1dGgvbG9naW5gLCBkYXRhbG9naW4sIGNvbmZpZylcclxuICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgQ29va2llcy5zZXQoJ3Rva2VuJywgcmVzcG9uc2UuZGF0YS5tZXRhLnRva2VuKVxyXG4gICAgICAgICAgIGNvbnN0IHRva2VuID0gQ29va2llcy5nZXQoJ3Rva2VuJylcclxuXHJcbiAgICAgICAgICAgY29uc29sZS5sb2codG9rZW4pO1xyXG4gICAgICAgICAgIFJvdXRlci5wdXNoKCcvZm9yZXN0cGFnZScpO1xyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICBhbGVydChlcnJvci5yZXNwb25zZS5yZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICAgICBcclxuICAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKVxyXG4gICAge1xyXG4gICAgICBjb25zdCB0b2tlbiA9IENvb2tpZXMuZ2V0KCd0b2tlbicpXHJcbiAgICAgIGlmKHRva2VuIT09bnVsbCl7XHJcbiAgICAgICAgQ29va2llcy5yZW1vdmUoJ3Rva2VuJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2RiZGJkYlwiO1xyXG5cclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+TG9naW4gUGFnZSA6IFBPS0VLT088L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgICAgIDxTdHlsZWRMb2dpbiBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvZ28gc3JjPVwiL3Bva2Vrb28ucG5nXCIgYWx0PVwicG9rZWtvb1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkSW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbWFpbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9KX0vPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkSW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IHBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZSB9KX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkxPR0lOPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZWdpc3RlcnBhZ2VcIj48UmVnaXN0ZXJsaW5rPkJlbHVtIHB1bnlhIGFrdW4/IDxiPiBCdWF0IEFrdW4gU2VrYXJhbmcgPHNwYW4+JiM4NTk0Ozwvc3Bhbj48L2I+PC9SZWdpc3Rlcmxpbms+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9TdHlsZWRMb2dpbj5cclxuICAgICAgICAgICA8L1dyYXBwZXI+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbnBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==