class TetrisShape {
    constructor(squares, startX, startY, id) {
        this.number = id;
        this.oldSquares = squares;
        this.newSquares;
        this.angle = 'UP';
        this.startPos = {
            x: startX,
            y: startY
        };
    }

    destroy() {
        this.number -= 10;
        this.oldSquares.map(firkant => this.insertValueToGrid(grid, firkant, this.number));
    }

    shift(grid, xDir) {
        this.update(grid, 0, xDir);
    }

    update(grid, yDir = 0, xDir = 0) {
        this.newSquares = this.oldSquares.map(firkant => new Firkant(firkant.vector.x + xDir, firkant.vector.y + yDir));
        this.updateGrid(grid)
    }

    updateGrid(grid) {
        if (!this.canMove(grid))
            return false;
        this.insertValuesToGrid(grid);
    }

    insertValuesToGrid(grid) {
        this.oldSquares.map(firkant => this.insertValueToGrid(grid, firkant, 0));
        this.newSquares.map(firkant => this.insertValueToGrid(grid, firkant, this.number));
        this.oldSquares = this.newSquares;
    }

    insertValueToGrid(grid, firkant, value) {
        if (firkant.vector.y >= 0)
            grid[firkant.vector.y][firkant.vector.x] = value;
    }

    canMove() {
        //outside grid
        for (let i = 0; i < this.newSquares.length; i++) {
            if (this.newSquares[i].vector.x < 0)
                return false;
            if (this.newSquares[i].vector.x > 9)
                return false;
            if (this.newSquares[i].vector.y > 19)
                return false;
        }

        for (let i = 0; i < this.newSquares.length; i++) {
            if (this.newSquares[i].vector.y < 0)
                continue;
            if (grid[this.newSquares[i].vector.y][this.newSquares[i].vector.x] !== 0 &&
                grid[this.newSquares[i].vector.y][this.newSquares[i].vector.x] < 10)
                return false;
        }
        return true;
    }
    //Delete
    isSelf(x, y) {
        for (let i = 0; i < this.oldSquares.length; i++) {
            if (this.oldSquares[i].vector.x == x && this.oldSquares[i].vector.y == y) {
                return true;
            }
        }
        return false;
    }
}