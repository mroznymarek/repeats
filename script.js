function Shape(color) {
    this.element = document.createElement('div')
    this.color = color
}

Shape.prototype.append = function () {
    document.body.appendChild(this.element)
}

function Circle(color) {
    Shape.call(this, color)

    this.element.style.backgroundColor = color
    this.element.style.width = '100px'
    this.element.style.height = '100px'
    this.element.style.borderRadius = '50%'
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle

Circle.prototype.roundCorners = function () {}

const circle1 = new Circle('blue')
