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
   * @param {Array<string>} [options.classes=[]] Class names to add to each text node created.
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
     * @param {number} [options.size=1] The size of the text. This should be a value from 1-10 with 1 being default and getting larger as it gets closer to 10.
     * @param {string} [options.id] An id to add to the text element.
     * @param {Array<string>} [options.classes=[]] Classes to add to the text element.
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
        globalClasses: this._options.classes,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJHYW1lV3JpdGVyIiwiY2FudmFzIiwib3B0aW9ucyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIl9vcHRpb25zIiwiT3B0aW9ucyIsIl9jYW52YXMiLCJfY2FudmFzUG9zaXRpb24iLCJ0b3AiLCJzdHlsZSIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsIl9zZXR1cCIsIl9vdmVybGF5IiwiaWQiLCJwb3NpdGlvbiIsIm92ZXJmbG93IiwidGV4dE92ZXJmbG93Iiwid2hpdGVTcGFjZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInRleHQiLCJ4IiwieSIsIm9wdHMiLCJPYmplY3QiLCJhc3NpZ24iLCJnbG9iYWxDbGFzc2VzIiwiY2xhc3NlcyIsImNhbnZhc1Bvc2l0aW9uIiwibm9kZSIsIlRleHQiLCJhdXRvRGlzcGxheSIsImhpZGUiLCJfbm9kZXMiLCJwdXNoIiwiZWwiLCJ2aXNpYmlsaXR5IiwicmVtb3ZlQ2hpbGQiLCJmaWx0ZXIiLCJsYXN0Q2hpbGQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUlBOzs7SUFHcUJBLFU7OztBQUVuQjs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7O0FBTUEsc0JBQVlDLE1BQVosRUFBNkQ7QUFBQSxRQUF0QkMsT0FBc0IsdUVBQUosRUFBSTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSxzQ0FqQjFCQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FpQjBCOztBQUFBLG9DQVIvQixFQVErQjs7QUFFM0QsU0FBS0MsUUFBTCxHQUFnQixJQUFJQyxtQkFBSixDQUFZSixPQUFaLENBQWhCO0FBRUEsU0FBS0ssT0FBTCxHQUFlTixNQUFmO0FBRUEsU0FBS08sZUFBTCxHQUF1QjtBQUVyQkMsTUFBQUEsR0FBRyxFQUFFLHlDQUFtQixL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aEM7O0FBRUEsV0FBS04sTUFBTCxHQUFjLEVBQWQ7QUFFRDs7Ozs7OztBQUVGIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG5pbXBvcnQgVGV4dCBmcm9tICcuL3RleHQvVGV4dCc7XHJcbmltcG9ydCBPcHRpb25zIGZyb20gJy4vb3B0aW9ucy9PcHRpb25zJztcclxuaW1wb3J0IHsgZ2V0TnVtYmVyRnJvbVN0eWxlLCBhZGRQeFRvTnVtYmVyIH0gZnJvbSAnLi91dGlscy9zdHlsZS1vcGVyYXRpb25zJztcclxuXHJcbmltcG9ydCBDYW52YXNQb3NpdGlvbiBmcm9tICcuL2ludGVyZmFjZXMvQ2FudmFzUG9zaXRpb24nO1xyXG5cclxuLyoqXHJcbiAqIEdhbWVXcml0ZXIgdXNlcyB0aGUgZG9jdW1lbnQgdG8gd3JpdGUgb3ZlciBhIGNhbmF2YXMgZm9yIGluY3JlYXNlZCBwZXJmb3JtYW5jZSB3aGVuIHVzaW5nIHRleHQgaW4gZ2FtZXMuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lV3JpdGVyIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIG9wdGlvbnMgZm9yIHRoaXMgaW5zdGFuY2UuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge09wdGlvbnN9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfb3B0aW9uczogT3B0aW9ucztcclxuXHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIGNhbnZhcyB1c2VkIHRvIGRpc3BsYXkgdGhlIGdhbWUuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge0hUTUxDYW52YXNFbGVtZW50fVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2NhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBjYW52YXMnIHBvc2l0aW9uLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtDYW52YXNQb3NpdGlvbn1cclxuICAgKi9cclxuICBwcml2YXRlIF9jYW52YXNQb3NpdGlvbjogQ2FudmFzUG9zaXRpb247XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBvdmVybGF5IGRpdiB0aGF0IGNvbnRhaW5zIGFsbCBvZiB0aGUgdGV4dCBub2Rlcy5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7SFRNTERpdkVsZW1lbnR9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfb3ZlcmxheTogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gYWxsIG9mIHRoZSB0ZXh0IG5vZGVzIHRoYXQgaGF2ZSBiZWVuIGNyZWF0ZWQuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge0FycmF5PFRleHQ+fVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX25vZGVzOiBBcnJheTxUZXh0PiA9IFtdO1xyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge0hUTUxDYW52YXNFbGVtZW50fSBjYW52YXMgQSByZWZlcmVuY2UgdG8gdGhlIGNhbnZhcyB1c2VkIHRvIGRpc3BsYXkgdGhlIGdhbWUuXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuYXV0b0Rpc3BsYXk9dHJ1ZV0gSW5kaWNhdGVzIHdoZXRoZXIgdGV4dCBub2RlcyBhcmUgZGlzcGxheWVkIG9uIHRoZSBjYW52YXMgYWZ0ZXIgdGhleSBhcmUgY3JlYXRlZCBvciBpZiB0aGV5IGhhdmUgdG8gYmUgZGlzcGxheWVkIG1hbnVhbGx5LlxyXG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gW29wdGlvbnMuY2xhc3Nlcz1bXV0gQ2xhc3MgbmFtZXMgdG8gYWRkIHRvIGVhY2ggdGV4dCBub2RlIGNyZWF0ZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgb3B0aW9uczogT2JqZWN0ID0ge30pIHtcclxuXHJcbiAgICB0aGlzLl9vcHRpb25zID0gbmV3IE9wdGlvbnMob3B0aW9ucyk7XHJcblxyXG4gICAgdGhpcy5fY2FudmFzID0gY2FudmFzO1xyXG5cclxuICAgIHRoaXMuX2NhbnZhc1Bvc2l0aW9uID0ge1xyXG5cclxuICAgICAgdG9wOiBnZXROdW1iZXJGcm9tU3R5bGUodGhpcy5fY2FudmFzLnN0eWxlLnRvcCB8fCAnMHB4JyksXHJcblxyXG4gICAgICBsZWZ0OiBnZXROdW1iZXJGcm9tU3R5bGUodGhpcy5fY2FudmFzLnN0eWxlLmxlZnQgfHwgJzBweCcpLFxyXG5cclxuICAgICAgd2lkdGg6IHRoaXMuX2NhbnZhcy53aWR0aCxcclxuXHJcbiAgICAgIGhlaWdodDogdGhpcy5fY2FudmFzLmhlaWdodFxyXG5cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5fc2V0dXAoKTtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHVwIHRoZSBvdmVybGF5IHBvc2l0aW9uIGJhc2VkIG9uIHRoZSBjYW52YXMnIHBvc2l0aW9uIGFuZCBhZGRzIGl0IHRvIHRoZSBkb2N1bWVudC5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX3NldHVwKCkge1xyXG5cclxuICAgIHRoaXMuX292ZXJsYXkuaWQgPSAnZ2FtZXdyaXRlci1vdmVybGF5JztcclxuXHJcbiAgICB0aGlzLl9vdmVybGF5LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuXHJcbiAgICB0aGlzLl9vdmVybGF5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcblxyXG4gICAgdGhpcy5fb3ZlcmxheS5zdHlsZS50ZXh0T3ZlcmZsb3cgPSAnZWxsaXBzaXMnO1xyXG5cclxuICAgIHRoaXMuX292ZXJsYXkuc3R5bGUud2hpdGVTcGFjZSA9ICdub3dyYXAnO1xyXG5cclxuICAgIHRoaXMuX292ZXJsYXkuc3R5bGUudG9wID0gYWRkUHhUb051bWJlcih0aGlzLl9jYW52YXNQb3NpdGlvbi50b3ApO1xyXG5cclxuICAgIHRoaXMuX292ZXJsYXkuc3R5bGUubGVmdCA9IGFkZFB4VG9OdW1iZXIodGhpcy5fY2FudmFzUG9zaXRpb24ubGVmdCk7XHJcblxyXG4gICAgdGhpcy5fb3ZlcmxheS5zdHlsZS53aWR0aCA9IGFkZFB4VG9OdW1iZXIodGhpcy5fY2FudmFzUG9zaXRpb24ud2lkdGgpO1xyXG5cclxuICAgIHRoaXMuX292ZXJsYXkuc3R5bGUuaGVpZ2h0ID0gYWRkUHhUb051bWJlcih0aGlzLl9jYW52YXNQb3NpdGlvbi5oZWlnaHQpO1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5fb3ZlcmxheSk7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyB0ZXh0IG5vZGUgdG8gYWRkIHRvIHRoZSBnYW1lLlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IFRoZSB0ZXh0IHRvIGRpc3BsYXkuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHggVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgdGV4dCBpbiByZWxhdGlvbiB0byB0aGUgZ2FtZSBib2FyZC5cclxuICAgKiBAcGFyYW0ge251bWJlcn0geSBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSB0ZXh0IGluIHJlbGF0aW9uIHRvIHRoZSBnYW1lIGJvYXJkLlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cclxuICAgKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMuc2l6ZT0xXSBUaGUgc2l6ZSBvZiB0aGUgdGV4dC4gVGhpcyBzaG91bGQgYmUgYSB2YWx1ZSBmcm9tIDEtMTAgd2l0aCAxIGJlaW5nIGRlZmF1bHQgYW5kIGdldHRpbmcgbGFyZ2VyIGFzIGl0IGdldHMgY2xvc2VyIHRvIDEwLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5pZF0gQW4gaWQgdG8gYWRkIHRvIHRoZSB0ZXh0IGVsZW1lbnQuXHJcbiAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBbb3B0aW9ucy5jbGFzc2VzPVtdXSBDbGFzc2VzIHRvIGFkZCB0byB0aGUgdGV4dCBlbGVtZW50LlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtUZXh0fSBSZXR1cm5zIHRoZSB0ZXh0IG5vZGUgdGhhdCB3YXMgY3JlYXRlZC5cclxuICAgKiBcclxuICAgKiBAZXhhbXBsZVxyXG4gICAqIFxyXG4gICAqIGNvbnN0IHR4dCA9IGdhbWV3cml0ZXIuYWRkVGV4dCgnaGVsbG8gd29ybGQhJyk7XHJcbiAgICovXHJcbiAgYWRkVGV4dCh0ZXh0OiBzdHJpbmcsIHg6IG51bWJlciwgeTogbnVtYmVyLCBvcHRpb25zOiBPYmplY3QgPSB7fSk6IFRleHQge1xyXG5cclxuICAgIGNvbnN0IG9wdHM6IE9iamVjdCA9IE9iamVjdC5hc3NpZ24ob3B0aW9ucywgeyBnbG9iYWxDbGFzc2VzOiB0aGlzLl9vcHRpb25zLmNsYXNzZXMsIGNhbnZhc1Bvc2l0aW9uOiB0aGlzLl9jYW52YXNQb3NpdGlvbiB9KTtcclxuXHJcbiAgICBjb25zdCBub2RlOiBUZXh0ID0gbmV3IFRleHQodGV4dCwgeCwgeSwgb3B0cyk7XHJcblxyXG4gICAgaWYgKCF0aGlzLl9vcHRpb25zLmF1dG9EaXNwbGF5KSBub2RlLmhpZGUoKTtcclxuXHJcbiAgICB0aGlzLl9ub2Rlcy5wdXNoKG5vZGUpO1xyXG5cclxuICAgIHRoaXMuX292ZXJsYXkuYXBwZW5kQ2hpbGQobm9kZS5lbCk7XHJcblxyXG4gICAgbm9kZS5lbC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUgJztcclxuXHJcbiAgICByZXR1cm4gbm9kZTtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmVzIGEgdGV4dCBub2RlIGZyb20gdGhlIGdhbWUuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtUZXh0fSB0ZXh0IFRoZSB0ZXh0IG9iamVjdCB0byByZW1vdmUuXHJcbiAgICogXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiBcclxuICAgKiBjb25zdCB0eHQgPSBnYW1ld3JpdGVyLmFkZFRleHQoJ2hlbGxvIHdvcmxkIScpO1xyXG4gICAqIFxyXG4gICAqIGdhbWV3cml0ZXIucmVtb3ZlVGV4dCh0eHQpO1xyXG4gICAqL1xyXG4gIHJlbW92ZVRleHQodGV4dDogVGV4dCkge1xyXG5cclxuICAgIHRoaXMuX292ZXJsYXkucmVtb3ZlQ2hpbGQodGV4dC5lbCk7XHJcblxyXG4gICAgdGhpcy5fbm9kZXMgPSB0aGlzLl9ub2Rlcy5maWx0ZXIoKG5vZGU6IFRleHQpID0+IG5vZGUgIT09IHRleHQpO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgYWxsIHRleHQgZnJvbSB0aGUgZ2FtZS5cclxuICAgKiBcclxuICAgKiBAZXhhbXBsZVxyXG4gICAqIFxyXG4gICAqIGNvbnN0IHR4dCA9IGdhbWV3cml0ZXIuYWRkVGV4dCgnaGVsbG8gd29ybGQhJyk7XHJcbiAgICogXHJcbiAgICogZ2FtZXdyaXRlci5jbGVhcigpO1xyXG4gICAqL1xyXG4gIGNsZWFyKCkge1xyXG5cclxuICAgIHdoaWxlICh0aGlzLl9vdmVybGF5Lmxhc3RDaGlsZCkgdGhpcy5fb3ZlcmxheS5yZW1vdmVDaGlsZCh0aGlzLl9vdmVybGF5Lmxhc3RDaGlsZCk7XHJcblxyXG4gICAgdGhpcy5fbm9kZXMgPSBbXTtcclxuXHJcbiAgfVxyXG5cclxufTsiXX0=