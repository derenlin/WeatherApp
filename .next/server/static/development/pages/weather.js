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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/display.js":
/*!*******************************!*\
  !*** ./components/display.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../info */ "./info.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }




const Display = ({
  data,
  unit,
  changeUnit,
  isDayTime
}) => {
  const {
    0: country,
    1: setCountry
  } = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])('United States');
  const divStyle = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    width: '50%',
    minWidth: 500,
    minHeight: 500,
    backgroundColor: isDayTime ? '#ffffff' : '#363636',
    justifyContent: 'center'
  };
  const buttonStyle = {
    letterSpacing: 2,
    borderStyle: 'none',
    height: 40,
    width: 40,
    fontSize: '2rem',
    outline: 'none',
    cursor: 'pointer',
    borderRadius: '50%'
  };

  const countries = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(_info__WEBPACK_IMPORTED_MODULE_8__["isoFlipped"]);

  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(() => {
    if (data !== null && 'sys' in data) {
      setCountry(_info__WEBPACK_IMPORTED_MODULE_8__["ISO"][data.sys.country]);
    }
  }, [data]);

  const handleCountryChange = e => {
    // Add callback for parent to change country to zipcode lookup
    setCountry(e.target.value);
  };

  let currentWeather;

  if (data !== null) {
    currentWeather = __jsx("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }
    }, __jsx("h1", {
      style: {
        letterSpacing: 2,
        fontSize: '2rem',
        margin: 5
      }
    }, data.name, ", ", country), __jsx("img", {
      style: {
        width: 150
      },
      src: _info__WEBPACK_IMPORTED_MODULE_8__["icons"][data.weather[0].icon]
    }), __jsx("p", {
      style: {
        letterSpacing: 1,
        fontSize: '1.5rem',
        marginTop: 20
      }
    }, Math.floor(data.main.temp), __jsx("span", null, "\xB0"), " ", unit === 'imperial' ? 'F' : 'C'), __jsx("p", {
      style: {
        letterSpacing: 1,
        fontSize: '1.5rem',
        marginTop: 10
      }
    }, data.weather[0].description));
  }

  return __jsx("div", {
    style: divStyle
  }, __jsx("div", {
    style: {
      position: 'absolute',
      top: 10,
      right: 10,
      height: 50,
      width: 120,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around'
    }
  }, __jsx("button", {
    style: _objectSpread({}, buttonStyle, {
      backgroundColor: unit == 'imperial' ? '#5FDBA7' : isDayTime ? '#ffffff' : '#363636'
    }),
    onClick: () => changeUnit('imperial')
  }, "F"), __jsx("div", {
    style: {
      border: '1px solid black',
      height: 36,
      width: 0
    }
  }), __jsx("button", {
    style: _objectSpread({}, buttonStyle, {
      backgroundColor: unit != 'imperial' ? '#5FDBA7' : isDayTime ? '#ffffff' : '#363636'
    }),
    onClick: () => changeUnit('metric')
  }, "C")), currentWeather);
};

/* harmony default export */ __webpack_exports__["default"] = (Display);

/***/ }),

