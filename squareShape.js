class SquareShape extends TetrisShape {
    constructor(startPosX = 4, startPosY = 0, id = 12) {
        super(
            [new Firkant(startPosX, -1), new Firkant(startPosX, -2), new Firkant(startPosX + 1, -1), new Firkant(startPosX + 1, -2)],
            startPosX,
            startPosY,
            id
        );
    }
    tilt(){
        // Must implement this method, but this is a square so we dont need it;
    }
}