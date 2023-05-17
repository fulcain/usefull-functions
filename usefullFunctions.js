/**
 * adds comma to numbers after 3 every 3 digit
 * @param {*} number - a number given in either string or number
 * @example 
 * // returns 100,000,000
 * addCommaToNumber(100000000)
 * @returns {Number} - a comma separated number
 */
function addCommaToNumber(number) {
    return Number(String(number).replace(/[^0-9]/g, '')).toLocaleString()
}

/**
 * add zero to one digit numbers
 * @param {string|number} value - one digit number 
 * @example
 * // returns 02
 * addZero(2)
 * @returns {string|number} - two digit number
 */
function addZero(value) {
    return value < 10 ? ('0' + value).slice(-2) : value;
}

/**
 * Convert any number to english digits with requested format
 * @param {string|number} str - string or number of numbers
 * @param {string} type - type of input in output  
 * @example 
 * // returns "123"
 * convertAnyNumberToEnglish("123","string")
 * @returns {string|number} - converted any number to english number
 */
function convertAnyNumberToEnglish(input, type) {
    // changes the input to string
    input = String(input)
    type = type.toLowerCase()

    // array of numbers
    const
        persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'],
        arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

    // for loop to replace number
    for (let i = 0; i < 10; i++) {
        input = input.replaceAll(persianNumbers[i], i).replaceAll(arabicNumbers[i], i);
    }
    // if type is number parses the input into number
    return type === "number" ? Number(input) : input
}
