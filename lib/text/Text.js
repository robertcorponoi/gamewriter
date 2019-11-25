'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _uuid = _interopRequireDefault(require("../utils/uuid"));

var _TextOptions = _interopRequireDefault(require("./TextOptions"));

var _styleOperations = require("../utils/style-operations");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * The Text module represents a text object added to the game board.
 */
var Text =
/*#__PURE__*/
function () {
  /**
   * The id for this text node.
   * 
   * @private
   * 
   * @property {string}
   */

  /**
   * A reference to the options for this text node.
   * 
   * @private
   * 
   * @property {TextOptions}
   */

  /**
   * A reference to the element that contains the text.
   * 
   * @private
   * 
   * @property {HTMLSpanElement}
   */

  /**
   * The text to display.
   * 
   * @private
   * 
   * @property {string}
   */

  /**
   * A reference to the y position of this text on the game board.
   * 
   * @private
   * 
   * @property {number}
   */

  /**
   * A reference to the y position of this text on the game board.
   * 
   * @private
   * 
   * @property {number}
   */

  /**
   * The size of the text.
   * 
   * @private
   * 
   * @property {number}
   */

  /**
   * @param {string} text The text to display.
   * @param {number} x The x coordinate of the text in relation to the game board.
   * @param {number} y The y coordinate of the text in relation to the game board.
   * @param {Object} [options]
   * @param {number} [options.size=1] The size of the text. This should be a value from 1-10 with 1 being default and getting larger as it gets closer to 10.
   * @param {string|RegExp} [options.dynamic] The portion of the text that should be dynamic. This can be either a string or a regex value.
   */
  function Text(text) {
    var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, Text);

    _defineProperty(this, "_id", (0, _uuid["default"])());

    _defineProperty(this, "_options", void 0);

    _defineProperty(this, "_el", document.createElement('span'));

    _defineProperty(this, "_text", void 0);

    _defineProperty(this, "_x", void 0);

    _defineProperty(this, "_y", void 0);

    _defineProperty(this, "_size", void 0);

    this._options = new _TextOptions["default"](options);
    this._el.textContent = text;
    this._text = text;
    this._x = x;
    this._y = y;
    this._size = this._options.size;

    this._setup();
  }
  /**
   * Returns the id for this text node.
   * 
   * @returns {string}
   */


  _createClass(Text, [{
    key: "move",

    /**
     * Changes the x and y position of the text element.
     * 
     * This is syntatic sugar to changing the x and y positions independently.
     * 
     * @param {number} x The x position to move to.
     * @param {number} y The y position to move to.
     */
    value: function move(x, y) {
      this.x = x;
      this.y = y;
    }
    /**
     * Hides the text element.
     */

  }, {
    key: "hide",
    value: function hide() {
      this._el.style.visibility = 'hidden';
    }
    /**
     * Shows the text element.
     */

  }, {
    key: "show",
    value: function show() {
      this._el.style.visibility = 'visible';
    }
    /**
     * Sets up the position of this element and then adds it to the document.
     * 
     * @private
     */

  }, {
    key: "_setup",
    value: function _setup() {
      this._el.style.fontSize = "".concat(this._options.size, "rem");
      this._el.style.position = 'absolute';
      this._el.style.top = (0, _styleOperations.addPxToNumber)(this._options.canvasPosition.top + this._y);
      this._el.style.left = (0, _styleOperations.addPxToNumber)(this._options.canvasPosition.left + this._x);
      this._el.style.visibility = 'hidden';
    }
  }, {
    key: "id",
    get: function get() {
      return this._id;
    }
    /**
     * Returns the element that contains the text.
     * 
     * @returns {HTMLSpanElement}
     */

  }, {
    key: "el",
    get: function get() {
      return this._el;
    }
    /**
     * Returns the x position of the text in relation to the game.
     * 
     * @returns {number}
     */

  }, {
    key: "x",
    get: function get() {
      return this._x;
    }
    /**
     * Returns the y position of the text in relation to the game.
     * 
     * @returns {number}
     */
    ,

    /**
     * Sets a new x position for the text.
     * 
     * @param {number} newX The new x position of the text.
     */
    set: function set(newX) {
      this._x = newX;
      this._el.style.left = (0, _styleOperations.addPxToNumber)(this._options.canvasPosition.left + this._x);
    }
    /**
     * Sets a new y position for the text.
     * 
     * @param {number} newY The new y position of the text.
     */

  }, {
    key: "y",
    get: function get() {
      return this._y;
    }
    /**
     * Returns the size of the text.
     * 
     * @returns {number}
     */
    ,
    set: function set(newY) {
      this._y = newY;
      this._el.style.top = (0, _styleOperations.addPxToNumber)(this._options.canvasPosition.top + this._y);
    }
    /**
     * Changes the size of the text.
     * 
     * @param {number} newSize The new size to set for the text.
     */

  }, {
    key: "size",
    get: function get() {
      return this._size;
    }
    /**
     * Returns the text displayed.
     * 
     * @returns {string}
     */
    ,
    set: function set(newSize) {
      this._options._size = newSize;
      this._el.style.fontSize = "".concat(newSize, "rem");
    }
    /**
     * Changes the text displayed.
     * 
     * @param {string} newText The text to display.
     */

  }, {
    key: "text",
    get: function get() {
      return this._text;
    },
    set: function set(newText) {
      this._text = newText;
      this._el.textContent = newText;
    }
  }]);

  return Text;
}();

