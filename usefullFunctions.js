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