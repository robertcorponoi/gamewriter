'use strict'

import uuidv4 from '../utils/uuid';
import TextOptions from './TextOptions';
import { addPxToNumber } from '../utils/style-operations';

/**
 * The Text module represents a text object added to the game board.
 */
export default class Text {

  /**
   * The id for this text node.
   * 
   * @private
   * 
   * @property {string}
   */
  private _id: string = uuidv4();

  /**
   * A reference to the options for this text node.
   * 
   * @private
   * 
   * @property {TextOptions}
   */
  private _options: TextOptions;

  /**
   * A reference to the element that contains the text.
   * 
   * @private
   * 
   * @property {HTMLSpanElement}
   */
  private _el: HTMLSpanElement = document.createElement('span');

  /**
   * The text to display.
   * 
   * @private
   * 
   * @property {string}
   */
  private _text: string;

  /**
   * A reference to the y position of this text on the game board.
   * 
   * @private
   * 
   * @property {number}
   */
  private _x: number;

  /**
   * A reference to the y position of this text on the game board.
   * 
   * @private
   * 
   * @property {number}
   */
  private _y: number;

  /**
   * The size of the text.
   * 
   * @private
   * 
   * @property {number}
   */
  private _size: number;

  /**
   * @param {string} text The text to display.
   * @param {number} x The x coordinate of the text in relation to the game board.
   * @param {number} y The y coordinate of the text in relation to the game board.
   * @param {Object} [options]
   * @param {number} [options.size=1] The size of the text. This should be a value from 1-10 with 1 being default and getting larger as it gets closer to 10.
   * @param {string|RegExp} [options.dynamic] The portion of the text that should be dynamic. This can be either a string or a regex value.
   */
  constructor(text: string, x: number = 0, y: number = 0, options: Object = {}) {

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
  get id(): string { return this._id; }

  /**
   * Returns the element that contains the text.
   * 
   * @returns {HTMLSpanElement}
   */
  get el(): HTMLSpanElement { return this._el; }

  /**
   * Returns the x position of the text in relation to the game.
   * 
   * @returns {number}
   */
  get x(): number { return this._x; }

  /**
   * Returns the y position of the text in relation to the game.
   * 
   * @returns {number}
   */
  get y(): number { return this._y; }

  /**
   * Returns the size of the text.
   * 
   * @returns {number}
   */
  get size(): number { return this._size; }

  /**
   * Returns the text displayed.
   * 
   * @returns {string}
   */
  get text(): string { return this._text; }

  /**
   * Sets a new x position for the text.
   * 
   * @param {number} newX The new x position of the text.
   */
  set x(newX: number) {

    this._x = newX;

    this._el.style.left = addPxToNumber(this._options.canvasPosition.left + this._x);

  }

  /**
   * Sets a new y position for the text.
   * 
   * @param {number} newY The new y position of the text.
   */
  set y(newY: number) {

    this._y = newY;

    this._el.style.top = addPxToNumber(this._options.canvasPosition.top + this._y);

  }

  /**
   * Changes the size of the text.
   * 
   * @param {number} newSize The new size to set for the text.
   */
  set size(newSize: number) {

    this._options._size = newSize;

    this._el.style.fontSize = `${newSize}rem`;

  }

  /**
   * Changes the text displayed.
   * 
   * @param {string} newText The text to display.
   */
  set text(newText: string) {

    this._text = newText;

    this._el.textContent = newText;

  }

  /**
   * Changes the x and y position of the text element.
   * 
   * This is syntatic sugar to changing the x and y positions independently.
   * 
   * @param {number} x The x position to move to.
   * @param {number} y The y position to move to.
   */
  move(x: number, y: number) {

    this.x = x;

    this.y = y;

  }

  /**
   * Hides the text element.
   */
  hide() {

    this._el.style.visibility = 'hidden';

  }

  /**
   * Shows the text element.
   */
  show() {

    this._el.style.visibility = 'visible';

  }

  /**
   * Sets up the position of this element and then adds it to the document.
   * 
   * @private
   */
  private _setup() {

    this._el.style.fontSize = `${this._options.size}rem`;

    if (this._options.id) this._el.id = this._options.id;

    this._el.style.position = 'absolute';

    this._el.style.top = addPxToNumber(this._options.canvasPosition.top + this._y);

    this._el.style.left = addPxToNumber(this._options.canvasPosition.left + this._x);

    this._el.style.visibility = 'hidden';

    this._options.classes.map((cl: string) => this._el.classList.add(cl));

    this._options.globalClasses.map((cl: string) => this._el.classList.add(cl));

  }

};