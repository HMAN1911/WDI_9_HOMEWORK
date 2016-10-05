
var inputSav = document.getElementsByTagName('input')[0];
var withBtn = document.getElementsByTagName('button')[0];
var depBtn = document.getElementsByTagName('button')[1];
var balanceScreen = document.getElementById('balance-screen');
var balance = 0;
updateDOM(balance);

//deposit savings
var deposit = function() {
  var num1 = parseInt(inputSav.value);
  balance = balance + num1;
  updateDOM('$ ' + balance + '.00');
}

depBtn.addEventListener('click', deposit);

//withdraw savings
var withdraw = function() {
  var num1 = parseInt(inputSav.value);
  if (balance >= num1) {
    balance = balance - num1;
    updateDOM('$ ' + balance + '.00');
  }else {
    balance = balance
  }
}

withBtn.addEventListener('click', withdraw);

function updateDOM(number) {
  balanceScreen.innerHTML = number;
}

var inputCheck = document.getElementsByTagName('input')[1];
var withbtn1 = document.getElementsByTagName('button')[2];
var depbtn1 = document.getElementsByTagName('button')[3];
var balanceScreen1 = document.getElementById('balance-screen1')
var balance1 = 0
updateDOM1(balance1);


var deposit1 = function() {
  var num2 = parseInt(inputCheck.value);
  balance1 = balance1 + num2;
  updateDOM1('$' + balance1 + '.00');
}

depbtn1.addEventListener('click', deposit1);

function updateDOM1(number1) {
  balanceScreen1.innerHTML = number1;
}

var withdraw1 = function() {
  var num2 = parseInt(inputCheck.value);
  if (balance1 >= num2) {
    balance1 = balance1 - num2;
    updateDOM1('$' + balance1 + '.00')
  } else {
    balance1 = balance1
  }
}

withbtn1.addEventListener('click', withdraw1);

if (balance = 0) {
  document.getElementById('savings').style.backgroundColor = 'red';
} else if (balance > 0) {
  document.getElementById('savings').style.backgroundColor = 'grey';
}
