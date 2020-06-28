module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/card.jsx":
/*!****************************!*\
  !*** ./component/card.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./config.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\Koomik\\fe_pokekoo\\component\\card.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Kolomcard = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
width: 100%;
display: block;
margin-bottom: 20px;
margin-left:4px;
float: left;
width: 15%;
padding: 0 4px;    
`;
const Card = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 12px;
  text-align: center;
  background-color: #fffff;
`;
const Gambar = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img`
width : 100%;
height :100%;

`;
const Tombol = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button`
background: #ff8019;
    color: #fff;
    padding: 11px;
    cursor: pointer;
    width: 40%;
    border: none;
    border-radius: 4px;
    box-sizing: border-box;
`;
const Namacard = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
font-family: "Lucida Console", Monaco, monospace;
margin:1px;
font-size:12px;
`;

class CardPoke extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "posData", e => {
      e.preventDefault();
      const dataPos = {
        pokeName: this.state.namaPokemon,
        pokeImg: this.state.gambarUrl
      };
      let config = {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + this.state.token
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`${_config__WEBPACK_IMPORTED_MODULE_4__["API"]}/pokedex/add`, dataPos, config).then(response => {
        alert(response.data.data.pokeName + ' berhasil ditambahkan'); //    console.log(response.data);
      }).catch(error => {
        alert(error.response.request.responseText);
      });
    });

    this.state = {
      namaPokemon: this.props.namaPokemon,
      gambarUrl: this.props.urlPoK,
      token: js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get('token'),
      toogle: this.props.toogle
    };
  }

  componentDidMount() {}

  render() {
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

}

/* harmony default export */ __webpack_exports__["default"] = (CardPoke);

/***/ }),

/***/ "./component/navbar.jsx":
/*!******************************!*\
  !*** ./component/navbar.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\Koomik\\fe_pokekoo\\component\\navbar.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const Stylednav = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`

  display: flex;
  align-items: center;
  flex-flow: column;
  height: 10%;
  width: 80%;
  padding: 20px;
  padding-bottom : 12px;
  margin-bottom: 1%;
  border: 1px solid #fffff;
  border-radius: 9px;
  background: #f7f7f7;
`;
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img`
border-radius: 10%;
max-width: 80%;
max-height: 80%;
`;
const Nav = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`  
display: flex;
align-items: center;
flex-flow: row;
`;
const Tab = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a`
padding: 11px;
margin-left: 15px;
margin-right: 15px;
margin-top: 15px;
font-family: "Lucida Console", Monaco, monospace;
font-size: 23px;
cursor: pointer;
color:#5f8f45;
`;

class Navbar extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "logOut", e => {
      e.preventDefault();
      console.log('logout');
      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove('token');
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/');
    });
  }

  componentDidMount() {
    const token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('token');

    if (token == null) {
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/');
    }

    console.log(token);
    document.body.style.backgroundColor = "#dbdbdb";
  }

  render() {
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
      onClick: () => next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/forestpage'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }
    }, "Forest"), __jsx(Tab, {
      onClick: () => next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/pokedexpage'),
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

}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./config.jsx":
/*!********************!*\
  !*** ./config.jsx ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  API: 'http://127.0.0.1:8000/api'
};

/***/ }),

/***/ "./pages/forestpage.jsx":
/*!******************************!*\
  !*** ./pages/forestpage.jsx ***!
  \******************************/
/*! exports provided: getPokemon, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPokemon", function() { return getPokemon; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/navbar */ "./component/navbar.jsx");
/* harmony import */ var _component_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/card */ "./component/card.jsx");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "D:\\Koomik\\fe_pokekoo\\pages\\forestpage.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`   display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`;
const Styleddiv = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`

  display: flex;
  align-items: Left;
  flex-flow: column;
  height: 10%;
  width: 80%;
  padding: 20px;
  padding-bottom : 40px;
  margin-bottom: 8% auto;
  margin-top: 13% auto;
  border: 1px solid #fffff;
  border-radius: 9px;
  background: #f7f7f7;
  h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
  }
  
`;
const Bariscard = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  content: "";
  display: table;
  align-items: center;
  clear: both;
  margin:15px 20px;
