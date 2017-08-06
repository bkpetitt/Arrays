// Programmer:  BKP
// Date: 09/05/2017
// Subject:  Create two-dimensionmal array using Randomizers
// arRow is current row of array
// arCol is current column of array
// maxRow and maxCol are maxium size of arrays rows and columns
//
var arRow = 0;
var arCol = 0;
var maxRow = 9;
var maxCol = 5;
//
var pod0 = 21;
var pod1 = 32;
var pod2 = 43;
var pod3 = 54;
var pod4 = 65;
//
var avgFTemp = Array(maxCol);
//  [ morning:, noon:, midafternoon:, dusk:, evening:, night:],
console.log('Array Width: ',avgFTemp.length);
//
//
for (arRow=0; arRow<=maxRow; arRow++) {
    avgFTemp[arRow] = new Array(maxCol);
    for (arCol=0; arCol<=maxCol; arCol++) {
//      console.log(Math.floor((Math.random()+.5) * 85));
//    avgFTemp[arRow][arCol] = Math.floor((Math.random() * 85));
//    console.log('Cell: ',arRow,arCol,' Stored Value: ',avgFTemp[arRow][arCol]);
    avgFTemp[arRow][arCol] = Math.floor(((Math.random()*85)+1));
//    console.log('Cell: ',arRow,arCol,' Stored Value: ',avgFTemp[arRow][arCol]);
  }
  console.log('Row: ',arRow,' Stored Value: ',avgFTemp[arRow]);
}
//
//
