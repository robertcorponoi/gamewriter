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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJHYW1lV3JpdGVyIiwiY2FudmFzIiwib3B0aW9ucyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIl9vcHRpb25zIiwiT3B0aW9ucyIsIl9jYW52YXMiLCJfY2FudmFzUG9zaXRpb24iLCJ0b3AiLCJzdHlsZSIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsIl9zZXR1cCIsIl9vdmVybGF5IiwiaWQiLCJwb3NpdGlvbiIsIm92ZXJmbG93IiwidGV4dE92ZXJmbG93Iiwid2hpdGVTcGFjZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInRleHQiLCJ4IiwieSIsIm9wdHMiLCJPYmplY3QiLCJhc3NpZ24iLCJnbG9iYWxDbGFzc2VzIiwiY2xhc3NlcyIsImNhbnZhc1Bvc2l0aW9uIiwibm9kZSIsIlRleHQiLCJhdXRvRGlzcGxheSIsImhpZGUiLCJfbm9kZXMiLCJwdXNoIiwiZWwiLCJ2aXNpYmlsaXR5IiwicmVtb3ZlQ2hpbGQiLCJmaWx0ZXIiLCJsYXN0Q2hpbGQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUlBOzs7SUFHcUJBLFU7OztBQUVuQjs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7O0FBTUEsc0JBQVlDLE1BQVosRUFBNkQ7QUFBQSxRQUF0QkMsT0FBc0IsdUVBQUosRUFBSTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSxzQ0FqQjFCQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FpQjBCOztBQUFBLG9DQVIvQixFQVErQjs7QUFFM0QsU0FBS0MsUUFBTCxHQUFnQixJQUFJQyxtQkFBSixDQUFZSixPQUFaLENBQWhCO0FBRUEsU0FBS0ssT0FBTCxHQUFlTixNQUFmO0FBRUEsU0FBS08sZUFBTCxHQUF1QjtBQUVyQkMsTUFBQUEsR0FBRyxFQUFFLHlDQUFtQixL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aEM7O0FBRUEsV0FBS04sTUFBTCxHQUFjLEVBQWQ7QUFFRDs7Ozs7OztBQUVGIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCBUZXh0IGZyb20gJy4vdGV4dC9UZXh0JztcbmltcG9ydCBPcHRpb25zIGZyb20gJy4vb3B0aW9ucy9PcHRpb25zJztcbmltcG9ydCB7IGdldE51bWJlckZyb21TdHlsZSwgYWRkUHhUb051bWJlciB9IGZyb20gJy4vdXRpbHMvc3R5bGUtb3BlcmF0aW9ucyc7XG5cbmltcG9ydCBDYW52YXNQb3NpdGlvbiBmcm9tICcuL2ludGVyZmFjZXMvQ2FudmFzUG9zaXRpb24nO1xuXG4vKipcbiAqIEdhbWVXcml0ZXIgdXNlcyB0aGUgZG9jdW1lbnQgdG8gd3JpdGUgb3ZlciBhIGNhbmF2YXMgZm9yIGluY3JlYXNlZCBwZXJmb3JtYW5jZSB3aGVuIHVzaW5nIHRleHQgaW4gZ2FtZXMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVXcml0ZXIge1xuXG4gIC8qKlxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgb3B0aW9ucyBmb3IgdGhpcyBpbnN0YW5jZS5cbiAgICogXG4gICAqIEBwcml2YXRlXG4gICAqIFxuICAgKiBAcHJvcGVydHkge09wdGlvbnN9XG4gICAqL1xuICBwcml2YXRlIF9vcHRpb25zOiBPcHRpb25zO1xuXG4gIC8qKlxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgY2FudmFzIHVzZWQgdG8gZGlzcGxheSB0aGUgZ2FtZS5cbiAgICogXG4gICAqIEBwcml2YXRlXG4gICAqIFxuICAgKiBAcHJvcGVydHkge0hUTUxDYW52YXNFbGVtZW50fVxuICAgKi9cbiAgcHJpdmF0ZSBfY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcblxuICAvKipcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIGNhbnZhcycgcG9zaXRpb24uXG4gICAqIFxuICAgKiBAcHJpdmF0ZVxuICAgKiBcbiAgICogQHByb3BlcnR5IHtDYW52YXNQb3NpdGlvbn1cbiAgICovXG4gIHByaXZhdGUgX2NhbnZhc1Bvc2l0aW9uOiBDYW52YXNQb3NpdGlvbjtcblxuICAvKipcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIG92ZXJsYXkgZGl2IHRoYXQgY29udGFpbnMgYWxsIG9mIHRoZSB0ZXh0IG5vZGVzLlxuICAgKiBcbiAgICogQHByaXZhdGVcbiAgICogXG4gICAqIEBwcm9wZXJ0eSB7SFRNTERpdkVsZW1lbnR9XG4gICAqL1xuICBwcml2YXRlIF9vdmVybGF5OiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIC8qKlxuICAgKiBBIHJlZmVyZW5jZSB0byBhbGwgb2YgdGhlIHRleHQgbm9kZXMgdGhhdCBoYXZlIGJlZW4gY3JlYXRlZC5cbiAgICogXG4gICAqIEBwcml2YXRlXG4gICAqIFxuICAgKiBAcHJvcGVydHkge0FycmF5PFRleHQ+fVxuICAgKi9cbiAgcHJpdmF0ZSBfbm9kZXM6IEFycmF5PFRleHQ+ID0gW107XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTENhbnZhc0VsZW1lbnR9IGNhbnZhcyBBIHJlZmVyZW5jZSB0byB0aGUgY2FudmFzIHVzZWQgdG8gZGlzcGxheSB0aGUgZ2FtZS5cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmF1dG9EaXNwbGF5PXRydWVdIEluZGljYXRlcyB3aGV0aGVyIHRleHQgbm9kZXMgYXJlIGRpc3BsYXllZCBvbiB0aGUgY2FudmFzIGFmdGVyIHRoZXkgYXJlIGNyZWF0ZWQgb3IgaWYgdGhleSBoYXZlIHRvIGJlIGRpc3BsYXllZCBtYW51YWxseS5cbiAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBbb3B0aW9ucy5jbGFzc2VzPVtdXSBDbGFzcyBuYW1lcyB0byBhZGQgdG8gZWFjaCB0ZXh0IG5vZGUgY3JlYXRlZC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIG9wdGlvbnM6IE9iamVjdCA9IHt9KSB7XG5cbiAgICB0aGlzLl9vcHRpb25zID0gbmV3IE9wdGlvbnMob3B0aW9ucyk7XG5cbiAgICB0aGlzLl9jYW52YXMgPSBjYW52YXM7XG5cbiAgICB0aGlzLl9jYW52YXNQb3NpdGlvbiA9IHtcblxuICAgICAgdG9wOiBnZXROdW1iZXJGcm9tU3R5bGUodGhpcy5fY2FudmFzLnN0eWxlLnRvcCB8fCAnMHB4JyksXG5cbiAgICAgIGxlZnQ6IGdldE51bWJlckZyb21TdHlsZSh0aGlzLl9jYW52YXMuc3R5bGUubGVmdCB8fCAnMHB4JyksXG5cbiAgICAgIHdpZHRoOiB0aGlzLl9jYW52YXMud2lkdGgsXG5cbiAgICAgIGhlaWdodDogdGhpcy5fY2FudmFzLmhlaWdodFxuXG4gICAgfTtcblxuICAgIHRoaXMuX3NldHVwKCk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHVwIHRoZSBvdmVybGF5IHBvc2l0aW9uIGJhc2VkIG9uIHRoZSBjYW52YXMnIHBvc2l0aW9uIGFuZCBhZGRzIGl0IHRvIHRoZSBkb2N1bWVudC5cbiAgICogXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIF9zZXR1cCgpIHtcblxuICAgIHRoaXMuX292ZXJsYXkuaWQgPSAnZ2FtZXdyaXRlci1vdmVybGF5JztcblxuICAgIHRoaXMuX292ZXJsYXkuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuXG4gICAgdGhpcy5fb3ZlcmxheS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuXG4gICAgdGhpcy5fb3ZlcmxheS5zdHlsZS50ZXh0T3ZlcmZsb3cgPSAnZWxsaXBzaXMnO1xuXG4gICAgdGhpcy5fb3ZlcmxheS5zdHlsZS53aGl0ZVNwYWNlID0gJ25vd3JhcCc7XG5cbiAgICB0aGlzLl9vdmVybGF5LnN0eWxlLnRvcCA9IGFkZFB4VG9OdW1iZXIodGhpcy5fY2FudmFzUG9zaXRpb24udG9wKTtcblxuICAgIHRoaXMuX292ZXJsYXkuc3R5bGUubGVmdCA9IGFkZFB4VG9OdW1iZXIodGhpcy5fY2FudmFzUG9zaXRpb24ubGVmdCk7XG5cbiAgICB0aGlzLl9vdmVybGF5LnN0eWxlLndpZHRoID0gYWRkUHhUb051bWJlcih0aGlzLl9jYW52YXNQb3NpdGlvbi53aWR0aCk7XG5cbiAgICB0aGlzLl9vdmVybGF5LnN0eWxlLmhlaWdodCA9IGFkZFB4VG9OdW1iZXIodGhpcy5fY2FudmFzUG9zaXRpb24uaGVpZ2h0KTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5fb3ZlcmxheSk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IHRleHQgbm9kZSB0byBhZGQgdG8gdGhlIGdhbWUuXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBUaGUgdGV4dCB0byBkaXNwbGF5LlxuICAgKiBAcGFyYW0ge251bWJlcn0geCBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSB0ZXh0IGluIHJlbGF0aW9uIHRvIHRoZSBnYW1lIGJvYXJkLlxuICAgKiBAcGFyYW0ge251bWJlcn0geSBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSB0ZXh0IGluIHJlbGF0aW9uIHRvIHRoZSBnYW1lIGJvYXJkLlxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5zaXplPTFdIFRoZSBzaXplIG9mIHRoZSB0ZXh0LiBUaGlzIHNob3VsZCBiZSBhIHZhbHVlIGZyb20gMS0xMCB3aXRoIDEgYmVpbmcgZGVmYXVsdCBhbmQgZ2V0dGluZyBsYXJnZXIgYXMgaXQgZ2V0cyBjbG9zZXIgdG8gMTAuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5pZF0gQW4gaWQgdG8gYWRkIHRvIHRoZSB0ZXh0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gW29wdGlvbnMuY2xhc3Nlcz1bXV0gQ2xhc3NlcyB0byBhZGQgdG8gdGhlIHRleHQgZWxlbWVudC5cbiAgICogXG4gICAqIEByZXR1cm5zIHtUZXh0fSBSZXR1cm5zIHRoZSB0ZXh0IG5vZGUgdGhhdCB3YXMgY3JlYXRlZC5cbiAgICogXG4gICAqIEBleGFtcGxlXG4gICAqIFxuICAgKiBjb25zdCB0eHQgPSBnYW1ld3JpdGVyLmFkZFRleHQoJ2hlbGxvIHdvcmxkIScpO1xuICAgKi9cbiAgYWRkVGV4dCh0ZXh0OiBzdHJpbmcsIHg6IG51bWJlciwgeTogbnVtYmVyLCBvcHRpb25zOiBPYmplY3QgPSB7fSk6IFRleHQge1xuXG4gICAgY29uc3Qgb3B0czogT2JqZWN0ID0gT2JqZWN0LmFzc2lnbihvcHRpb25zLCB7IGdsb2JhbENsYXNzZXM6IHRoaXMuX29wdGlvbnMuY2xhc3NlcywgY2FudmFzUG9zaXRpb246IHRoaXMuX2NhbnZhc1Bvc2l0aW9uIH0pO1xuXG4gICAgY29uc3Qgbm9kZTogVGV4dCA9IG5ldyBUZXh0KHRleHQsIHgsIHksIG9wdHMpO1xuXG4gICAgaWYgKCF0aGlzLl9vcHRpb25zLmF1dG9EaXNwbGF5KSBub2RlLmhpZGUoKTtcblxuICAgIHRoaXMuX25vZGVzLnB1c2gobm9kZSk7XG5cbiAgICB0aGlzLl9vdmVybGF5LmFwcGVuZENoaWxkKG5vZGUuZWwpO1xuXG4gICAgbm9kZS5lbC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUgJztcblxuICAgIHJldHVybiBub2RlO1xuXG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhIHRleHQgbm9kZSBmcm9tIHRoZSBnYW1lLlxuICAgKiBcbiAgICogQHBhcmFtIHtUZXh0fSB0ZXh0IFRoZSB0ZXh0IG9iamVjdCB0byByZW1vdmUuXG4gICAqIFxuICAgKiBAZXhhbXBsZVxuICAgKiBcbiAgICogY29uc3QgdHh0ID0gZ2FtZXdyaXRlci5hZGRUZXh0KCdoZWxsbyB3b3JsZCEnKTtcbiAgICogXG4gICAqIGdhbWV3cml0ZXIucmVtb3ZlVGV4dCh0eHQpO1xuICAgKi9cbiAgcmVtb3ZlVGV4dCh0ZXh0OiBUZXh0KSB7XG5cbiAgICB0aGlzLl9vdmVybGF5LnJlbW92ZUNoaWxkKHRleHQuZWwpO1xuXG4gICAgdGhpcy5fbm9kZXMgPSB0aGlzLl9ub2Rlcy5maWx0ZXIoKG5vZGU6IFRleHQpID0+IG5vZGUgIT09IHRleHQpO1xuXG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbGwgdGV4dCBmcm9tIHRoZSBnYW1lLlxuICAgKiBcbiAgICogQGV4YW1wbGVcbiAgICogXG4gICAqIGNvbnN0IHR4dCA9IGdhbWV3cml0ZXIuYWRkVGV4dCgnaGVsbG8gd29ybGQhJyk7XG4gICAqIFxuICAgKiBnYW1ld3JpdGVyLmNsZWFyKCk7XG4gICAqL1xuICBjbGVhcigpIHtcblxuICAgIHdoaWxlICh0aGlzLl9vdmVybGF5Lmxhc3RDaGlsZCkgdGhpcy5fb3ZlcmxheS5yZW1vdmVDaGlsZCh0aGlzLl9vdmVybGF5Lmxhc3RDaGlsZCk7XG5cbiAgICB0aGlzLl9ub2RlcyA9IFtdO1xuXG4gIH1cblxufTsiXX0=