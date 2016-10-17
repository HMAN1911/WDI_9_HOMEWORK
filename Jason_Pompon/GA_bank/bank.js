// GA Bank ATM App
//
// Summary
//
// This lab will help you practice JavaScript functions and manipulating the DOM. You'll be selecting elements, manipulating HTML, and manipulating style along with building out the logic using JavaScript.
//
// Specification:
//
// Keep track of the checking and savings balances somewhere
// Add functionality so that a user can deposit money into one of the bank accounts.
// Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
// Add functionality so that a user can withdraw money from one of the bank accounts.
// Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
// Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.
// When the balance of the bank account is $0 the background of that bank account should be red. It should be gray when there is money in the account
// What happens when the user wants to withdraw more money from the checking account than is in the account? These accounts have overdraft protection, so if a withdrawal can be covered by the balances in both accounts, take the checking balance down to $0 and take the rest of the withdrawal from the savings account. If the withdrawal amount is more than the combined account balance, ignore it.
// Make sure there is overdraft protection going both ways.
// Are there ways to refactor your code to make it DRYer

// ***** separation of concerns ******

// module patter to create objects *** need to review not sure how it works*
// var makeAccount = function(startingBalance) {
//   var balance = startingBalance;
//   return {
//     deposit: function(amount) {
//       balance = balance + amount;
//     },
//     getBalance: function() {
//       return balance;
//     }
//   }
// }

var accountBalance = 0;

function deposit(amount) {
  accountBalance += amount;
}

function withdraw(amount) {
  if (amount <= accountBalance) {
    accountBalance -= amount;
    return true;
  } else {
    return false;
  }
}




// ********    DOM     ***********

var balanceDiv = document.getElementById('balanceDiv');
var amountInput = document.getElementById('amountInput');
var depositBtn = document.getElementById('depositBtn');
var withdrawBtn = document.getElementById('withdrawBtn');

function updateBalance() {
  balanceDiv.innerHTML = '$' + accountBalance + '.00';
}

updateBalance();

depositBtn.addEventListener('click', function(){
  // get value from the input
  var amount = parseInt(amountInput.value);
  //deposit that amount
  deposit(amount);
  //update balance
  updateBalance();
  // clear input box
  amountInput.value = '';
})

withdrawBtn.addEventListener('click', function() {
  // get value from input
  var amount = parseInt(amountInput.value);
  //deposit that amount
  if (withdraw(amount)) {
    updateBalance();
    // clear input box
    amountInput.value = '';
  } else {
    document.body.style.background = '#00688f';
  }
})
