// Programmer:  BKP
// Date: 09/04/2017
// Subject:  Playing with arrays
var games= [
//  [ day:, month:, date:, school:, locale:, time:],
  ['Friday','August',26,'St. Francis Brooklyn','Home','6pm'],
  ['Tuesday','August',30,'Albany','Away','7pm'],
  ['Friday','September',2,'Fairfield','Home','7pm'],
  ['Sunday','September',4,'Quinnipiac','Away','1pm'],
  ['Friday','September',9,'Fordham','Away','7pm'],
  ['Saturday','September',17,'Yale','Away','1pm'],
  ['Tuesday','September',20,'LaSalle','Home','7pm'],
  ['Saturday','September ',24,'Loyola*','Home ','1pm'],
  ['Tuesday','September',27,'FDU','Away','7pm'],
  ['Saturday','October ',1,'Army*','Away','4pm'],
  ['Wednesday','October',5,'Bucknell*','Away','7pm'],
  ['Saturday','October',8,'American* Alumni Day','Home','1pm'],
  ['Wednesday','October',12,'NJIT','Home','7pm'],
  ['Saturday','October',15,'Boston U*','Away','1pm'],
  ['Saturday ','October',22,'Holy Cross*','Home','7pm'],
  ['Wednesday','October',26,'Lehigh* ','Home','7pm'],
  ['Saturday','October',29,'Navy*','Away','7pm'],
  ['Saturday','November ',5,'Colgate*','Home','4pm']
];
// console.log(games);
console.log(games.length);
//
//
var loopCount;
for (loopCount=0; loopCount<games.length; loopCount++) {
console.log(games[loopCount]);
}
games.findIndex('Navy');
// console.log(My Pig Latin name is "+pigFinal);
