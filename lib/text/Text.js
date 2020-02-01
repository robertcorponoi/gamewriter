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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXh0L1RleHQudHMiXSwibmFtZXMiOlsiVGV4dCIsInRleHQiLCJ4IiwieSIsIm9wdGlvbnMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJfb3B0aW9ucyIsIlRleHRPcHRpb25zIiwiX2VsIiwidGV4dENvbnRlbnQiLCJfdGV4dCIsIl9vcmlnaW5hbFRleHQiLCJfeCIsIl95IiwiX3NpemUiLCJzaXplIiwiX3NldHVwIiwic3R5bGUiLCJ2aXNpYmlsaXR5IiwiaW5jbHVkZXMiLCJfZHluYW1pY1RleHQiLCJyZXBsYWNlIiwiZm9udFNpemUiLCJpZCIsInBvc2l0aW9uIiwidG9wIiwiY2FudmFzUG9zaXRpb24iLCJsZWZ0IiwiY2xhc3NlcyIsIm1hcCIsImNsIiwiY2xhc3NMaXN0IiwiYWRkIiwiZ2xvYmFsQ2xhc3NlcyIsIl9pZCIsIm5ld1giLCJuZXdZIiwibmV3U2l6ZSIsIm5ld1RleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHcUJBLEk7OztBQUVuQjs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFRQSxnQkFBWUMsSUFBWixFQUE4RTtBQUFBLFFBQXBEQyxDQUFvRCx1RUFBeEMsQ0FBd0M7QUFBQSxRQUFyQ0MsQ0FBcUMsdUVBQXpCLENBQXlCO0FBQUEsUUFBdEJDLE9BQXNCLHVFQUFKLEVBQUk7O0FBQUE7O0FBQUEsaUNBbEZ4RCx1QkFrRndEOztBQUFBOztBQUFBLGlDQWhFL0NDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQWdFK0M7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBRTVFLFNBQUtDLFFBQUwsR0FBZ0IsSUFBSUMsdUJBQUosQ0FBZ0JKLE9B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R0FBTCxDQUFTUyxLQUFULENBQWVVLElBQWYsR0FBc0Isb0NBQWMsS0FBS3JCLFFBQUwsQ0FBY29CLGNBQWQsQ0FBNkJDLElBQTdCLEdBQW9DLEtBQUtmLEVBQXZELENBQXRCO0FBRUQ7QUFFRDs7Ozs7Ozs7d0JBN0JnQjtBQUFFLGFBQU8sS0FBS0MsRUFBWjtBQUFpQjtBQUVuQzs7Ozs7O3NCQWdDTXVCLEksRUFBYztBQUVsQixXQUFLdkIsRUFBTCxHQUFVdUIsSUFBVjtBQUVBLFdBQUs1QixHQUFMLENBQVNTLEtBQVQsQ0FBZVEsR0FBZixHQUFxQixvQ0FBYyxLQUFLbkIsUUFBTCxDQUFjb0IsY0FBZCxDQUE2QkQsR0FBN0IsR0FBbUMsS0FBS1osRUFBdEQsQ0FBckI7QUFFRDtBQUVEOzs7Ozs7Ozt3QkFuQ21CO0FBQUUsYUFBTyxLQUFLQyxLQUFaO0FBQW9CO0FBRXpDOzs7Ozs7c0JBc0NTdUIsTyxFQUFpQjtBQUV4QixXQUFLL0IsUUFBTCxDQUFjUSxLQUFkLEdBQXNCdUIsT0FBdEI7QUFFQSxXQUFLN0IsR0FBTCxDQUFTUyxLQUFULENBQWVLLFFBQWYsYUFBNkJlLE9BQTdCO0FBRUQ7QUFFRDs7Ozs7Ozs7d0JBekNtQjtBQUFFLGFBQU8sS0FBSzNCLEtBQVo7QUFBb0IsSztzQkE4Q2hDNEIsTyxFQUFpQjtBQUV4QixXQUFLNUIsS0FBTCxHQUFhNEIsT0FBYjtBQUVBLFdBQUs5QixHQUFMLENBQVNDLFdBQVQsR0FBdUI2QixPQUF2QjtBQUVEOzs7Ozs7O0FBMkZGIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCBUZXh0T3B0aW9ucyBmcm9tICcuL1RleHRPcHRpb25zJztcblxuaW1wb3J0IHV1aWR2NCBmcm9tICcuLi91dGlscy91dWlkJztcbmltcG9ydCB7IGFkZFB4VG9OdW1iZXIgfSBmcm9tICcuLi91dGlscy9zdHlsZS1vcGVyYXRpb25zJztcblxuLyoqXG4gKiBUaGUgVGV4dCBtb2R1bGUgcmVwcmVzZW50cyBhIHRleHQgb2JqZWN0IGFkZGVkIHRvIHRoZSBnYW1lIGJvYXJkLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0IHtcblxuICAvKipcbiAgICogVGhlIGlkIGZvciB0aGlzIHRleHQgbm9kZS5cbiAgICogXG4gICAqIEBwcml2YXRlXG4gICAqIFxuICAgKiBAcHJvcGVydHkge3N0cmluZ31cbiAgICovXG4gIHByaXZhdGUgX2lkOiBzdHJpbmcgPSB1dWlkdjQoKTtcblxuICAvKipcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIG9wdGlvbnMgZm9yIHRoaXMgdGV4dCBub2RlLlxuICAgKiBcbiAgICogQHByaXZhdGVcbiAgICogXG4gICAqIEBwcm9wZXJ0eSB7VGV4dE9wdGlvbnN9XG4gICAqL1xuICBwcml2YXRlIF9vcHRpb25zOiBUZXh0T3B0aW9ucztcblxuICAvKipcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIGVsZW1lbnQgdGhhdCBjb250YWlucyB0aGUgdGV4dC5cbiAgICogXG4gICAqIEBwcml2YXRlXG4gICAqIFxuICAgKiBAcHJvcGVydHkge0hUTUxTcGFuRWxlbWVudH1cbiAgICovXG4gIHByaXZhdGUgX2VsOiBIVE1MU3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgLyoqXG4gICAqIFRoZSB0ZXh0IHRvIGRpc3BsYXkuXG4gICAqIFxuICAgKiBAcHJpdmF0ZVxuICAgKiBcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9XG4gICAqL1xuICBwcml2YXRlIF90ZXh0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSB5IHBvc2l0aW9uIG9mIHRoaXMgdGV4dCBvbiB0aGUgZ2FtZSBib2FyZC5cbiAgICogXG4gICAqIEBwcml2YXRlXG4gICAqIFxuICAgKiBAcHJvcGVydHkge251bWJlcn1cbiAgICovXG4gIHByaXZhdGUgX3g6IG51bWJlcjtcblxuICAvKipcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIHkgcG9zaXRpb24gb2YgdGhpcyB0ZXh0IG9uIHRoZSBnYW1lIGJvYXJkLlxuICAgKiBcbiAgICogQHByaXZhdGVcbiAgICogXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfVxuICAgKi9cbiAgcHJpdmF0ZSBfeTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgc2l6ZSBvZiB0aGUgdGV4dC5cbiAgICogXG4gICAqIEBwcml2YXRlXG4gICAqIFxuICAgKiBAcHJvcGVydHkge251bWJlcn1cbiAgICovXG4gIHByaXZhdGUgX3NpemU6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIHBhcnQgb2YgdGhlIHRleHQgdGhhdCBpcyBkeW5hbWljLlxuICAgKiBcbiAgICogQHByaXZhdGVcbiAgICogXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfVxuICAgKi9cbiAgcHJpdmF0ZSBfZHluYW1pY1RleHQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBvcmlnaW5hbCB0ZXh0IHVuYWx0ZXJlZCBieSBkeW5hbWljIHBhcnRzLlxuICAgKiBcbiAgICogQHByaXZhdGVcbiAgICogXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfVxuICAgKi9cbiAgcHJpdmF0ZSBfb3JpZ2luYWxUZXh0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IFRoZSB0ZXh0IHRvIGRpc3BsYXkuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4IFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIHRleHQgaW4gcmVsYXRpb24gdG8gdGhlIGdhbWUgYm9hcmQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5IFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIHRleHQgaW4gcmVsYXRpb24gdG8gdGhlIGdhbWUgYm9hcmQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLnNpemU9MV0gVGhlIHNpemUgb2YgdGhlIHRleHQuIFRoaXMgc2hvdWxkIGJlIGEgdmFsdWUgZnJvbSAxLTEwIHdpdGggMSBiZWluZyBkZWZhdWx0IGFuZCBnZXR0aW5nIGxhcmdlciBhcyBpdCBnZXRzIGNsb3NlciB0byAxMC5cbiAgICogQHBhcmFtIHtzdHJpbmd8UmVnRXhwfSBbb3B0aW9ucy5keW5hbWljXSBUaGUgcG9ydGlvbiBvZiB0aGUgdGV4dCB0aGF0IHNob3VsZCBiZSBkeW5hbWljLiBUaGlzIGNhbiBiZSBlaXRoZXIgYSBzdHJpbmcgb3IgYSByZWdleCB2YWx1ZS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHRleHQ6IHN0cmluZywgeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwgb3B0aW9uczogT2JqZWN0ID0ge30pIHtcblxuICAgIHRoaXMuX29wdGlvbnMgPSBuZXcgVGV4dE9wdGlvbnMob3B0aW9ucyk7XG5cbiAgICB0aGlzLl9lbC50ZXh0Q29udGVudCA9IHRleHQ7XG5cbiAgICB0aGlzLl90ZXh0ID0gdGV4dDtcblxuICAgIHRoaXMuX29yaWdpbmFsVGV4dCA9IHRoaXMuX3RleHQ7XG5cbiAgICB0aGlzLl94ID0geDtcblxuICAgIHRoaXMuX3kgPSB5O1xuXG4gICAgdGhpcy5fc2l6ZSA9IHRoaXMuX29wdGlvbnMuc2l6ZTtcblxuICAgIHRoaXMuX3NldHVwKCk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpZCBmb3IgdGhpcyB0ZXh0IG5vZGUuXG4gICAqIFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGlkKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9pZDsgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBlbGVtZW50IHRoYXQgY29udGFpbnMgdGhlIHRleHQuXG4gICAqIFxuICAgKiBAcmV0dXJucyB7SFRNTFNwYW5FbGVtZW50fVxuICAgKi9cbiAgZ2V0IGVsKCk6IEhUTUxTcGFuRWxlbWVudCB7IHJldHVybiB0aGlzLl9lbDsgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB4IHBvc2l0aW9uIG9mIHRoZSB0ZXh0IGluIHJlbGF0aW9uIHRvIHRoZSBnYW1lLlxuICAgKiBcbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICovXG4gIGdldCB4KCk6IG51bWJlciB7IHJldHVybiB0aGlzLl94OyB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHkgcG9zaXRpb24gb2YgdGhlIHRleHQgaW4gcmVsYXRpb24gdG8gdGhlIGdhbWUuXG4gICAqIFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IHkoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3k7IH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc2l6ZSBvZiB0aGUgdGV4dC5cbiAgICogXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgc2l6ZSgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fc2l6ZTsgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB0ZXh0IGRpc3BsYXllZC5cbiAgICogXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgdGV4dCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fdGV4dDsgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGEgbmV3IHggcG9zaXRpb24gZm9yIHRoZSB0ZXh0LlxuICAgKiBcbiAgICogQHBhcmFtIHtudW1iZXJ9IG5ld1ggVGhlIG5ldyB4IHBvc2l0aW9uIG9mIHRoZSB0ZXh0LlxuICAgKi9cbiAgc2V0IHgobmV3WDogbnVtYmVyKSB7XG5cbiAgICB0aGlzLl94ID0gbmV3WDtcblxuICAgIHRoaXMuX2VsLnN0eWxlLmxlZnQgPSBhZGRQeFRvTnVtYmVyKHRoaXMuX29wdGlvbnMuY2FudmFzUG9zaXRpb24ubGVmdCArIHRoaXMuX3gpO1xuXG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhIG5ldyB5IHBvc2l0aW9uIGZvciB0aGUgdGV4dC5cbiAgICogXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBuZXdZIFRoZSBuZXcgeSBwb3NpdGlvbiBvZiB0aGUgdGV4dC5cbiAgICovXG4gIHNldCB5KG5ld1k6IG51bWJlcikge1xuXG4gICAgdGhpcy5feSA9IG5ld1k7XG5cbiAgICB0aGlzLl9lbC5zdHlsZS50b3AgPSBhZGRQeFRvTnVtYmVyKHRoaXMuX29wdGlvbnMuY2FudmFzUG9zaXRpb24udG9wICsgdGhpcy5feSk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBzaXplIG9mIHRoZSB0ZXh0LlxuICAgKiBcbiAgICogQHBhcmFtIHtudW1iZXJ9IG5ld1NpemUgVGhlIG5ldyBzaXplIHRvIHNldCBmb3IgdGhlIHRleHQuXG4gICAqL1xuICBzZXQgc2l6ZShuZXdTaXplOiBudW1iZXIpIHtcblxuICAgIHRoaXMuX29wdGlvbnMuX3NpemUgPSBuZXdTaXplO1xuXG4gICAgdGhpcy5fZWwuc3R5bGUuZm9udFNpemUgPSBgJHtuZXdTaXplfXJlbWA7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSB0ZXh0IGRpc3BsYXllZC5cbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdUZXh0IFRoZSB0ZXh0IHRvIGRpc3BsYXkuXG4gICAqL1xuICBzZXQgdGV4dChuZXdUZXh0OiBzdHJpbmcpIHtcblxuICAgIHRoaXMuX3RleHQgPSBuZXdUZXh0O1xuXG4gICAgdGhpcy5fZWwudGV4dENvbnRlbnQgPSBuZXdUZXh0O1xuXG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgeCBhbmQgeSBwb3NpdGlvbiBvZiB0aGUgdGV4dCBlbGVtZW50LlxuICAgKiBcbiAgICogVGhpcyBpcyBzeW50YXRpYyBzdWdhciB0byBjaGFuZ2luZyB0aGUgeCBhbmQgeSBwb3NpdGlvbnMgaW5kZXBlbmRlbnRseS5cbiAgICogXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4IFRoZSB4IHBvc2l0aW9uIHRvIG1vdmUgdG8uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5IFRoZSB5IHBvc2l0aW9uIHRvIG1vdmUgdG8uXG4gICAqL1xuICBtb3ZlKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG5cbiAgICB0aGlzLnggPSB4O1xuXG4gICAgdGhpcy55ID0geTtcblxuICB9XG5cbiAgLyoqXG4gICAqIEhpZGVzIHRoZSB0ZXh0IGVsZW1lbnQuXG4gICAqL1xuICBoaWRlKCkge1xuXG4gICAgdGhpcy5fZWwuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuXG4gIH1cblxuICAvKipcbiAgICogU2hvd3MgdGhlIHRleHQgZWxlbWVudC5cbiAgICovXG4gIHNob3coKSB7XG5cbiAgICB0aGlzLl9lbC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuXG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhIHBpZWNlIG9mIHRoZSB0ZXh0IHRvIGJlIGR5bmFtaWMuXG4gICAqIFxuICAgKiBUaGlzIGR5bmFtaWMgcGFydCBvZiB0aGUgdGV4dCBjYW4gdGhlbiBiZSBlYXNpbHkgY2hhbmdlZCB3aXRoIGBjaGFuZ2VEeW5hbWljYC5cbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IFRoZSBwYXJ0IG9mIHRoZSB0ZXh0IHRoYXQgc2hvdWxkIGJlIGR5bmFtaWMuXG4gICAqL1xuICBzZXREeW5hbWljKHRleHQ6IHN0cmluZykge1xuXG4gICAgaWYgKCF0aGlzLl90ZXh0LmluY2x1ZGVzKHRleHQpKSByZXR1cm47XG5cbiAgICB0aGlzLl9keW5hbWljVGV4dCA9IHRleHQ7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgdGhlIHRleHQgY29udGVudCBvZiB0aGUgZHluYW1pYyB0ZXh0IHBvcnRpb24gb2YgdGhlIHRleHQuXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBUaGUgdGV4dCB0byBkaXNwbGF5IGluIHBsYWNlIG9mIHRoZSBkeW5hbWljIHRleHQuXG4gICAqL1xuICBjaGFuZ2VEeW5hbWljKHRleHQ6IHN0cmluZykge1xuXG4gICAgaWYgKCF0aGlzLl9keW5hbWljVGV4dCkgcmV0dXJuO1xuXG4gICAgdGhpcy5fdGV4dCA9IHRoaXMuX29yaWdpbmFsVGV4dDtcblxuICAgIHRoaXMudGV4dCA9IHRoaXMuX3RleHQucmVwbGFjZSh0aGlzLl9keW5hbWljVGV4dCwgdGV4dCk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHVwIHRoZSBwb3NpdGlvbiBvZiB0aGlzIGVsZW1lbnQgYW5kIHRoZW4gYWRkcyBpdCB0byB0aGUgZG9jdW1lbnQuXG4gICAqIFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSBfc2V0dXAoKSB7XG5cbiAgICB0aGlzLl9lbC5zdHlsZS5mb250U2l6ZSA9IGAke3RoaXMuX29wdGlvbnMuc2l6ZX1yZW1gO1xuXG4gICAgaWYgKHRoaXMuX29wdGlvbnMuaWQpIHRoaXMuX2VsLmlkID0gdGhpcy5fb3B0aW9ucy5pZDtcblxuICAgIHRoaXMuX2VsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcblxuICAgIHRoaXMuX2VsLnN0eWxlLnRvcCA9IGFkZFB4VG9OdW1iZXIodGhpcy5fb3B0aW9ucy5jYW52YXNQb3NpdGlvbi50b3AgKyB0aGlzLl95KTtcblxuICAgIHRoaXMuX2VsLnN0eWxlLmxlZnQgPSBhZGRQeFRvTnVtYmVyKHRoaXMuX29wdGlvbnMuY2FudmFzUG9zaXRpb24ubGVmdCArIHRoaXMuX3gpO1xuXG4gICAgdGhpcy5fZWwuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuXG4gICAgdGhpcy5fb3B0aW9ucy5jbGFzc2VzLm1hcCgoY2w6IHN0cmluZykgPT4gdGhpcy5fZWwuY2xhc3NMaXN0LmFkZChjbCkpO1xuXG4gICAgdGhpcy5fb3B0aW9ucy5nbG9iYWxDbGFzc2VzLm1hcCgoY2w6IHN0cmluZykgPT4gdGhpcy5fZWwuY2xhc3NMaXN0LmFkZChjbCkpO1xuXG4gIH1cblxufTsiXX0=