'use strict';
/**
 * Describes the options available for a text node.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TextOptions =
/**
 * @param {Object} options
 * @param {number} options.size The size of the text. This should be a value from 1-10 with 1 being default and getting larger as it gets closer to 10.
 * @param {string} options.id An id to add to the text element.
 * @param {Array<string>} options.classes Classes to add to the text element.
 */
function TextOptions(options) {
  _classCallCheck(this, TextOptions);

  _defineProperty(this, "size", 1);

  _defineProperty(this, "id", void 0);

  _defineProperty(this, "classes", []);

  Object.assign(this, options);
};

exports["default"] = TextOptions;
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXh0L1RleHRPcHRpb25zLnRzIl0sIm5hbWVzIjpbIlRleHRPcHRpb25zIiwib3B0aW9ucyIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFFQTs7Ozs7Ozs7Ozs7OztJQUdxQkEsVztBQW9DbkI7Ozs7OztBQU1BLHFCQUFZQyxPQUFaLEVBQTZCO0FBQUE7O0FBQUEsZ0NBL0JkLENBK0JjOztBQUFBOztBQUFBLG1DQWZKLEVBZUk7O0FBRTNCQyxFQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBYyxJQUFkLEVBQW9CRixPQUFwQjtBQUVELEM7OztBQUVGIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbi8qKlxuICogRGVzY3JpYmVzIHRoZSBvcHRpb25zIGF2YWlsYWJsZSBmb3IgYSB0ZXh0IG5vZGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRPcHRpb25zIHtcblxuICAvKipcbiAgICogVGhlIHNpemUgb2YgdGhlIHRleHQuXG4gICAqIFxuICAgKiBUaGlzIHNob3VsZCBiZSBhIHZhbHVlIGZyb20gMS0xMCB3aXRoIDEgYmVpbmcgZGVmYXVsdCBhbmQgZ2V0dGluZyBsYXJnZXIgYXMgaXQgZ2V0cyBjbG9zZXIgdG8gMTAuXG4gICAqIFxuICAgKiBAcHJvcGVydHkge251bWJlcn1cbiAgICogXG4gICAqIEBkZWZhdWx0IDFcbiAgICovXG4gIHNpemU6IG51bWJlciA9IDE7XG5cbiAgLyoqXG4gICAqIEFuIGlkIHRvIGFkZCB0byB0aGUgdGV4dCBlbGVtZW50LlxuICAgKiBcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9XG4gICAqL1xuICBpZD86IHN0cmluZztcblxuICAvKipcbiAgICogQ2xhc3NlcyB0byBhZGQgdG8gdGhlIHRleHQgZWxlbWVudC5cbiAgICogXG4gICAqIEBwcm9wZXJ0eSB7QXJyYXk8c3RyaW5nPn1cbiAgICogXG4gICAqIEBkZWZhdWx0IFtdXG4gICAqL1xuICBjbGFzc2VzOiBBcnJheTxzdHJpbmc+ID0gW107XG5cbiAgLyoqXG4gICAqIEFkZGl0aW9uYWwgb3B0aW9ucyBwYXNzZWQgYXV0b21hdGljYWxseSBieSBnYW1ld3JpdGVyLlxuICAgKiBcbiAgICogQHByb3BlcnR5IHsqfVxuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5zaXplIFRoZSBzaXplIG9mIHRoZSB0ZXh0LiBUaGlzIHNob3VsZCBiZSBhIHZhbHVlIGZyb20gMS0xMCB3aXRoIDEgYmVpbmcgZGVmYXVsdCBhbmQgZ2V0dGluZyBsYXJnZXIgYXMgaXQgZ2V0cyBjbG9zZXIgdG8gMTAuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmlkIEFuIGlkIHRvIGFkZCB0byB0aGUgdGV4dCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IG9wdGlvbnMuY2xhc3NlcyBDbGFzc2VzIHRvIGFkZCB0byB0aGUgdGV4dCBlbGVtZW50LlxuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0aW9uczogT2JqZWN0KSB7XG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuXG4gIH1cblxufTsiXX0=