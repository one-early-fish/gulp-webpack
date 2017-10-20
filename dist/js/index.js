webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

__webpack_require__(4);

var _class = __webpack_require__(5);

var _public = __webpack_require__(6);

// index
var $ = __webpack_require__(0);

var $Item = $('.item');

var dom = new _class.Dom({
  el: $Item[0]
});

console.log(dom);

console.log($Item.length + ' : ' + _public.ERR_OK + 'hahaha');

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// class

var Dom = function () {
  function Dom(_ref) {
    var el = _ref.el;

    _classCallCheck(this, Dom);

    this.el = el;
  }

  _createClass(Dom, [{
    key: "search",
    value: function search() {
      console.log(this.el);
    }
  }]);

  return Dom;
}();

exports.Dom = Dom;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ERR_OK = 200;

exports.ERR_OK = ERR_OK;

/***/ })
],[2]);