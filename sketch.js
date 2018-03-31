/*jshint esversion: 6 */

let widthIncrement;
let heightIncrement;
let timer;
let shape;
let shapeFactory;
let privShapeY;
let LEFT = -1;
let RIGHT = 1;
let DOWN = 1;

let w, h;

let grid = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];


function setup() {
  createCanvas(300, 600);
  background(50);

  timer = new Timer(300);

  shapeFactory = new ShapeFactory();

  widthIncrement = width / 10;
  heightIncrement = height / 20;

  w = widthIncrement;
  h = heightIncrement;
}

function draw() {
  if (timer.isIntervalFinished()) {
    //Uppdate Shape
    if (!shape)
      shape = shapeFactory.getShape();
    shape.update(grid, DOWN);

    //Check if shape has stopped
    if (privShapeY === shape.oldSquares[0].vector.y) {
      shape.destroy();
      shape = null;
      checkIfRowIsFull(grid);
    } else {
      privShapeY = shape.oldSquares[0].vector.y;
    }

    display();
  }
}

const checkIfRowIsFull = grid => {
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === 0)
        break;
      if (x === grid[y].length - 1 && grid[y][x] !== 0) {
        // grid[y] = grid[y].map(() => 0);
    console.log(grid)        
        shiftGrid(y);
    console.log(grid)
        
      }
    }
  };
}

const shiftGrid = index => {
  debugger
  // let newGrid = [];
  for(index; index > 0; index--){
    grid[index] = [...grid[index - 1]];
  }
};

function keyPressed() {
  switch (keyCode) {
    case 65:
      shape.shift(grid, LEFT);
      break;
    case 68:
      shape.shift(grid, RIGHT);
      break;
    case 87:
      shape.tilt(LEFT);
      break;
    case 83:
      shape.tilt(RIGHT);
      break;
    default:
      break;
  }
  display();
}

const display = () => {
  background(50);
  //draw grid
  for (let y = 0; y < grid.length; y++)
    for (let x = 0; x < grid.length; x++) {
      //Green
      if (grid[y][x] === 1 || grid[y][x] === 11) {
        fill(0, 255, 0);
        rect(x * widthIncrement, y * widthIncrement, w, h);
      }
      //Red
      if (grid[y][x] === 2 || grid[y][x] === 12) {
        fill(255, 0, 0);
        rect(x * widthIncrement, y * widthIncrement, w, h);
      }

    }
};

const gameLoop = () => {

};



