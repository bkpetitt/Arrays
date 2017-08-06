// Programmer:  BKP
// Date: 09/05/2017
// Subject:  Create two-dimensionmal array using Randomizers
// arRow is current row of array
// arCol is current column of array
// maxRow and maxCol are maxium size of arrays rows and columns
//
var arRow = 0;
var arCol = 0;
var maxRow = 5;
var maxCol = 5;
//
var pod0 = 21;
var pod1 = 32;
var pod2 = 43;
var pod3 = 54;
var pod4 = 65;
//
var avgFTemp = [pod0,pod1,pod2,pod3,pod4];
//  [ morning:, noon:, midafternoon:, dusk:, evening:, night:],
console.log('length: ',avgFTemp.length);
//
//
// for (arRow=0; arRow<avgFTemp.length; arRow++) {
  for (arCol=0; arCol<maxCol; arCol++) {
//    avgFTemp[arRow][arCol] = Math.floor((Math.random() * 85));
//    console.log('Cell: ',arRow,arCol,' Stored Value: ',avgFTemp[arRow][arCol]);
    avgFTemp[arCol] = Math.floor((Math.random() * 85));
    console.log('Cell: ',arCol,' Stored Value: ',avgFTemp[arCol]);

  }
//}
//
//
