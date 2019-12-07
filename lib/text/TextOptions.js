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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXh0L1RleHRPcHRpb25zLnRzIl0sIm5hbWVzIjpbIlRleHRPcHRpb25zIiwib3B0aW9ucyIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFFQTs7Ozs7Ozs7Ozs7OztJQUdxQkEsVztBQW9DbkI7Ozs7OztBQU1BLHFCQUFZQyxPQUFaLEVBQTZCO0FBQUE7O0FBQUEsZ0NBL0JkLENBK0JjOztBQUFBOztBQUFBLG1DQWZKLEVBZUk7O0FBRTNCQyxFQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBYyxJQUFkLEVBQW9CRixPQUFwQjtBQUVELEM7OztBQUVGIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG4vKipcclxuICogRGVzY3JpYmVzIHRoZSBvcHRpb25zIGF2YWlsYWJsZSBmb3IgYSB0ZXh0IG5vZGUuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0T3B0aW9ucyB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBzaXplIG9mIHRoZSB0ZXh0LlxyXG4gICAqIFxyXG4gICAqIFRoaXMgc2hvdWxkIGJlIGEgdmFsdWUgZnJvbSAxLTEwIHdpdGggMSBiZWluZyBkZWZhdWx0IGFuZCBnZXR0aW5nIGxhcmdlciBhcyBpdCBnZXRzIGNsb3NlciB0byAxMC5cclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge251bWJlcn1cclxuICAgKiBcclxuICAgKiBAZGVmYXVsdCAxXHJcbiAgICovXHJcbiAgc2l6ZTogbnVtYmVyID0gMTtcclxuXHJcbiAgLyoqXHJcbiAgICogQW4gaWQgdG8gYWRkIHRvIHRoZSB0ZXh0IGVsZW1lbnQuXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9XHJcbiAgICovXHJcbiAgaWQ/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIENsYXNzZXMgdG8gYWRkIHRvIHRoZSB0ZXh0IGVsZW1lbnQuXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtBcnJheTxzdHJpbmc+fVxyXG4gICAqIFxyXG4gICAqIEBkZWZhdWx0IFtdXHJcbiAgICovXHJcbiAgY2xhc3NlczogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG5cclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIG9wdGlvbnMgcGFzc2VkIGF1dG9tYXRpY2FsbHkgYnkgZ2FtZXdyaXRlci5cclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkgeyp9XHJcbiAgICovXHJcbiAgW2tleTogc3RyaW5nXTogYW55O1xyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLnNpemUgVGhlIHNpemUgb2YgdGhlIHRleHQuIFRoaXMgc2hvdWxkIGJlIGEgdmFsdWUgZnJvbSAxLTEwIHdpdGggMSBiZWluZyBkZWZhdWx0IGFuZCBnZXR0aW5nIGxhcmdlciBhcyBpdCBnZXRzIGNsb3NlciB0byAxMC5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5pZCBBbiBpZCB0byBhZGQgdG8gdGhlIHRleHQgZWxlbWVudC5cclxuICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IG9wdGlvbnMuY2xhc3NlcyBDbGFzc2VzIHRvIGFkZCB0byB0aGUgdGV4dCBlbGVtZW50LlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IE9iamVjdCkge1xyXG5cclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XHJcblxyXG4gIH1cclxuXHJcbn07Il19