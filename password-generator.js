var generatePassword = require('generate-password');

var password = generatePassword.generate({
	length: 8,
	numbers: true
});
console.log(password);