var board = '090000006\n' + 
            '000960485\n' +
            '000581000\n' +
            '004000000\n' +
            '517200900\n' +
            '602000370\n' +
            '100804020\n' +
            '706000810\n' +
            '300090000';

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

module.exports.parseBoard = parseBoard;
module.exports.saveEmptyPositions = saveEmptyPositions;
module.exports.checkRow = checkRow;