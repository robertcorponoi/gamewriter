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
    /**
     * An id to add to the text element.
     *
     * @property {string}
     */
    id?: string;
    /**
     * Classes to add to the text element.
     *
     * @property {Array<string>}
     *
     * @default []
     */
    classes: Array<string>;
    /**
     * Additional options passed automatically by gamewriter.
     *
     * @property {*}
     */
    [key: string]: any;
    /**
     * @param {Object} options
     * @param {number} options.size The size of the text. This should be a value from 1-10 with 1 being default and getting larger as it gets closer to 10.
     * @param {string} options.id An id to add to the text element.
     * @param {Array<string>} options.classes Classes to add to the text element.
     */
    constructor(options: Object);
}
