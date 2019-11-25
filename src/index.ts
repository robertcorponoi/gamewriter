'use strict'

import Text from './text/Text';
import Options from './options/Options';
import { getNumberFromStyle, addPxToNumber } from './utils/style-operations';

import CanvasPosition from './interfaces/CanvasPosition';

/**
 * GameWriter uses the document to write over a canavas for increased performance when using text in games.
 */
export default class GameWriter {

  /**
   * A reference to the options for this instance.
   * 
   * @private
   * 
   * @property {Options}
   */
  private _options: Options;

  /**
   * A reference to the canvas used to display the game.
   * 
   * @private
   * 
   * @property {HTMLCanvasElement}
   */
  private _canvas: HTMLCanvasElement;

  /**
   * A reference to the canvas' position.
   * 
   * @private
   * 
   * @property {CanvasPosition}
   */
  private _canvasPosition: CanvasPosition;

  /**
   * A reference to the overlay div that contains all of the text nodes.
   * 
   * @private
   * 
   * @property {HTMLDivElement}
   */
  private _overlay: HTMLDivElement = document.createElement('div');

  /**
   * A reference to all of the text nodes that have been created.
   * 
   * @private
   * 
   * @property {Array<Text>}
   */
  private _nodes: Array<Text> = [];

  /**
   * @param {HTMLCanvasElement} canvas A reference to the canvas used to display the game.
   * @param {Object} [options]
   * @param {boolean} [options.autoDisplay=true] Indicates whether text nodes are displayed on the canvas after they are created or if they have to be displayed manually.
   */
  constructor(canvas: HTMLCanvasElement, options: Object = {}) {

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
  private _setup() {

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
   * @param {number} [options.size=1] The size of the text. This should be a value from 1-10 with 1 being default and getting larger as it gets closer to 10.   * 
   * 
   * @returns {Text} Returns the text node that was created.
   * 
   * @example
   * 
   * const txt = gamewriter.addText('hello world!');
   */
  addText(text: string, x: number, y: number, options: Object = {}): Text {

    const opts: Object = Object.assign(options, { canvasPosition: this._canvasPosition });

    const node: Text = new Text(text, x, y, opts);

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
  removeText(text: Text) {

    this._overlay.removeChild(text.el);

    this._nodes = this._nodes.filter((node: Text) => node !== text);

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
  clear() {

    while (this._overlay.lastChild) this._overlay.removeChild(this._overlay.lastChild);

    this._nodes = [];

  }

};