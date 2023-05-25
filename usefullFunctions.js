/**
 * Convert any number to english digits with requested format
 * @param {string|number} str - string or number of numbers
 * @param {string} type - type of input in output
 * @returns {string|number} - converted any number to english number
 */
function convertAnyNumberToEnglish(input, type) {
	// changes the input to string
	input = String(input);
	type = type.toLowerCase();

	// array of numbers
	const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"],
		arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];

	// for loop to replace number
	for (let i = 0; i < 10; i++) {
		input = input
			.replaceAll(persianNumbers[i], i)
			.replaceAll(arabicNumbers[i], i);
	}

	// if type is number parses the input into number
	return type === "number" ? Number(input) : input;
}
/**
 * xhr api call function
 * @param {string} method - the HTTP method (e.g. `GET`, `POST`, `PUT`, etc.)
 * @param {string} url - the API endpoint URL
 * @param {object|array} data - optional data to send with the request (e.g. an object or array).
 */
function xhrApiCall(method, url, data) {
	return new Promise((resolve, reject) => {
		// create xhr
		const xhr = new XMLHttpRequest();

		// xhr open method
		xhr.open(method, url);

		// xhr on load function
		xhr.onload = function () {
			// if the status is in 200 - 299 range this code will be executed
			if (this.status >= 200 && this.status < 300) {
				resolve(JSON.parse(this.response));
			} else {
				reject({
					status: this.status,
					statusText: this.statusText
				});
			}
		};

		// if there is an error while getting data
		xhr.onerror = function () {
			reject({
				status: this.status,
				statusText: this.statusText
			});
		};

		// send the xhr request with an optional data parameter which is either an object or array
		xhr.send(JSON.stringify(data));
	});
}

xhrApiCall("GET", "https://api.namefake.com/", "{name:jasem}").then((data) => {
	console.log(data);
});

/**
 * capitalize string method
 * @returns {string} - capitalized string
 */
String.prototype.capitalize = function () {
	return this.split(" ")
		.map((word) => (word = word.replace(word[0], word[0].toUpperCase())))
		.join(" ");
};