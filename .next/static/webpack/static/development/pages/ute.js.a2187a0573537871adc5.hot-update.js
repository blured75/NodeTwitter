webpackHotUpdate("static/development/pages/ute.js",{

/***/ "./utils/JSON2.js":
/*!************************!*\
  !*** ./utils/JSON2.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js"));

var JSON2 =
/*#__PURE__*/
function () {
  function JSON2() {
    (0, _classCallCheck2.default)(this, JSON2);
  }

  (0, _createClass2.default)(JSON2, null, [{
    key: "stringify",
    value: function stringify(jsObject) {
      if (typeof jsObject == "undefined") return "undefined"; // this will successfully serialize objects with cyclic
      // references by supplying @name for an object already
      // serialized instead of passing the actual object again,
      // thus breaking the vicious circle

      var alreadyVisited = [];
      var serializedData = (0, _stringify.default)(jsObject, function (key, value) {
        console.log();

        if (value == null) {
          return "null";
        }

        if (typeof value == "object") {
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

      serializedData = (0, _stringify.default)(JSON.parse(serializedData), null, 2);
      return serializedData;
    }
  }]);
  return JSON2;
}();

exports = module.exports = JSON2;

/***/ })

})
//# sourceMappingURL=ute.js.a2187a0573537871adc5.hot-update.js.map