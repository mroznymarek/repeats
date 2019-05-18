class Shape {
    constructor(color) {
        this.element = document.createElement('div')
        this.color = color
    }
    append() {
        document.body.appendChild(this.element)
    }
}

class Circle extends Shape {
    constructor(color) {
        super(color)

        this.element.style.backgroundColor = color
        this.element.style.width = '100px'
        this.element.style.height = '100px'
        this.element.style.borderRadius = '50%'
    }
   roundCorners() { }
}

const circle1 = new Circle('blue')
