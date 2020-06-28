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
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.post("".concat(API, "/auth/login"), datalogin, config).then(function (response) {
        js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.set('token', response.data.meta.token);
        var token = js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.get('token');
        console.log(token);
        Router.push('/forestpage');
        console.log(response.data);
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
          lineNumber: 101,
          columnNumber: 13
        }
      }, __jsx(Card, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 13
        }
      }, __jsx(Gambar, {
        src: this.state.gambarUrl,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 16
        }
      }), __jsx(Namacard, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 17
        }
      }, this.state.namaPokemon), __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 17
        }
      }, __jsx(Tombol, {
        onClick: this.posData,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvY2FyZC5qc3giXSwibmFtZXMiOlsiS29sb21jYXJkIiwic3R5bGVkIiwiZGl2IiwiQ2FyZCIsIkdhbWJhciIsImltZyIsIlRvbWJvbCIsImJ1dHRvbiIsIk5hbWFjYXJkIiwiQ2FyZFBva2UiLCJwcm9wcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGFQb3MiLCJwb2tlTmFtZSIsInN0YXRlIiwibmFtYVBva2Vtb24iLCJwb2tlSW1nIiwiZ2FtYmFyVXJsIiwiY29uZmlnIiwiaGVhZGVycyIsInRva2VuIiwiYXhpb3MiLCJwb3N0IiwiQVBJIiwiZGF0YWxvZ2luIiwidGhlbiIsInJlc3BvbnNlIiwiQ29va2llcyIsInNldCIsImRhdGEiLCJtZXRhIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsIlJvdXRlciIsInB1c2giLCJlcnJvciIsImFsZXJ0IiwicmVxdWVzdCIsInJlc3BvbnNlVGV4dCIsInVybFBvSyIsInBvc0RhdGEiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG1CQUFmO0tBQU1GLFM7QUFXTixJQUFNRyxJQUFJLEdBQUdGLHlEQUFNLENBQUNDLEdBQVYsb0JBQVY7TUFBTUMsSTtBQVFOLElBQU1DLE1BQU0sR0FBR0gseURBQU0sQ0FBQ0ksR0FBVixvQkFBWjtNQUFNRCxNO0FBT04sSUFBTUUsTUFBTSxHQUFHTCx5REFBTSxDQUFDTSxNQUFWLG9CQUFaO01BQU1ELE07QUFZTixJQUFNRSxRQUFRLEdBQUlQLHlEQUFNLENBQUNDLEdBQVgsb0JBQWQ7TUFBTU0sUTs7SUFVQUMsUTs7Ozs7QUFDRixvQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBOztBQUNkLDhCQUFNQSxLQUFOOztBQURjLGtOQWdCUixVQUFDQyxDQUFELEVBQU07QUFDWkEsT0FBQyxDQUFDQyxjQUFGO0FBQ0EsVUFBTUMsT0FBTyxHQUFFO0FBQ2JDLGdCQUFRLEVBQUUsTUFBS0MsS0FBTCxDQUFXQyxXQURSO0FBRWJDLGVBQU8sRUFBRSxNQUFLRixLQUFMLENBQVdHO0FBRlAsT0FBZjtBQUtDLFVBQUlDLE1BQU0sR0FBQztBQUNWQyxlQUFPLEVBQUM7QUFDTixvQkFBVSxrQkFESjtBQUVOLDJCQUFpQixZQUFVLE1BQUtMLEtBQUwsQ0FBV007QUFGaEM7QUFERSxPQUFYO0FBTUFDLG1EQUFLLENBQUNDLElBQU4sV0FBY0MsR0FBZCxrQkFBZ0NDLFNBQWhDLEVBQTJDTixNQUEzQyxFQUNDTyxJQURELENBQ00sVUFBQ0MsUUFBRCxFQUFjO0FBRWxCQyx5REFBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQkYsUUFBUSxDQUFDRyxJQUFULENBQWNDLElBQWQsQ0FBbUJWLEtBQXhDO0FBQ0EsWUFBTUEsS0FBSyxHQUFHTyxpREFBTyxDQUFDSSxHQUFSLENBQVksT0FBWixDQUFkO0FBRUFDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZYixLQUFaO0FBQ0FjLGNBQU0sQ0FBQ0MsSUFBUCxDQUFZLGFBQVo7QUFDQUgsZUFBTyxDQUFDQyxHQUFSLENBQVlQLFFBQVEsQ0FBQ0csSUFBckI7QUFDRCxPQVRELFdBU1MsVUFBQU8sS0FBSyxFQUFJO0FBQ2pCQyxhQUFLLENBQUNELEtBQUssQ0FBQ1YsUUFBTixDQUFlWSxPQUFmLENBQXVCQyxZQUF4QixDQUFMO0FBQ0EsT0FYRDtBQVlKLEtBekNpQjs7QUFFZCxVQUFLekIsS0FBTCxHQUFXO0FBQ1BDLGlCQUFXLEVBQUUsTUFBS04sS0FBTCxDQUFXTSxXQURqQjtBQUVQRSxlQUFTLEVBQUMsTUFBS1IsS0FBTCxDQUFXK0IsTUFGZDtBQUdQcEIsV0FBSyxFQUFDTyxpREFBTyxDQUFDSSxHQUFSLENBQVksT0FBWjtBQUhDLEtBQVg7QUFGYztBQVNqQjs7Ozt3Q0FHRCxDQUdDOzs7NkJBNEJPO0FBQ0osYUFDSSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNBLE1BQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0csTUFBQyxNQUFEO0FBQVEsV0FBRyxFQUFFLEtBQUtqQixLQUFMLENBQVdHLFNBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESCxFQUVJLE1BQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVcsS0FBS0gsS0FBTCxDQUFXQyxXQUF0QixDQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFHLE1BQUMsTUFBRDtBQUFRLGVBQU8sRUFBRSxLQUFLMEIsT0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBSCxDQUhKLENBREEsQ0FESjtBQVNIOzs7O0VBdERrQkMsNENBQUssQ0FBQ0MsUzs7QUF5RGRuQyx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZm9yZXN0cGFnZS5qcy45MDc4MGJhNjk2OTFkNWU4MGM3My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcblxyXG5cclxuY29uc3QgS29sb21jYXJkID0gc3R5bGVkLmRpdlxyXG5gXHJcbndpZHRoOiAxMDAlO1xyXG5kaXNwbGF5OiBibG9jaztcclxubWFyZ2luLWJvdHRvbTogMjBweDtcclxubWFyZ2luLWxlZnQ6NHB4O1xyXG5mbG9hdDogbGVmdDtcclxud2lkdGg6IDE1JTtcclxucGFkZGluZzogMCA0cHg7ICAgIFxyXG5gO1xyXG5cclxuY29uc3QgQ2FyZCA9IHN0eWxlZC5kaXZcclxuYFxyXG5ib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmO1xyXG5gO1xyXG5cclxuY29uc3QgR2FtYmFyID0gc3R5bGVkLmltZ1xyXG5gXHJcbndpZHRoIDogMTAwJTtcclxuaGVpZ2h0IDoxMDAlO1xyXG5cclxuYDtcclxuXHJcbmNvbnN0IFRvbWJvbCA9IHN0eWxlZC5idXR0b25cclxuYFxyXG5iYWNrZ3JvdW5kOiAjZmY4MDE5O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxMXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbmA7XHJcblxyXG5jb25zdCBOYW1hY2FyZCA9ICBzdHlsZWQuZGl2XHJcbmBcclxuZm9udC1mYW1pbHk6IFwiTHVjaWRhIENvbnNvbGVcIiwgTW9uYWNvLCBtb25vc3BhY2U7XHJcbm1hcmdpbjoxcHg7XHJcbmZvbnQtc2l6ZToxMnB4O1xyXG5gO1xyXG5cclxuXHJcblxyXG5cclxuY2xhc3MgQ2FyZFBva2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGU9e1xyXG4gICAgICAgICAgICBuYW1hUG9rZW1vbjogdGhpcy5wcm9wcy5uYW1hUG9rZW1vbixcclxuICAgICAgICAgICAgZ2FtYmFyVXJsOnRoaXMucHJvcHMudXJsUG9LLFxyXG4gICAgICAgICAgICB0b2tlbjpDb29raWVzLmdldCgndG9rZW4nKVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKVxyXG4gICAgeyBcclxuXHJcbiAgICAgICAgICBcclxuICAgIH0gXHJcbiAgICBwb3NEYXRhID0gKGUpID0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBkYXRhUG9zID17XHJcbiAgICAgICAgICBwb2tlTmFtZTogdGhpcy5zdGF0ZS5uYW1hUG9rZW1vbixcclxuICAgICAgICAgIHBva2VJbWc6IHRoaXMuc3RhdGUuZ2FtYmFyVXJsXHJcbiAgICAgICAgICBcclxuICAgICAgICAgfTtcclxuICAgICAgICAgbGV0IGNvbmZpZz17XHJcbiAgICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcrdGhpcy5zdGF0ZS50b2tlblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICB9O1xyXG4gICAgICAgICBheGlvcy5wb3N0KGAke0FQSX0vYXV0aC9sb2dpbmAsIGRhdGFsb2dpbiwgY29uZmlnKVxyXG4gICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICBDb29raWVzLnNldCgndG9rZW4nLCByZXNwb25zZS5kYXRhLm1ldGEudG9rZW4pXHJcbiAgICAgICAgICAgY29uc3QgdG9rZW4gPSBDb29raWVzLmdldCgndG9rZW4nKVxyXG5cclxuICAgICAgICAgICBjb25zb2xlLmxvZyh0b2tlbik7XHJcbiAgICAgICAgICAgUm91dGVyLnB1c2goJy9mb3Jlc3RwYWdlJyk7XHJcbiAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgIGFsZXJ0KGVycm9yLnJlc3BvbnNlLnJlcXVlc3QucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8S29sb21jYXJkPlxyXG4gICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgPEdhbWJhciBzcmM9e3RoaXMuc3RhdGUuZ2FtYmFyVXJsfS8+XHJcbiAgICAgICAgICAgICAgICA8TmFtYWNhcmQ+e3RoaXMuc3RhdGUubmFtYVBva2Vtb259PC9OYW1hY2FyZD5cclxuICAgICAgICAgICAgICAgIDxhPjxUb21ib2wgb25DbGljaz17dGhpcy5wb3NEYXRhfSA+U0FWRTwvVG9tYm9sPjwvYT5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvS29sb21jYXJkPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRQb2tlOyJdLCJzb3VyY2VSb290IjoiIn0=