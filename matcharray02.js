// Programmer:  BKP
// Date: 09/05/2017
// Subject:  Create two-dimensionmal array using Randomizers
// arRow is current row of array
// arCol is current column of array
// maxRow and maxCol are maxium size of arrays rows and columns
//

//
var matches= [
// ['day:','month:','date:','opponent:','locale:','time:','lafScore','oppScore','OT'],
  ['Friday','August',26,'St Francis Brooklyn','Home','6pm',0,1,true],
  ['Tuesday','August',30,'Albany','Away','7pm',0,1,false],
  ['Friday','September',2,'Fairfield','Home','7pm',0,2,false],
  ['Sunday','September',4,'Quinnipiac','Away','1pm',0,2,false],
  ['Friday','September',9,'Fordham','Away','7pm',3,1,false],
  ['Saturday','September',17,'Yale','Away','1pm',2,0,false],
  ['Tuesday','September',20,'LaSalle','Home','7pm',2,1,false],
  ['Saturday','September',24,'Loyola*','Home','1pm',0,2,false],
  ['Tuesday','September',27,'FDU','Away','7pm',1,0,false],
  ['Saturday','October',1,'Army*','Away','4pm',2,0,false],
  ['Wednesday','October',5,'Bucknell*','Away','7pm',1,0,false],
  ['Saturday','October',8,'American* Alumni Day','Home','1pm',0,3,false],
  ['Wednesday','October',12,'NJIT','Home','7pm',0,0,true],
  ['Saturday','October',15,'Boston U*','Away','1pm',0,1,false],
  ['Saturday','October',22,'Holy Cross*','Home','7pm',1,1,true],
  ['Wednesday','October',26,'Lehigh* ','Home','7pm',1,0,false],
  ['Saturday','October',29,'Navy*','Away','7pm',2,3,true],
  ['Saturday','November',5,'Colgate*','Home','4pm',0,1,false],
];
//
//
var arRow = 0;
var arCol = 0;
var maxRow = 0;
var maxCol = 0;
//
var totalLaf = 0;
var totalOpp = 0;
var totalOt = 0;
var totalWin = 0;
var totalLoss = 0;
var totalDraw = 0;
var totalHWin = 0;
var totalHLoss = 0;
var totalHDraw = 0;
var totalAWin = 0;
var totalALoss = 0;
var totalADraw = 0;
//
var cntHome = 0;
var cntAway = 0;
var recHome = 0;
var recAway = 0;

//
//
// determine number of rows
var maxRow = matches.length;
// determine length of columns
var maxCol = matches[0].length;
//
console.log('^^------------------------^^')
// console.log('Array Height (total matches): ', maxRow);
console.log('Number Matches: ', maxRow);
console.log('Number of Match Elements: ', maxCol);
console.log('^^------------------------^^')
//
//
for (arRow=0; arRow<maxRow; arRow++) {
//  console.log('Row: ',arRow,' Stored Value: ',matches[arRow]);
  var totalLaf = totalLaf + matches[arRow][6];
  var totalOpp = totalOpp + matches[arRow][7];
//
// calculating complete record
if (matches[arRow][6]===matches[arRow][7]) {
  var totalDraw = totalDraw + 1;}
  else if (matches[arRow][6]>matches[arRow][7]) {
    var totalWin = totalWin + 1;}
    else {
      var totalLoss = totalLoss + 1;}
//
// calculating home record
if (matches[arRow][4]==='Home') {
  var cntHome = cntHome + 1;}
  else if (matches[arRow][6]===matches[arRow][7]) {
    var totalHDraw = totalHDraw + 1;}
    else if (matches[arRow][6]>matches[arRow][7]) {
      var totalHWin = totalHWin + 1;}
      else {
        var totalHLoss = totalHLoss + 1;}
//
// calculating away record
if (matches[arRow][4]==='Away') {
  var cntAway = cntAway + 1;}
  else if (matches[arRow][6]===matches[arRow][7]) {
    var totalADraw = totalADraw + 1;}
    else if (matches[arRow][6]>matches[arRow][7]) {
      var totalAWin = totalAWin + 1;}
      else {
        var totalALoss = totalALoss + 1;}

}
//
//
console.log('^^------------------------^^')
console.log('LAF Record: ',totalWin,totalLoss,totalDraw);
console.log('LAF Home Record: ',totalHWin,totalHLoss,totalHDraw);
console.log('LAF Away Record: ',totalAWin,totalALoss,totalADraw);
console.log('^^------------------------^^')
console.log('Total LAF goals: ', totalLaf);
console.log('Total Opp goals: ', totalOpp);
console.log('Total OT goals: ', totalOt);
console.log('Total Home Matches: ', cntHome);
console.log('Total Away Matches: ', cntAway);
console.log('Home Record: ', recHome);
console.log('Away Record: ', recAway);
//
//
