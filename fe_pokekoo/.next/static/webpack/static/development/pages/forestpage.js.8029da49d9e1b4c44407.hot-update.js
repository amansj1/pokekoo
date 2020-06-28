webpackHotUpdate("static\\development\\pages\\forestpage.js",{

/***/ "./component/card.jsx":
/*!****************************!*\
  !*** ./component/card.jsx ***!
  \****************************/
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../config */ "./config.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_12__);








var _jsxFileName = "D:\\Koomik\\fe_pokekoo\\component\\card.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\nfont-family: \"Lucida Console\", Monaco, monospace;\nmargin:1px;\nfont-size:12px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\nbackground: #ff8019;\n    color: #fff;\n    padding: 11px;\n    cursor: pointer;\n    width: 40%;\n    border: none;\n    border-radius: 4px;\n    box-sizing: border-box;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\nwidth : 100%;\nheight :100%;\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\nbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  padding: 12px;\n  text-align: center;\n  background-color: #fffff;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\nwidth: 100%;\ndisplay: block;\nmargin-bottom: 20px;\nmargin-left:4px;\nfloat: left;\nwidth: 15%;\npadding: 0 4px;    \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var Kolomcard = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject());
_c = Kolomcard;
var Card = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject2());
_c2 = Card;
var Gambar = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].img(_templateObject3());
_c3 = Gambar;
var Tombol = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].button(_templateObject4());
_c4 = Tombol;
var Namacard = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject5());
_c5 = Namacard;

var CardPoke = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(CardPoke, _React$Component);

  var _super = _createSuper(CardPoke);

  function CardPoke(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CardPoke);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "posData", function (e) {
      e.preventDefault();
      var dataPos = {
        pokeName: _this.state.namaPokemon,
        pokeImg: _this.state.gambarUrl
      };
      var config = {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + _this.state.token
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.post("".concat(_config__WEBPACK_IMPORTED_MODULE_12__["API"], "/pokedex/add"), dataPos, config).then(function (response) {//    console.log(response.data);
      })["catch"](function (error) {
        alert(error.response.request.responseText);
      });
    });

    _this.state = {
      namaPokemon: _this.props.namaPokemon,
      gambarUrl: _this.props.urlPoK,
      token: js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.get('token')
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CardPoke, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      return __jsx(Kolomcard, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 13
        }
      }, __jsx(Card, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 13
        }
      }, __jsx(Gambar, {
        src: this.state.gambarUrl,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 16
        }
      }), __jsx(Namacard, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 17
        }
      }, this.state.namaPokemon), __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 17
        }
      }, __jsx(Tombol, {
        onClick: this.posData,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 20
        }
      }, "SAVE"))));
    }
  }]);

  return CardPoke;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CardPoke);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Kolomcard");
