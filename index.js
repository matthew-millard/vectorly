const inquirer = require('inquirer')
const { writeFile } = require('fs/promises')
const { Circle, Triangle, Square } = require('./lib/shapes.js')

// Prompt user questions
const questions = [
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
]

inquirer
	.prompt(questions)
	.then(answers => {
		const { shape } = answers
		let svgString

		if (shape === 'Circle') {
			svgString = new Circle(answers)
		} else if (shape === 'Triangle') {
			svgString = new Triangle(answers)
		} else if (shape === 'Square') {
			svgString = new Square(answers)
		} else {
			console.error('Invalid shape')
		}
		return svgString.render()
	})
	.then(svgString => {
		writeFile('logo.svg', svgString)
	})
	.catch(err => {
		console.error(err)
	})
