function Shape(color) {
    this.element = document.createElement('div')
    this.color = color

    this.append = function () {
        document.body.appendChild(this.element)
    }
}

const shape1 = new Shape('blue')
//{color: 'blue'}
shape1.append()
//shape1 is appended to body
