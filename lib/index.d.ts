import Text from './text/Text';
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
    private _options;
    /**
     * A reference to the canvas used to display the game.
     *
     * @private
     *
     * @property {HTMLCanvasElement}
     */
    private _canvas;
    /**
     * A reference to the canvas' position.
     *
     * @private
     *
     * @property {CanvasPosition}
     */
    private _canvasPosition;
    /**
     * A reference to the overlay div that contains all of the text nodes.
     *
     * @private
     *
     * @property {HTMLDivElement}
     */
    private _overlay;
    /**
     * A reference to all of the text nodes that have been created.
     *
     * @private
     *
     * @property {Array<Text>}
     */
    private _nodes;
    /**
     * @param {HTMLCanvasElement} canvas A reference to the canvas used to display the game.
     * @param {Object} [options]
     * @param {boolean} [options.autoDisplay=true] Indicates whether text nodes are displayed on the canvas after they are created or if they have to be displayed manually.
     */
    constructor(canvas: HTMLCanvasElement, options?: Object);
    /**
     * Sets up the overlay position based on the canvas' position and adds it to the document.
     *
     * @private
     */
    private _setup;
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
    addText(text: string, x: number, y: number, options?: Object): Text;
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
    removeText(text: Text): void;
    /**
     * Removes all text from the game.
     *
     * @example
     *
     * const txt = gamewriter.addText('hello world!');
     *
     * gamewriter.clear();
     */
    clear(): void;
}
