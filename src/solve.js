
function parseBoard(brd){
  return brd.split("\n").map(function(row){
    return row.split("").map(function(elmt){
      return Number(elmt);
    })
  });
};

function saveEmptyPositions(brd){
  var emptyPositions = [];
  for(var row = 0; row < brd.length; row++){
    for(var el = 0; el < brd[row].length; el++){
      if(brd[row][el] === 0) {emptyPositions.push([row, el])};
    }
  }
  
  return emptyPositions;
};

function checkRow(brd, row, val){
  for(var i = 0; i < brd[row].length; i++){
    if(brd[row][i] === val){return false;}
  }
  
  return true;
}

function checkColumn(brd, column, val){
  for (var i = 0; i < brd.length; i++){
    if( brd[i][column] === val){ return false;}
  }
  
  return true;
}

function check3x3Square(brd, column, row, val){
  var columnCorner = 0,
    rowCorner = 0,
    squareSize = 3;
    
  while(column >= columnCorner + squareSize){
    columnCorner += squareSize;
  }
  
  while(row >= rowCorner + squareSize){
    rowCorner += squareSize;
  }
  
  for(var i = rowCorner; i < rowCorner + squareSize; i++){
    for(var j = columnCorner; j < columnCorner + squareSize; j++){
      if(brd[i][j] === val){ return false;}
    }
  }
  
  return true;
}

function checkValue(brd, row, column, val){
  if(this.checkRow(brd, row, val) && this.checkColumn(brd, column, val) && this.check3x3Square(brd, row, column, val)){
    return true;
  }else{
    return false;
  }
}

function solvePuzzle(board, emptyPositions) {
  // Variables to track our position in the solver
  var limit = 9,
      i, row, column, value, found;
  for(i = 0; i < emptyPositions.length; i++) {
    row = emptyPositions[i][0];
    column = emptyPositions[i][1];
    // Try the next value
    value = board[row][column] + 1;
    // Was a valid number found?
    found = false;
    // Keep trying new values until either the limit
    // was reached or a valid value was found
    while(!found && value <= limit) {
      // If a valid value is found, mark found true,
      // set the position to the value, and move to the
      // next position
      if(this.checkValue(board, column, row, value)) {
        found = true;
        board[row][column] = value;
        i++;
      } 
      // Otherwise, try the next value
      else {
        value++;
      }
    }
    // If no valid value was found and the limit was
    // reached, move back to the previous position
    if(!found) {
      board[row][column] = 0;
      i--;
    }
  }

  // A solution was found! Log it
  board.forEach(function(row) {
    console.log(row.join());
  });

  // return the solution
  return board;
};

module.exports = {
  parseBoard: parseBoard,
  saveEmptyPositions: saveEmptyPositions,
  checkRow: checkRow,
  checkColumn: checkColumn,
  check3x3Square: check3x3Square,
  checkValue: checkValue,
  solvePuzzle: solvePuzzle
};