/***/ "./components/form.js":
/*!****************************!*\
  !*** ./components/form.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const errorStyle = {
  color: '#ff4252',
  letterSpacing: 1,
  height: 10,
  marginBottom: 6,
  fontSize: '1.1em'
};

const Form = ({
  getWeatherInfo,
  isDayTime,
  error,
  setError
}) => {
  const {
    0: city,
    1: setCity
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const inputStyle = {
    minWidth: 350,
    margin: 20,
    height: '1.5rem',
    padding: 7,
    borderRadius: 10,
    border: isDayTime ? '3px solid #272343' : '3px solid #bae8e8',
    backgroundColor: isDayTime ? '#bae8e8' : '#272343',
    color: isDayTime ? '#272343' : '#bae8e8',
    paddingLeft: 14,
    fontSize: 14,
    outline: 'none',
    letterSpacing: 1
  };
  const buttonStyle = {
    letterSpacing: 2,
    borderStyle: 'none',
    backgroundColor: isDayTime ? '#bae8e8' : '#272343',
    minWidth: 350,
    margin: 20,
    color: isDayTime ? '#272343' : '#bae8e8',
    fontSize: '1.2rem',
    outline: 'none',
    cursor: 'pointer'
  };
  const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: isDayTime ? '#bae8e8' : '#272343',
    height: '100vh',
    width: '50%',
    justifyContent: 'center',
    minWidth: '500px',
    minHeight: '600px'
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      getWeatherInfo(city);
    }
  };

  return __jsx("div", {
    style: divStyle,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2414693440", [isDayTime ? '#272343' : '#bae8e8']]])
  }, __jsx("p", {
    style: {
      fontSize: '2em',
      letterSpacing: 1,
      color: 'white',
      marginBottom: 20
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2414693440", [isDayTime ? '#272343' : '#bae8e8']]])
  }, "Weather App"), __jsx("input", {
    style: inputStyle,
    onKeyPress: e => handleKeyPress(e),
    placeholder: "Enter a city",
    onChange: e => {
      if (error) setError(false);
      setCity(e.target.value);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2414693440", [isDayTime ? '#272343' : '#bae8e8']]])
  }), __jsx("p", {
    style: error ? errorStyle : {
      opacity: 0,
      height: 10,
      marginBottom: 6
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2414693440", [isDayTime ? '#272343' : '#bae8e8']]])
  }, error), __jsx("button", {
    style: buttonStyle,
    onClick: () => getWeatherInfo(city),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2414693440", [isDayTime ? '#272343' : '#bae8e8']]])
  }, "Get Weather"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2414693440",
    dynamic: [isDayTime ? '#272343' : '#bae8e8']
  }, `input.__jsx-style-dynamic-selector::-webkit-input-placeholder{color:${isDayTime ? '#272343' : '#bae8e8'};}input.__jsx-style-dynamic-selector::-moz-placeholder{color:${isDayTime ? '#272343' : '#bae8e8'};}input.__jsx-style-dynamic-selector:-ms-input-placeholder{color:${isDayTime ? '#272343' : '#bae8e8'};}input.__jsx-style-dynamic-selector::placeholder{color:${isDayTime ? '#272343' : '#bae8e8'};}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGVyZW5cXERlc2t0b3BcXHdlYXRoZXJcXGNvbXBvbmVudHNcXGZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUV3QixBQUd3RCxtQ0FDdkMiLCJmaWxlIjoiQzpcXFVzZXJzXFxkZXJlblxcRGVza3RvcFxcd2VhdGhlclxcY29tcG9uZW50c1xcZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuXHJcblxyXG5jb25zdCBlcnJvclN0eWxlID0ge1xyXG4gICAgY29sb3I6ICcjZmY0MjUyJyxcclxuICAgIGxldHRlclNwYWNpbmc6IDEsXHJcbiAgICBoZWlnaHQ6IDEwLFxyXG4gICAgbWFyZ2luQm90dG9tOiA2LFxyXG4gICAgZm9udFNpemU6ICcxLjFlbSdcclxufVxyXG5cclxuY29uc3QgRm9ybSA9ICh7Z2V0V2VhdGhlckluZm8sIGlzRGF5VGltZSwgZXJyb3IsIHNldEVycm9yfSkgPT4ge1xyXG4gICAgY29uc3QgW2NpdHksIHNldENpdHldID0gdXNlU3RhdGUoJycpXHJcblxyXG4gICAgY29uc3QgaW5wdXRTdHlsZSA9IHtcclxuICAgICAgICBtaW5XaWR0aDogMzUwLCBcclxuICAgICAgICBtYXJnaW46IDIwLFxyXG4gICAgICAgIGhlaWdodDogJzEuNXJlbScsIFxyXG4gICAgICAgIHBhZGRpbmc6IDcsIFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogMTAsXHJcbiAgICAgICAgYm9yZGVyOiBpc0RheVRpbWUgPyAnM3B4IHNvbGlkICMyNzIzNDMnIDogJzNweCBzb2xpZCAjYmFlOGU4JywgXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0RheVRpbWUgPyAnI2JhZThlOCcgOiAnIzI3MjM0MycsXHJcbiAgICAgICAgY29sb3I6IGlzRGF5VGltZSA/ICcjMjcyMzQzJyA6ICcjYmFlOGU4JyxcclxuICAgICAgICBwYWRkaW5nTGVmdDogMTQsIFxyXG4gICAgICAgIGZvbnRTaXplOiAxNCwgXHJcbiAgICAgICAgb3V0bGluZTogJ25vbmUnLFxyXG4gICAgICAgIGxldHRlclNwYWNpbmc6IDEsXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGJ1dHRvblN0eWxlID0ge1xyXG4gICAgICAgIGxldHRlclNwYWNpbmc6IDIsXHJcbiAgICAgICAgYm9yZGVyU3R5bGU6ICdub25lJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzRGF5VGltZSA/ICcjYmFlOGU4JyA6ICcjMjcyMzQzJyxcclxuICAgICAgICBtaW5XaWR0aDogMzUwLFxyXG4gICAgICAgIG1hcmdpbjogMjAsXHJcbiAgICAgICAgY29sb3I6IGlzRGF5VGltZSA/ICcjMjcyMzQzJyA6ICcjYmFlOGU4JyxcclxuICAgICAgICBmb250U2l6ZTogJzEuMnJlbScsXHJcbiAgICAgICAgb3V0bGluZTogJ25vbmUnLFxyXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBkaXZTdHlsZSA9IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsIFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJywgXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0RheVRpbWUgPyAnI2JhZThlOCcgOiAnIzI3MjM0MycsIFxyXG4gICAgICAgIGhlaWdodDogJzEwMHZoJywgXHJcbiAgICAgICAgd2lkdGg6ICc1MCUnLCBcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIFxyXG4gICAgICAgIG1pbldpZHRoOiAnNTAwcHgnLFxyXG4gICAgICAgIG1pbkhlaWdodDogJzYwMHB4J1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUtleVByZXNzID0gKGUpID0+IHtcclxuICAgICAgICBpZihlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICBnZXRXZWF0aGVySW5mbyhjaXR5KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e2RpdlN0eWxlfT5cclxuICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTogJzJlbScsIGxldHRlclNwYWNpbmc6IDEsIGNvbG9yOiAnd2hpdGUnLCBtYXJnaW5Cb3R0b206IDIwfX0+V2VhdGhlciBBcHA8L3A+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e2lucHV0U3R5bGV9IFxyXG4gICAgICAgICAgICAgICAgb25LZXlQcmVzcz17ZSA9PiBoYW5kbGVLZXlQcmVzcyhlKX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciBhIGNpdHknXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihlcnJvcikgc2V0RXJyb3IoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICBzZXRDaXR5KGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICB9fSAvPlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17IGVycm9yID8gZXJyb3JTdHlsZSA6IHtvcGFjaXR5OiAwLCBoZWlnaHQ6IDEwLCBtYXJnaW5Cb3R0b206IDZ9fT57ZXJyb3J9PC9wPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXtidXR0b25TdHlsZX0gb25DbGljaz17KCkgPT4gZ2V0V2VhdGhlckluZm8oY2l0eSl9PkdldCBXZWF0aGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7aXNEYXlUaW1lID8gJyMyNzIzNDMnIDogJyNiYWU4ZTgnfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtIl19 */
