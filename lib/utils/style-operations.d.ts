/**
 * Used to strip px, em, rem, etc. from css styles.
 *
 * @param {string} value The style value to strip text from.
 *
 * @returns {number} Returns the number left over after stripping the text.
 */
export declare function getNumberFromStyle(value: string): number;
/**
 * Adds px to a number value.
 *
 * @param {number} value The number value to add px to.
 *
 * @returns {string} Returns the number value as a pixel value.
 */
export declare function addPxToNumber(value: number): string;
