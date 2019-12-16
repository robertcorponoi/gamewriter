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
    private _id;
    /**
     * A reference to the options for this text node.
     *
     * @private
     *
     * @property {TextOptions}
     */
    private _options;
    /**
     * A reference to the element that contains the text.
     *
     * @private
     *
     * @property {HTMLSpanElement}
     */
    private _el;
    /**
     * The text to display.
     *
     * @private
     *
     * @property {string}
     */
    private _text;
    /**
     * A reference to the y position of this text on the game board.
     *
     * @private
     *
     * @property {number}
     */
    private _x;
    /**
     * A reference to the y position of this text on the game board.
     *
     * @private
     *
     * @property {number}
     */
    private _y;
    /**
     * The size of the text.
     *
     * @private
     *
     * @property {number}
     */
    private _size;
    /**
     * The part of the text that is dynamic.
     *
     * @private
     *
     * @property {string}
     */
    private _dynamicText?;
    /**
     * The original text unaltered by dynamic parts.
     *
     * @private
     *
     * @property {string}
     */
    private _originalText;
    /**
     * @param {string} text The text to display.
     * @param {number} x The x coordinate of the text in relation to the game board.
     * @param {number} y The y coordinate of the text in relation to the game board.
     * @param {Object} [options]
     * @param {number} [options.size=1] The size of the text. This should be a value from 1-10 with 1 being default and getting larger as it gets closer to 10.
     * @param {string|RegExp} [options.dynamic] The portion of the text that should be dynamic. This can be either a string or a regex value.
     */
    constructor(text: string, x?: number, y?: number, options?: Object);
    /**
     * Returns the id for this text node.
     *
     * @returns {string}
     */
    get id(): string;
    /**
     * Returns the element that contains the text.
     *
     * @returns {HTMLSpanElement}
     */
    get el(): HTMLSpanElement;
    /**
     * Returns the x position of the text in relation to the game.
     *
     * @returns {number}
     */
    get x(): number;
    /**
     * Returns the y position of the text in relation to the game.
     *
     * @returns {number}
     */
    get y(): number;
    /**
     * Returns the size of the text.
     *
     * @returns {number}
     */
    get size(): number;
    /**
     * Returns the text displayed.
     *
     * @returns {string}
     */
    get text(): string;
    /**
     * Sets a new x position for the text.
     *
     * @param {number} newX The new x position of the text.
     */
    set x(newX: number);
    /**
     * Sets a new y position for the text.
     *
     * @param {number} newY The new y position of the text.
     */
    set y(newY: number);
    /**
     * Changes the size of the text.
     *
     * @param {number} newSize The new size to set for the text.
     */
    set size(newSize: number);
    /**
     * Changes the text displayed.
     *
     * @param {string} newText The text to display.
     */
    set text(newText: string);
    /**
     * Changes the x and y position of the text element.
     *
     * This is syntatic sugar to changing the x and y positions independently.
     *
     * @param {number} x The x position to move to.
     * @param {number} y The y position to move to.
     */
    move(x: number, y: number): void;
    /**
     * Hides the text element.
     */
    hide(): void;
    /**
     * Shows the text element.
     */
    show(): void;
    /**
     * Sets a piece of the text to be dynamic.
     *
     * This dynamic part of the text can then be easily changed with `changeDynamic`.
     *
     * @param {string} text The part of the text that should be dynamic.
     */
    setDynamic(text: string): void;
    /**
     * Change the text content of the dynamic text portion of the text.
     *
     * @param {string} text The text to display in place of the dynamic text.
     */
    changeDynamic(text: string): void;
    /**
     * Sets up the position of this element and then adds it to the document.
     *
     * @private
     */
    private _setup;
}
