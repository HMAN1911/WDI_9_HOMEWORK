var totalBalance = 0;
var totalCheckingBalance = 0;

// Function to trigger when deposit button is clicked for the savings account
var depositFunds = function() {
  var inputSavings = parseInt(document.getElementsByTagName('input')[0].value);
  totalBalance = inputSavings + totalBalance;
  document.getElementsByClassName('savcurrency')[0].innerHTML = '$'+ totalBalance;
  if (totalBalance >= 0) {
    document.getElementsByTagName('input')[0].style.backgroundColor = 'lightgrey';
  } else if (totalBalance < 0) {
    document.getElementsByTagName('input')[0].style.backgroundColor = 'red';
  }
}

// Function to trigger when withdraw button is clicked for the savings account
var withdrawFunds = function () {
  var inputSavings = parseInt(document.getElementsByTagName('input')[0].value);
  totalBalance = totalBalance - inputSavings;
  document.getElementsByClassName('savcurrency')[0].innerHTML = '$'+ totalBalance;
  if (totalBalance >= 0) {
    document.getElementsByTagName('input')[0].style.backgroundColor = 'lightgrey';
  } else if (totalBalance < 0) {
    document.getElementsByTagName('input')[0].style.backgroundColor = 'red';
  }
}

// Function to trigger when deposit button is clicked for the checking account
var depositFundsChecking = function() {
  var inputChecking = parseInt(document.getElementsByTagName('input')[1].value);
  totalCheckingBalance = inputChecking + totalCheckingBalance;
  document.getElementsByClassName('depcurrency')[0].innerHTML = '$'+ totalCheckingBalance;
  if (totalCheckingBalance >= 0) {
    document.getElementsByTagName('input')[1].style.backgroundColor = 'lightgrey';
  } else if (totalCheckingBalance < 0) {
    document.getElementsByTagName('input')[1].style.backgroundColor = 'red';
  }
}

// Function to trigger when deposit button is clicked for the checking account
var withdrawFundsChecking = function() {
  var inputChecking = parseInt(document.getElementsByTagName('input')[1].value);
  totalCheckingBalance = totalCheckingBalance - inputChecking;
  document.getElementsByClassName('depcurrency')[0].innerHTML = '$'+ totalCheckingBalance;
  if (totalCheckingBalance >= 0) {
    document.getElementsByTagName('input')[1].style.backgroundColor = 'lightgrey';
  } else if (totalCheckingBalance < 0) {
    document.getElementsByTagName('input')[1].style.backgroundColor = 'red';
  }
}

// Button triggers
var depositBtn = document.getElementsByClassName('deposit')[0];
depositBtn.addEventListener('click', depositFunds);

var withdrawBtn = document.getElementsByClassName('withdraw')[0];
withdrawBtn.addEventListener('click', withdrawFunds);

var depositBtnChecking = document.getElementsByClassName('deposit')[1];
depositBtnChecking.addEventListener('click', depositFundsChecking);

var withdrawBtnChecking = document.getElementsByClassName('withdraw')[1];
withdrawBtnChecking.addEventListener('click', withdrawFundsChecking);
