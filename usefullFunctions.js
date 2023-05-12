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
 * @param {*} value - one digit number 
 * @returns {*} - two digit number
 */
 function addZero(value) {
 return value < 10 ? ('0' + value).slice(-2) : value;
 }
