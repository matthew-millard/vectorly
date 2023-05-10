const inquirer = require('inquirer')

// Prompt user questions
inquirer
	.prompt([
		{
			message: 'Please enter the text you would like to include in your logo. Maximum of (3) characters.',
			name: 'text',
			type: 'input',
		},
		{
			message: "What color would you like the text to be displayed? (Please enter a color keyword or a color's hexadecimal number.)",
			name: 'textColor',
			type: 'input',
		},
		{
			message: 'Please select the shape you would like to include in your logo from the options below:',
			choices: ['Circle', 'Triangle', 'Square'],
			name: 'shape',
			type: 'list',
		},
		{
			message: "What color would you like the shape to be displayed? (Please enter a color keyword or a color's hexadecimal number.)",
			name: 'shapeColor',
			type: 'input',
		},
	])
	.then(answers => {
        
    })




// Exports
module.exports = {
	inquirer,
}
