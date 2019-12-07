'use strict';
/**
 * Defines the options available for an instance of GameWriter and their default values.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Options =
/**
 * Indicates whether text nodes are displayed on the canvas after they are created or if they have to 
 * be displayed manually.
 * 
 * @property {boolean}
 * 
 * @default true
 */

/**
 * Class names to add to each text node created.
 * 
 * @property {Array<string>}
 */

/**
 * @param {Object} options
 * @param {boolean} [options.autoDisplay=true] Indicates whether text nodes are displayed on the canvas after they are created or if they have to be displayed manually.
 * @param {Array<string>} [options.classes=[]] Class names to add to each text node created.
 */
function Options(options) {
  _classCallCheck(this, Options);

  _defineProperty(this, "autoDisplay", true);

  _defineProperty(this, "classes", []);

  Object.assign(this, options);
};

exports["default"] = Options;
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcHRpb25zL09wdGlvbnMudHMiXSwibmFtZXMiOlsiT3B0aW9ucyIsIm9wdGlvbnMiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7SUFHcUJBLE87QUFFbkI7Ozs7Ozs7OztBQVVBOzs7Ozs7QUFPQTs7Ozs7QUFLQSxpQkFBWUMsT0FBWixFQUE2QjtBQUFBOztBQUFBLHVDQWROLElBY007O0FBQUEsbUNBUEosRUFPSTs7QUFFM0JDLEVBQUFBLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLElBQWQsRUFBb0JGLE9BQXBCO0FBRUQsQzs7O0FBRUYiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbi8qKlxyXG4gKiBEZWZpbmVzIHRoZSBvcHRpb25zIGF2YWlsYWJsZSBmb3IgYW4gaW5zdGFuY2Ugb2YgR2FtZVdyaXRlciBhbmQgdGhlaXIgZGVmYXVsdCB2YWx1ZXMuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcHRpb25zIHtcclxuXHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGV4dCBub2RlcyBhcmUgZGlzcGxheWVkIG9uIHRoZSBjYW52YXMgYWZ0ZXIgdGhleSBhcmUgY3JlYXRlZCBvciBpZiB0aGV5IGhhdmUgdG8gXHJcbiAgICogYmUgZGlzcGxheWVkIG1hbnVhbGx5LlxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn1cclxuICAgKiBcclxuICAgKiBAZGVmYXVsdCB0cnVlXHJcbiAgICovXHJcbiAgYXV0b0Rpc3BsYXk6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAvKipcclxuICAgKiBDbGFzcyBuYW1lcyB0byBhZGQgdG8gZWFjaCB0ZXh0IG5vZGUgY3JlYXRlZC5cclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge0FycmF5PHN0cmluZz59XHJcbiAgICovXHJcbiAgY2xhc3NlczogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuYXV0b0Rpc3BsYXk9dHJ1ZV0gSW5kaWNhdGVzIHdoZXRoZXIgdGV4dCBub2RlcyBhcmUgZGlzcGxheWVkIG9uIHRoZSBjYW52YXMgYWZ0ZXIgdGhleSBhcmUgY3JlYXRlZCBvciBpZiB0aGV5IGhhdmUgdG8gYmUgZGlzcGxheWVkIG1hbnVhbGx5LlxyXG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gW29wdGlvbnMuY2xhc3Nlcz1bXV0gQ2xhc3MgbmFtZXMgdG8gYWRkIHRvIGVhY2ggdGV4dCBub2RlIGNyZWF0ZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Iob3B0aW9uczogT2JqZWN0KSB7XHJcblxyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcclxuXHJcbiAgfVxyXG5cclxufTsiXX0=