$RefreshReg$(_c2, "Card");
$RefreshReg$(_c3, "Gambar");
$RefreshReg$(_c4, "Tombol");
$RefreshReg$(_c5, "Namacard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvY2FyZC5qc3giXSwibmFtZXMiOlsiS29sb21jYXJkIiwic3R5bGVkIiwiZGl2IiwiQ2FyZCIsIkdhbWJhciIsImltZyIsIlRvbWJvbCIsImJ1dHRvbiIsIk5hbWFjYXJkIiwiQ2FyZFBva2UiLCJwcm9wcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGFQb3MiLCJwb2tlTmFtZSIsInN0YXRlIiwibmFtYVBva2Vtb24iLCJwb2tlSW1nIiwiZ2FtYmFyVXJsIiwiY29uZmlnIiwiaGVhZGVycyIsInRva2VuIiwiYXhpb3MiLCJwb3N0IiwiQVBJIiwidGhlbiIsInJlc3BvbnNlIiwiZXJyb3IiLCJhbGVydCIsInJlcXVlc3QiLCJyZXNwb25zZVRleHQiLCJ1cmxQb0siLCJDb29raWVzIiwiZ2V0IiwicG9zRGF0YSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG1CQUFmO0tBQU1GLFM7QUFXTixJQUFNRyxJQUFJLEdBQUdGLHlEQUFNLENBQUNDLEdBQVYsb0JBQVY7TUFBTUMsSTtBQVFOLElBQU1DLE1BQU0sR0FBR0gseURBQU0sQ0FBQ0ksR0FBVixvQkFBWjtNQUFNRCxNO0FBT04sSUFBTUUsTUFBTSxHQUFHTCx5REFBTSxDQUFDTSxNQUFWLG9CQUFaO01BQU1ELE07QUFZTixJQUFNRSxRQUFRLEdBQUlQLHlEQUFNLENBQUNDLEdBQVgsb0JBQWQ7TUFBTU0sUTs7SUFVQUMsUTs7Ozs7QUFDRixvQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBOztBQUNkLDhCQUFNQSxLQUFOOztBQURjLGtOQWdCUixVQUFDQyxDQUFELEVBQU07QUFDWkEsT0FBQyxDQUFDQyxjQUFGO0FBQ0EsVUFBTUMsT0FBTyxHQUFFO0FBQ2JDLGdCQUFRLEVBQUUsTUFBS0MsS0FBTCxDQUFXQyxXQURSO0FBRWJDLGVBQU8sRUFBRSxNQUFLRixLQUFMLENBQVdHO0FBRlAsT0FBZjtBQUtDLFVBQUlDLE1BQU0sR0FBQztBQUNWQyxlQUFPLEVBQUM7QUFDTixvQkFBVSxrQkFESjtBQUVOLDJCQUFpQixZQUFVLE1BQUtMLEtBQUwsQ0FBV007QUFGaEM7QUFERSxPQUFYO0FBTUFDLG1EQUFLLENBQUNDLElBQU4sV0FBY0MsNENBQWQsbUJBQWlDWCxPQUFqQyxFQUEwQ00sTUFBMUMsRUFDQ00sSUFERCxDQUNNLFVBQUNDLFFBQUQsRUFBYyxDQUNyQjtBQUNFLE9BSEQsV0FHUyxVQUFBQyxLQUFLLEVBQUk7QUFDakJDLGFBQUssQ0FBQ0QsS0FBSyxDQUFDRCxRQUFOLENBQWVHLE9BQWYsQ0FBdUJDLFlBQXhCLENBQUw7QUFDQSxPQUxEO0FBTUosS0FuQ2lCOztBQUVkLFVBQUtmLEtBQUwsR0FBVztBQUNQQyxpQkFBVyxFQUFFLE1BQUtOLEtBQUwsQ0FBV00sV0FEakI7QUFFUEUsZUFBUyxFQUFDLE1BQUtSLEtBQUwsQ0FBV3FCLE1BRmQ7QUFHUFYsV0FBSyxFQUFDVyxpREFBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUhDLEtBQVg7QUFGYztBQVNqQjs7Ozt3Q0FHRCxDQUdDOzs7NkJBc0JPO0FBQ0osYUFDSSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNBLE1BQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0csTUFBQyxNQUFEO0FBQVEsV0FBRyxFQUFFLEtBQUtsQixLQUFMLENBQVdHLFNBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESCxFQUVJLE1BQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVcsS0FBS0gsS0FBTCxDQUFXQyxXQUF0QixDQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFHLE1BQUMsTUFBRDtBQUFRLGVBQU8sRUFBRSxLQUFLa0IsT0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBSCxDQUhKLENBREEsQ0FESjtBQVNIOzs7O0VBaERrQkMsNENBQUssQ0FBQ0MsUzs7QUFtRGQzQix1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZm9yZXN0cGFnZS5qcy44MDI5ZGE0OWQ5ZTFiNGM0NDQwNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCB7IEFQSSB9IGZyb20gJy4uL2NvbmZpZyc7XHJcblxyXG5cclxuY29uc3QgS29sb21jYXJkID0gc3R5bGVkLmRpdlxyXG5gXHJcbndpZHRoOiAxMDAlO1xyXG5kaXNwbGF5OiBibG9jaztcclxubWFyZ2luLWJvdHRvbTogMjBweDtcclxubWFyZ2luLWxlZnQ6NHB4O1xyXG5mbG9hdDogbGVmdDtcclxud2lkdGg6IDE1JTtcclxucGFkZGluZzogMCA0cHg7ICAgIFxyXG5gO1xyXG5cclxuY29uc3QgQ2FyZCA9IHN0eWxlZC5kaXZcclxuYFxyXG5ib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmO1xyXG5gO1xyXG5cclxuY29uc3QgR2FtYmFyID0gc3R5bGVkLmltZ1xyXG5gXHJcbndpZHRoIDogMTAwJTtcclxuaGVpZ2h0IDoxMDAlO1xyXG5cclxuYDtcclxuXHJcbmNvbnN0IFRvbWJvbCA9IHN0eWxlZC5idXR0b25cclxuYFxyXG5iYWNrZ3JvdW5kOiAjZmY4MDE5O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxMXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbmA7XHJcblxyXG5jb25zdCBOYW1hY2FyZCA9ICBzdHlsZWQuZGl2XHJcbmBcclxuZm9udC1mYW1pbHk6IFwiTHVjaWRhIENvbnNvbGVcIiwgTW9uYWNvLCBtb25vc3BhY2U7XHJcbm1hcmdpbjoxcHg7XHJcbmZvbnQtc2l6ZToxMnB4O1xyXG5gO1xyXG5cclxuXHJcblxyXG5cclxuY2xhc3MgQ2FyZFBva2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGU9e1xyXG4gICAgICAgICAgICBuYW1hUG9rZW1vbjogdGhpcy5wcm9wcy5uYW1hUG9rZW1vbixcclxuICAgICAgICAgICAgZ2FtYmFyVXJsOnRoaXMucHJvcHMudXJsUG9LLFxyXG4gICAgICAgICAgICB0b2tlbjpDb29raWVzLmdldCgndG9rZW4nKVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKVxyXG4gICAgeyBcclxuXHJcbiAgICAgICAgICBcclxuICAgIH0gXHJcbiAgICBwb3NEYXRhID0gKGUpID0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBkYXRhUG9zID17XHJcbiAgICAgICAgICBwb2tlTmFtZTogdGhpcy5zdGF0ZS5uYW1hUG9rZW1vbixcclxuICAgICAgICAgIHBva2VJbWc6IHRoaXMuc3RhdGUuZ2FtYmFyVXJsXHJcbiAgICAgICAgICBcclxuICAgICAgICAgfTtcclxuICAgICAgICAgbGV0IGNvbmZpZz17XHJcbiAgICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcrdGhpcy5zdGF0ZS50b2tlblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICB9O1xyXG4gICAgICAgICBheGlvcy5wb3N0KGAke0FQSX0vcG9rZWRleC9hZGRgLCBkYXRhUG9zLCBjb25maWcpXHJcbiAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIC8vICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICBhbGVydChlcnJvci5yZXNwb25zZS5yZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPEtvbG9tY2FyZD5cclxuICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgIDxHYW1iYXIgc3JjPXt0aGlzLnN0YXRlLmdhbWJhclVybH0vPlxyXG4gICAgICAgICAgICAgICAgPE5hbWFjYXJkPnt0aGlzLnN0YXRlLm5hbWFQb2tlbW9ufTwvTmFtYWNhcmQ+XHJcbiAgICAgICAgICAgICAgICA8YT48VG9tYm9sIG9uQ2xpY2s9e3RoaXMucG9zRGF0YX0gPlNBVkU8L1RvbWJvbD48L2E+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0tvbG9tY2FyZD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkUG9rZTsiXSwic291cmNlUm9vdCI6IiJ9