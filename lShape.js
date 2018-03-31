class Lshape extends TetrisShape {
    constructor(startPosX = 4, startPosY = 0, id = 11) {
        super(
            [new Firkant(startPosX, -1), new Firkant(startPosX, -2), new Firkant(startPosX, -3), new Firkant(startPosX + 1, -1)],
            startPosX,
            startPosY, 
            id
        );
    }
    tilt(direction) {
        this.startPos.x = this.oldSquares[0].vector.x;
        this.startPos.y = this.oldSquares[0].vector.y;

        if (this.angle === 'UP' && direction === LEFT) {
            this.newSquares = [
                new Firkant(this.startPos.x, this.startPos.y),
                new Firkant(this.startPos.x - 1, this.startPos.y),
                new Firkant(this.startPos.x - 2, this.startPos.y),
                new Firkant(this.startPos.x, this.startPos.y - 1)
            ];
            this.angle = 'LEFT';
        }
        else if (this.angle === 'UP' && direction === RIGHT) {
            this.newSquares = [
                new Firkant(this.startPos.x, this.startPos.y),
                new Firkant(this.startPos.x + 1, this.startPos.y),
                new Firkant(this.startPos.x + 2, this.startPos.y),
                new Firkant(this.startPos.x, this.startPos.y + 1)
            ];
            this.angle = 'RIGHT';
        } else if (this.angle === 'LEFT' && direction === RIGHT) {
            this.newSquares = [
                new Firkant(this.startPos.x, this.startPos.y),
                new Firkant(this.startPos.x, this.startPos.y - 1),
                new Firkant(this.startPos.x, this.startPos.y - 2),
                new Firkant(this.startPos.x + 1, this.startPos.y)
            ];
            this.angle = 'UP';
        } else if (this.angle === 'RIGHT' && direction === LEFT) {
            this.newSquares = [
                new Firkant(this.startPos.x, this.startPos.y),
                new Firkant(this.startPos.x, this.startPos.y - 1),
                new Firkant(this.startPos.x, this.startPos.y - 2),
                new Firkant(this.startPos.x + 1, this.startPos.y)
            ];
            this.angle = 'UP';
        } else if (this.angle === 'LEFT' && direction === LEFT) {
            this.newSquares = [
                new Firkant(this.startPos.x, this.startPos.y),
                new Firkant(this.startPos.x, this.startPos.y + 1),
                new Firkant(this.startPos.x, this.startPos.y + 2),
                new Firkant(this.startPos.x - 1, this.startPos.y)
            ];
            this.angle = 'DOWN';
        } else if (this.angle === 'RIGHT' && direction === RIGHT) {
            this.newSquares = [
                new Firkant(this.startPos.x, this.startPos.y),
                new Firkant(this.startPos.x, this.startPos.y + 1),
                new Firkant(this.startPos.x, this.startPos.y + 2),
                new Firkant(this.startPos.x - 1, this.startPos.y)
            ];
            this.angle = 'DOWN';
        } else if (this.angle === 'DOWN' && direction === RIGHT) {
            this.newSquares = [
                new Firkant(this.startPos.x, this.startPos.y),
                new Firkant(this.startPos.x - 1, this.startPos.y),
                new Firkant(this.startPos.x - 2, this.startPos.y),
                new Firkant(this.startPos.x, this.startPos.y - 1)
            ];
            this.angle = 'LEFT';
        } else if (this.angle === 'DOWN' && direction === LEFT) {
            this.newSquares = [
                new Firkant(this.startPos.x, this.startPos.y),
                new Firkant(this.startPos.x + 1, this.startPos.y),
                new Firkant(this.startPos.x + 2, this.startPos.y),
                new Firkant(this.startPos.x, this.startPos.y + 1)
            ];
            this.angle = 'RIGHT';
        }
        this.updateGrid(grid);
    }
}