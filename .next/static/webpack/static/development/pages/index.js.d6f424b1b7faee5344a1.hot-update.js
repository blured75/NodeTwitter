webpackHotUpdate("static/development/pages/index.js",{

/***/ "./api/twitter.js":
/*!************************!*\
  !*** ./api/twitter.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");




var hostname;
var protocol = "http";

if (typeof window === "undefined") {
  if (hostname === undefined) {
    /*let os = require('os');
    console.log(`os.hostame() ${os.hostname()}`)
    hostname = os.hostname()*/
    if (false) {} else {
      protocol = "http";
      hostname = "localhost:3000";
    }
  }
} else {
  hostname = window.location.hostname + ":" + window.location.port;
}

var Twitter =
/*#__PURE__*/
function () {
  function Twitter() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Twitter);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Twitter, null, [{
    key: "getTimeline",
    value: function () {
      var _getTimeline = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(id) {
        var res, timeline_from_api, timeline;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch("".concat(protocol, "://").concat(hostname, "/external/api/timeline/").concat(id));

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                timeline_from_api = _context.sent;
                timeline = timeline_from_api.map(function (x) {
                  return {
                    profile_image_url: x.user.profile_image_url,
                    description: x.user.description,
                    created_at: x.created_at,
                    text: x.text
                  };
                });
                return _context.abrupt("return", {
                  timeline: timeline
                });

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
    key: "search",
    value: function () {
      var _search = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(searched) {
        var res, tweets_from_api, tweets;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // URL Encode searched cause it goes through http
                searched = encodeURIComponent(searched); // console.log(`searched ${searched}`)

                _context2.next = 3;
                return fetch("".concat(protocol, "://").concat(hostname, "/external/api/tweets/").concat(searched));

              case 3:
                res = _context2.sent;
                _context2.next = 6;
                return res.json();

              case 6:
                tweets_from_api = _context2.sent;
                tweets = tweets_from_api.statuses.map(function (x) {
                  return {
                    screen_name: x.user.screen_name,
                    full_text: x.full_text,
                    user_image: x.user.profile_image_url
                  };
                });
                return _context2.abrupt("return", {
                  tweets: tweets
                });

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function search(_x2) {
        return _search.apply(this, arguments);
      }

      return search;
    }()
  }, {
    key: "getHostname",
    value: function getHostname() {
      // If this api is called from the browser use the current server name
      // Else it means it is called by the node server in that case use the server name available in process
      var hostname;

      if (typeof window === "undefined") {
        if (hostname === undefined) {
          var os = __webpack_require__(/*! os */ "./node_modules/os-browserify/browser.js");

          console.log("os.hostame() ".concat(os.hostname()));
          hostname = os.hostname();

          if (false) {} else {
            hostname = "localhost:3000";
          }
        }
      } else {
        hostname = window.location.hostname;
      }

      return hostname;
    }
  }]);

  return Twitter;
}();

/* harmony default export */ __webpack_exports__["default"] = (Twitter);

/***/ })

})
//# sourceMappingURL=index.js.d6f424b1b7faee5344a1.hot-update.js.map