webpackHotUpdate("static\\development\\pages\\registerpage.js",{

/***/ "./pages/registerpage.jsx":
/*!********************************!*\
  !*** ./pages/registerpage.jsx ***!
  \********************************/
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






var _jsxFileName = "D:\\Koomik\\fe_pokekoo\\pages\\registerpage.jsx";
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
var Registerlink = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject5());
_c5 = Registerlink;

var Registerpage = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Registerpage, _React$Component);

  var _super = _createSuper(Registerpage);

  function Registerpage(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Registerpage);

    _this = _super.call(this, props);
    _this.state = {
      name: "",
      email: "",
      password: ""
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Registerpage, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var databaru = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      };
      var config = {
        headers: {
          'Accept': 'application/json'
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_11___default.a.post("".concat(_config__WEBPACK_IMPORTED_MODULE_12__["API"], "/auth/register"), databaru, config).then(function (response) {
        next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/');
        alert('berhasil ditambahkan');
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
          lineNumber: 133,
          columnNumber: 11
        }
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 12
        }
      }, __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 17
        }
      }, "Register Page : POKEKOO"), __jsx("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 17
        }
      })), __jsx(StyledLogin, {
        onSubmit: this.handleSubmit.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }
      }, __jsx(Logo, {
        src: "/pokekoo.png",
        alt: "pokekoo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 15
        }
      }), __jsx(StyledInput, {
        type: "text",
        placeholder: "nama",
        required: true,
        value: this.state.name,
        onChange: function onChange(e) {
          return _this2.setState({
            name: e.target.value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 15
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
          lineNumber: 148,
          columnNumber: 15
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
          lineNumber: 155,
          columnNumber: 15
        }
      }), __jsx("button", {
        type: "submit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 15
        }
      }, "BUAT AKUN"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 15
        }
      }, __jsx(Registerlink, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 30
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 44
        }
      }, __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 47
        }
      }, "\u2190"), __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 67
        }
      }, " Sudah punya akun"))))));
    }
  }]);

  return Registerpage;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Registerpage);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yZWdpc3RlcnBhZ2UuanN4Il0sIm5hbWVzIjpbIldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJMb2dvIiwiaW1nIiwiU3R5bGVkTG9naW4iLCJmb3JtIiwiU3R5bGVkSW5wdXQiLCJpbnB1dCIsIlJlZ2lzdGVybGluayIsIlJlZ2lzdGVycGFnZSIsInByb3BzIiwic3RhdGUiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGFiYXJ1IiwiY29uZmlnIiwiaGVhZGVycyIsImF4aW9zIiwicG9zdCIsIkFQSSIsInRoZW4iLCJyZXNwb25zZSIsIlJvdXRlciIsInB1c2giLCJhbGVydCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZXJyb3IiLCJyZXF1ZXN0IiwicmVzcG9uc2VUZXh0IiwidG9rZW4iLCJDb29raWVzIiwiZ2V0IiwicmVtb3ZlIiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoYW5kbGVTdWJtaXQiLCJiaW5kIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSxJQUFNQSxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQWI7S0FBTUYsTztBQU1OLElBQU1HLElBQUksR0FBR0YseURBQU0sQ0FBQ0csR0FBVixvQkFBVjtNQUFNRCxJO0FBTU4sSUFBTUUsV0FBVyxHQUFHSix5REFBTSxDQUFDSyxJQUFWLG9CQUFqQjtNQUFNRCxXO0FBNkJOLElBQU1FLFdBQVcsR0FBR04seURBQU0sQ0FBQ08sS0FBVixvQkFBakI7TUFB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YWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxyZWdpc3RlcnBhZ2UuanMuNGRjMGZmOGM3ZGIyY2M4YjRlMWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJ1xyXG5cclxuXHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdlxyXG5gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuYDtcclxuY29uc3QgTG9nbyA9IHN0eWxlZC5pbWdcclxuYFxyXG5ib3JkZXItcmFkaXVzOiAxMCU7XHJcbm1heC13aWR0aDogODAlO1xyXG5tYXgtaGVpZ2h0OiA4MCU7XHJcbmA7XHJcbmNvbnN0IFN0eWxlZExvZ2luID0gc3R5bGVkLmZvcm1gXHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICB3aWR0aDogMzAlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgcGFkZGluZy1ib3R0b20gOiA5MHB4O1xyXG4gIG1hcmdpbjogMjAwcHggYXV0bztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XHJcbiAgaDIge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIGJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmY4MDE5O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxMXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuYDtcclxuXHJcblxyXG5jb25zdCBTdHlsZWRJbnB1dCA9IHN0eWxlZC5pbnB1dGBcclxuZGlzcGxheTogYmxvY2s7XHJcbndpZHRoOiA3MCU7XHJcbnBhZGRpbmc6IDE1cHg7XHJcbm1hcmdpbi10b3A6IDE1cHg7XHJcbmZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XHJcbi13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuYm9yZGVyOiAwO1xyXG5vdXRsaW5lOiAwO1xyXG50cmFuc2l0aW9uOiAwLjNzO1xyXG5cclxuJjpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oI2ZmZiwgMyUpO1xyXG59XHJcbiAgXHJcbmA7XHJcblxyXG5jb25zdCBSZWdpc3RlcmxpbmsgPSBzdHlsZWQuZGl2XHJcbmBcclxubWFyZ2luLXRvcDogMTJweDtcclxuZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuY29sb3I6ICM0ZDdkNWU7XHJcbmZvbnQtc2l6ZTo5MCU7XHJcbndpZHRoOiA4MCU7XHJcbmN1cnNvcjogcG9pbnRlcjtcclxuYWxpZ24tdGV4dDogY2VudGVyO1xyXG5gXHJcblxyXG5cclxuY2xhc3MgUmVnaXN0ZXJwYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgIG5hbWU6XCJcIixcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIlxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAgIGhhbmRsZVN1Ym1pdChlKXtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zdCBkYXRhYmFydSA9e1xyXG4gICAgICAgIG5hbWU6IHRoaXMuc3RhdGUubmFtZSxcclxuICAgICAgICBlbWFpbDogdGhpcy5zdGF0ZS5lbWFpbCxcclxuICAgICAgICBwYXNzd29yZDogdGhpcy5zdGF0ZS5wYXNzd29yZFxyXG4gICAgICAgIFxyXG4gICAgICAgfTtcclxuICAgICAgIGxldCBjb25maWc9e1xyXG4gICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH1cclxuICAgICAgIH07XHJcbiAgICAgICBheGlvcy5wb3N0KGAke0FQSX0vYXV0aC9yZWdpc3RlcmAsIGRhdGFiYXJ1LCBjb25maWcpXHJcbiAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgUm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgICAgYWxlcnQoJ2Jlcmhhc2lsIGRpdGFtYmFoa2FuJyk7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgIGFsZXJ0KGVycm9yLnJlc3BvbnNlLnJlcXVlc3QucmVzcG9uc2VUZXh0KTtcclxuICAgICAgIH0pO1xyXG4gICAgICAgXHJcbiAgIH1cclxuICAgICAgICAgICBcclxuICBcclxuICAgICAgXHJcblxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KClcclxuICAgIHtcclxuICAgICAgY29uc3QgdG9rZW4gPSBDb29raWVzLmdldCgndG9rZW4nKVxyXG4gICAgICBpZih0b2tlbiE9PW51bGwpe1xyXG4gICAgICAgIENvb2tpZXMucmVtb3ZlKCd0b2tlbicpO1xyXG4gICAgfVxyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2RiZGJkYlwiO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgPFdyYXBwZXI+IFxyXG4gICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPlJlZ2lzdGVyIFBhZ2UgOiBQT0tFS09PPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgPFN0eWxlZExvZ2luIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfT5cclxuICAgICAgICAgICAgICA8TG9nbyBzcmM9XCIvcG9rZWtvby5wbmdcIiBhbHQ9XCJwb2tla29vXCIvPlxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPFN0eWxlZElucHV0IFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJuYW1hXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPlxyXG5cclxuICAgICAgICAgICAgICA8U3R5bGVkSW5wdXQgXHJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCIgXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbWFpbFwiIFxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9KX0vPlxyXG5cclxuICAgICAgICAgICAgICA8U3R5bGVkSW5wdXQgXHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IHBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZSB9KX0vPlxyXG5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5CVUFUIEFLVU48L2J1dHRvbj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48UmVnaXN0ZXJsaW5rPjxhPjxzcGFuPiYjODU5Mjs8L3NwYW4+PGI+IFN1ZGFoIHB1bnlhIGFrdW48L2I+PC9hPjwvUmVnaXN0ZXJsaW5rPjwvTGluaz5cclxuICAgICAgICAgIDwvU3R5bGVkTG9naW4+XHJcbiAgICAgICAgICBcclxuICAgICA8L1dyYXBwZXI+XHJcbiAgICAgICAgICBcclxuICAgICAgICApO1xyXG4gICAgfX1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVycGFnZTsiXSwic291cmNlUm9vdCI6IiJ9