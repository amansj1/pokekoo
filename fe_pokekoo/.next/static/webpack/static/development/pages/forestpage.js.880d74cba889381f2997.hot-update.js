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
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.post("".concat(_config__WEBPACK_IMPORTED_MODULE_12__["API"], "/pokedex/add"), dataPos, config).then(function (response) {
        alert(response.data + ' berhasil ditambahkan'); //    console.log(response.data);
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
          lineNumber: 97,
          columnNumber: 13
        }
      }, __jsx(Card, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 13
        }
      }, __jsx(Gambar, {
        src: this.state.gambarUrl,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 16
        }
      }), __jsx(Namacard, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 17
        }
      }, this.state.namaPokemon), __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 17
        }
      }, __jsx(Tombol, {
        onClick: this.posData,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvY2FyZC5qc3giXSwibmFtZXMiOlsiS29sb21jYXJkIiwic3R5bGVkIiwiZGl2IiwiQ2FyZCIsIkdhbWJhciIsImltZyIsIlRvbWJvbCIsImJ1dHRvbiIsIk5hbWFjYXJkIiwiQ2FyZFBva2UiLCJwcm9wcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGFQb3MiLCJwb2tlTmFtZSIsInN0YXRlIiwibmFtYVBva2Vtb24iLCJwb2tlSW1nIiwiZ2FtYmFyVXJsIiwiY29uZmlnIiwiaGVhZGVycyIsInRva2VuIiwiYXhpb3MiLCJwb3N0IiwiQVBJIiwidGhlbiIsInJlc3BvbnNlIiwiYWxlcnQiLCJkYXRhIiwiZXJyb3IiLCJyZXF1ZXN0IiwicmVzcG9uc2VUZXh0IiwidXJsUG9LIiwiQ29va2llcyIsImdldCIsInBvc0RhdGEiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBZjtLQUFNRixTO0FBV04sSUFBTUcsSUFBSSxHQUFHRix5REFBTSxDQUFDQyxHQUFWLG9CQUFWO01BQU1DLEk7QUFRTixJQUFNQyxNQUFNLEdBQUdILHlEQUFNLENBQUNJLEdBQVYsb0JBQVo7TUFBTUQsTTtBQU9OLElBQU1FLE1BQU0sR0FBR0wseURBQU0sQ0FBQ00sTUFBVixvQkFBWjtNQUFNRCxNO0FBWU4sSUFBTUUsUUFBUSxHQUFJUCx5REFBTSxDQUFDQyxHQUFYLG9CQUFkO01BQU1NLFE7O0lBVUFDLFE7Ozs7O0FBQ0Ysb0JBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQTs7QUFDZCw4QkFBTUEsS0FBTjs7QUFEYyxrTkFnQlIsVUFBQ0MsQ0FBRCxFQUFNO0FBQ1pBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBLFVBQU1DLE9BQU8sR0FBRTtBQUNiQyxnQkFBUSxFQUFFLE1BQUtDLEtBQUwsQ0FBV0MsV0FEUjtBQUViQyxlQUFPLEVBQUUsTUFBS0YsS0FBTCxDQUFXRztBQUZQLE9BQWY7QUFLQyxVQUFJQyxNQUFNLEdBQUM7QUFDVkMsZUFBTyxFQUFDO0FBQ04sb0JBQVUsa0JBREo7QUFFTiwyQkFBaUIsWUFBVSxNQUFLTCxLQUFMLENBQVdNO0FBRmhDO0FBREUsT0FBWDtBQU1BQyxtREFBSyxDQUFDQyxJQUFOLFdBQWNDLDRDQUFkLG1CQUFpQ1gsT0FBakMsRUFBMENNLE1BQTFDLEVBQ0NNLElBREQsQ0FDTSxVQUFDQyxRQUFELEVBQWM7QUFDcEJDLGFBQUssQ0FBQ0QsUUFBUSxDQUFDRSxJQUFULEdBQWMsdUJBQWYsQ0FBTCxDQURvQixDQUVyQjtBQUNFLE9BSkQsV0FJUyxVQUFBQyxLQUFLLEVBQUk7QUFDakJGLGFBQUssQ0FBQ0UsS0FBSyxDQUFDSCxRQUFOLENBQWVJLE9BQWYsQ0FBdUJDLFlBQXhCLENBQUw7QUFDQSxPQU5EO0FBT0osS0FwQ2lCOztBQUVkLFVBQUtoQixLQUFMLEdBQVc7QUFDUEMsaUJBQVcsRUFBRSxNQUFLTixLQUFMLENBQVdNLFdBRGpCO0FBRVBFLGVBQVMsRUFBQyxNQUFLUixLQUFMLENBQVdzQixNQUZkO0FBR1BYLFdBQUssRUFBQ1ksaURBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFIQyxLQUFYO0FBRmM7QUFTakI7Ozs7d0NBR0QsQ0FHQzs7OzZCQXVCTztBQUNKLGFBQ0ksTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQSxNQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHLE1BQUMsTUFBRDtBQUFRLFdBQUcsRUFBRSxLQUFLbkIsS0FBTCxDQUFXRyxTQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREgsRUFFSSxNQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFXLEtBQUtILEtBQUwsQ0FBV0MsV0FBdEIsQ0FGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBRyxNQUFDLE1BQUQ7QUFBUSxlQUFPLEVBQUUsS0FBS21CLE9BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQUgsQ0FISixDQURBLENBREo7QUFTSDs7OztFQWpEa0JDLDRDQUFLLENBQUNDLFM7O0FBb0RkNUIsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGZvcmVzdHBhZ2UuanMuODgwZDc0Y2JhODg5MzgxZjI5OTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgeyBBUEkgfSBmcm9tICcuLi9jb25maWcnO1xyXG5cclxuXHJcbmNvbnN0IEtvbG9tY2FyZCA9IHN0eWxlZC5kaXZcclxuYFxyXG53aWR0aDogMTAwJTtcclxuZGlzcGxheTogYmxvY2s7XHJcbm1hcmdpbi1ib3R0b206IDIwcHg7XHJcbm1hcmdpbi1sZWZ0OjRweDtcclxuZmxvYXQ6IGxlZnQ7XHJcbndpZHRoOiAxNSU7XHJcbnBhZGRpbmc6IDAgNHB4OyAgICBcclxuYDtcclxuXHJcbmNvbnN0IENhcmQgPSBzdHlsZWQuZGl2XHJcbmBcclxuYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZjtcclxuYDtcclxuXHJcbmNvbnN0IEdhbWJhciA9IHN0eWxlZC5pbWdcclxuYFxyXG53aWR0aCA6IDEwMCU7XHJcbmhlaWdodCA6MTAwJTtcclxuXHJcbmA7XHJcblxyXG5jb25zdCBUb21ib2wgPSBzdHlsZWQuYnV0dG9uXHJcbmBcclxuYmFja2dyb3VuZDogI2ZmODAxOTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTFweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5gO1xyXG5cclxuY29uc3QgTmFtYWNhcmQgPSAgc3R5bGVkLmRpdlxyXG5gXHJcbmZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBDb25zb2xlXCIsIE1vbmFjbywgbW9ub3NwYWNlO1xyXG5tYXJnaW46MXB4O1xyXG5mb250LXNpemU6MTJweDtcclxuYDtcclxuXHJcblxyXG5cclxuXHJcbmNsYXNzIENhcmRQb2tlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgICAgICAgbmFtYVBva2Vtb246IHRoaXMucHJvcHMubmFtYVBva2Vtb24sXHJcbiAgICAgICAgICAgIGdhbWJhclVybDp0aGlzLnByb3BzLnVybFBvSyxcclxuICAgICAgICAgICAgdG9rZW46Q29va2llcy5nZXQoJ3Rva2VuJylcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KClcclxuICAgIHsgXHJcblxyXG4gICAgICAgICAgXHJcbiAgICB9IFxyXG4gICAgcG9zRGF0YSA9IChlKSA9PntcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgZGF0YVBvcyA9e1xyXG4gICAgICAgICAgcG9rZU5hbWU6IHRoaXMuc3RhdGUubmFtYVBva2Vtb24sXHJcbiAgICAgICAgICBwb2tlSW1nOiB0aGlzLnN0YXRlLmdhbWJhclVybFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgIH07XHJcbiAgICAgICAgIGxldCBjb25maWc9e1xyXG4gICAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnK3RoaXMuc3RhdGUudG9rZW5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgfTtcclxuICAgICAgICAgYXhpb3MucG9zdChgJHtBUEl9L3Bva2VkZXgvYWRkYCwgZGF0YVBvcywgY29uZmlnKVxyXG4gICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgYWxlcnQocmVzcG9uc2UuZGF0YSsnIGJlcmhhc2lsIGRpdGFtYmFoa2FuJylcclxuICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgYWxlcnQoZXJyb3IucmVzcG9uc2UucmVxdWVzdC5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxLb2xvbWNhcmQ+XHJcbiAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICA8R2FtYmFyIHNyYz17dGhpcy5zdGF0ZS5nYW1iYXJVcmx9Lz5cclxuICAgICAgICAgICAgICAgIDxOYW1hY2FyZD57dGhpcy5zdGF0ZS5uYW1hUG9rZW1vbn08L05hbWFjYXJkPlxyXG4gICAgICAgICAgICAgICAgPGE+PFRvbWJvbCBvbkNsaWNrPXt0aGlzLnBvc0RhdGF9ID5TQVZFPC9Ub21ib2w+PC9hPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9Lb2xvbWNhcmQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZFBva2U7Il0sInNvdXJjZVJvb3QiOiIifQ==