
class ShapeFactory {
    constructor() {
        this.shapes = ['lShape', 'squareShape'];
    }

    getShape() {
        const shapeNumber = Math.floor(Math.random() * this.shapes.length);
        console.log(`Shapenumber = ${shapeNumber}`)
        return this.createShape(this.shapes[shapeNumber]);
    }

    createShape(shape) {
        switch (shape.toUpperCase()) {
            case 'LSHAPE':
                return new Lshape();
            case 'SQUARESHAPE':
                return new SquareShape();
            default:
                break;
        }
    }

}