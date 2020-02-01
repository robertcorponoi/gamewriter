'use strict';
/**
 * Used to strip px, em, rem, etc. from css styles.
 * 
 * @param {string} value The style value to strip text from.
 * 
 * @returns {number} Returns the number left over after stripping the text.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNumberFromStyle = getNumberFromStyle;
exports.addPxToNumber = addPxToNumber;

function getNumberFromStyle(value) {
  var num = value.replace(/(px|em|rem|%)/, '');
  return parseInt(num);
}

;
/**
 * Adds px to a number value.
 * 
 * @param {number} value The number value to add px to.
 * 
 * @returns {string} Returns the number value as a pixel value.
 */

function addPxToNumber(value) {
  return "".concat(value, "px");
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9zdHlsZS1vcGVyYXRpb25zLnRzIl0sIm5hbWVzIjpbImdldE51bWJlckZyb21TdHlsZSIsInZhbHVlIiwibnVtIiwicmVwbGFjZSIsInBhcnNlSW50IiwiYWRkUHhUb051bWJlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUFPTyxTQUFTQSxrQkFBVCxDQUE0QkMsS0FBNUIsRUFBbUQ7QUFFeEQsTUFBTUMsR0FBVyxHQUFHRCxLQUFLLENBQUNFLE9BQU4sQ0FBYyxlQUFkLEVBQStCLEVBQS9CLENBQXBCO0FBRUEsU0FBT0MsUUFBUSxDQUFDRixHQUFELENBQWY7QUFFRDs7QUFBQTtBQUVEOzs7Ozs7OztBQU9PLFNBQVNHLGFBQVQsQ0FBdUJKLEtBQXZCLEVBQThDO0FBRW5ELG1CQUFVQSxLQUFWO0FBRUQiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuLyoqXG4gKiBVc2VkIHRvIHN0cmlwIHB4LCBlbSwgcmVtLCBldGMuIGZyb20gY3NzIHN0eWxlcy5cbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIFRoZSBzdHlsZSB2YWx1ZSB0byBzdHJpcCB0ZXh0IGZyb20uXG4gKiBcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG51bWJlciBsZWZ0IG92ZXIgYWZ0ZXIgc3RyaXBwaW5nIHRoZSB0ZXh0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TnVtYmVyRnJvbVN0eWxlKHZhbHVlOiBzdHJpbmcpOiBudW1iZXIge1xuXG4gIGNvbnN0IG51bTogc3RyaW5nID0gdmFsdWUucmVwbGFjZSgvKHB4fGVtfHJlbXwlKS8sICcnKTtcblxuICByZXR1cm4gcGFyc2VJbnQobnVtKTtcblxufTtcblxuLyoqXG4gKiBBZGRzIHB4IHRvIGEgbnVtYmVyIHZhbHVlLlxuICogXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVGhlIG51bWJlciB2YWx1ZSB0byBhZGQgcHggdG8uXG4gKiBcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIG51bWJlciB2YWx1ZSBhcyBhIHBpeGVsIHZhbHVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkUHhUb051bWJlcih2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcblxuICByZXR1cm4gYCR7dmFsdWV9cHhgO1xuXG59Il19