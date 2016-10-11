console.log('app works');

var currentBalance = {
  sav: 0,
  cheq: 0
}

var balanceSavHTML = document.getElementById('balance-sav');
var balanceCheqHTML = document.getElementById('balance-cheq');

var amountInputSav = document.getElementsByTagName('input')[0];
var amountInputCheq = document.getElementsByTagName('input')[1];

var depositBtnSav = document.getElementById('btn-deposit-sav');
var withdrawBtnSav = document.getElementById('btn-withdraw-sav')

var depositBtnCheq = document.getElementById('btn-deposit-cheq');
var withdrawBtnCheq = document.getElementById('btn-withdraw-cheq')

var transactionMsg = document.getElementById('message');

var backgroundSav = document.getElementById('savings');
var backgroundCheq = document.getElementById('cheque');

// opening balances at $0
backgroundSav.style.backgroundColor = 'red'
backgroundCheq.style.backgroundColor = 'red'

function deposit(amount, balance) {
  if (amount > 0) {
    return balance = balance += amount;
  } else {
    return false;
  };
};

function withdraw(amount, balance) {
  if (amount <= balance) {
    return balance = balance -= amount;
  } else {
    return false;
  };
};

// not working - unfinished, rethink logic
function overdraft(amount) {
  var withdrawal1;
  var withdrawal2;
  if (currentBalance.sav > currentBalance.cheq) {
    console.log('currentBalance.sav > currentBalance.cheq');
    withdrawal1 = currentBalance.sav - amount;
    withdrawal2 = currentBalance.cheq + withdrawal1;
    // problems calling function
    withdraw(withdrawal1, currentBalance.sav);
    withdraw(withdrawal2, currentBalance.cheq);
    transactionMsg.innerHTML = 'Your overdraft withdrawal: $'
    // console.log(withdrawal1)
    // console.log(withdrawal2)
  } else if (currentBalance.sav < currentBalance.cheq) {
    console.log('currentBalance.sav < currentBalance.cheq');
    withdrawal1 = currentBalance.cheq - amount;
    withdrawal2 = currentBalance.sav - withdrawal1;
    withdraw(withdrawal1, currentBalance.cheq);
    withdraw(withdrawal2, currentBalance.sav);
    transactionMsg.innerHTML = 'Your overdraft withdrawal: $'
    // console.log(withdrawal1)
    // console.log(withdrawal2)
  } else {
    console.log('equal amounts')
    withdrawal1 = currentBalance.cheq - amount;
    withdrawal2 = currentBalance.sav - amount;
  }
};

// to send new value to html
function updateBalance(account, balance, background) {
  account.innerHTML = '$' + balance.toFixed(2);
  if (balance === 0) {
    background.style.backgroundColor = 'red';
  } else {
    background.style.backgroundColor = 'gray';
  }
};

// buttons
depositBtnSav.addEventListener('click', function() {
  // get input and balance amounts
  var amount = parseFloat(amountInputSav.value);
  var balance = currentBalance.sav;
  var newBal = deposit(amount, balance);
  // make deposit and update account
  updateBalance(balanceSavHTML, newBal, backgroundSav);
  // clear input field
  amountInputSav.value = '';
  transactionMsg.innerHTML = 'Your deposit amount: $' + amount.toFixed(2);
  return currentBalance.sav = newBal;
});

withdrawBtnSav.addEventListener('click', function() {
  var amount = parseFloat(amountInputSav.value);
  var balance = currentBalance.sav;
  // var newBal = withdraw(amount, balance);
  var overdraftAccounts = currentBalance.sav + currentBalance.cheq
  // overdraft
  if (amount > balance && amount < overdraftAccounts) {
    overdraft(amount);
    // console.log('overdraft on');
  } else if (amount > balance && amount > overdraftAccounts) {
    amountInputSav.value = '';
    // console.log('overdraft off');
    transactionMsg.innerHTML = 'You have insufficient funds';
    return false;
    // run as normal
  } else {
    var newBal = withdraw(amount, balance);
    updateBalance(balanceSavHTML, newBal, backgroundSav);
    amountInputSav.value = '';
    transactionMsg.innerHTML = 'Your withdrawal amount: $' + amount.toFixed(2);
    return currentBalance.sav = newBal;
  };
});

depositBtnCheq.addEventListener('click', function() {
  var amount = parseFloat(amountInputCheq.value);
  var balance = currentBalance.cheq;
  var newBal = deposit(amount, balance);
  updateBalance(balanceCheqHTML, newBal, backgroundCheq);
  amountInputCheq.value = '';
  transactionMsg.innerHTML = 'Your deposit amount: $' + amount.toFixed(2);
  return currentBalance.cheq = newBal;
});

withdrawBtnCheq.addEventListener('click', function() {
  var amount = parseFloat(amountInputCheq.value);
  var balance = currentBalance.cheq;
  var newBal = withdraw(amount, balance);
  updateBalance(balanceCheqHTML, newBal);
  transactionMsg.innerHTML = 'Your withdrawal amount: $' +
  amountInputCheq.value = '';
  return currentBalance.cheq = newBal;
});


/*
to do:
- fix overdraft for both accounts
- stop balance 0 from running and throwing an error
- restrict input fields to two decimal places
- remove 'e' from input number
- activate tab out of input and 'enter' to action buttons (convenience)
- refactor code
- style


questions:
- is this how shadowing is applied or should it not be applied?
- will i run in to problems?
- is the alternative to send the variable out each time?


for the next iteration:
- account and time details for transactionMsg
- var transactionNo = [];

recode with module pattern / factory function

  var makeAccount = function(accountName, startingBalance) {

    var name = accountName;
    var balance = startingBalance;
    // var balance = 0;

    return {
      deposit: function(amount) {
        balance += amount;
      },
      getBalance: function() {
        return balance;
      }
    }
  }


tips from DT:
1. do it fast
    - code design
    - separation of concerns
2. do it right
3. do it better


tips from Leon:
- don't store values in the HTML element
- store values in variables and change the HTML element
- simplify if statements
- booleans rock!
*/
