import * as swcHelpers from "@swc/helpers";
var _iterator = Symbol.iterator;
//@target: ES6
var SymbolIterator = /*#__PURE__*/ function() {
    "use strict";
    function SymbolIterator() {
        swcHelpers.classCallCheck(this, SymbolIterator);
    }
    var _proto = SymbolIterator.prototype;
    _proto[_iterator] = function() {
        return this;
    };
    return SymbolIterator;
}();
var array = swcHelpers.toConsumableArray(new SymbolIterator);
