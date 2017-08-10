// Programmer:  BKP
// Date: 09/05/2017
// Subject:  Create two-dimensionmal array using Randomizers
// arRow is current row of array
// arCol is current column of array
// maxRow and maxCol are maxium size of arrays rows and columns
//
//
var arRow = 0;
var arCol = 0;
var maxRow = 10;
var maxCol = 10;
var minRange = 10;
var maxRange = 99;
let findNode = 0;
//
// var maxRow = Number(prompt("Rows: ",""));
// var maxCol = Number(prompt("Columns: ",""));
//
//
var avgFTemp = Array(maxCol);
//  [ morning:, noon:, midafternoon:, dusk:, evening:, night:],
// console.log('Array Width: ',avgFTemp.length);
console.log('Array Width: ', maxCol);
console.log('Array Height: ', maxRow);
//
//
for (arRow=0; arRow<maxRow; arRow++) {
    avgFTemp[arRow] = new Array(maxCol);
    for (arCol=0; arCol<maxCol; arCol++) {
// randomizer using math.random and math.floor
// using max and minimum range limiters
      avgFTemp[arRow][arCol] = Math.floor((Math.random()*(maxRange-minRange+1))+minRange);
    }
  console.log('Row: ',arRow,' Stored Value: ',avgFTemp[arRow]);
}
console.log("analysis array")
for (arRow=; arRow<maxRow; arRow++) {
  for (arCol=0; arCol<MaxCol; arCol++) {
    if (avgFTemp[arRow][arCol] < findNode) {
      let avgFTemp[arRow][arCol] = '**';
    }
  }
}
console.log("analysis complete")
for (arRow=0; arRow<maxRow; arRow++) {
  console.log('Row: ',arRow,' Stored Value: ',avgFTemp[arRow]);
}
//
//
