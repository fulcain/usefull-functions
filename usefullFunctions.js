/**
 * Replaces quoted text with a span element with class "document-string".
 * Also Replaces the text inside quotes if its either true or false with class "document-boolean"
 * @param {string} explanation - The string to replace quoted text in.
 * @returns {string} The modified string with span elements.
 */
function replaceQuotedTextWithSpan(explanation) {
    let insideQuote = false;
    let result = '';

    for (let i = 0; i < explanation.length; i++) {
        // If the current character is a double quote
        if (explanation[i] === '"') {
            // If we are already inside a quote, close the span tag
            if (insideQuote) {
                result += '</span>';
            }
            // Otherwise, open a new span tag with class "document-string"
            else {
                result += '<span class="document-string">';
            }
            // Toggle the value of insideQuote
            insideQuote = !insideQuote;
        }
        // If we are currently inside a quote and the next few characters are "true" or "false"
        else if (insideQuote && (explanation.slice(i, i + 4) === 'true' || explanation.slice(i, i + 5) === 'false')) {
            // Get the boolean value as a string ("true" or "false")
            const booleanValue = explanation.slice(i, i + 4) === 'true' ? 'true' : 'false';
            // Add a new span tag with class "document-boolean" and insert the boolean value as text content
            result += `<span class="document-boolean">${booleanValue}</span>`;
            // Increment i by the length of the boolean value minus one to skip over it in the next iteration of the loop
            i += booleanValue.length - 1;
        }
        // If none of the above conditions are met, simply add the current character to result
        else {
            result += explanation[i];
        }
    }

    // If we are still inside a quote at the end of the loop, close the span tag
    if (insideQuote) {
        result += '</span>';
    }

    // Return the modified string
    return result;
}

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
 * @param {string} copy - the value that wants to be copied
 * @param {element} iconElement - the iconElement's color that want to be changed 
 * in our case it's the copy button
 * @param {number} timeOut - the amount of numbers that the text changes back to normal
 * after click
 */
function copyConfig(copy, iconElement, timeOut) {
    navigator.clipboard.writeText(copy);
    // changes the text to copied!
    iconElement.classList.add('silverBox-copied')
    // changes it back to copy after 1s
    setTimeout(() => {
        iconElement.classList.remove('silverBox-copied')
    }, timeOut)
}
/** selects the silverBox wrapper and closes the element*/
function silverBoxCloseButtonOnClick() {
	// selects the all silverBox-wrapper classes in the page
	const silverBox = document.querySelectorAll(".silverBox-wrapper");
	silverBox[silverBox.length - 1].remove();
}
export default silverBoxCloseButtonOnClick;


