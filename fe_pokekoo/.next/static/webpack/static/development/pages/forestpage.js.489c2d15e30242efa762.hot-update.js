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
      console.log('dd');
    });

    _this.state = {
      namaPokemon: _this.props.namaPokemon,
      gambarUrl: _this.props.urlPoK
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
          lineNumber: 76,
          columnNumber: 13
        }
      }, __jsx(Card, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 13
        }
      }, __jsx(Gambar, {
        src: this.state.gambarUrl,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 16
        }
      }), __jsx(Namacard, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 17
        }
      }, this.state.namaPokemon), __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 17
        }
      }, __jsx(Tombol, {
        onClick: this.posData,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvY2FyZC5qc3giXSwibmFtZXMiOlsiS29sb21jYXJkIiwic3R5bGVkIiwiZGl2IiwiQ2FyZCIsIkdhbWJhciIsImltZyIsIlRvbWJvbCIsImJ1dHRvbiIsIk5hbWFjYXJkIiwiQ2FyZFBva2UiLCJwcm9wcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsIm5hbWFQb2tlbW9uIiwiZ2FtYmFyVXJsIiwidXJsUG9LIiwicG9zRGF0YSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBZjtLQUFNRixTO0FBV04sSUFBTUcsSUFBSSxHQUFHRix5REFBTSxDQUFDQyxHQUFWLG9CQUFWO01BQU1DLEk7QUFRTixJQUFNQyxNQUFNLEdBQUdILHlEQUFNLENBQUNJLEdBQVYsb0JBQVo7TUFBTUQsTTtBQU9OLElBQU1FLE1BQU0sR0FBR0wseURBQU0sQ0FBQ00sTUFBVixvQkFBWjtNQUFNRCxNO0FBWU4sSUFBTUUsUUFBUSxHQUFJUCx5REFBTSxDQUFDQyxHQUFYLG9CQUFkO01BQU1NLFE7O0lBVUFDLFE7Ozs7O0FBQ0Ysb0JBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQTs7QUFDZCw4QkFBTUEsS0FBTjs7QUFEYyxrTkFjUixVQUFDQyxDQUFELEVBQU07QUFDWkEsT0FBQyxDQUFDQyxjQUFGO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVo7QUFDSCxLQWpCaUI7O0FBRWQsVUFBS0MsS0FBTCxHQUFXO0FBQ1BDLGlCQUFXLEVBQUUsTUFBS04sS0FBTCxDQUFXTSxXQURqQjtBQUVQQyxlQUFTLEVBQUMsTUFBS1AsS0FBTCxDQUFXUTtBQUZkLEtBQVg7QUFGYztBQVFqQjs7Ozt3Q0FHRCxDQUVDOzs7NkJBTU87QUFDSixhQUNJLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0EsTUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRyxNQUFDLE1BQUQ7QUFBUSxXQUFHLEVBQUUsS0FBS0gsS0FBTCxDQUFXRSxTQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREgsRUFFSSxNQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFXLEtBQUtGLEtBQUwsQ0FBV0MsV0FBdEIsQ0FGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBRyxNQUFDLE1BQUQ7QUFBUSxlQUFPLEVBQUUsS0FBS0csT0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBSCxDQUhKLENBREEsQ0FESjtBQVNIOzs7O0VBOUJrQkMsNENBQUssQ0FBQ0MsUzs7QUFpQ2RaLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxmb3Jlc3RwYWdlLmpzLjQ4OWMyZDE1ZTMwMjQyZWZhNzYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcblxyXG5jb25zdCBLb2xvbWNhcmQgPSBzdHlsZWQuZGl2XHJcbmBcclxud2lkdGg6IDEwMCU7XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG5tYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5tYXJnaW4tbGVmdDo0cHg7XHJcbmZsb2F0OiBsZWZ0O1xyXG53aWR0aDogMTUlO1xyXG5wYWRkaW5nOiAwIDRweDsgICAgXHJcbmA7XHJcblxyXG5jb25zdCBDYXJkID0gc3R5bGVkLmRpdlxyXG5gXHJcbmJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmY7XHJcbmA7XHJcblxyXG5jb25zdCBHYW1iYXIgPSBzdHlsZWQuaW1nXHJcbmBcclxud2lkdGggOiAxMDAlO1xyXG5oZWlnaHQgOjEwMCU7XHJcblxyXG5gO1xyXG5cclxuY29uc3QgVG9tYm9sID0gc3R5bGVkLmJ1dHRvblxyXG5gXHJcbmJhY2tncm91bmQ6ICNmZjgwMTk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDExcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuYDtcclxuXHJcbmNvbnN0IE5hbWFjYXJkID0gIHN0eWxlZC5kaXZcclxuYFxyXG5mb250LWZhbWlseTogXCJMdWNpZGEgQ29uc29sZVwiLCBNb25hY28sIG1vbm9zcGFjZTtcclxubWFyZ2luOjFweDtcclxuZm9udC1zaXplOjEycHg7XHJcbmA7XHJcblxyXG5cclxuXHJcblxyXG5jbGFzcyBDYXJkUG9rZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZT17XHJcbiAgICAgICAgICAgIG5hbWFQb2tlbW9uOiB0aGlzLnByb3BzLm5hbWFQb2tlbW9uLFxyXG4gICAgICAgICAgICBnYW1iYXJVcmw6dGhpcy5wcm9wcy51cmxQb0ssXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpXHJcbiAgICB7IFxyXG4gICAgICAgICAgXHJcbiAgICB9IFxyXG4gICAgcG9zRGF0YSA9IChlKSA9PntcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2RkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8S29sb21jYXJkPlxyXG4gICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgPEdhbWJhciBzcmM9e3RoaXMuc3RhdGUuZ2FtYmFyVXJsfS8+XHJcbiAgICAgICAgICAgICAgICA8TmFtYWNhcmQ+e3RoaXMuc3RhdGUubmFtYVBva2Vtb259PC9OYW1hY2FyZD5cclxuICAgICAgICAgICAgICAgIDxhPjxUb21ib2wgb25DbGljaz17dGhpcy5wb3NEYXRhfSA+U0FWRTwvVG9tYm9sPjwvYT5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvS29sb21jYXJkPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRQb2tlOyJdLCJzb3VyY2VSb290IjoiIn0=