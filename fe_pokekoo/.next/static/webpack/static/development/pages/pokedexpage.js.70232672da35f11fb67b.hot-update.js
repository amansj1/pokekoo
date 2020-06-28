webpackHotUpdate("static\\development\\pages\\pokedexpage.js",{

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
        alert(response.data.data.pokeName + ' berhasil ditambahkan'); //    console.log(response.data);
      })["catch"](function (error) {
        alert(error.response.request.responseText);
      });
    });

    _this.state = {
      namaPokemon: _this.props.namaPokemon,
      gambarUrl: _this.props.urlPoK,
      token: js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.get('token'),
      toogle: _this.props.toogle
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CardPoke, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      if (this.state.toogle == 1) {
        return __jsx(Kolomcard, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 17
          }
        }, __jsx(Card, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 17
          }
        }, __jsx(Gambar, {
          src: this.state.gambarUrl,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 20
          }
        }), __jsx(Namacard, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 21
          }
        }, this.state.namaPokemon), __jsx("a", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 21
          }
        }, __jsx(Tombol, {
          onClick: this.posData,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 24
          }
        }, "SAVE"))));
      } else {
        return __jsx(Kolomcard, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 17
          }
        }, __jsx(Card, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 17
          }
        }, __jsx(Gambar, {
          src: this.state.gambarUrl,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 20
          }
        }), __jsx(Namacard, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 21
          }
        }, this.state.namaPokemon)));
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvY2FyZC5qc3giXSwibmFtZXMiOlsiS29sb21jYXJkIiwic3R5bGVkIiwiZGl2IiwiQ2FyZCIsIkdhbWJhciIsImltZyIsIlRvbWJvbCIsImJ1dHRvbiIsIk5hbWFjYXJkIiwiQ2FyZFBva2UiLCJwcm9wcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGFQb3MiLCJwb2tlTmFtZSIsInN0YXRlIiwibmFtYVBva2Vtb24iLCJwb2tlSW1nIiwiZ2FtYmFyVXJsIiwiY29uZmlnIiwiaGVhZGVycyIsInRva2VuIiwiYXhpb3MiLCJwb3N0IiwiQVBJIiwidGhlbiIsInJlc3BvbnNlIiwiYWxlcnQiLCJkYXRhIiwiZXJyb3IiLCJyZXF1ZXN0IiwicmVzcG9uc2VUZXh0IiwidXJsUG9LIiwiQ29va2llcyIsImdldCIsInRvb2dsZSIsInBvc0RhdGEiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBZjtLQUFNRixTO0FBV04sSUFBTUcsSUFBSSxHQUFHRix5REFBTSxDQUFDQyxHQUFWLG9CQUFWO01BQU1DLEk7QUFRTixJQUFNQyxNQUFNLEdBQUdILHlEQUFNLENBQUNJLEdBQVYsb0JBQVo7TUFBTUQsTTtBQU9OLElBQU1FLE1BQU0sR0FBR0wseURBQU0sQ0FBQ00sTUFBVixvQkFBWjtNQUFNRCxNO0FBWU4sSUFBTUUsUUFBUSxHQUFJUCx5REFBTSxDQUFDQyxHQUFYLG9CQUFkO01BQU1NLFE7O0lBVUFDLFE7Ozs7O0FBQ0Ysb0JBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQTs7QUFDZCw4QkFBTUEsS0FBTjs7QUFEYyxrTkFpQlIsVUFBQ0MsQ0FBRCxFQUFNO0FBQ1pBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBLFVBQU1DLE9BQU8sR0FBRTtBQUNiQyxnQkFBUSxFQUFFLE1BQUtDLEtBQUwsQ0FBV0MsV0FEUjtBQUViQyxlQUFPLEVBQUUsTUFBS0YsS0FBTCxDQUFXRztBQUZQLE9BQWY7QUFLQyxVQUFJQyxNQUFNLEdBQUM7QUFDVkMsZUFBTyxFQUFDO0FBQ04sb0JBQVUsa0JBREo7QUFFTiwyQkFBaUIsWUFBVSxNQUFLTCxLQUFMLENBQVdNO0FBRmhDO0FBREUsT0FBWDtBQU1BQyxtREFBSyxDQUFDQyxJQUFOLFdBQWNDLDRDQUFkLG1CQUFpQ1gsT0FBakMsRUFBMENNLE1BQTFDLEVBQ0NNLElBREQsQ0FDTSxVQUFDQyxRQUFELEVBQWM7QUFDcEJDLGFBQUssQ0FBQ0QsUUFBUSxDQUFDRSxJQUFULENBQWNBLElBQWQsQ0FBbUJkLFFBQW5CLEdBQTRCLHVCQUE3QixDQUFMLENBRG9CLENBRXJCO0FBQ0UsT0FKRCxXQUlTLFVBQUFlLEtBQUssRUFBSTtBQUNqQkYsYUFBSyxDQUFDRSxLQUFLLENBQUNILFFBQU4sQ0FBZUksT0FBZixDQUF1QkMsWUFBeEIsQ0FBTDtBQUNBLE9BTkQ7QUFPSixLQXJDaUI7O0FBRWQsVUFBS2hCLEtBQUwsR0FBVztBQUNQQyxpQkFBVyxFQUFFLE1BQUtOLEtBQUwsQ0FBV00sV0FEakI7QUFFUEUsZUFBUyxFQUFDLE1BQUtSLEtBQUwsQ0FBV3NCLE1BRmQ7QUFHUFgsV0FBSyxFQUFDWSxpREFBTyxDQUFDQyxHQUFSLENBQVksT0FBWixDQUhDO0FBSVBDLFlBQU0sRUFBQyxNQUFLekIsS0FBTCxDQUFXeUI7QUFKWCxLQUFYO0FBRmM7QUFVakI7Ozs7d0NBR0QsQ0FHQzs7OzZCQXVCTztBQUVKLFVBQUcsS0FBS3BCLEtBQUwsQ0FBV29CLE1BQVgsSUFBbUIsQ0FBdEIsRUFBd0I7QUFDcEIsZUFDSSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNBLE1BQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0csTUFBQyxNQUFEO0FBQVEsYUFBRyxFQUFFLEtBQUtwQixLQUFMLENBQVdHLFNBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESCxFQUVJLE1BQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVcsS0FBS0gsS0FBTCxDQUFXQyxXQUF0QixDQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFHLE1BQUMsTUFBRDtBQUFRLGlCQUFPLEVBQUUsS0FBS29CLE9BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQUgsQ0FISixDQURBLENBREo7QUFTSCxPQVZELE1BVUs7QUFDRCxlQUNJLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0EsTUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRyxNQUFDLE1BQUQ7QUFBUSxhQUFHLEVBQUUsS0FBS3JCLEtBQUwsQ0FBV0csU0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURILEVBRUksTUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBVyxLQUFLSCxLQUFMLENBQVdDLFdBQXRCLENBRkosQ0FEQSxDQURKO0FBU0g7QUFFSjs7OztFQWhFa0JxQiw0Q0FBSyxDQUFDQyxTOztBQW1FZDdCLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwb2tlZGV4cGFnZS5qcy43MDIzMjY3MmRhMzVmMTFmYjY3Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCB7IEFQSSB9IGZyb20gJy4uL2NvbmZpZyc7XHJcblxyXG5cclxuY29uc3QgS29sb21jYXJkID0gc3R5bGVkLmRpdlxyXG5gXHJcbndpZHRoOiAxMDAlO1xyXG5kaXNwbGF5OiBibG9jaztcclxubWFyZ2luLWJvdHRvbTogMjBweDtcclxubWFyZ2luLWxlZnQ6NHB4O1xyXG5mbG9hdDogbGVmdDtcclxud2lkdGg6IDE1JTtcclxucGFkZGluZzogMCA0cHg7ICAgIFxyXG5gO1xyXG5cclxuY29uc3QgQ2FyZCA9IHN0eWxlZC5kaXZcclxuYFxyXG5ib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmO1xyXG5gO1xyXG5cclxuY29uc3QgR2FtYmFyID0gc3R5bGVkLmltZ1xyXG5gXHJcbndpZHRoIDogMTAwJTtcclxuaGVpZ2h0IDoxMDAlO1xyXG5cclxuYDtcclxuXHJcbmNvbnN0IFRvbWJvbCA9IHN0eWxlZC5idXR0b25cclxuYFxyXG5iYWNrZ3JvdW5kOiAjZmY4MDE5O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxMXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbmA7XHJcblxyXG5jb25zdCBOYW1hY2FyZCA9ICBzdHlsZWQuZGl2XHJcbmBcclxuZm9udC1mYW1pbHk6IFwiTHVjaWRhIENvbnNvbGVcIiwgTW9uYWNvLCBtb25vc3BhY2U7XHJcbm1hcmdpbjoxcHg7XHJcbmZvbnQtc2l6ZToxMnB4O1xyXG5gO1xyXG5cclxuXHJcblxyXG5cclxuY2xhc3MgQ2FyZFBva2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGU9e1xyXG4gICAgICAgICAgICBuYW1hUG9rZW1vbjogdGhpcy5wcm9wcy5uYW1hUG9rZW1vbixcclxuICAgICAgICAgICAgZ2FtYmFyVXJsOnRoaXMucHJvcHMudXJsUG9LLFxyXG4gICAgICAgICAgICB0b2tlbjpDb29raWVzLmdldCgndG9rZW4nKSxcclxuICAgICAgICAgICAgdG9vZ2xlOnRoaXMucHJvcHMudG9vZ2xlXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpXHJcbiAgICB7IFxyXG5cclxuICAgICAgICAgIFxyXG4gICAgfSBcclxuICAgIHBvc0RhdGEgPSAoZSkgPT57XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGRhdGFQb3MgPXtcclxuICAgICAgICAgIHBva2VOYW1lOiB0aGlzLnN0YXRlLm5hbWFQb2tlbW9uLFxyXG4gICAgICAgICAgcG9rZUltZzogdGhpcy5zdGF0ZS5nYW1iYXJVcmxcclxuICAgICAgICAgIFxyXG4gICAgICAgICB9O1xyXG4gICAgICAgICBsZXQgY29uZmlnPXtcclxuICAgICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyt0aGlzLnN0YXRlLnRva2VuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgIH07XHJcbiAgICAgICAgIGF4aW9zLnBvc3QoYCR7QVBJfS9wb2tlZGV4L2FkZGAsIGRhdGFQb3MsIGNvbmZpZylcclxuICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgIGFsZXJ0KHJlc3BvbnNlLmRhdGEuZGF0YS5wb2tlTmFtZSsnIGJlcmhhc2lsIGRpdGFtYmFoa2FuJylcclxuICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgYWxlcnQoZXJyb3IucmVzcG9uc2UucmVxdWVzdC5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuXHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS50b29nbGU9PTEpe1xyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8S29sb21jYXJkPlxyXG4gICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICA8R2FtYmFyIHNyYz17dGhpcy5zdGF0ZS5nYW1iYXJVcmx9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8TmFtYWNhcmQ+e3RoaXMuc3RhdGUubmFtYVBva2Vtb259PC9OYW1hY2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8YT48VG9tYm9sIG9uQ2xpY2s9e3RoaXMucG9zRGF0YX0gPlNBVkU8L1RvbWJvbD48L2E+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvS29sb21jYXJkPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8S29sb21jYXJkPlxyXG4gICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICA8R2FtYmFyIHNyYz17dGhpcy5zdGF0ZS5nYW1iYXJVcmx9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8TmFtYWNhcmQ+e3RoaXMuc3RhdGUubmFtYVBva2Vtb259PC9OYW1hY2FyZD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPC9Lb2xvbWNhcmQ+XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkUG9rZTsiXSwic291cmNlUm9vdCI6IiJ9