
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

function check3x3Square(brd, row, column, val){
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

function checkSimilarArray(a,b){
  if (a.length !== b.length){return false;}
  
  for(var i = 0; i<a.length; i++){
    for(var j = 0; j < a[i].length; j++){
      if (a[i][j] !== b[i][j]){return false;}
    }
  }
  
  return true;
}

function solvePuzzle(brd, emptyPositions){
  var limit = 9,
    i, row, column, val, found, originalBoard = brd;
    
  for(i = 0; i < emptyPositions.length; i++){
    row = emptyPositions[i][0];
    column = emptyPositions[i][1];
    
    val = brd[row][column] + 1;
    
    while(!found && val <= limit){
    
      if(this.checkValue(brd, row, column, val)){
        found = true; //stop the loop and set our value
        brd[row][column] = val;
        i++;
      }else{
        val++;
      }
      
    }
    
    if(!found){
      brd[row][column] = 0;
      --i;
    }
  }
  
  brd.forEach(function(row){
    console.log(row.join());
  });

}

module.exports = {
  parseBoard: parseBoard,
  saveEmptyPositions: saveEmptyPositions,
  checkRow: checkRow,
  checkColumn: checkColumn,
  check3x3Square: check3x3Square,
  checkValue: checkValue,
  solvePuzzle: solvePuzzle
};
