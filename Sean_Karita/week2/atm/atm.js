var savingsBalance = 0;
var checkingBalance = 0;

var inputS = document.getElementsByClassName('savingsInput');
var savingsBalance = document.getElementsByClassName('savingsBalance');

var inputC = document.getElementsByClassName('checkingInput');
var withdrawCBtn = document.getElementsByClassName('checkingWithdraw');
var depositSCtn = document.getElementsByClassName('checkingDeposit');
var checkingBalance = document.getElementsByClassName('checkingBalance');

var calculateDeposit = function(account, amount) {
  if (amount) {
    if (account === 'savings') {
      savingsBalance += amount;
    }
    if (account === 'checking') {
      checkingBalance += amount;
    }
  }
}

function depositSavingsBtn() {
  calculateDeposit('savings', parseFloat(inputS.value));
}

document.getElementsByClassName('savingsDeposit').addEventListener('click', depositSavingsBtn);

var calculateWithdraw = function(account, amount) {
  if (amount) {
    if (account === 'saving') {
      savingsBalance -= amount;
    } else {
      amount -= savingsBalance;
      savingsBalance = 0
    }
  }
}

function withdrawSavingsBtn() {
  calculateWithdraw('savings', parseFloat(inputS.value));
}

document.getElementsByClassName('savingsWithdraw').addEventListener('click', withdrawSavingsBtn);

function depositCheckingBtn() {
  calculateDeposit('checking', parseFloat(inputC.value));
}

document.getElementsByClassName('checkingDeposit').addEventListener('click', depositCheckingBtn);

function withdrawCheckingBtn() {
  calculateWithdraw('checking', parseFloat(inputC.value));
}

document.getElementsByClassName('checkingWithdraw').addEventListener('click', withdrawCheckingBtn);
