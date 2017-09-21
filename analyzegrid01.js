// Programmer:  BKP
// Date: 09/05/2017
// Subject:  Create two-dimensionmal array using Randomizers
// arRow is current row of array
// arCol is current column of array
// maxRow and maxCol are maxium size of arrays rows and columns
//
//
// var arRow = 0;
// var arCol = 0;
let maxRow = 5;
let maxCol = 5;
let minRange = 101;
let maxRange = 199;
let lowNode = 100;
let highNode = 100;
let nodeCnt = 0;
let nodeVary = .2;
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
    if (arRow===2 && arCol===2) {
      avgFTemp[arRow][arCol] = 100;
    } else {
      avgFTemp[arRow][arCol] = Math.floor((Math.random()*(maxRange-minRange+1))+minRange);
    }
  }
  console.log('Row: ',arRow,' Stored Value: ',avgFTemp[arRow]);
}
//
//
let d = new Date();
let hours = d.getHours();
let min = d.getMinutes();
let secs = d.getSeconds();
let msecs = d.getMilliseconds();
let nowTime = hours+" : "+min+" : "+secs+" : "+msecs;
//
// Start Analysis array here -----------------
//
console.log('')
console.log("Array Analysis Begins: ", nowTime);
console.log('Analysis Range: '+lowNode+' to '+highNode);

for (arRow=0; arRow<maxRow; arRow++) {
  for (arCol=0; arCol<maxCol; arCol++) {
    if (avgFTemp[arRow][arCol] >= lowNode && avgFTemp[arRow][arCol] <= highNode) {
      avgFTemp[arRow][arCol] = '*';
//  bad NODE located
      badNodeRow = arRow;
      badNodeCol = arCol;

      avgFTemp[arRow-1][arCol-1] = '|';
      avgFTemp[arRow-1][arCol] = '|';
      avgFTemp[arRow-1][arCol+1] = '|';
      avgFTemp[arRow][arCol-1] = '|';
      avgFTemp[arRow+1][arCol-1] = '|';
      avgFTemp[arRow][arCol+1] = '|';
      avgFTemp[arRow+1][arCol] = '|';
      avgFTemp[arRow+1][arCol+1] = '|';
//
      nodeCnt = nodeCnt + 1;
    }
  }
}



//
// Finish Analysis of array ---------------
//
d = new Date();
hours = d.getHours();
min = d.getMinutes();
secs = d.getSeconds();
msecs = d.getMilliseconds();
nowTime = hours+" : "+min+" : "+secs+" : "+msecs;
console.log("Array Analysis Complete: ", nowTime);
console.log('')
for (arRow=0; arRow<maxRow; arRow++) {
  console.log('Row: ',arRow,' Stored Value: ',avgFTemp[arRow]);
}
console.log('');
console.log('Number of Errant Nodes Indentified: ', nodeCnt);
//
//
