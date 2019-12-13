webpackHotUpdate("static\\development\\pages\\weather.js",{

/***/ "./components/display.js":
/*!*******************************!*\
  !*** ./components/display.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../info */ "./info.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Display = function Display(_ref) {
  var data = _ref.data,
      unit = _ref.unit,
      setUnit = _ref.setUnit,
      isDayTime = _ref.isDayTime;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('United States'),
      country = _useState[0],
      setCountry = _useState[1];

  var divStyle = {
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

  var countries = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(_info__WEBPACK_IMPORTED_MODULE_2__["isoFlipped"]);

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (data !== null && 'sys' in data) {
      setCountry(_info__WEBPACK_IMPORTED_MODULE_2__["ISO"][data.sys.country]);
    }
  }, [data]);

  var handleCountryChange = function handleCountryChange(e) {
    // Add callback for parent to change country to zipcode lookup
    setCountry(e.target.value);
  };

  console.log(data);
  var currentWeather;

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
      src: _info__WEBPACK_IMPORTED_MODULE_2__["icons"][data.weather[0].icon]
    }), __jsx("p", {
      style: {
        letterSpacing: 1,
        fontSize: '1.5rem',
        marginTop: 10
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
      width: 150,
      border: '1px solid red'
    }
  }), currentWeather);
};

/* harmony default export */ __webpack_exports__["default"] = (Display);

/***/ })

})
//# sourceMappingURL=weather.js.28891ae41eb369684364.hot-update.js.map