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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXh0L1RleHQudHMiXSwibmFtZXMiOlsiVGV4dCIsInRleHQiLCJ4IiwieSIsIm9wdGlvbnMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJfb3B0aW9ucyIsIlRleHRPcHRpb25zIiwiX2VsIiwidGV4dENvbnRlbnQiLCJfdGV4dCIsIl94IiwiX3kiLCJfc2l6ZSIsInNpemUiLCJfc2V0dXAiLCJzdHlsZSIsInZpc2liaWxpdHkiLCJmb250U2l6ZSIsImlkIiwicG9zaXRpb24iLCJ0b3AiLCJjYW52YXNQb3NpdGlvbiIsImxlZnQiLCJjbGFzc2VzIiwibWFwIiwiY2wiLCJjbGFzc0xpc3QiLCJhZGQiLCJnbG9iYWxDbGFzc2VzIiwiX2lkIiwibmV3WCIsIm5ld1kiLCJuZXdTaXplIiwibmV3VGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdxQkEsSTs7O0FBRW5COzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVFBLGdCQUFZQyxJQUFaLEVBQThFO0FBQUEsUUFBcERDLENBQW9ELHVFQUF4QyxDQUF3QztBQUFBLFFBQXJDQyxDQUFxQyx1RUFBekIsQ0FBeUI7QUFBQSxRQUF0QkMsT0FBc0IsdUVBQUosRUFBSTs7QUFBQTs7QUFBQSxpQ0FoRXhELHVCQWdFd0Q7O0FBQUE7O0FBQUEsaUNBOUMvQ0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBOEMrQzs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFFNUUsU0FBS0MsUUFBTCxHQUFnQixJQUFJQyx1QkFBSixDQUFnQkosT0FBaEIsQ0FBaEI7QUFFQSxTQUFLSyxHQUFMLENBQVNDLFdBQVQsR0FBdUJULElBQXZCO0FBRUEsU0FBS1UsS0FBTCxHQUFhVixJQUFiO0FBRUEsU0FBS1cs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LE9BQXRCO0FBRUEsV0FBS3pCLEdBQUwsQ0FBU1EsS0FBVCxDQUFlRSxRQUFmLGFBQTZCZSxPQUE3QjtBQUVEO0FBRUQ7Ozs7Ozs7O3dCQXpDbUI7QUFBRSxhQUFPLEtBQUt2QixLQUFaO0FBQW9CLEs7c0JBOENoQ3dCLE8sRUFBaUI7QUFFeEIsV0FBS3hCLEtBQUwsR0FBYXdCLE9BQWI7QUFFQSxXQUFLMUIsR0FBTCxDQUFTQyxXQUFULEdBQXVCeUIsT0FBdkI7QUFFRDs7Ozs7OztBQTZERiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuaW1wb3J0IHV1aWR2NCBmcm9tICcuLi91dGlscy91dWlkJztcclxuaW1wb3J0IFRleHRPcHRpb25zIGZyb20gJy4vVGV4dE9wdGlvbnMnO1xyXG5pbXBvcnQgeyBhZGRQeFRvTnVtYmVyIH0gZnJvbSAnLi4vdXRpbHMvc3R5bGUtb3BlcmF0aW9ucyc7XHJcblxyXG4vKipcclxuICogVGhlIFRleHQgbW9kdWxlIHJlcHJlc2VudHMgYSB0ZXh0IG9iamVjdCBhZGRlZCB0byB0aGUgZ2FtZSBib2FyZC5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHQge1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgaWQgZm9yIHRoaXMgdGV4dCBub2RlLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfaWQ6IHN0cmluZyA9IHV1aWR2NCgpO1xyXG5cclxuICAvKipcclxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgb3B0aW9ucyBmb3IgdGhpcyB0ZXh0IG5vZGUuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge1RleHRPcHRpb25zfVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX29wdGlvbnM6IFRleHRPcHRpb25zO1xyXG5cclxuICAvKipcclxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgZWxlbWVudCB0aGF0IGNvbnRhaW5zIHRoZSB0ZXh0LlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtIVE1MU3BhbkVsZW1lbnR9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfZWw6IEhUTUxTcGFuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHRleHQgdG8gZGlzcGxheS5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX3RleHQ6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIHkgcG9zaXRpb24gb2YgdGhpcyB0ZXh0IG9uIHRoZSBnYW1lIGJvYXJkLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfeDogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgeSBwb3NpdGlvbiBvZiB0aGlzIHRleHQgb24gdGhlIGdhbWUgYm9hcmQuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge251bWJlcn1cclxuICAgKi9cclxuICBwcml2YXRlIF95OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBzaXplIG9mIHRoZSB0ZXh0LlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfc2l6ZTogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBUaGUgdGV4dCB0byBkaXNwbGF5LlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4IFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIHRleHQgaW4gcmVsYXRpb24gdG8gdGhlIGdhbWUgYm9hcmQuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHkgVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgdGV4dCBpbiByZWxhdGlvbiB0byB0aGUgZ2FtZSBib2FyZC5cclxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLnNpemU9MV0gVGhlIHNpemUgb2YgdGhlIHRleHQuIFRoaXMgc2hvdWxkIGJlIGEgdmFsdWUgZnJvbSAxLTEwIHdpdGggMSBiZWluZyBkZWZhdWx0IGFuZCBnZXR0aW5nIGxhcmdlciBhcyBpdCBnZXRzIGNsb3NlciB0byAxMC5cclxuICAgKiBAcGFyYW0ge3N0cmluZ3xSZWdFeHB9IFtvcHRpb25zLmR5bmFtaWNdIFRoZSBwb3J0aW9uIG9mIHRoZSB0ZXh0IHRoYXQgc2hvdWxkIGJlIGR5bmFtaWMuIFRoaXMgY2FuIGJlIGVpdGhlciBhIHN0cmluZyBvciBhIHJlZ2V4IHZhbHVlLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHRleHQ6IHN0cmluZywgeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwgb3B0aW9uczogT2JqZWN0ID0ge30pIHtcclxuXHJcbiAgICB0aGlzLl9vcHRpb25zID0gbmV3IFRleHRPcHRpb25zKG9wdGlvbnMpO1xyXG5cclxuICAgIHRoaXMuX2VsLnRleHRDb250ZW50ID0gdGV4dDtcclxuXHJcbiAgICB0aGlzLl90ZXh0ID0gdGV4dDtcclxuXHJcbiAgICB0aGlzLl94ID0geDtcclxuXHJcbiAgICB0aGlzLl95ID0geTtcclxuXHJcbiAgICB0aGlzLl9zaXplID0gdGhpcy5fb3B0aW9ucy5zaXplO1xyXG5cclxuICAgIHRoaXMuX3NldHVwKCk7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgaWQgZm9yIHRoaXMgdGV4dCBub2RlLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAgICovXHJcbiAgZ2V0IGlkKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9pZDsgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBlbGVtZW50IHRoYXQgY29udGFpbnMgdGhlIHRleHQuXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge0hUTUxTcGFuRWxlbWVudH1cclxuICAgKi9cclxuICBnZXQgZWwoKTogSFRNTFNwYW5FbGVtZW50IHsgcmV0dXJuIHRoaXMuX2VsOyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIHggcG9zaXRpb24gb2YgdGhlIHRleHQgaW4gcmVsYXRpb24gdG8gdGhlIGdhbWUuXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge251bWJlcn1cclxuICAgKi9cclxuICBnZXQgeCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5feDsgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSB5IHBvc2l0aW9uIG9mIHRoZSB0ZXh0IGluIHJlbGF0aW9uIHRvIHRoZSBnYW1lLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgZ2V0IHkoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3k7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgc2l6ZSBvZiB0aGUgdGV4dC5cclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIGdldCBzaXplKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9zaXplOyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIHRleHQgZGlzcGxheWVkLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAgICovXHJcbiAgZ2V0IHRleHQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX3RleHQ7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyBhIG5ldyB4IHBvc2l0aW9uIGZvciB0aGUgdGV4dC5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge251bWJlcn0gbmV3WCBUaGUgbmV3IHggcG9zaXRpb24gb2YgdGhlIHRleHQuXHJcbiAgICovXHJcbiAgc2V0IHgobmV3WDogbnVtYmVyKSB7XHJcblxyXG4gICAgdGhpcy5feCA9IG5ld1g7XHJcblxyXG4gICAgdGhpcy5fZWwuc3R5bGUubGVmdCA9IGFkZFB4VG9OdW1iZXIodGhpcy5fb3B0aW9ucy5jYW52YXNQb3NpdGlvbi5sZWZ0ICsgdGhpcy5feCk7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyBhIG5ldyB5IHBvc2l0aW9uIGZvciB0aGUgdGV4dC5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge251bWJlcn0gbmV3WSBUaGUgbmV3IHkgcG9zaXRpb24gb2YgdGhlIHRleHQuXHJcbiAgICovXHJcbiAgc2V0IHkobmV3WTogbnVtYmVyKSB7XHJcblxyXG4gICAgdGhpcy5feSA9IG5ld1k7XHJcblxyXG4gICAgdGhpcy5fZWwuc3R5bGUudG9wID0gYWRkUHhUb051bWJlcih0aGlzLl9vcHRpb25zLmNhbnZhc1Bvc2l0aW9uLnRvcCArIHRoaXMuX3kpO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoYW5nZXMgdGhlIHNpemUgb2YgdGhlIHRleHQuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG5ld1NpemUgVGhlIG5ldyBzaXplIHRvIHNldCBmb3IgdGhlIHRleHQuXHJcbiAgICovXHJcbiAgc2V0IHNpemUobmV3U2l6ZTogbnVtYmVyKSB7XHJcblxyXG4gICAgdGhpcy5fb3B0aW9ucy5fc2l6ZSA9IG5ld1NpemU7XHJcblxyXG4gICAgdGhpcy5fZWwuc3R5bGUuZm9udFNpemUgPSBgJHtuZXdTaXplfXJlbWA7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hhbmdlcyB0aGUgdGV4dCBkaXNwbGF5ZWQuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld1RleHQgVGhlIHRleHQgdG8gZGlzcGxheS5cclxuICAgKi9cclxuICBzZXQgdGV4dChuZXdUZXh0OiBzdHJpbmcpIHtcclxuXHJcbiAgICB0aGlzLl90ZXh0ID0gbmV3VGV4dDtcclxuXHJcbiAgICB0aGlzLl9lbC50ZXh0Q29udGVudCA9IG5ld1RleHQ7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hhbmdlcyB0aGUgeCBhbmQgeSBwb3NpdGlvbiBvZiB0aGUgdGV4dCBlbGVtZW50LlxyXG4gICAqIFxyXG4gICAqIFRoaXMgaXMgc3ludGF0aWMgc3VnYXIgdG8gY2hhbmdpbmcgdGhlIHggYW5kIHkgcG9zaXRpb25zIGluZGVwZW5kZW50bHkuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHggVGhlIHggcG9zaXRpb24gdG8gbW92ZSB0by5cclxuICAgKiBAcGFyYW0ge251bWJlcn0geSBUaGUgeSBwb3NpdGlvbiB0byBtb3ZlIHRvLlxyXG4gICAqL1xyXG4gIG1vdmUoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuXHJcbiAgICB0aGlzLnggPSB4O1xyXG5cclxuICAgIHRoaXMueSA9IHk7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSGlkZXMgdGhlIHRleHQgZWxlbWVudC5cclxuICAgKi9cclxuICBoaWRlKCkge1xyXG5cclxuICAgIHRoaXMuX2VsLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTaG93cyB0aGUgdGV4dCBlbGVtZW50LlxyXG4gICAqL1xyXG4gIHNob3coKSB7XHJcblxyXG4gICAgdGhpcy5fZWwuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHVwIHRoZSBwb3NpdGlvbiBvZiB0aGlzIGVsZW1lbnQgYW5kIHRoZW4gYWRkcyBpdCB0byB0aGUgZG9jdW1lbnQuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBwcml2YXRlIF9zZXR1cCgpIHtcclxuXHJcbiAgICB0aGlzLl9lbC5zdHlsZS5mb250U2l6ZSA9IGAke3RoaXMuX29wdGlvbnMuc2l6ZX1yZW1gO1xyXG5cclxuICAgIGlmICh0aGlzLl9vcHRpb25zLmlkKSB0aGlzLl9lbC5pZCA9IHRoaXMuX29wdGlvbnMuaWQ7XHJcblxyXG4gICAgdGhpcy5fZWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG5cclxuICAgIHRoaXMuX2VsLnN0eWxlLnRvcCA9IGFkZFB4VG9OdW1iZXIodGhpcy5fb3B0aW9ucy5jYW52YXNQb3NpdGlvbi50b3AgKyB0aGlzLl95KTtcclxuXHJcbiAgICB0aGlzLl9lbC5zdHlsZS5sZWZ0ID0gYWRkUHhUb051bWJlcih0aGlzLl9vcHRpb25zLmNhbnZhc1Bvc2l0aW9uLmxlZnQgKyB0aGlzLl94KTtcclxuXHJcbiAgICB0aGlzLl9lbC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcblxyXG4gICAgdGhpcy5fb3B0aW9ucy5jbGFzc2VzLm1hcCgoY2w6IHN0cmluZykgPT4gdGhpcy5fZWwuY2xhc3NMaXN0LmFkZChjbCkpO1xyXG5cclxuICAgIHRoaXMuX29wdGlvbnMuZ2xvYmFsQ2xhc3Nlcy5tYXAoKGNsOiBzdHJpbmcpID0+IHRoaXMuX2VsLmNsYXNzTGlzdC5hZGQoY2wpKTtcclxuXHJcbiAgfVxyXG5cclxufTsiXX0=