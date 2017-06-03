'use strict';

/**
 * This notation was generated by templates.
 * // -------------------------------------------------
 * GLOBAL FILE NOTATIONS
 * Project of: memory
 * Filename: common-type.js by jimmie
 * Created: 2017-05-31 @ 15:16
 * Product of: WebStorm
 * // -------------------------------------------------
 * Make sure this file is part of its proper namespace
 * and project before moving on.
 * // -------------------------------------------------
 * Code-tags conventionally should be used (See below) :
 * TODO - Something that someone need to do.
 * DOING - Self remind for what you are doing.
 * CONSIDER - Reminder to consider a change or addition.
 * BUG - The below section of a code cause a bug.
 * FIXME - The below section of code need to be fixed.
 * HACK - The below section of code is a workaround.
 * XXX - Any notation important enough to consider implementing.
 * CLARIFY - Very incomprehensible section of code below.
 *
 * Created by jimmie on (2017-05-31).
 *
 * Repository link: https://github.com/jimmiehansson/memory.git
 */


/**
 * DOING: Should return if string
 * is of type string.
 * @param string
 * @returns {boolean}
 */
export const isString = (string) => string.length > 0 && typeof string === 'string';


/**
 * DOING: Should return if param
 * is undefined or not.
 * @param defined
 * @returns {boolean}
 */
export const isDefined = (defined) => defined.length > 0 && typeof defined !== 'undefined';


/**
 * DOING: Should return if number
 * is of type number.
 * @param number
 * @returns {boolean}
 */
export const isNumber = (number) => number.toString().length > 0 && typeof number === 'number';


/**
 * DOING: Should return if object
 * is of type object.
 * @param object
 * @returns {boolean}
 */
export const isObject = (object) => Object.keys(object).length > 0 && typeof object === 'object';

/**
 * DOING: Should return if boolean
 * is of type boolean.
 * @param boolean
 * @returns {boolean}
 */
export const isBoolean = (boolean) => typeof boolean !== 'undefined' && typeof boolean === 'boolean';


/**
 * DOING: Should return the state of the key existence
 * inside the object.
 * @param props
 * @param property
 * @returns {boolean}
 */
export const objectHasKey = (props, property) => props.hasOwnProperty(property);
