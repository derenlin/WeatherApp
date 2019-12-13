webpackHotUpdate("static\\development\\pages\\weather.js",{

/***/ "./pages/weather.js":
/*!**************************!*\
  !*** ./pages/weather.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/form */ "./components/form.js");
/* harmony import */ var _components_display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/display */ "./components/display.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var WeatherApp = function WeatherApp() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      weatherData = _useState[0],
      setWeather = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('United States'),
      country = _useState2[0],
      setCountry = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      err = _useState3[0],
      setErr = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('imperial'),
      unit = _useState4[0],
      setUnit = _useState4[1];

  var hours = new Date().getHours();
  var isDayTime = hours > 6 && hours < 20;

  var openWeatherCall = function openWeatherCall(city) {
    if (city !== '') {
      fetch("/openweather/city/".concat(city, "/").concat(unit)).then(function (res) {
        return res.json();
      }).then(function (data) {
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

  var convert = function convert(i) {
    // console.log(i)
    if (i !== unit && weatherData !== null) {
      if (i === 'metric') {
        setUnit('imperial'); // const newWeather = weatherData
        // newWeather.main.temp = ((Math.floor(newWeather.main.temp) * 9) / 5) + 32
        // setWeather(newWeather)
      } else {
        setUnit('metric'); // const newWeather = weather
        // newWeather.main.temp = ((Math.floor(newWeather.main.temp) - 32) * 5) / 9
        // setWeather(newWeather)
      }
    }
  };

  return __jsx("div", null, __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'row'
    }
  }, __jsx(_components_head__WEBPACK_IMPORTED_MODULE_1__["default"], null), __jsx(_components_form__WEBPACK_IMPORTED_MODULE_2__["default"], {
    getWeatherInfo: function getWeatherInfo(city) {
      return openWeatherCall(city);
    },
    error: err,
    setError: setErr,
    isDayTime: isDayTime
  }), __jsx(_components_display__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: weatherData,
    unit: unit,
    changeUnit: function changeUnit(unitChange) {
      return convert(unitChange);
    },
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

/***/ })

})
//# sourceMappingURL=weather.js.594103d6d4291e8f8e8e.hot-update.js.map