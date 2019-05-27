webpackHotUpdate("static/development/pages/post.js",{

/***/ "./api/twitter.js":
/*!************************!*\
  !*** ./api/twitter.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");






var Twitter =
/*#__PURE__*/
function () {
  function Twitter() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Twitter);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Twitter, null, [{
    key: "getTimeline",
    value: function () {
      var _getTimeline = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(id) {
        var hostname, res, timeline;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                hostname = getHostname();
                _context.next = 3;
                return fetch("http://".concat(hostname, ":3000/external/api/timeline/").concat(id));

              case 3:
                res = _context.sent;
                _context.next = 6;
                return res.json();

              case 6:
                timeline = _context.sent;
                return _context.abrupt("return", timeline);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getTimeline(_x) {
        return _getTimeline.apply(this, arguments);
      }

      return getTimeline;
    }()
  }, {
    key: "getHostname",
    value: function getHostname() {
      // If this api is called from the browser use the current server name
      // Else it means it is called by the node server in that case use the server name available in process
      window == undefined;
      var hostname = window.location.hostname;

      if (hostname == undefined) {
        var os = __webpack_require__(/*! os */ "./node_modules/os-browserify/browser.js");

        console.log("os.hostname() ".concat(os.hostname()));
        hostname = (Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("hostname"), os.hostname());
      }

      return hostname;
    }
  }]);

  return Twitter;
}();

/* harmony default export */ __webpack_exports__["default"] = (Twitter);

/***/ })

})
//# sourceMappingURL=post.js.3e68ad0054f2de968931.hot-update.js.map