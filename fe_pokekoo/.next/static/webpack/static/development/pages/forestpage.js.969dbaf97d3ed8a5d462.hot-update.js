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
      var datalogin = {
        email: _this.state.email,
        password: _this.state.password
      };
      var config = {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer'
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
      token: ''
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvY2FyZC5qc3giXSwibmFtZXMiOlsiS29sb21jYXJkIiwic3R5bGVkIiwiZGl2IiwiQ2FyZCIsIkdhbWJhciIsImltZyIsIlRvbWJvbCIsImJ1dHRvbiIsIk5hbWFjYXJkIiwiQ2FyZFBva2UiLCJwcm9wcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGFsb2dpbiIsImVtYWlsIiwic3RhdGUiLCJwYXNzd29yZCIsImNvbmZpZyIsImhlYWRlcnMiLCJheGlvcyIsInBvc3QiLCJBUEkiLCJ0aGVuIiwicmVzcG9uc2UiLCJDb29raWVzIiwic2V0IiwiZGF0YSIsIm1ldGEiLCJ0b2tlbiIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJSb3V0ZXIiLCJwdXNoIiwiZXJyb3IiLCJhbGVydCIsInJlcXVlc3QiLCJyZXNwb25zZVRleHQiLCJuYW1hUG9rZW1vbiIsImdhbWJhclVybCIsInVybFBvSyIsInBvc0RhdGEiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG1CQUFmO0tBQU1GLFM7QUFXTixJQUFNRyxJQUFJLEdBQUdGLHlEQUFNLENBQUNDLEdBQVYsb0JBQVY7TUFBTUMsSTtBQVFOLElBQU1DLE1BQU0sR0FBR0gseURBQU0sQ0FBQ0ksR0FBVixvQkFBWjtNQUFNRCxNO0FBT04sSUFBTUUsTUFBTSxHQUFHTCx5REFBTSxDQUFDTSxNQUFWLG9CQUFaO01BQU1ELE07QUFZTixJQUFNRSxRQUFRLEdBQUlQLHlEQUFNLENBQUNDLEdBQVgsb0JBQWQ7TUFBTU0sUTs7SUFVQUMsUTs7Ozs7QUFDRixvQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBOztBQUNkLDhCQUFNQSxLQUFOOztBQURjLGtOQWdCUixVQUFDQyxDQUFELEVBQU07QUFDWkEsT0FBQyxDQUFDQyxjQUFGO0FBQ0EsVUFBTUMsU0FBUyxHQUFFO0FBQ2ZDLGFBQUssRUFBRSxNQUFLQyxLQUFMLENBQVdELEtBREg7QUFFZkUsZ0JBQVEsRUFBRSxNQUFLRCxLQUFMLENBQVdDO0FBRk4sT0FBakI7QUFLQyxVQUFJQyxNQUFNLEdBQUM7QUFDVkMsZUFBTyxFQUFDO0FBQ04sb0JBQVUsa0JBREo7QUFFTiwyQkFBaUI7QUFGWDtBQURFLE9BQVg7QUFNQUMsbURBQUssQ0FBQ0MsSUFBTixXQUFjQyxHQUFkLGtCQUFnQ1IsU0FBaEMsRUFBMkNJLE1BQTNDLEVBQ0NLLElBREQsQ0FDTSxVQUFDQyxRQUFELEVBQWM7QUFFbEJDLHlEQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCRixRQUFRLENBQUNHLElBQVQsQ0FBY0MsSUFBZCxDQUFtQkMsS0FBeEM7QUFDQSxZQUFNQSxLQUFLLEdBQUdKLGlEQUFPLENBQUNLLEdBQVIsQ0FBWSxPQUFaLENBQWQ7QUFFQUMsZUFBTyxDQUFDQyxHQUFSLENBQVlILEtBQVo7QUFDQUksY0FBTSxDQUFDQyxJQUFQLENBQVksYUFBWjtBQUNBSCxlQUFPLENBQUNDLEdBQVIsQ0FBWVIsUUFBUSxDQUFDRyxJQUFyQjtBQUNELE9BVEQsV0FTUyxVQUFBUSxLQUFLLEVBQUk7QUFDakJDLGFBQUssQ0FBQ0QsS0FBSyxDQUFDWCxRQUFOLENBQWVhLE9BQWYsQ0FBdUJDLFlBQXhCLENBQUw7QUFDQSxPQVhEO0FBWUosS0F6Q2lCOztBQUVkLFVBQUt0QixLQUFMLEdBQVc7QUFDUHVCLGlCQUFXLEVBQUUsTUFBSzVCLEtBQUwsQ0FBVzRCLFdBRGpCO0FBRVBDLGVBQVMsRUFBQyxNQUFLN0IsS0FBTCxDQUFXOEIsTUFGZDtBQUdQWixXQUFLLEVBQUM7QUFIQyxLQUFYO0FBRmM7QUFTakI7Ozs7d0NBR0QsQ0FHQzs7OzZCQTRCTztBQUNKLGFBQ0ksTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQSxNQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHLE1BQUMsTUFBRDtBQUFRLFdBQUcsRUFBRSxLQUFLYixLQUFMLENBQVd3QixTQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREgsRUFFSSxNQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFXLEtBQUt4QixLQUFMLENBQVd1QixXQUF0QixDQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFHLE1BQUMsTUFBRDtBQUFRLGVBQU8sRUFBRSxLQUFLRyxPQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFILENBSEosQ0FEQSxDQURKO0FBU0g7Ozs7RUF0RGtCQyw0Q0FBSyxDQUFDQyxTOztBQXlEZGxDLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxmb3Jlc3RwYWdlLmpzLjk2OWRiYWY5N2QzZWQ4YTVkNDYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuXHJcblxyXG5jb25zdCBLb2xvbWNhcmQgPSBzdHlsZWQuZGl2XHJcbmBcclxud2lkdGg6IDEwMCU7XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG5tYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5tYXJnaW4tbGVmdDo0cHg7XHJcbmZsb2F0OiBsZWZ0O1xyXG53aWR0aDogMTUlO1xyXG5wYWRkaW5nOiAwIDRweDsgICAgXHJcbmA7XHJcblxyXG5jb25zdCBDYXJkID0gc3R5bGVkLmRpdlxyXG5gXHJcbmJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmY7XHJcbmA7XHJcblxyXG5jb25zdCBHYW1iYXIgPSBzdHlsZWQuaW1nXHJcbmBcclxud2lkdGggOiAxMDAlO1xyXG5oZWlnaHQgOjEwMCU7XHJcblxyXG5gO1xyXG5cclxuY29uc3QgVG9tYm9sID0gc3R5bGVkLmJ1dHRvblxyXG5gXHJcbmJhY2tncm91bmQ6ICNmZjgwMTk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDExcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuYDtcclxuXHJcbmNvbnN0IE5hbWFjYXJkID0gIHN0eWxlZC5kaXZcclxuYFxyXG5mb250LWZhbWlseTogXCJMdWNpZGEgQ29uc29sZVwiLCBNb25hY28sIG1vbm9zcGFjZTtcclxubWFyZ2luOjFweDtcclxuZm9udC1zaXplOjEycHg7XHJcbmA7XHJcblxyXG5cclxuXHJcblxyXG5jbGFzcyBDYXJkUG9rZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZT17XHJcbiAgICAgICAgICAgIG5hbWFQb2tlbW9uOiB0aGlzLnByb3BzLm5hbWFQb2tlbW9uLFxyXG4gICAgICAgICAgICBnYW1iYXJVcmw6dGhpcy5wcm9wcy51cmxQb0ssXHJcbiAgICAgICAgICAgIHRva2VuOicnXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpXHJcbiAgICB7IFxyXG5cclxuICAgICAgICAgIFxyXG4gICAgfSBcclxuICAgIHBvc0RhdGEgPSAoZSkgPT57XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGRhdGFsb2dpbiA9e1xyXG4gICAgICAgICAgZW1haWw6IHRoaXMuc3RhdGUuZW1haWwsXHJcbiAgICAgICAgICBwYXNzd29yZDogdGhpcy5zdGF0ZS5wYXNzd29yZFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgIH07XHJcbiAgICAgICAgIGxldCBjb25maWc9e1xyXG4gICAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlcicgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgIH07XHJcbiAgICAgICAgIGF4aW9zLnBvc3QoYCR7QVBJfS9hdXRoL2xvZ2luYCwgZGF0YWxvZ2luLCBjb25maWcpXHJcbiAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgIENvb2tpZXMuc2V0KCd0b2tlbicsIHJlc3BvbnNlLmRhdGEubWV0YS50b2tlbilcclxuICAgICAgICAgICBjb25zdCB0b2tlbiA9IENvb2tpZXMuZ2V0KCd0b2tlbicpXHJcblxyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKHRva2VuKTtcclxuICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2ZvcmVzdHBhZ2UnKTtcclxuICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgYWxlcnQoZXJyb3IucmVzcG9uc2UucmVxdWVzdC5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxLb2xvbWNhcmQ+XHJcbiAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICA8R2FtYmFyIHNyYz17dGhpcy5zdGF0ZS5nYW1iYXJVcmx9Lz5cclxuICAgICAgICAgICAgICAgIDxOYW1hY2FyZD57dGhpcy5zdGF0ZS5uYW1hUG9rZW1vbn08L05hbWFjYXJkPlxyXG4gICAgICAgICAgICAgICAgPGE+PFRvbWJvbCBvbkNsaWNrPXt0aGlzLnBvc0RhdGF9ID5TQVZFPC9Ub21ib2w+PC9hPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9Lb2xvbWNhcmQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZFBva2U7Il0sInNvdXJjZVJvb3QiOiIifQ==