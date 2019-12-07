function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/**
 * Generates a v4 uuid.
 * 
 * @returns {string}
 */

function uuidv4() {
  // @ts-ignore
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
    return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
  });
}

var TextOptions =
/**
 * @param {Object} options
 * @param {number} options.size The size of the text. This should be a value from 1-10 with 1 being default and getting larger as it gets closer to 10.
 * @param {string} options.id An id to add to the text element.
 * @param {Array<string>} options.classes Classes to add to the text element.
 */
function TextOptions(options) {
  _classCallCheck(this, TextOptions);

  _defineProperty(this, "size", 1);

  _defineProperty(this, "id", void 0);

  _defineProperty(this, "classes", []);

  Object.assign(this, options);
};

/**
 * Used to strip px, em, rem, etc. from css styles.
 * 
 * @param {string} value The style value to strip text from.
 * 
 * @returns {number} Returns the number left over after stripping the text.
 */

function getNumberFromStyle(value) {
  var num = value.replace(/(px|em|rem|%)/, '');
  return parseInt(num);
}
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

    _defineProperty(this, "_id", uuidv4());

    _defineProperty(this, "_options", void 0);

    _defineProperty(this, "_el", document.createElement('span'));

    _defineProperty(this, "_text", void 0);

    _defineProperty(this, "_x", void 0);

    _defineProperty(this, "_y", void 0);

    _defineProperty(this, "_size", void 0);

    this._options = new TextOptions(options);
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
      this._el.style.top = addPxToNumber(this._options.canvasPosition.top + this._y);
      this._el.style.left = addPxToNumber(this._options.canvasPosition.left + this._x);
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
      this._el.style.left = addPxToNumber(this._options.canvasPosition.left + this._x);
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
      this._el.style.top = addPxToNumber(this._options.canvasPosition.top + this._y);
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

var Options =
/**
 * Indicates whether text nodes are displayed on the canvas after they are created or if they have to 
 * be displayed manually.
 * 
 * @property {boolean}
 * 
 * @default true
 */

/**
 * Class names to add to each text node created.
 * 
 * @property {Array<string>}
 */

/**
 * @param {Object} options
 * @param {boolean} [options.autoDisplay=true] Indicates whether text nodes are displayed on the canvas after they are created or if they have to be displayed manually.
 * @param {Array<string>} [options.classes=[]] Class names to add to each text node created.
 */
function Options(options) {
  _classCallCheck(this, Options);

  _defineProperty(this, "autoDisplay", true);

  _defineProperty(this, "classes", []);

  Object.assign(this, options);
};

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

    this._options = new Options(options);
    this._canvas = canvas;
    this._canvasPosition = {
      top: getNumberFromStyle(this._canvas.style.top || '0px'),
      left: getNumberFromStyle(this._canvas.style.left || '0px'),
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
      this._overlay.style.top = addPxToNumber(this._canvasPosition.top);
      this._overlay.style.left = addPxToNumber(this._canvasPosition.left);
      this._overlay.style.width = addPxToNumber(this._canvasPosition.width);
      this._overlay.style.height = addPxToNumber(this._canvasPosition.height);
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
      var node = new Text(text, x, y, opts);
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

export default GameWriter;
