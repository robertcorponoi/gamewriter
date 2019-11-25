'use strict'

/**
 * Defines the options available for an instance of GameWriter and their default values.
 */
export default class Options {

  /**
   * Indicates whether text nodes are displayed on the canvas after they are created or
   * if they have to be displayed manually.
   * 
   * @property {boolean}
   * 
   * @default true
   */
  autoDisplay: boolean = true;

  /**
   * @param {Object} options
   * @param {boolean} [options.autoDisplay=true] Indicates whether text nodes are displayed on the canvas after they are created or if they have to be displayed manually.
   */
  constructor(options: Object) {

    Object.assign(this, options);

  }

};