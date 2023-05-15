const inquirer = require('inquirer')
const { writeFile } = require('fs')
const path = require('path')
const { Circle, Triangle, Square } = require('./lib/shapes.js')

// Prompt user questions
const questions = [
	{
		message: 'Please enter the text you would like to include in your logo. Maximum of (3) characters.',
		name: 'text',
		type: 'input',
	},
	{
		message: 'Please select the font you would like the text to be in your logo from the options below:',
		choices: ['Arial', 'Verdana', 'Times New Roman', 'Monospace'],
		name: 'fontFamily',
		type: 'list',
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
		if (answers.text.length === 0 || answers.text.length > 3) {
			throw new Error('Invalid input. Please enter 1-3 characters.')
		} else {
			return answers
		}
	})
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
		writeFile(path.join(__dirname, 'logo.svg'), svgString, err => {
			if (err) throw err
			console.log('Successfully generated logo.svg')
		})
	})
	.catch(err => {
		console.error(err)
	})