/*@ sourceURL=C:\\Users\\deren\\Desktop\\weather\\components\\form.js */`));
};

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./components/head.js":
/*!****************************!*\
  !*** ./components/head.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (() => __jsx("div", {
  className: "jsx-475584244"
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", {
  className: "jsx-475584244"
}, "WeatherApp"), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1",
  className: "jsx-475584244"
}), __jsx("meta", {
  charSet: "utf-8",
  className: "jsx-475584244"
})), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "475584244"
}, "@import url('https://fonts.googleapis.com/css?family=PT+Sans&display=swap');html *{margin:0;padding:0;font-family:'PT Sans',sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGVyZW5cXERlc2t0b3BcXHdlYXRoZXJcXGNvbXBvbmVudHNcXGhlYWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUTJCLEFBRXdGLEFBRTlELFNBQ0MsVUFDd0IsaUNBQ3RDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcZGVyZW5cXERlc2t0b3BcXHdlYXRoZXJcXGNvbXBvbmVudHNcXGhlYWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT5XZWF0aGVyQXBwPC90aXRsZT5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1QVCtTYW5zJmRpc3BsYXk9c3dhcCcpO1xyXG4gICAgICAgICAgICBodG1sICogeyBcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDsgXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdQVCBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4pIl19 */\n/*@ sourceURL=C:\\\\Users\\\\deren\\\\Desktop\\\\weather\\\\components\\\\head.js */")));

/***/ }),

/***/ "./info.js":
/*!*****************!*\
  !*** ./info.js ***!
  \*****************/
/*! exports provided: isoFlipped, ISO, icons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isoFlipped", function() { return isoFlipped; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ISO", function() { return ISO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icons", function() { return icons; });
const isoFlipped = {
  "Bangladesh": "BD",
  "Belgium": "BE",
  "Burkina Faso": "BF",
  "Bulgaria": "BG",
  "Bosnia and Herzegovina": "BA",
  "Barbados": "BB",
  "Wallis and Futuna": "WF",
  "Saint Barthelemy": "BL",
  "Bermuda": "BM",
  "Brunei": "BN",
  "Bolivia": "BO",
  "Bahrain": "BH",
  "Burundi": "BI",
  "Benin": "BJ",
  "Bhutan": "BT",
  "Jamaica": "JM",
  "Bouvet Island": "BV",
  "Botswana": "BW",
  "Samoa": "WS",
  "Bonaire, Saint Eustatius and Saba ": "BQ",
  "Brazil": "BR",
  "Bahamas": "BS",
  "Jersey": "JE",
  "Belarus": "BY",
  "Belize": "BZ",
  "Russia": "RU",
  "Rwanda": "RW",
  "Serbia": "RS",
  "East Timor": "TL",
  "Reunion": "RE",
  "Turkmenistan": "TM",
  "Tajikistan": "TJ",
  "Romania": "RO",
  "Tokelau": "TK",
  "Guinea-Bissau": "GW",
  "Guam": "GU",
  "Guatemala": "GT",
  "South Georgia and the South Sandwich Islands": "GS",
  "Greece": "GR",
  "Equatorial Guinea": "GQ",
  "Guadeloupe": "GP",
  "Japan": "JP",
  "Guyana": "GY",
  "Guernsey": "GG",
  "French Guiana": "GF",
  "Georgia": "GE",
  "Grenada": "GD",
  "United Kingdom": "GB",
  "Gabon": "GA",
  "El Salvador": "SV",
  "Guinea": "GN",
  "Gambia": "GM",
  "Greenland": "GL",
  "Gibraltar": "GI",
  "Ghana": "GH",
  "Oman": "OM",
  "Tunisia": "TN",
  "Jordan": "JO",
  "Croatia": "HR",
  "Haiti": "HT",
  "Hungary": "HU",
  "Hong Kong": "HK",
  "Honduras": "HN",
  "Heard Island and McDonald Islands": "HM",
  "Venezuela": "VE",
  "Puerto Rico": "PR",
  "Palestinian Territory": "PS",
  "Palau": "PW",
  "Portugal": "PT",
  "Svalbard and Jan Mayen": "SJ",
  "Paraguay": "PY",
  "Iraq": "IQ",
  "Panama": "PA",
  "French Polynesia": "PF",
  "Papua New Guinea": "PG",
  "Peru": "PE",
  "Pakistan": "PK",
  "Philippines": "PH",
  "Pitcairn": "PN",
  "Poland": "PL",
  "Saint Pierre and Miquelon": "PM",
  "Zambia": "ZM",
  "Western Sahara": "EH",
  "Estonia": "EE",
  "Egypt": "EG",
  "South Africa": "ZA",
  "Ecuador": "EC",
  "Italy": "IT",
  "Vietnam": "VN",
  "Solomon Islands": "SB",
  "Ethiopia": "ET",
  "Somalia": "SO",
  "Zimbabwe": "ZW",
  "Saudi Arabia": "SA",
  "Spain": "ES",
  "Eritrea": "ER",
  "Montenegro": "ME",
  "Moldova": "MD",
  "Madagascar": "MG",
  "Saint Martin": "MF",
  "Morocco": "MA",
  "Monaco": "MC",
  "Uzbekistan": "UZ",
  "Myanmar": "MM",
  "Mali": "ML",
  "Macao": "MO",
  "Mongolia": "MN",
  "Marshall Islands": "MH",
  "Macedonia": "MK",
  "Mauritius": "MU",
  "Malta": "MT",
  "Malawi": "MW",
  "Maldives": "MV",
  "Martinique": "MQ",
  "Northern Mariana Islands": "MP",
  "Montserrat": "MS",
  "Mauritania": "MR",
  "Isle of Man": "IM",
  "Uganda": "UG",
  "Tanzania": "TZ",
  "Malaysia": "MY",
  "Mexico": "MX",
  "Israel": "IL",
  "France": "FR",
  "British Indian Ocean Territory": "IO",
  "Saint Helena": "SH",
  "Finland": "FI",
  "Fiji": "FJ",
  "Falkland Islands": "FK",
  "Micronesia": "FM",
  "Faroe Islands": "FO",
  "Nicaragua": "NI",
  "Netherlands": "NL",
  "Norway": "NO",
  "Namibia": "NA",
  "Vanuatu": "VU",
  "New Caledonia": "NC",
  "Niger": "NE",
  "Norfolk Island": "NF",
  "Nigeria": "NG",
  "New Zealand": "NZ",
  "Nepal": "NP",
  "Nauru": "NR",
  "Niue": "NU",
  "Cook Islands": "CK",
  "Kosovo": "XK",
  "Ivory Coast": "CI",
  "Switzerland": "CH",
  "Colombia": "CO",
  "China": "CN",
  "Cameroon": "CM",
  "Chile": "CL",
  "Cocos Islands": "CC",
  "Canada": "CA",
  "Republic of the Congo": "CG",
  "Central African Republic": "CF",
  "Democratic Republic of the Congo": "CD",
  "Czech Republic": "CZ",
  "Cyprus": "CY",
  "Christmas Island": "CX",
  "Costa Rica": "CR",
  "Curacao": "CW",
  "Cape Verde": "CV",
  "Cuba": "CU",
  "Swaziland": "SZ",
  "Syria": "SY",
  "Sint Maarten": "SX",
  "Kyrgyzstan": "KG",
  "Kenya": "KE",
  "South Sudan": "SS",
  "Suriname": "SR",
  "Kiribati": "KI",
  "Cambodia": "KH",
  "Saint Kitts and Nevis": "KN",
  "Comoros": "KM",
  "Sao Tome and Principe": "ST",
  "Slovakia": "SK",
  "South Korea": "KR",
  "Slovenia": "SI",
  "North Korea": "KP",
  "Kuwait": "KW",
  "Senegal": "SN",
  "San Marino": "SM",
  "Sierra Leone": "SL",
  "Seychelles": "SC",
  "Kazakhstan": "KZ",
  "Cayman Islands": "KY",
  "Singapore": "SG",
  "Sweden": "SE",
  "Sudan": "SD",
  "Dominican Republic": "DO",
  "Dominica": "DM",
  "Djibouti": "DJ",
  "Denmark": "DK",
  "British Virgin Islands": "VG",
  "Germany": "DE",
  "Yemen": "YE",
  "Algeria": "DZ",
  "United States": "US",
  "Uruguay": "UY",
  "Mayotte": "YT",
  "United States Minor Outlying Islands": "UM",
  "Lebanon": "LB",
  "Saint Lucia": "LC",
  "Laos": "LA",
  "Tuvalu": "TV",
  "Taiwan": "TW",
  "Trinidad and Tobago": "TT",
  "Turkey": "TR",
  "Sri Lanka": "LK",
  "Liechtenstein": "LI",
  "Latvia": "LV",
  "Tonga": "TO",
  "Lithuania": "LT",
  "Luxembourg": "LU",
  "Liberia": "LR",
  "Lesotho": "LS",
  "Thailand": "TH",
  "French Southern Territories": "TF",
  "Togo": "TG",
  "Chad": "TD",
  "Turks and Caicos Islands": "TC",
  "Libya": "LY",
  "Vatican": "VA",
  "Saint Vincent and the Grenadines": "VC",
  "United Arab Emirates": "AE",
  "Andorra": "AD",
  "Antigua and Barbuda": "AG",
  "Afghanistan": "AF",
  "Anguilla": "AI",
  "U.S. Virgin Islands": "VI",
  "Iceland": "IS",
  "Iran": "IR",
  "Armenia": "AM",
  "Albania": "AL",
  "Angola": "AO",
  "Antarctica": "AQ",
  "American Samoa": "AS",
  "Argentina": "AR",
  "Australia": "AU",
  "Austria": "AT",
  "Aruba": "AW",
  "India": "IN",
  "Aland Islands": "AX",
  "Azerbaijan": "AZ",
  "Ireland": "IE",
  "Indonesia": "ID",
  "Ukraine": "UA",
  "Qatar": "QA",
  "Mozambique": "MZ"
};
const ISO = {
  "AF": "Afghanistan",
  "AX": "Aland Islands",
  "AL": "Albania",
  "DZ": "Algeria",
  "AS": "American Samoa",
  "AD": "Andorra",
  "AO": "Angola",
  "AI": "Anguilla",
  "AQ": "Antarctica",
  "AG": "Antigua And Barbuda",
  "AR": "Argentina",
  "AM": "Armenia",
  "AW": "Aruba",
  "AU": "Australia",
  "AT": "Austria",
  "AZ": "Azerbaijan",
  "BS": "Bahamas",
  "BH": "Bahrain",
  "BD": "Bangladesh",
  "BB": "Barbados",
  "BY": "Belarus",
  "BE": "Belgium",
  "BZ": "Belize",
  "BJ": "Benin",
  "BM": "Bermuda",
  "BT": "Bhutan",
  "BO": "Bolivia",
  "BA": "Bosnia And Herzegovina",
  "BW": "Botswana",
  "BV": "Bouvet Island",
  "BR": "Brazil",
  "IO": "British Indian Ocean Territory",
  "BN": "Brunei Darussalam",
  "BG": "Bulgaria",
  "BF": "Burkina Faso",
  "BI": "Burundi",
  "KH": "Cambodia",
  "CM": "Cameroon",
  "CA": "Canada",
  "CV": "Cape Verde",
  "KY": "Cayman Islands",
  "CF": "Central African Republic",
  "TD": "Chad",
  "CL": "Chile",
  "CN": "China",
  "CX": "Christmas Island",
  "CC": "Cocos (Keeling) Islands",
  "CO": "Colombia",
  "KM": "Comoros",
  "CG": "Congo",
  "CD": "Congo, Democratic Republic",
  "CK": "Cook Islands",
  "CR": "Costa Rica",
  "CI": "Cote D\"Ivoire",
  "HR": "Croatia",
  "CU": "Cuba",
  "CY": "Cyprus",
  "CZ": "Czech Republic",
  "DK": "Denmark",
  "DJ": "Djibouti",
  "DM": "Dominica",
  "DO": "Dominican Republic",
  "EC": "Ecuador",
  "EG": "Egypt",
  "SV": "El Salvador",
  "GQ": "Equatorial Guinea",
  "ER": "Eritrea",
  "EE": "Estonia",
  "ET": "Ethiopia",
  "FK": "Falkland Islands (Malvinas)",
  "FO": "Faroe Islands",
  "FJ": "Fiji",
  "FI": "Finland",
  "FR": "France",
  "GF": "French Guiana",
  "PF": "French Polynesia",
  "TF": "French Southern Territories",
  "GA": "Gabon",
  "GM": "Gambia",
  "GE": "Georgia",
  "DE": "Germany",
  "GH": "Ghana",
  "GI": "Gibraltar",
  "GR": "Greece",
  "GL": "Greenland",
  "GD": "Grenada",
  "GP": "Guadeloupe",
  "GU": "Guam",
  "GT": "Guatemala",
  "GG": "Guernsey",
  "GN": "Guinea",
  "GW": "Guinea-Bissau",
  "GY": "Guyana",
  "HT": "Haiti",
  "HM": "Heard Island & Mcdonald Islands",
  "VA": "Holy See (Vatican City State)",
  "HN": "Honduras",
  "HK": "Hong Kong",
  "HU": "Hungary",
  "IS": "Iceland",
  "IN": "India",
  "ID": "Indonesia",
  "IR": "Iran, Islamic Republic Of",
  "IQ": "Iraq",
  "IE": "Ireland",
  "IM": "Isle Of Man",
  "IL": "Israel",
  "IT": "Italy",
  "JM": "Jamaica",
  "JP": "Japan",
  "JE": "Jersey",
  "JO": "Jordan",
  "KZ": "Kazakhstan",
  "KE": "Kenya",
  "KI": "Kiribati",
  "KR": "Korea",
  "KW": "Kuwait",
  "KG": "Kyrgyzstan",
  "LA": "Lao People\"s Democratic Republic",
  "LV": "Latvia",
  "LB": "Lebanon",
  "LS": "Lesotho",
  "LR": "Liberia",
  "LY": "Libyan Arab Jamahiriya",
  "LI": "Liechtenstein",
  "LT": "Lithuania",
  "LU": "Luxembourg",
  "MO": "Macao",
  "MK": "Macedonia",
  "MG": "Madagascar",
  "MW": "Malawi",
  "MY": "Malaysia",
  "MV": "Maldives",
  "ML": "Mali",
  "MT": "Malta",
  "MH": "Marshall Islands",
  "MQ": "Martinique",
  "MR": "Mauritania",
  "MU": "Mauritius",
  "YT": "Mayotte",
  "MX": "Mexico",
  "FM": "Micronesia, Federated States Of",
  "MD": "Moldova",
  "MC": "Monaco",
  "MN": "Mongolia",
  "ME": "Montenegro",
  "MS": "Montserrat",
  "MA": "Morocco",
  "MZ": "Mozambique",
  "MM": "Myanmar",
  "NA": "Namibia",
  "NR": "Nauru",
  "NP": "Nepal",
  "NL": "Netherlands",
  "AN": "Netherlands Antilles",
  "NC": "New Caledonia",
  "NZ": "New Zealand",
  "NI": "Nicaragua",
  "NE": "Niger",
  "NG": "Nigeria",
  "NU": "Niue",
  "NF": "Norfolk Island",
  "MP": "Northern Mariana Islands",
  "NO": "Norway",
  "OM": "Oman",
  "PK": "Pakistan",
  "PW": "Palau",
  "PS": "Palestinian Territory, Occupied",
  "PA": "Panama",
  "PG": "Papua New Guinea",
  "PY": "Paraguay",
  "PE": "Peru",
  "PH": "Philippines",
  "PN": "Pitcairn",
  "PL": "Poland",
  "PT": "Portugal",
  "PR": "Puerto Rico",
  "QA": "Qatar",
  "RE": "Reunion",
  "RO": "Romania",
  "RU": "Russian Federation",
  "RW": "Rwanda",
  "BL": "Saint Barthelemy",
  "SH": "Saint Helena",
  "KN": "Saint Kitts And Nevis",
  "LC": "Saint Lucia",
  "MF": "Saint Martin",
  "PM": "Saint Pierre And Miquelon",
  "VC": "Saint Vincent And Grenadines",
  "WS": "Samoa",
  "SM": "San Marino",
  "ST": "Sao Tome And Principe",
  "SA": "Saudi Arabia",
  "SN": "Senegal",
  "RS": "Serbia",
  "SC": "Seychelles",
  "SL": "Sierra Leone",
  "SG": "Singapore",
  "SK": "Slovakia",
  "SI": "Slovenia",
  "SB": "Solomon Islands",
  "SO": "Somalia",
  "ZA": "South Africa",
  "GS": "South Georgia And Sandwich Isl.",
  "ES": "Spain",
  "LK": "Sri Lanka",
  "SD": "Sudan",
  "SR": "Suriname",
  "SJ": "Svalbard And Jan Mayen",
  "SZ": "Swaziland",
  "SE": "Sweden",
  "CH": "Switzerland",
  "SY": "Syrian Arab Republic",
  "TW": "Taiwan",
  "TJ": "Tajikistan",
  "TZ": "Tanzania",
  "TH": "Thailand",
  "TL": "Timor-Leste",
  "TG": "Togo",
  "TK": "Tokelau",
  "TO": "Tonga",
  "TT": "Trinidad And Tobago",
  "TN": "Tunisia",
  "TR": "Turkey",
  "TM": "Turkmenistan",
  "TC": "Turks And Caicos Islands",
  "TV": "Tuvalu",
  "UG": "Uganda",
  "UA": "Ukraine",
  "AE": "United Arab Emirates",
  "GB": "United Kingdom",
  "US": "United States",
  "UM": "United States Outlying Islands",
  "UY": "Uruguay",
  "UZ": "Uzbekistan",
  "VU": "Vanuatu",
  "VE": "Venezuela",
  "VN": "Viet Nam",
  "VG": "Virgin Islands, British",
  "VI": "Virgin Islands, U.S.",
  "WF": "Wallis And Futuna",
  "EH": "Western Sahara",
  "YE": "Yemen",
  "ZM": "Zambia",
  "ZW": "Zimbabwe"
};
const icons = {
  '01d': 'static/006-sun.svg',
  '02d': 'static/009-cloudy-day-1.svg',
  '03d': 'static/045-clouds.svg',
  '04d': 'static/009-cloudy-day-1.svg',
  '09d': 'static/042-rain.svg',
  '10d': 'static/042-rain.svg',
  '11d': 'static/002-storm-2.svg',
  '13d': 'static/043-snowing.svg',
  '50d': 'static/008-foggy-day.svg',
  '01n': 'static/021-night.svg',
  '02n': 'static/032-cloudy-night-1.svg',
  '03n': 'static/045-clouds.svg',
  '04n': 'static/032-cloudy-night-1.svg',
  '09n': 'static/042-rain.svg',
  '10n': 'static/042-rain.svg',
  '11n': 'static/002-storm-2.svg',
  '13n': 'static/043-snowing.svg',
  '50n': 'static/038-foggy-night.svg'
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/weather.js":
/*!**************************!*\
  !*** ./pages/weather.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/form */ "./components/form.js");
/* harmony import */ var _components_display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/display */ "./components/display.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const WeatherApp = () => {
  const {
    0: weatherData,
    1: setWeather
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: country,
    1: setCountry
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('United States');
  const {
    0: err,
    1: setErr
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: unit,
    1: setUnit
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('imperial');
  const hours = new Date().getHours();
  const isDayTime = hours > 6 && hours < 20;

  const openWeatherCall = city => {
    if (city !== '') {
      fetch(`/openweather/city/${city}/${unit}`).then(res => res.json()).then(data => {
        if (data.cod == 404) {
          setErr('City not found');
        } else {
          setWeather(data);
        } //data.name = city name
        //data.sys.country = ISO name

      });
    } else {
      setErr('Please enter a city');
    }
  };

  const convert = i => {
    if (i !== unit && weatherData !== null) {
      if (unit == 'imperial') {
        setUnit('metric');
        const newWeather = weatherData;
        newWeather.main.temp = (newWeather.main.temp - 32) * 5 / 9;
        setWeather(newWeather);
      } else {
        setUnit('imperial');
        const newWeather = weatherData;
        newWeather.main.temp = newWeather.main.temp * 9 / 5 + 32;
        setWeather(newWeather);
      }
    } else {
      setUnit(i);
    }
  };

  return __jsx("div", null, __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'row'
    }
  }, __jsx(_components_head__WEBPACK_IMPORTED_MODULE_1__["default"], null), __jsx(_components_form__WEBPACK_IMPORTED_MODULE_2__["default"], {
    getWeatherInfo: city => openWeatherCall(city),
    error: err,
    setError: setErr,
    isDayTime: isDayTime
  }), __jsx(_components_display__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: weatherData,
    unit: unit,
    changeUnit: unitChange => convert(unitChange),
    isDayTime: isDayTime
  })), __jsx("div", {
    style: {
      textAlign: 'center'
    }
  }, "Icons made by ", __jsx("a", {
    href: "https://www.flaticon.com/authors/freepik",
    title: "Freepik"
  }, "Freepik"), " from ", __jsx("a", {
    href: "https://www.flaticon.com/",
    title: "Flaticon"
  }, "www.flaticon.com")));
};

/* harmony default export */ __webpack_exports__["default"] = (WeatherApp);

/***/ }),

/***/ 4:
/*!********************************!*\
  !*** multi ./pages/weather.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\deren\Desktop\weather\pages\weather.js */"./pages/weather.js");


/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=weather.js.map