// var savingsAccount = {
//   balance: 0,
//   deposit: function() {
//
//   },
//   withdraw: function() {
//
//   }
// }
// var chequeAccount = {
//
// }

var makeAccount = function(accountName, startingBalance) {

  var name = accountName;
  var balance = startingBalance;
  return {
    deposit: function(amount) {
      balance = balance + amount;;
    },
    getBalance: function() {
      return balance;
    }
  }
}

var accountBalance = 0;

function deposit(amount) {
  accountBalance += amount;
}

function withdraw(amount) {
  if (amount <= accountBalance) {
  accountBalance -= amount;
  return accountBalance;
} else {
  return false;
}
}

// __________

var balanceDiv = document.getElementById("balanceDiv");
var amountInput = document.getElementById("amount");
var depositBtn = document.getElementById("depositBtn");
var withdrawBtn = document.getElementById("withdrawBtn");

function updateBalance() {
  if (accountBalance > 0) {
    document.body.style.backgroundColor="gray"
  }
  balanceDiv.innerHTML = '$' + accountBalance;
}

updateBalance();

depositBtn.addEventListener("click", function() {
  // get value from the input
  var amount = parseInt(amountInput.value)
  // deposit that amount
  deposit(amount);
  // update balance
  updateBalance();
  // clear input box
  amountInput.value = ""
});
// var amountInput =
// var depositBtn =

withdrawBtn.addEventListener("click", function() {
  // get value from input
  var amount = parseInt(amountInput.value)
  // withdraw that amount
  if (withdraw(amount)) {
    // update balance
    updateBalance();
    // clear input box
    amountInput.value = ""
  } else {
    document.body.style.backgroundColor="red";
  }
});
