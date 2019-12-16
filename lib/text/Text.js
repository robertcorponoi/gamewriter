'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _TextOptions = _interopRequireDefault(require("./TextOptions"));

var _uuid = _interopRequireDefault(require("../utils/uuid"));

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
   * The part of the text that is dynamic.
   * 
   * @private
   * 
   * @property {string}
   */

  /**
   * The original text unaltered by dynamic parts.
   * 
   * @private
   * 
   * @property {string}
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

    _defineProperty(this, "_dynamicText", void 0);

    _defineProperty(this, "_originalText", void 0);

    this._options = new _TextOptions["default"](options);
    this._el.textContent = text;
    this._text = text;
    this._originalText = this._text;
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
     * Sets a piece of the text to be dynamic.
     * 
     * This dynamic part of the text can then be easily changed with `changeDynamic`.
     * 
     * @param {string} text The part of the text that should be dynamic.
     */

  }, {
    key: "setDynamic",
    value: function setDynamic(text) {
      if (!this._text.includes(text)) return;
      this._dynamicText = text;
    }
    /**
     * Change the text content of the dynamic text portion of the text.
     * 
     * @param {string} text The text to display in place of the dynamic text.
     */

  }, {
    key: "changeDynamic",
    value: function changeDynamic(text) {
      if (!this._dynamicText) return;
      this._text = this._originalText;
      this.text = this._text.replace(this._dynamicText, text);
    }
    /**
     * Sets up the position of this element and then adds it to the document.
     * 
     * @private
     */

  }, {
    key: "_setup",
    value: function _setup() {
      var _this = this;

      this._el.style.fontSize = "".concat(this._options.size, "rem");
      if (this._options.id) this._el.id = this._options.id;
      this._el.style.position = 'absolute';
      this._el.style.top = (0, _styleOperations.addPxToNumber)(this._options.canvasPosition.top + this._y);
      this._el.style.left = (0, _styleOperations.addPxToNumber)(this._options.canvasPosition.left + this._x);
      this._el.style.visibility = 'hidden';

      this._options.classes.map(function (cl) {
        return _this._el.classList.add(cl);
      });

      this._options.globalClasses.map(function (cl) {
        return _this._el.classList.add(cl);
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXh0L1RleHQudHMiXSwibmFtZXMiOlsiVGV4dCIsInRleHQiLCJ4IiwieSIsIm9wdGlvbnMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJfb3B0aW9ucyIsIlRleHRPcHRpb25zIiwiX2VsIiwidGV4dENvbnRlbnQiLCJfdGV4dCIsIl9vcmlnaW5hbFRleHQiLCJfeCIsIl95IiwiX3NpemUiLCJzaXplIiwiX3NldHVwIiwic3R5bGUiLCJ2aXNpYmlsaXR5IiwiaW5jbHVkZXMiLCJfZHluYW1pY1RleHQiLCJyZXBsYWNlIiwiZm9udFNpemUiLCJpZCIsInBvc2l0aW9uIiwidG9wIiwiY2FudmFzUG9zaXRpb24iLCJsZWZ0IiwiY2xhc3NlcyIsIm1hcCIsImNsIiwiY2xhc3NMaXN0IiwiYWRkIiwiZ2xvYmFsQ2xhc3NlcyIsIl9pZCIsIm5ld1giLCJuZXdZIiwibmV3U2l6ZSIsIm5ld1RleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHcUJBLEk7OztBQUVuQjs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFRQSxnQkFBWUMsSUFBWixFQUE4RTtBQUFBLFFBQXBEQyxDQUFvRCx1RUFBeEMsQ0FBd0M7QUFBQSxRQUFyQ0MsQ0FBcUMsdUVBQXpCLENBQXlCO0FBQUEsUUFBdEJDLE9BQXNCLHVFQUFKLEVBQUk7O0FBQUE7O0FBQUEsaUNBbEZ4RCx1QkFrRndEOztBQUFBOztBQUFBLGlDQWhFL0NDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQWdFK0M7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBRTVFLFNBQUtDLFFBQUwsR0FBZ0IsSUFBSUMsdUJBQUosQ0FBZ0JKLE9B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R0FBTCxDQUFTUyxLQUFULENBQWVVLElBQWYsR0FBc0Isb0NBQWMsS0FBS3JCLFFBQUwsQ0FBY29CLGNBQWQsQ0FBNkJDLElBQTdCLEdBQW9DLEtBQUtmLEVBQXZELENBQXRCO0FBRUQ7QUFFRDs7Ozs7Ozs7d0JBN0JnQjtBQUFFLGFBQU8sS0FBS0MsRUFBWjtBQUFpQjtBQUVuQzs7Ozs7O3NCQWdDTXVCLEksRUFBYztBQUVsQixXQUFLdkIsRUFBTCxHQUFVdUIsSUFBVjtBQUVBLFdBQUs1QixHQUFMLENBQVNTLEtBQVQsQ0FBZVEsR0FBZixHQUFxQixvQ0FBYyxLQUFLbkIsUUFBTCxDQUFjb0IsY0FBZCxDQUE2QkQsR0FBN0IsR0FBbUMsS0FBS1osRUFBdEQsQ0FBckI7QUFFRDtBQUVEOzs7Ozs7Ozt3QkFuQ21CO0FBQUUsYUFBTyxLQUFLQyxLQUFaO0FBQW9CO0FBRXpDOzs7Ozs7c0JBc0NTdUIsTyxFQUFpQjtBQUV4QixXQUFLL0IsUUFBTCxDQUFjUSxLQUFkLEdBQXNCdUIsT0FBdEI7QUFFQSxXQUFLN0IsR0FBTCxDQUFTUyxLQUFULENBQWVLLFFBQWYsYUFBNkJlLE9BQTdCO0FBRUQ7QUFFRDs7Ozs7Ozs7d0JBekNtQjtBQUFFLGFBQU8sS0FBSzNCLEtBQVo7QUFBb0IsSztzQkE4Q2hDNEIsTyxFQUFpQjtBQUV4QixXQUFLNUIsS0FBTCxHQUFhNEIsT0FBYjtBQUVBLFdBQUs5QixHQUFMLENBQVNDLFdBQVQsR0FBdUI2QixPQUF2QjtBQUVEOzs7Ozs7O0FBMkZGIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG5pbXBvcnQgVGV4dE9wdGlvbnMgZnJvbSAnLi9UZXh0T3B0aW9ucyc7XHJcblxyXG5pbXBvcnQgdXVpZHY0IGZyb20gJy4uL3V0aWxzL3V1aWQnO1xyXG5pbXBvcnQgeyBhZGRQeFRvTnVtYmVyIH0gZnJvbSAnLi4vdXRpbHMvc3R5bGUtb3BlcmF0aW9ucyc7XHJcblxyXG4vKipcclxuICogVGhlIFRleHQgbW9kdWxlIHJlcHJlc2VudHMgYSB0ZXh0IG9iamVjdCBhZGRlZCB0byB0aGUgZ2FtZSBib2FyZC5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHQge1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgaWQgZm9yIHRoaXMgdGV4dCBub2RlLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfaWQ6IHN0cmluZyA9IHV1aWR2NCgpO1xyXG5cclxuICAvKipcclxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgb3B0aW9ucyBmb3IgdGhpcyB0ZXh0IG5vZGUuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge1RleHRPcHRpb25zfVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX29wdGlvbnM6IFRleHRPcHRpb25zO1xyXG5cclxuICAvKipcclxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgZWxlbWVudCB0aGF0IGNvbnRhaW5zIHRoZSB0ZXh0LlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtIVE1MU3BhbkVsZW1lbnR9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfZWw6IEhUTUxTcGFuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHRleHQgdG8gZGlzcGxheS5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX3RleHQ6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIHkgcG9zaXRpb24gb2YgdGhpcyB0ZXh0IG9uIHRoZSBnYW1lIGJvYXJkLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfeDogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgeSBwb3NpdGlvbiBvZiB0aGlzIHRleHQgb24gdGhlIGdhbWUgYm9hcmQuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge251bWJlcn1cclxuICAgKi9cclxuICBwcml2YXRlIF95OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBzaXplIG9mIHRoZSB0ZXh0LlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfc2l6ZTogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgcGFydCBvZiB0aGUgdGV4dCB0aGF0IGlzIGR5bmFtaWMuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge3N0cmluZ31cclxuICAgKi9cclxuICBwcml2YXRlIF9keW5hbWljVGV4dD86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIG9yaWdpbmFsIHRleHQgdW5hbHRlcmVkIGJ5IGR5bmFtaWMgcGFydHMuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge3N0cmluZ31cclxuICAgKi9cclxuICBwcml2YXRlIF9vcmlnaW5hbFRleHQ6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgVGhlIHRleHQgdG8gZGlzcGxheS5cclxuICAgKiBAcGFyYW0ge251bWJlcn0geCBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSB0ZXh0IGluIHJlbGF0aW9uIHRvIHRoZSBnYW1lIGJvYXJkLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5IFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIHRleHQgaW4gcmVsYXRpb24gdG8gdGhlIGdhbWUgYm9hcmQuXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5zaXplPTFdIFRoZSBzaXplIG9mIHRoZSB0ZXh0LiBUaGlzIHNob3VsZCBiZSBhIHZhbHVlIGZyb20gMS0xMCB3aXRoIDEgYmVpbmcgZGVmYXVsdCBhbmQgZ2V0dGluZyBsYXJnZXIgYXMgaXQgZ2V0cyBjbG9zZXIgdG8gMTAuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd8UmVnRXhwfSBbb3B0aW9ucy5keW5hbWljXSBUaGUgcG9ydGlvbiBvZiB0aGUgdGV4dCB0aGF0IHNob3VsZCBiZSBkeW5hbWljLiBUaGlzIGNhbiBiZSBlaXRoZXIgYSBzdHJpbmcgb3IgYSByZWdleCB2YWx1ZS5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcih0ZXh0OiBzdHJpbmcsIHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDAsIG9wdGlvbnM6IE9iamVjdCA9IHt9KSB7XHJcblxyXG4gICAgdGhpcy5fb3B0aW9ucyA9IG5ldyBUZXh0T3B0aW9ucyhvcHRpb25zKTtcclxuXHJcbiAgICB0aGlzLl9lbC50ZXh0Q29udGVudCA9IHRleHQ7XHJcblxyXG4gICAgdGhpcy5fdGV4dCA9IHRleHQ7XHJcblxyXG4gICAgdGhpcy5fb3JpZ2luYWxUZXh0ID0gdGhpcy5fdGV4dDtcclxuXHJcbiAgICB0aGlzLl94ID0geDtcclxuXHJcbiAgICB0aGlzLl95ID0geTtcclxuXHJcbiAgICB0aGlzLl9zaXplID0gdGhpcy5fb3B0aW9ucy5zaXplO1xyXG5cclxuICAgIHRoaXMuX3NldHVwKCk7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgaWQgZm9yIHRoaXMgdGV4dCBub2RlLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAgICovXHJcbiAgZ2V0IGlkKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9pZDsgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBlbGVtZW50IHRoYXQgY29udGFpbnMgdGhlIHRleHQuXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge0hUTUxTcGFuRWxlbWVudH1cclxuICAgKi9cclxuICBnZXQgZWwoKTogSFRNTFNwYW5FbGVtZW50IHsgcmV0dXJuIHRoaXMuX2VsOyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIHggcG9zaXRpb24gb2YgdGhlIHRleHQgaW4gcmVsYXRpb24gdG8gdGhlIGdhbWUuXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge251bWJlcn1cclxuICAgKi9cclxuICBnZXQgeCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5feDsgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSB5IHBvc2l0aW9uIG9mIHRoZSB0ZXh0IGluIHJlbGF0aW9uIHRvIHRoZSBnYW1lLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgZ2V0IHkoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3k7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgc2l6ZSBvZiB0aGUgdGV4dC5cclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIGdldCBzaXplKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9zaXplOyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIHRleHQgZGlzcGxheWVkLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAgICovXHJcbiAgZ2V0IHRleHQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX3RleHQ7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyBhIG5ldyB4IHBvc2l0aW9uIGZvciB0aGUgdGV4dC5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge251bWJlcn0gbmV3WCBUaGUgbmV3IHggcG9zaXRpb24gb2YgdGhlIHRleHQuXHJcbiAgICovXHJcbiAgc2V0IHgobmV3WDogbnVtYmVyKSB7XHJcblxyXG4gICAgdGhpcy5feCA9IG5ld1g7XHJcblxyXG4gICAgdGhpcy5fZWwuc3R5bGUubGVmdCA9IGFkZFB4VG9OdW1iZXIodGhpcy5fb3B0aW9ucy5jYW52YXNQb3NpdGlvbi5sZWZ0ICsgdGhpcy5feCk7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyBhIG5ldyB5IHBvc2l0aW9uIGZvciB0aGUgdGV4dC5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge251bWJlcn0gbmV3WSBUaGUgbmV3IHkgcG9zaXRpb24gb2YgdGhlIHRleHQuXHJcbiAgICovXHJcbiAgc2V0IHkobmV3WTogbnVtYmVyKSB7XHJcblxyXG4gICAgdGhpcy5feSA9IG5ld1k7XHJcblxyXG4gICAgdGhpcy5fZWwuc3R5bGUudG9wID0gYWRkUHhUb051bWJlcih0aGlzLl9vcHRpb25zLmNhbnZhc1Bvc2l0aW9uLnRvcCArIHRoaXMuX3kpO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoYW5nZXMgdGhlIHNpemUgb2YgdGhlIHRleHQuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG5ld1NpemUgVGhlIG5ldyBzaXplIHRvIHNldCBmb3IgdGhlIHRleHQuXHJcbiAgICovXHJcbiAgc2V0IHNpemUobmV3U2l6ZTogbnVtYmVyKSB7XHJcblxyXG4gICAgdGhpcy5fb3B0aW9ucy5fc2l6ZSA9IG5ld1NpemU7XHJcblxyXG4gICAgdGhpcy5fZWwuc3R5bGUuZm9udFNpemUgPSBgJHtuZXdTaXplfXJlbWA7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hhbmdlcyB0aGUgdGV4dCBkaXNwbGF5ZWQuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld1RleHQgVGhlIHRleHQgdG8gZGlzcGxheS5cclxuICAgKi9cclxuICBzZXQgdGV4dChuZXdUZXh0OiBzdHJpbmcpIHtcclxuXHJcbiAgICB0aGlzLl90ZXh0ID0gbmV3VGV4dDtcclxuXHJcbiAgICB0aGlzLl9lbC50ZXh0Q29udGVudCA9IG5ld1RleHQ7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hhbmdlcyB0aGUgeCBhbmQgeSBwb3NpdGlvbiBvZiB0aGUgdGV4dCBlbGVtZW50LlxyXG4gICAqIFxyXG4gICAqIFRoaXMgaXMgc3ludGF0aWMgc3VnYXIgdG8gY2hhbmdpbmcgdGhlIHggYW5kIHkgcG9zaXRpb25zIGluZGVwZW5kZW50bHkuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHggVGhlIHggcG9zaXRpb24gdG8gbW92ZSB0by5cclxuICAgKiBAcGFyYW0ge251bWJlcn0geSBUaGUgeSBwb3NpdGlvbiB0byBtb3ZlIHRvLlxyXG4gICAqL1xyXG4gIG1vdmUoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuXHJcbiAgICB0aGlzLnggPSB4O1xyXG5cclxuICAgIHRoaXMueSA9IHk7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSGlkZXMgdGhlIHRleHQgZWxlbWVudC5cclxuICAgKi9cclxuICBoaWRlKCkge1xyXG5cclxuICAgIHRoaXMuX2VsLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTaG93cyB0aGUgdGV4dCBlbGVtZW50LlxyXG4gICAqL1xyXG4gIHNob3coKSB7XHJcblxyXG4gICAgdGhpcy5fZWwuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIGEgcGllY2Ugb2YgdGhlIHRleHQgdG8gYmUgZHluYW1pYy5cclxuICAgKiBcclxuICAgKiBUaGlzIGR5bmFtaWMgcGFydCBvZiB0aGUgdGV4dCBjYW4gdGhlbiBiZSBlYXNpbHkgY2hhbmdlZCB3aXRoIGBjaGFuZ2VEeW5hbWljYC5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBUaGUgcGFydCBvZiB0aGUgdGV4dCB0aGF0IHNob3VsZCBiZSBkeW5hbWljLlxyXG4gICAqL1xyXG4gIHNldER5bmFtaWModGV4dDogc3RyaW5nKSB7XHJcblxyXG4gICAgaWYgKCF0aGlzLl90ZXh0LmluY2x1ZGVzKHRleHQpKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5fZHluYW1pY1RleHQgPSB0ZXh0O1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoYW5nZSB0aGUgdGV4dCBjb250ZW50IG9mIHRoZSBkeW5hbWljIHRleHQgcG9ydGlvbiBvZiB0aGUgdGV4dC5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBUaGUgdGV4dCB0byBkaXNwbGF5IGluIHBsYWNlIG9mIHRoZSBkeW5hbWljIHRleHQuXHJcbiAgICovXHJcbiAgY2hhbmdlRHluYW1pYyh0ZXh0OiBzdHJpbmcpIHtcclxuXHJcbiAgICBpZiAoIXRoaXMuX2R5bmFtaWNUZXh0KSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5fdGV4dCA9IHRoaXMuX29yaWdpbmFsVGV4dDtcclxuXHJcbiAgICB0aGlzLnRleHQgPSB0aGlzLl90ZXh0LnJlcGxhY2UodGhpcy5fZHluYW1pY1RleHQsIHRleHQpO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgdXAgdGhlIHBvc2l0aW9uIG9mIHRoaXMgZWxlbWVudCBhbmQgdGhlbiBhZGRzIGl0IHRvIHRoZSBkb2N1bWVudC5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX3NldHVwKCkge1xyXG5cclxuICAgIHRoaXMuX2VsLnN0eWxlLmZvbnRTaXplID0gYCR7dGhpcy5fb3B0aW9ucy5zaXplfXJlbWA7XHJcblxyXG4gICAgaWYgKHRoaXMuX29wdGlvbnMuaWQpIHRoaXMuX2VsLmlkID0gdGhpcy5fb3B0aW9ucy5pZDtcclxuXHJcbiAgICB0aGlzLl9lbC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcblxyXG4gICAgdGhpcy5fZWwuc3R5bGUudG9wID0gYWRkUHhUb051bWJlcih0aGlzLl9vcHRpb25zLmNhbnZhc1Bvc2l0aW9uLnRvcCArIHRoaXMuX3kpO1xyXG5cclxuICAgIHRoaXMuX2VsLnN0eWxlLmxlZnQgPSBhZGRQeFRvTnVtYmVyKHRoaXMuX29wdGlvbnMuY2FudmFzUG9zaXRpb24ubGVmdCArIHRoaXMuX3gpO1xyXG5cclxuICAgIHRoaXMuX2VsLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuXHJcbiAgICB0aGlzLl9vcHRpb25zLmNsYXNzZXMubWFwKChjbDogc3RyaW5nKSA9PiB0aGlzLl9lbC5jbGFzc0xpc3QuYWRkKGNsKSk7XHJcblxyXG4gICAgdGhpcy5fb3B0aW9ucy5nbG9iYWxDbGFzc2VzLm1hcCgoY2w6IHN0cmluZykgPT4gdGhpcy5fZWwuY2xhc3NMaXN0LmFkZChjbCkpO1xyXG5cclxuICB9XHJcblxyXG59OyJdfQ==