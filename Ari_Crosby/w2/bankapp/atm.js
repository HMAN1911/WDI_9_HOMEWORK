//console.log('hi');

var getSaveBal = document.getElementById('savebal').innerHTML;
var getCheckBal = document.getElementById('checkbal').innerHTML;

var saveWithBtn = document.getElementById('savwithbtn');
var saveDepBtn = document.getElementById('savdepbtn');

var cheWithBtn = document.getElementById('chewithbtn');
var cheDepBtn = document.getElementById('chedepbtn');

var saveInputBox = document.getElementById('saveinputbox');
var cheInputBox = document.getElementById('cheinputbox');

console.log(getSaveBal);
console.log(getCheckBal);

var changeBalToInt = function() { //First changes balances to integers.
  var saveBal = parseInt(getSaveBal);
    //  saveBal = parseFloat(Math.round(saveBal * 100) / 100).toFixed(2);
  var checkBal = parseInt(getCheckBal);
  //    checkBal = parseFloat(Math.round(checkBal * 100) / 100).toFixed(2);

  console.log(saveBal);
  console.log(checkBal);
}
changeBalToInt();

var depositFunds = function() {
  var saveBalNew = saveInputBox.value + saveBal;
//  getSaveBal = saveBalNew;
//  return getSaveBal;
console.log(saveBalNew);
}

/*var saveDeposit = function() { //grab amount and add it to the balance.

}
*/
saveDepBtn.addEventListener('click', depositFunds());
