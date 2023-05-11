// Create parent shape class
class Parent {
	constructor({ text, textColor, shapeColor }, width = 300, height = 200) {
		this.text = text
		this.textColor = textColor
		this.shapeColor = shapeColor
		this.width = width
		this.height = height
	}
}
// Create circle shape class
class Circle extends Parent {
	constructor(answers) {
		super(answers)
		this.radius = this.width / 2
	}
	render() {
		return `<circle cx="50%" cy="50%" r="${this.radius}" height="100%" width="100%" fill="${this.shapeColor}">`
	}
}
// Create triangle shape class
class Triangle extends Parent {
	constructor(answers) {
		super(answers)
	}
	render() {
		return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.shapeColor}">`
	}
}
// Create square shape class
class Square extends Parent {
	constructor(answers) {
		super(answers)
	}
	render() {
		return `<rect x="50" height="${this.height}" width="${this.width}" fill="${this.shapeColor}">`
	}
}

// Exports
module.exports = {
	Circle,
	Triangle,
	Square,
}
