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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcHRpb25zL09wdGlvbnMudHMiXSwibmFtZXMiOlsiT3B0aW9ucyIsIm9wdGlvbnMiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7SUFHcUJBLE87QUFFbkI7Ozs7Ozs7OztBQVVBOzs7Ozs7QUFPQTs7Ozs7QUFLQSxpQkFBWUMsT0FBWixFQUE2QjtBQUFBOztBQUFBLHVDQWROLElBY007O0FBQUEsbUNBUEosRUFPSTs7QUFFM0JDLEVBQUFBLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLElBQWQsRUFBb0JGLE9BQXBCO0FBRUQsQzs7O0FBRUYiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuLyoqXG4gKiBEZWZpbmVzIHRoZSBvcHRpb25zIGF2YWlsYWJsZSBmb3IgYW4gaW5zdGFuY2Ugb2YgR2FtZVdyaXRlciBhbmQgdGhlaXIgZGVmYXVsdCB2YWx1ZXMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wdGlvbnMge1xuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0ZXh0IG5vZGVzIGFyZSBkaXNwbGF5ZWQgb24gdGhlIGNhbnZhcyBhZnRlciB0aGV5IGFyZSBjcmVhdGVkIG9yIGlmIHRoZXkgaGF2ZSB0byBcbiAgICogYmUgZGlzcGxheWVkIG1hbnVhbGx5LlxuICAgKiBcbiAgICogQHByb3BlcnR5IHtib29sZWFufVxuICAgKiBcbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKi9cbiAgYXV0b0Rpc3BsYXk6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBuYW1lcyB0byBhZGQgdG8gZWFjaCB0ZXh0IG5vZGUgY3JlYXRlZC5cbiAgICogXG4gICAqIEBwcm9wZXJ0eSB7QXJyYXk8c3RyaW5nPn1cbiAgICovXG4gIGNsYXNzZXM6IEFycmF5PHN0cmluZz4gPSBbXTtcblxuICAvKipcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5hdXRvRGlzcGxheT10cnVlXSBJbmRpY2F0ZXMgd2hldGhlciB0ZXh0IG5vZGVzIGFyZSBkaXNwbGF5ZWQgb24gdGhlIGNhbnZhcyBhZnRlciB0aGV5IGFyZSBjcmVhdGVkIG9yIGlmIHRoZXkgaGF2ZSB0byBiZSBkaXNwbGF5ZWQgbWFudWFsbHkuXG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gW29wdGlvbnMuY2xhc3Nlcz1bXV0gQ2xhc3MgbmFtZXMgdG8gYWRkIHRvIGVhY2ggdGV4dCBub2RlIGNyZWF0ZWQuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBPYmplY3QpIHtcblxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XG5cbiAgfVxuXG59OyJdfQ==