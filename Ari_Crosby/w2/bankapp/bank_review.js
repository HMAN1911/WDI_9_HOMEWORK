//console.log('hi');

var savingsAccount = { // you can instead make a factory function (make account function)
  balance: 0
}

var makeAccount = function (startingBalance, acctName) { // by assigning it a param or two (startingBalance, acctName)it -
//  the allows more initial flexability and D.R.Y. code usability.

  var name = acctName;
  var balance = startingBalance; // this works like a local-global var, as all functions within the main fuction have access to this var.

  return {
      deposit: function (amount) {
        balance = balance + amount;
      },

      getBalance: function() {
        return balance;
      }
  }
}

//=====================================

var accountBalance = 0;

function deposit(amount) {
  accountBalance += amount;
}

function withdraw(amount) {
  if (amount <= accountBalance) {
    accountBalance += amount;
    return true;
  } else {
    return false;
  }
}

// ========================================= logic above is working, now time to update the DOM.

var balanceDiv = document.getElementById('balanceDiv');
var amountInput = document.getElementById('amount');
var depositBtn = document.getElementById('depositBtn');
var withdrawBtn = document.getElementById('withdrawBtn');

function updateBalance () {
  balanceDiv.innerHTML = "$" + accountBalance;
}

updateBalance();

depositBtn.addEventListener('click', function() {
  // get value from the input
  var amount = parseInt(amountInput.value)
  // desposit that amount
  deposit(amount);
  // update amount
  updateBalance();
  // clear input box
  amountInput.value = '';
});

withdrawBtn.addEventListener('click', function() {
  // get value from the input
  var amount = parseInt(amountInput.value)
  // withdraw that amount
  if (withdraw(amount)) {
    updateBalance();
    amountInput.value = '';
      document.body.style.backgroundColor = 'white';
  } else {
      document.body.style.backgroundColor = 'red';
  }
});
