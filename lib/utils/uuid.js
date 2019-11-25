'use strict';
/**
 * Generates a v4 uuid.
 * 
 * @returns {string}
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = uuidv4;

function uuidv4() {
  // @ts-ignore
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
    return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy91dWlkLnRzIl0sIm5hbWVzIjpbInV1aWR2NCIsInJlcGxhY2UiLCJjIiwiY3J5cHRvIiwiZ2V0UmFuZG9tVmFsdWVzIiwiVWludDhBcnJheSIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUVBOzs7Ozs7Ozs7OztBQUtlLFNBQVNBLE1BQVQsR0FBMEI7QUFFdkM7QUFDQSxTQUFPLENBQUMsQ0FBQyxHQUFELElBQVEsQ0FBQyxHQUFULEdBQWUsQ0FBQyxHQUFoQixHQUFzQixDQUFDLEdBQXZCLEdBQTZCLENBQUMsSUFBL0IsRUFBcUNDLE9BQXJDLENBQTZDLFFBQTdDLEVBQXVELFVBQUNDLENBQUQ7QUFBQSxXQUU1RCxDQUFDQSxDQUFDLEdBQUdDLE1BQU0sQ0FBQ0MsZUFBUCxDQUF1QixJQUFJQyxVQUFKLENBQWUsQ0FBZixDQUF2QixFQUEwQyxDQUExQyxJQUErQyxNQUFNSCxDQUFDLEdBQUcsQ0FBOUQsRUFBaUVJLFFBQWpFLENBQTBFLEVBQTFFLENBRjREO0FBQUEsR0FBdkQsQ0FBUDtBQU1EIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG4vKipcclxuICogR2VuZXJhdGVzIGEgdjQgdXVpZC5cclxuICogXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1dWlkdjQoKTogc3RyaW5nIHtcclxuXHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIHJldHVybiAoWzFlN10gKyAtMWUzICsgLTRlMyArIC04ZTMgKyAtMWUxMSkucmVwbGFjZSgvWzAxOF0vZywgKGM6IG51bWJlcikgPT5cclxuXHJcbiAgICAoYyBeIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoMSkpWzBdICYgMTUgPj4gYyAvIDQpLnRvU3RyaW5nKDE2KVxyXG5cclxuICApO1xyXG5cclxufSJdfQ==