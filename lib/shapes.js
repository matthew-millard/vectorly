// Create parent shape class
class Parent {
	constructor({ text, textColor, shapeColor, fontFamily }, width = 200, height = 300) {
		this.text = text
		this.textColor = textColor
		this.fontFamily = fontFamily
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
		return `<svg width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg"><circle cx="50%" cy="50%" r="${this.radius}" height="100%" width="100%" fill="${this.shapeColor}"/><text x="50%" y="50%" font-size="75" text-anchor="middle" font-family="${this.fontFamily}" fill="${this.textColor}" dy=".35em">${this.text}</text></svg>`
	}
}
// Create triangle shape class
class Triangle extends Parent {
	constructor(answers) {
		super(answers)
	}
	render() {
		return `<svg width="${this.height}" height="${this.height}" xmlns="http://www.w3.org/2000/svg"><polygon points="0,200 300,200 150,0" fill="${this.shapeColor}"/><text x="50%" y="50%" font-size="60" text-anchor="middle" font-family="${this.fontFamily}" fill="${this.textColor}">${this.text}</text></svg>`
	}
}
// Create square shape class
class Square extends Parent {
	constructor(answers) {
		super(answers)
	}
	render() {
		return `<svg width="${this.height}" height="${this.height}" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="${this.height}" height="${this.height}" style="fill:${this.shapeColor};stroke-width:5;fill-opacity:1;stroke-opacity:1" /><text x="50%" y="50%" font-size="100" text-anchor="middle" dy="0.3em" font-family="${this.fontFamily}" fill="${this.textColor}">${this.text}</text></svg>`
	}
}

// Exports
module.exports = {
	Circle,
	Triangle,
	Square,
}
