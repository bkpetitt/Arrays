// Programmer:  BKP
// Date: 09/04/2017
// Subject:  Playing with arrays
var game= [
'Sunday','September',4,'Quinnipiac','Away','1pm'];
// console.log(games);
console.log(game.length);
// games.push('Navy');
var pos = game.indexOf('Sunday');
console.log(pos);
var msgArray = [];
msgArray[0] = 'Hello';
msgArray[99] = 'world';

if (msgArray.length === 100) {
  console.log('The length is 100.');
}
