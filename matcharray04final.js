// Programmer:  BKP
// Date: 09/05/2017
// Subject:  Create two-dimensionmal array using Randomizers
// arRow is current row of array
// arCol is current column of array
// maxRow and maxCol are maxium size of arrays rows and columns
//

//
var matches= [
// ['day:','month:','date:','opponent:','locale:','time:','lafScore','oppScore','OT','sh','sog'],
  ['Friday','August',26,'St Francis Brooklyn','Home','6pm',0,1,true,10,5],
  ['Tuesday','August',30,'Albany','Away','7pm',0,1,false,7,3],
  ['Friday','September',2,'Fairfield','Home','7pm',0,2,false,5,1],
  ['Sunday','September',4,'Quinnipiac','Away','1pm',0,2,false,17,8],
  ['Friday','September',9,'Fordham','Away','7pm',3,1,false,8,4],
  ['Saturday','September',17,'Yale','Away','1pm',2,0,false,10,3],
  ['Tuesday','September',20,'LaSalle','Home','7pm',2,1,false,14,5],
  ['Saturday','September',24,'Loyola*','Home','1pm',0,2,false,11,3],
  ['Tuesday','September',27,'FDU','Away','7pm',1,0,false,10,3],
  ['Saturday','October',1,'Army*','Away','4pm',2,0,false,11,6],
  ['Wednesday','October',5,'Bucknell*','Away','7pm',1,0,false,9,2],
  ['Saturday','October',8,'American* Alumni Day','Home','1pm',0,3,false,8,4],
  ['Wednesday','October',12,'NJIT','Home','7pm',0,0,true,9,3],
  ['Saturday','October',15,'Boston U*','Away','1pm',0,1,false,18,9],
  ['Saturday','October',22,'Holy Cross*','Home','7pm',1,1,true,10,6],
  ['Wednesday','October',26,'Lehigh* ','Home','7pm',1,0,false,12,4],
  ['Saturday','October',29,'Navy*','Away','7pm',2,3,true,12,4],
  ['Saturday','November',5,'Colgate*','Home','4pm',0,1,false,4,2],
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
var totalConf = 0;
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
console.log('Number Matches: ', maxRow);
console.log('Number of Match Elements: ', maxCol);
console.log('^^------------------------^^')
//
//
console.log('row#','day:', 'month:', 'date:','opponent:','locale:','time:','lafScore','oppScore','OT','sh','sog');
// console.log(matches);
for (arRow=0; arRow<maxRow; arRow++) {
//  console.log('Row: ',arRow,' Stored Value: ',matches[arRow]);
  var printLine = '';
  var printLine = matches[arRow].toLocaleString();
  console.log(arRow,printLine);
//  console.log(arRow,matches[arRow]);
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
//
// determine OT matches
if (matches[arRow][8]) {
  var totalOt = totalOt + 1;}
//
//
if (matches[arRow][3].endsWith('*')) {
//  console.log(totalConf);
  var totalConf = totalConf + 1;}
}
//
//
console.log('^^------------------------^^')
console.log('LAF Record: ',totalWin,'-',totalLoss,'-',totalDraw);
console.log('LAF Home Record: ',totalHWin,'-',totalHLoss,'-',totalHDraw);
console.log('LAF Away Record: ',totalAWin,'-',totalALoss,'-',totalADraw);
console.log('^^------------------------^^')
console.log('Total LAF goals: ', totalLaf);
console.log('Total Opp goals: ', totalOpp);
console.log('Total Home Matches: ', cntHome);
console.log('Total Away Matches: ', cntAway);
console.log('Total OT Matches: ', totalOt);
console.log('Total Conf Matches: ', totalConf);
//
//
