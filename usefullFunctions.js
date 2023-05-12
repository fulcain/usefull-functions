/**
 * Custom stringify function that removes quotes from object keys.
 *
 * @param {object} obj - The object to stringify.
 * @returns {string} A stringified version of the input object with quotes removed from keys.
 */
const customStringify = (obj) => {
    // Convert the object to a JSON string with indentation
    const jsonString = JSON.stringify(obj, null, 7);

    // Create a regular expression pattern to match quoted keys
    const pattern = /"([^"]+)"\s*:/g;

    // Replace all quoted keys with unquoted keys
    const newString = jsonString.replace(pattern, "$1:");

    // Return the updated string
    return newString;
};

/**
 * 
 * @param {*} number - a number given in either string or number
 * @returns {Number} - a comma separated number
 */
function addCommaToNumber(number) {
    return Number(String(number).replace(/[^0-9]/g, '')).toLocaleString()
}

/**
 * 
 * @param {string|number} value - one digit number 
 * @returns {string|number} - two digit number
 */
function addZero(value) {
    return value < 10 ? ('0' + value).slice(-2) : value;
}


/**
 * 
 * @param {string|number} str - string or number of numbers
 * @param {string} type - type of input in output  
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