exports["default"] = Text;
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXh0L1RleHQudHMiXSwibmFtZXMiOlsiVGV4dCIsInRleHQiLCJ4IiwieSIsIm9wdGlvbnMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJfb3B0aW9ucyIsIlRleHRPcHRpb25zIiwiX2VsIiwidGV4dENvbnRlbnQiLCJfdGV4dCIsIl94IiwiX3kiLCJfc2l6ZSIsInNpemUiLCJfc2V0dXAiLCJzdHlsZSIsInZpc2liaWxpdHkiLCJmb250U2l6ZSIsInBvc2l0aW9uIiwidG9wIiwiY2FudmFzUG9zaXRpb24iLCJsZWZ0IiwiX2lkIiwibmV3WCIsIm5ld1kiLCJuZXdTaXplIiwibmV3VGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBS0E7OztJQUdxQkEsSTs7O0FBRW5COzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVFBLGdCQUFZQyxJQUFaLEVBQThFO0FBQUEsUUFBcERDLENBQW9ELHVFQUF4QyxDQUF3QztBQUFBLFFBQXJDQyxDQUFxQyx1RUFBekIsQ0FBeUI7QUFBQSxRQUF0QkMsT0FBc0IsdUVBQUosRUFBSTs7QUFBQTs7QUFBQSxpQ0FoRXhELHVCQWdFd0Q7O0FBQUE7O0FBQUEsaUNBOUMvQ0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBOEMrQzs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFFNUUsU0FBS0MsUUFBTCxHQUFnQixJQUFJQyx1QkFBSixDQUFnQkosT0FBaEIsQ0FBaEI7QUFFQSxTQUFLSyxHQUFMLENBQVNDLFdBQVQsR0FBdUJULElBQXZCO0FBRUEsU0FBS1UsS0FBTCxHQUFhVixJQUFiO0FBRUEsU0FBS1csRUFBTCxHQUFVVixDQUFWO0FBRUEsU0FBS1csRUFBTCxHQUFVVixDQUFWO0FBRUEsU0FBS1csS0FBTCxHQUFhLEtBQUtQLFFBQUwsQ0FBY1EsSUFBM0I7O0FBRUEsU0FBS0MsTUFBTDtBQUVEO0FBRUQ7Ozs7Ozs7Ozs7QUE4RkE7Ozs7Ozs7O3lCQVFLZCxDLEVBQVdDLEMsRUFBVztBQUV6QixXQUFLRCxDQUFMLEdBQVNBLENBQVQ7QUFFQSxXQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFFRDtBQUVEOzs7Ozs7MkJBR087QUFFTCxXQUFLTSxHQUFMLENBQVNRLEtBQVQsQ0FBZUMsVUFBZixHQUE0QixRQUE1QjtBQUVEO0FBRUQ7Ozs7OzsyQkFHTztBQUVMLFdBQUtULEdBQUwsQ0FBU1EsS0FBVCxDQUFlQyxVQUFmLEdBQTRCLFNBQTVCO0FBRUQ7QUFFRDs7Ozs7Ozs7NkJBS2lCO0FBRWYsV0FBS1QsR0FBTCxDQUFTUSxLQUFULENBQWVFLFFBQWYsYUFBNkIsS0FBS1osUUFBTCxDQUFjUSxJQUEzQztBQUVBLFdBQUtOLEdBQUwsQ0FBU1EsS0FBVCxDQUFlRyxRQUFmLEdBQTBCLFVBQTFCO0FBRUEsV0FBS1gsR0FBTCxDQUFTUSxLQUFULENBQWVJLEdBQWYsR0FBcUIsb0NBQWMsS0FBS2QsUUFBTCxDQUFjZSxjQUFkLENBQTZCRCxHQUE3QixHQUFtQyxLQUFLUixFQUF0RCxDQUFyQjtBQUVBLFdBQUtKLEdBQUwsQ0FBU1EsS0FBVCxDQUFlTSxJQUFmLEdBQXNCLG9DQUFjLEtBQUtoQixRQUFMLENBQWNlLGNBQWQsQ0FBNkJDLElBQTdCLEdBQW9DLEtBQUtYLEVBQXZELENBQXRCO0FBRUEsV0FBS0gsR0FBTCxDQUFTUSxLQUFULENBQWVDLFVBQWYsR0FBNEIsUUFBNUI7QUFFRDs7O3dCQTVJZ0I7QUFBRSxhQUFPLEtBQUtNLEdBQVo7QUFBa0I7QUFFckM7Ozs7Ozs7O3dCQUswQjtBQUFFLGFBQU8sS0FBS2YsR0FBWjtBQUFrQjtBQUU5Qzs7Ozs7Ozs7d0JBS2dCO0FBQUUsYUFBTyxLQUFLRyxFQUFaO0FBQWlCO0FBRW5DOzs7Ozs7O0FBcUJBOzs7OztzQkFLTWEsSSxFQUFjO0FBRWxCLFdBQUtiLEVBQUwsR0FBVWEsSUFBVjtBQUVBLFdBQUtoQixHQUFMLENBQVNRLEtBQVQsQ0FBZU0sSUFBZixHQUFzQixvQ0FBYyxLQUFLaEIsUUFBTCxDQUFjZSxjQUFkLENBQTZCQyxJQUE3QixHQUFvQyxLQUFLWCxFQUF2RCxDQUF0QjtBQUVEO0FBRUQ7Ozs7Ozs7O3dCQTdCZ0I7QUFBRSxhQUFPLEtBQUtDLEVBQVo7QUFBaUI7QUFFbkM7Ozs7OztzQkFnQ01hLEksRUFBYztBQUVsQixXQUFLYixFQUFMLEdBQVVhLElBQVY7QUFFQSxXQUFLakIsR0FBTCxDQUFTUSxLQUFULENBQWVJLEdBQWYsR0FBcUIsb0NBQWMsS0FBS2QsUUFBTCxDQUFjZSxjQUFkLENBQTZCRCxHQUE3QixHQUFtQyxLQUFLUixFQUF0RCxDQUFyQjtBQUVEO0FBRUQ7Ozs7Ozs7O3dCQW5DbUI7QUFBRSxhQUFPLEtBQUtDLEtBQVo7QUFBb0I7QUFFekM7Ozs7OztzQkFzQ1NhLE8sRUFBaUI7QUFFeEIsV0FBS3BCLFFBQUwsQ0FBY08sS0FBZCxHQUFzQmEsT0FBdEI7QUFFQSxXQUFLbEIsR0FBTCxDQUFTUSxLQUFULENBQWVFLFFBQWYsYUFBNkJRLE9BQTdCO0FBRUQ7QUFFRDs7Ozs7Ozs7d0JBekNtQjtBQUFFLGFBQU8sS0FBS2hCLEtBQVo7QUFBb0IsSztzQkE4Q2hDaUIsTyxFQUFpQjtBQUV4QixXQUFLakIsS0FBTCxHQUFhaUIsT0FBYjtBQUVBLFdBQUtuQixHQUFMLENBQVNDLFdBQVQsR0FBdUJrQixPQUF2QjtBQUVEOzs7Ozs7O0FBdURGIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG5pbXBvcnQgdXVpZHY0IGZyb20gJy4uL3V0aWxzL3V1aWQnO1xyXG5pbXBvcnQgVGV4dE9wdGlvbnMgZnJvbSAnLi9UZXh0T3B0aW9ucyc7XHJcbmltcG9ydCB7IGdldE51bWJlckZyb21TdHlsZSwgYWRkUHhUb051bWJlciB9IGZyb20gJy4uL3V0aWxzL3N0eWxlLW9wZXJhdGlvbnMnO1xyXG5cclxuaW1wb3J0IFRleHRQb3NpdGlvbiBmcm9tICcuLi9pbnRlcmZhY2VzL1RleHRQb3NpdGlvbic7XHJcbmltcG9ydCBDYW52YXNQb3NpdGlvbiBmcm9tICcuLi9pbnRlcmZhY2VzL0NhbnZhc1Bvc2l0aW9uJztcclxuXHJcbi8qKlxyXG4gKiBUaGUgVGV4dCBtb2R1bGUgcmVwcmVzZW50cyBhIHRleHQgb2JqZWN0IGFkZGVkIHRvIHRoZSBnYW1lIGJvYXJkLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dCB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBpZCBmb3IgdGhpcyB0ZXh0IG5vZGUuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge3N0cmluZ31cclxuICAgKi9cclxuICBwcml2YXRlIF9pZDogc3RyaW5nID0gdXVpZHY0KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBvcHRpb25zIGZvciB0aGlzIHRleHQgbm9kZS5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7VGV4dE9wdGlvbnN9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfb3B0aW9uczogVGV4dE9wdGlvbnM7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBlbGVtZW50IHRoYXQgY29udGFpbnMgdGhlIHRleHQuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge0hUTUxTcGFuRWxlbWVudH1cclxuICAgKi9cclxuICBwcml2YXRlIF9lbDogSFRNTFNwYW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgdGV4dCB0byBkaXNwbGF5LlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfdGV4dDogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgeSBwb3NpdGlvbiBvZiB0aGlzIHRleHQgb24gdGhlIGdhbWUgYm9hcmQuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge251bWJlcn1cclxuICAgKi9cclxuICBwcml2YXRlIF94OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSB5IHBvc2l0aW9uIG9mIHRoaXMgdGV4dCBvbiB0aGUgZ2FtZSBib2FyZC5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX3k6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHNpemUgb2YgdGhlIHRleHQuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge251bWJlcn1cclxuICAgKi9cclxuICBwcml2YXRlIF9zaXplOiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IFRoZSB0ZXh0IHRvIGRpc3BsYXkuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHggVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgdGV4dCBpbiByZWxhdGlvbiB0byB0aGUgZ2FtZSBib2FyZC5cclxuICAgKiBAcGFyYW0ge251bWJlcn0geSBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSB0ZXh0IGluIHJlbGF0aW9uIHRvIHRoZSBnYW1lIGJvYXJkLlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cclxuICAgKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMuc2l6ZT0xXSBUaGUgc2l6ZSBvZiB0aGUgdGV4dC4gVGhpcyBzaG91bGQgYmUgYSB2YWx1ZSBmcm9tIDEtMTAgd2l0aCAxIGJlaW5nIGRlZmF1bHQgYW5kIGdldHRpbmcgbGFyZ2VyIGFzIGl0IGdldHMgY2xvc2VyIHRvIDEwLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfFJlZ0V4cH0gW29wdGlvbnMuZHluYW1pY10gVGhlIHBvcnRpb24gb2YgdGhlIHRleHQgdGhhdCBzaG91bGQgYmUgZHluYW1pYy4gVGhpcyBjYW4gYmUgZWl0aGVyIGEgc3RyaW5nIG9yIGEgcmVnZXggdmFsdWUuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IodGV4dDogc3RyaW5nLCB4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCBvcHRpb25zOiBPYmplY3QgPSB7fSkge1xyXG5cclxuICAgIHRoaXMuX29wdGlvbnMgPSBuZXcgVGV4dE9wdGlvbnMob3B0aW9ucyk7XHJcblxyXG4gICAgdGhpcy5fZWwudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG5cclxuICAgIHRoaXMuX3RleHQgPSB0ZXh0O1xyXG5cclxuICAgIHRoaXMuX3ggPSB4O1xyXG5cclxuICAgIHRoaXMuX3kgPSB5O1xyXG5cclxuICAgIHRoaXMuX3NpemUgPSB0aGlzLl9vcHRpb25zLnNpemU7XHJcblxyXG4gICAgdGhpcy5fc2V0dXAoKTtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBpZCBmb3IgdGhpcyB0ZXh0IG5vZGUuXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgKi9cclxuICBnZXQgaWQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX2lkOyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIGVsZW1lbnQgdGhhdCBjb250YWlucyB0aGUgdGV4dC5cclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7SFRNTFNwYW5FbGVtZW50fVxyXG4gICAqL1xyXG4gIGdldCBlbCgpOiBIVE1MU3BhbkVsZW1lbnQgeyByZXR1cm4gdGhpcy5fZWw7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgeCBwb3NpdGlvbiBvZiB0aGUgdGV4dCBpbiByZWxhdGlvbiB0byB0aGUgZ2FtZS5cclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIGdldCB4KCk6IG51bWJlciB7IHJldHVybiB0aGlzLl94OyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIHkgcG9zaXRpb24gb2YgdGhlIHRleHQgaW4gcmVsYXRpb24gdG8gdGhlIGdhbWUuXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge251bWJlcn1cclxuICAgKi9cclxuICBnZXQgeSgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5feTsgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBzaXplIG9mIHRoZSB0ZXh0LlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgZ2V0IHNpemUoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3NpemU7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgdGV4dCBkaXNwbGF5ZWQuXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgKi9cclxuICBnZXQgdGV4dCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fdGV4dDsgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIGEgbmV3IHggcG9zaXRpb24gZm9yIHRoZSB0ZXh0LlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBuZXdYIFRoZSBuZXcgeCBwb3NpdGlvbiBvZiB0aGUgdGV4dC5cclxuICAgKi9cclxuICBzZXQgeChuZXdYOiBudW1iZXIpIHtcclxuXHJcbiAgICB0aGlzLl94ID0gbmV3WDtcclxuXHJcbiAgICB0aGlzLl9lbC5zdHlsZS5sZWZ0ID0gYWRkUHhUb051bWJlcih0aGlzLl9vcHRpb25zLmNhbnZhc1Bvc2l0aW9uLmxlZnQgKyB0aGlzLl94KTtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIGEgbmV3IHkgcG9zaXRpb24gZm9yIHRoZSB0ZXh0LlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBuZXdZIFRoZSBuZXcgeSBwb3NpdGlvbiBvZiB0aGUgdGV4dC5cclxuICAgKi9cclxuICBzZXQgeShuZXdZOiBudW1iZXIpIHtcclxuXHJcbiAgICB0aGlzLl95ID0gbmV3WTtcclxuXHJcbiAgICB0aGlzLl9lbC5zdHlsZS50b3AgPSBhZGRQeFRvTnVtYmVyKHRoaXMuX29wdGlvbnMuY2FudmFzUG9zaXRpb24udG9wICsgdGhpcy5feSk7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hhbmdlcyB0aGUgc2l6ZSBvZiB0aGUgdGV4dC5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge251bWJlcn0gbmV3U2l6ZSBUaGUgbmV3IHNpemUgdG8gc2V0IGZvciB0aGUgdGV4dC5cclxuICAgKi9cclxuICBzZXQgc2l6ZShuZXdTaXplOiBudW1iZXIpIHtcclxuXHJcbiAgICB0aGlzLl9vcHRpb25zLl9zaXplID0gbmV3U2l6ZTtcclxuXHJcbiAgICB0aGlzLl9lbC5zdHlsZS5mb250U2l6ZSA9IGAke25ld1NpemV9cmVtYDtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGFuZ2VzIHRoZSB0ZXh0IGRpc3BsYXllZC5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3VGV4dCBUaGUgdGV4dCB0byBkaXNwbGF5LlxyXG4gICAqL1xyXG4gIHNldCB0ZXh0KG5ld1RleHQ6IHN0cmluZykge1xyXG5cclxuICAgIHRoaXMuX3RleHQgPSBuZXdUZXh0O1xyXG5cclxuICAgIHRoaXMuX2VsLnRleHRDb250ZW50ID0gbmV3VGV4dDtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGFuZ2VzIHRoZSB4IGFuZCB5IHBvc2l0aW9uIG9mIHRoZSB0ZXh0IGVsZW1lbnQuXHJcbiAgICogXHJcbiAgICogVGhpcyBpcyBzeW50YXRpYyBzdWdhciB0byBjaGFuZ2luZyB0aGUgeCBhbmQgeSBwb3NpdGlvbnMgaW5kZXBlbmRlbnRseS5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge251bWJlcn0geCBUaGUgeCBwb3NpdGlvbiB0byBtb3ZlIHRvLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5IFRoZSB5IHBvc2l0aW9uIHRvIG1vdmUgdG8uXHJcbiAgICovXHJcbiAgbW92ZSh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG5cclxuICAgIHRoaXMueCA9IHg7XHJcblxyXG4gICAgdGhpcy55ID0geTtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBIaWRlcyB0aGUgdGV4dCBlbGVtZW50LlxyXG4gICAqL1xyXG4gIGhpZGUoKSB7XHJcblxyXG4gICAgdGhpcy5fZWwuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNob3dzIHRoZSB0ZXh0IGVsZW1lbnQuXHJcbiAgICovXHJcbiAgc2hvdygpIHtcclxuXHJcbiAgICB0aGlzLl9lbC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgdXAgdGhlIHBvc2l0aW9uIG9mIHRoaXMgZWxlbWVudCBhbmQgdGhlbiBhZGRzIGl0IHRvIHRoZSBkb2N1bWVudC5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX3NldHVwKCkge1xyXG5cclxuICAgIHRoaXMuX2VsLnN0eWxlLmZvbnRTaXplID0gYCR7dGhpcy5fb3B0aW9ucy5zaXplfXJlbWA7XHJcblxyXG4gICAgdGhpcy5fZWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG5cclxuICAgIHRoaXMuX2VsLnN0eWxlLnRvcCA9IGFkZFB4VG9OdW1iZXIodGhpcy5fb3B0aW9ucy5jYW52YXNQb3NpdGlvbi50b3AgKyB0aGlzLl95KTtcclxuXHJcbiAgICB0aGlzLl9lbC5zdHlsZS5sZWZ0ID0gYWRkUHhUb051bWJlcih0aGlzLl9vcHRpb25zLmNhbnZhc1Bvc2l0aW9uLmxlZnQgKyB0aGlzLl94KTtcclxuXHJcbiAgICB0aGlzLl9lbC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcblxyXG4gIH1cclxuXHJcbn07Il19