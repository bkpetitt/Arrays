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
// console.log(games);
// avgFTemp.fill(0,)
console.log('length: ',avgFTemp.length);
// var row = 0;
// var col = 0;
//
//
for (arRow=0; arRow<avgFTemp.length; arRow++) {
  avgFTemp.fill(0);
  for (arCol=0; arCol<maxCol; arCol++) {
//    console.log(Math.random());
//    var avgFTemp[arRow][arCol] = (Math.random() * 85);
//    console.log(arCol);
//    avgFTemp[arRow][arCol] = 0;
    console.log(Math.floor((Math.random() * 85)));
    avgFTemp[arRow][arCol] = Math.floor((Math.random() * 85));
    console.log('Cell: ',arRow,arCol,' Stored Value: ',avgFTemp[arRow][arCol]);

//  console.log(arRow,arCol,avgFTemp[arRow][arCol]);
  }
}
//
//
// var pos1 = games[row][col];
// var pos2 = games[3][3];
// console.log(pos1);
// console.log(pos2);
// games.findIndex('Navy');
// console.log(My Pig Latin name is "+pigFinal);
