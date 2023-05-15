// Import shapes contructor functions
const { Circle, Triangle, Square } = require('./shapes')

// Test: Render Shapes
describe('should return a string for the corresponding SVG file with the given shape color', () => {
	const input = {
		text: 'MRM',
		textColor: 'black',
		shapeColor: 'green',
		fontFamily: 'Arial',
		width: 200,
		height: 300,
	}
	test('Circle SVG String', () => {
		const shape = new Circle(input)
		const output = `<svg width="200" height="300" xmlns="http://www.w3.org/2000/svg"><circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="green"/><text x="50%" y="50%" font-size="75" text-anchor="middle" font-family="Arial" fill="black" dy=".35em">MRM</text></svg>`
		expect(shape.render()).toEqual(output)
	})
	test('Triangle SVG String', () => {
		const shape = new Triangle(input)
		const output = `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg"><polygon points="0,200 300,200 150,0" fill="green"/><text x="50%" y="50%" font-size="60" text-anchor="middle" font-family="Arial" fill="black">MRM</text></svg>`
		expect(shape.render()).toEqual(output)
	})
	test('Square SVG String', () => {
		const shape = new Square(input)
		const output = `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="300" style="fill:green;stroke-width:5;fill-opacity:1;stroke-opacity:1" /><text x="50%" y="50%" font-size="100" text-anchor="middle" dy="0.3em" font-family="Arial" fill="black">MRM</text></svg>`
		expect(shape.render()).toEqual(output)
	})
})