`;
const Reload = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button`
 background: #ff8019;
    color: #fff;
    padding: 11px;
    margin-top: 15px;
    width: 10%;
    border: none;
    border-radius: 4px;
    box-sizing: border-box;
 `;

const Forestpage = ({
  pokemon = [],
  token,
  count
}) => __jsx(Wrapper, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 5
  }
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 8
  }
}, __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 17
  }
}, "Forest Page : POKEKOO"), __jsx("meta", {
  name: "viewport",
  content: "initial-scale=1.0, width=device-width",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 17
  }
})), __jsx(_component_navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 7
  }
}), __jsx(Styleddiv, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 9
  }
}, __jsx("h2", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 13
  }
}, "POKEMON FOREST ", __jsx(Reload, {
  onClick: () => next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/forestpage'),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 32
  }
}, " reload page "), " "), __jsx(Bariscard, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 14
  }
}, pokemon.map(pokemon => {
  return __jsx(_component_card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    namaPokemon: pokemon.name,
    toogle: "1",
    urlPoK: pokemon.sprites.front_default,
    key: pokemon.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  });
}))));

function getPokemon({
  url
}) {
  return new Promise((resolve, reject) => {
    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(url).then(res => res.json()).then(data => {
      resolve(data);
    });
  });
}
Forestpage.getInitialProps = fetchData;

async function fetchData() {
  const rand = Math.round(Math.random() * (964 - 1) + 1);
  const initialURL = 'https://pokeapi.co/api/v2/pokemon?offset=' + rand + '&limit=30';
  const fetchRes = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(initialURL);
  const res = await fetchRes.json();
  const data = res.results;
  const count = res.count;
  const token = js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.get('token');
  let pokemonData = await Promise.all(data.map(async pokemon => {
    let pokemonRecord = await getPokemon(pokemon);
    return pokemonRecord;
  }));
  return {
    pokemon: pokemonData,
    count,
    token
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Forestpage);

/***/ }),

/***/ 8:
/*!************************************!*\
  !*** multi ./pages/forestpage.jsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Koomik\fe_pokekoo\pages\forestpage.jsx */"./pages/forestpage.jsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L2NhcmQuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudC9uYXZiYXIuanN4Iiwid2VicGFjazovLy8uL2NvbmZpZy5qc3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZm9yZXN0cGFnZS5qc3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLXVuZmV0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJLb2xvbWNhcmQiLCJzdHlsZWQiLCJkaXYiLCJDYXJkIiwiR2FtYmFyIiwiaW1nIiwiVG9tYm9sIiwiYnV0dG9uIiwiTmFtYWNhcmQiLCJDYXJkUG9rZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGFQb3MiLCJwb2tlTmFtZSIsInN0YXRlIiwibmFtYVBva2Vtb24iLCJwb2tlSW1nIiwiZ2FtYmFyVXJsIiwiY29uZmlnIiwiaGVhZGVycyIsInRva2VuIiwiYXhpb3MiLCJwb3N0IiwiQVBJIiwidGhlbiIsInJlc3BvbnNlIiwiYWxlcnQiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsInJlcXVlc3QiLCJyZXNwb25zZVRleHQiLCJ1cmxQb0siLCJDb29raWVzIiwiZ2V0IiwidG9vZ2xlIiwiY29tcG9uZW50RGlkTW91bnQiLCJyZW5kZXIiLCJwb3NEYXRhIiwiU3R5bGVkbmF2IiwiTG9nbyIsIk5hdiIsIlRhYiIsImEiLCJOYXZiYXIiLCJjb25zb2xlIiwibG9nIiwicmVtb3ZlIiwiUm91dGVyIiwicHVzaCIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwibG9nT3V0IiwibW9kdWxlIiwiZXhwb3J0cyIsIldyYXBwZXIiLCJTdHlsZWRkaXYiLCJCYXJpc2NhcmQiLCJSZWxvYWQiLCJGb3Jlc3RwYWdlIiwicG9rZW1vbiIsImNvdW50IiwibWFwIiwibmFtZSIsInNwcml0ZXMiLCJmcm9udF9kZWZhdWx0IiwiZ2V0UG9rZW1vbiIsInVybCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiZ2V0SW5pdGlhbFByb3BzIiwiZmV0Y2hEYXRhIiwicmFuZCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsImluaXRpYWxVUkwiLCJmZXRjaFJlcyIsInJlc3VsdHMiLCJwb2tlbW9uRGF0YSIsImFsbCIsInBva2Vtb25SZWNvcmQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxl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SUFBSSxDQUFDcUMsR0FBTCxDQUFTLE1BQU1GLE9BQU4sSUFBaUI7QUFDNUQsUUFBSXlCLGFBQWEsR0FBRyxNQUFNbkIsVUFBVSxDQUFDTixPQUFELENBQXBDO0FBQ0EsV0FBT3lCLGFBQVA7QUFDRCxHQUhtQyxDQUFaLENBQXhCO0FBS0EsU0FBTztBQUNMekIsV0FBTyxFQUFFdUIsV0FESjtBQUVMdEIsU0FGSztBQUVFM0M7QUFGRixHQUFQO0FBSUQ7O0FBSWN5Qyx5RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVIQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZm9yZXN0cGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA4KTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgeyBBUEkgfSBmcm9tICcuLi9jb25maWcnO1xyXG5cclxuXHJcbmNvbnN0IEtvbG9tY2FyZCA9IHN0eWxlZC5kaXZcclxuYFxyXG53aWR0aDogMTAwJTtcclxuZGlzcGxheTogYmxvY2s7XHJcbm1hcmdpbi1ib3R0b206IDIwcHg7XHJcbm1hcmdpbi1sZWZ0OjRweDtcclxuZmxvYXQ6IGxlZnQ7XHJcbndpZHRoOiAxNSU7XHJcbnBhZGRpbmc6IDAgNHB4OyAgICBcclxuYDtcclxuXHJcbmNvbnN0IENhcmQgPSBzdHlsZWQuZGl2XHJcbmBcclxuYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZjtcclxuYDtcclxuXHJcbmNvbnN0IEdhbWJhciA9IHN0eWxlZC5pbWdcclxuYFxyXG53aWR0aCA6IDEwMCU7XHJcbmhlaWdodCA6MTAwJTtcclxuXHJcbmA7XHJcblxyXG5jb25zdCBUb21ib2wgPSBzdHlsZWQuYnV0dG9uXHJcbmBcclxuYmFja2dyb3VuZDogI2ZmODAxOTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTFweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5gO1xyXG5cclxuY29uc3QgTmFtYWNhcmQgPSAgc3R5bGVkLmRpdlxyXG5gXHJcbmZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBDb25zb2xlXCIsIE1vbmFjbywgbW9ub3NwYWNlO1xyXG5tYXJnaW46MXB4O1xyXG5mb250LXNpemU6MTJweDtcclxuYDtcclxuXHJcblxyXG5cclxuXHJcbmNsYXNzIENhcmRQb2tlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgICAgICAgbmFtYVBva2Vtb246IHRoaXMucHJvcHMubmFtYVBva2Vtb24sXHJcbiAgICAgICAgICAgIGdhbWJhclVybDp0aGlzLnByb3BzLnVybFBvSyxcclxuICAgICAgICAgICAgdG9rZW46Q29va2llcy5nZXQoJ3Rva2VuJyksXHJcbiAgICAgICAgICAgIHRvb2dsZTp0aGlzLnByb3BzLnRvb2dsZVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKVxyXG4gICAgeyBcclxuXHJcbiAgICAgICAgICBcclxuICAgIH0gXHJcbiAgICBwb3NEYXRhID0gKGUpID0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBkYXRhUG9zID17XHJcbiAgICAgICAgICBwb2tlTmFtZTogdGhpcy5zdGF0ZS5uYW1hUG9rZW1vbixcclxuICAgICAgICAgIHBva2VJbWc6IHRoaXMuc3RhdGUuZ2FtYmFyVXJsXHJcbiAgICAgICAgICBcclxuICAgICAgICAgfTtcclxuICAgICAgICAgbGV0IGNvbmZpZz17XHJcbiAgICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcrdGhpcy5zdGF0ZS50b2tlblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICB9O1xyXG4gICAgICAgICBheGlvcy5wb3N0KGAke0FQSX0vcG9rZWRleC9hZGRgLCBkYXRhUG9zLCBjb25maWcpXHJcbiAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICBhbGVydChyZXNwb25zZS5kYXRhLmRhdGEucG9rZU5hbWUrJyBiZXJoYXNpbCBkaXRhbWJhaGthbicpXHJcbiAgICAgICAgLy8gICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgIGFsZXJ0KGVycm9yLnJlc3BvbnNlLnJlcXVlc3QucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUudG9vZ2xlPT0xKXtcclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPEtvbG9tY2FyZD5cclxuICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgPEdhbWJhciBzcmM9e3RoaXMuc3RhdGUuZ2FtYmFyVXJsfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hbWFjYXJkPnt0aGlzLnN0YXRlLm5hbWFQb2tlbW9ufTwvTmFtYWNhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+PFRvbWJvbCBvbkNsaWNrPXt0aGlzLnBvc0RhdGF9ID5TQVZFPC9Ub21ib2w+PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L0tvbG9tY2FyZD5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPEtvbG9tY2FyZD5cclxuICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgPEdhbWJhciBzcmM9e3RoaXMuc3RhdGUuZ2FtYmFyVXJsfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hbWFjYXJkPnt0aGlzLnN0YXRlLm5hbWFQb2tlbW9ufTwvTmFtYWNhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvS29sb21jYXJkPlxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZFBva2U7IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgU3R5bGVkbmF2ID0gc3R5bGVkLmRpdmBcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIGhlaWdodDogMTAlO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbSA6IDEycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG5gO1xyXG5jb25zdCBMb2dvID0gc3R5bGVkLmltZ1xyXG5gXHJcbmJvcmRlci1yYWRpdXM6IDEwJTtcclxubWF4LXdpZHRoOiA4MCU7XHJcbm1heC1oZWlnaHQ6IDgwJTtcclxuYDtcclxuY29uc3QgTmF2ID0gc3R5bGVkLmRpdlxyXG5gICBcclxuZGlzcGxheTogZmxleDtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuZmxleC1mbG93OiByb3c7XHJcbmA7XHJcblxyXG5jb25zdCBUYWIgPSBzdHlsZWQuYVxyXG5gXHJcbnBhZGRpbmc6IDExcHg7XHJcbm1hcmdpbi1sZWZ0OiAxNXB4O1xyXG5tYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbm1hcmdpbi10b3A6IDE1cHg7XHJcbmZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBDb25zb2xlXCIsIE1vbmFjbywgbW9ub3NwYWNlO1xyXG5mb250LXNpemU6IDIzcHg7XHJcbmN1cnNvcjogcG9pbnRlcjtcclxuY29sb3I6IzVmOGY0NTtcclxuYDtcclxuXHJcbmNsYXNzIE5hdmJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIGNvbXBvbmVudERpZE1vdW50KClcclxuICAgIHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IENvb2tpZXMuZ2V0KCd0b2tlbicpXHJcbiAgICAgICAgaWYodG9rZW49PW51bGwpe1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0b2tlbilcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2RiZGJkYlwiO1xyXG4gICAgfVxyXG4gICAgbG9nT3V0ID0gKGUpID0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnbG9nb3V0Jyk7XHJcbiAgICAgICAgQ29va2llcy5yZW1vdmUoJ3Rva2VuJyk7XHJcbiAgICAgICAgUm91dGVyLnB1c2goJy8nKTtcclxuXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxTdHlsZWRuYXY+XHJcbiAgICAgICAgICAgIDxMb2dvIHNyYz1cIi9wb2tla29vLnBuZ1wiIGFsdD1cInBva2Vrb29cIi8+XHJcbiAgICAgICAgICAgIDxOYXY+XHJcbiAgICAgICAgICAgICAgICA8VGFiIG9uQ2xpY2s9eygpPT5Sb3V0ZXIucHVzaCgnL2ZvcmVzdHBhZ2UnKX0+Rm9yZXN0PC9UYWI+IFxyXG4gICAgICAgICAgICAgICAgPFRhYiBvbkNsaWNrPXsoKT0+Um91dGVyLnB1c2goJy9wb2tlZGV4cGFnZScpfT5Qb2tlZGV4PC9UYWI+XHJcbiAgICAgICAgICAgICAgICA8VGFiIG9uQ2xpY2s9e3RoaXMubG9nT3V0fT5Mb2dvdXQ8L1RhYj5cclxuICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgPC9TdHlsZWRuYXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyOyIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgQVBJOiAnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaScsXHJcbiAgfTtcclxuXHJcbiAgIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnQvbmF2YmFyJztcclxuaW1wb3J0IENhcmRQb2tlIGZyb20gJy4uL2NvbXBvbmVudC9jYXJkJztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuXHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdlxyXG5gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkZGl2ID0gc3R5bGVkLmRpdmBcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogTGVmdDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwJTtcclxuICB3aWR0aDogODAlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgcGFkZGluZy1ib3R0b20gOiA0MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDglIGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMTMlIGF1dG87XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG4gIGgyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICBcclxuYDtcclxuXHJcbmNvbnN0IEJhcmlzY2FyZCA9IHN0eWxlZC5kaXZcclxuYFxyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjbGVhcjogYm90aDtcclxuICBtYXJnaW46MTVweCAyMHB4O1xyXG5gO1xyXG4gY29uc3QgUmVsb2FkID0gc3R5bGVkLmJ1dHRvblxyXG4gYFxyXG4gYmFja2dyb3VuZDogI2ZmODAxOTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTFweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuIGA7XHJcblxyXG5jb25zdCBGb3Jlc3RwYWdlID0gKHtwb2tlbW9uID0gW10sdG9rZW4sIGNvdW50fSkgPT4oXHJcblxyXG4gICAgPFdyYXBwZXI+XHJcbiAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5Gb3Jlc3QgUGFnZSA6IFBPS0VLT088L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgIDxOYXZiYXIvPlxyXG4gICAgICAgIDxTdHlsZWRkaXY+XHJcbiAgICAgICAgICAgIDxoMj5QT0tFTU9OIEZPUkVTVCA8UmVsb2FkIG9uQ2xpY2s9eygpPT5Sb3V0ZXIucHVzaCgnL2ZvcmVzdHBhZ2UnKX0+IHJlbG9hZCBwYWdlIDwvUmVsb2FkPiA8L2gyPlxyXG4gICAgICAgICAgICAgPEJhcmlzY2FyZD4gXHJcbiAgICAgICAgICAgICAgICB7cG9rZW1vbi5tYXAocG9rZW1vbiA9PnsgcmV0dXJuKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZFBva2UgbmFtYVBva2Vtb249e3Bva2Vtb24ubmFtZX0gdG9vZ2xlPScxJyB1cmxQb0s9e3Bva2Vtb24uc3ByaXRlcy5mcm9udF9kZWZhdWx0fSBrZXk9e3Bva2Vtb24ubmFtZX0vPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICApfSl9XHJcbiAgICAgICAgICAgICA8L0JhcmlzY2FyZD5cclxuICAgICAgICAgPC9TdHlsZWRkaXY+XHJcbiAgICAgPC9XcmFwcGVyPlxyXG4gICBcclxuKVxyXG5cclxuXHJcbiAgXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGdldFBva2Vtb24oeyB1cmwgfSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBmZXRjaCh1cmwpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbkZvcmVzdHBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gZmV0Y2hEYXRhO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xyXG4gIGNvbnN0IHJhbmQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoOTY0IC0gMSkgKyAxKTtcclxuICBjb25zdCBpbml0aWFsVVJMID0gJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbj9vZmZzZXQ9JytyYW5kKycmbGltaXQ9MzAnO1xyXG4gIFxyXG4gIGNvbnN0IGZldGNoUmVzID0gYXdhaXQgZmV0Y2goaW5pdGlhbFVSTClcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaFJlcy5qc29uKClcclxuICBcclxuICBjb25zdCBkYXRhID0gcmVzLnJlc3VsdHNcclxuICBjb25zdCBjb3VudCA9IHJlcy5jb3VudCBcclxuXHJcbiAgY29uc3QgdG9rZW4gPSBDb29raWVzLmdldCgndG9rZW4nKVxyXG4gXHJcblxyXG4gIGxldCBwb2tlbW9uRGF0YSA9IGF3YWl0IFByb21pc2UuYWxsKGRhdGEubWFwKGFzeW5jIHBva2Vtb24gPT4ge1xyXG4gICAgbGV0IHBva2Vtb25SZWNvcmQgPSBhd2FpdCBnZXRQb2tlbW9uKHBva2Vtb24pXHJcbiAgICByZXR1cm4gcG9rZW1vblJlY29yZFxyXG4gIH0pKVxyXG4gXHJcbiAgcmV0dXJuIHtcclxuICAgIHBva2Vtb246IHBva2Vtb25EYXRhLFxyXG4gICAgY291bnQsIHRva2VuXHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcmVzdHBhZ2VcclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=