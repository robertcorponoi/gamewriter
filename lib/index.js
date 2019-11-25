'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Text = _interopRequireDefault(require("./text/Text"));

var _Options = _interopRequireDefault(require("./options/Options"));

var _styleOperations = require("./utils/style-operations");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * GameWriter uses the document to write over a canavas for increased performance when using text in games.
 */
var GameWriter =
/*#__PURE__*/
function () {
  /**
   * A reference to the options for this instance.
   * 
   * @private
   * 
   * @property {Options}
   */

  /**
   * A reference to the canvas used to display the game.
   * 
   * @private
   * 
   * @property {HTMLCanvasElement}
   */

  /**
   * A reference to the canvas' position.
   * 
   * @private
   * 
   * @property {CanvasPosition}
   */

  /**
   * A reference to the overlay div that contains all of the text nodes.
   * 
   * @private
   * 
   * @property {HTMLDivElement}
   */

  /**
   * A reference to all of the text nodes that have been created.
   * 
   * @private
   * 
   * @property {Array<Text>}
   */

  /**
   * @param {HTMLCanvasElement} canvas A reference to the canvas used to display the game.
   * @param {Object} [options]
   * @param {boolean} [options.autoDisplay=true] Indicates whether text nodes are displayed on the canvas after they are created or if they have to be displayed manually.
   */
  function GameWriter(canvas) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, GameWriter);

    _defineProperty(this, "_options", void 0);

    _defineProperty(this, "_canvas", void 0);

    _defineProperty(this, "_canvasPosition", void 0);

    _defineProperty(this, "_overlay", document.createElement('div'));

    _defineProperty(this, "_nodes", []);

    this._options = new _Options["default"](options);
    this._canvas = canvas;
    this._canvasPosition = {
      top: (0, _styleOperations.getNumberFromStyle)(this._canvas.style.top || '0px'),
      left: (0, _styleOperations.getNumberFromStyle)(this._canvas.style.left || '0px'),
      width: this._canvas.width,
      height: this._canvas.height
    };

    this._setup();
  }
  /**
   * Sets up the overlay position based on the canvas' position and adds it to the document.
   * 
   * @private
   */


  _createClass(GameWriter, [{
    key: "_setup",
    value: function _setup() {
      this._overlay.id = 'gamewriter-overlay';
      this._overlay.style.position = 'absolute';
      this._overlay.style.overflow = 'hidden';
      this._overlay.style.textOverflow = 'ellipsis';
      this._overlay.style.whiteSpace = 'nowrap';
      this._overlay.style.top = (0, _styleOperations.addPxToNumber)(this._canvasPosition.top);
      this._overlay.style.left = (0, _styleOperations.addPxToNumber)(this._canvasPosition.left);
      this._overlay.style.width = (0, _styleOperations.addPxToNumber)(this._canvasPosition.width);
      this._overlay.style.height = (0, _styleOperations.addPxToNumber)(this._canvasPosition.height);
      document.body.appendChild(this._overlay);
    }
    /**
     * Creates a new text node to add to the game.
     * 
     * @param {string} text The text to display.
     * @param {number} x The x coordinate of the text in relation to the game board.
     * @param {number} y The y coordinate of the text in relation to the game board.
     * @param {Object} [options]
     * @param {number} [options.size=1] The size of the text. This should be a value from 1-10 with 1 being default and getting larger as it gets closer to 10.   * 
     * 
     * @returns {Text} Returns the text node that was created.
     * 
     * @example
     * 
     * const txt = gamewriter.addText('hello world!');
     */

  }, {
    key: "addText",
    value: function addText(text, x, y) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var opts = Object.assign(options, {
        canvasPosition: this._canvasPosition
      });
      var node = new _Text["default"](text, x, y, opts);
      if (!this._options.autoDisplay) node.hide();

      this._nodes.push(node);

      this._overlay.appendChild(node.el);

      node.el.style.visibility = 'visible ';
      return node;
    }
    /**
     * Removes a text node from the game.
     * 
     * @param {Text} text The text object to remove.
     * 
     * @example
     * 
     * const txt = gamewriter.addText('hello world!');
     * 
     * gamewriter.removeText(txt);
     */

  }, {
    key: "removeText",
    value: function removeText(text) {
      this._overlay.removeChild(text.el);

      this._nodes = this._nodes.filter(function (node) {
        return node !== text;
      });
    }
    /**
     * Removes all text from the game.
     * 
     * @example
     * 
     * const txt = gamewriter.addText('hello world!');
     * 
     * gamewriter.clear();
     */

  }, {
    key: "clear",
    value: function clear() {
      while (this._overlay.lastChild) {
        this._overlay.removeChild(this._overlay.lastChild);
      }

      this._nodes = [];
    }
  }]);

  return GameWriter;
}();

