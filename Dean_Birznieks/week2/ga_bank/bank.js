// var helloFunc = function() {
//   console.log('hi there');
// }

// console.log('not working - trouble getting buttons working properly - see logic in comments');
// var withdrawBtn = document.getElementsByClassName('withdrawBtnChecking')[0];
// withdrawBtn.addEventListener('click', helloFunc);
//
// ======================================

// DT Revision
// ==================================

// Function Factory example - simple one that creates objects with existing functions as properties of that object
// var savingsAccount = {
//   balance: 0,
//   deposit: function() {
//
//   }
// }

// Function Factory (Module Pattern) example - better way to create objects with existing functions as properties of that object
// Note - not required - just a nice to have if you need to create a lot of accounts

// var makeAccount = function() {
//
//   var balance = 0;
//
//   return {
//     deposit: function(amount) {
//       balance = balance + amount;
//     },
//
//     getBalance: function() {
//         return balance;
//     }
//   }
// }





var accountBalance = 0;


function deposit(amount) {
  accountBalance += amount;
}


function withdraw(amount) {
  if (amount <= accountBalance) {
    // Note - line below means assign the value of accountBalance minus amount to accountBalance
    accountBalance -= amount;
    return true;
  } else {
    // clear input box
    amountInput.value = '';
    alert("You don't have sufficient funds for that withdrawal");
    return false;

  }
  }

// =============================

var balanceDiv = document.getElementById('balanceDiv');
var amountInput = document.getElementById('amount');
var depositBtn = document.getElementById('depositBtn');

function updateBalance() {
  balanceDiv.innerHTML = accountBalance;
}
updateBalance();

depositBtn.addEventListener('click',function(){
  // get value from the input
  var amount = parseInt(amountInput.value);

  // deposit that amount
  deposit(amount);

  // update balance
  updateBalance();

  // clear input box
  amountInput.value = '';
});


withdrawBtn.addEventListener('click',function(){
  // get value from the input
  var amount = parseInt(amountInput.value);

  // withdraw that amount
  if (withdraw(amount)) {

  // update balance
  updateBalance();

  // clear input box
  amountInput.value = '';

  }
});




// ** Key Requirements **

// Two Accounts - Savings Account (Deposits Only & Overdraft for Cheque Account)
// and Cheque Account (withdraw functionality and Overdraft for Savings Account)
//
// maintain and display balances - balance can't go negative - ignore attempts if attempt to withdraw more than in balance
// Zero balance - background goes RED
// Positive balance - background is Gray
// deposit functionality
// withdraw functionality from ONE of the accounts (Savings)
// user to see changes
//


// ** Process Deposits **

// Start with initial balance of $0 - refer to as previous Balance
// When Deposit button clicked - run function to add input amount to previous balance to get newBalance
// Display newBalance to user

// ** Process withdrawals **

// Maintain running newBalance
// When withdraw button clicked (use event.listeners on button(s) check:
//    if  amount from input box is <= Account 1 balance
//    then
//      Deduct transaction amount from balance and display remaining balance
//    else
//      if withdraw amount is > combined account balances
//      then display message re insufficient funds
//    else
//      reduce Account 1 balance to 0$
//          (display new balance and change Account 1 to red background-color)
//      reduce Account 2 by amount leftover after reducing Account 1 to zero withdraw amount
//          (display new balance for Account 2)

// Note:  User click event.listeners on buttons to trigger functions to do


// _____________________________________________________________________________________________



//
// var startBtn = document.getElementById('start-button');

// var previousBalSavings = 0;
//
// // var btnDepositSavings = document.getElementsByTagName('button')[1];
//
//
// var processDeposit = function(depositAmt,previousBalSavings) {
//   var newBalSavings = parseFloat.transactionAmount + parseFloat.previousBalSavings;
//   return newBalSavings;
// }
//
//
// var depositBtnSavings = document.getElementById('depositBtnSavings');
//   depositBtnSavings.addEventListener('click',processDeposit);


// Kasun
// document.getElementById('balanceSavings').textContent = '1000'
