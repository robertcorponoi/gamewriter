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
 */
function TextOptions(options) {
  _classCallCheck(this, TextOptions);

  _defineProperty(this, "size", 1);

  Object.assign(this, options);
};

exports["default"] = TextOptions;
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXh0L1RleHRPcHRpb25zLnRzIl0sIm5hbWVzIjpbIlRleHRPcHRpb25zIiwib3B0aW9ucyIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFFQTs7Ozs7Ozs7Ozs7OztJQUdxQkEsVztBQWVuQjs7OztBQUlBLHFCQUFZQyxPQUFaLEVBQTZCO0FBQUE7O0FBQUEsZ0NBUmQsQ0FRYzs7QUFFM0JDLEVBQUFBLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLElBQWQsRUFBb0JGLE9BQXBCO0FBRUQsQzs7O0FBRUYiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbi8qKlxyXG4gKiBEZXNjcmliZXMgdGhlIG9wdGlvbnMgYXZhaWxhYmxlIGZvciBhIHRleHQgbm9kZS5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRPcHRpb25zIHtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHNpemUgb2YgdGhlIHRleHQuXHJcbiAgICogXHJcbiAgICogVGhpcyBzaG91bGQgYmUgYSB2YWx1ZSBmcm9tIDEtMTAgd2l0aCAxIGJlaW5nIGRlZmF1bHQgYW5kIGdldHRpbmcgbGFyZ2VyIGFzIGl0IGdldHMgY2xvc2VyIHRvIDEwLlxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfVxyXG4gICAqIFxyXG4gICAqIEBkZWZhdWx0IDFcclxuICAgKi9cclxuICBzaXplOiBudW1iZXIgPSAxO1xyXG5cclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMuc2l6ZSBUaGUgc2l6ZSBvZiB0aGUgdGV4dC4gVGhpcyBzaG91bGQgYmUgYSB2YWx1ZSBmcm9tIDEtMTAgd2l0aCAxIGJlaW5nIGRlZmF1bHQgYW5kIGdldHRpbmcgbGFyZ2VyIGFzIGl0IGdldHMgY2xvc2VyIHRvIDEwLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IE9iamVjdCkge1xyXG5cclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XHJcblxyXG4gIH1cclxuXHJcbn07Il19