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
//
// determine number of records
var maxRow = matches.length;
// determine number of record elements
var maxCol = matches[0].length;
//
console.log('^^------------------------^^')
console.log('Number of records: ', maxRow);
console.log('Number of record elements: ', maxCol);
console.log('^^------------------------^^')
//
console.log('rec#','day:','month:','date:','opponent:','locale:','time:','lafScore','oppScore','OT','sh','sog');
//
for (arRow=0; arRow<maxRow; arRow++) {
//  console.log('| Row: ',arRow,' | Stored Value: ',matches[arRow],' |');
  var printLine = '';
  var printLine = matches[arRow].toLocaleString();
  console.log(arRow,printLine);
}
//
//
