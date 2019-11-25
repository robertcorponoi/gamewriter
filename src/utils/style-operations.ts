'use strict'

/**
 * Used to strip px, em, rem, etc. from css styles.
 * 
 * @param {string} value The style value to strip text from.
 * 
 * @returns {number} Returns the number left over after stripping the text.
 */
export function getNumberFromStyle(value: string): number {

  const num: string = value.replace(/(px|em|rem|%)/, '');

  return parseInt(num);

};

/**
 * Adds px to a number value.
 * 
 * @param {number} value The number value to add px to.
 * 
 * @returns {string} Returns the number value as a pixel value.
 */
export function addPxToNumber(value: number): string {

  return `${value}px`;

}