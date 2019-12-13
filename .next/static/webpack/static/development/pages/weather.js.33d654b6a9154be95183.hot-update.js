webpackHotUpdate("static\\development\\pages\\weather.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../info */ "./info.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }




var Display = function Display(_ref) {
  var data = _ref.data,
      unit = _ref.unit,
      setUnit = _ref.setUnit,
      isDayTime = _ref.isDayTime;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])('United States'),
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
  var buttonStyle = {
    letterSpacing: 2,
    borderStyle: 'none',
    height: 40,
    width: 40,
    fontSize: '1.5rem',
    outline: 'none',
    cursor: 'pointer',
    backgroundColor: isDayTime ? 'white' : '#363636'
  };

  var countries = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(_info__WEBPACK_IMPORTED_MODULE_8__["isoFlipped"]);

  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    if (data !== null && 'sys' in data) {
      setCountry(_info__WEBPACK_IMPORTED_MODULE_8__["ISO"][data.sys.country]);
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
      src: _info__WEBPACK_IMPORTED_MODULE_8__["icons"][data.weather[0].icon]
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
      width: 120,
      border: '1px solid red',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around'
    }
  }, __jsx("button", {
    style: _objectSpread({}, buttonStyle, {
      color: unit == 'imperial' ? '#272343' : 'gray'
    })
  }, "F"), __jsx("div", {
    style: {
      border: '2px solid black',
      height: 40,
      width: 0
    }
  }), __jsx("button", {
    style: _objectSpread({}, buttonStyle, {
      color: unit != 'imperial' ? '#272343' : 'gray'
    })
  }, "C")), currentWeather);
};

/* harmony default export */ __webpack_exports__["default"] = (Display);

/***/ })

})
//# sourceMappingURL=weather.js.33d654b6a9154be95183.hot-update.js.map