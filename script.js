function Shape(color) {
    if (this !== window) {
        this.element = document.createElement('div')
        this.color = color

    } else {
        const obj = Object.create(Shape.prototype)

        Shape.call(obj, color)

        return obj
    }
}
Shape.prototype.append = function () {
    document.body.appendChild(this.element)
}

const shape1 = new Shape('blue')
//{color: 'blue'}
shape1.append()
//shape1 is appended to body
