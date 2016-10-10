var alterSavings = document.getElementsByTagName('input')[0];
var alterChecking = document.getElementsByTagName('input')[1];
var wdSavingsBtn = document.getElementsByClassName('withdraw')[0];
var wdCheckingsBtn = document.getElementsByClassName('withdraw')[1];
var dpSavingsBtn = document.getElementsByClassName('deposit')[0];
var dpCheckingsBtn = document.getElementsByClassName('deposit')[1];
var balance = document.getElementsByTagName('span')[0];
var balanceC = document.getElementsByTagName('span')[1];

//on clicking withdraw, we want to do balance - input
//on clicking deposit, we want to do balance + input

//SAVINGS
//remove funds
var deduct = function(num1, num2) {
  var result = num1 - num2;
  red();
  return result;
}

var removeFunds = function() {
  var num1 = parseInt(balance.textContent);
  var num2 = parseInt(alterSavings.value);
  balance.textContent = deduct(num1,num2);
}

//add funds
var sum = function(num1, num2) {
  var result = num1 + num2;
  peru();
  return result;
}

var addFunds = function() {
  var num1 = parseInt(balance.textContent);
  var num2 = parseInt(alterSavings.value);
  balance.textContent = sum(num1,num2);
}

wdSavingsBtn.addEventListener('click',removeFunds);
dpSavingsBtn.addEventListener('click',addFunds);

//CHECKING
//remove funds
var deductC = function(num1, num2) {
  var result = num1 - num2;
  red();
  return result;
}

var removeCFunds = function() {
  var num1 = parseInt(balanceC.textContent);
  var num2 = parseInt(alterChecking.value);
  balanceC.textContent = deductC(num1,num2);
}
//add funds
var sumC = function(num1, num2) {
  var result = num1 + num2;
  peru();
  return result;
}

var addCFunds = function() {
  var num1 = parseInt(balanceC.textContent);
  var num2 = parseInt(alterChecking.value);
  balanceC.textContent = sumC(num1,num2);
}

wdCheckingsBtn.addEventListener('click',removeCFunds);
dpCheckingsBtn.addEventListener('click',addCFunds);

//RED IF NEG BAL
function red() {
  if (parseInt(balanceC.textContent) <= 0) {
    document.getElementById('checking').style.backgroundColor = "red";
  }
  if (parseInt(balance.textContent) <= 0) {
    document.getElementById('savings').style.backgroundColor = "red";
  }
}

function peru() {
  if (parseInt(balanceC.textContent) > 0) {
    document.getElementById('checking').style.backgroundColor = "peru";
  }
  if (parseInt(balance.textContent) > 0) {
    document.getElementById('savings').style.backgroundColor = "peru";
  }
}