exports["default"] = GameWriter;
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJHYW1lV3JpdGVyIiwiY2FudmFzIiwib3B0aW9ucyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIl9vcHRpb25zIiwiT3B0aW9ucyIsIl9jYW52YXMiLCJfY2FudmFzUG9zaXRpb24iLCJ0b3AiLCJzdHlsZSIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsIl9zZXR1cCIsIl9vdmVybGF5IiwiaWQiLCJwb3NpdGlvbiIsIm92ZXJmbG93IiwidGV4dE92ZXJmbG93Iiwid2hpdGVTcGFjZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInRleHQiLCJ4IiwieSIsIm9wdHMiLCJPYmplY3QiLCJhc3NpZ24iLCJjYW52YXNQb3NpdGlvbiIsIm5vZGUiLCJUZXh0IiwiYXV0b0Rpc3BsYXkiLCJoaWRlIiwiX25vZGVzIiwicHVzaCIsImVsIiwidmlzaWJpbGl0eSIsInJlbW92ZUNoaWxkIiwiZmlsdGVyIiwibGFzdENoaWxkIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFJQTs7O0lBR3FCQSxVOzs7QUFFbkI7Ozs7Ozs7O0FBU0E7Ozs7Ozs7O0FBU0E7Ozs7Ozs7O0FBU0E7Ozs7Ozs7O0FBU0E7Ozs7Ozs7O0FBU0E7Ozs7O0FBS0Esc0JBQVlDLE1BQVosRUFBNkQ7QUFBQSxRQUF0QkMsT0FBc0IsdUVBQUosRUFBSTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSxzQ0FoQjFCQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FnQjBCOztBQUFBLG9DQVAvQixFQU8rQjs7QUFFM0QsU0FBS0MsUUFBTCxHQUFnQixJQUFJQyxtQkFBSixDQUFZSixPQUFaLENBQWhCO0FBRUEsU0FBS0ssT0FBTCxHQUFlTixNQUFmO0FBRUEsU0FBS08sZUFBTCxHQUF1QjtBQUVyQkMsTUFBQUEsR0FBRyxFQUFFLHlDQUFtQixLQUFLRixPQUFMLENBQWFHLEtBQWIsQ0FBbUJE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XG5cclxuaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0L1RleHQnO1xyXG5pbXBvcnQgT3B0aW9ucyBmcm9tICcuL29wdGlvbnMvT3B0aW9ucyc7XHJcbmltcG9ydCB7IGdldE51bWJlckZyb21TdHlsZSwgYWRkUHhUb051bWJlciB9IGZyb20gJy4vdXRpbHMvc3R5bGUtb3BlcmF0aW9ucyc7XHJcblxyXG5pbXBvcnQgQ2FudmFzUG9zaXRpb24gZnJvbSAnLi9pbnRlcmZhY2VzL0NhbnZhc1Bvc2l0aW9uJztcclxuXHJcbi8qKlxyXG4gKiBHYW1lV3JpdGVyIHVzZXMgdGhlIGRvY3VtZW50IHRvIHdyaXRlIG92ZXIgYSBjYW5hdmFzIGZvciBpbmNyZWFzZWQgcGVyZm9ybWFuY2Ugd2hlbiB1c2luZyB0ZXh0IGluIGdhbWVzLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVdyaXRlciB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBvcHRpb25zIGZvciB0aGlzIGluc3RhbmNlLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtPcHRpb25zfVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX29wdGlvbnM6IE9wdGlvbnM7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBjYW52YXMgdXNlZCB0byBkaXNwbGF5IHRoZSBnYW1lLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtIVE1MQ2FudmFzRWxlbWVudH1cclxuICAgKi9cclxuICBwcml2YXRlIF9jYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG5cclxuICAvKipcclxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgY2FudmFzJyBwb3NpdGlvbi5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7Q2FudmFzUG9zaXRpb259XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfY2FudmFzUG9zaXRpb246IENhbnZhc1Bvc2l0aW9uO1xyXG5cclxuICAvKipcclxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgb3ZlcmxheSBkaXYgdGhhdCBjb250YWlucyBhbGwgb2YgdGhlIHRleHQgbm9kZXMuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge0hUTUxEaXZFbGVtZW50fVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX292ZXJsYXk6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIGFsbCBvZiB0aGUgdGV4dCBub2RlcyB0aGF0IGhhdmUgYmVlbiBjcmVhdGVkLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtBcnJheTxUZXh0Pn1cclxuICAgKi9cclxuICBwcml2YXRlIF9ub2RlczogQXJyYXk8VGV4dD4gPSBbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtIVE1MQ2FudmFzRWxlbWVudH0gY2FudmFzIEEgcmVmZXJlbmNlIHRvIHRoZSBjYW52YXMgdXNlZCB0byBkaXNwbGF5IHRoZSBnYW1lLlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmF1dG9EaXNwbGF5PXRydWVdIEluZGljYXRlcyB3aGV0aGVyIHRleHQgbm9kZXMgYXJlIGRpc3BsYXllZCBvbiB0aGUgY2FudmFzIGFmdGVyIHRoZXkgYXJlIGNyZWF0ZWQgb3IgaWYgdGhleSBoYXZlIHRvIGJlIGRpc3BsYXllZCBtYW51YWxseS5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBvcHRpb25zOiBPYmplY3QgPSB7fSkge1xyXG5cclxuICAgIHRoaXMuX29wdGlvbnMgPSBuZXcgT3B0aW9ucyhvcHRpb25zKTtcclxuXHJcbiAgICB0aGlzLl9jYW52YXMgPSBjYW52YXM7XHJcblxyXG4gICAgdGhpcy5fY2FudmFzUG9zaXRpb24gPSB7XHJcblxyXG4gICAgICB0b3A6IGdldE51bWJlckZyb21TdHlsZSh0aGlzLl9jYW52YXMuc3R5bGUudG9wIHx8ICcwcHgnKSxcclxuXHJcbiAgICAgIGxlZnQ6IGdldE51bWJlckZyb21TdHlsZSh0aGlzLl9jYW52YXMuc3R5bGUubGVmdCB8fCAnMHB4JyksXHJcblxyXG4gICAgICB3aWR0aDogdGhpcy5fY2FudmFzLndpZHRoLFxyXG5cclxuICAgICAgaGVpZ2h0OiB0aGlzLl9jYW52YXMuaGVpZ2h0XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLl9zZXR1cCgpO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgdXAgdGhlIG92ZXJsYXkgcG9zaXRpb24gYmFzZWQgb24gdGhlIGNhbnZhcycgcG9zaXRpb24gYW5kIGFkZHMgaXQgdG8gdGhlIGRvY3VtZW50LlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfc2V0dXAoKSB7XHJcblxyXG4gICAgdGhpcy5fb3ZlcmxheS5pZCA9ICdnYW1ld3JpdGVyLW92ZXJsYXknO1xyXG5cclxuICAgIHRoaXMuX292ZXJsYXkuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG5cclxuICAgIHRoaXMuX292ZXJsYXkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuXHJcbiAgICB0aGlzLl9vdmVybGF5LnN0eWxlLnRleHRPdmVyZmxvdyA9ICdlbGxpcHNpcyc7XHJcblxyXG4gICAgdGhpcy5fb3ZlcmxheS5zdHlsZS53aGl0ZVNwYWNlID0gJ25vd3JhcCc7XHJcblxyXG4gICAgdGhpcy5fb3ZlcmxheS5zdHlsZS50b3AgPSBhZGRQeFRvTnVtYmVyKHRoaXMuX2NhbnZhc1Bvc2l0aW9uLnRvcCk7XHJcblxyXG4gICAgdGhpcy5fb3ZlcmxheS5zdHlsZS5sZWZ0ID0gYWRkUHhUb051bWJlcih0aGlzLl9jYW52YXNQb3NpdGlvbi5sZWZ0KTtcclxuXHJcbiAgICB0aGlzLl9vdmVybGF5LnN0eWxlLndpZHRoID0gYWRkUHhUb051bWJlcih0aGlzLl9jYW52YXNQb3NpdGlvbi53aWR0aCk7XHJcblxyXG4gICAgdGhpcy5fb3ZlcmxheS5zdHlsZS5oZWlnaHQgPSBhZGRQeFRvTnVtYmVyKHRoaXMuX2NhbnZhc1Bvc2l0aW9uLmhlaWdodCk7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLl9vdmVybGF5KTtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgbmV3IHRleHQgbm9kZSB0byBhZGQgdG8gdGhlIGdhbWUuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgVGhlIHRleHQgdG8gZGlzcGxheS5cclxuICAgKiBAcGFyYW0ge251bWJlcn0geCBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSB0ZXh0IGluIHJlbGF0aW9uIHRvIHRoZSBnYW1lIGJvYXJkLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5IFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIHRleHQgaW4gcmVsYXRpb24gdG8gdGhlIGdhbWUgYm9hcmQuXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5zaXplPTFdIFRoZSBzaXplIG9mIHRoZSB0ZXh0LiBUaGlzIHNob3VsZCBiZSBhIHZhbHVlIGZyb20gMS0xMCB3aXRoIDEgYmVpbmcgZGVmYXVsdCBhbmQgZ2V0dGluZyBsYXJnZXIgYXMgaXQgZ2V0cyBjbG9zZXIgdG8gMTAuICAgKiBcclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7VGV4dH0gUmV0dXJucyB0aGUgdGV4dCBub2RlIHRoYXQgd2FzIGNyZWF0ZWQuXHJcbiAgICogXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiBcclxuICAgKiBjb25zdCB0eHQgPSBnYW1ld3JpdGVyLmFkZFRleHQoJ2hlbGxvIHdvcmxkIScpO1xyXG4gICAqL1xyXG4gIGFkZFRleHQodGV4dDogc3RyaW5nLCB4OiBudW1iZXIsIHk6IG51bWJlciwgb3B0aW9uczogT2JqZWN0ID0ge30pOiBUZXh0IHtcclxuXHJcbiAgICBjb25zdCBvcHRzOiBPYmplY3QgPSBPYmplY3QuYXNzaWduKG9wdGlvbnMsIHsgY2FudmFzUG9zaXRpb246IHRoaXMuX2NhbnZhc1Bvc2l0aW9uIH0pO1xyXG5cclxuICAgIGNvbnN0IG5vZGU6IFRleHQgPSBuZXcgVGV4dCh0ZXh0LCB4LCB5LCBvcHRzKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuX29wdGlvbnMuYXV0b0Rpc3BsYXkpIG5vZGUuaGlkZSgpO1xyXG5cclxuICAgIHRoaXMuX25vZGVzLnB1c2gobm9kZSk7XHJcblxyXG4gICAgdGhpcy5fb3ZlcmxheS5hcHBlbmRDaGlsZChub2RlLmVsKTtcclxuXHJcbiAgICBub2RlLmVsLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSAnO1xyXG5cclxuICAgIHJldHVybiBub2RlO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgYSB0ZXh0IG5vZGUgZnJvbSB0aGUgZ2FtZS5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge1RleHR9IHRleHQgVGhlIHRleHQgb2JqZWN0IHRvIHJlbW92ZS5cclxuICAgKiBcclxuICAgKiBAZXhhbXBsZVxyXG4gICAqIFxyXG4gICAqIGNvbnN0IHR4dCA9IGdhbWV3cml0ZXIuYWRkVGV4dCgnaGVsbG8gd29ybGQhJyk7XHJcbiAgICogXHJcbiAgICogZ2FtZXdyaXRlci5yZW1vdmVUZXh0KHR4dCk7XHJcbiAgICovXHJcbiAgcmVtb3ZlVGV4dCh0ZXh0OiBUZXh0KSB7XHJcblxyXG4gICAgdGhpcy5fb3ZlcmxheS5yZW1vdmVDaGlsZCh0ZXh0LmVsKTtcclxuXHJcbiAgICB0aGlzLl9ub2RlcyA9IHRoaXMuX25vZGVzLmZpbHRlcigobm9kZTogVGV4dCkgPT4gbm9kZSAhPT0gdGV4dCk7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlcyBhbGwgdGV4dCBmcm9tIHRoZSBnYW1lLlxyXG4gICAqIFxyXG4gICAqIEBleGFtcGxlXHJcbiAgICogXHJcbiAgICogY29uc3QgdHh0ID0gZ2FtZXdyaXRlci5hZGRUZXh0KCdoZWxsbyB3b3JsZCEnKTtcclxuICAgKiBcclxuICAgKiBnYW1ld3JpdGVyLmNsZWFyKCk7XHJcbiAgICovXHJcbiAgY2xlYXIoKSB7XHJcblxyXG4gICAgd2hpbGUgKHRoaXMuX292ZXJsYXkubGFzdENoaWxkKSB0aGlzLl9vdmVybGF5LnJlbW92ZUNoaWxkKHRoaXMuX292ZXJsYXkubGFzdENoaWxkKTtcclxuXHJcbiAgICB0aGlzLl9ub2RlcyA9IFtdO1xyXG5cclxuICB9XHJcblxyXG59OyJdfQ==