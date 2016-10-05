var alterBalance = document.getElementsByTagName('input')[0];
var wdBtn = document.getElementsByClassName('withdraw')[0];
var dpBtn = document.getElementsByClassName('deposit')[0];
var balance = document.getElementsByTagName('span')[0];

//on clicking withdraw, we want to do balance - input
//on clicking deposit, we want to do balance + input

//SAVINGS
//remove funds
for (var i = 0; i < )
  var deduct = function(num1, num2) {
    var result = num1 - num2;
    red();
    return result;
  }

  var removeFunds = function() {
    var num1 = parseInt(balance.textContent);
    var num2 = parseInt(alterBalance.value);
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
    var num2 = parseInt(alterBalance.value);
    balance.textContent = sum(num1,num2);
  }

  wdBtn.addEventListener('click',removeFunds);
  dpBtn.addEventListener('click',addFunds);

  //CHECKING
  //remove funds
  var deductC = function(num1, num2) {
    var result = num1 - num2;
    red();
    return result;
  }

  var removeCFunds = function() {
    var num1 = parseInt(balanceC.textContent);
    var num2 = parseInt(alterBalance[i].value);
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
    var num2 = parseInt(alterBalance[i].value);
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
