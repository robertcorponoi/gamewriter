/**
 * Describes the options available for a text node.
 */
export default class TextOptions {
    /**
     * The size of the text.
     *
     * This should be a value from 1-10 with 1 being default and getting larger as it gets closer to 10.
     *
     * @property {number}
     *
     * @default 1
     */
    size: number;
    [key: string]: any;
    /**
     * @param {Object} options
     * @param {number} options.size The size of the text. This should be a value from 1-10 with 1 being default and getting larger as it gets closer to 10.
     */
    constructor(options: Object);
}
