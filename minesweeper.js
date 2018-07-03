document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
 var board = {
   cells: [
     {row: 0, col: 0, isMine: false, isMarked: false, hidden: true, surroundingMines: 0},
      {row: 0, col: 1, isMine: true, isMarked: false, hidden: true, surroundingMines: 0},
      {row: 0, col: 2, isMine: false, isMarked: false, hidden: true, surroundingMines: 0},
      {row: 0, col: 3, isMine: false, isMarked: false, hidden: true, surroundingMines: 0},

      {row: 1, col: 0, isMine: false, isMarked: false, hidden: true, surroundingMines: 0},
      {row: 1, col: 1, isMine: true, isMarked: false, hidden: true, surroundingMines: 0},
      {row: 1, col: 2, isMine: false, isMarked: false, hidden: true, surroundingMines: 0},
      {row: 1, col: 3, isMine: false, isMarked: false, hidden: true, surroundingMines: 0},

      {row: 2, col: 0, isMine: false, isMarked: false, hidden: true, surroundingMines: 0},
      {row: 2, col: 1, isMine: false, isMarked: false, hidden: true, surroundingMines: 0},
      {row: 2, col: 2, isMine: false, isMarked: false, hidden: true, surroundingMines: 0},
      {row: 2, col: 3, isMine: false, isMarked: false, hidden: true, surroundingMines: 0},

      {row: 3, col: 0, isMine: false, isMarked: false, hidden: true, surroundingMines: 0},
      {row: 3, col: 1, isMine: false, isMarked: false, hidden: true, surroundingMines: 0},
      {row: 3, col: 2, isMine: false, isMarked: false, hidden: true, surroundingMines: 0},
      {row: 3, col: 3, isMine: false, isMarked: false, hidden: true, surroundingMines: 0},
    ]
 }

function startGame () {
  // Don't remove this function call: it makes the game work!
  for (var i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  } 
  document.addEventListener('click', checkForWin)
  document.addEventListener('contextmenu', checkForWin)
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  for (var i = 0; i < board.cells.length; i++) {
    if (board.cells[i].isMine) {
      if (!board.cells[i].isMarked)
    return; 
    
    } else if (board.cells[i].hidden)
    return; 
  }
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
 lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//

//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surroundingCells = lib.getSurroundingCells (cell.row, cell.col);
  var count = 0;

  for (var i = 0; i < surroundingCells.length; i++) {
    if (surroundingCells[i].isMine == true) {
      count++;
    }
  }
  return count;
} 
