webpackHotUpdate("static/development/pages/ute.js",{

/***/ "./utils/JSON2.js":
/*!************************!*\
  !*** ./utils/JSON2.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");




var JSON2 =
/*#__PURE__*/
function () {
  function JSON2() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, JSON2);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(JSON2, null, [{
    key: "stringify",
    value: function stringify(jsObject) {
      // this will successfully serialize objects with cyclic
      // references by supplying @name for an object already
      // serialized instead of passing the actual object again,
      // thus breaking the vicious circle
      var alreadyVisited = [];

      var serializedData = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(jsObject, function (key, value) {
        console.log();

        if (value != null && typeof value == "object") {
          if (alreadyVisited.indexOf(value.name) >= 0) {
            // do something other that putting the reference, like
            // putting some name that you can use to build the
            // reference again later, for eg.
            return "@" + value.name;
          }

          alreadyVisited.push(value.name);
        }

        return value;
      }); // return modified, sanitized result


      serializedData = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(JSON.parse(serializedData), null, 2);
      return serializedData;
    }
  }]);

  return JSON2;
}();

/***/ })

})
//# sourceMappingURL=ute.js.fe16795252d5391d4278.hot-update.js.map