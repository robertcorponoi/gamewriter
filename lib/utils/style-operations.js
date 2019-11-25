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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9zdHlsZS1vcGVyYXRpb25zLnRzIl0sIm5hbWVzIjpbImdldE51bWJlckZyb21TdHlsZSIsInZhbHVlIiwibnVtIiwicmVwbGFjZSIsInBhcnNlSW50IiwiYWRkUHhUb051bWJlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUFPTyxTQUFTQSxrQkFBVCxDQUE0QkMsS0FBNUIsRUFBbUQ7QUFFeEQsTUFBTUMsR0FBVyxHQUFHRCxLQUFLLENBQUNFLE9BQU4sQ0FBYyxlQUFkLEVBQStCLEVBQS9CLENBQXBCO0FBRUEsU0FBT0MsUUFBUSxDQUFDRixHQUFELENBQWY7QUFFRDs7QUFBQTtBQUVEOzs7Ozs7OztBQU9PLFNBQVNHLGFBQVQsQ0FBdUJKLEtBQXZCLEVBQThDO0FBRW5ELG1CQUFVQSxLQUFWO0FBRUQiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbi8qKlxyXG4gKiBVc2VkIHRvIHN0cmlwIHB4LCBlbSwgcmVtLCBldGMuIGZyb20gY3NzIHN0eWxlcy5cclxuICogXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBUaGUgc3R5bGUgdmFsdWUgdG8gc3RyaXAgdGV4dCBmcm9tLlxyXG4gKiBcclxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyIGxlZnQgb3ZlciBhZnRlciBzdHJpcHBpbmcgdGhlIHRleHQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TnVtYmVyRnJvbVN0eWxlKHZhbHVlOiBzdHJpbmcpOiBudW1iZXIge1xyXG5cclxuICBjb25zdCBudW06IHN0cmluZyA9IHZhbHVlLnJlcGxhY2UoLyhweHxlbXxyZW18JSkvLCAnJyk7XHJcblxyXG4gIHJldHVybiBwYXJzZUludChudW0pO1xyXG5cclxufTtcclxuXHJcbi8qKlxyXG4gKiBBZGRzIHB4IHRvIGEgbnVtYmVyIHZhbHVlLlxyXG4gKiBcclxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFRoZSBudW1iZXIgdmFsdWUgdG8gYWRkIHB4IHRvLlxyXG4gKiBcclxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgbnVtYmVyIHZhbHVlIGFzIGEgcGl4ZWwgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWRkUHhUb051bWJlcih2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcclxuXHJcbiAgcmV0dXJuIGAke3ZhbHVlfXB4YDtcclxuXHJcbn0iXX0=